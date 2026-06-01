# Format des données du curriculum Cassio

Ce document décrit la structure attendue pour ajouter du contenu (niveaux, matières, thèmes, questions) sans casser l'application.

---

## 🌳 Structure générale

L'arborescence est : **Niveau → Matière → Thème → Question**.

```
data/
├── curriculum.js          ← MANIFEST : liste les niveaux et leurs matières
├── SCHEMA.md              ← ce document
├── cm2/                   ← un dossier par niveau
│   ├── maths.js
│   ├── francais.js
│   └── ...
├── 6eme/
└── 5eme/
```

---

## 📁 Un fichier matière

Chaque fichier `data/{niveau}/{matière}.js` déclare UNE matière pour UN niveau.

```js
/* Matière : Mathématiques 🔢
   8 thèmes × 10 questions = 80 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["cm2"] = window.CURRICULUM_PARTS["cm2"] || {};
window.CURRICULUM_PARTS["cm2"]["maths"] = {
  id: "maths",                              // doit matcher le nom du fichier
  name: "Mathématiques",
  emoji: "🔢",
  desc: "Nombres, calcul, géométrie, mesures",
  topics: [ /* voir ci-dessous */ ]
};
```

**Règles :**
- L'`id` de la matière (`"maths"`) doit être unique **dans le niveau** (peut se répéter dans un autre niveau).
- L'`id` doit être en kebab-case sans accent : `"physique-chimie"`, pas `"physiqueChimie"` ni `"Physique-Chimie"`.
- L'ordre des matières à l'écran est défini par le tableau `subjects` dans `data/curriculum.js`, pas par l'ordre des fichiers.

---

## 📂 Un thème

```js
{
  id: "decimaux",                            // unique dans la matière
  name: "Nombres décimaux",
  emoji: "📊",
  desc: "Lecture, écriture, comparaison, calcul",
  questions: [ /* 10 questions recommandées */ ]
}
```

**Règles :**
- L'`id` du thème doit être unique **dans la matière**.
- 10 questions par thème est la cible idéale (équilibre durée/diversité). Si tu modifies ce nombre, la progression existante est marquée "stale" et l'enfant devra rejouer le thème.

---

## ❓ Une question

Quatre types existent : QCU (choix unique), QCM (choix multiple), Vrai/Faux, Texte libre.

### QCU — choix unique (le plus courant)

```js
{
  type: "qcu",                               // optionnel, c'est le défaut
  text: "Que vaut 6,7 × 100 ?",
  hint: "Multiplier par 100 = décaler la virgule de 2 rangs.",
  options: ["0,067", "0,67", "67", "670"],
  answer: 3,                                 // index de la bonne réponse
  explication: "6,7 × 100 = 670."
}
```

### QCM — plusieurs bonnes réponses

```js
{
  type: "qcm",
  text: "Quels nombres sont des multiples de 3 ?",
  options: ["12", "20", "27", "35"],
  answer: [0, 2],                            // tableau d'indices
  explication: "12 = 3×4, 27 = 3×9."
}
```

### Vrai / Faux

```js
{
  type: "vrai_faux",
  text: "Le Soleil est une planète.",
  answer: 1,                                 // 0 = Vrai, 1 = Faux
  explication: "Le Soleil est une étoile, pas une planète."
}
```

### Texte libre

```js
{
  type: "texte",
  text: "Capitale de la France ?",
  answer: "Paris",                           // ou tableau ["Paris", "paris"] pour plusieurs réponses acceptées
  explication: "Paris est la capitale depuis 987."
}
```

La comparaison ignore accents, casse et espaces multiples : `"Coté"` ≈ `"cote"`.

### Champs communs

| Champ | Obligatoire | Description |
|---|---|---|
| `text` | ✅ | Énoncé de la question |
| `type` | optionnel | `"qcu"` (défaut), `"qcm"`, `"vrai_faux"`, `"texte"` |
| `options` | ✅ sauf vrai_faux/texte | Tableau des choix |
| `answer` | ✅ | Index, tableau d'indices, ou chaîne selon le type |
| `hint` | optionnel | Indice révélé sur demande (impacte le bonus XP "sans-faute parfait") |
| `explication` | optionnel | Affiché après validation |
| `illustration` | optionnel | ID d'une illustration SVG inline |

---

## 🆕 Ajouter une matière à un niveau existant

1. Créer le fichier : `data/{niveau}/{matière}.js`
2. Déclarer la matière dans `data/curriculum.js` (ajouter son id au tableau `LEVELS_CONFIG.{niveau}.subjects`)
3. Ajouter un style dans `scripts/config.js` (objet `STYLES`)
4. Ajouter une balise `<script>` dans `index.html`
5. Ajouter le chemin dans `sw.js` (tableau `ASSETS`)
6. **Bumper `CACHE_VERSION`** dans `sw.js` (sinon les utilisateurs installés ne verront pas le changement)

---

## 🆕 Ajouter un niveau scolaire

1. Créer le dossier : `data/{niveau}/`
2. Déclarer le niveau dans `data/curriculum.js` (objet `LEVELS_CONFIG` + tableau `LEVEL_IDS`)
3. Ajouter au moins une matière (voir section précédente)
4. Le sélecteur de niveau apparaîtra automatiquement dans l'app dès qu'il y a ≥ 2 niveaux peuplés
