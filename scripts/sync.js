/* ═══════════════════════════════════════════════════
   SYNCHRONISATION SUPABASE — Cassio
   Stratégie : localStorage reste source de vérité.
   On pousse après chaque quiz, on tire au lancement.
   Tous les appels réseau sont fire-and-forget : une
   panne réseau ne bloque jamais l'utilisateur.
   ═══════════════════════════════════════════════════ */

const SUPABASE_URL     = 'https://wewxyfnpkdkbopdspapa.supabase.co';
const SUPABASE_ANON    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indld3h5Zm5wa2RrYm9wZHNwYXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzM2NTgsImV4cCI6MjA5Njk0OTY1OH0.3VligfPNIyvQSoeODyM8CSrySBLNQL4XhngjDjECJCc';
const SYNC_SESSION_KEY = 'cassio-sync-session';

/* ── Session OAuth ─────────────────────────────────────── */
function getSyncSession() {
  try { return JSON.parse(localStorage.getItem(SYNC_SESSION_KEY)); } catch { return null; }
}
function setSyncSession(s) {
  if (s) localStorage.setItem(SYNC_SESSION_KEY, JSON.stringify(s));
  else   localStorage.removeItem(SYNC_SESSION_KEY);
}
function isSyncConnected() {
  const s = getSyncSession();
  if (!s || !s.access_token) return false;
  if (s.expires_at && Math.floor(Date.now() / 1000) > s.expires_at) return false;
  return true;
}
function getSyncEmail() {
  const s = getSyncSession();
  return s ? (s.email || null) : null;
}

/* ── HTTP helper ────────────────────────────────────────── */
async function _supaFetch(path, opts = {}) {
  const s = getSyncSession();
  const headers = {
    'apikey': SUPABASE_ANON,
    'Content-Type': 'application/json',
    ...(s ? { 'Authorization': `Bearer ${s.access_token}` } : {}),
    ...(opts.headers || {})
  };
  return fetch(SUPABASE_URL + path, { ...opts, headers });
}

/* ── Auth : email + mot de passe (compatible iOS PWA, zéro email) ── */

function _storeSession(data) {
  setSyncSession({
    access_token:  data.access_token,
    refresh_token: data.refresh_token,
    expires_at:    Math.floor(Date.now() / 1000) + (data.expires_in || 3600),
    email:         data.user.email
  });
}

/* Tente la connexion, crée le compte automatiquement si inexistant.
   Distingue trois cas : connexion OK, mauvais mot de passe, nouveau compte. */
async function signInOrUp(email, password) {
  // 1. Essai connexion
  const signInRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (signInRes.ok) { _storeSession(await signInRes.json()); return; }

  const signInErr = await signInRes.json().catch(() => ({}));
  const isInvalidCreds = signInRes.status === 400 &&
    /invalid login/i.test(signInErr.error_description || signInErr.msg || '');
  if (!isInvalidCreds) throw new Error(signInErr.error_description || signInErr.msg || 'Erreur de connexion');

  // 2. Tentative de création (nous dira si le compte existe déjà ou non)
  const signUpRes = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!signUpRes.ok) {
    const err = await signUpRes.json().catch(() => ({}));
    // Le compte existe → c'est un mauvais mot de passe, pas un compte absent
    if (/already registered|already exists/i.test(err.error_description || err.msg || '')) {
      throw new Error('Mot de passe incorrect.');
    }
    throw new Error(err.error_description || err.msg || 'Erreur création du compte');
  }
  const signUpData = await signUpRes.json();
  // Pas de token → la confirmation email est encore activée dans Supabase.
  // Message générique pour l'utilisateur, détail technique en console pour le dev.
  if (!signUpData.access_token) {
    console.warn('[sync] Inscription sans token : désactive "Confirm email" dans Supabase → Auth → Settings.');
    throw new Error('La synchronisation est momentanément indisponible.');
  }
  _storeSession(signUpData);
}

/* Rafraîchit le token si il expire dans moins de 5 min. */
async function _refreshIfNeeded() {
  const s = getSyncSession();
  if (!s) return false;
  if (!s.expires_at || (s.expires_at - Math.floor(Date.now() / 1000)) > 300) return true;
  if (!s.refresh_token) { setSyncSession(null); return false; }
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: s.refresh_token })
  });
  if (!res.ok) { setSyncSession(null); return false; }
  const data = await res.json();
  setSyncSession({
    access_token:  data.access_token,
    refresh_token: data.refresh_token,
    expires_at:    Math.floor(Date.now() / 1000) + (data.expires_in || 3600),
    email:         s.email
  });
  return true;
}

