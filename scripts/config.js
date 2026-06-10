/* ═══════════════════════════════════════════════════
   STYLES PAR MATIÈRE
   ═══════════════════════════════════════════════════ */
const STYLES = {
  maths:     { color: '#4f9cf9', grad: 'linear-gradient(135deg, #4f9cf9, #a78bfa)' },
  francais:  { color: '#fb923c', grad: 'linear-gradient(135deg, #fb923c, #f472b6)' },
  histoire:    { color: '#2dd4bf', grad: 'linear-gradient(135deg, #2dd4bf, #34d399)' },
  'histoire-geo': { color: '#0d9488', grad: 'linear-gradient(135deg, #0d9488, #2dd4bf)' }, // matière 6ème (histoire + géo)
  sciences:    { color: '#fbbf24', grad: 'linear-gradient(135deg, #fbbf24, #fb923c)' },
  anglais:   { color: '#a78bfa', grad: 'linear-gradient(135deg, #a78bfa, #6366f1)' },
  espagnol:  { color: '#f97316', grad: 'linear-gradient(135deg, #f97316, #facc15)' },
  emc:       { color: '#ec4899', grad: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
  svt:       { color: '#10b981', grad: 'linear-gradient(135deg, #10b981, #84cc16)' },
  techno:    { color: '#475569', grad: 'linear-gradient(135deg, #475569, #06b6d4)' },
  physchim:  { color: '#ef4444', grad: 'linear-gradient(135deg, #ef4444, #f59e0b)' },
  latin:     { color: '#d97706', grad: 'linear-gradient(135deg, #d97706, #b45309)' },
  numerique: { color: '#06b6d4', grad: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' },
  /* Pseudo-matière pour le mode "Quiz aléatoire" multi-thèmes */
  random:    { color: '#8b5cf6', grad: 'linear-gradient(135deg, #8b5cf6, #ec4899)' },
  /* Pseudo-matière pour le mode "Mes points faibles" */
  weak:      { color: '#0ea5e9', grad: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }
};

/* Identifiant spécial utilisé pour marquer une session "Quiz aléatoire" */
const RANDOM_SUBJ_ID = '__random__';
/* Identifiant spécial utilisé pour marquer une session "Mes points faibles" */
const WEAK_SUBJ_ID = '__weak__';

/* ═══════════════════════════════════════════════════
   PROFILS
   ═══════════════════════════════════════════════════ */
const PROFILES = [
  { id: 'elias', name: 'Elias', emoji: '👦', color: '#4f9cf9', grad: 'linear-gradient(135deg,#4f9cf9,#6366f1)' },
  { id: 'leila', name: 'Leïla', emoji: '👧', color: '#f472b6', grad: 'linear-gradient(135deg,#f472b6,#fb923c)' }
];

/* Profil "invité" : séparé de PROFILES car il a un statut particulier.
   - Pas affiché comme carte au même rang qu'Elias/Leïla
   - Pas d'export/import autorisé en mode invité
   - Progression stockée séparément dans cm2-progress-guest
   - Bannière dédiée visible pendant la session */
const GUEST_PROFILE = { id: 'guest', name: 'Invité', emoji: '👤', color: '#94a3b8', grad: 'linear-gradient(135deg,#94a3b8,#64748b)' };
const ALL_PROFILES = PROFILES.concat([GUEST_PROFILE]);

/* Choix d'emojis pour la personnalisation d'avatar. Variés et adaptés enfant.
   Les emojis par défaut 👦 et 👧 sont inclus pour permettre de revenir au look d'origine. */
const AVATAR_EMOJIS = [
  '👦', '👧', '🧒',
  '🦊', '🐱', '🐶', '🐧', '🐼', '🦁', '🐯',
  '🦄', '🐉', '🦖', '🐝', '🦋',
  '🚀', '⚡', '🌟', '🌈', '🎨', '🎮', '🤖', '👽'
];

