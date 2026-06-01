/* Matière : Physique-Chimie ⚗️
   4 thèmes × 10 questions = 40 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["physchim"] = {
  id: "physchim",
  name: "Physique-Chimie",
  emoji: "⚗️",
  desc: "États, mélanges, masse, lumière",
  topics: [
    {
      id: "etats_matiere",
      name: "États de la matière",
      emoji: "🧊",
      desc: "Solide, liquide, gaz et changements d'état",
      questions: [
        {
          text: "Quels sont les trois principaux états de la matière ?",
          image: "<svg viewBox=\"0 0 360 140\" xmlns=\"http://www.w3.org/2000/svg\" width=\"320\">\n    <!-- Solide : grille de carrés réguliers -->\n    <g transform=\"translate(20,20)\">\n      <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"4\"/>\n      <g fill=\"var(--subj-color)\">\n        <circle cx=\"15\" cy=\"15\" r=\"5\"/><circle cx=\"40\" cy=\"15\" r=\"5\"/><circle cx=\"65\" cy=\"15\" r=\"5\"/>\n        <circle cx=\"15\" cy=\"40\" r=\"5\"/><circle cx=\"40\" cy=\"40\" r=\"5\"/><circle cx=\"65\" cy=\"40\" r=\"5\"/>\n        <circle cx=\"15\" cy=\"65\" r=\"5\"/><circle cx=\"40\" cy=\"65\" r=\"5\"/><circle cx=\"65\" cy=\"65\" r=\"5\"/>\n      </g>\n      <text x=\"40\" y=\"105\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"currentColor\">Solide</text>\n    </g>\n    <!-- Liquide : particules plus espacées en bas du contenant -->\n    <g transform=\"translate(140,20)\">\n      <path d=\"M 0 0 L 0 80 L 80 80 L 80 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n      <g fill=\"var(--subj-color)\">\n        <circle cx=\"12\" cy=\"50\" r=\"5\"/><circle cx=\"28\" cy=\"58\" r=\"5\"/><circle cx=\"46\" cy=\"52\" r=\"5\"/>\n        <circle cx=\"62\" cy=\"60\" r=\"5\"/><circle cx=\"22\" cy=\"68\" r=\"5\"/><circle cx=\"56\" cy=\"70\" r=\"5\"/>\n      </g>\n      <text x=\"40\" y=\"105\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"currentColor\">Liquide</text>\n    </g>\n    <!-- Gaz : particules dispersées partout -->\n    <g transform=\"translate(260,20)\">\n      <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" rx=\"4\"/>\n      <g fill=\"var(--subj-color)\">\n        <circle cx=\"14\" cy=\"18\" r=\"4\"/><circle cx=\"55\" cy=\"12\" r=\"4\"/><circle cx=\"68\" cy=\"40\" r=\"4\"/>\n        <circle cx=\"22\" cy=\"55\" r=\"4\"/><circle cx=\"45\" cy=\"68\" r=\"4\"/><circle cx=\"38\" cy=\"32\" r=\"4\"/>\n      </g>\n      <text x=\"40\" y=\"105\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"currentColor\">Gaz</text>\n    </g>\n  </svg>",
          options: ["Solide, liquide, gazeux","Chaud, tiède, froid","Grand, moyen, petit","Vrai, faux, peut-être"],
          answer: 0,
          explication: "La matière existe principalement sous 3 états : solide (forme et volume propres), liquide (volume propre, forme du récipient) et gazeux (occupe tout l'espace disponible)."
        },
        {
          text: "Quelle est la principale caractéristique d'un solide ?",
          hint: "Pense à un caillou.",
          options: ["Il a une forme propre et un volume propre","Il prend la forme de son récipient","Il s'étend dans tout l'espace","Il est toujours liquide"],
          answer: 0,
          explication: "Un solide a une forme propre et un volume propre : il garde sa forme même sans récipient (un caillou reste un caillou)."
        },
        {
          text: "Quelle est la principale propriété d'un gaz ?",
          options: ["Il occupe tout le volume disponible et est compressible","Il a une forme rigide","Il est toujours visible","Il pèse plus qu'un solide"],
          answer: 0,
          explication: "Un gaz occupe tout l'espace disponible (il se dilate) et il est compressible (on peut le « tasser » dans un volume plus petit, comme dans un ballon)."
        },
        {
          text: "Comment appelle-t-on le passage de l'état solide à l'état liquide ?",
          hint: "Pense au glaçon qui se transforme dans le verre.",
          options: ["La fusion","La vaporisation","La condensation","La sublimation"],
          answer: 0,
          explication: "La fusion est le passage du solide au liquide (la glace fond). L'inverse (liquide → solide) est la solidification."
        },
        {
          text: "Comment appelle-t-on le passage de l'état liquide à l'état solide ?",
          options: ["La solidification","La fusion","L'évaporation","L'ébullition"],
          answer: 0,
          explication: "La solidification est le passage du liquide au solide. L'eau qui devient de la glace à 0 °C est un exemple."
        },
        {
          text: "À quelle température l'eau (pure) bout-elle au niveau de la mer ?",
          options: ["100 °C","50 °C","0 °C","200 °C"],
          answer: 0,
          explication: "Sous la pression atmosphérique normale (niveau de la mer), l'eau bout à 100 °C : elle passe de l'état liquide à l'état gazeux (vapeur d'eau)."
        },
        {
          text: "Pourquoi observe-t-on de la buée sur un miroir froid quand on se douche ?",
          hint: "La vapeur d'eau passe à l'état liquide au contact d'une surface froide.",
          options: ["Par condensation : la vapeur d'eau redevient liquide au contact du miroir froid","Le miroir transpire","L'air devient solide","Le miroir produit de l'eau"],
          answer: 0,
          explication: "La vapeur d'eau de la douche (gaz) se refroidit au contact du miroir froid et redevient liquide : c'est la condensation. Les fines gouttelettes forment la buée."
        },
        {
          text: "Que se passe-t-il avec la température de l'eau pendant qu'elle bout dans une casserole ?",
          options: ["Elle reste stable à 100 °C tant qu'il y a du liquide","Elle continue d'augmenter sans limite","Elle diminue rapidement","Elle disparaît"],
          answer: 0,
          explication: "Lors de l'ébullition, l'énergie reçue sert à transformer le liquide en gaz : la température reste stable au palier de 100 °C tant qu'il reste de l'eau liquide."
        },
        {
          type: "qcm",
          text: "Parmi ces affirmations sur l'eau, lesquelles sont VRAIES ?",
          options: ["la glace est l'état solide de l'eau","la vapeur d'eau est l'état gazeux","l'eau ne peut être que liquide","l'eau gèle à 100 °C"],
          answer: [0,1],
          explication: "VRAI : glace = solide, vapeur = gaz. FAUX : l'eau peut être sous 3 états, et elle gèle à 0 °C (pas à 100 °C qui est l'ébullition)."
        },
        {
          type: "vrai_faux",
          text: "Quand on chauffe la matière, ses particules s'agitent plus fortement.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. La température mesure l'agitation des particules : plus c'est chaud, plus elles bougent. C'est pour cela que la chaleur fait fondre les solides et vaporiser les liquides."
        }
      ]
    },
    {
      id: "melanges",
      name: "Mélanges & solutions",
      emoji: "💧",
      desc: "Homogène, hétérogène, séparation",
      questions: [
        {
          text: "Qu'est-ce qu'un mélange homogène ?",
          options: ["Un mélange dont on ne distingue pas les constituants à l'œil nu","Un mélange où l'on voit clairement plusieurs parties différentes","Un solide pur","Un gaz seul"],
          answer: 0,
          explication: "Un mélange homogène a un aspect uniforme : on ne distingue pas ses composants (eau + sel dissous, eau sucrée, air…)."
        },
        {
          text: "Qu'est-ce qu'un mélange hétérogène ?",
          hint: "Pense à de l'eau et de l'huile.",
          options: ["Un mélange dont on distingue les différents constituants","Un mélange parfaitement uniforme","Un corps pur","Une solution"],
          answer: 0,
          explication: "Dans un mélange hétérogène, on distingue plusieurs phases ou composants à l'œil nu (eau + huile, eau + sable, vinaigrette…)."
        },
        {
          text: "L'eau salée est un exemple de...",
          options: ["Mélange homogène (solution)","Mélange hétérogène","Corps pur","Solide"],
          answer: 0,
          explication: "Le sel se dissout complètement dans l'eau : on obtient une solution (mélange homogène). On ne voit plus les grains de sel."
        },
        {
          text: "Quel procédé permet de séparer un solide non dissous d'un liquide ?",
          options: ["La filtration","L'évaporation","La condensation","La fusion"],
          answer: 0,
          explication: "La filtration utilise un filtre qui retient les particules solides et laisse passer le liquide (filtrer du sable mélangé à de l'eau)."
        },
        {
          text: "Pour récupérer le sel dissous dans l'eau salée, quel procédé peut-on utiliser ?",
          hint: "On chauffe doucement pour faire partir l'eau.",
          options: ["L'évaporation","La filtration","Le tri sélectif","La fusion"],
          answer: 0,
          explication: "L'évaporation fait disparaître l'eau (passage à l'état gazeux) et laisse le sel sec au fond : c'est le principe des marais salants."
        },
        {
          text: "Quand on met du sucre dans l'eau et qu'il disparaît visuellement, on dit qu'il...",
          options: ["se dissout","s'évapore","fond","se solidifie"],
          answer: 0,
          explication: "Le sucre se DISSOUT dans l'eau (il forme une solution). Il ne fond pas (la fusion exige beaucoup de chaleur) et ne disparaît pas vraiment : il est juste dispersé."
        },
        {
          text: "Comment appelle-t-on le solide qu'on dissout dans un liquide ?",
          options: ["Le soluté","Le solvant","Le filtre","Le mélange"],
          answer: 0,
          explication: "Le SOLUTÉ est ce qu'on dissout (le sel, le sucre). Le SOLVANT est ce qui dissout (l'eau le plus souvent). Soluté + solvant = solution."
        },
        {
          text: "Pourquoi l'huile et l'eau ne se mélangent-elles pas ?",
          options: ["Parce que l'huile n'est pas soluble dans l'eau (elles ne se mélangent pas)","Parce que l'huile est trop chaude","Parce que l'eau est solide","Parce que l'huile pèse plus que l'eau"],
          answer: 0,
          explication: "L'huile et l'eau forment un mélange hétérogène : l'huile n'est pas soluble dans l'eau. L'huile, moins dense, flotte au-dessus."
        },
        {
          type: "qcm",
          text: "Parmi ces mélanges, lesquels sont HOMOGÈNES ?",
          options: ["eau salée","vinaigrette","eau sucrée","eau + sable"],
          answer: [0,2],
          explication: "L'eau salée et l'eau sucrée sont homogènes (on ne distingue pas les composants). La vinaigrette et l'eau + sable sont hétérogènes."
        },
        {
          type: "vrai_faux",
          text: "L'air est un mélange de plusieurs gaz.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. L'air est un mélange homogène : environ 78 % d'azote, 21 % d'oxygène, et des petites quantités de CO₂, vapeur d'eau, argon, etc."
        }
      ]
    },
    {
      id: "masse_volume",
      name: "Masse & volume",
      emoji: "⚖️",
      desc: "Mesures, unités, masse volumique",
      questions: [
        {
          text: "Quelle unité utilise-t-on pour mesurer la masse d'un objet ?",
          options: ["Le gramme (g) ou le kilogramme (kg)","Le mètre (m)","Le litre (L)","Le degré (°C)"],
          answer: 0,
          explication: "La masse se mesure en grammes (g) ou kilogrammes (kg). 1 kg = 1 000 g. Le mètre mesure les longueurs, le litre les volumes."
        },
        {
          text: "Avec quel instrument mesure-t-on précisément la masse d'un objet en classe ?",
          options: ["Une balance","Un thermomètre","Une règle","Un chronomètre"],
          answer: 0,
          explication: "La balance compare la masse d'un objet à des masses connues (balance Roberval) ou affiche la valeur (balance électronique)."
        },
        {
          text: "Quelle est l'unité principale du volume au laboratoire ?",
          hint: "Pour les liquides, on utilise souvent les millilitres.",
          options: ["Le litre (L)","Le gramme (g)","Le mètre (m)","Le newton (N)"],
          answer: 0,
          explication: "Le volume des liquides se mesure en litres (L) ou millilitres (mL). 1 L = 1 000 mL = 1 dm³."
        },
        {
          text: "Avec quel récipient mesure-t-on précisément un volume de liquide ?",
          options: ["Une éprouvette graduée","Une assiette","Une règle","Un thermomètre"],
          answer: 0,
          explication: "L'éprouvette graduée (ou la fiole jaugée) permet de mesurer précisément un volume de liquide grâce à des graduations."
        },
        {
          text: "Que vaut 1 litre (L) en centimètres cubes (cm³) ?",
          options: ["1 cm³","100 cm³","1 000 cm³","10 cm³"],
          answer: 2,
          explication: "1 L = 1 000 mL = 1 000 cm³ (un litre contient mille centimètres cubes). C'est aussi 1 dm³."
        },
        {
          text: "Si je verse 1 L d'eau dans 3 verres différents, son volume change-t-il ?",
          options: ["Non, le volume reste 1 L au total, seule la forme change","Oui, il devient plus grand","Oui, il devient plus petit","Il devient solide"],
          answer: 0,
          explication: "Le volume d'un liquide ne change pas selon le récipient : seule sa forme s'adapte. 1 L reste 1 L (conservation du volume)."
        },
        {
          text: "Quel objet a plus de chances d'avoir une masse importante ?",
          hint: "Pense à la matière qu'il contient.",
          options: ["Un cube de plomb","Un cube de polystyrène de même taille","Une plume","Un ballon vide"],
          answer: 0,
          explication: "À volume égal, le plomb (très dense) est beaucoup plus lourd que le polystyrène. La masse dépend du volume ET du matériau (de sa masse volumique)."
        },
        {
          text: "Pourquoi un bateau en métal ne coule-t-il pas ?",
          options: ["Parce qu'il est creux et que l'air à l'intérieur le rend moins dense que l'eau","Parce que le métal est plus léger que l'eau","Parce qu'il flotte par magie","Parce qu'il est sec"],
          answer: 0,
          explication: "La coque creuse du bateau contient beaucoup d'air : la masse totale (métal + air) divisée par le volume est inférieure à la masse volumique de l'eau, donc il flotte."
        },
        {
          text: "Comment mesurer le volume d'un caillou irrégulier ?",
          options: ["En l'immergeant dans une éprouvette d'eau et en mesurant la montée du liquide","Avec une règle uniquement","Avec une balance uniquement","Avec un thermomètre"],
          answer: 0,
          explication: "On utilise la méthode du déplacement d'eau : on plonge le caillou dans une éprouvette graduée et le volume du caillou = la montée du niveau d'eau."
        },
        {
          type: "vrai_faux",
          text: "À volume égal, un litre d'huile pèse moins qu'un litre d'eau.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. L'huile est moins dense que l'eau (c'est pour cela qu'elle flotte). 1 L d'huile pèse environ 920 g, contre 1 000 g pour 1 L d'eau."
        }
      ]
    },
    {
      id: "lumiere",
      name: "Lumière & ombres",
      emoji: "💡",
      desc: "Sources, propagation, ombres",
      questions: [
        {
          text: "Qu'est-ce qu'une source PRIMAIRE de lumière ?",
          options: ["Un objet qui produit sa propre lumière (Soleil, ampoule allumée, flamme)","Un objet qui renvoie la lumière des autres","Un objet noir","Un objet froid"],
          answer: 0,
          explication: "Une source primaire produit sa propre lumière : Soleil, étoiles, ampoule allumée, bougie. La Lune n'est PAS une source primaire (elle reflète la lumière du Soleil)."
        },
        {
          text: "Pourquoi peut-on voir la Lune ?",
          options: ["Elle reflète la lumière du Soleil (source secondaire)","Elle produit sa propre lumière","Elle est en feu","Elle est très chaude"],
          answer: 0,
          explication: "La Lune ne produit pas de lumière : elle nous renvoie celle du Soleil. C'est une source SECONDAIRE de lumière (comme un miroir éclairé)."
        },
        {
          text: "Comment se propage la lumière dans un milieu transparent et homogène (comme l'air) ?",
          options: ["En ligne droite","En zigzag","En cercles","En tournant en spirale"],
          answer: 0,
          explication: "La lumière se propage en ligne droite dans un milieu homogène. C'est pour cela qu'on peut tracer des « rayons » lumineux et qu'on a des ombres nettes."
        },
        {
          text: "Pourquoi un objet opaque produit-il une ombre derrière lui quand il est éclairé ?",
          image: "<svg viewBox=\"0 0 320 160\" xmlns=\"http://www.w3.org/2000/svg\" width=\"300\">\n    <!-- soleil -->\n    <circle cx=\"40\" cy=\"50\" r=\"18\" fill=\"#fbbf24\"/>\n    <g stroke=\"#fbbf24\" stroke-width=\"2\" stroke-linecap=\"round\">\n      <line x1=\"40\" y1=\"22\" x2=\"40\" y2=\"14\"/>\n      <line x1=\"40\" y1=\"86\" x2=\"40\" y2=\"78\"/>\n      <line x1=\"12\" y1=\"50\" x2=\"20\" y2=\"50\"/>\n      <line x1=\"60\" y1=\"32\" x2=\"66\" y2=\"26\"/>\n      <line x1=\"60\" y1=\"68\" x2=\"66\" y2=\"74\"/>\n      <line x1=\"18\" y1=\"30\" x2=\"24\" y2=\"34\"/>\n      <line x1=\"18\" y1=\"70\" x2=\"24\" y2=\"66\"/>\n    </g>\n    <!-- rayons vers l'objet -->\n    <line x1=\"60\" y1=\"42\" x2=\"155\" y2=\"65\" stroke=\"#fbbf24\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    <line x1=\"60\" y1=\"58\" x2=\"155\" y2=\"95\" stroke=\"#fbbf24\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    <!-- sol -->\n    <line x1=\"0\" y1=\"130\" x2=\"320\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- objet (un arbre simplifié) -->\n    <rect x=\"150\" y=\"100\" width=\"14\" height=\"30\" fill=\"#92400e\"/>\n    <circle cx=\"157\" cy=\"92\" r=\"20\" fill=\"#16a34a\"/>\n    <!-- ombre projetée -->\n    <ellipse cx=\"220\" cy=\"135\" rx=\"50\" ry=\"6\" fill=\"rgba(0,0,0,.5)\"/>\n    <text x=\"225\" y=\"155\" font-size=\"11\" fill=\"currentColor\" font-style=\"italic\">ombre projetée</text>\n  </svg>",
          options: ["Parce qu'il bloque la lumière sur son trajet","Parce qu'il aspire la lumière","Parce qu'il devient noir","Parce qu'il rebondit"],
          answer: 0,
          explication: "Un objet opaque arrête la lumière : derrière lui, il y a une zone non éclairée appelée ombre propre/portée."
        },
        {
          text: "Comment appelle-t-on un objet qui laisse passer la lumière sans qu'on voie nettement à travers (verre dépoli, papier calque) ?",
          options: ["Translucide","Transparent","Opaque","Brillant"],
          answer: 0,
          explication: "Translucide : laisse passer la lumière mais on ne voit pas net à travers. Transparent : on voit clairement à travers (vitre). Opaque : ne laisse pas passer la lumière."
        },
        {
          text: "Quand la Terre passe entre le Soleil et la Lune, et plonge la Lune dans l'ombre, on parle de...",
          hint: "Phénomène astronomique souvent rouge-orangé.",
          options: ["Éclipse de Lune","Éclipse de Soleil","Pleine lune","Aurore boréale"],
          answer: 0,
          explication: "Une éclipse de Lune se produit quand la Terre s'intercale entre le Soleil et la Lune : l'ombre de la Terre se projette sur la Lune."
        },
        {
          text: "Quand la Lune passe entre le Soleil et la Terre et cache le Soleil, c'est...",
          options: ["Une éclipse de Soleil","Une éclipse de Lune","La rotation de la Terre","Un arc-en-ciel"],
          answer: 0,
          explication: "Une éclipse de Soleil se produit quand la Lune s'intercale entre le Soleil et la Terre, projetant son ombre sur la Terre."
        },
        {
          text: "Pourquoi voit-on un arc-en-ciel ?",
          options: ["La lumière du Soleil est décomposée par les gouttes d'eau (chaque couleur a sa direction)","Les nuages sont peints","L'air est multicolore","C'est de la magie"],
          answer: 0,
          explication: "La lumière blanche du Soleil traverse les gouttes de pluie qui la décomposent en plusieurs couleurs (rouge, orange, jaune, vert, bleu, indigo, violet). C'est la dispersion."
        },
        {
          type: "qcm",
          text: "Parmi ces objets, lesquels sont des SOURCES PRIMAIRES de lumière ?",
          options: ["le Soleil","une bougie allumée","un miroir","la Lune"],
          answer: [0,1],
          explication: "Soleil et bougie produisent leur propre lumière (sources primaires). Le miroir et la Lune renvoient une lumière reçue (sources secondaires)."
        },
        {
          type: "vrai_faux",
          text: "Plus la source de lumière est proche d'un objet, plus son ombre est grande.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Quand la source est très proche, les rayons divergent davantage, ce qui agrandit l'ombre projetée. Plus la source est loin, plus l'ombre se rapproche de la taille réelle."
        }
      ]
    }
  ]
};
