/* Matière : Mathématiques 🔢 (6ème)
   10 thèmes × 10 questions = 100 questions */
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
    },
    {
      id: "nombres-entiers",
      name: "Nombres entiers",
      emoji: "🔢",
      desc: "Numération, lecture, écriture des grands nombres",
      questions: [
        {
          text: "Comment s'écrit en chiffres « trois millions deux cent cinquante mille » ?",
          options: ["3 025 000", "3 250 000", "32 500 000", "3 250"],
          answer: 1,
          hint: "Un million = 1 000 000. Pose les chiffres par tranches.",
          explication: "3 millions + 250 milliers = 3 250 000."
        },
        {
          text: "Combien y a-t-il de zéros dans un million ?",
          options: ["3", "4", "5", "6"],
          answer: 3,
          hint: "Mille = 1 000 (3 zéros). Un million = mille milliers.",
          explication: "1 000 000 : six zéros."
        },
        {
          text: "Quel est le chiffre des centaines de mille dans 4 738 251 ?",
          options: ["4", "7", "3", "8"],
          answer: 1,
          hint: "Les centaines de mille sont la 6e position en partant de la droite.",
          explication: "Dans 4 738 251, le chiffre 7 occupe le rang des centaines de mille."
        },
        {
          text: "Quel est l'ordre de grandeur de la population française ?",
          options: ["7 millions", "67 millions", "670 millions", "6,7 milliards"],
          answer: 1,
          hint: "Pense à la population approximative en 2024.",
          explication: "La France compte environ 67-68 millions d'habitants."
        },
        {
          text: "Quel nombre est juste avant 10 000 ?",
          options: ["9 990", "9 998", "9 999", "10 001"],
          answer: 2,
          hint: "« Juste avant » = le précédent entier.",
          explication: "9 999 + 1 = 10 000. Donc 9 999 est juste avant."
        },
        {
          type: "vrai_faux",
          text: "Un milliard, c'est mille millions.",
          answer: 0,
          hint: "1 milliard = 1 000 000 000.",
          explication: "VRAI. 1 milliard = 1 000 × 1 000 000 = 10⁹."
        },
        {
          text: "Range ces nombres dans l'ordre croissant : 8 421 ; 8 412 ; 8 241 ; 8 142",
          options: ["8 142 < 8 241 < 8 412 < 8 421", "8 421 < 8 412 < 8 241 < 8 142", "8 241 < 8 142 < 8 412 < 8 421", "8 142 < 8 412 < 8 241 < 8 421"],
          answer: 0,
          hint: "Compare chiffre par chiffre en partant de la gauche.",
          explication: "Tous commencent par 8. Compare ensuite les centaines : 1 < 2 < 4 < 4 ; puis les dizaines."
        },
        {
          type: "qcm",
          text: "Quels nombres sont des entiers ?",
          options: ["7", "3,5", "0", "−12"],
          answer: [0, 2, 3],
          hint: "Un entier n'a pas de virgule.",
          explication: "7, 0 et −12 sont entiers. 3,5 est un décimal (non entier)."
        },
        {
          text: "Combien font 100 × 1000 ?",
          options: ["1 000", "10 000", "100 000", "1 000 000"],
          answer: 2,
          hint: "Multiplier par 100 ajoute 2 zéros, par 1000 en ajoute 3.",
          explication: "100 × 1 000 = 100 000 (5 zéros)."
        },
        {
          type: "texte",
          text: "Écris en chiffres : « deux mille vingt-quatre ». (Sans espace.)",
          answer: "2024",
          hint: "2 milliers + 24 unités.",
          explication: "« Deux mille vingt-quatre » = 2024."
        }
      ]
    },
    {
      id: "calcul-mental",
      name: "Calcul mental",
      emoji: "🧠",
      desc: "Opérations rapides, multiplications, divisions",
      questions: [
        {
          text: "Combien font 25 × 4 ?",
          options: ["75", "100", "125", "200"],
          answer: 1,
          hint: "25 × 4 = un quart de 400.",
          explication: "25 × 4 = 100 (à retenir : 25 × 4 fait toujours 100)."
        },
        {
          text: "Combien font 7 × 8 ?",
          options: ["48", "54", "56", "64"],
          answer: 2,
          hint: "Une des tables les plus utiles : la table de 8.",
          explication: "7 × 8 = 56."
        },
        {
          text: "Combien font 144 ÷ 12 ?",
          options: ["10", "11", "12", "14"],
          answer: 2,
          hint: "12 × 12 = ?",
          explication: "12 × 12 = 144, donc 144 ÷ 12 = 12."
        },
        {
          text: "Combien font 15 × 6 ?",
          options: ["60", "75", "90", "96"],
          answer: 2,
          hint: "15 × 6 = 15 × 2 × 3 = 30 × 3.",
          explication: "15 × 6 = 90."
        },
        {
          text: "Combien font 250 + 175 ?",
          options: ["325", "405", "415", "425"],
          answer: 3,
          hint: "250 + 175 = 250 + 150 + 25.",
          explication: "250 + 175 = 425."
        },
        {
          text: "Combien font 1000 − 234 ?",
          options: ["666", "754", "766", "876"],
          answer: 2,
          hint: "Astuce : 999 − 234 + 1.",
          explication: "1000 − 234 = 766."
        },
        {
          type: "vrai_faux",
          text: "Pour multiplier par 5, on peut multiplier par 10 puis diviser par 2.",
          answer: 0,
          hint: "10 ÷ 2 = 5.",
          explication: "VRAI. C'est une astuce très utile : 48 × 5 = 480 ÷ 2 = 240."
        },
        {
          text: "Combien font 8 × 25 ?",
          options: ["150", "175", "200", "225"],
          answer: 2,
          hint: "8 × 25 = 4 × 2 × 25 = 4 × 50.",
          explication: "8 × 25 = 200."
        },
        {
          text: "Combien font 96 ÷ 8 ?",
          options: ["8", "11", "12", "14"],
          answer: 2,
          hint: "Cherche combien de fois 8 entre dans 96.",
          explication: "8 × 12 = 96, donc 96 ÷ 8 = 12."
        },
        {
          type: "texte",
          text: "Combien font 9 × 9 ?",
          answer: "81",
          hint: "Un carré classique à connaître par cœur.",
          explication: "9 × 9 = 81."
        }
      ]
    },
    {
      id: "divisibilite",
      name: "Multiples et diviseurs",
      emoji: "✖️",
      desc: "Critères de divisibilité par 2, 3, 5, 9, 10",
      questions: [
        {
          text: "Lequel de ces nombres est un multiple de 5 ?",
          options: ["32", "47", "60", "73"],
          answer: 2,
          hint: "Un multiple de 5 finit par 0 ou 5.",
          explication: "60 se termine par 0, c'est bien un multiple de 5 (5 × 12 = 60)."
        },
        {
          text: "Lequel de ces nombres est divisible par 2 ?",
          options: ["17", "29", "38", "55"],
          answer: 2,
          hint: "Un nombre est divisible par 2 si son chiffre des unités est pair.",
          explication: "38 finit par 8 (pair), donc divisible par 2. Les autres finissent par un chiffre impair."
        },
        {
          text: "Lequel de ces nombres est divisible par 3 ?",
          options: ["14", "26", "27", "41"],
          answer: 2,
          hint: "Un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3.",
          explication: "2 + 7 = 9, divisible par 3. Donc 27 est divisible par 3 (3 × 9 = 27)."
        },
        {
          text: "Combien de diviseurs a le nombre 12 ?",
          options: ["3", "4", "5", "6"],
          answer: 3,
          hint: "Cherche les nombres qui divisent 12 sans reste : 1, 2, 3, 4, 6, 12.",
          explication: "12 a 6 diviseurs : 1, 2, 3, 4, 6, 12."
        },
        {
          type: "vrai_faux",
          text: "Tous les multiples de 10 sont aussi des multiples de 5.",
          answer: 0,
          hint: "10 = 2 × 5. Tout multiple de 10 contient donc 5 comme facteur.",
          explication: "VRAI. Tout multiple de 10 (10, 20, 30…) finit par 0 et est donc multiple de 5."
        },
        {
          text: "Quel est le plus petit multiple commun de 4 et 6 ?",
          options: ["10", "12", "18", "24"],
          answer: 1,
          hint: "Liste les multiples de chacun jusqu'à trouver le premier commun.",
          explication: "Multiples de 4 : 4,8,12,16… Multiples de 6 : 6,12,18… Le premier commun est 12."
        },
        {
          type: "qcm",
          text: "Parmi ces nombres, lesquels sont divisibles par 9 ?",
          options: ["27", "36", "45", "52"],
          answer: [0, 1, 2],
          hint: "Un nombre est divisible par 9 si la somme de ses chiffres est divisible par 9.",
          explication: "27 (2+7=9), 36 (3+6=9), 45 (4+5=9) sont divisibles par 9. 52 (5+2=7) non."
        },
        {
          text: "Le nombre 1 est un diviseur de…",
          options: ["seulement 1", "tous les nombres", "seulement les nombres pairs", "seulement les nombres premiers"],
          answer: 1,
          hint: "Pense à ce que fait n ÷ 1.",
          explication: "1 divise tous les nombres entiers (n ÷ 1 = n, sans reste)."
        },
        {
          text: "Lequel de ces nombres N'EST PAS un multiple de 7 ?",
          options: ["14", "21", "28", "32"],
          answer: 3,
          hint: "Récite la table de 7.",
          explication: "14, 21, 28 sont dans la table de 7. 32 non (7 × 4 = 28, 7 × 5 = 35)."
        },
        {
          type: "texte",
          text: "Quel est le plus petit nombre divisible par 2, 3 et 5 à la fois ?",
          answer: "30",
          hint: "Cherche un multiple de 5 qui soit aussi pair et divisible par 3.",
          explication: "2 × 3 × 5 = 30. C'est le plus petit nombre divisible par ces trois nombres premiers."
        }
      ]
    },
    {
      id: "symetrie",
      name: "Symétrie axiale",
      emoji: "🪞",
      desc: "Axes de symétrie, figures symétriques",
      questions: [
        {
          text: "Combien d'axes de symétrie a un carré ?",
          options: ["1", "2", "3", "4"],
          answer: 3,
          hint: "Pense aux médianes et aux diagonales.",
          explication: "Le carré a 4 axes : 2 médianes (horizontale et verticale) + 2 diagonales."
        },
        {
          text: "Combien d'axes de symétrie a un rectangle (non carré) ?",
          options: ["1", "2", "3", "4"],
          answer: 1,
          hint: "Les diagonales du rectangle NE sont PAS des axes de symétrie.",
          explication: "Le rectangle a 2 axes : la médiane horizontale et la médiane verticale (pas les diagonales)."
        },
        {
          text: "Combien d'axes de symétrie a un triangle équilatéral ?",
          options: ["1", "2", "3", "4"],
          answer: 2,
          hint: "Compte les axes joignant un sommet au milieu du côté opposé.",
          explication: "Le triangle équilatéral a 3 axes de symétrie (un par sommet)."
        },
        {
          text: "Combien d'axes de symétrie a un cercle ?",
          options: ["1", "4", "8", "une infinité"],
          answer: 3,
          hint: "Tout diamètre divise le cercle en deux parties identiques.",
          explication: "Le cercle a une infinité d'axes de symétrie : tous ses diamètres."
        },
        {
          type: "vrai_faux",
          text: "Si A' est le symétrique de A par rapport à une droite (d), alors A est aussi le symétrique de A' par rapport à (d).",
          answer: 0,
          hint: "La symétrie axiale est-elle réversible ?",
          explication: "VRAI. La symétrie axiale est réciproque : si A' = sym(A), alors A = sym(A')."
        },
        {
          text: "Quelle lettre majuscule a au moins un axe de symétrie ?",
          options: ["F", "G", "P", "A"],
          answer: 3,
          hint: "L'axe est vertical pour cette lettre.",
          explication: "« A » a un axe de symétrie vertical. F, G, P n'en ont pas."
        },
        {
          type: "qcm",
          text: "Parmi ces figures, lesquelles ont au moins un axe de symétrie ?",
          options: ["losange", "triangle scalène (3 côtés différents)", "trapèze isocèle", "parallélogramme quelconque"],
          answer: [0, 2],
          hint: "Le losange et le trapèze isocèle ont au moins 1 axe ; le triangle scalène et le parallélogramme général n'en ont pas.",
          explication: "Losange : 2 diagonales. Trapèze isocèle : 1 axe perpendiculaire aux côtés parallèles. Les deux autres n'ont aucun axe de symétrie."
        },
        {
          text: "Si on plie une feuille selon un axe de symétrie, les deux moitiés…",
          options: ["sont différentes", "se superposent exactement", "sont parallèles", "forment un angle droit"],
          answer: 1,
          hint: "C'est la définition même d'un axe de symétrie.",
          explication: "Par définition, les deux moitiés d'une figure de part et d'autre d'un axe de symétrie se superposent."
        },
        {
          text: "Le symétrique d'un point situé SUR l'axe de symétrie est…",
          options: ["lui-même", "à 1 cm de l'axe", "à l'autre bout de la figure", "n'existe pas"],
          answer: 0,
          hint: "Un point sur l'axe ne se déplace pas.",
          explication: "Un point situé sur l'axe est son propre symétrique : il reste en place."
        },
        {
          type: "texte",
          text: "Combien d'axes de symétrie a un hexagone régulier ? Réponds avec un nombre.",
          answer: "6",
          hint: "Un hexagone régulier a un axe par sommet + un axe par milieu de côté.",
          explication: "L'hexagone régulier a 6 axes : 3 joignant les sommets opposés + 3 joignant les milieux des côtés opposés."
        }
      ]
    },
    {
      id: "perimetre-aire",
      name: "Périmètres et aires",
      emoji: "📏",
      desc: "Carré, rectangle, triangle, formules de base",
      questions: [
        {
          text: "Quel est le périmètre d'un carré de côté 5 cm ?",
          options: ["10 cm", "15 cm", "20 cm", "25 cm"],
          answer: 2,
          hint: "Périmètre carré = côté × 4.",
          explication: "P = 4 × 5 = 20 cm."
        },
        {
          text: "Quelle est l'aire d'un carré de côté 5 cm ?",
          options: ["10 cm²", "20 cm²", "25 cm²", "100 cm²"],
          answer: 2,
          hint: "Aire carré = côté × côté.",
          explication: "A = 5 × 5 = 25 cm²."
        },
        {
          text: "Quel est le périmètre d'un rectangle de longueur 8 cm et de largeur 3 cm ?",
          options: ["11 cm", "22 cm", "24 cm", "44 cm"],
          answer: 1,
          hint: "Périmètre rectangle = 2 × (L + l).",
          explication: "P = 2 × (8 + 3) = 2 × 11 = 22 cm."
        },
        {
          text: "Quelle est l'aire d'un rectangle de longueur 8 cm et de largeur 3 cm ?",
          options: ["11 cm²", "22 cm²", "24 cm²", "32 cm²"],
          answer: 2,
          hint: "Aire rectangle = L × l.",
          explication: "A = 8 × 3 = 24 cm²."
        },
        {
          type: "vrai_faux",
          text: "Le périmètre s'exprime en centimètres mais l'aire s'exprime en centimètres carrés (cm²).",
          answer: 0,
          hint: "Le périmètre est une longueur (1D), l'aire est une surface (2D).",
          explication: "VRAI. Une longueur s'exprime en cm, une surface en cm² (carrés)."
        },
        {
          text: "Quelle est l'aire d'un triangle de base 6 cm et de hauteur 4 cm ?",
          options: ["10 cm²", "12 cm²", "20 cm²", "24 cm²"],
          answer: 1,
          hint: "Aire triangle = (base × hauteur) ÷ 2.",
          explication: "A = (6 × 4) ÷ 2 = 24 ÷ 2 = 12 cm²."
        },
        {
          text: "1 m² = ?",
          options: ["10 cm²", "100 cm²", "1 000 cm²", "10 000 cm²"],
          answer: 3,
          hint: "1 m = 100 cm. Donc 1 m² = 100 × 100 cm².",
          explication: "1 m × 1 m = 100 cm × 100 cm = 10 000 cm²."
        },
        {
          text: "Un terrain rectangulaire mesure 50 m sur 20 m. Quel est son périmètre ?",
          options: ["70 m", "100 m", "140 m", "1 000 m"],
          answer: 2,
          hint: "Périmètre = 2 × (L + l).",
          explication: "P = 2 × (50 + 20) = 2 × 70 = 140 m."
        },
        {
          type: "qcm",
          text: "Quelles formules sont correctes ?",
          options: ["Aire carré = côté²", "Périmètre rectangle = L × l", "Aire triangle = base × hauteur ÷ 2", "Périmètre carré = 4 × côté"],
          answer: [0, 2, 3],
          hint: "Attention : L × l donne une aire, pas un périmètre.",
          explication: "L × l est la formule de l'aire d'un rectangle, pas de son périmètre. Les trois autres sont correctes."
        },
        {
          type: "texte",
          text: "Aire d'un rectangle de longueur 10 cm et largeur 5 cm ? Réponds avec un nombre en cm².",
          answer: "50",
          hint: "Aire = L × l.",
          explication: "10 × 5 = 50 cm²."
        }
      ]
    },
    {
      id: "donnees",
      name: "Gestion de données",
      emoji: "📈",
      desc: "Tableaux, graphiques, fréquences",
      questions: [
        {
          text: "Dans une classe de 25 élèves, 15 préfèrent le foot. Quelle fraction des élèves préfèrent le foot ?",
          options: ["15/10", "15/25", "10/25", "25/15"],
          answer: 1,
          hint: "Le total va au dénominateur, la partie au numérateur.",
          explication: "15 sur 25 = 15/25 (qui simplifie en 3/5)."
        },
        {
          text: "Sur un diagramme en bâtons, la hauteur d'un bâton représente…",
          options: ["la valeur ou l'effectif", "la couleur du sujet", "le rang alphabétique", "rien de précis"],
          answer: 0,
          hint: "Plus le bâton est haut, plus la valeur est grande.",
          explication: "Sur un diagramme en bâtons, la hauteur (ou longueur) du bâton est proportionnelle à la valeur représentée."
        },
        {
          text: "Une classe a fait un sondage sur les fruits préférés. 8 élèves préfèrent la pomme, 6 la banane, 5 la fraise et 1 le kiwi. Combien d'élèves ont participé ?",
          options: ["18", "19", "20", "21"],
          answer: 2,
          hint: "Additionne tous les effectifs.",
          explication: "8 + 6 + 5 + 1 = 20 élèves."
        },
        {
          text: "Dans le même sondage (8 pommes, 6 bananes, 5 fraises, 1 kiwi), quel est le fruit préféré ?",
          options: ["la pomme", "la banane", "la fraise", "le kiwi"],
          answer: 0,
          hint: "Cherche l'effectif le plus grand.",
          explication: "La pomme avec 8 voix arrive en tête."
        },
        {
          type: "vrai_faux",
          text: "Dans un tableau de données, les colonnes peuvent représenter différentes catégories.",
          answer: 0,
          hint: "Les tableaux servent à organiser des données par catégories.",
          explication: "VRAI. Un tableau organise les données en lignes et colonnes pour faciliter la lecture."
        },
        {
          text: "Sur 50 élèves, 20 ont les yeux bleus. Quel pourcentage cela représente-t-il ?",
          options: ["20%", "30%", "40%", "50%"],
          answer: 2,
          hint: "20 sur 50 = combien sur 100 ?",
          explication: "20/50 = 40/100 = 40%."
        },
        {
          text: "Quel type de graphique est le mieux adapté pour montrer l'évolution de la température au cours d'une journée ?",
          options: ["camembert", "diagramme en bâtons", "courbe", "pictogramme"],
          answer: 2,
          hint: "Pour une évolution dans le temps, on relie les points.",
          explication: "Une courbe (graphique linéaire) montre bien l'évolution continue d'une grandeur dans le temps."
        },
        {
          type: "qcm",
          text: "Que peut-on lire facilement sur un diagramme circulaire (camembert) ?",
          options: ["la répartition en pourcentages", "la part de chaque catégorie", "l'évolution dans le temps", "le total exact"],
          answer: [0, 1],
          hint: "Le camembert sert à comparer des parts d'un tout, pas une évolution.",
          explication: "Le camembert montre les parts et pourcentages. Pour l'évolution dans le temps, on préfère une courbe."
        },
        {
          text: "Si 1/4 des élèves d'une classe portent des lunettes et qu'il y a 28 élèves, combien portent des lunettes ?",
          options: ["4", "7", "14", "21"],
          answer: 1,
          hint: "Divise par 4.",
          explication: "28 ÷ 4 = 7 élèves."
        },
        {
          type: "texte",
          text: "La moitié de 80 élèves prend le bus. Combien d'élèves prennent le bus ?",
          answer: "40",
          hint: "La moitié = divisé par 2.",
          explication: "80 ÷ 2 = 40 élèves."
        }
      ]
    }
  ]
};
