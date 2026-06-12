# Matières 6ème

Ce dossier accueillera les matières du programme de 6ème.

Format : un fichier `.js` par matière (ex: `maths.js`, `francais.js`).

Structure attendue dans chaque fichier :

```js
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["maths"] = {
  id: "maths",
  name: "Mathématiques",
  emoji: "🔢",
  desc: "Description courte",
  topics: [ /* ... */ ]
};
```

Voir `data/SCHEMA.md` pour le format complet d'une question.

Une fois un fichier ajouté :
1. Le déclarer dans `data/curriculum.js` (LEVELS_CONFIG.6eme.subjects)
2. L'ajouter dans `index.html` (balise `<script>`)
3. L'ajouter dans `sw.js` (ASSETS) et bumper CACHE_VERSION
