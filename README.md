# Cassio — Révision CM2

Application de révision pour le cycle 3 (CM2 / 6ème).
**11 matières, 65 thèmes, 650 questions** au total.

## Fonctionnalités

- Quiz par thème (10 questions) avec révision des erreurs
- **🎲 Quiz aléatoire** : 10 questions surprise piochées dans toutes les matières
- 2 profils utilisateurs avec progression et statistiques séparées
- Système d'XP, niveaux et badges
- Historique des sessions avec graphique d'évolution
- Export / import JSON de la progression
- Mode clair / sombre

## Utilisation

Ouvre simplement `index.html` dans un navigateur (double-clic). Aucun serveur n'est nécessaire.

## Structure du projet

```
index.html              ← point d'entrée (charge tous les fichiers)
│
├── styles/
│   └── main.css        ← tous les styles, animations, thèmes clair/sombre
│
├── data/               ← les questions, une matière par fichier
│   ├── curriculum-maths.js
│   ├── curriculum-francais.js
│   ├── curriculum-histoire.js
│   ├── curriculum-sciences.js
│   ├── curriculum-anglais.js
│   ├── curriculum-emc.js
│   ├── curriculum-svt.js
│   ├── curriculum-techno.js
│   ├── curriculum-physchim.js
│   ├── curriculum-latin.js
│   ├── curriculum-numerique.js
│   └── curriculum.js   ← assemble les 11 matières dans l'ordre voulu
│
└── scripts/            ← la logique de l'application
    ├── config.js       ← couleurs par matière + profils des deux enfants
    ├── state.js        ← état global S, utilitaires, XP, niveaux, badges
    ├── render.js       ← navigation et rendu de tous les écrans
    └── app.js          ← réinit, export/import JSON, thème, confettis, clavier, init
```

## Comment modifier le contenu

**Ajouter ou modifier des questions** : ouvre le fichier de la matière concernée dans
`data/`. Chaque question est un objet `{ text, options, answer, explication, ... }`.
Le format est documenté par les questions existantes.

**Ajouter une nouvelle matière** :
1. Créer un fichier `data/curriculum-NOUVELLE.js` sur le modèle des autres.
2. L'ajouter dans `index.html` avec une balise `<script src="...">`.
3. L'ajouter dans `data/curriculum.js` (liste des ids ordonnés).
4. Ajouter une entrée dans `STYLES` dans `scripts/config.js` (couleur + gradient).

**Désactiver temporairement une matière** : commenter sa balise `<script>` dans
`index.html` ET la retirer de la liste dans `data/curriculum.js`.

**Changer les couleurs ou les noms des profils** : édite `scripts/config.js`.

**Modifier le système de badges ou de niveaux XP** : édite `scripts/state.js`.

## Ordre de chargement (important)

L'ordre des `<script>` dans `index.html` est strict :

