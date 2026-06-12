/* ═══════════════════════════════════════════════════
   RÉINITIALISATION
   ═══════════════════════════════════════════════════ */
function resetProgress() {
  const lvlConfig = getLevelConfig(getCurrentLevel());
  const hasMultipleLevels = getAvailableLevels().length > 1;
  let msg = `Effacer la progression de ${getProfile().name}`;
  if (hasMultipleLevels && lvlConfig) {
    msg += ` en ${lvlConfig.name} ? Cette action est irréversible.\n\nLes autres niveaux ne seront pas touchés.`;
  } else {
    msg += ` ? Cette action est irréversible.`;
  }
  if (confirm(msg)) {
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
  // Export v2 : on exporte la progression de TOUS les niveaux du profil + le niveau courant.
  // Les sessions sont déjà annotées avec leur `level` d'origine.
  const progressByLevel = {};
  LEVEL_IDS.forEach(lvl => {
    try {
      const raw = localStorage.getItem(`cm2-progress-${prof.id}-${lvl}`);
      if (raw) progressByLevel[lvl] = JSON.parse(raw);
    } catch {}
  });
  const data = {
    version: 2,
    exportedAt: new Date().toISOString(),
    profile: { id: prof.id, name: prof.name },
    currentLevel: getCurrentLevel(),
    progressByLevel,
    sessions: getSessions().filter(s => s.profile === S.profile)
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cassio-${prof.id}-${new Date().toISOString().slice(0, 10)}.json`;
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

      // Détection du format : v1 (progress: {}) ou v2 (progressByLevel: {cm2: {}, ...})
      const isV2 = data.progressByLevel && typeof data.progressByLevel === 'object';
      const isV1 = data.progress && typeof data.progress === 'object';
      if (!isV1 && !isV2) {
        throw new Error('Format JSON invalide (champ "progress" ou "progressByLevel" manquant).');
      }

      // Normaliser en structure v2 : { cm2: {...}, 6eme: {...}, ... }
      const rawProgressByLevel = isV2 ? data.progressByLevel : { cm2: data.progress };

      // Filtrer : pour chaque (niveau, matière, thème), ne garder que les entrées
      // encore présentes dans le programme actuel.
      const cleanProgressByLevel = {};
      let keptTopics = 0, droppedTopics = 0;
      const keptByLevel = {};
      for (const lvl in rawProgressByLevel) {
        if (!LEVELS_CONFIG[lvl]) { // niveau inconnu, on ignore
          for (const sId in (rawProgressByLevel[lvl] || {})) {
            droppedTopics += Object.keys(rawProgressByLevel[lvl][sId] || {}).length;
          }
          continue;
        }
        cleanProgressByLevel[lvl] = {};
        let countThisLevel = 0;
        for (const sId in rawProgressByLevel[lvl]) {
          const subj = getSubject(sId, lvl);
          if (!subj) { droppedTopics += Object.keys(rawProgressByLevel[lvl][sId] || {}).length; continue; }
          for (const tId in rawProgressByLevel[lvl][sId]) {
            const topic = getTopic(sId, tId, lvl);
            if (!topic) { droppedTopics++; continue; }
            if (!cleanProgressByLevel[lvl][sId]) cleanProgressByLevel[lvl][sId] = {};
            cleanProgressByLevel[lvl][sId][tId] = rawProgressByLevel[lvl][sId][tId];
            keptTopics++;
            countThisLevel++;
          }
        }
        if (countThisLevel > 0) keptByLevel[lvl] = countThisLevel;
        if (Object.keys(cleanProgressByLevel[lvl]).length === 0) delete cleanProgressByLevel[lvl];
      }

      // Filtrer les sessions en tenant compte de leur `level` d'origine.
      // Pour v1, on assume que toutes les sessions sont du CM2.
      const rawSessions = Array.isArray(data.sessions) ? data.sessions.filter(s => s && typeof s === 'object') : [];
      const cleanSessions = rawSessions.map(s => ({ ...s, level: s.level || 'cm2' })).filter(s => {
        if (!LEVELS_CONFIG[s.level]) return false;
        if (s.subjId === (typeof RANDOM_SUBJ_ID !== 'undefined' ? RANDOM_SUBJ_ID : '__random__')) return true;
        return getSubject(s.subjId, s.level) && getTopic(s.subjId, s.topicId, s.level);
      });
      const droppedSessions = rawSessions.length - cleanSessions.length;

      const prof = getProfile();
      const levelsSummary = Object.entries(keptByLevel)
        .map(([lvl, n]) => `${getLevelConfig(lvl)?.name || lvl} : ${n}`)
        .join(', ') || 'aucun';
      let msg = `Importer les données dans le profil ${prof.name} ?\n\n`
              + `• Progression : ${keptTopics} thèmes (${levelsSummary})\n`
              + `• Sessions   : ${cleanSessions.length}\n`;
      if (droppedTopics > 0 || droppedSessions > 0) {
        msg += `\n⚠️ ${droppedTopics} entrée${droppedTopics > 1 ? 's' : ''} de progression et ${droppedSessions} session${droppedSessions > 1 ? 's' : ''}\n`
             + `seront ignorées (matières/thèmes plus présents dans le programme actuel).\n`;
      }
      msg += `\n⚠️ Toute la progression de ${prof.name} (tous niveaux) sera remplacée.`;
      if (!confirm(msg)) return;

      // Remplace la progression du profil actif niveau par niveau.
      // Les niveaux qui n'apparaissent pas dans l'import sont effacés (cohérent
      // avec le comportement v1 : "tout ou rien" pour le profil).
      LEVEL_IDS.forEach(lvl => {
        const key = `cm2-progress-${prof.id}-${lvl}`;
        if (cleanProgressByLevel[lvl]) {
          localStorage.setItem(key, JSON.stringify(cleanProgressByLevel[lvl]));
        } else {
          localStorage.removeItem(key);
        }
      });
      // Niveau courant : on respecte celui exporté s'il est valide
      if (data.currentLevel && LEVELS_CONFIG[data.currentLevel]) {
        localStorage.setItem(`cm2-level-${prof.id}`, data.currentLevel);
      }
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

/* 5. Badge "Sans-faute parfait" doré, plus long et plus expressif que combo-badge.
   Affiché ~1,8 s sur l'écran de score quand le quiz est terminé à 100%.
   La taille et la durée justifient l'événement (vs combo-badge qui apparaît
   pendant le quiz et doit rester discret pour ne pas perturber la lecture). */
function showPerfectBadge() {
  const el = document.createElement('div');
  el.className = 'perfect-badge';
  el.innerHTML = '🏆 Sans-faute parfait !';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
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

/* Jingle de félicitations pour un sans-faute (v15+).
   Mélodie ascendante "Tada !" type Do-Mi-Sol-Do' (C5-E5-G5-C6) :
   - Quatre notes qui montent par arpège majeur, créant un sentiment de victoire
   - Les trois premières notes sont courtes et staccato (effet "fanfare")
   - La quatrième note est plus longue et soutenue pour la résolution finale
   - Léger overlap entre les notes pour un effet "carillonné" plutôt que sec
   - Deux oscillateurs par note (sine + triangle) pour un timbre riche mais doux
   La fonction est isolée (pas couplée à un événement spécifique) pour pouvoir
   être réutilisée ailleurs (badges futurs, jalons spéciaux). */
function playPerfectScoreFanfare() {
  if (!soundEnabled()) return;
  try {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = _audioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    // Notes : C5 (Do), E5 (Mi), G5 (Sol), C6 (Do octave) — arpège majeur ascendant
    // Les fréquences exactes du tempérament égal A4 = 440 Hz.
    const notes = [
      { freq: 523.25, start: 0.00,  dur: 0.18 }, // Do
      { freq: 659.25, start: 0.13,  dur: 0.18 }, // Mi (commence avant fin du Do → carillon)
      { freq: 783.99, start: 0.26,  dur: 0.20 }, // Sol
      { freq: 1046.5, start: 0.42,  dur: 0.55 }  // Do' (note finale soutenue, accent fort)
    ];

    notes.forEach((note, i) => {
      const t0 = now + note.start;
      const t1 = t0 + note.dur;
      const isLast = i === notes.length - 1;

      // Oscillateur principal (sine, son rond et doux)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(note.freq, t0);

      // Oscillateur d'harmonique (triangle, ajoute une "richesse" douce
      // sans devenir agressif comme un sawtooth)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(note.freq, t0);

      // Enveloppe ADSR : attack rapide, decay doux, sustain modéré sur la dernière
      const gain = ctx.createGain();
      const peakGain = isLast ? 0.22 : 0.16; // dernière note un peu plus forte
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(peakGain, t0 + 0.025);   // attack
      if (isLast) {
        // Dernière note : sustain plus long puis fade out doux pour un sentiment de résolution
        gain.gain.exponentialRampToValueAtTime(peakGain * 0.7, t0 + 0.18);
        gain.gain.exponentialRampToValueAtTime(0.0001, t1);
      } else {
        gain.gain.exponentialRampToValueAtTime(0.0001, t1);
      }

      // Mixer un peu de triangle (≈ 25%) avec le sine principal
      const triGain = ctx.createGain();
      triGain.gain.value = 0.25;

      osc1.connect(gain);
      osc2.connect(triGain);
      triGain.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(t0); osc1.stop(t1 + 0.05);
      osc2.start(t0); osc2.stop(t1 + 0.05);
    });
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

/* ═══════════════════════════════════════════════════
   MIGRATION : structure multi-niveaux
   ═══════════════════════════════════════════════════
   Au passage à la structure multi-niveaux (livraison "niveaux"), les clés
   localStorage de progression évoluent :
     cm2-progress-{id}       →   cm2-progress-{id}-cm2
   Et les sessions existantes (sans champ `level`) sont enrichies avec
   `level: 'cm2'`. Cette migration est idempotente, silencieuse, et ne
   s'exécute qu'une fois grâce au marqueur `cm2-migrated-levels`. */
function migrateToMultiLevels() {
  if (localStorage.getItem('cm2-migrated-levels') === '1') return;

  // 1. Renommer les clés de progression legacy
  ALL_PROFILES.forEach(p => {
    const legacyKey = `cm2-progress-${p.id}`;
    const newKey = `cm2-progress-${p.id}-cm2`;
    const legacy = localStorage.getItem(legacyKey);
    if (!legacy) return;
    // Si la nouvelle clé existe déjà (cas pathologique : double migration),
    // on ne l'écrase pas — on conserve la version "nouvelle" qui prime.
    if (!localStorage.getItem(newKey)) {
      localStorage.setItem(newKey, legacy);
    }
    localStorage.removeItem(legacyKey);
    // Le profil avait déjà joué : on inscrit son niveau courant à 'cm2'
    // (et on évite ainsi le popup d'onboarding pour les profils existants).
    if (!localStorage.getItem(`cm2-level-${p.id}`)) {
      localStorage.setItem(`cm2-level-${p.id}`, 'cm2');
    }
  });

  // 2. Enrichir les sessions existantes avec `level: 'cm2'`
  try {
    const sessions = JSON.parse(localStorage.getItem('cm2-sessions') || '[]');
    let changed = false;
    sessions.forEach(s => {
      if (s && typeof s === 'object' && !s.level) { s.level = 'cm2'; changed = true; }
    });
    if (changed) localStorage.setItem('cm2-sessions', JSON.stringify(sessions));
  } catch {}

  localStorage.setItem('cm2-migrated-levels', '1');
}

/* Nettoyage des données orphelines : si le localStorage contient des progressions
   pour des matières ou des thèmes qui ne sont plus dans le programme actuel
   (par exemple suite à un import d'un ancien JSON), on les retire silencieusement.
   Sans ce nettoyage, les écrans qui parcourent la progression stockée plantent.

   Avec le multi-niveaux, on itère sur (profil × niveau) et on nettoie la
   progression de chaque niveau séparément. Les sessions sont nettoyées en
   tenant compte de leur `level` d'origine. */
function cleanupOrphanedProgress() {
  ALL_PROFILES.forEach(p => {
    LEVEL_IDS.forEach(lvl => {
      const key = `cm2-progress-${p.id}-${lvl}`;
      let raw;
      try { raw = JSON.parse(localStorage.getItem(key) || '{}'); } catch { return; }
      if (!raw || typeof raw !== 'object') return;
      let changed = false;
      const cleaned = {};
      for (const sId in raw) {
        const subj = getSubject(sId, lvl);
        if (!subj) { changed = true; continue; }
        cleaned[sId] = {};
        for (const tId in raw[sId]) {
          if (getTopic(sId, tId, lvl)) cleaned[sId][tId] = raw[sId][tId];
          else changed = true;
        }
        if (Object.keys(cleaned[sId]).length === 0) { delete cleaned[sId]; changed = true; }
      }
      if (changed) {
        if (Object.keys(cleaned).length === 0) localStorage.removeItem(key);
        else localStorage.setItem(key, JSON.stringify(cleaned));
      }
    });
  });
  // Nettoyage des sessions (en tenant compte de leur niveau d'origine)
  try {
    const sessions = JSON.parse(localStorage.getItem('cm2-sessions') || '[]');
    const cleaned = sessions.filter(s => {
      if (!s || typeof s !== 'object') return false;
      const lvl = s.level || DEFAULT_LEVEL;
      if (s.subjId === RANDOM_SUBJ_ID) return true;
      return !!getSubject(s.subjId, lvl) && !!getTopic(s.subjId, s.topicId, lvl);
    });
    if (cleaned.length !== sessions.length) {
      localStorage.setItem('cm2-sessions', JSON.stringify(cleaned));
    }
  } catch {}
  _invalidateCache('all');
}

migrateToMultiLevels();
cleanupOrphanedProgress();
loadTheme();
updateSoundButton();
render();
