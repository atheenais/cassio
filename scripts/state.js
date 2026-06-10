/* ═══════════════════════════════════════════════════
   ÉTAT DE L'APPLICATION
   ═══════════════════════════════════════════════════ */
let S = {
  screen: 'profile',
  profile: null,
  subjId: null,
  topicId: null,
  cur: 0,
  answers: [],
  validated: [],
  correct: 0,
  wrong: 0,
  hintsUsed: 0,        // nombre d'indices révélés pendant la session courante (impacte le bonus XP "sans-faute parfait")
  liveQuestions: null,  // copie mélangée des questions du quiz courant
  reviewMode: false,    // true en mode révision des erreurs (pas de sauvegarde de progression)
  randomMode: false,    // true en mode "Quiz aléatoire" multi-thèmes (pas de sauvegarde de progression par thème)
  weakMode: false       // true en mode "Mes points faibles" (repioche des questions ratées)
};

/* ═══════════════════════════════════════════════════
   NIVEAU SCOLAIRE COURANT (CM2, 6ème, 5ème...)
   ═══════════════════════════════════════════════════
   Le niveau courant est stocké par profil dans `cm2-level-{profileId}`.
   Il est distinct de la customization (emoji, nom) volontairement :
   - tous les profils ont un niveau (y compris l'invité)
   - mais seuls Elias et Leïla peuvent personnaliser leur emoji/nom
   Tant qu'il n'y a qu'un seul niveau peuplé, ce mécanisme est invisible
   pour l'utilisateur (sélecteur masqué). */

function getCurrentLevel() {
  if (!S.profile) return DEFAULT_LEVEL;
  const stored = localStorage.getItem(`cm2-level-${S.profile}`);
  if (stored && LEVELS_CONFIG[stored]) return stored;
  return DEFAULT_LEVEL;
}

function setCurrentLevel(levelId) {
  if (!S.profile) return;
  if (!LEVELS_CONFIG[levelId]) return;
  localStorage.setItem(`cm2-level-${S.profile}`, levelId);
  _invalidateCache('all'); // les caches progress/sessions sont liés au niveau
}

/* Indique si un profil a déjà choisi explicitement son niveau.
   Sert à déclencher la popup d'onboarding au premier lancement (uniquement
   si plusieurs niveaux sont peuplés). */
function hasLevelChosen(profileId) {
  return !!localStorage.getItem(`cm2-level-${profileId}`);
}

/* ═══════════════════════════════════════════════════
   UTILITAIRES
   ═══════════════════════════════════════════════════ */

/* getSubject / getTopic acceptent un argument level optionnel.
   Par défaut : niveau courant du profil actif.
   Pour les écrans qui parcourent l'historique multi-niveaux (ex. session
   stockée avec son level d'origine), passer le level explicitement. */
function getSubject(id, level) {
  const lvl = level || getCurrentLevel();
  return getCurriculum(lvl).find(s => s.id === id);
}
function getTopic(sId, tId, level) {
  const subj = getSubject(sId, level);
  return subj ? subj.topics.find(t => t.id === tId) : undefined;
}
/* getProfile() retourne le profil enrichi avec sa personnalisation.
   Les valeurs personnalisées (emoji, nom) sont stockées par profil dans le
   localStorage et écrasent les valeurs par défaut. Si rien n'est stocké,
   on retourne les valeurs de config.js. Le profil invité ne se personnalise pas. */
function getProfile() {
  const base = ALL_PROFILES.find(p => p.id === S.profile);
  if (!base) return null;
  if (S.profile === 'guest') return base; // jamais de personnalisation pour l'invité
  const custom = getCustomization(S.profile);
  if (!custom) return base;
  return { ...base, ...custom };
}