function syncSignOut() { setSyncSession(null); }

/* ── Helpers de fusion ──────────────────────────────────── */

/* Sessions : déduplication par (profile+timestamp+subjId+topicId), plafond 200 */
function _mergeSessions(local, remote) {
  const all = [...(Array.isArray(local) ? local : []), ...(Array.isArray(remote) ? remote : [])];
  const seen = new Set();
  const out  = [];
  for (const s of all) {
    const k = `${s.profile}|${s.timestamp}|${s.subjId}|${s.topicId}`;
    if (!seen.has(k)) { seen.add(k); out.push(s); }
  }
  out.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  return out.slice(0, 200);
}

/* Choisit la meilleure entrée de score entre deux candidats pour un thème donné.
   Règle, dans l'ordre :
   1. Une entrée AU FORMAT ACTUEL du programme l'emporte sur une entrée obsolète
      (ex : 7/10 actuel bat un ancien 5/5 sur un thème désormais à 10 questions).
   2. À fraîcheur égale et total identique : le meilleur score gagne.
   3. Sinon (formats différents, aucun ne correspond) : on garde le local par défaut. */
function _pickBetterScore(loc, rem, sId, tId, lvl) {
  if (!loc) return rem;
  if (!rem) return loc;
  let curTotal = null;
  try { const t = getTopic(sId, tId, lvl); if (t) curTotal = t.questions.length; } catch {}
  const locFresh = curTotal !== null && loc.total === curTotal;
  const remFresh = curTotal !== null && rem.total === curTotal;
  if (locFresh && !remFresh) return loc;
  if (remFresh && !locFresh) return rem;
  if (loc.total === rem.total) return rem.score > loc.score ? rem : loc;
  return loc;
}

/* Vrai si v est un objet simple (ni null, ni tableau, ni primitive).
   Garde-fou contre une ligne serveur malformée (string/nombre) qui ferait
   itérer for..in sur des index parasites. */
function _isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

/* Progression : fusionne deux arbres { sId: { tId: {score,total} } } pour un niveau. */
function _mergeProgress(local, remote, lvl) {
  const result = JSON.parse(JSON.stringify(_isPlainObject(local) ? local : {}));
  if (!_isPlainObject(remote)) return result;
  for (const sId in remote) {
    if (!_isPlainObject(remote[sId])) continue;
    if (!result[sId]) result[sId] = {};
    for (const tId in remote[sId]) {
      const rem = remote[sId][tId];
      if (!_isPlainObject(rem) || typeof rem.score !== 'number' || typeof rem.total !== 'number') continue;
      result[sId][tId] = _pickBetterScore(result[sId][tId], rem, sId, tId, lvl);
    }
  }
  return result;
}

/* Normalise une customization (locale ou serveur) : nom borné à 20 caractères,
   emoji restreint à la liste autorisée. Défense en profondeur contre une valeur
   serveur arbitraire (l'échappement à l'affichage reste la défense primaire). */
function _sanitizeCustomization(c) {
  if (!_isPlainObject(c)) return null;
  const out = {};
  if (typeof c.name === 'string' && c.name.trim()) out.name = c.name.trim().slice(0, 20);
  if (typeof c.emoji === 'string' &&
      (typeof AVATAR_EMOJIS === 'undefined' || AVATAR_EMOJIS.includes(c.emoji))) out.emoji = c.emoji;
  return Object.keys(out).length ? out : null;
}

/* Fusionne deux instantanés de profil (forme _gatherProfile).
   `a` est prioritaire (typiquement le local) pour la personnalisation. */
