/* Matière : Sciences 🔬
   8 thèmes × 10 questions = 80 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["sciences"] = {
  id: "sciences",
  name: "Sciences",
  emoji: "🔬",
  desc: "Corps humain, électricité, matière, vivant",
  topics: [
    {
      id: "corps",
      name: "Le corps humain",
      emoji: "🫀",
      desc: "Organes, squelette, fonctions vitales",
      questions: [
        {
          text: "Combien d'os compte le corps humain adulte ?",
          options: ["102","148","206","312"],
          answer: 2,
          explication: "Le corps humain adulte possède 206 os. Le nouveau-né en a plus (270) car certains os fusionnent avec la croissance."
        },
        {
          text: "Quel organe assure la circulation du sang dans tout le corps ?",
          options: ["Les poumons","Le foie","Le cœur","Le cerveau"],
          answer: 2,
          explication: "Le cœur est un muscle creux (myocarde) qui se contracte environ 70 fois par minute pour faire circuler le sang."
        },
        {
          text: "Où s'effectuent les échanges entre l'oxygène et le dioxyde de carbone dans le corps ?",
          options: ["Dans le cœur","Dans les poumons","Dans le foie","Dans les reins"],
          answer: 1,
          explication: "Dans les alvéoles pulmonaires, l'oxygène de l'air passe dans le sang et le CO₂ du sang est rejeté dans l'air expiré."
        },
        {
          text: "Quel organe produit la bile pour aider à digérer les graisses ?",
          options: ["L'estomac","Le foie","Le pancréas","Les reins"],
          answer: 1,
          explication: "Le foie produit la bile, stockée dans la vésicule biliaire, qui est déversée dans l'intestin pour émulsifier les graisses."
        },
        {
          text: "Quel ensemble d'os protège le cerveau ?",
          options: ["Les vertèbres","Les côtes","Le crâne","L'omoplate"],
          answer: 2,
          explication: "Le crâne est formé de 8 os soudés qui constituent une boîte rigide protégeant le cerveau des chocs."
        },
        {
          type: "vrai_faux",
          text: "Le cœur est un muscle.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Le cœur est un muscle creux particulier, le myocarde. Il se contracte automatiquement environ 70 fois par minute, toute notre vie."
        },
        {
          text: "Quel organe permet de réfléchir, de mémoriser et de commander le corps ?",
          image: "<svg viewBox=\"0 0 240 280\" xmlns=\"http://www.w3.org/2000/svg\" width=\"180\">\n    <!-- tête -->\n    <circle cx=\"120\" cy=\"42\" r=\"26\" fill=\"rgba(127,127,127,.05)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- cou -->\n    <path d=\"M 110 67 L 110 78 L 130 78 L 130 67\" fill=\"rgba(127,127,127,.05)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- buste -->\n    <path d=\"M 85 80 Q 80 78 78 85 L 75 130 Q 75 170 85 175 L 155 175 Q 165 170 165 130 L 162 85 Q 160 78 155 80 L 130 78 L 110 78 Z\"\n          fill=\"rgba(127,127,127,.05)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- bras gauche -->\n    <path d=\"M 78 88 Q 60 100 52 140 Q 50 165 58 180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <path d=\"M 88 88 Q 78 100 70 140 Q 68 165 76 180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- bras droit -->\n    <path d=\"M 162 88 Q 180 100 188 140 Q 190 165 182 180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <path d=\"M 152 88 Q 162 100 170 140 Q 172 165 164 180\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- jambes -->\n    <path d=\"M 95 175 L 92 250 L 105 250 L 110 175\" fill=\"rgba(127,127,127,.05)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <path d=\"M 130 175 L 135 250 L 148 250 L 145 175\" fill=\"rgba(127,127,127,.05)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- cerveau (organe mis en évidence) -->\n    <g>\n      <ellipse cx=\"120\" cy=\"36\" rx=\"14\" ry=\"11\" fill=\"var(--subj-color)\" opacity=\".9\"/>\n      <!-- circonvolutions stylisées -->\n      <path d=\"M 109 34 q 4 -2 8 0 q 4 2 8 0\" fill=\"none\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1\"/>\n      <path d=\"M 109 40 q 4 -2 8 0 q 4 2 8 0\" fill=\"none\" stroke=\"rgba(255,255,255,.6)\" stroke-width=\"1\"/>\n    </g>\n    <!-- flèche d'indication vers le cerveau -->\n    <line x1=\"180\" y1=\"36\" x2=\"140\" y2=\"36\" stroke=\"currentColor\" stroke-width=\"1.5\" marker-end=\"url(#arrBrain)\"/>\n    <defs>\n      <marker id=\"arrBrain\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"currentColor\"/>\n      </marker>\n    </defs>\n    <text x=\"185\" y=\"40\" font-size=\"14\" font-weight=\"700\" fill=\"currentColor\">?</text>\n  </svg>",
          options: ["Le cœur","Le cerveau","L'estomac","Le foie"],
          answer: 1,
          explication: "Le cerveau, protégé par le crâne, commande le corps, gère la pensée, la mémoire et les sens via le système nerveux."
        },
        {
          text: "Combien de dents définitives possède un adulte ?",
          hint: "Bien plus que les 20 dents de lait.",
          options: ["20","28","32","40"],
          answer: 2,
          explication: "Un adulte possède 32 dents définitives (incisives, canines, prémolaires, molaires), dont les 4 dents de sagesse."
        },
        {
          text: "Que doit-on faire pour garder un corps en bonne santé ?",
          options: ["Manger équilibré, bouger et bien dormir","Manger surtout des bonbons","Rester toujours assis","Ne jamais boire d'eau"],
          answer: 0,
          explication: "Une bonne santé repose sur une alimentation équilibrée, de l'activité physique régulière, un sommeil suffisant et une bonne hygiène."
        },
        {
          text: "Comment s'appellent les organes qui filtrent le sang et fabriquent l'urine ?",
          options: ["Les poumons","Les reins","Le cœur","L'intestin"],
          answer: 1,
          explication: "Les reins filtrent le sang pour éliminer les déchets sous forme d'urine, stockée ensuite dans la vessie."
        }
      ]
    },
    {
      id: "electricite",
      name: "Électricité",
      emoji: "⚡",
      desc: "Circuits électriques, conducteurs, sécurité",
      questions: [
        {
          text: "Pour qu'une ampoule s'allume, le circuit électrique doit être...",
          options: ["Ouvert","Court-circuité","Fermé","Débranché"],
          answer: 2,
          explication: "Un circuit fermé permet au courant de circuler. S'il y a une coupure (circuit ouvert), l'ampoule reste éteinte."
        },
        {
          text: "Quel matériau conduit le mieux l'électricité ?",
          options: ["Le bois","Le plastique","Le cuivre","Le verre"],
          answer: 2,
          explication: "Le cuivre est un excellent conducteur électrique. C'est pourquoi les fils électriques ont un cœur en cuivre."
        },
        {
          text: "À quoi sert un interrupteur dans un circuit ?",
          options: ["Protéger le circuit contre les surcharges","Ouvrir ou fermer le circuit","Produire de l'électricité","Stocker l'énergie électrique"],
          answer: 1,
          explication: "L'interrupteur permet d'ouvrir (éteindre) ou de fermer (allumer) un circuit électrique à volonté."
        },
        {
          text: "Une balle tombe du haut d'une table. Quelle forme d'énergie acquiert-elle en tombant ?",
          hint: "C'est l'énergie liée au mouvement.",
          options: ["Énergie thermique","Énergie chimique","Énergie cinétique","Énergie électrique"],
          answer: 2,
          explication: "L'énergie cinétique est l'énergie du mouvement. Plus la balle tombe vite, plus son énergie cinétique est grande."
        },
        {
          text: "Les piles transforment quelle forme d'énergie en énergie électrique ?",
          options: ["Énergie solaire","Énergie chimique","Énergie mécanique","Énergie thermique"],
          answer: 1,
          explication: "Dans une pile, une réaction chimique entre ses composants produit de l'énergie électrique : conversion chimique → électrique."
        },
        {
          text: "Quels composants faut-il au minimum pour faire briller une ampoule dans un circuit simple ?",
          image: "<svg viewBox=\"0 0 280 140\" xmlns=\"http://www.w3.org/2000/svg\" width=\"280\">\n      <!-- fils -->\n      <path d=\"M 60 40 L 145 40 M 205 40 L 240 40 L 240 100 L 60 100 L 60 40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <!-- pile (long trait + court trait) -->\n      <line x1=\"58\" y1=\"60\" x2=\"62\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"3.5\"/>\n      <line x1=\"54\" y1=\"65\" x2=\"66\" y2=\"65\" stroke=\"currentColor\" stroke-width=\"2\"/>\n      <text x=\"40\" y=\"74\" font-size=\"12\" fill=\"currentColor\">+</text>\n      <text x=\"68\" y=\"80\" font-size=\"12\" fill=\"currentColor\">−</text>\n      <!-- ampoule -->\n      <circle cx=\"240\" cy=\"70\" r=\"14\" fill=\"rgba(251,191,36,.35)\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n      <path d=\"M 232 70 L 248 70 M 234 64 L 246 76 M 234 76 L 246 64\" stroke=\"currentColor\" stroke-width=\"1.2\"/>\n      <!-- interrupteur -->\n      <circle cx=\"155\" cy=\"40\" r=\"3\" fill=\"currentColor\"/>\n      <circle cx=\"195\" cy=\"40\" r=\"3\" fill=\"currentColor\"/>\n      <line x1=\"155\" y1=\"40\" x2=\"195\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n    </svg>",
          options: ["Une pile, des fils et une ampoule","Seulement une ampoule","De l'eau et du sable","Un aimant et du papier"],
          answer: 0,
          explication: "Un circuit électrique simple a besoin d'un générateur (pile), de fils conducteurs et d'un récepteur (l'ampoule)."
        },
        {
          text: "Que se passe-t-il si on branche deux piles « en série » (l'une à la suite de l'autre) dans un circuit ?",
          hint: "On additionne leur « force ».",
          options: ["L'ampoule s'éteint","L'ampoule brille plus fort","Rien ne change","Les fils fondent toujours"],
          answer: 1,
          explication: "Deux piles en série additionnent leurs tensions : l'ampoule reçoit plus d'énergie et brille davantage (attention à ne pas la « griller »)."
        },
        {
          text: "Pourquoi recouvre-t-on les fils électriques de plastique ?",
          hint: "Le plastique est un isolant.",
          options: ["Pour les rendre plus jolis","Parce que le plastique est un isolant qui protège de l'électricité","Pour qu'ils conduisent mieux","Pour les rendre plus lourds"],
          answer: 1,
          explication: "Le plastique est un isolant : il ne laisse pas passer le courant et protège donc des chocs électriques."
        },
        {
          type: "vrai_faux",
          text: "L'eau et les mains mouillées augmentent le danger d'électrocution.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. L'eau conduit l'électricité : il ne faut jamais toucher d'appareils électriques avec les mains mouillées ou près d'une source d'eau."
        },
        {
          text: "Comment appelle-t-on un matériau qui laisse passer le courant électrique ?",
          options: ["Un isolant","Un conducteur","Un aimant","Un combustible"],
          answer: 1,
          explication: "Un conducteur (comme les métaux) laisse passer le courant. Un isolant (plastique, bois sec, verre) ne le laisse pas passer."
        }
      ]
    },
    {
      id: "matiere",
      name: "Matière & énergie",
      emoji: "🧪",
      desc: "États de l'eau, changements d'état, énergies renouvelables",
      questions: [
        {
          text: "Comment appelle-t-on le changement d'état de l'eau qui passe de l'état liquide à l'état gazeux ?",
          options: ["La fusion","La condensation","La vaporisation","La solidification"],
          answer: 2,
          explication: "La vaporisation est le passage de l'état liquide à l'état gazeux (l'eau bout à 100°C). L'inverse est la condensation (gaz → liquide)."
        },
        {
          text: "Lors de la fusion de la glace, que se passe-t-il avec la température ?",
          hint: "Pense au « palier de changement d'état ».",
          options: ["Elle monte progressivement","Elle descend","Elle reste stable à 0°C jusqu'à fusion complète","Elle varie au hasard"],
          answer: 2,
          explication: "Pendant la fusion, toute l'énergie reçue sert à changer d'état, pas à chauffer. La température reste à 0°C : c'est le palier de fusion."
        },
        {
          text: "Quelle source d'énergie est renouvelable ?",
          options: ["Le pétrole","Le charbon","Le vent (énergie éolienne)","Le gaz naturel"],
          answer: 2,
          explication: "Le vent est inépuisable : c'est une énergie renouvelable. Pétrole, charbon et gaz sont des énergies fossiles non renouvelables."
        },
        {
          text: "Quel procédé utilise-t-on pour séparer du sable (solide) mélangé à de l'eau (liquide) ?",
          hint: "On fait passer le mélange à travers un matériau poreux.",
          options: ["La décantation","La filtration","L'évaporation","La distillation"],
          answer: 1,
          explication: "La filtration consiste à faire passer un mélange à travers un filtre (papier filtre, grille…) qui retient les solides et laisse passer le liquide."
        },
        {
          text: "Quelle est la formule chimique de l'eau ?",
          options: ["CO₂","H₂O","O₂","NaCl"],
          answer: 1,
          explication: "L'eau est composée de 2 atomes d'Hydrogène (H) et 1 atome d'Oxygène (O) : H₂O. CO₂ = dioxyde de carbone, NaCl = sel."
        },
        {
          text: "Sous quels trois états principaux peut-on trouver l'eau ?",
          options: ["Solide, liquide, gazeux","Chaud, froid, tiède","Grand, moyen, petit","Dur, mou, cassant"],
          answer: 0,
          explication: "L'eau existe sous 3 états : solide (glace), liquide (eau) et gazeux (vapeur). On passe de l'un à l'autre par chauffage ou refroidissement."
        },
        {
          text: "À quelle température l'eau gèle-t-elle (passe de liquide à solide) ?",
          options: ["100 °C","0 °C","50 °C","−100 °C"],
          answer: 1,
          explication: "L'eau gèle (solidification) à 0 °C et bout (vaporisation) à 100 °C, à la pression normale."
        },
        {
          text: "Comment appelle-t-on le passage de l'état gazeux (vapeur) à l'état liquide ?",
          hint: "C'est ce qui forme la buée sur une vitre froide.",
          options: ["La fusion","La condensation","La solidification","La vaporisation"],
          answer: 1,
          explication: "La condensation est le passage de la vapeur (gaz) à l'eau (liquide) : c'est ainsi que se forme la buée ou la rosée."
        },
        {
          text: "Quel procédé permet de séparer des morceaux solides (gravier) d'un liquide ?",
          options: ["La filtration","La cuisson","La congélation","L'évaporation"],
          answer: 0,
          explication: "La filtration retient les solides dans un filtre et laisse passer le liquide. (L'évaporation, elle, sépare l'eau du sel dissous.)"
        },
        {
          text: "Quelle énergie n'est PAS renouvelable ?",
          options: ["L'énergie solaire","L'énergie du vent","Le pétrole","L'énergie de l'eau (hydraulique)"],
          answer: 2,
          explication: "Le pétrole est une énergie fossile non renouvelable (il met des millions d'années à se former). Soleil, vent et eau sont renouvelables."
        }
      ]
    },
    {
      id: "vivant",
      name: "Le vivant",
      emoji: "🌱",
      desc: "Photosynthèse, classification du vivant, chaînes alimentaires",
      questions: [
        {
          text: "Quel être vivant est capable de réaliser la photosynthèse ?",
          options: ["Les animaux","Les bactéries","Les plantes vertes","Les champignons"],
          answer: 2,
          explication: "Seules les plantes vertes (qui contiennent de la chlorophylle) peuvent fabriquer leur matière organique grâce à la lumière solaire."
        },
        {
          text: "Quel gaz les plantes absorbent-elles lors de la photosynthèse ?",
          options: ["L'oxygène (O₂)","L'azote (N₂)","Le dioxyde de carbone (CO₂)","La vapeur d'eau"],
          answer: 2,
          explication: "Les plantes absorbent le CO₂ et rejettent de l'O₂ lors de la photosynthèse. C'est l'inverse de ce que font les animaux en respirant."
        },
        {
          text: "Qu'est-ce qui distingue les mammifères des autres animaux ?",
          options: ["Ils pondent des œufs","Ils respirent par des branchies","Ils allaitent leurs petits","Ils ont des écailles"],
          answer: 2,
          explication: "Les mammifères nourrissent leurs petits avec du lait maternel. Ils ont aussi une température corporelle constante et des poils."
        },
        {
          text: "Comment appelle-t-on les animaux qui se nourrissent uniquement de végétaux ?",
          options: ["Carnivores","Omnivores","Herbivores","Insectivores"],
          answer: 2,
          explication: "Les herbivores mangent uniquement des végétaux (ex : vache, lapin, cheval). Carnivores = viande, omnivores = végétaux et viande."
        },
        {
          text: "Quelle est la différence entre la météo et la climatologie ?",
          options: ["La météo étudie les océans ; la climatologie étudie l'atmosphère","La météo = prévisions à court terme (jours) ; la climatologie = étude du climat sur de longues périodes","La météo et la climatologie sont deux noms pour la même science","La météo est une science exacte ; la climatologie est une simple opinion"],
          answer: 1,
          explication: "La météo prévoit le temps qu'il fera dans les prochains jours. La climatologie analyse les tendances climatiques sur des dizaines ou centaines d'années."
        },
        {
          type: "qcm",
          text: "Parmi ces animaux, lesquels sont des MAMMIFÈRES ?",
          hint: "Plusieurs réponses ! Un mammifère allaite ses petits et a des poils ou de la fourrure.",
          options: ["La vache","Le dauphin","Le requin","La chauve-souris"],
          answer: [0,1,3],
          explication: "Vache, dauphin et chauve-souris sont des mammifères (ils allaitent leurs petits). Le requin est un POISSON. Surprise : le dauphin vit dans l'eau mais respire l'air, et la chauve-souris vole mais c'est un mammifère."
        },
        {
          text: "De quoi les plantes vertes ont-elles besoin pour fabriquer leur nourriture par photosynthèse ?",
          options: ["De lumière, d'eau et de dioxyde de carbone","De viande et de sucre","D'obscurité totale","De plastique"],
          answer: 0,
          explication: "La photosynthèse a besoin de lumière, d'eau (par les racines) et de CO₂ (par les feuilles) ; elle produit du sucre et rejette de l'oxygène."
        },
        {
          text: "Comment appelle-t-on un animal qui mange à la fois des végétaux et d'autres animaux ?",
          options: ["Un herbivore","Un carnivore","Un omnivore","Un végétarien"],
          answer: 2,
          explication: "Un omnivore mange des végétaux ET de la viande (comme l'ours, le porc ou l'humain). Herbivore = végétaux, carnivore = viande."
        },
        {
          text: "Dans une chaîne alimentaire, par quoi commence-t-on toujours ?",
          hint: "Il capte l'énergie du Soleil.",
          options: ["Un prédateur","Un végétal (producteur)","Un champignon","Un rocher"],
          answer: 1,
          explication: "Une chaîne alimentaire débute par un végétal (le producteur), mangé par un herbivore, lui-même mangé par un carnivore, etc."
        },
        {
          text: "Comment appelle-t-on les transformations d'un animal comme la chenille qui devient papillon ?",
          options: ["La photosynthèse","La métamorphose","La digestion","La respiration"],
          answer: 1,
          explication: "La métamorphose est une transformation profonde du corps au cours du développement : chenille → chrysalide → papillon."
        }
      ]
    },
    {
      id: "terre_univers",
      name: "La Terre & l'Univers",
      emoji: "🌍",
      desc: "Système solaire, planètes, Lune, saisons",
      questions: [
        {
          text: "Combien y a-t-il de planètes dans le système solaire ?",
          options: ["6","7","8","9"],
          answer: 2,
          explication: "8 planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Pluton n'est plus considérée comme une planète depuis 2006 (planète naine)."
        },
        {
          text: "Quelle est la planète la plus proche du Soleil ?",
          options: ["Vénus","Mercure","Mars","La Terre"],
          answer: 1,
          explication: "Mercure est la planète la plus proche du Soleil. Ordre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune."
        },
        {
          text: "Pourquoi y a-t-il une alternance du jour et de la nuit sur Terre ?",
          options: ["Parce que la Terre tourne autour du Soleil","Parce que la Terre tourne sur elle-même","Parce que la Lune passe devant le Soleil","Parce qu'il fait plus chaud le jour"],
          answer: 1,
          explication: "La Terre fait un tour sur elle-même en 24 heures (rotation). Le côté face au Soleil = jour, l'autre côté = nuit."
        },
        {
          text: "Combien de temps met la Terre pour tourner autour du Soleil ?",
          options: ["1 jour","1 mois","1 an (environ 365 jours)","10 ans"],
          answer: 2,
          explication: "La Terre fait le tour du Soleil en 365 jours environ (1 an). Tous les 4 ans, une année bissextile compte 366 jours (avec un 29 février)."
        },
        {
          text: "Qu'est-ce qui cause les saisons sur Terre ?",
          hint: "L'axe de la Terre est légèrement incliné…",
          options: ["La distance au Soleil change beaucoup","L'inclinaison de l'axe de la Terre par rapport au Soleil","La rotation de la Lune","Le mouvement des nuages"],
          answer: 1,
          explication: "L'axe de la Terre est incliné de 23,5°. Selon la position dans l'orbite, un hémisphère est plus exposé au Soleil (été), l'autre moins (hiver)."
        },
        {
          text: "Qu'est-ce que la Lune ?",
          options: ["Une étoile","Une planète","Un satellite naturel de la Terre","Un astéroïde"],
          answer: 2,
          explication: "La Lune est un satellite naturel : elle tourne autour de la Terre. Elle n'émet pas de lumière, elle reflète celle du Soleil."
        },
        {
          text: "Combien de temps met la Lune pour faire le tour de la Terre ?",
          options: ["1 jour","1 semaine","Environ 28 jours (1 mois lunaire)","1 an"],
          answer: 2,
          explication: "La Lune tourne autour de la Terre en environ 28 jours. C'est ce cycle qui explique les phases de la Lune (nouvelle lune, pleine lune…)."
        },
        {
          text: "Le Soleil est :",
          options: ["Une planète","Une étoile","Un satellite","Une galaxie"],
          answer: 1,
          explication: "Le Soleil est une ÉTOILE : une boule de gaz très chaude qui produit sa propre lumière. C'est l'étoile la plus proche de la Terre."
        },
        {
          type: "texte",
          text: "Combien de planètes y a-t-il dans notre système solaire ? (Tape le nombre en chiffres.)",
          hint: "Depuis 2006, Pluton n'est plus considérée comme une planète.",
          answer: ["8","huit"],
          explication: "Il y a 8 planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Pluton est désormais classée comme « planète naine »."
        },
        {
          text: "Quelle est notre galaxie, qui contient le Soleil et des milliards d'étoiles ?",
          options: ["La Grande Ourse","La Voie lactée","La Lune","Andromède (notre galaxie)"],
          answer: 1,
          explication: "Le Soleil et le système solaire se trouvent dans la galaxie appelée la Voie lactée, qui contient des centaines de milliards d'étoiles."
        }
      ]
    },
    {
      id: "environnement",
      name: "Environnement",
      emoji: "🌿",
      desc: "Biodiversité, climat, gestes éco-citoyens",
      questions: [
        {
          text: "Qu'est-ce que la biodiversité ?",
          options: ["Une espèce d'arbre rare","La diversité de tous les êtres vivants sur Terre","Une marque de yaourt bio","Un parc protégé"],
          answer: 1,
          explication: "La biodiversité = diversité de toutes les espèces vivantes (animaux, plantes, micro-organismes) et de leurs habitats."
        },
        {
          text: "Quel gaz, émis par les activités humaines, contribue le plus au réchauffement climatique ?",
          options: ["L'oxygène (O₂)","Le dioxyde de carbone (CO₂)","L'azote (N₂)","L'hélium"],
          answer: 1,
          explication: "Le CO₂ (dioxyde de carbone), produit par la combustion d'énergies fossiles (pétrole, charbon, gaz), accroît l'effet de serre."
        },
        {
          text: "Que jette-t-on dans la poubelle de tri jaune ?",
          options: ["Les déchets alimentaires","Les emballages recyclables (cartons, plastiques, métaux)","Le verre","Les piles usagées"],
          answer: 1,
          explication: "La poubelle jaune recueille les emballages recyclables : briques, cartons, bouteilles plastiques, boîtes métal. Le verre va dans le bac vert."
        },
        {
          text: "Quel geste économise le plus d'eau au quotidien ?",
          options: ["Laisser couler l'eau en se brossant les dents","Prendre une douche rapide plutôt qu'un bain","Laver sa voiture chaque jour","Arroser le jardin à midi en plein soleil"],
          answer: 1,
          explication: "Une douche rapide (5 min) consomme ~50 L, un bain ~150 L : 3 fois moins d'eau. Fermer le robinet en se brossant les dents économise aussi beaucoup."
        },
        {
          text: "Que signifie « éco-citoyen » ?",
          options: ["Un robot écologique","Une personne qui agit pour protéger l'environnement","Un habitant des Pays-Bas","Un agriculteur bio uniquement"],
          answer: 1,
          explication: "Un éco-citoyen adopte des gestes respectueux de l'environnement : tri, économies d'eau/énergie, transports doux, consommation responsable…"
        },
        {
          text: "Que signifie « recycler » un déchet ?",
          options: ["Le jeter dans la nature","Le transformer pour fabriquer un nouvel objet","Le brûler dehors","Le cacher sous terre"],
          answer: 1,
          explication: "Recycler, c'est transformer un déchet (papier, verre, plastique) en matière première pour fabriquer un nouvel objet, ce qui économise des ressources."
        },
        {
          text: "Comment appelle-t-on la disparition définitive de toute une espèce animale ou végétale ?",
          options: ["La migration","L'extinction","L'hibernation","La reproduction"],
          answer: 1,
          explication: "L'extinction est la disparition totale d'une espèce (comme les dinosaures). La pollution et la destruction des milieux l'accélèrent aujourd'hui."
        },
        {
          text: "Quel geste permet d'économiser l'énergie à la maison ?",
          options: ["Laisser toutes les lumières allumées","Éteindre les appareils qu'on n'utilise pas","Chauffer en laissant les fenêtres ouvertes","Faire tourner le lave-linge à moitié vide"],
          answer: 1,
          explication: "Éteindre lumières et appareils inutilisés (et éviter les veilles) réduit la consommation d'énergie, donc la pollution et les dépenses."
        },
        {
          text: "Pourquoi les abeilles sont-elles très utiles à la nature ?",
          hint: "Elles transportent quelque chose de fleur en fleur.",
          options: ["Elles polluent l'air","Elles pollinisent les fleurs et permettent aux plantes de produire des fruits","Elles mangent les déchets","Elles font fondre la glace"],
          answer: 1,
          explication: "En butinant, les abeilles transportent le pollen de fleur en fleur (pollinisation) : c'est indispensable à la production de nombreux fruits et légumes."
        },
        {
          type: "vrai_faux",
          text: "Trier ses déchets permet d'en recycler une partie au lieu de tout jeter.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Le tri sépare les déchets recyclables (papier, verre, plastique, métal) des autres, pour leur donner une seconde vie."
        }
      ]
    },
    {
      id: "technologie",
      name: "Objets techniques",
      emoji: "⚙️",
      desc: "Levier, engrenage, poulie, conception",
      questions: [
        {
          text: "À quoi sert un levier ?",
          options: ["À mesurer la température","À soulever ou déplacer plus facilement une charge","À couper du bois","À éclairer une pièce"],
          answer: 1,
          explication: "Un levier permet d'amplifier une force pour soulever des charges lourdes avec peu d'effort. Ex : pied-de-biche, brouette, balançoire."
        },
        {
          text: "Comment fonctionne un engrenage ?",
          options: ["Avec de l'eau qui coule","Avec des roues dentées qui s'entraînent les unes les autres","Avec de l'électricité","Avec un aimant"],
          answer: 1,
          explication: "Un engrenage = roues dentées qui s'emboîtent. Quand l'une tourne, elle entraîne les autres. Utilisé dans les vélos, montres, voitures…"
        },
        {
          text: "Sur un vélo, à quoi sert le système de vitesses ?",
          options: ["À pédaler plus vite","À adapter l'effort selon le terrain (montée, plat, descente)","À sonner pour prévenir","À éclairer la route"],
          answer: 1,
          explication: "Les vitesses (engrenages) du vélo permettent d'ajuster l'effort : petites vitesses pour monter, grandes vitesses pour aller vite sur le plat."
        },
        {
          text: "À quoi sert une poulie ?",
          options: ["À fabriquer des vêtements","À soulever une charge plus facilement en changeant la direction de la force","À mesurer le temps","À cuire des aliments"],
          answer: 1,
          explication: "Une poulie (roue avec une corde) permet de soulever en tirant vers le bas (plus facile). Utilisée en escalade, voile, ascenseurs."
        },
        {
          text: "Quel document décrit le besoin et les contraintes avant de construire un objet technique ?",
          options: ["Un livre","Un cahier des charges","Un dessin libre","Un programme TV"],
          answer: 1,
          explication: "Le cahier des charges décrit le besoin, les contraintes (taille, prix, matériaux…) et les fonctions attendues. C'est l'étape 1 du projet."
        },
        {
          text: "À quoi sert un cahier des charges avant de fabriquer un objet technique ?",
          options: ["À décorer l'objet","À décrire le besoin, les fonctions et les contraintes à respecter","À vendre l'objet","À jeter l'objet"],
          answer: 1,
          explication: "Le cahier des charges décrit précisément le besoin auquel l'objet doit répondre et les contraintes (coût, taille, sécurité…) à respecter."
        },
        {
          text: "Quel matériau est naturel (et non fabriqué par l'être humain) ?",
          options: ["Le plastique","Le bois","Le verre","Le béton"],
          answer: 1,
          explication: "Le bois est un matériau naturel (issu des arbres). Le plastique, le verre et le béton sont fabriqués par l'être humain."
        },
        {
          text: "Comment appelle-t-on l'ensemble des étapes pour donner des instructions précises à une machine ou un programme ?",
          hint: "Comme une recette de cuisine pour l'ordinateur.",
          options: ["Un algorithme","Un mélange","Un engrenage","Un circuit fermé"],
          answer: 0,
          explication: "Un algorithme est une suite d'instructions précises et ordonnées pour réaliser une tâche, comme une recette suivie par une machine."
        },
        {
          text: "Dans un objet technique, à quoi sert une « source d'énergie » comme une pile ou une batterie ?",
          options: ["À décorer l'objet","À faire fonctionner l'objet (le mettre en mouvement, l'éclairer…)","À le rendre plus lourd","À le ralentir"],
          answer: 1,
          explication: "La source d'énergie (pile, batterie, secteur) fournit l'énergie nécessaire au fonctionnement de l'objet (moteur, lumière, écran…)."
        },
        {
          text: "Dans un programme du type Scratch, que fait une boucle « répéter 4 fois » ?",
          hint: "Pense à tracer un carré.",
          options: ["Elle exécute les instructions une seule fois","Elle répète les mêmes instructions 4 fois de suite","Elle efface le programme","Elle arrête l'ordinateur"],
          answer: 1,
          explication: "Une boucle « répéter 4 fois » exécute 4 fois le bloc d'instructions qu'elle contient (idéal pour tracer un carré : avancer + tourner, 4 fois)."
        }
      ]
    },
    {
      id: "mouvement",
      name: "Mouvement & vitesse",
      emoji: "🏃",
      desc: "Vitesse, distance, durée, forces",
      questions: [
        {
          text: "Quelle unité utilise-t-on pour mesurer la vitesse d'une voiture ?",
          options: ["km/h (kilomètres par heure)","kg (kilogrammes)","°C (degrés)","L (litres)"],
          answer: 0,
          explication: "La vitesse est une distance par unité de temps. En voiture : km/h. À pied : m/s ou km/h. En avion : km/h aussi."
        },
        {
          text: "Si je parcours 60 km en 1 heure, ma vitesse moyenne est de...",
          options: ["6 km/h","60 km/h","120 km/h","1 km/h"],
          answer: 1,
          explication: "Vitesse = distance ÷ durée = 60 km ÷ 1 h = 60 km/h."
        },
        {
          text: "Plus on va vite, plus on parcourt...",
          options: ["Moins de distance dans le même temps","Plus de distance dans le même temps","La même distance","Aucune distance"],
          answer: 1,
          explication: "À plus grande vitesse, on parcourt plus de distance dans le même temps. Ex : 60 km/h pendant 1 h = 60 km ; 100 km/h pendant 1 h = 100 km."
        },
        {
          text: "Qu'est-ce qui peut faire varier la vitesse d'un objet (le ralentir ou l'accélérer) ?",
          options: ["Le nom de l'objet","Une force qui s'applique sur lui","Sa couleur","Sa température"],
          answer: 1,
          explication: "Une FORCE (pousser, tirer, freiner, gravité) peut modifier le mouvement : accélérer, ralentir ou changer de direction."
        },
        {
          text: "Quel objet va le plus vite ?",
          options: ["Une tortue à 0,5 km/h","Un cycliste à 25 km/h","Une voiture à 90 km/h","Un avion à 800 km/h"],
          answer: 3,
          explication: "Plus le nombre devant km/h est grand, plus c'est rapide : 800 (avion) > 90 (voiture) > 25 (vélo) > 0,5 (tortue)."
        },
        {
          text: "Calcule : une voiture roule à 50 km/h pendant 2 heures. Quelle distance parcourt-elle ?",
          hint: "Distance = vitesse × durée.",
          options: ["25 km","52 km","100 km","150 km"],
          answer: 2,
          explication: "Distance = vitesse × durée = 50 km/h × 2 h = 100 km."
        },
        {
          text: "Comment appelle-t-on une force qui freine le mouvement, par exemple entre les pneus et la route ?",
          options: ["L'attraction","Les frottements","L'aimantation","La flottaison"],
          answer: 1,
          explication: "Les frottements s'opposent au mouvement (pneus/route, freins/roue). Sans frottements, on ne pourrait ni avancer ni s'arrêter."
        },
        {
          text: "Quelle force attire tous les objets vers le sol (les fait tomber) ?",
          options: ["Le vent","La gravité (pesanteur)","L'électricité","La lumière"],
          answer: 1,
          explication: "La gravité (ou pesanteur) attire les objets vers le centre de la Terre : c'est pour cela que tout ce qu'on lâche tombe."
        },
        {
          text: "Un objet est « au repos » quand...",
          options: ["il bouge très vite","il ne bouge pas par rapport au sol","il tourne sur lui-même","il change de couleur"],
          answer: 1,
          explication: "Un objet est au repos quand sa position ne change pas par rapport à un point de référence (le sol). Sinon, il est en mouvement."
        },
        {
          type: "vrai_faux",
          text: "Pour comparer deux vitesses, il faut utiliser la même unité (par exemple km/h).",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. On ne peut comparer des vitesses qu'avec la même unité : comparer des km/h avec des m/s sans conversion fausserait la comparaison."
        }
      ]
    }
  ]
};
