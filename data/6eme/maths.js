/* Matière : Mathématiques 🔢 (6ème)
   4 thèmes × 10 questions = 40 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["maths"] = {
  id: "maths",
  name: "Mathématiques",
  emoji: "🔢",
  desc: "Nombres, fractions, proportionnalité, géométrie",
  topics: [
    {
      id: "decimaux",
      name: "Nombres décimaux",
      emoji: "📊",
      desc: "Opérations, comparaison, ordre de grandeur",
      questions: [
        {
          text: "Quel est le chiffre des dixièmes dans 34,572 ?",
          options: ["4", "5", "7", "2"],
          answer: 1,
          hint: "Le rang des dixièmes est juste après la virgule.",
          explication: "Après la virgule, on a : 5 (dixièmes), 7 (centièmes), 2 (millièmes)."
        },
        {
          text: "Combien vaut 12,7 × 10 ?",
          options: ["1,27", "12,70", "127", "1270"],
          answer: 2,
          hint: "Multiplier par 10 décale la virgule d'un rang vers la droite.",
          explication: "12,7 × 10 = 127."
        },
        {
          text: "Quel nombre est le plus grand ?",
          options: ["5,67", "5,7", "5,07", "5,607"],
          answer: 1,
          hint: "5,7 = 5,700. Compare rang par rang après la virgule.",
          explication: "5,7 = 5,700, qui est plus grand que 5,670, 5,607 et 5,070."
        },
        {
          text: "Combien vaut 8,3 + 2,75 ?",
          options: ["10,05", "11,05", "10,78", "11,5"],
          answer: 1,
          hint: "Aligne bien les virgules avant d'additionner. 8,30 + 2,75.",
          explication: "8,30 + 2,75 = 11,05."
        },
        {
          type: "qcm",
          text: "Quelles écritures représentent le même nombre que 4,5 ?",
          options: ["4,50", "4,05", "45/10", "4 + 5/10"],
          answer: [0, 2, 3],
          hint: "Un zéro à droite d'un décimal ne change pas sa valeur.",
          explication: "4,5 = 4,50 = 45/10 = 4 + 5/10. En revanche 4,05 ≠ 4,5."
        },
        {
          text: "Combien vaut 6,4 ÷ 100 ?",
          options: ["0,064", "0,64", "64", "640"],
          answer: 0,
          hint: "Diviser par 100 décale la virgule de 2 rangs vers la gauche.",
          explication: "6,4 ÷ 100 = 0,064."
        },
        {
          type: "vrai_faux",
          text: "Le nombre 7,9 est plus grand que 7,89.",
          answer: 0,
          hint: "7,9 = 7,90. Compare 7,90 et 7,89.",
          explication: "7,9 = 7,90, qui est bien plus grand que 7,89."
        },
        {
          text: "Quel est l'ordre de grandeur de 198 × 4,2 ?",
          options: ["environ 80", "environ 200", "environ 800", "environ 2000"],
          answer: 2,
          hint: "Arrondis chaque nombre : 198 ≈ 200, 4,2 ≈ 4.",
          explication: "200 × 4 = 800. Le résultat exact est 831,6."
        },
        {
          text: "Combien vaut 7,5 − 3,28 ?",
          options: ["4,22", "4,28", "3,78", "4,77"],
          answer: 0,
          hint: "Aligne les virgules : 7,50 − 3,28.",
          explication: "7,50 − 3,28 = 4,22."
        },
        {
          type: "texte",
          text: "Écris en chiffres : « trois unités et quarante-deux centièmes ».",
          answer: "3,42",
          hint: "Les centièmes sont au 2e rang après la virgule.",
          explication: "3 unités + 0,42 = 3,42."
        }
      ]
    },
    {
      id: "fractions",
      name: "Fractions",
      emoji: "🍕",
      desc: "Égalité, comparaison, addition simple",
      questions: [
        {
          text: "Que représente la fraction 3/4 ?",
          options: ["3 parts sur 4", "4 parts sur 3", "3 + 4", "3 × 4"],
          answer: 0,
          hint: "Le nombre du bas indique en combien de parts on partage le tout.",
          explication: "3/4 = on prend 3 parts sur les 4 parts égales du tout."
        },
        {
          text: "Quelle fraction est égale à 1/2 ?",
          options: ["2/3", "3/6", "2/5", "4/7"],
          answer: 1,
          hint: "Cherche une fraction où le numérateur est la moitié du dénominateur.",
          explication: "3/6 = 1/2, car 3 est la moitié de 6."
        },
        {
          text: "Combien vaut 2/5 + 1/5 ?",
          options: ["3/10", "3/5", "2/25", "1/2"],
          answer: 1,
          hint: "Quand les dénominateurs sont identiques, on additionne juste les numérateurs.",
          explication: "2/5 + 1/5 = 3/5. Le dénominateur reste 5."
        },
        {
          type: "vrai_faux",
          text: "La fraction 6/4 est plus grande que 1.",
          answer: 0,
          hint: "Une fraction est plus grande que 1 quand le numérateur dépasse le dénominateur.",
          explication: "6/4 = 1,5. Comme 6 > 4, la fraction est plus grande que 1."
        },
        {
          text: "Quelle fraction est la plus grande ?",
          options: ["3/7", "5/7", "2/7", "4/7"],
          answer: 1,
          hint: "Avec le même dénominateur, la plus grande fraction est celle au plus grand numérateur.",
          explication: "Toutes ont 7 au dénominateur, donc 5/7 est la plus grande."
        },
        {
          text: "Quelle écriture décimale correspond à 1/4 ?",
          options: ["0,14", "0,25", "0,4", "0,5"],
          answer: 1,
          hint: "1/4 = la moitié de 1/2. Et 1/2 = 0,5.",
          explication: "1/4 = 0,25 (un quart de 1)."
        },
        {
          text: "Léa partage une pizza en 8 parts égales et en mange 3. Quelle fraction a-t-elle mangée ?",
          options: ["3/5", "8/3", "3/8", "5/8"],
          answer: 2,
          hint: "Le total des parts est au dénominateur, les parts mangées au numérateur.",
          explication: "3 parts mangées sur 8 parts totales = 3/8."
        },
        {
          type: "qcm",
          text: "Quelles fractions sont égales à 2 ?",
          options: ["4/2", "6/3", "5/2", "10/5"],
          answer: [0, 1, 3],
          hint: "Une fraction vaut 2 quand le numérateur est le double du dénominateur.",
          explication: "4/2 = 6/3 = 10/5 = 2. Mais 5/2 = 2,5."
        },
        {
          text: "Combien vaut 7/3 − 2/3 ?",
          options: ["9/3", "5/3", "5/6", "5/0"],
          answer: 1,
          hint: "Quand les dénominateurs sont identiques, on soustrait juste les numérateurs.",
          explication: "7/3 − 2/3 = (7−2)/3 = 5/3."
        },
        {
          type: "texte",
          text: "Quel est le numérateur de la fraction 7/12 ?",
          answer: "7",
          hint: "Le numérateur est le nombre du haut, qui indique combien de parts on prend.",
          explication: "Dans 7/12, le numérateur est 7 et le dénominateur est 12."
        }
      ]
    },
    {
      id: "proportionnalite",
      name: "Proportionnalité",
      emoji: "⚖️",
      desc: "Tableaux, produit en croix, situations concrètes",
      questions: [
        {
          text: "Si 1 stylo coûte 2 €, combien coûtent 5 stylos ?",
          options: ["7 €", "8 €", "10 €", "12 €"],
          answer: 2,
          hint: "5 fois plus de stylos = 5 fois plus cher.",
          explication: "5 × 2 = 10 €."
        },
        {
          text: "3 kg de pommes coûtent 6 €. Combien coûte 1 kg ?",
          options: ["1 €", "2 €", "3 €", "9 €"],
          answer: 1,
          hint: "Divise le prix total par le nombre de kg.",
          explication: "6 € ÷ 3 = 2 € le kilo."
        },
        {
          text: "Une voiture roule à vitesse constante de 60 km en 1 h. Quelle distance fait-elle en 3 h ?",
          options: ["90 km", "120 km", "180 km", "200 km"],
          answer: 2,
          hint: "À vitesse constante, 3 fois plus de temps = 3 fois plus de distance.",
          explication: "60 × 3 = 180 km."
        },
        {
          type: "vrai_faux",
          text: "Si 4 cahiers coûtent 8 €, alors 6 cahiers coûtent 12 €.",
          answer: 0,
          hint: "1 cahier coûte 8 ÷ 4 = 2 €. Combien font 6 cahiers ?",
          explication: "1 cahier = 2 €, donc 6 cahiers = 12 €. C'est bien une proportionnalité."
        },
        {
          text: "Voici un tableau de proportionnalité. Combien vaut le ? : (2 → 6) ; (5 → ?)",
          options: ["10", "12", "15", "30"],
          answer: 2,
          hint: "Trouve le coefficient : 6 ÷ 2 = 3. Puis 5 × ce coefficient.",
          explication: "Le coefficient est 3 (car 6 = 2 × 3). Donc 5 × 3 = 15."
        },
        {
          text: "Marie a parcouru 12 km en 2 h. À la même vitesse, combien parcourt-elle en 5 h ?",
          options: ["24 km", "25 km", "30 km", "60 km"],
          answer: 2,
          hint: "Calcule d'abord ce qu'elle parcourt en 1 h.",
          explication: "12 ÷ 2 = 6 km/h. En 5 h : 6 × 5 = 30 km."
        },
        {
          text: "Un sirop se prépare en versant 1 dose de sirop pour 5 doses d'eau. Pour 15 doses d'eau, combien de doses de sirop ?",
          options: ["1", "2", "3", "5"],
          answer: 2,
          hint: "15 = 5 × 3, donc 3 fois plus de sirop aussi.",
          explication: "5 doses d'eau → 1 dose de sirop. 15 doses d'eau → 3 doses de sirop."
        },
        {
          text: "Lequel de ces tableaux N'EST PAS un tableau de proportionnalité ?",
          options: ["(1→2 ; 3→6 ; 5→10)", "(2→8 ; 5→20 ; 7→28)", "(1→3 ; 2→5 ; 3→7)", "(4→12 ; 6→18 ; 8→24)"],
          answer: 2,
          hint: "Vérifie si le rapport entre la 2e ligne et la 1re est toujours le même.",
          explication: "Dans (1→3 ; 2→5 ; 3→7) les rapports sont 3, 2,5 et 2,33 : pas constant. Les autres ont un coefficient fixe."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces situations sont des situations de proportionnalité ?",
          options: ["Le prix au kilo de tomates", "L'âge en fonction de la taille", "La distance parcourue à vitesse constante", "Le nombre de bougies sur un gâteau d'anniversaire et l'âge"],
          answer: [0, 2, 3],
          hint: "Une situation est proportionnelle si « 2 fois plus » d'un côté donne « 2 fois plus » de l'autre.",
          explication: "La taille n'est pas proportionnelle à l'âge (on ne mesure pas 2× plus à 10 ans qu'à 5 ans). Les autres situations le sont."
        },
        {
          type: "texte",
          text: "4 croissants coûtent 6 €. Quel est le prix d'1 croissant en € ?",
          answer: "1,5",
          hint: "Divise le prix total par le nombre de croissants.",
          explication: "6 ÷ 4 = 1,5 €."
        }
      ]
    },
    {
      id: "angles",
      name: "Angles",
      emoji: "📐",
      desc: "Mesurer, classer, construire avec un rapporteur",
      questions: [
        {
          text: "Quel instrument sert à mesurer un angle ?",
          options: ["La règle", "L'équerre", "Le rapporteur", "Le compas"],
          answer: 2,
          hint: "Il est en demi-cercle avec une graduation en degrés.",
          explication: "Le rapporteur, gradué de 0° à 180°, sert à mesurer les angles."
        },
        {
          text: "Combien mesure un angle droit ?",
          options: ["45°", "60°", "90°", "180°"],
          answer: 2,
          hint: "C'est l'angle formé par deux côtés d'un carré.",
          explication: "Un angle droit mesure exactement 90°."
        },
        {
          text: "Un angle qui mesure 180° s'appelle…",
          options: ["un angle nul", "un angle plat", "un angle plein", "un angle obtus"],
          answer: 1,
          hint: "180° = une ligne droite.",
          explication: "180° = angle plat (ses deux côtés sont alignés en ligne droite)."
        },
        {
          text: "Comment appelle-t-on un angle qui mesure 50° ?",
          options: ["aigu", "droit", "obtus", "plat"],
          answer: 0,
          hint: "Un angle aigu est plus petit qu'un angle droit.",
          explication: "Un angle aigu mesure entre 0° et 90°. Donc 50° est aigu."
        },
        {
          text: "Comment appelle-t-on un angle qui mesure 120° ?",
          options: ["aigu", "droit", "obtus", "plat"],
          answer: 2,
          hint: "Un angle obtus est plus grand qu'un angle droit mais plus petit qu'un angle plat.",
          explication: "Un angle obtus mesure entre 90° et 180°. Donc 120° est obtus."
        },
        {
          type: "vrai_faux",
          text: "Un angle de 90° est un angle aigu.",
          answer: 1,
          hint: "Un angle aigu doit être strictement plus petit que 90°.",
          explication: "90° = angle droit, pas aigu. L'angle aigu mesure entre 0° et 90° (exclus)."
        },
        {
          text: "Quel est l'angle le plus petit ?",
          options: ["35°", "90°", "135°", "175°"],
          answer: 0,
          hint: "Plus le nombre de degrés est petit, plus l'angle est petit.",
          explication: "35° est le plus petit. C'est aussi le seul angle aigu de la liste."
        },
        {
          type: "qcm",
          text: "Parmi ces angles, lesquels sont aigus ?",
          options: ["25°", "88°", "90°", "110°"],
          answer: [0, 1],
          hint: "Un angle aigu est strictement plus petit que 90°.",
          explication: "25° et 88° sont aigus. 90° est droit, 110° est obtus."
        },
        {
          text: "Deux angles sont dits « complémentaires » quand leur somme fait…",
          options: ["90°", "180°", "360°", "100°"],
          answer: 0,
          hint: "Pense à l'angle « complet » d'un angle droit.",
          explication: "Deux angles complémentaires totalisent 90° (par exemple 30° + 60°)."
        },
        {
          type: "texte",
          text: "Combien mesure (en degrés) le complémentaire d'un angle de 35° ? Réponds avec un nombre.",
          answer: "55",
          hint: "Deux angles complémentaires donnent 90° en tout.",
          explication: "90 − 35 = 55°."
        }
      ]
    }
  ]
};