function _mergeProfileData(a, b) {
  const out = {
    progressByLevel: {},
    mistakesByLevel: {},
    sessions: _mergeSessions(a.sessions || [], b.sessions || []),
    customization: _sanitizeCustomization(a.customization) || _sanitizeCustomization(b.customization)
  };
  const levels = new Set([
    ...Object.keys(a.progressByLevel || {}), ...Object.keys(b.progressByLevel || {}),
    ...Object.keys(a.mistakesByLevel || {}), ...Object.keys(b.mistakesByLevel || {})
  ]);
  for (const lvl of levels) {
    out.progressByLevel[lvl] = _mergeProgress(a.progressByLevel?.[lvl] || {}, b.progressByLevel?.[lvl] || {}, lvl);
    out.mistakesByLevel[lvl] = _mergeMistakes(a.mistakesByLevel?.[lvl] || [], b.mistakesByLevel?.[lvl] || []);
  }
  return out;
}

/* Erreurs : garde le wrongCount le plus élevé par question.
   wrongCount est normalisé à (… || 1) des deux côtés, comme recordMistake (state.js),
   pour ne pas fausser la pondération si une entrée serveur a un compteur absent. */
function _mergeMistakes(local, remote) {
  const map = new Map();
  const key = m => `${m.sId}|${m.tId}|${m.qi}`;
  const all = [...(Array.isArray(local) ? local : []), ...(Array.isArray(remote) ? remote : [])];
  for (const m of all) {
    if (!_isPlainObject(m) || m.sId === undefined || m.tId === undefined || m.qi === undefined) continue;
    const k = key(m);
    const prev = map.get(k);
    if (!prev || (m.wrongCount || 1) > (prev.wrongCount || 1)) map.set(k, m);
  }
  return [...map.values()];
}

/* ── Collecte locale d'un profil (tous niveaux) ────────── */
function _gatherProfile(profileId) {
  const progressByLevel  = {};
  const mistakesByLevel  = {};
  LEVEL_IDS.forEach(lvl => {
    try {
      const p = localStorage.getItem(`cm2-progress-${profileId}-${lvl}`);
      if (p) progressByLevel[lvl] = JSON.parse(p);
    } catch {}
    try {
      const m = localStorage.getItem(`cm2-mistakes-${profileId}-${lvl}`);
      if (m) mistakesByLevel[lvl] = JSON.parse(m);
    } catch {}
  });
  const sessions = getSessions().filter(s => s.profile === profileId);
  let customization = null;
  try { customization = JSON.parse(localStorage.getItem(`cm2-customization-${profileId}`)); } catch {}
  return { progressByLevel, sessions, mistakesByLevel, customization };
}

/* ── Sync montant : upsert d'UN profil vers Supabase ─────
   Read-modify-write : on lit d'abord l'état serveur et on le fusionne avec le
   local AVANT d'écrire. Sans cela, un appareil pousserait un état partiel qui
   écraserait les données qu'un autre appareil aurait poussées entre-temps. */
async function syncUp(profileId) {
  if (!profileId || profileId === 'guest') return;
  if (!await _refreshIfNeeded()) return;
  const local = _gatherProfile(profileId);
  let data = local;
  try {
    const getRes = await _supaFetch(`/rest/v1/profiles_sync?select=data&profile_id=eq.${profileId}`);
    if (getRes.ok) {
      const rows = await getRes.json();
      const remote = rows[0]?.data;
      if (remote) data = _mergeProfileData(local, remote);
    }
  } catch {} // pas de ligne serveur lisible : on pousse le local tel quel
  const res = await _supaFetch('/rest/v1/profiles_sync', {
    method: 'POST',
    headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({ profile_id: profileId, data, updated_at: new Date().toISOString() })
  });
  if (!res.ok) throw new Error(`syncUp ${profileId} failed: ${res.status}`);
}

