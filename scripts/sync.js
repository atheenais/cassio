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

/* ── Auth : OTP sans magic link (compatible iOS PWA) ────── */
async function sendOTP(email) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, create_user: true })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error_description || err.msg || 'Erreur envoi du code');
  }
}

async function verifyOTP(email, token) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'email', email, token })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error_description || err.msg || 'Code invalide ou expiré');
  }
  const data = await res.json();
  setSyncSession({
    access_token:  data.access_token,
    refresh_token: data.refresh_token,
    expires_at:    Math.floor(Date.now() / 1000) + (data.expires_in || 3600),
    email:         data.user.email
  });
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

/* Progression : garde le meilleur score par thème (totaux identiques = même format) */
function _mergeProgress(local, remote) {
  const result = JSON.parse(JSON.stringify(local || {}));
  for (const sId in (remote || {})) {
    if (!result[sId]) result[sId] = {};
    for (const tId in remote[sId]) {
      const rem = remote[sId][tId];
      const loc = result[sId][tId];
      if (!loc || (loc.total === rem.total && rem.score > loc.score)) {
        result[sId][tId] = rem;
      }
    }
  }
  return result;
}

/* Erreurs : garde le wrongCount le plus élevé par question */
function _mergeMistakes(local, remote) {
  const map = new Map();
  const key = m => `${m.sId}|${m.tId}|${m.qi}`;
  const all = [...(Array.isArray(local) ? local : []), ...(Array.isArray(remote) ? remote : [])];
  for (const m of all) {
    const k = key(m);
    if (!map.has(k) || m.wrongCount > map.get(k).wrongCount) map.set(k, m);
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

/* ── Sync montant : upsert d'UN profil vers Supabase ───── */
async function syncUp(profileId) {
  if (!profileId || profileId === 'guest') return;
  if (!await _refreshIfNeeded()) return;
  const data = _gatherProfile(profileId);
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

    // Progression
    LEVEL_IDS.forEach(lvl => {
      if (!remote.progressByLevel?.[lvl]) return;
      const key = `cm2-progress-${pid}-${lvl}`;
      let local = {};
      try { local = JSON.parse(localStorage.getItem(key) || '{}'); } catch {}
      localStorage.setItem(key, JSON.stringify(_mergeProgress(local, remote.progressByLevel[lvl])));
    });

    // Sessions : on travaille sur liveSessions (pas getSessions()) pour éviter le cache périmé
    const others = liveSessions.filter(s => s.profile !== pid);
    const local  = liveSessions.filter(s => s.profile === pid);
    const merged = _mergeSessions(local, remote.sessions || []);
    liveSessions = [...others, ...merged];

    // Erreurs
    LEVEL_IDS.forEach(lvl => {
      if (!remote.mistakesByLevel?.[lvl]) return;
      const key = `cm2-mistakes-${pid}-${lvl}`;
      let local = [];
      try { local = JSON.parse(localStorage.getItem(key) || '[]'); } catch {}
      localStorage.setItem(key, JSON.stringify(_mergeMistakes(local, remote.mistakesByLevel[lvl])));
    });

    // Personnalisation : conserve le local s'il existe déjà
    if (remote.customization && !localStorage.getItem(`cm2-customization-${pid}`)) {
      localStorage.setItem(`cm2-customization-${pid}`, JSON.stringify(remote.customization));
    }
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
let _syncStep  = 'init';   // 'init' | 'otp-sent' | 'connected'
let _syncEmail = '';

function openSyncModal() {
  _syncStep = isSyncConnected() ? 'connected' : 'init';
  _renderSyncModal();
}
function closeSyncModal() {
  const el = document.getElementById('sync-overlay');
  if (el) el.remove();
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
    const email = getSyncEmail() || '—';
    body = `
      <div class="sync-status-row">
        <span class="sync-dot"></span>
        <span>Connecté · <strong>${email}</strong></span>
      </div>
      <button class="sync-btn primary" id="sync-now-btn" onclick="_syncManual()">⟳ Synchroniser maintenant</button>
      <button class="sync-btn danger"  onclick="_syncDisconnect()">Se déconnecter</button>`;
  } else if (_syncStep === 'otp-sent') {
    body = `
      <p class="sync-hint">Un code à 6 chiffres a été envoyé à <strong>${_syncEmail}</strong>. Colle-le ci-dessous.</p>
      <input id="sync-otp" class="sync-input" type="text" inputmode="numeric" maxlength="6"
             placeholder="123456" autocomplete="one-time-code">
      <button class="sync-btn primary" id="sync-verify-btn" onclick="_syncVerify()">Valider le code</button>
      <button class="sync-btn ghost"   onclick="_syncBack()">← Changer d'adresse</button>`;
  } else {
    body = `
      <p class="sync-hint">Synchronise les profils d'Elias et Leïla sur tous tes appareils. Saisis l'adresse email du compte parent.</p>
      <input id="sync-email-in" class="sync-input" type="email" inputmode="email"
             placeholder="ton@email.fr" value="${_syncEmail}" autocomplete="email">
      <button class="sync-btn primary" id="sync-send-btn" onclick="_syncSend()">Envoyer un code</button>`;
  }

  overlay.innerHTML = `
    <div class="sync-modal" role="dialog" aria-modal="true" aria-label="Synchronisation">
      <button class="sync-modal-close" onclick="closeSyncModal()" aria-label="Fermer">✕</button>
      <div class="sync-modal-icon">☁️</div>
      <div class="sync-modal-title">Synchronisation</div>
      <div class="sync-modal-body" id="sync-modal-body">${body}</div>
    </div>`;

  const first = document.getElementById('sync-email-in') || document.getElementById('sync-otp');
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

async function _syncSend() {
  const el = document.getElementById('sync-email-in');
  if (!el) return;
  const email = el.value.trim();
  if (!email || !email.includes('@')) { _syncSetError('Adresse email invalide.'); return; }
  _syncEmail = email;
  _syncSetLoading('sync-send-btn', 'Envoi…');
  try {
    await sendOTP(email);
    _syncStep = 'otp-sent';
    _renderSyncModal();
  } catch (e) {
    const btn = document.getElementById('sync-send-btn');
    if (btn) { btn.disabled = false; btn.textContent = 'Envoyer un code'; }
    _syncSetError(e.message || 'Erreur réseau, réessaie.');
  }
}

async function _syncVerify() {
  const el = document.getElementById('sync-otp');
  if (!el) return;
  const code = el.value.replace(/\s/g, '');
  if (code.length !== 6) { _syncSetError('Le code doit faire 6 chiffres.'); return; }
  _syncSetLoading('sync-verify-btn', 'Vérification…');
  try {
    await verifyOTP(_syncEmail, code);
    _syncStep = 'connected';
    _renderSyncModal();
    // Pull immédiat après connexion
    _syncSetLoading('sync-now-btn', '⟳ Synchronisation…');
    const ok = await syncDown();
    if (ok) render();
    const btn = document.getElementById('sync-now-btn');
    if (btn) { btn.disabled = false; btn.textContent = ok ? '✓ Synchronisé !' : '⟳ Synchroniser maintenant'; }
  } catch (e) {
    const btn = document.getElementById('sync-verify-btn');
    if (btn) { btn.disabled = false; btn.textContent = 'Valider le code'; }
    _syncSetError(e.message || 'Code invalide, réessaie.');
  }
}

async function _syncManual() {
  _syncSetLoading('sync-now-btn', '⟳ Sync…');
  try {
    await Promise.all(PROFILES.map(p => syncUp(p.id)));
    const ok = await syncDown();
    if (ok) render();
    const btn = document.getElementById('sync-now-btn');
    if (btn) { btn.disabled = false; btn.textContent = ok ? '✓ Synchronisé !' : '⟳ Synchroniser maintenant'; }
  } catch {
    const btn = document.getElementById('sync-now-btn');
    if (btn) { btn.disabled = false; btn.textContent = '⟳ Synchroniser maintenant'; }
    _syncSetError('Erreur réseau, réessaie.');
  }
}

function _syncDisconnect() {
  if (!confirm('Se déconnecter ? Les données locales sont conservées.')) return;
  syncSignOut();
  closeSyncModal();
}
function _syncBack() {
  _syncStep = 'init';
  _renderSyncModal();
}
