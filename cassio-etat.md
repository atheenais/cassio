# Cassio — Document de passation (post v20)

> Ce document est le complément historique de `CLAUDE.md` (référence principale, chargée automatiquement).
> Il détaille les décisions passées, l'historique des livraisons, et les chantiers en cours ou en pause.
> **En Claude Code, ne pas utiliser ce document pour le workflow de déploiement — voir CLAUDE.md §3.**

---

## 🎯 Le projet en bref

**Cassio** est une PWA éducative française pour le cycle 3 et début du collège.

- **Nom**: Cassio (anciennement « Révision CM2 »)
- **URL en ligne**: https://atheenais.github.io/cassio/
- **Repository GitHub**: atheenais/cassio (public, dans `~/Documents/GitHub/cassio/`)
- **Utilisateurs**: Elias et Leïla (CM2 → 6ème)
- **Contenu total** : **1130 questions** (650 CM2 + 480 6ème)

---

## 🏗️ Architecture actuelle (post v20)

```
cassio/
├── index.html                         ← charge data/cm2/* + data/6eme/* + data/curriculum.js (ORDRE IMPORTANT)
├── manifest.json
├── sw.js                              ← CACHE_VERSION = 'cassio-v20'
├── icon-{192,512,512-maskable}.png
├── README.md
├── styles/
│   └── main.css                       ← typo Plus Jakarta Sans, segmented control, cartes signature, perfect-badge
├── scripts/
│   ├── config.js                      ← PROFILES, STYLES (12 matières), AVATAR_EMOJIS, RANDOM_SUBJ_ID, WEAK_SUBJ_ID
│   ├── state.js                       ← getCurrentLevel, setCurrentLevel, getBadgeDisplay, computeBadgeContext (par niveau)
│   ├── render.js                      ← renderHome, renderLevelSelector, renderScore (jingle+badge), renderWeakQuiz
│   └── app.js                         ← migrateToMultiLevels (v11), playPerfectScoreFanfare, showPerfectBadge
└── data/
    ├── curriculum.js                  ← LEVELS_CONFIG, LEVEL_IDS, getCurriculum, getTopic
    ├── SCHEMA.md                      ← format des questions
    ├── cm2/                           ← 11 matières × 65 thèmes × 650 questions
    │   ├── maths.js, francais.js, histoire.js, sciences.js, anglais.js,
    │   ├── emc.js, svt.js, techno.js, physchim.js, latin.js, numerique.js
    ├── 6eme/                          ← 6 matières × ?? thèmes × 480 questions (v17–v20)
    │   ├── maths.js, francais.js, histoire-geo.js, svt.js, anglais.js, espagnol.js
    └── 5eme/                          ← vide (README guide d'ajout, palette rouge/orange prête)
```

---

## 📦 Historique des livraisons (v11 → v20)

| Version | Contenu |
|---|---|
| **v11** | Architecture multi-niveaux : `data/cm2/`, `data/6eme/`, `data/5eme/`, manifest LEVELS_CONFIG, migration silencieuse |
| **v12** | Peuplement 6ème léger (3 matières × 4 thèmes × 10 Q = 120 Q) + bouton « 🎓 Ma classe » |
| **v13** | Refonte ergonomie accueil mobile : header compact, carte identité fusionnée, CTA aléatoire compact, cartes matières signature, typo Plus Jakarta Sans |
| **v14** | Sélecteur de niveau en segmented control style iOS avec couleur du niveau actif |
| **v15** | Bugfix : `qValidate` plantait sur `vrai_faux` sans `options` (toutes les vrai_faux 6ème affectées) |
| **v16** | Jingle « Tada ! » + badge doré « 🏆 Sans-faute parfait ! » éphémère au 10/10 |
| **v17** | Enrichissement 6ème (+300 Q) : 3 matières étendues à 10 thèmes + 2 nouvelles matières (SVT, Anglais) |
| **v18** | Bugfix : options dupliquées dans QCU (audit) + indices contenant la réponse reformulés ; renommage dossier `revision-cm2/` → `cassio/`, `CACHE_VERSION` passe en `cassio-vXX` |
| **v19** | Ajout matière Espagnol (6ème) + enrichissement contenu 6ème ; total → 480 Q |
| **v20** | Mode « Mes points faibles » : mémoire des erreurs, pioche pondérée, CTA 🎯 sur l'accueil |

---

## 🔑 Décisions techniques importantes (à respecter)

### Architecture multi-niveaux
- `LEVELS_CONFIG` dans `data/curriculum.js` déclare niveaux + matières + couleurs
- `getCurriculum(levelId)`, `getAvailableLevels()`, `getLevelConfig(levelId)` sont les helpers à utiliser
- Niveau courant par profil : `cm2-level-{profileId}` dans localStorage
- Sélecteur dormant si `getAvailableLevels().length < 2`

### Mode « Mes points faibles » (implémenté v20)
- Clé localStorage : `cm2-mistakes-{profileId}-{level}`
- Structure : `[{ sId, tId, qKey, wrongCount, lastWrongAt }]`
- `qKey` = texte de la question (robuste aux réordonnements)
- Pioche pondérée : `poids = wrongCount × facteur_récence` (1.0 < 7j / 0.7 < 30j / 0.4 sinon)
- Hooks dans `qValidate` : mauvaise réponse → incrément ; bonne réponse en mode points faibles → suppression
- CTA 🎯 conditionnel à `mistakes.length >= 10` avec fallback thèmes fragiles pour compléter à 10
- Écran de score : confettis OUI au 10/10, jingle/badge NON (cohérent avec mode révision)
- Constante `WEAK_SUBJ_ID` dans config.js (id factice pour le quiz multi-matières points faibles)