1. Les fichiers `data/curriculum-*.js` (peu importe l'ordre entre eux).
2. `data/curriculum.js` qui les assemble.
3. `scripts/config.js` (constantes).
4. `scripts/state.js` (utilise les constantes).
5. `scripts/render.js` (utilise l'état + utilitaires).
6. `scripts/app.js` (init final).

## Données utilisateur

Les progrès, niveaux, badges et historique sont stockés en local dans le navigateur
(`localStorage`). Pour sauvegarder ou transférer, utiliser le bouton d'export
JSON depuis l'écran d'historique.

## Bonnes pratiques

- Pour éditer confortablement, utiliser un éditeur avec coloration syntaxique
  (VS Code, Sublime, Notepad++).
- Conserver une copie de sauvegarde du dossier avant toute modification importante.
- Tester chaque modification en rechargeant la page (Ctrl+F5 pour vider le cache).

## Nouveau : illustrations dans certaines questions

12 questions du programme bénéficient maintenant d'une illustration intégrée :
- **Géométrie** (6) : angle droit, somme des angles, périmètre du carré, aire du rectangle, hexagone, axe de symétrie
- **Sciences** : le corps humain (cerveau), circuit électrique
- **Physique-Chimie** : trois états de la matière, ombre projetée
- **SVT** : vertébrés
- **Histoire-Géo** : fleuves de France

Les illustrations sont des SVG inline (zéro fichier externe, zéro dépendance) ou des
combinaisons d'emojis selon le besoin. Elles s'adaptent automatiquement au thème
clair/sombre et à la couleur de la matière en cours.

### Ajouter une illustration à une question

Dans le fichier de la matière (ex: `data/curriculum-maths.js`), ajoute un champ
`image` à la question :

```javascript
{
  text: "Quelle est la mesure d'un angle droit ?",
  image: `<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" width="280">
    ...le SVG...
  </svg>`,
  options: ["45°", "90°", "180°", "360°"],
  answer: 1,
  explication: "..."
}
```

Tu peux aussi mettre des emojis avec une légende :
```javascript
image: `<div class="emoji-row">🐺 🐅 🐘 🐬</div><div class="emoji-caption">Mammifères</div>`
```

Les couleurs `currentColor` dans les SVG suivent le thème, `var(--subj-color)`
prend la couleur de la matière en cours.

## Validation à la volée

Pour les questions à choix unique (QCU) et Vrai/Faux, le flux a été simplifié :

1. **Clic sur une réponse** → sélection visuelle immédiate, avec une petite barre
   qui se remplit en 1 seconde au bas du bouton
2. Pendant cette seconde, on peut **changer d'avis** : un nouveau clic réinitialise
   le compteur
3. À la fin de la seconde, **validation automatique** : feedback ✅/❌ et explication
4. **2,5 secondes plus tard**, passage automatique à la question suivante
   (ou écran de score si c'était la dernière)

Pour les questions à choix multiple (cases à cocher) et les réponses à taper, le
bouton "Valider" reste présent car on ne peut pas deviner quand la sélection est
terminée. Le bouton "Suivant →" reste actif après chaque validation pour les
enfants qui veulent passer plus vite que le délai automatique.

## Comportement spécifique en cas d'erreur

Quand une question QCU/Vrai-Faux reçoit une mauvaise réponse :
- **Pas de passage automatique** : l'enfant a tout le temps de lire la correction
- **Bouton "Suivant →" mis en évidence** : il prend la couleur dégradée de la matière
  et pulse doucement pour signaler que c'est à l'enfant de le cliquer
- Idem pour la dernière question : le bouton "🏆 Voir mes résultats" est mis en
  évidence à la place

Sur les bonnes réponses, le flow rapide reste actif (passage automatique à 2,5 s).

## Indices sur demande

Les indices (`hint`) ne sont plus affichés automatiquement. À leur place, un petit
bouton discret **"💡 Indice"** apparaît si la question en possède un. L'enfant
doit cliquer pour le révéler — ce qui l'encourage à essayer par lui-même avant
de demander de l'aide.

Les questions sans indice ne montrent rien (pas de bouton vide).

## Bonus XP "sans-faute parfait"

Le bonus de **+20 XP "sans-faute"** est désormais conditionnel à l'usage des indices :

- **Aucun indice utilisé + sans-faute** : "🌟 Sans-faute parfait — bonus +20 XP !"
- **Sans-faute avec indices** : "✨ Sans-faute avec N indices utilisés — sans aide la prochaine fois, tu auras 20 XP de plus !"
- **Score partiel avec indices** : "💡 N indices utilisés sur ce quiz"

Cette règle récompense la maîtrise réelle plutôt que la performance assistée.
L'enfant ne perd jamais les XP qu'il a gagnés par ses bonnes réponses — il rate
seulement le bonus s'il a eu besoin d'aide. Comportement bienveillant : on
encourage à essayer d'abord sans, mais sans punir la curiosité.

Les anciennes sessions (avant cette fonctionnalité) sont traitées comme
"sans indice utilisé" pour préserver l'historique XP.

## Animations de récompense

À chaque bonne réponse, des animations sobres célèbrent la réussite :

- **"+10" flottant** : un petit "+10" vert jaillit de la bonne réponse et s'estompe
- **Rebond de la carte** : la carte de question fait un léger "pop" joyeux
- **Pulse du compteur** : le nombre de bonnes réponses zoome brièvement
- **Combos** : à partir de 3 bonnes réponses d'affilée, un badge apparaît
  ("🔥 Série de 3 !", "⚡ Série de 5 !", "🌟 En feu ! ×7"). La série se brise
  à la première erreur.

Un **son optionnel** (un petit "ding" dont la hauteur monte avec la série) est
activé par défaut et désactivable via le bouton 🔊 en haut à droite. Le son est
généré en Web Audio (aucun fichier externe).

Les animations respectent `prefers-reduced-motion` (désactivées pour les
utilisateurs sensibles au mouvement). Les erreurs ne déclenchent aucune animation
négative — seules les réussites sont célébrées.

## Application installable (PWA) + mode hors-ligne

L'app est désormais une **PWA** : elle peut s'installer sur l'écran d'accueil d'un
smartphone/tablette comme une vraie application, et fonctionne **sans connexion**.

### Fichiers ajoutés
- `manifest.json` — déclare le nom, les icônes, le mode plein écran
- `sw.js` — service worker qui met les fichiers en cache pour le hors-ligne
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — icônes de l'app

### Important : héberger l'app
La PWA (installation + hors-ligne) ne fonctionne **que si l'app est servie par un
serveur web** (http/https), pas en ouverture directe du fichier (file://).
Hébergeurs gratuits adaptés : **Netlify** (glisser-déposer le dossier),
**GitHub Pages**, **Cloudflare Pages**. Une fois en ligne (https), ouvre le site
sur ton téléphone puis :
- **iPhone/iPad (Safari)** : bouton Partager → « Sur l'écran d'accueil »
- **Android (Chrome)** : menu ⋮ → « Installer l'application » / « Ajouter à l'écran d'accueil »

Une fois installée, la progression résiste bien mieux dans le temps (sur iOS, les
PWA installées échappent à la suppression automatique des données après 7 jours
qui touche les sites web simplement consultés).

### Mettre à jour l'app après une modification
Si tu modifies un fichier (questions, code, style), ouvre `sw.js` et incrémente le
numéro de version : `const CACHE_VERSION = 'cm2-v1';` → `'cm2-v2'`, etc. Cela force
les appareils déjà installés à récupérer la nouvelle version. Sans ce changement,
ils resteraient sur l'ancienne version en cache.

En ouverture directe `file://` (double-clic), l'app continue de fonctionner
normalement, simplement sans les fonctions PWA.

## Mode invité

Sous les profils Elias et Leïla, un bouton discret « 👤 Mode invité » permet à
quelqu'un d'autre (cousin, copain, parent curieux) de tester l'app **sans
toucher à la progression des enfants**.

- La progression du mode invité est **stockée séparément** (clé `cm2-progress-guest`)
- Une **bannière** apparaît en haut de l'écran tant qu'on est en mode invité,
  avec deux actions : **Réinitialiser** (efface la progression invité, on reste
  en mode invité) et **Quitter** (retour à l'écran de profil)
- **Export et import désactivés** en mode invité, par sécurité (impossible d'écraser
  les profils Elias/Leïla par erreur)
- Avatar 👤 neutre, gris-bleu, bien différencié des profils enfants

## Améliorations UX responsive (priorité 1)

Corrections suite à un audit responsive sur smartphones (320 → 768 px) :

- **Cartes de thème restructurées** : titre + bouton sur la première ligne, description en pleine largeur dessous. Plus de chevauchements ni de texte ratatiné à 1 mot par ligne sur iPhone SE.
- **Badge "10 q." supprimé** quand le thème n'a pas encore été joué (info répétitive). Quand un score existe, le badge "8/10" coloré apparaît avec les étoiles, ce qui est plus utile.
- **Breadcrumb dégagé** : padding-right pour éviter le chevauchement avec les boutons flottants 🔊/🌙 (le titre "Résultats" était partiellement masqué). Le breadcrumb se replie sur 2 lignes proprement si nécessaire.
- **Adaptation iPhone SE 1G (320px)** : bouton "Commencer" et icônes compactés via media query, pour gérer les titres longs comme "Proportionnalité".
- **overflow-x: hidden** sur le body : sécurité contre tout débordement horizontal accidentel.

## Support de la safe area iOS

Les boutons flottants (🔊, 🌙) et le contenu général de l'app respectent désormais
la **safe area** des iPhones (zone de la barre d'état système : heure, wifi, batterie,
encoche/Dynamic Island). Cela évite la superposition visible en mode PWA installée
sur l'écran d'accueil.

Implémentation : `env(safe-area-inset-top)` avec fallback `max(1rem, ...)` pour
préserver l'apparence sur les écrans sans safe area (navigateur classique).

## Améliorations UX responsive (priorité 2)

Confort tactile et lisibilité sur petit écran :

- **Bannière "Mode invité" sur une ligne** : « 👤 Mode invité » reste lisible sans
  passer à la ligne sur tous les viewports (320 → 430 px). Sur les écrans < 400 px,
  le bouton « Réinitialiser » est masqué dans la bannière (reste accessible depuis
  l'écran d'accueil), pour laisser de la place au label et au bouton « Quitter ».
- **Zones tactiles élargies** : `.btn-sm` (Historique, Changer, Exporter, Importer),
  `.btn-start` (Commencer, Rejouer) et `.hint-btn` passent à 36-40 px de haut minimum,
  plus confortables à toucher avec un doigt. Conformes aux recommandations Apple
  (44×44 px) dans la mesure où la zone tactile réelle est légèrement supérieure
  à la bordure visible.
