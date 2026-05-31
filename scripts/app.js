/* ═══════════════════════════════════════════════════
   RÉINITIALISATION
   ═══════════════════════════════════════════════════ */
function resetProgress() {
  if (confirm('Effacer toute la progression de ' + getProfile().name + ' ? Cette action est irréversible.')) {
    localStorage.removeItem(progressKey());
    _invalidateCache('progress');
    goHome();
  }
}
function resetHistory() {
  if (confirm("Effacer tout l'historique de " + getProfile().name + " ?")) {
    const remaining = getSessions().filter(s => s.profile !== S.profile);
    localStorage.setItem('cm2-sessions', JSON.stringify(remaining));
    _invalidateCache('sessions');
    goHistory();
  }
}

/* ═══════════════════════════════════════════════════
   EXPORT / IMPORT JSON
   ═══════════════════════════════════════════════════ */
function exportData() {
  const prof = getProfile();
  if (!prof) return;
  if (isGuest()) { alert("L'export est désactivé en mode invité."); return; }
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    profile: { id: prof.id, name: prof.name },
    progress: getProgress(),
    sessions: getSessions().filter(s => s.profile === S.profile)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cm2-${prof.id}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport() {
  if (isGuest()) { alert("L'import est désactivé en mode invité."); return; }
  document.getElementById('import-file').click();
}

function handleImport(ev) {
  const file = ev.target.files && ev.target.files[0];
  ev.target.value = ''; // reset pour pouvoir réimporter le même fichier
  if (!file) return;
  if (isGuest()) { alert("L'import est désactivé en mode invité."); return; }
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.progress || typeof data.progress !== 'object') {
        throw new Error('Format JSON invalide (champ "progress" manquant).');
      }
      // Filtrer : on ne garde que les matières et thèmes encore présents dans le programme actuel.
      // Cela évite de stocker des entrées orphelines qui feraient planter les écrans qui consultent la progression.
      const cleanProgress = {};
      let kept = 0, dropped = 0;
      for (const sId in data.progress) {
        const subj = getSubject(sId);
        if (!subj) { dropped += Object.keys(data.progress[sId] || {}).length; continue; }
        for (const tId in data.progress[sId]) {
          const topic = getTopic(sId, tId);
          if (!topic) { dropped++; continue; }
          if (!cleanProgress[sId]) cleanProgress[sId] = {};
          cleanProgress[sId][tId] = data.progress[sId][tId];
          kept++;
        }
      }
      // Filtrer aussi les sessions
      const rawSessions = Array.isArray(data.sessions) ? data.sessions.filter(s => s && typeof s === 'object') : [];
      const cleanSessions = rawSessions.filter(s => {
        if (s.subjId === (typeof RANDOM_SUBJ_ID !== 'undefined' ? RANDOM_SUBJ_ID : '__random__')) return true; // sessions Quiz aléatoire toujours valides
        return getSubject(s.subjId) && getTopic(s.subjId, s.topicId);
      });
      const droppedSessions = rawSessions.length - cleanSessions.length;

      const prof = getProfile();
      let msg = `Importer les données dans le profil ${prof.name} ?\n\n`
              + `• Progression : ${kept} thèmes\n`
              + `• Sessions   : ${cleanSessions.length}\n`;
      if (dropped > 0 || droppedSessions > 0) {
        msg += `\n⚠️ ${dropped} entrée${dropped > 1 ? 's' : ''} de progression et ${droppedSessions} session${droppedSessions > 1 ? 's' : ''}\n`
             + `seront ignorées (matières/thèmes plus présents dans le programme actuel).\n`;
      }
      msg += `\n⚠️ La progression actuelle de ${prof.name} sera remplacée.`;
      if (!confirm(msg)) return;

      // Remplace la progression du profil actif (nettoyée)
      localStorage.setItem(progressKey(), JSON.stringify(cleanProgress));
      // Fusionne les sessions : on garde celles des autres profils, on remplace celles du profil courant
      const others = getSessions().filter(s => s.profile !== S.profile);
      const imported = cleanSessions.map(s => ({ ...s, profile: S.profile })); // force le profil cible
      const merged = [...others, ...imported].slice(-200);
      localStorage.setItem('cm2-sessions', JSON.stringify(merged));
      _invalidateCache('all');

      alert('Importation réussie !');
      goHome();
    } catch (err) {
      alert("Erreur d'importation : " + err.message);
    }
  };
  reader.readAsText(file);
}

