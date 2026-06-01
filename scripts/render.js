/* ═══════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════ */

/* Nettoie les timers d'auto-validation et d'auto-passage du quiz.
   À appeler chaque fois qu'on change d'écran pour éviter qu'un timer obsolète
   ne déclenche une action sur un écran différent. */
function clearQuizTimers() {
  if (S.__pickTimer) { clearTimeout(S.__pickTimer); S.__pickTimer = null; }
  if (S.__nextTimer) { clearTimeout(S.__nextTimer); S.__nextTimer = null; }
}

/* Initialise l'état d'un quiz à partir d'une liste de questions déjà préparées.
   Centralise la duplication entre startQuiz / startReviewErrors / startRandomQuiz. */
function initQuizState(preparedQuestions) {
  const n = preparedQuestions.length;
  S.liveQuestions = preparedQuestions;
  S.cur = 0;
  S.answers   = new Array(n).fill(null);
  S.validated = new Array(n).fill(false);
  S.correct = 0;
  S.wrong = 0;
  S.hintsUsed = 0;
  S.hintsRevealed = {};
  S.streak = 0;
  S.__confettiFired = false;
}

function goProfile() {
  clearQuizTimers();
  S.screen = 'profile'; S.profile = null; S.subjId = null; S.topicId = null;
  S.randomMode = false; S.reviewMode = false;
  applySubjStyle(null);
  render();
}
function selectProfile(id) {
  S.profile = id;
  // À la PREMIÈRE sélection du profil (pas encore personnalisé), on dirige vers
  // l'écran de personnalisation. L'invité ne passe jamais par là.
  if (id !== 'guest' && !hasCustomization(id)) {
    goCustomize();
  } else {
    goHome();
  }
}

/* ── Personnalisation de l'avatar ──
   goCustomize : ouvre l'écran avec un brouillon initialisé sur les valeurs actuelles
   customizePickEmoji : met à jour le brouillon (emoji) et re-rend
   customizeSetName : met à jour le brouillon (nom) sans re-rendre (pour éviter de
                      perdre le focus du champ texte à chaque frappe)
   customizeSave : valide et retourne à l'accueil
   customizeCancel : annule et retourne à l'accueil sans modifier */
function goCustomize() {
  clearQuizTimers();
  const prof = getProfile();
  if (!prof) return;
  S.screen = 'customize';
  // Brouillon : on part des valeurs actuelles (par défaut ou déjà personnalisées)
  S.customizeDraft = { emoji: prof.emoji, name: prof.name };
  applySubjStyle(null);
  render();
}
function customizePickEmoji(emoji) {
  if (!S.customizeDraft) return;
  S.customizeDraft.emoji = emoji;
  render();
}
function customizeSetName(value) {
  if (!S.customizeDraft) return;
  // On ne re-rend pas pour préserver le focus du champ texte.
  // Le brouillon est juste mis à jour silencieusement. L'aperçu est rafraîchi
  // en revanche, pour donner un retour visuel immédiat.
  S.customizeDraft.name = value;
  const previewEl = document.querySelector('.customize-preview-name');
  if (previewEl) previewEl.textContent = value.trim() || '...';
}
function customizeSave() {
  if (!S.customizeDraft) return;
  const name = (S.customizeDraft.name || '').trim();
  if (!name) {
    alert('Choisis un nom (1 caractère minimum).');
    return;
  }
  saveCustomization(S.profile, S.customizeDraft.emoji, name);
  S.customizeDraft = null;
  goHome();
}
function customizeCancel() {
  S.customizeDraft = null;
  goHome();
}

/* ── Mode invité ──
   Entrer : on bascule sur le profil "guest" et on va à l'accueil.
   Quitter : on retourne à l'écran de sélection de profil.
   Réinitialiser : on efface la progression et les sessions de l'invité,
                   mais on reste en mode invité. */
function enterGuestMode() {
  S.profile = 'guest';
  goHome();
}
function exitGuestMode() {
  goProfile();
}
function resetGuestProgress() {
  if (!confirm('Effacer toute la progression du mode invité ? Les profils Elias et Leïla ne seront pas touchés.')) return;
  // Supprime la progression de l'invité sur TOUS les niveaux scolaires
  LEVEL_IDS.forEach(lvl => localStorage.removeItem(`cm2-progress-guest-${lvl}`));
  // Réinitialise aussi son niveau courant (re-popup d'onboarding au prochain quiz)
  localStorage.removeItem('cm2-level-guest');
  // On retire les sessions du profil invité
  const others = getSessions().filter(s => s.profile !== 'guest');
  localStorage.setItem('cm2-sessions', JSON.stringify(others));
  _invalidateCache('all');
  goHome(); // rafraîchit l'affichage
}
function goHome() {
  clearQuizTimers();
  S.screen = 'home'; S.subjId = null; S.topicId = null;
  S.randomMode = false; S.reviewMode = false;
  applySubjStyle(null);
  // Si le profil n'a pas encore choisi son niveau et que plusieurs niveaux sont
  // disponibles, on bascule sur l'écran d'onboarding du niveau. Sinon, le niveau
  // est inscrit silencieusement et on reste sur l'accueil.
  maybeShowLevelOnboarding();
  render();
}
function goSubject(id) {
  clearQuizTimers();
  S.screen = 'subject'; S.subjId = id;
  applySubjStyle(id);
  render();
}
function startQuiz(sId, tId) {
  clearQuizTimers();
  S.screen = 'quiz'; S.subjId = sId; S.topicId = tId;
  S.reviewMode = false;
  S.randomMode = false;
  // Mélange : ordre des questions + ordre des options dans chaque question
  initQuizState(shuffleArray(getTopic(sId, tId).questions).map(prepareQuestion));
  applySubjStyle(sId);
  renderQuizScreen();
}

/* ── Mode révision des erreurs : rejouer uniquement les questions ratées ── */
function startReviewErrors() {
  if (!S.liveQuestions || !S.liveQuestions.length) return;
  clearQuizTimers();
  // Récupère les questions ratées avec leur énoncé d'origine (pour re-mélanger les options)
  const wrong = S.liveQuestions.filter((q, i) => !isCorrect(q, S.answers[i]));
  if (wrong.length === 0) return;
  // Pour relier à l'énoncé original (non mélangé), on retrouve par texte.
  // En mode aléatoire, chaque question porte ses propres _origSubjId/_origTopicId.
  const wrongOriginals = wrong.map(lq => {
    const sId = lq._origSubjId || S.subjId;
    const tId = lq._origTopicId || S.topicId;
    const orig = getTopic(sId, tId)?.questions.find(o => o.text === lq.text);
    return orig ? { ...orig, _origSubjId: sId, _origTopicId: tId } : lq;
  });
  S.screen = 'quiz';
  S.reviewMode = true;
  initQuizState(shuffleArray(wrongOriginals).map(prepareQuestion));
  applySubjStyle(S.randomMode ? 'random' : S.subjId);
  renderQuizScreen();
}
/* ── Mode "Quiz aléatoire" multi-thèmes : N questions tirées au hasard parmi toutes les matières ── */
function startRandomQuiz(n) {
  clearQuizTimers();
  const count = n || 10;
  const picked = pickRandomQuestions(count);
  if (picked.length === 0) return;
  S.screen = 'quiz';
  S.subjId = 'random';
  S.topicId = null;
  S.reviewMode = false;
  S.randomMode = true;
  initQuizState(picked.map(prepareQuestion));
  applySubjStyle('random');
  renderQuizScreen();
}

