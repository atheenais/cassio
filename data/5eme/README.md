# Matières 5ème

Ce dossier accueillera les matières du programme de 5ème.

Format : un fichier `.js` par matière (ex: `maths.js`, `francais.js`, `physique-chimie.js`).

Structure attendue dans chaque fichier :

```js
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["5eme"] = window.CURRICULUM_PARTS["5eme"] || {};
window.CURRICULUM_PARTS["5eme"]["maths"] = {
  id: "maths",
  name: "Mathématiques",
  emoji: "🔢",
  desc: "Description courte",
  topics: [ /* ... */ ]
};
```

Voir `data/SCHEMA.md` pour le format complet d'une question.

Une fois un fichier ajouté :
1. Le déclarer dans `data/curriculum.js` (LEVELS_CONFIG.5eme.subjects)
2. L'ajouter dans `index.html` (balise `<script>`)
3. L'ajouter dans `sw.js` (ASSETS) et bumper CACHE_VERSION