/* ═══════════════════════════════════════════════════
   MODE CLAIR / SOMBRE
   ═══════════════════════════════════════════════════ */
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '🌙';
  }
}
function toggleTheme() {
  const isLight = document.body.classList.contains('light');
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('cm2-theme', next);
}
function loadTheme() {
  const saved = localStorage.getItem('cm2-theme');
  applyTheme(saved === 'light' ? 'light' : 'dark');
}

/* ═══════════════════════════════════════════════════
   EFFET CONFETTIS (sans-faute)
   ═══════════════════════════════════════════════════ */
function launchConfetti() {
  const colors = ['#4f9cf9', '#a78bfa', '#34d399', '#fbbf24', '#fb923c', '#f472b6', '#2dd4bf', '#ec4899'];
  const container = document.createElement('div');
  container.className = 'confetti-container';
  for (let i = 0; i < 90; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = (Math.random() * 100) + '%';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.animationDuration = (2 + Math.random() * 2.5) + 's';
    c.style.width = (6 + Math.random() * 8) + 'px';
    c.style.height = (10 + Math.random() * 8) + 'px';
    container.appendChild(c);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 5000);
}

/* ═══════════════════════════════════════════════════
   ANIMATIONS DE RÉCOMPENSE (bonne réponse)
   Sobres : durées courtes, amplitudes modérées.
   ═══════════════════════════════════════════════════ */

/* Orchestrateur : appelé sur chaque bonne réponse depuis qValidate.
   qi = index de la question, streak = nombre de bonnes réponses consécutives. */
function rewardCorrect(qi, streak) {
  floatPlusXP(qi);          // 1. "+10" qui flotte
  bounceCard(qi);           // 2. rebond léger de la carte
  pulseScore();             // 3. pulse du compteur de bonnes réponses
  if (streak >= 3) showCombo(streak);  // 4. combo à partir de 3
  playCorrectSound(streak);            // son optionnel
}