function goScore() {
  clearQuizTimers();
  const n = S.liveQuestions.length;
  S.newBadges = [];
  S.xpGained = 0;
  if (!S.reviewMode) {
    const beforeIds = computeBadgesUnlocked().map(b => b.id);
    const wasFirstToday = isFirstSessionToday();
    S.xpGained = computeSessionXP(S.correct, n, wasFirstToday, S.hintsUsed || 0);
    // En mode aléatoire : pas de progression par thème, mais on garde la session pour l'historique/XP
    const savedSubjId = S.randomMode ? RANDOM_SUBJ_ID : S.subjId;
    const savedTopicId = S.randomMode ? RANDOM_SUBJ_ID : S.topicId;
    saveSession(savedSubjId, savedTopicId, S.correct, n, S.hintsUsed || 0);
    const after = computeBadgesUnlocked();
    S.newBadges = after.filter(b => !beforeIds.includes(b.id));
  }
  S.screen = 'score';
  render();
}
function goHistory() {
  clearQuizTimers();
  S.screen = 'history';
  applySubjStyle(null);
  render();
}

/* ═══════════════════════════════════════════════════
   RENDER ROOT
   ═══════════════════════════════════════════════════ */
function render() {
  const app = document.getElementById('app');
  // Affichage de la bannière "Mode invité" : sur tous les écrans SAUF l'écran de
  // sélection de profil (où elle ferait doublon avec le bouton "Mode invité")
  const banner = document.getElementById('guest-banner');
  if (banner) {
    const showBanner = isGuest() && S.screen !== 'profile';
    banner.hidden = !showBanner;
  }
  if (S.screen === 'profile')   { app.innerHTML = renderProfile();   }
  if (S.screen === 'level-onboarding') { app.innerHTML = renderLevelOnboarding(); }
  if (S.screen === 'customize') { app.innerHTML = renderCustomize(); }
  if (S.screen === 'home')      { app.innerHTML = renderHome();      }
  if (S.screen === 'subject') { app.innerHTML = renderSubject();  }
  if (S.screen === 'quiz')    { renderQuizScreen(); }
  if (S.screen === 'score')   { app.innerHTML = renderScore();    }
  if (S.screen === 'history') { app.innerHTML = renderHistory();  }
}

/* ═══════════════════════════════════════════════════
   PROFILE SCREEN
   ═══════════════════════════════════════════════════ */
function renderProfile() {
  const cards = PROFILES.map(p => {
    // Fusion avec la personnalisation éventuelle (sans toucher à S.profile)
    const custom = getCustomization(p.id);
    const emoji = custom?.emoji || p.emoji;
    const name = custom?.name || p.name;
    return `
    <div class="profile-card" onclick="selectProfile('${p.id}')"
         style="--pc:${p.color}; --pc-grad:${p.grad};">
      <span class="profile-emoji">${emoji}</span>
      <div class="profile-name">${escapeHtml(name)}</div>
    </div>`;
  }).join('');

  return `
    <div class="anim-slide">
      <div class="app-header">
        <div class="stars">
          <div class="star"></div><div class="star"></div><div class="star"></div>
          <div class="star"></div><div class="star"></div>
        </div>
        <h1>Cassio</h1>
        <p>Qui révise aujourd'hui ?</p>
      </div>
      <p class="profile-intro">Choisis ton profil pour retrouver ta progression.</p>
      <div class="profile-grid">${cards}</div>
      <button class="guest-btn" onclick="enterGuestMode()" title="Tester l'app sans toucher aux profils enfants">
        <span class="guest-btn-emoji">👤</span>
        <span class="guest-btn-text">Mode invité</span>
        <span class="guest-btn-sub">Pour tester librement</span>
      </button>
    </div>`;
}

/* ═══════════════════════════════════════════════════
   CUSTOMIZE SCREEN — Personnalisation de l'avatar
   ═══════════════════════════════════════════════════ */
function renderCustomize() {
  // S.customizeDraft contient l'état temporaire de la personnalisation en cours
  // (emoji, nom) avant validation. Initialisé dans goCustomize().
  const d = S.customizeDraft;
  if (!d) return ''; // sécurité
  const grid = AVATAR_EMOJIS.map(e => {
    const cls = e === d.emoji ? 'avatar-choice active' : 'avatar-choice';
    return `<button class="${cls}" type="button" onclick="customizePickEmoji('${e}')" aria-label="Choisir ${e}">${e}</button>`;
  }).join('');
  const isFirstTime = !hasCustomization(S.profile);
  const title = isFirstTime ? 'Bienvenue ! Personnalise ton profil' : 'Personnalise ton profil';
  return `
    <div class="screen customize-screen">
      <div class="customize-header">
        <h1>${title}</h1>
        ${isFirstTime ? '<p class="customize-intro">Choisis un avatar et un nom — tu pourras toujours les changer plus tard.</p>' : ''}
      </div>

      <div class="customize-preview">
        <div class="customize-preview-emoji">${d.emoji}</div>
        <div class="customize-preview-name">${escapeHtml(d.name || '...')}</div>
      </div>

      <div class="customize-section">
        <label class="customize-label">Avatar</label>
        <div class="avatar-grid">${grid}</div>
      </div>

      <div class="customize-section">
        <label class="customize-label" for="customize-name-input">Nom (max 20 caractères)</label>
        <input type="text" id="customize-name-input" class="customize-input" maxlength="20"
               value="${escapeAttr(d.name)}" placeholder="Ton nom"
               oninput="customizeSetName(this.value)"
               autocomplete="off" autocorrect="off" spellcheck="false">
      </div>

      ${renderCustomizeLevelSection()}

      <div class="customize-actions">
        ${!isFirstTime ? '<button class="btn-sm" onclick="customizeCancel()">Annuler</button>' : ''}
        <button class="btn-sm accent" onclick="customizeSave()">${isFirstTime ? "C'est parti !" : 'Valider'}</button>
      </div>
    </div>`;
}

/* Section "Choisir ma classe" sur l'écran de personnalisation.
   N'apparaît que si au moins 2 niveaux ont du contenu chargé (sinon, c'est inutile :
   un seul niveau est forcément le bon). Le choix prend effet immédiatement (pas besoin
   d'attendre "Valider") car il modifie une clé localStorage indépendante de la
   personnalisation. C'est cohérent avec le sélecteur de l'accueil. */
function renderCustomizeLevelSection() {
  const available = getAvailableLevels();
  if (available.length < 2) return ''; // un seul niveau peuplé : pas la peine
  const current = getCurrentLevel();
  const buttons = available.map(lvl => {
    const cfg = getLevelConfig(lvl);
    const isActive = lvl === current;
    return `<button type="button" class="level-pill ${isActive ? 'active' : ''}"
                    onclick="changeLevelFromCustomize('${lvl}')"
                    aria-pressed="${isActive}">
              ${cfg.emoji} ${cfg.name}
            </button>`;
  }).join('');
  return `
    <div class="customize-section">
      <label class="customize-label">🎓 Ma classe</label>
      <div class="level-pills">${buttons}</div>
    </div>`;
}

/* Changement de niveau depuis l'écran personnalisation.
   Comportement : on persiste le choix immédiatement et on re-rend la même page
   pour mettre à jour le pill actif. La validation/annulation de la personnalisation
   (emoji, nom) reste indépendante : changer de classe est toujours conservé. */
function changeLevelFromCustomize(levelId) {
  if (levelId === getCurrentLevel()) return;
  setCurrentLevel(levelId);
  render(); // reste sur l'écran customize, met juste à jour le pill actif
}

/* Échappe les caractères HTML dangereux dans le nom affiché */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

