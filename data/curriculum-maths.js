/* Matière : Mathématiques 🔢
   8 thèmes × 10 questions = 80 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["maths"] = {
  id: "maths",
  name: "Mathématiques",
  emoji: "🔢",
  desc: "Nombres, calcul, géométrie, mesures",
  topics: [
    {
      id: "decimaux",
      name: "Nombres décimaux",
      emoji: "📊",
      desc: "Lecture, écriture, comparaison, calcul",
      questions: [
        {
          text: "Dans le nombre 7,384, quel est le chiffre des centièmes ?",
          hint: "Rangs après la virgule : dixièmes → centièmes → millièmes",
          options: ["7","3","8","4"],
          answer: 2,
          explication: "7,384 : 3 = dixièmes, 8 = centièmes, 4 = millièmes."
        },
        {
          text: "Quel nombre est compris entre 2,4 et 2,5 ?",
          options: ["2,39","2,41","2,51","2,6"],
          answer: 1,
          explication: "2,4 < 2,41 < 2,5 ✓. 2,39 est inférieur à 2,4 et 2,51 est supérieur à 2,5."
        },
        {
          text: "Que vaut 6,7 × 100 ?",
          hint: "Multiplier par 100 = décaler la virgule de 2 rangs vers la droite.",
          options: ["0,067","0,67","67","670"],
          answer: 3,
          explication: "6,7 × 100 = 670. On décale la virgule de 2 rangs à droite : 6,7 → 670."
        },
        {
          text: "Quel est l'arrondi de 4,65 au dixième près ?",
          hint: "Regarde le chiffre des centièmes pour décider.",
          options: ["4,6","4,7","5,0","4,65"],
          answer: 1,
          explication: "Le chiffre des centièmes est 5 ≥ 5, donc on arrondit le dixième vers le haut : 4,7."
        },
        {
          text: "Dans le nombre 4,285, quel chiffre est au rang des millièmes ?",
          hint: "Après la virgule : dixièmes → centièmes → millièmes.",
          options: ["4","2","8","5"],
          answer: 3,
          explication: "Dans 4,285 : 2 = dixièmes, 8 = centièmes, 5 = millièmes. Le rang des millièmes est le 3e chiffre après la virgule."
        },
        {
          text: "Parmi ces nombres, quel est le plus grand ?",
          hint: "Compare d'abord la partie entière, puis les dixièmes, les centièmes…",
          options: ["0,7","0,68","0,712","0,09"],
          answer: 2,
          explication: "On compare rang par rang : 0,712 a 7 dixièmes comme 0,7, mais ensuite 1 centième > 0. Donc 0,712 est le plus grand."
        },
        {
          text: "Combien de dixièmes y a-t-il dans 0,5 ?",
          hint: "1 dixième = 0,1.",
          options: ["5 dixièmes","50 dixièmes","0,5 dixième","500 dixièmes"],
          answer: 0,
          explication: "0,5 = 5 × 0,1, soit 5 dixièmes. (Et 0,5 = 50 centièmes = 500 millièmes.)"
        },
        {
          text: "Que vaut 34,2 ÷ 10 ?",
          hint: "Diviser par 10 = décaler la virgule d'un rang vers la gauche.",
          options: ["3,42","342","0,342","3,402"],
          answer: 0,
          explication: "34,2 ÷ 10 : on décale la virgule d'un rang à gauche → 3,42."
        },
        {
          text: "Comment écrit-on « trois unités et sept centièmes » en chiffres ?",
          hint: "Pense à remplir le rang des dixièmes même s'il est vide.",
          options: ["3,7","3,07","3,007","0,37"],
          answer: 1,
          explication: "3 unités, 0 dixième, 7 centièmes → 3,07. Le zéro des dixièmes est indispensable."
        },
        {
          type: "vrai_faux",
          text: "Les nombres 2,5 et 2,50 représentent la même quantité.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Ajouter un zéro tout à droite après la virgule ne change pas la valeur : 2,5 = 2,50 = 2,500."
        }
      ]
    },
    {
      id: "fractions",
      name: "Fractions",
      emoji: "🍕",
      desc: "Fractions simples, comparaison, équivalences",
      questions: [
        {
          text: "Quelle fraction est équivalente à 1/2 ?",
          options: ["2/5","3/6","4/9","2/3"],
          answer: 1,
          explication: "3/6 = 1/2 car on divise numérateur et dénominateur par 3 : 3÷3 = 1 et 6÷3 = 2."
        },
        {
          text: "3/8 + 2/8 = ?",
          options: ["5/16","5/8","6/8","1/8"],
          answer: 1,
          explication: "Même dénominateur → on additionne les numérateurs : 3 + 2 = 5, donc 5/8."
        },
        {
          text: "Quelle fraction représente 0,25 ?",
          hint: "0,25 = 25 centièmes = 25/100. Simplifie.",
          options: ["1/4","1/5","1/2","2/5"],
          answer: 0,
          explication: "0,25 = 25/100 = 1/4 (on divise numérateur et dénominateur par 25)."
        },
        {
          text: "Laquelle de ces fractions est la plus proche de 1 ?",
          hint: "Convertis en décimaux pour comparer.",
          options: ["3/4","7/8","2/3","5/6"],
          answer: 1,
          explication: "7/8 = 0,875 ; 5/6 ≈ 0,833 ; 3/4 = 0,75 ; 2/3 ≈ 0,667. La plus proche de 1 est 7/8."
        },
        {
          text: "Combien font les 2/3 de 12 ?",
          hint: "2/3 de 12 = 2 × (12 ÷ 3)",
          options: ["6","8","4","9"],
          answer: 1,
          explication: "2/3 de 12 : d'abord 12 ÷ 3 = 4 (un tiers de 12), puis 4 × 2 = 8 (deux tiers). Donc 2/3 de 12 = 8."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces fractions sont égales à 1/2 ?",
          hint: "Plusieurs réponses sont correctes ! Une fraction équivalente s'obtient en multipliant haut et bas par le même nombre.",
          options: ["2/4","3/5","5/10","4/8"],
          answer: [0,2,3],
          explication: "2/4 = 1/2 (÷2), 5/10 = 1/2 (÷5), 4/8 = 1/2 (÷4). En revanche 3/5 ≠ 1/2 car 3 × 2 = 6 ≠ 5."
        },
        {
          text: "Comment écrit-on la fraction 7/4 sous forme d'un nombre entier et d'une fraction ?",
          hint: "Combien de fois 4 entre-t-il dans 7 ?",
          options: ["1 et 3/4","2 et 1/4","1 et 1/4","3 et 1/4"],
          answer: 0,
          explication: "7/4 = 4/4 + 3/4 = 1 + 3/4. Donc 7/4 = 1 et 3/4 (un entier et trois quarts)."
        },
        {
          text: "Quelle est la fraction simplifiée de 6/9 ?",
          hint: "Cherche un nombre qui divise 6 ET 9.",
          options: ["2/3","3/4","1/3","6/9 ne se simplifie pas"],
          answer: 0,
          explication: "On divise haut et bas par 3 : 6÷3 = 2 et 9÷3 = 3, donc 6/9 = 2/3."
        },
        {
          text: "Quelle fraction est la plus petite : 1/2, 1/3 ou 1/5 ?",
          hint: "Plus le dénominateur est grand, plus les parts sont petites.",
          options: ["1/2","1/3","1/5","Elles sont égales"],
          answer: 2,
          explication: "Quand le numérateur est 1, plus le dénominateur est grand, plus la fraction est petite : 1/5 < 1/3 < 1/2."
        },
        {
          text: "Quel nombre décimal correspond à la fraction 3/4 ?",
          hint: "3/4 = 75 centièmes.",
          options: ["0,34","0,75","0,43","1,33"],
          answer: 1,
          explication: "3/4 = 75/100 = 0,75. (On peut aussi calculer 3 ÷ 4 = 0,75.)"
        }
      ]
    },
    {
      id: "geometrie",
      name: "Géométrie",
      emoji: "📐",
      desc: "Figures planes, périmètre, aire, symétrie",
      questions: [
        {
          text: "Quelle est la mesure d'un angle droit ?",
          image: "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <line x1=\"120\" y1=\"110\" x2=\"190\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <path d=\"M 142 110 A 22 22 0 0 0 120 88\" fill=\"none\" stroke=\"var(--subj-color)\" stroke-width=\"2\"/>\n      <circle cx=\"120\" cy=\"110\" r=\"3\" fill=\"currentColor\"/>\n      <text x=\"120\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Angle droit</text>\n    </svg>",
          options: ["45°","90°","180°","360°"],
          answer: 1,
          explication: "Un angle droit mesure exactement 90°. On le reconnaît à son symbole carré dans le coin. Chaque angle d'un rectangle est un angle droit."
        },
        {
          text: "Quelle est la somme des angles intérieurs d'un triangle ?",
          image: "<svg viewBox=\"0 0 240 165\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <polygon points=\"30,130 120,25 210,130\" fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <text x=\"120\" y=\"150\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Triangle isocèle</text>\n    </svg>",
          options: ["90°","180°","270°","360°"],
          answer: 1,
          explication: "La somme des angles intérieurs d'un triangle est toujours égale à 180°, quel que soit le triangle."
        },
        {
          text: "Quel est le périmètre d'un carré de côté 7 cm ?",
          image: "<svg viewBox=\"0 0 240 170\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <rect x=\"60\" y=\"25\" width=\"120\" height=\"120\" fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      \n        <text x=\"120\" y=\"167\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">7 cm</text>\n        <text x=\"52\" y=\"89\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">7 cm</text>\n    </svg>",
          hint: "Périmètre = somme de tous les côtés = 4 × côté",
          options: ["14 cm","21 cm","28 cm","49 cm"],
          answer: 2,
          explication: "Périmètre = 4 × 7 = 28 cm. (49 cm² serait l'AIRE du carré, pas le périmètre !)"
        },
        {
          text: "Un trapèze est un quadrilatère qui possède...",
          options: ["4 côtés égaux","4 angles droits","exactement une paire de côtés parallèles","2 paires de côtés parallèles"],
          answer: 2,
          explication: "Un trapèze a exactement une paire de côtés parallèles (les bases). Un rectangle en a 2 paires, donc ce n'est pas un trapèze au sens strict."
        },
        {
          text: "Quelle est l'aire d'un rectangle de 5 cm × 8 cm ?",
          image: "<svg viewBox=\"0 0 240 170\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <rect x=\"40\" y=\"35\" width=\"160\" height=\"100\" fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      \n        <text x=\"120\" y=\"157\" text-anchor=\"middle\" font-size=\"13\" fill=\"currentColor\">8 cm</text>\n        <text x=\"32\" y=\"89\" text-anchor=\"end\" font-size=\"13\" fill=\"currentColor\">5 cm</text>\n    </svg>",
          hint: "Aire d'un rectangle = longueur × largeur",
          options: ["13 cm²","26 cm²","40 cm²","80 cm²"],
          answer: 2,
          explication: "Aire = 5 × 8 = 40 cm². (Ne pas confondre avec le périmètre = 2×(5+8) = 26 cm.)"
        },
        {
          type: "vrai_faux",
          text: "Tous les triangles ont trois angles droits.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Un triangle peut avoir 0 ou 1 angle droit. La somme des angles fait toujours 180°. Avec 3 angles droits, le total ferait 270°, impossible."
        },
        {
          text: "Combien de faces possède un cube ?",
          options: ["4","6","8","12"],
          answer: 1,
          explication: "Un cube a 6 faces carrées, 8 sommets et 12 arêtes."
        },
        {
          text: "Comment appelle-t-on une droite qui partage une figure en deux parties superposables par pliage ?",
          image: "<svg viewBox=\"0 0 240 170\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <polygon points=\"120,25 175,80 120,135 65,80\" fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <text x=\"120\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Carré</text>\n    <line x1=\"120\" y1=\"10\" x2=\"120\" y2=\"150\" stroke=\"var(--subj-color)\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/></svg>",
          hint: "C'est lié à la symétrie.",
          options: ["Une diagonale","Un axe de symétrie","Une médiane","Une hauteur"],
          answer: 1,
          explication: "Un axe de symétrie partage la figure en deux moitiés qui se superposent exactement par pliage le long de cet axe."
        },
        {
          text: "Quel instrument utilise-t-on pour mesurer un angle ?",
          options: ["Le compas","L'équerre","Le rapporteur","Le double-décimètre"],
          answer: 2,
          explication: "Le rapporteur mesure les angles en degrés. Le compas trace des cercles, l'équerre vérifie les angles droits."
        },
        {
          text: "Combien de côtés a un hexagone ?",
          image: "<svg viewBox=\"0 0 240 170\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <polygon points=\"120,25 167.6313972081441,52.5 167.63139720814414,107.49999999999999 120,135 72.36860279185589,107.50000000000001 72.36860279185588,52.49999999999999\" fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <text x=\"120\" y=\"160\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">Hexagone</text>\n    </svg>",
          hint: "« Hexa » vient du grec et signifie six.",
          options: ["5","6","7","8"],
          answer: 1,
          explication: "Un hexagone a 6 côtés (et 6 angles). Pentagone = 5, heptagone = 7, octogone = 8."
        }
      ]
    },
    {
      id: "mesures",
      name: "Mesures & grandeurs",
      emoji: "📏",
      desc: "Longueurs, masses, durées, contenances",
      questions: [
        {
          text: "3,5 km = ? m",
          hint: "1 km = 1 000 m",
          options: ["350 m","3 500 m","35 000 m","350 000 m"],
          answer: 1,
          explication: "3,5 × 1 000 = 3 500 m."
        },
        {
          text: "2 h 30 min = combien de minutes ?",
          hint: "1 heure = 60 minutes",
          options: ["90 min","120 min","150 min","180 min"],
          answer: 2,
          explication: "2 × 60 + 30 = 120 + 30 = 150 min."
        },
        {
          text: "2 500 g = ? kg",
          hint: "1 kg = 1 000 g",
          options: ["0,25 kg","2,5 kg","25 kg","250 kg"],
          answer: 1,
          explication: "2 500 ÷ 1 000 = 2,5 kg."
        },
        {
          text: "1 L 25 cL = ? cL",
          hint: "1 L = 100 cL",
          options: ["26 cL","125 cL","225 cL","1 025 cL"],
          answer: 1,
          explication: "1 L = 100 cL, donc 1 L 25 cL = 100 + 25 = 125 cL."
        },
        {
          text: "1 m² = combien de dm² ?",
          hint: "1 m = 10 dm, donc 1 m² = 10 dm × 10 dm.",
          options: ["10 dm²","100 dm²","1 000 dm²","10 000 dm²"],
          answer: 1,
          explication: "1 m = 10 dm. Pour les surfaces, on élève au carré : 1 m² = 10 × 10 = 100 dm². Attention à ne pas confondre avec les longueurs !"
        },
        {
          text: "Combien de grammes y a-t-il dans 1 kilogramme ?",
          options: ["100 g","1 000 g","10 000 g","10 g"],
          answer: 1,
          explication: "1 kg = 1 000 g. Le préfixe « kilo » signifie « mille »."
        },
        {
          text: "Combien de minutes y a-t-il dans une journée complète (24 h) ?",
          hint: "Il y a 60 minutes dans une heure.",
          options: ["240 min","1 440 min","144 min","3 600 min"],
          answer: 1,
          explication: "24 h × 60 min = 1 440 minutes dans une journée."
        },
        {
          text: "75 cm, c'est combien de mètres ?",
          hint: "1 m = 100 cm.",
          options: ["7,5 m","0,75 m","0,075 m","750 m"],
          answer: 1,
          explication: "75 cm = 75/100 m = 0,75 m (un peu plus de la moitié d'un mètre)."
        },
        {
          text: "Quelle unité est la mieux adaptée pour mesurer la contenance d'une bouteille ?",
          options: ["Le mètre (m)","Le gramme (g)","Le litre (L)","Le degré (°)"],
          answer: 2,
          explication: "Le litre (L) mesure les volumes/contenances de liquide. Le mètre mesure des longueurs, le gramme des masses."
        },
        {
          text: "Un film commence à 20 h 45 et dure 1 h 30. À quelle heure se termine-t-il ?",
          hint: "Ajoute les heures, puis les minutes (attention au passage à l'heure suivante).",
          options: ["21 h 15","22 h 15","22 h 45","21 h 75"],
          answer: 1,
          explication: "20 h 45 + 1 h = 21 h 45 ; + 30 min = 22 h 15. (On n'écrit jamais « 21 h 75 ».)"
        }
      ]
    },
    {
      id: "calcul",
      name: "Calcul & opérations",
      emoji: "🧮",
      desc: "Calcul mental, addition, multiplication, division",
      questions: [
        {
          text: "Combien font 25 × 8 ?",
          hint: "Astuce : 25 × 8 = 25 × 4 × 2 = 100 × 2.",
          options: ["150","180","200","240"],
          answer: 2,
          explication: "25 × 8 : on peut faire 25 × 4 = 100, puis 100 × 2 = 200. Ou directement : 25 × 8 = 200."
        },
        {
          text: "Combien font 1 000 − 347 ?",
          hint: "Pense au complément à 1 000 : 347 + ? = 1 000.",
          options: ["553","643","653","753"],
          answer: 2,
          explication: "1 000 − 347 = 653. Vérification : 347 + 653 = 1 000."
        },
        {
          text: "Quel est le résultat de la division euclidienne de 47 par 6 ?",
          hint: "47 = 6 × ? + reste (le reste doit être plus petit que 6).",
          options: ["Quotient 7, reste 5","Quotient 8, reste 1","Quotient 6, reste 11","Quotient 7, reste 7"],
          answer: 0,
          explication: "6 × 7 = 42. 47 − 42 = 5. Donc 47 = 6 × 7 + 5. Quotient = 7, reste = 5."
        },
        {
          text: "Combien font 3,5 × 100 ?",
          hint: "Multiplier par 100 décale la virgule de 2 rangs à droite.",
          options: ["3,5","35","350","3 500"],
          answer: 2,
          explication: "3,5 × 100 = 350. On décale la virgule de 2 rangs vers la droite (et on ajoute un zéro car il n'y avait qu'un chiffre après la virgule)."
        },
        {
          text: "Calcule 124 + 78 + 26 (en regroupant astucieusement).",
          hint: "Regroupe les nombres qui font des dizaines rondes.",
          options: ["218","228","238","248"],
          answer: 1,
          explication: "Calcul malin : 124 + 26 = 150 (regroupement astucieux), puis 150 + 78 = 228."
        },
        {
          text: "Combien font 7 × 9 ?",
          options: ["56","63","64","72"],
          answer: 1,
          explication: "7 × 9 = 63. (Astuce : 7 × 10 = 70, puis 70 − 7 = 63.)"
        },
        {
          text: "Combien font 480 ÷ 4 ?",
          hint: "Décompose : 480 = 400 + 80. Divise chaque partie.",
          options: ["110","120","130","140"],
          answer: 1,
          explication: "480 ÷ 4 : 400 ÷ 4 = 100 et 80 ÷ 4 = 20. Total : 100 + 20 = 120."
        },
        {
          text: "Combien font 12 × 25 ?",
          hint: "Astuce : 12 × 25 = 12 × 100 ÷ 4.",
          options: ["250","275","300","325"],
          answer: 2,
          explication: "12 × 25 = 12 × 100 ÷ 4 = 1 200 ÷ 4 = 300."
        },
        {
          type: "texte",
          text: "Tape le résultat : 8 × 7 = ?",
          hint: "Table de 8 ou table de 7, à connaître par cœur.",
          answer: ["56"],
          explication: "8 × 7 = 56. C'est un produit de la table de multiplication à mémoriser absolument."
        },
        {
          text: "Quel est le résultat de 15 + 6 × 2 ?",
          hint: "On effectue la multiplication AVANT l'addition.",
          options: ["42","27","33","23"],
          answer: 1,
          explication: "Priorité à la multiplication : 6 × 2 = 12, puis 15 + 12 = 27. (15 + 6 d'abord donnerait 42, ce qui est faux.)"
        }
      ]
    },
    {
      id: "proportionnalite",
      name: "Proportionnalité",
      emoji: "⚖️",
      desc: "Tableaux, règle de trois, pourcentages, échelles",
      questions: [
        {
          text: "Si 3 stylos coûtent 6 €, combien coûtent 5 stylos au même prix unitaire ?",
          hint: "D'abord, le prix d'un stylo : 6 € ÷ 3 = ?",
          options: ["8 €","10 €","12 €","15 €"],
          answer: 1,
          explication: "1 stylo = 6 ÷ 3 = 2 €. Donc 5 stylos = 5 × 2 = 10 €."
        },
        {
          text: "Calcule 20 % de 80.",
          hint: "20 % = 20/100 = 1/5. Cherche le cinquième de 80.",
          options: ["8","12","16","20"],
          answer: 2,
          explication: "20 % de 80 = (20 × 80) ÷ 100 = 1 600 ÷ 100 = 16. Ou plus simple : 1/5 de 80 = 80 ÷ 5 = 16."
        },
        {
          text: "Une voiture parcourt 90 km en 1 h. Quelle distance parcourt-elle en 30 min à vitesse constante ?",
          hint: "30 min = moitié d'une heure → distance divisée par 2.",
          options: ["30 km","45 km","60 km","90 km"],
          answer: 1,
          explication: "30 min = la moitié d'1 heure → la distance est divisée par 2. 90 km ÷ 2 = 45 km."
        },
        {
          text: "Sur une carte à l'échelle 1/100 000, 1 cm représente combien dans la réalité ?",
          hint: "1 cm × 100 000 = ? cm. Convertis ensuite en km.",
          options: ["100 m","1 km","10 km","100 km"],
          answer: 1,
          explication: "Échelle 1/100 000 : 1 cm carte = 100 000 cm réels = 1 000 m = 1 km."
        },
        {
          text: "Dans une classe de 25 élèves, 60 % font du sport. Combien d'élèves font du sport ?",
          hint: "60 % de 25 = (60 × 25) ÷ 100.",
          options: ["12","15","18","20"],
          answer: 1,
          explication: "60 % de 25 = (60 × 25) ÷ 100 = 1 500 ÷ 100 = 15 élèves."
        },
        {
          text: "4 kg de pommes coûtent 8 €. Combien coûte 1 kg ?",
          options: ["1 €","2 €","3 €","4 €"],
          answer: 1,
          explication: "1 kg = 8 € ÷ 4 = 2 €. C'est le prix unitaire (prix d'1 kg)."
        },
        {
          text: "Si je double la quantité d'un ingrédient dans une recette, je dois aussi doubler...",
          options: ["Le temps de cuisson","Tous les autres ingrédients","La température du four","Le nombre de personnes uniquement"],
          answer: 1,
          explication: "Dans une recette, les quantités sont proportionnelles : si on double l'un, on double TOUS les ingrédients pour garder le même goût."
        },
        {
          text: "Que vaut 50 % d'un nombre ?",
          options: ["Le quart de ce nombre","La moitié de ce nombre","Le tiers de ce nombre","Les trois quarts de ce nombre"],
          answer: 1,
          explication: "50 % = 50/100 = 1/2. 50 % d'un nombre = la moitié de ce nombre. Ex : 50 % de 200 = 100."
        },
        {
          text: "Une recette pour 4 personnes demande 200 g de farine. Combien faut-il pour 6 personnes ?",
          hint: "Cherche d'abord la quantité pour 1 personne.",
          options: ["250 g","300 g","350 g","400 g"],
          answer: 1,
          explication: "Pour 1 personne : 200 ÷ 4 = 50 g. Pour 6 personnes : 50 × 6 = 300 g."
        },
        {
          text: "Calcule 25 % de 200.",
          hint: "25 % = un quart.",
          options: ["25","50","75","100"],
          answer: 1,
          explication: "25 % = 25/100 = 1/4. Un quart de 200 = 200 ÷ 4 = 50."
        }
      ]
    },
    {
      id: "grands_nombres",
      name: "Grands nombres entiers",
      emoji: "💯",
      desc: "Lecture, écriture, rangs jusqu'au milliard",
      questions: [
        {
          text: "Comment lit-on le nombre 3 048 207 ?",
          options: ["Trois millions quarante-huit mille deux cent sept","Trois cent quarante-huit mille deux cent sept","Trois millions quatre cent huit mille deux cent sept","Trois milliards quarante-huit mille deux cent sept"],
          answer: 0,
          explication: "3 048 207 = 3 millions + 48 mille + 207 = trois millions quarante-huit mille deux cent sept."
        },
        {
          text: "Dans 7 256 391, à quel rang est le chiffre 5 ?",
          hint: "Compte de droite à gauche : unités, dizaines, centaines, mille, dizaines de mille…",
          options: ["Mille","Dizaine de mille","Centaine de mille","Million"],
          answer: 1,
          explication: "7 256 391 → 1 = unités, 9 = dizaines, 3 = centaines, 6 = mille, 5 = DIZAINES DE MILLE, 2 = centaines de mille, 7 = millions."
        },
        {
          text: "Comment écrit-on en chiffres « un milliard deux cents millions » ?",
          options: ["1 200 000","12 000 000","1 200 000 000","12 000 000 000"],
          answer: 2,
          explication: "1 milliard = 1 000 000 000 (9 zéros). 200 millions = 200 000 000. Total : 1 200 000 000."
        },
        {
          text: "Lequel de ces nombres est le plus grand ?",
          options: ["999 999","1 000 008","987 654","1 000 000"],
          answer: 1,
          explication: "1 000 008 > 1 000 000 > 999 999 > 987 654. Le plus grand est 1 000 008 (légèrement au-delà du million)."
        },
        {
          text: "Combien y a-t-il de zéros dans « un million » écrit en chiffres ?",
          options: ["3 zéros","5 zéros","6 zéros","9 zéros"],
          answer: 2,
          explication: "1 million = 1 000 000 = 6 zéros. (1 mille = 3 zéros, 1 milliard = 9 zéros.)"
        },
        {
          text: "Quel est le nombre qui suit immédiatement 999 999 ?",
          options: ["1 000 000","100 000","999 990","9 999 999"],
          answer: 0,
          explication: "999 999 + 1 = 1 000 000 (un million). Toutes les colonnes pleines de 9 passent à 0 avec une retenue."
        },
        {
          text: "Dans 4 605 218, quel est le chiffre des dizaines de mille ?",
          hint: "Repère les tranches : millions / mille / unités.",
          options: ["6","0","5","4"],
          answer: 1,
          explication: "4 605 218 : 0 = dizaines de mille (4 6[0]5 218). 6 = centaines de mille, 5 = unités de mille."
        },
        {
          text: "Comment se décompose 50 320 ?",
          options: ["5 × 1 000 + 3 × 100 + 2 × 10","5 × 10 000 + 3 × 100 + 2 × 10","50 × 100 + 3 × 10 + 2","5 × 1 000 + 32 × 10"],
          answer: 1,
          explication: "50 320 = 50 000 + 300 + 20 = 5 × 10 000 + 3 × 100 + 2 × 10."
        },
        {
          text: "Range ces nombres du plus petit au plus grand : 90 100 ; 9 100 ; 90 010.",
          hint: "Compte d'abord le nombre de chiffres.",
          options: ["9 100 < 90 010 < 90 100","90 010 < 90 100 < 9 100","9 100 < 90 100 < 90 010","90 100 < 90 010 < 9 100"],
          answer: 0,
          explication: "9 100 a 4 chiffres (le plus petit). Puis 90 010 < 90 100 car on compare les centaines : 0 < 1."
        },
        {
          type: "texte",
          text: "Écris en chiffres : « deux-cent-cinq-mille » (sans espace).",
          hint: "205 puis trois zéros ? Attention à la tranche des mille.",
          answer: ["205000","205 000"],
          explication: "Deux-cent-cinq-mille = 205 000. La tranche « mille » contient 205, suivie de la tranche des unités 000."
        }
      ]
    },
    {
      id: "problemes",
      name: "Résolution de problèmes",
      emoji: "🧩",
      desc: "Problèmes à étapes, choisir la bonne opération",
      questions: [
        {
          text: "Léa achète 3 livres à 7 € chacun. Elle paie avec un billet de 50 €. Combien lui rend-on ?",
          hint: "D'abord le total des livres, puis la monnaie rendue.",
          options: ["19 €","21 €","29 €","31 €"],
          answer: 2,
          explication: "Total livres : 3 × 7 = 21 €. Monnaie rendue : 50 − 21 = 29 €."
        },
        {
          text: "Une boîte contient 24 chocolats. On les partage équitablement entre 6 enfants. Combien chacun en reçoit-il ?",
          options: ["3","4","5","6"],
          answer: 1,
          explication: "Partage équitable = division. 24 ÷ 6 = 4 chocolats par enfant."
        },
        {
          text: "Un train part à 9h15 et arrive à 11h45. Combien dure le voyage ?",
          hint: "De 9h15 à 11h15 = 2 h, puis ajoute la fin.",
          options: ["1 h 30 min","2 h","2 h 30 min","3 h"],
          answer: 2,
          explication: "De 9h15 à 11h15 = 2 h, puis de 11h15 à 11h45 = 30 min. Total : 2 h 30 min."
        },
        {
          text: "Un jardin rectangulaire mesure 8 m sur 5 m. Quelle est son aire ?",
          hint: "Aire d'un rectangle = longueur × largeur.",
          options: ["13 m²","26 m²","40 m²","45 m²"],
          answer: 2,
          explication: "Aire = 8 × 5 = 40 m². (26 m serait le PÉRIMÈTRE : 2 × (8 + 5) = 26 m.)"
        },
        {
          text: "Maman a acheté 2,5 kg de pommes à 3 € le kg. Combien a-t-elle payé ?",
          options: ["5,50 €","6 €","7,50 €","8 €"],
          answer: 2,
          explication: "Prix = 2,5 × 3 = 7,50 €. (Astuce : 2 kg = 6 €, 0,5 kg = 1,50 €, total 7,50 €.)"
        },
        {
          text: "Tom a 35 billes. Il en gagne 12, puis en perd 8. Combien lui en reste-t-il ?",
          hint: "Suis l'ordre : départ + gain − perte.",
          options: ["31","39","47","55"],
          answer: 1,
          explication: "35 + 12 − 8 = 47 − 8 = 39 billes. Ou plus malin : 35 + (12 − 8) = 35 + 4 = 39."
        },
        {
          text: "Une corde de 12 m est coupée en 4 morceaux égaux. Quelle est la longueur de chaque morceau ?",
          options: ["2 m","3 m","4 m","6 m"],
          answer: 1,
          explication: "12 ÷ 4 = 3 mètres par morceau."
        },
        {
          text: "Pour fabriquer 12 gâteaux, il faut 4 œufs. Combien d'œufs pour 36 gâteaux ?",
          hint: "36 est 3 fois plus grand que 12.",
          options: ["8 œufs","10 œufs","12 œufs","16 œufs"],
          answer: 2,
          explication: "Proportionnalité : 36 ÷ 12 = 3 (3 fois plus de gâteaux), donc 3 fois plus d'œufs : 4 × 3 = 12 œufs."
        },
        {
          text: "Un livre coûte 14,50 €. Avec un billet de 20 €, combien me rend-on ?",
          options: ["4,50 €","5,50 €","6 €","6,50 €"],
          answer: 1,
          explication: "20 − 14,50 = 5,50 €. Vérification : 14,50 + 5,50 = 20 €."
        },
        {
          text: "Dans un parking, il y a 240 places. 175 sont occupées. Combien sont libres ?",
          options: ["55","65","75","85"],
          answer: 1,
          explication: "Places libres = total − occupées = 240 − 175 = 65 places."
        }
      ]
    }
  ]
};