/* 1. "+10" qui jaillit depuis l'option validée et flotte vers le haut */
function floatPlusXP(qi) {
  const card = document.getElementById(`q-${qi}`);
  if (!card) return;
  const anchor = card.querySelector('.option.correct') || card.querySelector('.feedback') || card;
  const el = document.createElement('div');
  el.className = 'float-xp';
  el.textContent = '+10';
  card.style.position = card.style.position || 'relative';
  const rect = anchor.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  el.style.left = (rect.left - cardRect.left + rect.width / 2) + 'px';
  el.style.top  = (rect.top - cardRect.top) + 'px';
  card.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

/* 2. Petit rebond joyeux de la carte de question */
function bounceCard(qi) {
  const card = document.getElementById(`q-${qi}`);
  if (!card) return;
  card.classList.remove('card-bounce');
  void card.offsetWidth; // force reflow pour relancer l'animation
  card.classList.add('card-bounce');
  setTimeout(() => card.classList.remove('card-bounce'), 500);
}

/* 3. Le compteur de bonnes réponses "pulse" */
function pulseScore() {
  const el = document.getElementById('sc');
  if (!el) return;
  el.classList.remove('score-pulse');
  void el.offsetWidth;
  el.classList.add('score-pulse');
  setTimeout(() => el.classList.remove('score-pulse'), 450);
}

/* 4. Badge "combo" qui apparaît brièvement à partir de 3 bonnes réponses d'affilée */
function showCombo(streak) {
  let label, cls;
  if (streak >= 7)      { label = `🌟 En feu ! ×${streak}`; cls = 'combo-fire'; }
  else if (streak >= 5) { label = `⚡ Série de ${streak} !`; cls = 'combo-zap'; }
  else                  { label = `🔥 Série de ${streak} !`; cls = 'combo-flame'; }
  const el = document.createElement('div');
  el.className = `combo-badge ${cls}`;
  el.textContent = label;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

/* ─ Son optionnel (Web Audio, aucun fichier externe) ─ */
let _audioCtx = null;
function soundEnabled() {
  return localStorage.getItem('cm2-sound') !== 'off'; // activé par défaut
}
function toggleSound() {
  const next = soundEnabled() ? 'off' : 'on';
  localStorage.setItem('cm2-sound', next);
  updateSoundButton();
  if (next === 'on') playCorrectSound(1); // petit retour quand on réactive
}
function updateSoundButton() {
  const btn = document.getElementById('sound-toggle');
  if (btn) btn.textContent = soundEnabled() ? '🔊' : '🔇';
}
/* Joue un petit "ding" satisfaisant. La hauteur monte légèrement avec la série. */
function playCorrectSound(streak = 1) {
  if (!soundEnabled()) return;
  try {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = _audioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;
    const base = 660 + Math.min(streak - 1, 6) * 40; // monte avec le combo, plafonné
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.exponentialRampToValueAtTime(base * 1.5, now + 0.12);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.26);
  } catch (e) { /* audio indisponible : on ignore */ }
}

/* ═══════════════════════════════════════════════════
   NAVIGATION CLAVIER (écran quiz uniquement)
   ═══════════════════════════════════════════════════ */
function quizKeyHandler(ev) {
  if (S.screen !== 'quiz') return;
  // Ne pas intercepter la frappe dans le champ texte (sauf Entrée déjà géré par qTypeKey)
  if (ev.target.tagName === 'INPUT') return;

  const k = ev.key;
  if (k === 'ArrowLeft') {
    ev.preventDefault();
    const b = document.getElementById('prev-btn');
    if (b && !b.disabled) b.click();
  } else if (k === 'ArrowRight') {
    ev.preventDefault();
    const b = document.getElementById('next-btn');
    if (b && !b.disabled) b.click();
  } else if (k === 'Enter') {
    ev.preventDefault();
    const b = document.getElementById('val-btn');
    if (b && !b.disabled) b.click();
  } else if (/^[1-4]$/.test(k)) {
    const oi = parseInt(k, 10) - 1;
    const q = S.liveQuestions && S.liveQuestions[S.cur];
    if (!q || S.validated[S.cur]) return;
    const t = qType(q);
    if (t === 'texte') return; // pas d'options à sélectionner
    if (q.options && oi < q.options.length) {
      ev.preventDefault();
      qPick(S.cur, oi);
    }
  }
}
document.addEventListener('keydown', quizKeyHandler);


/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */

/* Nettoyage des données orphelines : si le localStorage contient des progressions
   pour des matières ou des thèmes qui ne sont plus dans le programme actuel
   (par exemple suite à un import d'un ancien JSON), on les retire silencieusement.
   Sans ce nettoyage, les écrans qui parcourent la progression stockée plantent. */
function cleanupOrphanedProgress() {
  ALL_PROFILES.forEach(p => {
    const key = `cm2-progress-${p.id}`;
    let raw;
    try { raw = JSON.parse(localStorage.getItem(key) || '{}'); } catch { return; }
    let changed = false;
    const cleaned = {};
    for (const sId in raw) {
      const subj = getSubject(sId);
      if (!subj) { changed = true; continue; }
      cleaned[sId] = {};
      for (const tId in raw[sId]) {
        if (getTopic(sId, tId)) cleaned[sId][tId] = raw[sId][tId];
        else changed = true;
      }
      // Si la matière n'a plus aucun thème valide, on la retire
      if (Object.keys(cleaned[sId]).length === 0) { delete cleaned[sId]; changed = true; }
    }
    if (changed) localStorage.setItem(key, JSON.stringify(cleaned));
  });
  // Nettoyage des sessions
  try {
    const sessions = JSON.parse(localStorage.getItem('cm2-sessions') || '[]');
    const cleaned = sessions.filter(s => {
      if (!s || typeof s !== 'object') return false;
      if (s.subjId === RANDOM_SUBJ_ID) return true;
      return !!getSubject(s.subjId) && !!getTopic(s.subjId, s.topicId);
    });
    if (cleaned.length !== sessions.length) {
      localStorage.setItem('cm2-sessions', JSON.stringify(cleaned));
    }
  } catch {}
  _invalidateCache('all');
}

cleanupOrphanedProgress();
loadTheme();
updateSoundButton();
render();