function renderLevelCard() {
  const xp = computeTotalXP();
  const info = getLevelInfo(xp);
  const prof = getProfile();
  const xpLine = info.isMax
    ? `<strong>${info.xp.toLocaleString('fr-FR')} XP</strong> <span class="level-max-tag">NIVEAU MAX</span>`
    : `<strong>${info.intoLevel}</strong> / ${info.levelSpan} XP avant le niveau ${info.level + 1}`;
  const fillPct = info.isMax ? 100 : info.pct;
  return `
    <div class="level-card">
      <div class="level-card-top">
        <div class="level-circle">
          <div class="level-circle-num">${info.level}</div>
          <div class="level-circle-lbl">Niveau</div>
        </div>
        <div class="level-info">
          <div class="level-name">${prof.emoji} ${prof.name}</div>
          <div class="level-xp">${xpLine}</div>
          <div class="xp-bar"><div class="xp-bar-fill" style="width:${fillPct}%"></div></div>
        </div>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════════════════
   SÉLECTEUR DE NIVEAU SCOLAIRE
   ═══════════════════════════════════════════════════
   Affiché uniquement quand au moins 2 niveaux ont du contenu chargé.
   Tant qu'on n'a que le CM2, ce sélecteur est silencieux (string vide).
   Quand on ajoutera 6ème ou 5ème en livraison 2, il apparaîtra automatiquement. */
function renderLevelSelector() {
  const available = getAvailableLevels();
  if (available.length < 2) return ''; // un seul niveau peuplé : pas de sélecteur
  const current = getCurrentLevel();
  const currentConfig = getLevelConfig(current);
  // Boutons pour chaque niveau disponible
  const buttons = available.map(lvl => {
    const cfg = getLevelConfig(lvl);
    const isActive = lvl === current;
    return `<button class="level-pill ${isActive ? 'active' : ''}"
                    onclick="changeLevel('${lvl}')"
                    aria-pressed="${isActive}">
              ${cfg.emoji} ${cfg.name}
            </button>`;
  }).join('');
  return `
    <div class="level-selector" role="group" aria-label="Niveau scolaire">
      <div class="level-selector-label">Niveau actuel : <strong>${currentConfig?.name || ''}</strong></div>
      <div class="level-pills">${buttons}</div>
    </div>`;
}

/* Changer de niveau scolaire pour le profil courant.
   Si le niveau est le même que l'actuel, ne fait rien. Sinon, persiste le choix
   et re-rend l'accueil pour afficher les matières du nouveau niveau. */
function changeLevel(levelId) {
  if (levelId === getCurrentLevel()) return;
  setCurrentLevel(levelId);
  goHome();
}

/* Popup d'onboarding au 1er lancement d'un profil quand plusieurs niveaux sont
   peuplés. Tant qu'on n'a qu'un seul niveau (CM2), la popup ne se déclenche pas.
   À déclencher depuis render() après que S.profile a été défini. */
function maybeShowLevelOnboarding() {
  if (!S.profile) return;
  if (hasLevelChosen(S.profile)) return;
  const available = getAvailableLevels();
  if (available.length < 2) {
    // Un seul niveau : on l'inscrit silencieusement sans déranger l'enfant
    setCurrentLevel(available[0] || DEFAULT_LEVEL);
    return;
  }
  // Plusieurs niveaux disponibles : on affiche un écran intermédiaire
  S.screen = 'level-onboarding';
}

function renderLevelOnboarding() {
  const prof = getProfile();
  const available = getAvailableLevels();
  const cards = available.map(lvl => {
    const cfg = getLevelConfig(lvl);
    return `
      <button class="onboarding-level-card" onclick="chooseInitialLevel('${lvl}')">
        <span class="onboarding-level-emoji">${cfg.emoji}</span>
        <span class="onboarding-level-name">${cfg.name}</span>
      </button>`;
  }).join('');
  return `
    <div class="anim-slide level-onboarding">
      <div class="app-header">
        <h1>👋 Salut ${prof.name} !</h1>
        <p>En quelle classe es-tu cette année ?</p>
      </div>
      <div class="onboarding-level-grid">${cards}</div>
      <p class="onboarding-level-hint">Tu pourras changer à tout moment depuis l'accueil.</p>
    </div>`;
}

function chooseInitialLevel(levelId) {
  setCurrentLevel(levelId);
  goHome();
}

/* Carte "série de jours consécutifs" affichée sur l'accueil.
   Adapte son message selon 3 cas :
   - Pas de série en cours : invite douce à démarrer
   - Série en cours, pas encore joué aujourd'hui : motive à jouer pour continuer
   - Série en cours, déjà joué aujourd'hui : félicite et projette vers demain
   La taille de la flamme grandit avec la durée : 🔥 / 🔥🔥 / 🔥🔥🔥 */
function renderStreakCard() {
  const sessions = getSessions().filter(s => s.profile === S.profile);
  const streak = computeCurrentStreak(sessions);
  const playedToday = hasPlayedToday(sessions);

  // Cas 1 : pas de série en cours
  if (streak === 0) {
    return `
      <div class="streak-card streak-zero">
        <div class="streak-flame">💪</div>
        <div class="streak-text">
          <div class="streak-title">Démarre ta série !</div>
          <div class="streak-sub">Joue un quiz aujourd'hui pour lancer ton premier jour</div>
        </div>
      </div>`;
  }

  // Flamme évolutive selon la durée
  let flame;
  if (streak >= 14)      flame = '🔥🔥🔥';
  else if (streak >= 7)  flame = '🔥🔥';
  else                   flame = '🔥';

  const dayLabel = streak === 1 ? '1 jour' : `${streak} jours`;

  // Cas 2 : déjà joué aujourd'hui — on félicite
  if (playedToday) {
    return `
      <div class="streak-card streak-done">
        <div class="streak-flame">${flame}</div>
        <div class="streak-text">
          <div class="streak-title">${dayLabel} d'affilée ✓</div>
          <div class="streak-sub">Bravo ! Reviens demain pour continuer ta série</div>
        </div>
      </div>`;
  }

  // Cas 3 : série en cours, pas encore joué aujourd'hui — on motive
  return `
    <div class="streak-card streak-active">
      <div class="streak-flame">${flame}</div>
      <div class="streak-text">
        <div class="streak-title">${dayLabel} d'affilée</div>
        <div class="streak-sub">Joue aujourd'hui pour continuer ta série !</div>
      </div>
    </div>`;
}

function renderBadgesSection() {
  const ctx = computeBadgeContext();
  // Évaluation unique : on construit un Set des IDs débloqués, puis on l'utilise pour les tuiles
  const unlockedIds = new Set();
  BADGES.forEach(b => { if (b.check(ctx)) unlockedIds.add(b.id); });
  const tiles = BADGES.map(b => {
    // getBadgeDisplay applique le nom/desc dynamique pour les badges marqués `dynamic: true`
    // (par ex. "Maître du niveau" devient "Maître de CM2" / "Maître de 6ème").
    const display = getBadgeDisplay(b);
    const isUnlocked = unlockedIds.has(b.id);
    const cls = isUnlocked ? 'unlocked' : 'locked';
    const tooltip = `${display.name} — ${display.desc}${isUnlocked ? ' ✓' : ''}`;
    return `<div class="badge-tile ${cls}" title="${tooltip.replace(/"/g, '&quot;')}">
              <span class="badge-emoji">${display.emoji}</span>
              <div class="badge-name">${display.name}</div>
            </div>`;
  }).join('');
  return `
    <div class="badges-card">
      <div class="badges-header">
        <div class="badges-title">🏆 Badges</div>
        <div class="badges-count">${unlockedIds.size} / ${BADGES.length} débloqués</div>
      </div>
      <div class="badges-grid">${tiles}</div>
    </div>`;
}

function renderHome() {
  // Calcul unique : une seule lecture de progress, un seul parcours du curriculum.
  // On construit une map { sId: count } des thèmes complétés au format actuel.
  const curriculum = getCurriculum(getCurrentLevel());
  const progress = getProgress();
  const doneBycSubject = {};
  let totalTopics = 0, doneTopics = 0;
  curriculum.forEach(s => {
    totalTopics += s.topics.length;
    let done = 0;
    const subjProgress = progress[s.id];
    if (subjProgress) {
      s.topics.forEach(t => {
        const stored = subjProgress[t.id];
        if (stored && stored.total === t.questions.length) done++;
      });
    }
    doneBycSubject[s.id] = done;
    doneTopics += done;
  });
  const pct = totalTopics > 0 ? Math.round(doneTopics / totalTopics * 100) : 0;

  const cards = curriculum.map(s => {
    const style = STYLES[s.id];
    const done = doneBycSubject[s.id];
    const subjPct = Math.round(done / s.topics.length * 100);
    return `
      <div class="subject-card" style="--sc-color:${style.color}; --sc-grad:${style.grad};"
           onclick="goSubject('${s.id}')">
        <span class="subj-icon">${s.emoji}</span>
        <div class="subj-name">${s.name}</div>
        <div class="subj-meta">${s.topics.length} thèmes · ${s.desc}</div>
        <div class="subj-prog-bar"><div class="subj-prog-fill" style="width:${subjPct}%"></div></div>
        <div class="subj-prog-text">${done}/${s.topics.length} complétés</div>
      </div>`;
  }).join('');

  const prof = getProfile();

  return `
    <div class="anim-slide">
      <div class="app-header">
        <div class="stars">
          <div class="star"></div><div class="star"></div><div class="star"></div>
          <div class="star"></div><div class="star"></div>
        </div>
        <h1>Cassio</h1>
        <p>Programme officiel · Toutes matières</p>
      </div>

      <div class="profile-banner">
        <div class="profile-banner-left">
          <span class="profile-avatar">${prof.emoji}</span>
          <div>
            <div class="profile-banner-name">${prof.name}</div>
            <div class="profile-banner-sub">Ma progression</div>
          </div>
        </div>
        <div class="profile-banner-right">
          <button class="btn-sm accent" onclick="goHistory()">📋 Historique</button>
          ${!isGuest() ? '<button class="btn-sm" onclick="goCustomize()" title="Personnaliser ton avatar et ton nom">✏️</button>' : ''}
          <button class="btn-sm" onclick="goProfile()">Changer</button>
        </div>
      </div>

      ${renderLevelSelector()}

      ${renderLevelCard()}

      ${renderStreakCard()}

      <div class="home-overview">
        <div class="overview-icon">🎓</div>
        <div class="overview-text">
          <div class="lbl">Progression globale</div>
          <div class="val">${doneTopics}/${totalTopics}</div>
          <div class="sub">thèmes complétés</div>
        </div>
        <div class="overview-prog">
          <div class="pct">${pct}%</div>
          <div class="pct-lbl">complété</div>
        </div>
      </div>

      <div class="random-cta" onclick="startRandomQuiz()">
        <div class="random-cta-icon">🎲</div>
        <div class="random-cta-text">
          <div class="random-cta-title">Quiz aléatoire</div>
          <div class="random-cta-sub">10 questions surprise piochées dans toutes les matières</div>
        </div>
        <div class="random-cta-arrow">▶</div>
      </div>

      <div class="section-title">Choisir une matière</div>
      <div class="subjects-grid">${cards}</div>

      ${renderBadgesSection()}

      ${isGuest()
        ? `<div class="data-actions guest-actions">
             <p class="guest-info">👤 Tu es en mode invité. Ta progression est isolée, elle n'affecte pas Elias ni Leïla.</p>
             <button class="btn-sm" onclick="resetGuestProgress()">🔄 Réinitialiser le mode invité</button>
           </div>`
        : `<div class="data-actions">
             <button class="btn-sm" onclick="exportData()">💾 Exporter ma progression</button>
             <button class="btn-sm" onclick="triggerImport()">📂 Importer un fichier</button>
           </div>
           ${doneTopics > 0 ? `<div class="reset-link" onclick="resetProgress()">Effacer toute la progression</div>` : ''}`
      }
    </div>`;
}

/* ═══════════════════════════════════════════════════
   SUBJECT SCREEN
   ═══════════════════════════════════════════════════ */
function renderSubject() {
  const subj = getSubject(S.subjId);
  // Ne compter que les thèmes complétés AU FORMAT ACTUEL
  let doneCount = 0;
  subj.topics.forEach(t => { if (isTopicFresh(S.subjId, t.id)) doneCount++; });

  const topicCards = subj.topics.map(t => {
    const ts = getTopicScore(S.subjId, t.id);
    // Le badge "10 q." (nombre de questions) n'apparaît que quand il y a un score :
    // on évite le bruit visuel sur les thèmes non joués, où l'info est répétitive
    // (tous les thèmes ont 10 questions).
    let badge = '';
    let stars = 0;
    if (ts) {
      // En cas de score obsolète (ex: ancien 5/5 sur thème désormais à 10 q.),
      // on affiche la performance sur le NOUVEAU total (5/10) et on recalcule les étoiles
      // sur cette base. Le score précédent n'est pas effacé : il se mettra à jour
      // automatiquement au prochain quiz complet.
      const displayTotal = ts.actualTotal;
      stars = getStars(ts.score, displayTotal);
      const cls = stars === 3 ? 's3' : stars === 2 ? 's2' : 's1';
      const staleHint = ts.stale ? ' title="Score sur l\'ancien format — rejoue pour le mettre à jour"' : '';
      badge = `<div class="topic-badge ${cls}"${staleHint}>${ts.score}/${displayTotal}</div>`;
    }
    const btnLabel = ts ? 'Rejouer' : 'Commencer';
    return `
      <div class="topic-card" onclick="startQuiz('${S.subjId}','${t.id}')">
        <div class="topic-card-row">
          <div class="topic-icon">${t.emoji}</div>
          <div class="topic-info">
            <div class="t-name">${t.name}</div>
            <div class="topic-stars">${starsHTML(stars)}</div>
          </div>
          ${badge}
          <button class="btn-start">${btnLabel}</button>
        </div>
        <div class="t-meta">${t.desc}</div>
      </div>`;
  }).join('');

  return `
    <div class="anim-slide">
      <div class="breadcrumb">
        <span class="crumb" onclick="goHome()">🏠 Accueil</span>
        <span class="sep">›</span>
        <span class="current-crumb">${subj.name}</span>
      </div>

      <div class="subject-header">
        <div class="subj-header-icon">${subj.emoji}</div>
        <div class="subj-header-text">
          <h2>${subj.name}</h2>
          <p>${subj.topics.length} thèmes · ${doneCount}/${subj.topics.length} complétés · ${subj.desc}</p>
        </div>
      </div>

      <div class="section-title">Choisir un thème</div>
      <div class="topics-list">${topicCards}</div>
    </div>`;
}

/* ═══════════════════════════════════════════════════
   QUIZ SCREEN
   ═══════════════════════════════════════════════════ */
function renderQuizScreen() {
  const app = document.getElementById('app');
  const subj = S.randomMode ? null : getSubject(S.subjId);
  const topic = S.randomMode ? null : getTopic(S.subjId, S.topicId);
  const qs = S.liveQuestions;
  const n = qs.length;

  const dots = Array.from({ length: n }, (_, i) =>
    `<div class="prog-dot${i === 0 ? ' current' : ''}" id="dot-${i}"></div>`
  ).join('');

  const cards = qs.map((q, i) => {
    const t = qType(q);
    // L'indice n'est plus affiché par défaut : un bouton "💡 Indice" permet de
    // le révéler à la demande, pour encourager la réflexion avant l'aide.
    const hint = q.hint
      ? `<button type="button" class="hint-btn" id="hint-btn-${i}" onclick="qShowHint(${i})">💡 Indice</button>
         <div class="q-hint hidden" id="q-hint-${i}">💡 ${q.hint}</div>`
      : '';
    // Support des illustrations : SVG inline ou emojis. Le moteur ne fait pas
    // de différence — c'est juste du HTML inséré entre l'énoncé et les options.
    const image = q.image ? `<div class="q-image">${q.image}</div>` : '';
    let badge = '';
    let body = '';

    if (t === 'qcu') {
      body = `<div class="options">${q.options.map((o, oi) =>
        `<div class="option" id="opt-${i}-${oi}" onclick="qPick(${i},${oi})">
          <div class="letter">${String.fromCharCode(65 + oi)}</div>
          <span>${o}</span>
        </div>`
      ).join('')}</div>`;
    } else if (t === 'qcm') {
      badge = `<div class="type-badge qcm">☑️ Plusieurs réponses possibles</div>`;
      body = `<div class="options">${q.options.map((o, oi) =>
        `<div class="option qcm-opt" id="opt-${i}-${oi}" onclick="qPick(${i},${oi})">
          <div class="checkbox"></div>
          <span>${o}</span>
        </div>`
      ).join('')}</div>`;
    } else if (t === 'vrai_faux') {
      badge = `<div class="type-badge vf">⚖️ Vrai ou Faux</div>`;
      const opts = q.options || ['Vrai', 'Faux'];
      body = `<div class="options vf-options">${opts.map((o, oi) =>
        `<div class="option vf-opt" id="opt-${i}-${oi}" onclick="qPick(${i},${oi})">
          <span class="vf-icon">${oi === 0 ? '✓' : '✗'}</span>
          <span>${o}</span>
        </div>`
      ).join('')}</div>`;
    } else if (t === 'texte') {
      badge = `<div class="type-badge txt">✏️ Réponse à taper</div>`;
      body = `<div class="text-input-wrap">
        <input type="text" id="txt-${i}" class="text-input"
               placeholder="Tape ta réponse puis valide…"
               oninput="qTypeChange(${i}, this.value)"
               onkeydown="qTypeKey(event, ${i})"
               autocomplete="off" autocorrect="off" spellcheck="false">
      </div>`;
    }

    return `
      <div class="q-card${i === 0 ? ' active' : ''}" id="q-${i}">
        <div class="q-top">
          <div class="q-badge">${i + 1}</div>
          <div class="q-text">${q.text}</div>
        </div>
        ${image}
        ${badge}
        ${hint}
        ${body}
        <div class="feedback" id="fb-${i}"></div>
      </div>`;
  }).join('');

  app.innerHTML = `
    <div>
      <div class="breadcrumb">
        <span class="crumb" onclick="goHome()">🏠</span>
        <span class="sep">›</span>
        ${S.randomMode
          ? `<span class="current-crumb">🎲 Quiz aléatoire${S.reviewMode ? ' · 🔁 Révision' : ''}</span>`
          : `<span class="crumb" onclick="goSubject('${S.subjId}')">${subj.name}</span>
             <span class="sep">›</span>
             <span class="current-crumb">${S.reviewMode ? '🔁 Révision · ' : ''}${topic.name}</span>`
        }
      </div>

      <div class="stats">
        <div class="stat"><div class="stat-val" id="sq">${1}/${n}</div><div class="stat-lbl">Question</div></div>
        <div class="stat"><div class="stat-val" id="sc" style="color:var(--green)">0</div><div class="stat-lbl">Bonnes</div></div>
        <div class="stat"><div class="stat-val" id="se" style="color:var(--red)">0</div><div class="stat-lbl">Erreurs</div></div>
        <div class="stat"><div class="stat-val" id="sr">${n}</div><div class="stat-lbl">Restantes</div></div>
      </div>

      <div class="prog-wrap">
        <div class="prog-track"><div class="prog-fill" id="prog-fill"></div></div>
        <div class="prog-dots" id="prog-dots">${dots}</div>
      </div>

      <div id="quiz-cards">${cards}</div>

      <div class="nav">
        <button class="btn" id="prev-btn" onclick="qNav(-1)" disabled>← Retour</button>
        <button class="btn btn-validate" id="val-btn" onclick="qValidate()" disabled>Valider ✓</button>
        <button class="btn" id="next-btn" onclick="qNav(1)" disabled>Suivant →</button>
      </div>
    </div>`;

  qUpdateUI();
  // Auto-focus sur la 1re question si elle est de type texte
  const q0 = S.liveQuestions[0];
  if (q0 && qType(q0) === 'texte') {
    const input = document.getElementById('txt-0');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

/* ── Quiz interaction ── */
function qPick(qi, oi) {
  if (S.validated[qi]) return;
  const q = S.liveQuestions[qi];
  const t = qType(q);

  if (t === 'qcm') {
    // QCM : sélection multiple, on toggle. Pas de validation automatique : c'est l'élève qui clique Valider.
    if (!Array.isArray(S.answers[qi])) S.answers[qi] = [];
    const idx = S.answers[qi].indexOf(oi);
    if (idx === -1) {
      S.answers[qi].push(oi);
      document.getElementById(`opt-${qi}-${oi}`).classList.add('selected');
    } else {
      S.answers[qi].splice(idx, 1);
      document.getElementById(`opt-${qi}-${oi}`).classList.remove('selected');
    }
    document.getElementById('val-btn').disabled = S.answers[qi].length === 0;
  } else {
    // QCU et Vrai/Faux : sélection unique + validation automatique après 1 s
    // (laisse à l'élève le temps de changer d'avis s'il s'est trompé en cliquant)
    S.answers[qi] = oi;
    document.querySelectorAll(`[id^="opt-${qi}-"]`).forEach(el => {
      el.classList.remove('selected', 'arming');
    });
    const optEl = document.getElementById(`opt-${qi}-${oi}`);
    optEl.classList.add('selected', 'arming');

    // Annuler tout timer en cours (l'élève vient de changer d'avis ou a recliqué)
    if (S.__pickTimer) clearTimeout(S.__pickTimer);
    // Programmer la validation automatique dans 1 seconde
    S.__pickTimer = setTimeout(() => {
      S.__pickTimer = null;
      // Vérifier qu'on est toujours sur la même question et qu'elle n'a pas été validée entre temps
      if (S.screen === 'quiz' && S.cur === qi && !S.validated[qi]) {
        qValidate();
      }
    }, 1000);
  }
}

/* Révèle l'indice de la question qi (masqué par défaut).
   Idempotent : si l'enfant clique plusieurs fois, on ne compte qu'une seule fois.
   L'usage d'un indice annule le bonus XP "sans-faute parfait" pour la session. */
function qShowHint(qi) {
  const hintEl = document.getElementById(`q-hint-${qi}`);
  const btnEl  = document.getElementById(`hint-btn-${qi}`);
  if (hintEl) hintEl.classList.remove('hidden');
  if (btnEl)  btnEl.style.display = 'none';
  // Comptabiliser l'indice (une seule fois par question)
  if (!S.hintsRevealed) S.hintsRevealed = {};
  if (!S.hintsRevealed[qi]) {
    S.hintsRevealed[qi] = true;
    S.hintsUsed = (S.hintsUsed || 0) + 1;
  }
}

/* ── Quiz : input texte ── */
function qTypeChange(qi, value) {
  if (S.validated[qi]) return;
  S.answers[qi] = value;
  document.getElementById('val-btn').disabled = !value || value.trim() === '';
}
function qTypeKey(ev, qi) {
  if (ev.key === 'Enter' && !S.validated[qi] && S.answers[qi] && S.answers[qi].trim() !== '') {
    qValidate();
  }
}

function qValidate() {
  const q = S.liveQuestions[S.cur];
  if (S.validated[S.cur] || !isAnswered(q, S.answers[S.cur])) return;
  // Annule tout timer "arming" en cours (l'élève a peut-être pressé Entrée plus tôt)
  if (S.__pickTimer) { clearTimeout(S.__pickTimer); S.__pickTimer = null; }
  S.validated[S.cur] = true;

  const t = qType(q);
  const chosen = S.answers[S.cur];
  const ok = isCorrect(q, chosen);
  const fb = document.getElementById(`fb-${S.cur}`);
  const dot = document.getElementById(`dot-${S.cur}`);

  // Verrouiller et appliquer les classes selon le type
  if (t === 'qcu' || t === 'vrai_faux') {
    document.querySelectorAll(`[id^="opt-${S.cur}-"]`).forEach(el => {
      el.classList.add('locked');
      el.classList.remove('arming');
    });
    if (ok) {
      document.getElementById(`opt-${S.cur}-${chosen}`).classList.add('correct');
    } else {
      document.getElementById(`opt-${S.cur}-${chosen}`).classList.add('wrong');
      document.getElementById(`opt-${S.cur}-${q.answer}`).classList.add('show-correct');
    }
  } else if (t === 'qcm') {
    document.querySelectorAll(`[id^="opt-${S.cur}-"]`).forEach(el => el.classList.add('locked'));
    const exp = new Set(q.answer);
    const got = new Set(chosen);
    q.options.forEach((_, oi) => {
      const el = document.getElementById(`opt-${S.cur}-${oi}`);
      el.classList.remove('selected');
      if (exp.has(oi) && got.has(oi))       el.classList.add('correct');
      else if (exp.has(oi) && !got.has(oi)) el.classList.add('show-correct');
      else if (!exp.has(oi) && got.has(oi)) el.classList.add('wrong');
    });
  } else if (t === 'texte') {
    const input = document.getElementById(`txt-${S.cur}`);
    if (input) {
      input.disabled = true;
      input.classList.add(ok ? 'correct' : 'wrong');
    }
  }

  // Feedback texte
  let bonneRep = '';
  if (t === 'qcu' || t === 'vrai_faux') bonneRep = q.options[q.answer];
  else if (t === 'qcm') bonneRep = q.answer.map(i => q.options[i]).join(', ');
  else if (t === 'texte') bonneRep = Array.isArray(q.answer) ? q.answer[0] : q.answer;

  if (ok) {
    S.correct++;
    fb.className = 'feedback show ok';
    fb.innerHTML = `✅ Excellente réponse !<div class="expl">${q.explication}</div>`;
    dot.classList.remove('current'); dot.classList.add('done');
    // ── Animations de récompense (sobres) ──
    S.streak = (S.streak || 0) + 1;
    rewardCorrect(S.cur, S.streak);
  } else {
    S.wrong++;
    fb.className = 'feedback show bad';
    fb.innerHTML = `❌ Pas tout à fait. Bonne réponse : <strong>${bonneRep}</strong><div class="expl">${q.explication}</div>`;
    dot.classList.remove('current'); dot.classList.add('wrong-dot');
    S.streak = 0; // la série se brise à la première erreur
  }

  qUpdateStats();
  document.getElementById('val-btn').disabled = true;
  const n = S.liveQuestions.length;
  const isLast = S.cur >= n - 1;

  if (!isLast) {
    document.getElementById('next-btn').disabled = false;
  } else {
    if (!S.reviewMode) saveProgress(S.subjId, S.topicId, S.correct, n);
    const valBtn = document.getElementById('val-btn');
    valBtn.style.display = '';   // s'assure que le bouton est visible (cas QCU/Vrai-Faux où il avait été caché)
    valBtn.textContent = '🏆 Voir mes résultats';
    valBtn.disabled = false;
    valBtn.onclick = goScore;
  }
  qUpdateProgress();

  // ─ AUTO-PASSAGE après 2,5 s ─
  // Pour QCU et Vrai/Faux uniquement (les autres types : on attend l'action de l'élève,
  // car en QCM/texte la validation est manuelle de toute façon).
  // ─ EXCEPTION : en cas de mauvaise réponse, on annule le passage automatique
  // pour laisser à l'enfant tout le temps de lire la correction. Le bouton "Suivant"
  // est mis en évidence (classe "highlight") pour qu'il sache où cliquer. ─
  if (t === 'qcu' || t === 'vrai_faux') {
    if (S.__nextTimer) clearTimeout(S.__nextTimer);
    if (!ok) {
      // Mauvaise réponse : pas d'auto-passage. On met le bouton "Suivant" (ou
      // "Voir mes résultats" pour la dernière) en évidence pour guider l'élève.
      const cta = isLast
        ? document.getElementById('val-btn')   // sur la dernière, c'est ce bouton qui sert à finir
        : document.getElementById('next-btn');
      if (cta) cta.classList.add('cta-highlight');
    } else {
      // Bonne réponse : auto-passage classique
      S.__nextTimer = setTimeout(() => {
        S.__nextTimer = null;
        if (S.screen !== 'quiz') return; // l'élève a quitté entre temps
        if (isLast) {
          if (!S.validated[S.cur]) return;
          goScore();
        } else {
          // Le bouton "Suivant" est déjà actif, on simule simplement son clic
          qNav(1);
        }
      }, 2500);
    }
  }
}

function qNav(dir) {
  // Annule tout timer en cours (l'élève a cliqué Suivant ou Retour explicitement)
  if (S.__pickTimer) { clearTimeout(S.__pickTimer); S.__pickTimer = null; }
  if (S.__nextTimer) { clearTimeout(S.__nextTimer); S.__nextTimer = null; }
  // Retire le surlignage du bouton CTA (peut avoir été ajouté en cas de mauvaise réponse)
  document.querySelectorAll('.cta-highlight').forEach(el => el.classList.remove('cta-highlight'));
  document.getElementById(`q-${S.cur}`).classList.remove('active');
  S.cur += dir;
  document.getElementById(`q-${S.cur}`).classList.add('active');
  document.querySelectorAll('.prog-dot').forEach((d, i) => {
    if (!S.validated[i]) d.classList.remove('current');
  });
  if (!S.validated[S.cur]) document.getElementById(`dot-${S.cur}`).classList.add('current');
  qUpdateUI();
  // Auto-focus sur le champ texte si la question est de type 'texte' et non validée
  const q = S.liveQuestions[S.cur];
  if (q && qType(q) === 'texte' && !S.validated[S.cur]) {
    const input = document.getElementById(`txt-${S.cur}`);
    if (input) setTimeout(() => input.focus(), 50);
  }
}

function qUpdateUI() {
  const questions = S.liveQuestions;
  const n = questions.length;
  const q = questions[S.cur];
  const t = qType(q);
  const isLastQ    = S.cur === n - 1;
  const isValidated = S.validated[S.cur];
  const hasAnswer  = isAnswered(q, S.answers[S.cur]);
  // Pour QCU/Vrai-Faux, la validation est automatique : on cache le bouton Valider
  // (sauf si c'est la dernière question validée, où il devient "Voir mes résultats")
  const hideValidate = (t === 'qcu' || t === 'vrai_faux') && !(isValidated && isLastQ);

  document.getElementById('prev-btn').disabled = S.cur === 0;
  document.getElementById('next-btn').disabled = !isValidated || isLastQ;

  const valBtn = document.getElementById('val-btn');
  if (hideValidate) {
    valBtn.style.display = 'none';
  } else {
    valBtn.style.display = '';
    if (isValidated && isLastQ) {
      // Dernière question validée → CTA persistant même après aller-retour
      valBtn.textContent = '🏆 Voir mes résultats';
      valBtn.onclick = goScore;
      valBtn.disabled = false;
    } else {
      valBtn.textContent = 'Valider ✓';
      valBtn.onclick = qValidate;
      valBtn.disabled = !hasAnswer || isValidated;
    }
  }

  qUpdateCounters();
}

/* Met à jour les compteurs "question courante / restantes" — utilisé après navigation et validation */
function qUpdateCounters() {
  const n = S.liveQuestions.length;
  document.getElementById('sq').textContent = `${S.cur + 1}/${n}`;
  document.getElementById('sr').textContent = n - S.validated.filter(Boolean).length;
}

function qUpdateStats() {
  document.getElementById('sc').textContent = S.correct;
  document.getElementById('se').textContent = S.wrong;
  qUpdateCounters();
}

function qUpdateProgress() {
  const n = S.liveQuestions.length;
  const done = S.validated.filter(Boolean).length;
  document.getElementById('prog-fill').style.width = (done / n * 100) + '%';
}

/* ═══════════════════════════════════════════════════
   SCORE SCREEN
   ═══════════════════════════════════════════════════ */
function renderScore() {
  const topic = S.randomMode ? null : getTopic(S.subjId, S.topicId);
  const subj = S.randomMode ? null : getSubject(S.subjId);
  const qs = S.liveQuestions;
  const n = qs.length;
  const pct = Math.round(S.correct / n * 100);

  const trophy   = pct >= 80 ? '🏆' : pct >= 60 ? '🥇' : pct >= 40 ? '🥈' : '📚';
  const mention  = pct >= 80 ? 'Excellent ! Tu maîtrises ce chapitre !'
                 : pct >= 60 ? 'Très bien ! Encore un petit effort.'
                 : pct >= 40 ? 'Bien, mais quelques points à revoir.'
                 : 'Courage ! Reprends le cours et réessaie.';

  // En mode aléatoire, on affiche aussi la matière d'origine de chaque question
  const recap = qs.map((q, i) => {
    const ok = isCorrect(q, S.answers[i]);
    let originTag = '';
    if (S.randomMode && q._origSubjId) {
      const os = getSubject(q._origSubjId);
      if (os) originTag = `<span class="recap-origin" title="${os.name}">${os.emoji}</span>`;
    }
    return `<div class="recap-item"><span>${ok ? '✅' : '❌'}</span>${originTag}<span>Q${i+1} – ${q.text.substring(0, 55)}${q.text.length > 55 ? '…' : ''}</span></div>`;
  }).join('');

  const hasErrors = S.wrong > 0;
  const reviewBtn = hasErrors
    ? `<button class="btn-primary review-btn" onclick="startReviewErrors()">🔁 Revoir mes ${S.wrong} erreur${S.wrong > 1 ? 's' : ''}</button>`
    : '';
  const titlePrefix = S.reviewMode ? '🔁 Révision · ' : '';

  // Confettis pour un sans-faute
  if (S.correct === n && !S.__confettiFired) {
    S.__confettiFired = true;
    setTimeout(launchConfetti, 250);
  } else if (S.correct !== n) {
    S.__confettiFired = false;
  }

  // Titre, breadcrumb et boutons d'action diffèrent selon le mode
  const screenTitle = S.randomMode
    ? `${titlePrefix}🎲 Quiz aléatoire`
    : `${titlePrefix}${topic.name}`;

  const breadcrumbBody = S.randomMode
    ? `<span class="current-crumb">🎲 Quiz aléatoire — Résultats</span>`
    : `<span class="crumb" onclick="goSubject('${S.subjId}')">${subj.name}</span>
       <span class="sep">›</span>
       <span class="current-crumb">Résultats</span>`;

  const actionBtns = S.randomMode
    ? `<button class="btn-secondary" onclick="goHome()">← Accueil</button>
       ${reviewBtn}
       <button class="btn-primary" onclick="startRandomQuiz()">🎲 Nouveau quiz aléatoire</button>`
    : `<button class="btn-secondary" onclick="goSubject('${S.subjId}')">← Retour aux thèmes</button>
       ${reviewBtn}
       <button class="btn-primary" onclick="startQuiz('${S.subjId}','${S.topicId}')">🔄 Recommencer</button>`;

  return `
    <div>
      <div class="breadcrumb">
        <span class="crumb" onclick="goHome()">🏠 Accueil</span>
        <span class="sep">›</span>
        ${breadcrumbBody}
      </div>

      <div class="score-panel">
        <span class="trophy">${trophy}</span>
        <h2>${screenTitle}</h2>
        <div class="big-score">${S.correct}<span>/${n}</span></div>
        <div class="mention">${mention}</div>

        ${(() => {
          if (!S.xpGained || S.reviewMode) return '';
          const isPerfect = S.correct === n && n > 0;
          const hintsUsed = S.hintsUsed || 0;
          let subMsg = '';
          if (isPerfect && hintsUsed === 0) {
            subMsg = `<div class="xp-sub xp-sub-perfect">🌟 Sans-faute parfait — bonus +20 XP !</div>`;
          } else if (isPerfect && hintsUsed > 0) {
            const word = hintsUsed === 1 ? 'indice utilisé' : 'indices utilisés';
            subMsg = `<div class="xp-sub xp-sub-info">✨ Sans-faute avec ${hintsUsed} ${word} — sans aide la prochaine fois, tu auras 20 XP de plus !</div>`;
          } else if (hintsUsed > 0) {
            const word = hintsUsed === 1 ? 'indice utilisé' : 'indices utilisés';
            subMsg = `<div class="xp-sub xp-sub-info">💡 ${hintsUsed} ${word} sur ce quiz</div>`;
          }
          return `<div class="xp-gained">+ ${S.xpGained} XP gagnés</div>${subMsg}`;
        })()}

        ${S.newBadges && S.newBadges.length ? `
          <div class="badge-unlock-wrap">
            <div class="lbl">🎉 Nouveau${S.newBadges.length > 1 ? 'x' : ''} badge${S.newBadges.length > 1 ? 's' : ''} débloqué${S.newBadges.length > 1 ? 's' : ''} !</div>
            <div class="badge-unlock-list">
              ${S.newBadges.map(b => { const d = getBadgeDisplay(b); return `
                <div class="badge-unlock-item">
                  <span class="emj">${d.emoji}</span>
                  <div class="nm">${d.name}</div>
                  <div class="ds">${d.desc}</div>
                </div>`; }).join('')}
            </div>
          </div>` : ''}

        <div class="result-grid">
          <div class="result-tile tile-ok">
            <div class="val">${S.correct}</div>
            <div class="lbl">✅ Bonnes réponses</div>
          </div>
          <div class="result-tile tile-bad">
            <div class="val">${S.wrong}</div>
            <div class="lbl">❌ Erreurs</div>
          </div>
        </div>

        <div class="recap">
          <h3>Récapitulatif</h3>
          ${recap}
        </div>

        <div class="score-btns">
          ${actionBtns}
        </div>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════════════════
   HISTORY SCREEN
   ═══════════════════════════════════════════════════ */