/* ── Sync descendant : pull + fusion dans le localStorage ─ */
async function syncDown() {
  if (!await _refreshIfNeeded()) return false;
  const res = await _supaFetch('/rest/v1/profiles_sync?select=profile_id,data');
  if (!res.ok) return false;
  const rows = await res.json();

  // Les sessions sont lues UNE SEULE FOIS avant la boucle et maintenues à jour
  // dans une variable locale. Évite de lire un cache périmé à la 2e itération
  // (bug : les sessions d'Elias auraient écrasé celles de Leïla, ou vice-versa).
  let liveSessions = getSessions().slice();

  for (const row of rows) {
    const { profile_id: pid, data: remote } = row;
    if (!remote || pid === 'guest') continue;

    // État local de ce profil — sessions prises depuis liveSessions (pas le cache)
    const local = _gatherProfile(pid);
    local.sessions = liveSessions.filter(s => s.profile === pid);

    // Fusion unifiée (mêmes règles que syncUp), local prioritaire
    const merged = _mergeProfileData(local, remote);

    // Réécriture progression (uniquement les niveaux non vides)
    LEVEL_IDS.forEach(lvl => {
      const p = merged.progressByLevel[lvl];
      if (p && Object.keys(p).length) localStorage.setItem(`cm2-progress-${pid}-${lvl}`, JSON.stringify(p));
    });
    // Réécriture erreurs
    LEVEL_IDS.forEach(lvl => {
      const m = merged.mistakesByLevel[lvl];
      if (m && m.length) localStorage.setItem(`cm2-mistakes-${pid}-${lvl}`, JSON.stringify(m));
    });
    // Personnalisation : merged garde déjà le local s'il existait
    if (merged.customization) {
      localStorage.setItem(`cm2-customization-${pid}`, JSON.stringify(merged.customization));
    }
    // Sessions : on remplace la tranche de ce profil dans la liste globale
    liveSessions = [...liveSessions.filter(s => s.profile !== pid), ...merged.sessions];
  }

  // Écriture unique des sessions fusionnées après la boucle
  localStorage.setItem('cm2-sessions', JSON.stringify(liveSessions));
  _invalidateCache('all');
  return true;
}

/* ── Hooks appelés depuis app.js ────────────────────────── */

/* Appelé au boot : pull silencieux si déjà connecté */
async function initSync() {
  if (!isSyncConnected()) return;
  syncDown().catch(() => {});
}

/* Appelé après chaque quiz (goScore) : push du profil actif */
function syncUpCurrent() {
  if (!S.profile || !isSyncConnected()) return;
  syncUp(S.profile).catch(() => {});
}

/* ── UI : modale de synchronisation ─────────────────────── */
let _syncStep  = 'init';   // 'init' | 'connected'
let _syncEmail = '';
let _syncBusy  = false;          // garde anti-double-soumission
let _syncPrevFocus = null;       // élément à re-focusser à la fermeture

function _syncKeyHandler(e) {
  if (e.key === 'Escape') { e.preventDefault(); closeSyncModal(); }
}

function openSyncModal() {
  _syncStep = isSyncConnected() ? 'connected' : 'init';
  _syncPrevFocus = document.activeElement;
  document.body.style.overflow = 'hidden';        // empêche le scroll du fond
  document.addEventListener('keydown', _syncKeyHandler);
  _renderSyncModal();
}
function closeSyncModal() {
  const el = document.getElementById('sync-overlay');
  if (el) el.remove();
  document.body.style.overflow = '';
  document.removeEventListener('keydown', _syncKeyHandler);
  if (_syncPrevFocus && _syncPrevFocus.focus) _syncPrevFocus.focus();
  _syncPrevFocus = null;
}

function _renderSyncModal() {
  let overlay = document.getElementById('sync-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id        = 'sync-overlay';
    overlay.className = 'sync-overlay';
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSyncModal(); });
    document.body.appendChild(overlay);
  }

  let body = '';
  if (_syncStep === 'connected') {
    const email = escapeHtml(getSyncEmail() || '—');
    body = `
      <div class="sync-status-row">
        <span class="sync-dot"></span>
        <span>Connecté · <strong>${email}</strong></span>
      </div>
      <button class="sync-btn primary" id="sync-now-btn" onclick="_syncManual()">⟳ Synchroniser maintenant</button>
      <button class="sync-btn danger"  onclick="_syncDisconnect()">Se déconnecter</button>`;
  } else {
    body = `
      <p class="sync-parent-tag">🔒 Réglage pour les parents</p>
      <p class="sync-hint">Synchronisez la progression d'Elias et Leïla entre vos appareils. Créez un compte ou connectez-vous — aucun email n'est envoyé.</p>
      <input id="sync-email-in" class="sync-input" type="email" inputmode="email"
             placeholder="votre@email.fr" value="${escapeAttr(_syncEmail)}" autocomplete="email">
      <input id="sync-pwd-in" class="sync-input" type="password"
             placeholder="Mot de passe (6 caractères min.)" autocomplete="current-password"
             onkeydown="if(event.key==='Enter')_syncConnect()">
      <button class="sync-btn primary" id="sync-connect-btn" onclick="_syncConnect()">Se connecter</button>
      <p class="sync-warn">⚠️ Notez bien ce mot de passe : sans email de récupération, il n'existe aucun moyen de le réinitialiser.</p>`;
  }

  overlay.innerHTML = `
    <div class="sync-modal" role="dialog" aria-modal="true" aria-label="Synchronisation">
      <button class="sync-modal-close" onclick="closeSyncModal()" aria-label="Fermer">✕</button>
      <div class="sync-modal-icon" aria-hidden="true">☁️</div>
      <div class="sync-modal-title">Synchronisation</div>
      <div class="sync-modal-body" id="sync-modal-body">${body}</div>
    </div>`;

  const first = document.getElementById('sync-email-in') || document.getElementById('sync-now-btn');
  if (first) setTimeout(() => first.focus(), 80);
}

