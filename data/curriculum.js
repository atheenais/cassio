/* ═══════════════════════════════════════════════════
   MANIFEST CURRICULUM — multi-niveaux
   ═══════════════════════════════════════════════════
   Ce fichier est chargé APRÈS tous les fichiers data/{niveau}/*.js
   et déclare la liste des niveaux scolaires + leur composition.

   Pour ajouter un niveau : créer data/{niveau}/, ajouter une entrée
   dans LEVELS_CONFIG ci-dessous, et la déclarer dans LEVEL_IDS.

   Pour ajouter une matière à un niveau : créer data/{niveau}/{id}.js,
   ajouter son id dans subjects[]. Voir data/SCHEMA.md.
   ═══════════════════════════════════════════════════ */

const LEVELS_CONFIG = {
  cm2: {
    id: 'cm2',
    name: 'CM2',
    emoji: '📘',
    // Ordre d'affichage des matières dans l'accueil
    subjects: ['maths', 'francais', 'histoire', 'sciences', 'anglais', 'emc', 'svt', 'techno', 'physchim', 'latin', 'numerique']
  },
  '6eme': {
    id: '6eme',
    name: '6ème',
    emoji: '📗',
    subjects: ['maths', 'francais', 'histoire-geo'] // Livraison v12 : 3 matières × 4 thèmes × 10 questions
  },
  '5eme': {
    id: '5eme',
    name: '5ème',
    emoji: '📕',
    subjects: [] // À remplir lors de la livraison 2
  }
};

/* Ordre d'affichage des niveaux dans le sélecteur (ascendant). */
const LEVEL_IDS = ['cm2', '6eme', '5eme'];

/* Niveau par défaut pour un nouveau profil. */
const DEFAULT_LEVEL = 'cm2';

/* ─ Helpers de lecture ─────────────────────────────── */

/* Retourne la config d'un niveau (ou null si inconnu). */
function getLevelConfig(levelId) {
  return LEVELS_CONFIG[levelId] || null;
}

/* Retourne le tableau des matières d'un niveau, dans l'ordre déclaré.
   Filtre silencieusement les matières dont le fichier data n'a pas été
   chargé (utile pendant qu'on développe : pas de crash si un id pointe
   sur un fichier inexistant). */
function getCurriculum(levelId) {
  const config = getLevelConfig(levelId);
  if (!config) return [];
  const parts = (window.CURRICULUM_PARTS && window.CURRICULUM_PARTS[levelId]) || {};
  return config.subjects.map(id => parts[id]).filter(Boolean);
}

/* Retourne uniquement les niveaux qui contiennent du contenu chargé.
   Sert à conditionner l'affichage du sélecteur de niveau : si un seul
   niveau a du contenu, pas la peine d'afficher un sélecteur. */
function getAvailableLevels() {
  return LEVEL_IDS.filter(id => getCurriculum(id).length > 0);
}

/* Compatibilité avec l'ancien code : CURRICULUM reste accessible et
   pointe sur les matières du niveau par défaut. Le code qui dépend du
   niveau courant doit utiliser getCurriculum(getCurrentLevel()) à la place. */
const CURRICULUM = getCurriculum(DEFAULT_LEVEL);