/* ─ Graphique d'évolution (SVG) ─
   `sessionsChrono` est l'ordre chronologique (ancien → récent). */
function renderEvolutionChart(sessionsChrono) {
  if (!sessionsChrono || sessionsChrono.length === 0) {
    return `<div class="evo-card">
      <div class="evo-title">📊 Évolution</div>
      <div class="evo-empty">Aucune session pour l'instant — lance un quiz pour voir tes progrès apparaître ici !</div>
    </div>`;
  }
  if (sessionsChrono.length === 1) {
    const s = sessionsChrono[0];
    const pct = Math.round((s.score / s.total) * 100);
    return `<div class="evo-card">
      <div class="evo-title">📊 Évolution</div>
      <div class="evo-empty">Première session : <strong>${pct}%</strong>. Joue une 2e session pour voir ta courbe se dessiner !</div>
    </div>`;
  }

  // Dimensions du SVG (viewBox responsive)
  const W = 320, H = 140, PAD_L = 28, PAD_R = 10, PAD_T = 10, PAD_B = 22;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;

  const pts = sessionsChrono.map((s, i) => {
    const pct = s.total > 0 ? (s.score / s.total) * 100 : 0;
    const x = PAD_L + (sessionsChrono.length === 1 ? innerW / 2 : (i / (sessionsChrono.length - 1)) * innerW);
    const y = PAD_T + innerH - (pct / 100) * innerH;
    return { x, y, pct, s };
  });

  // Grille horizontale et labels Y (0/50/100 %)
  const ySteps = [0, 50, 100];
  const grid = ySteps.map(v => {
    const y = PAD_T + innerH - (v / 100) * innerH;
    return `<line x1="${PAD_L}" y1="${y.toFixed(1)}" x2="${W - PAD_R}" y2="${y.toFixed(1)}" class="ev-grid" />
            <text x="${PAD_L - 5}" y="${(y + 3).toFixed(1)}" class="ev-axis" text-anchor="end">${v}%</text>`;
  }).join('');

  // Path principal + aire sous la courbe
  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L ${pts[pts.length-1].x.toFixed(1)},${(PAD_T + innerH).toFixed(1)} L ${pts[0].x.toFixed(1)},${(PAD_T + innerH).toFixed(1)} Z`;

  // Cercles colorés par matière (avec <title> pour tooltip natif)
  const dots = pts.map(p => {
    const isRandom = p.s.subjId === RANDOM_SUBJ_ID;
    const style = STYLES[p.s.subjId] || (isRandom ? STYLES.random : STYLES.maths);
    const sessLevel = p.s.level || DEFAULT_LEVEL;
    const subj = isRandom ? null : getSubject(p.s.subjId, sessLevel);
    const topic = isRandom ? null : getTopic(p.s.subjId, p.s.topicId, sessLevel);
    const labelLeft = isRandom ? '🎲 Quiz aléatoire' : `${subj ? subj.name : '?'} – ${topic ? topic.name : '?'}`;
    const label = `${labelLeft} : ${p.s.score}/${p.s.total} (${Math.round(p.pct)}%) · ${formatDate(p.s.timestamp)}`;
    return `<circle class="ev-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4.5"
              fill="${style.color}">
              <title>${label.replace(/"/g, '&quot;')}</title>
            </circle>`;
  }).join('');

  // Légende : uniquement les matières effectivement présentes dans ce jeu de sessions
  const presentSubjIds = [...new Set(sessionsChrono.map(s => s.subjId))];
  const legend = presentSubjIds.map(id => {
    if (id === RANDOM_SUBJ_ID) {
      const style = STYLES.random;
      return `<span class="evo-leg-item"><span class="evo-leg-dot" style="background:${style.color}"></span>🎲 Aléatoire</span>`;
    }
    const subj = getSubject(id);
    const style = STYLES[id];
    if (!subj || !style) return '';
    return `<span class="evo-leg-item"><span class="evo-leg-dot" style="background:${style.color}"></span>${subj.emoji} ${subj.name}</span>`;
  }).join('');

  // Moyenne globale et tendance (différence entre les 3 premiers et les 3 derniers)
  const avg = Math.round(pts.reduce((a, p) => a + p.pct, 0) / pts.length);
  let trend = '';
  if (pts.length >= 4) {
    const n3 = Math.min(3, Math.floor(pts.length / 2));
    const oldAvg = pts.slice(0, n3).reduce((a, p) => a + p.pct, 0) / n3;
    const newAvg = pts.slice(-n3).reduce((a, p) => a + p.pct, 0) / n3;
    const diff = Math.round(newAvg - oldAvg);
    if (diff >= 5)      trend = ` · 📈 en progrès (+${diff} pts)`;
    else if (diff <= -5) trend = ` · 📉 attention (${diff} pts)`;
    else                 trend = ' · ↔️ stable';
  }

  return `<div class="evo-card">
    <div class="evo-title">📊 Évolution</div>
    <div class="evo-sub">${pts.length} sessions · moyenne <strong>${avg}%</strong>${trend}</div>
    <svg class="evo-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="evGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"  stop-color="var(--blue)" stop-opacity=".55"/>
          <stop offset="100%" stop-color="var(--blue)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${grid}
      <path d="${areaPath}" class="ev-area" />
      <path d="${linePath}" class="ev-line" />
      ${dots}
    </svg>
    <div class="evo-legend">${legend}</div>
  </div>`;
}

function renderHistory() {
  const prof = getProfile();
  const allMine = getSessions().filter(s => s.profile === S.profile);
  // Pour la liste : 30 plus récentes (newest first)
  const sessionsList = allMine.slice().reverse().slice(0, 30);
  // Pour le graphique : 30 plus récentes en ordre chronologique (oldest → newest)
  const sessionsChrono = sessionsList.slice().reverse();

  const items = sessionsList.length === 0
    ? `<div class="session-empty">Aucune session pour l'instant.<br>Lance un quiz pour voir ton historique ici !</div>`
    : sessionsList.map(s => {
        const isRandom = s.subjId === RANDOM_SUBJ_ID;
        const sessLevel = s.level || DEFAULT_LEVEL;
        const subj = isRandom ? null : getSubject(s.subjId, sessLevel);
        const topic = isRandom ? null : getTopic(s.subjId, s.topicId, sessLevel);
        // Filtrer les sessions corrompues (matière/thème disparus) mais GARDER les sessions random
        if (!isRandom && (!subj || !topic)) return '';
        const stars = getStars(s.score, s.total);
        const cls = stars === 3 ? 's3' : stars === 2 ? 's2' : 's1';
        const emoji = isRandom ? '🎲' : subj.emoji;
        const topicName = isRandom ? 'Quiz aléatoire' : topic.name;
        const subjName = isRandom ? 'Multi-matières' : subj.name;
        return `
          <div class="session-item">
            <div class="session-emoji">${emoji}</div>
            <div class="session-info">
              <div class="session-topic">${topicName}</div>
              <div class="session-subj">${subjName}</div>
              <div class="session-date">${formatDate(s.timestamp)}</div>
            </div>
            <div class="session-right">
              <div class="session-score ${cls}">${s.score}/${s.total}</div>
              <div class="session-stars">${'⭐'.repeat(stars) || '☆☆☆'}</div>
            </div>
          </div>`;
      }).join('');

  const nb = sessionsList.length;
  return `
    <div class="anim-slide">
      <div class="breadcrumb">
        <span class="crumb" onclick="goHome()">🏠 Accueil</span>
        <span class="sep">›</span>
        <span class="current-crumb">Historique</span>
      </div>

      <div class="profile-banner" style="margin-bottom:1.25rem;">
        <div class="profile-banner-left">
          <span class="profile-avatar">${prof.emoji}</span>
          <div>
            <div class="profile-banner-name">${prof.name}</div>
            <div class="profile-banner-sub">${nb} session${nb !== 1 ? 's' : ''} enregistrée${nb !== 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>

      ${renderEvolutionChart(sessionsChrono)}

      <div class="section-title">Dernières sessions</div>
      <div class="history-list">${items}</div>

      ${nb > 0 ? `<div class="reset-link" onclick="resetHistory()">Effacer l'historique de ${prof.name}</div>` : ''}
    </div>`;
}