### Cohabitation `S.streak` ≠ `computeCurrentStreak`
- `S.streak` = combo intra-quiz (bonnes réponses consécutives DANS une session)
- `computeCurrentStreak(sessions)` = jours consécutifs où l'enfant a joué (global, tous niveaux)

### Badges par niveau, XP global, streak global
- Badges filtrés par `s.profile && s.level === getCurrentLevel()`
- Badge `topics_all` dynamique : « Maître de CM2 » / « Maître de 6ème » via `getBadgeDisplay()`
- XP et streak : globaux (tous niveaux confondus)

### vrai_faux sans options (depuis v15)
- `options` facultatif pour `vrai_faux` (fallback `['Vrai','Faux']` dans `qValidate`)
- Toutes les vrai_faux 6ème écrites sans options ; les vrai_faux CM2 ont `options` (compat préservée)

### Clés localStorage (NE PAS renommer le préfixe `cm2-`)
| Clé | Contenu |
|---|---|
| `cm2-progress-{profileId}-{level}` | progression d'un profil sur un niveau |
| `cm2-level-{profileId}` | niveau scolaire actif |
| `cm2-customization-{profileId}` | `{ emoji, name }` |
| `cm2-sessions` | sessions annotées `level` |
| `cm2-mistakes-{profileId}-{level}` | mémoire des erreurs (mode points faibles) |
| `cm2-migrated-levels` | flag `'1'` (migration v11 idempotente) |
| `cm2-theme`, `cm2-sound` | préférences globales |

⚠️ Le préfixe `cm2-` est conservé pour des raisons historiques. **Décision actée : ne pas renommer** (risque de perte de données pour zéro gain fonctionnel).

### Migration v11 (ne pas re-déclencher)
- `migrateToMultiLevels()` au boot, idempotente via `cm2-migrated-levels === '1'`
- A déjà migré Elias/Leïla : `cm2-progress-{id}` → `cm2-progress-{id}-cm2`, sessions enrichies de `level: 'cm2'`

---

## 🎨 Identité visuelle

- **Plus Jakarta Sans** (Google Fonts, graisses 400/600/700/800 — max 800, pas 900)
- `letter-spacing: -0.02em` sur les titres
- Couleurs par niveau : CM2 bleu `#4f9cf9`, 6ème vert `#10b981`, 5ème rouge `#ef4444` (pré-câblé)
- Cartes matières signature : emoji XL 38px + halo coloré + fond en teinte douce + barre de progression
- Segmented control style iOS pour le sélecteur de niveau
- Perfect badge doré éphémère + jingle Web Audio « Tada ! » (Do-Mi-Sol-Do') au sans-faute

---

## 🚀 Workflow de déploiement (Claude Code)

**Plus de zip.** On modifie directement les fichiers dans `~/Documents/GitHub/cassio/`.

1. Modifier les fichiers concernés directement dans le dépôt
2. Bumper `CACHE_VERSION` dans `sw.js` (ex. `cassio-v20` → `cassio-v21`)
3. Vérifications JS + CSS (voir CLAUDE.md §7)
4. Proposer un message de commit ; Fab relit et lance le `git commit` / `git push` via GitHub Desktop
5. GitHub Pages redéploie automatiquement en 1-2 min
6. Tester sur iPhone : fermer complètement l'app (swipe up), relancer depuis l'icône

⚠️ Ne jamais `git push` sans validation explicite de Fab.

---

## 🔮 Pistes ouvertes pour la suite

### À court terme
- **Passe éditoriale « réponses trop longues »** : ~111 QCU où la bonne réponse est repérable car plus longue. Découpée en 4 lots dans la section ci-dessous. Chantier prioritaire.
- **Retour terrain** : laisser Elias/Leïla utiliser le mode points faibles et remonter les coquilles
- **Peupler la 5ème** quand Elias y arrivera

### Pistes structurantes (non implémentées)
- **Tableau de bord parental** : vue dédiée Elias + Leïla (progression, réussite par matière)
- **Illustrations SVG** : 12 en CM2, aucune en 6ème
- **Statistiques sans-faute** : compteur sur la fiche profil

### À NE PAS faire (décisions actées)
- Synchronisation cloud (RGPD enfants, complexité)
- Compétition Elias vs Leïla (rivalité malsaine)
- Renommer les clés `cm2-*` (risque de perte de données)

---

## ✂️ Chantier prioritaire : passe éditoriale « réponses trop longues »

**~111 QCU** où la bonne réponse est identifiable car sensiblement plus longue que les distracteurs. Découpée en 4 lots (audit à relancer après chaque lot).

Répartition approximative par fichier (à recalculer via audit) :
- **Lot 1** : CM2 — maths.js, francais.js
- **Lot 2** : CM2 — histoire.js, sciences.js, anglais.js
- **Lot 3** : CM2 — emc.js, svt.js, techno.js, physchim.js, latin.js, numerique.js
- **Lot 4** : 6ème — tous les fichiers

Commande d'audit à utiliser (à coder en JS) : comparer la longueur de `options[answer]` à la moyenne des autres options ; signaler si ratio > 1.5.

---

## ⚠️ Points d'attention récurrents

- `display: flex` écrase `hidden` → `.element[hidden] { display: none; }`
- Boutons flottants `position: fixed` → respecter `env(safe-area-inset-top)` sous iOS
- Quiz aléatoire et points faibles piochent uniquement dans le niveau courant
- Mode review : confettis OUI, jingle/badge NON
- Cache obsolète si oubli de bump `CACHE_VERSION`
- iOS efface localStorage des sites non installés après 7 jours d'inactivité (PWA installée épargnée)