function _syncSetLoading(btnId, label) {
  const btn = document.getElementById(btnId);
  if (btn) { btn.disabled = true; btn.textContent = label; }
}
function _syncSetError(msg) {
  const body = document.getElementById('sync-modal-body');
  if (!body) return;
  let err = body.querySelector('.sync-error');
  if (!err) { err = document.createElement('p'); err.className = 'sync-error'; body.appendChild(err); }
  err.textContent = msg;
}

/* Remet le bouton "Synchroniser maintenant" à son libellé normal après un succès. */
function _syncResetNowBtn(label) {
  const btn = document.getElementById('sync-now-btn');
  if (!btn) return;
  btn.disabled = false;
  btn.textContent = label;
  if (label.startsWith('✓')) setTimeout(() => {
    const b = document.getElementById('sync-now-btn');
    if (b) b.textContent = '⟳ Synchroniser maintenant';
  }, 2000);
}

/* Message d'erreur réseau adapté : distingue hors-ligne d'une vraie panne. */
function _syncNetError() {
  _syncSetError(navigator.onLine === false
    ? "Tu n'es pas connecté à Internet."
    : 'Erreur réseau, réessaie.');
}

async function _syncConnect() {
  if (_syncBusy) return;
  const emailEl = document.getElementById('sync-email-in');
  const pwdEl   = document.getElementById('sync-pwd-in');
  if (!emailEl || !pwdEl) return;
  const email = emailEl.value.trim();
  const pwd   = pwdEl.value;
  if (!email || !email.includes('@')) { _syncSetError('Adresse email invalide.'); return; }
  if (pwd.length < 6) { _syncSetError('Le mot de passe doit faire au moins 6 caractères.'); return; }
  _syncEmail = email;
  _syncBusy = true;
  _syncSetLoading('sync-connect-btn', 'Connexion…');
  try {
    await signInOrUp(email, pwd);
    _syncStep = 'connected';
    _renderSyncModal();
    // Pull immédiat après connexion
    _syncSetLoading('sync-now-btn', '⟳ Synchronisation…');
    const ok = await syncDown();
    if (ok) render();
    _syncResetNowBtn(ok ? '✓ Synchronisé !' : '⟳ Synchroniser maintenant');
  } catch (e) {
    const btn = document.getElementById('sync-connect-btn');
    if (btn) { btn.disabled = false; btn.textContent = 'Se connecter'; }
    if (e && e.message) _syncSetError(e.message); else _syncNetError();
  } finally {
    _syncBusy = false;
  }
}

async function _syncManual() {
  if (_syncBusy) return;
  _syncBusy = true;
  _syncSetLoading('sync-now-btn', '⟳ Sync…');
  try {
    await Promise.all(PROFILES.map(p => syncUp(p.id)));
    const ok = await syncDown();
    if (ok) render();
    _syncResetNowBtn(ok ? '✓ Synchronisé !' : '⟳ Synchroniser maintenant');
  } catch {
    _syncResetNowBtn('⟳ Synchroniser maintenant');
    _syncNetError();
  } finally {
    _syncBusy = false;
  }
}

function _syncDisconnect() {
  if (!confirm('Se déconnecter ? Les données locales sont conservées.')) return;
  syncSignOut();
  closeSyncModal();
  render(); // rafraîchit le bouton ☁️ sur l'écran de sélection de profil
}
