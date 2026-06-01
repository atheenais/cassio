/* Assemblage final du CURRICULUM dans l'ordre d'origine.
   Ce fichier doit être chargé APRÈS tous les fichiers data/curriculum-*.js */
const CURRICULUM = ["maths","francais","histoire","sciences","anglais","emc","svt","techno","physchim","latin","numerique"].map(id => window.CURRICULUM_PARTS[id]);
