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
  randomMode: false     // true en mode "Quiz aléatoire" multi-thèmes (pas de sauvegarde de progression par thème)
};

/* ═══════════════════════════════════════════════════
   UTILITAIRES
   ═══════════════════════════════════════════════════ */
function getSubject(id) { return CURRICULUM.find(s => s.id === id); }
function getTopic(sId, tId) {
  const subj = getSubject(sId);
  return subj ? subj.topics.find(t => t.id === tId) : undefined;
}
function getProfile() { return ALL_PROFILES.find(p => p.id === S.profile); }
function isGuest() { return S.profile === 'guest'; }

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

/* ─ Pioche n questions au hasard parmi TOUTES les matières et tous les thèmes ─
   Renvoie un tableau d'objets enrichis du subjId et topicId d'origine, utiles
   pour afficher l'origine de chaque question dans l'écran de score. */
function pickRandomQuestions(n) {
  const pool = [];
  CURRICULUM.forEach(s => s.topics.forEach(t => {
    t.questions.forEach(q => pool.push({ ...q, _origSubjId: s.id, _origTopicId: t.id }));
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

function progressKey() { return `cm2-progress-${S.profile}`; }
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
  sessions.push({ profile: S.profile, timestamp: Date.now(), subjId: sId, topicId: tId, score, total, hintsUsed });
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
  { id: 'topics_all', emoji: '👑', name: 'Maître CM2', desc: 'Tous les 65 thèmes complétés', check: c => c.topicsCompleted >= 65 }
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

/* Contexte global pour évaluer les badges */
function computeBadgeContext() {
  const sessions = getSessions().filter(s => s.profile === S.profile);
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
  return {
    totalSessions:   sessions.length,
    perfectCount:    sessions.filter(s => s.score === s.total && s.total > 0).length,
    subjectsPlayed:  new Set(sessions.map(s => s.subjId)).size,
    topicsCompleted,
    bestStreak:      computeBestStreak(sessions)
  };
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