/* Lit la personnalisation d'un profil. Retourne null si pas encore personnalisé. */
function getCustomization(profileId) {
  try {
    const raw = localStorage.getItem(`cm2-customization-${profileId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Validation minimale : on ne garde que les champs attendus
    const out = {};
    if (typeof parsed.emoji === 'string' && parsed.emoji.trim()) out.emoji = parsed.emoji;
    if (typeof parsed.name === 'string' && parsed.name.trim()) out.name = parsed.name.trim();
    return Object.keys(out).length ? out : null;
  } catch { return null; }
}

/* Indique si un profil a déjà été personnalisé (existence de la clé en localStorage). */
function hasCustomization(profileId) {
  return !!getCustomization(profileId);
}

/* Sauvegarde la personnalisation. emoji et name sont validés ici. */
function saveCustomization(profileId, emoji, name) {
  if (profileId === 'guest') return; // sécurité
  const cleanName = (name || '').trim().slice(0, 20);
  const data = {};
  if (emoji) data.emoji = emoji;
  if (cleanName) data.name = cleanName;
  localStorage.setItem(`cm2-customization-${profileId}`, JSON.stringify(data));
}

function isGuest() { return S.profile === 'guest'; }

/* Renvoie les infos d'affichage d'une pseudo-matière (Quiz aléatoire / Points
   faibles) à partir de son subjId de session, ou null si c'est une vraie matière.
   Centralise les libellés pour l'historique, la légende et la liste des sessions. */
function pseudoSubjInfo(subjId) {
  if (subjId === RANDOM_SUBJ_ID) {
    return { styleId: 'random', emoji: '🎲', label: '🎲 Quiz aléatoire',
             legendLabel: '🎲 Aléatoire', topicName: 'Quiz aléatoire', subjName: 'Multi-matières' };
  }
  if (subjId === WEAK_SUBJ_ID) {
    return { styleId: 'weak', emoji: '🎯', label: '🎯 Mes points faibles',
             legendLabel: '🎯 Points faibles', topicName: 'Mes points faibles', subjName: 'Révision ciblée' };
  }
  return null;
}

/* ─ Types de questions ─ */
function qType(q) { return q.type || 'qcu'; }

/* ─ Mélange aléatoire (Fisher–Yates) ─ */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─ Pioche n questions au hasard parmi TOUTES les matières et tous les thèmes
   du niveau courant ─
   Renvoie un tableau d'objets enrichis du subjId et topicId d'origine, utiles
   pour afficher l'origine de chaque question dans l'écran de score. */
function pickRandomQuestions(n) {
  const pool = [];
  const curriculum = getCurriculum(getCurrentLevel());
  curriculum.forEach(s => s.topics.forEach(t => {
    t.questions.forEach((q, i) => pool.push({ ...q, _origSubjId: s.id, _origTopicId: t.id, _origQi: i }));
  }));
  return shuffleArray(pool).slice(0, n);
}
function prepareQuestion(q) {
  const t = qType(q);
  // Pas de mélange pour V/F (sémantique gauche=Vrai) ni texte (pas d'options)
  if (t === 'texte' || t === 'vrai_faux') return { ...q };
  const n = q.options.length;
  const perm = shuffleArray([...Array(n).keys()]);   // perm[i] = ancien index pour la nouvelle position i
  const newOptions = perm.map(i => q.options[i]);
  let newAnswer;
  if (t === 'qcm') newAnswer = q.answer.map(old => perm.indexOf(old));
  else             newAnswer = perm.indexOf(q.answer);
  return { ...q, options: newOptions, answer: newAnswer };
}

/* ═══════════════════════════════════════════════════
   MÉMOIRE DES ERREURS — Mode "Mes points faibles"
   ═══════════════════════════════════════════════════
   Stocke les questions ratées par profil et par niveau pour permettre un
   quiz de révision ciblé. Pondération par fréquence (Niveau 2) : une question
   ratée N fois pèse N fois plus dans la pioche, modulée par la récence.

   Clé localStorage : cm2-mistakes-{profileId}-{level}
   Chaque entrée : { sId, tId, qi, qHint, wrongCount, lastWrongAt }
     - sId, tId, qi : identifient la question (matière / thème / index)
     - qHint : 40 premiers caractères du texte, garde-fou si le contenu change
               (si à la repioche le texte ne correspond plus à l'index, on ignore
                l'entrée — évite de présenter une question jamais ratée après un
                réordonnancement du fichier de données)
     - wrongCount : nombre de fois ratée (sert à la pondération)
     - lastWrongAt : timestamp de la dernière erreur (sert au facteur de récence)

   Décisions actées :
   - Identification par index (qi) + garde-fou texte
   - Seuil d'apparition du CTA : 10 erreurs uniques (avec complément "thèmes fragiles")
   - Pondération Niveau 2, démarrage de la mémoire à partir de cette version (pas de rétroactif)
*/

function _mistakesKey() {
  return `cm2-mistakes-${S.profile}-${getCurrentLevel()}`;
}

function getMistakes() {
  if (!S.profile) return [];
  try {
    const raw = localStorage.getItem(_mistakesKey());
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveMistakes(list) {
  if (!S.profile || S.profile === 'guest') return; // pas de persistance pour l'invité
  try { localStorage.setItem(_mistakesKey(), JSON.stringify(list)); } catch (e) { /* quota plein : on ignore */ }
}

/* Enregistre une erreur. Si la question est déjà connue, incrémente wrongCount
   et rafraîchit lastWrongAt. Sinon crée une nouvelle entrée. */
function recordMistake(sId, tId, qi, questionText) {
  if (!S.profile || S.profile === 'guest') return;
  if (sId === RANDOM_SUBJ_ID || tId === RANDOM_SUBJ_ID) return; // sécurité : jamais d'ID random
  const list = getMistakes();
  const existing = list.find(m => m.sId === sId && m.tId === tId && m.qi === qi);
  if (existing) {
    existing.wrongCount = (existing.wrongCount || 1) + 1;
    existing.lastWrongAt = Date.now();
  } else {
    list.push({
      sId, tId, qi,
      qHint: String(questionText || '').slice(0, 40),
      wrongCount: 1,
      lastWrongAt: Date.now()
    });
  }
  saveMistakes(list);
}

/* Retire une question de la mémoire (réussie en mode points faibles). */
function clearMistake(sId, tId, qi) {
  if (!S.profile || S.profile === 'guest') return;
  const list = getMistakes().filter(m => !(m.sId === sId && m.tId === tId && m.qi === qi));
  saveMistakes(list);
}

/* Résout une entrée de mémoire vers la question réelle du curriculum.
   Renvoie null si la question n'existe plus OU si le garde-fou texte ne
   correspond plus (contenu réordonné depuis l'enregistrement de l'erreur). */
function resolveMistake(m) {
  const topic = getTopic(m.sId, m.tId);
  if (!topic || !topic.questions || m.qi >= topic.questions.length) return null;
  const q = topic.questions[m.qi];
  if (!q) return null;
  // Garde-fou : le début du texte doit toujours correspondre
  if (m.qHint && String(q.text || '').slice(0, 40) !== m.qHint) return null;
  return { ...q, _origSubjId: m.sId, _origTopicId: m.tId, _origQi: m.qi };
}

/* Facteur de récence : une erreur récente pèse plus qu'une vieille erreur. */
function _recencyFactor(lastWrongAt) {
  const days = (Date.now() - (lastWrongAt || 0)) / (1000 * 60 * 60 * 24);
  if (days <= 7) return 1.0;
  if (days <= 30) return 0.7;
  return 0.4;
}

/* Compte le nombre d'erreurs uniques actuellement en mémoire (résolvables). */
function countWeakQuestions() {
  return getMistakes().filter(m => resolveMistake(m) !== null).length;
}

/* Construit les questions du quiz "points faibles".
   1. Pioche pondérée parmi les erreurs mémorisées (poids = wrongCount × récence)
   2. Si moins de n erreurs disponibles, complète avec des questions issues des
      "thèmes fragiles" (thèmes commencés avec un score < 80%), pour que le mode
      soit utilisable même avant d'avoir accumulé beaucoup d'erreurs.
   Renvoie un tableau de questions enrichies (_origSubjId / _origTopicId). */
function pickWeakQuestions(n) {
  const count = n || 10;
  const mistakes = getMistakes();

  // Résoudre + calculer le poids de chaque erreur encore valide
  const weighted = [];
  mistakes.forEach(m => {
    const q = resolveMistake(m);
    if (q) weighted.push({ q, weight: (m.wrongCount || 1) * _recencyFactor(m.lastWrongAt), m });
  });

  // Pioche pondérée sans remise
  const picked = [];
  const pool = weighted.slice();
  while (picked.length < count && pool.length > 0) {
    const total = pool.reduce((sum, e) => sum + e.weight, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (let i = 0; i < pool.length; i++) {
      r -= pool[i].weight;
      if (r <= 0) { idx = i; break; }
    }
    picked.push(pool[idx].q);
    pool.splice(idx, 1);
  }

  // Complément "thèmes fragiles" si pas assez d'erreurs en mémoire
  if (picked.length < count) {
    const already = new Set(picked.map(q => `${q._origSubjId}/${q._origTopicId}/${q.text}`));
    const fragiles = [];
    const progress = getProgress();
    getCurriculum(getCurrentLevel()).forEach(s => {
      s.topics.forEach(t => {
        const p = progress[s.id] && progress[s.id][t.id];
        // Thème "fragile" : déjà tenté mais réussi à moins de 80%
        if (p && p.total > 0 && (p.score / p.total) < 0.8) {
          t.questions.forEach((q, i) => {
            const key = `${s.id}/${t.id}/${q.text}`;
            if (!already.has(key)) fragiles.push({ ...q, _origSubjId: s.id, _origTopicId: t.id, _origQi: i });
          });
        }
      });
    });
    shuffleArray(fragiles).slice(0, count - picked.length).forEach(q => picked.push(q));
  }

  return picked;
}


function normalizeText(s) {
  return String(s).toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // retire les accents
    .replace(/\s+/g, ' ');
}
function checkTextAnswer(userInput, expected) {
  const n = normalizeText(userInput);
  if (Array.isArray(expected)) return expected.some(e => normalizeText(e) === n);
  return normalizeText(expected) === n;
}
function isAnswered(q, ans) {
  const t = qType(q);
  if (t === 'qcm')   return Array.isArray(ans) && ans.length > 0;
  if (t === 'texte') return typeof ans === 'string' && ans.trim() !== '';
  return ans !== null && ans !== undefined;
}
function isCorrect(q, ans) {
  const t = qType(q);
  if (t === 'qcu' || t === 'vrai_faux') return ans === q.answer;
  if (t === 'qcm') {
    if (!Array.isArray(ans)) return false;
    const exp = new Set(q.answer);
    const got = new Set(ans);
    return exp.size === got.size && [...exp].every(x => got.has(x));
  }
  if (t === 'texte') return checkTextAnswer(ans || '', q.answer);
  return false;
}

/* ─ Progression par profil ─
   Les lectures de localStorage sont cachées pour éviter de parser le JSON
   à répétition pendant un même rendu. Le cache est invalidé à chaque écriture
   (saveProgress, saveSession, resetProgress, etc.) via _invalidateCache(). */
const _cache = { progress: {}, sessions: null };
function _invalidateCache(scope) {
  if (scope === 'progress' || scope === 'all') _cache.progress = {};
  if (scope === 'sessions' || scope === 'all') _cache.sessions = null;
}

function progressKey() { return `cm2-progress-${S.profile}-${getCurrentLevel()}`; }
function getProgress() {
  const key = progressKey();
  if (_cache.progress[key] !== undefined) return _cache.progress[key];
  let data;
  try { data = JSON.parse(localStorage.getItem(key) || '{}'); } catch { data = {}; }
  _cache.progress[key] = data;
  return data;
}
function saveProgress(sId, tId, score, total) {
  const p = getProgress();
  if (!p[sId]) p[sId] = {};
  const prev = p[sId][tId];
  // On remplace l'entrée précédente si :
  // - aucun score n'existait, OU
  // - le score précédent est obsolète (total différent du format actuel : on a changé le nb. de questions du thème), OU
  // - le nouveau score absolu est meilleur que le précédent (mêmes conditions de comparaison)
  const isPrevStale = prev && prev.total !== total;
  if (!prev || isPrevStale || score > prev.score) {
    p[sId][tId] = { score, total };
  }
  localStorage.setItem(progressKey(), JSON.stringify(p));
  _invalidateCache('progress');
}

/* ─ Helper : score stocké pour un thème, enrichi d'un drapeau "stale"
   si le total stocké ne correspond plus au nombre de questions actuel
   (cas : un thème passé de 5 à 10 questions après une mise à jour du programme).
   Retourne null si aucun score n'est stocké pour ce thème.
   Champs renvoyés : { score, total (stocké), actualTotal (au moment du chargement), stale (boolean) } */
function getTopicScore(sId, tId) {
  const p = getProgress();
  const stored = p[sId]?.[tId];
  if (!stored) return null;
  const topic = getTopic(sId, tId);
  const actualTotal = topic ? topic.questions.length : stored.total;
  return {
    score: stored.score,
    total: stored.total,
    actualTotal,
    stale: stored.total !== actualTotal
  };
}

/* Vrai si un thème a été complété AU FORMAT ACTUEL (toutes les questions vues).
   Si un thème est passé de 5 à 10 questions, un ancien 5/5 ne compte plus comme complet. */
function isTopicFresh(sId, tId) {
  const ts = getTopicScore(sId, tId);
  return !!ts && !ts.stale;
}

/* ─ Historique des sessions ─ */
function getSessions() {
  if (_cache.sessions !== null) return _cache.sessions;
  let data;
  try { data = JSON.parse(localStorage.getItem('cm2-sessions') || '[]'); } catch { data = []; }
  _cache.sessions = data;
  return data;
}
function saveSession(sId, tId, score, total, hintsUsed = 0) {
  const sessions = getSessions();
  sessions.push({
    profile: S.profile,
    level: getCurrentLevel(),    // niveau scolaire au moment du quiz (utile pour stats/badges par niveau)
    timestamp: Date.now(),
    subjId: sId,
    topicId: tId,
    score, total, hintsUsed
  });
  if (sessions.length > 200) sessions.shift();
  localStorage.setItem('cm2-sessions', JSON.stringify(sessions));
  _invalidateCache('sessions');
}
function formatDate(ts) {
  return new Date(ts).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

/* ═══════════════════════════════════════════════════
   XP & NIVEAUX
   ═══════════════════════════════════════════════════ */

/* Seuils cumulés en XP pour atteindre chaque niveau (index 0 = niveau 1) */
const LEVELS = [0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500, 10000, 13000, 17000, 22000, 28000];

/* XP gagnés pour une session.
   Règle : 10 XP par bonne réponse + 5 XP si première session du jour.
   Bonus "sans-faute parfait" de 20 XP UNIQUEMENT si aucun indice n'a été utilisé.
   (Un sans-faute avec indices reste valorisant mais ne touche pas le bonus.) */
function computeSessionXP(score, total, isFirstOfDay, hintsUsed = 0) {
  let xp = score * 10;
  if (total > 0 && score === total && hintsUsed === 0) xp += 20;
  if (isFirstOfDay) xp += 5;
  return xp;
}

function isFirstSessionToday() {
  const today = new Date().toDateString();
  return !getSessions().some(s => s.profile === S.profile && new Date(s.timestamp).toDateString() === today);
}

/* XP total cumulé du profil actif (recalculé à chaque appel — peu coûteux) */
function computeTotalXP() {
  const sessions = getSessions().filter(s => s.profile === S.profile);
  let xp = 0;
  const daysSeen = new Set();
  // Parcours chronologique pour identifier la "première du jour"
  const chrono = sessions.slice().sort((a, b) => a.timestamp - b.timestamp);
  for (const s of chrono) {
    const day = new Date(s.timestamp).toDateString();
    const isFirst = !daysSeen.has(day);
    if (isFirst) daysSeen.add(day);
    xp += computeSessionXP(s.score, s.total, isFirst, s.hintsUsed || 0);
  }
  return xp;
}

/* Informations de niveau à partir d'un XP donné */
function getLevelInfo(xp) {
  let lvl = 1;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i]) lvl = i + 1;
  }
  const levelStart = LEVELS[lvl - 1];
  const levelEnd   = LEVELS[lvl] ?? null;
  const intoLevel  = xp - levelStart;
  const levelSpan  = levelEnd ? (levelEnd - levelStart) : 0;
  const pct        = levelEnd ? Math.round(intoLevel / levelSpan * 100) : 100;
  return { level: lvl, xp, levelStart, levelEnd, intoLevel, levelSpan, pct, isMax: !levelEnd };
}

/* ═══════════════════════════════════════════════════
   BADGES
   ═══════════════════════════════════════════════════ */

const BADGES = [
  // Volume — nombre de sessions terminées
  { id: 'first_session', emoji: '🌱', name: 'Premiers pas',  desc: 'Première session terminée',  check: c => c.totalSessions >= 1 },
  { id: 'sessions_5',    emoji: '🎯', name: 'Curieux',       desc: '5 sessions jouées',          check: c => c.totalSessions >= 5 },
  { id: 'sessions_10',   emoji: '🎮', name: 'Régulier',      desc: '10 sessions jouées',         check: c => c.totalSessions >= 10 },
  { id: 'sessions_25',   emoji: '🏃', name: 'Marathonien',   desc: '25 sessions jouées',         check: c => c.totalSessions >= 25 },
  { id: 'sessions_50',   emoji: '🦾', name: 'Acharné',       desc: '50 sessions jouées',         check: c => c.totalSessions >= 50 },

  // Perfection — sessions à 100 %
  { id: 'first_perfect', emoji: '⭐', name: 'Premier sans-faute', desc: 'Une session à 100 %',   check: c => c.perfectCount >= 1 },
  { id: 'perfect_5',     emoji: '✨', name: 'Précis',            desc: '5 sessions à 100 %',     check: c => c.perfectCount >= 5 },
  { id: 'perfect_10',    emoji: '💎', name: 'Virtuose',          desc: '10 sessions à 100 %',    check: c => c.perfectCount >= 10 },
  { id: 'perfect_25',    emoji: '🌟', name: 'Génie',             desc: '25 sessions à 100 %',    check: c => c.perfectCount >= 25 },

  // Régularité — jours consécutifs
  { id: 'streak_2',  emoji: '📅', name: 'Constant',     desc: "2 jours d'affilée",   check: c => c.bestStreak >= 2 },
  { id: 'streak_5',  emoji: '🔥', name: 'Persévérant',  desc: "5 jours d'affilée",   check: c => c.bestStreak >= 5 },
  { id: 'streak_10', emoji: '🌋', name: 'Inarrêtable',  desc: "10 jours d'affilée",  check: c => c.bestStreak >= 10 },

  // Diversité — toutes les matières touchées
  { id: 'all_subjects', emoji: '🌈', name: 'Polyvalent', desc: 'Au moins 1 session dans chaque matière', check: c => c.subjectsPlayed >= 6 },

  // Maîtrise — thèmes complétés
  { id: 'topics_10',  emoji: '🎓', name: 'Bon élève',  desc: '10 thèmes complétés',  check: c => c.topicsCompleted >= 10 },
  { id: 'topics_25',  emoji: '🏅', name: 'Expert',     desc: '25 thèmes complétés',  check: c => c.topicsCompleted >= 25 },
  /* "Maître du niveau" : seuil dynamique calculé à partir du nombre de thèmes
     du niveau courant. Le nom et la description sont aussi dynamiques :
     "Maître de CM2" / "Maître de 6ème"... (voir computeBadgeContext). */
  { id: 'topics_all', emoji: '👑', name: 'Maître du niveau', desc: 'Tous les thèmes du niveau complétés',
    check: c => c.totalTopics > 0 && c.topicsCompleted >= c.totalTopics, dynamic: true }
];

/* Plus longue série de jours consécutifs avec ≥ 1 session */
function computeBestStreak(sessions) {
  if (sessions.length === 0) return 0;
  const days = [...new Set(sessions.map(s => new Date(s.timestamp).toDateString()))]
    .map(d => new Date(d).getTime())
    .sort((a, b) => a - b);
  if (days.length === 1) return 1;
  let best = 1, current = 1;
  const DAY = 24 * 3600 * 1000;
  for (let i = 1; i < days.length; i++) {
    const diff = Math.round((days[i] - days[i - 1]) / DAY);
    if (diff === 1) { current++; if (current > best) best = current; }
    else if (diff > 1) { current = 1; }
  }
  return best;
}

/* Série EN COURS : nombre de jours consécutifs jusqu'à aujourd'hui (ou hier).
   - Si la dernière session est ≥ 2 jours dans le passé : la série est cassée → 0
   - Si elle est d'aujourd'hui ou d'hier : on remonte tant que les jours sont consécutifs
   La série "tient" un jour de répit : si tu joues mardi, tu peux jouer mercredi
   pour continuer ; si tu attends jeudi, c'est cassé. */
function computeCurrentStreak(sessions) {
  if (sessions.length === 0) return 0;
  const DAY = 24 * 3600 * 1000;
  const startOfDay = ts => { const d = new Date(ts); d.setHours(0,0,0,0); return d.getTime(); };
  const today = startOfDay(Date.now());
  // Jours uniques où l'utilisateur a joué (en début de journée), triés du plus récent au plus ancien
  const days = [...new Set(sessions.map(s => startOfDay(s.timestamp)))].sort((a, b) => b - a);
  // Si le dernier jour joué est plus vieux que hier, la série est cassée
  const mostRecent = days[0];
  const daysSinceLast = Math.round((today - mostRecent) / DAY);
  if (daysSinceLast > 1) return 0;
  // Sinon on remonte
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const diff = Math.round((days[i - 1] - days[i]) / DAY);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

/* Indique si l'utilisateur a déjà joué aujourd'hui (au moins 1 session sur la journée actuelle) */
function hasPlayedToday(sessions) {
  if (sessions.length === 0) return false;
  const today = new Date().toDateString();
  return sessions.some(s => new Date(s.timestamp).toDateString() === today);
}

/* Contexte global pour évaluer les badges.
   Filtré par niveau courant (les badges sont par niveau ; recommencer un
   niveau permet de les redébloquer). Les sessions du quiz aléatoire sont
   conservées même si subjId == '__random__'. */
function computeBadgeContext() {
  const level = getCurrentLevel();
  const sessions = getSessions().filter(s => s.profile === S.profile && (s.level || DEFAULT_LEVEL) === level);
  const progress = getProgress();
  // On ne compte un thème comme "complété" que si son total stocké correspond
  // au nombre actuel de questions du thème (un ancien 5/5 sur un thème désormais
  // à 10 questions ne compte donc plus jusqu'à ce qu'il soit rejoué).
  let topicsCompleted = 0;
  for (const sId in progress) {
    for (const tId in progress[sId]) {
      if (isTopicFresh(sId, tId)) topicsCompleted++;
    }
  }
  // Nombre total de thèmes disponibles dans le niveau courant — sert au seuil
  // dynamique du badge "Maître du niveau".
  const totalTopics = getCurriculum(level).reduce((n, s) => n + s.topics.length, 0);
  return {
    totalSessions:   sessions.length,
    perfectCount:    sessions.filter(s => s.score === s.total && s.total > 0).length,
    subjectsPlayed:  new Set(sessions.map(s => s.subjId)).size,
    topicsCompleted,
    totalTopics,
    bestStreak:      computeBestStreak(sessions)
  };
}

/* Retourne le badge enrichi avec son nom/desc contextualisé pour les badges
   marqués `dynamic: true`. Pour les autres, retourne le badge tel quel. */
function getBadgeDisplay(badge) {
  if (!badge.dynamic) return badge;
  const lvl = getLevelConfig(getCurrentLevel());
  const lvlName = lvl ? lvl.name : '';
  if (badge.id === 'topics_all') {
    return {
      ...badge,
      name: `Maître de ${lvlName}`,
      desc: `Tous les thèmes de ${lvlName} complétés`
    };
  }
  return badge;
}

/* Liste des badges actuellement débloqués pour le profil actif */
function computeBadgesUnlocked() {
  const ctx = computeBadgeContext();
  return BADGES.filter(b => b.check(ctx));
}
function getStars(score, total) {
  const r = score / total;
  if (r >= 0.8) return 3;
  if (r >= 0.5) return 2;
  if (r > 0)   return 1;
  return 0;
}
function starsHTML(n, max = 3) {
  return Array.from({ length: max }, (_, i) => `<span class="topic-star">${i < n ? '⭐' : '☆'}</span>`).join('');
}

function applySubjStyle(id) {
  if (!id) {
    document.documentElement.style.setProperty('--subj-color', '#4f9cf9');
    document.documentElement.style.setProperty('--subj-grad', 'linear-gradient(135deg,#4f9cf9,#a78bfa)');
    return;
  }
  const s = STYLES[id];
  document.documentElement.style.setProperty('--subj-color', s.color);
  document.documentElement.style.setProperty('--subj-grad', s.grad);
}

