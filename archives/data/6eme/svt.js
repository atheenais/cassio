/* Matière : Sciences de la Vie et de la Terre 🌱 (6ème)
   6 thèmes × 10 questions = 60 questions
   Le programme officiel met l'accent sur le vivant, l'alimentation,
   la respiration et la diversité des êtres vivants. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["svt"] = {
  id: "svt",
  name: "SVT",
  emoji: "🌱",
  desc: "Le vivant, le corps humain, l'environnement",
  topics: [
    {
      id: "vivant",
      name: "Le monde du vivant",
      emoji: "🐾",
      desc: "Caractéristiques du vivant, classification",
      questions: [
        {
          text: "Lequel de ces éléments N'EST PAS vivant ?",
          options: ["une fleur", "un caillou", "un poisson", "une bactérie"],
          answer: 1,
          hint: "Le vivant naît, se nourrit, se reproduit et meurt.",
          explication: "Un caillou n'est pas vivant : il ne naît pas, ne se nourrit pas, ne se reproduit pas."
        },
        {
          text: "Quels sont les 5 grands règnes du vivant ?",
          options: ["plantes uniquement", "animaux, plantes, champignons, bactéries, êtres unicellulaires (protistes)", "humains, animaux et plantes", "végétaux et minéraux"],
          answer: 1,
          hint: "On classe le vivant en 5 grandes catégories.",
          explication: "Les 5 règnes : animaux, plantes (végétaux), champignons, bactéries, protistes (êtres unicellulaires)."
        },
        {
          text: "Comment appelle-t-on un être vivant fait d'une seule cellule ?",
          options: ["multicellulaire", "unicellulaire", "macroscopique", "minéral"],
          answer: 1,
          hint: "« Uni » = un seul.",
          explication: "Un être unicellulaire est composé d'une seule cellule (bactéries, certaines algues…)."
        },
        {
          text: "Quel instrument permet d'observer des cellules ?",
          options: ["la loupe", "le télescope", "le microscope", "le rétroviseur"],
          answer: 2,
          hint: "Permet d'agrandir jusqu'à plusieurs milliers de fois.",
          explication: "Le microscope est utilisé pour observer les cellules et les micro-organismes invisibles à l'œil nu."
        },
        {
          text: "Lequel de ces êtres vivants est un vertébré (a une colonne vertébrale) ?",
          options: ["une fourmi", "un escargot", "un poisson", "un ver de terre"],
          answer: 2,
          hint: "Les vertébrés ont un squelette interne avec une colonne vertébrale.",
          explication: "Le poisson est un vertébré. La fourmi, l'escargot et le ver sont des invertébrés."
        },
        {
          type: "vrai_faux",
          text: "Tous les êtres vivants sont composés de cellules.",
          answer: 0,
          hint: "C'est l'une des grandes lois du vivant.",
          explication: "VRAI. Tous les êtres vivants (plantes, animaux, bactéries) sont composés d'une ou plusieurs cellules."
        },
        {
          text: "À quel groupe appartient la chauve-souris ?",
          options: ["aux oiseaux", "aux mammifères", "aux reptiles", "aux insectes"],
          answer: 1,
          hint: "Elle vit la nuit et allaite ses petits.",
          explication: "La chauve-souris est un mammifère (elle allaite ses petits), même si elle vole comme les oiseaux."
        },
        {
          type: "qcm",
          text: "Quelles sont les caractéristiques d'un être vivant ?",
          options: ["il naît et il meurt", "il se nourrit", "il est toujours fait de plusieurs cellules", "il se reproduit"],
          answer: [0, 1, 3],
          hint: "Certaines bactéries ne sont faites que d'une seule cellule.",
          explication: "Naître, se nourrir, se reproduire et mourir sont des caractéristiques du vivant. Mais certains êtres vivants n'ont qu'une cellule."
        },
        {
          text: "Comment appelle-t-on un animal qui mange à la fois des plantes et de la viande ?",
          options: ["carnivore", "herbivore", "omnivore", "insectivore"],
          answer: 2,
          hint: "Pense aux humains : ils mangent de tout.",
          explication: "Un omnivore mange de tout (viande et végétaux). Carnivore = viande, herbivore = plantes uniquement."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on un animal qui mange uniquement de la viande ? (Un seul mot)",
          answer: ["carnivore", "Carnivore"],
          hint: "Comme le lion, le requin ou l'aigle.",
          explication: "Un carnivore est un animal qui se nourrit uniquement de viande."
        }
      ]
    },
    {
      id: "alimentation",
      name: "Alimentation",
      emoji: "🥗",
      desc: "Aliments, nutriments, équilibre alimentaire",
      questions: [
        {
          text: "Quels nutriments donnent de l'énergie à notre corps ?",
          options: ["uniquement les vitamines", "les glucides, lipides et protéines", "uniquement l'eau", "les minéraux uniquement"],
          answer: 1,
          hint: "Trois grandes familles de nutriments énergétiques.",
          explication: "Les glucides (sucres), lipides (graisses) et protéines (viande, œufs…) fournissent de l'énergie."
        },
        {
          text: "Dans quel aliment trouve-t-on principalement des protéines ?",
          options: ["le pain", "la viande, les œufs, le poisson", "le sucre", "l'huile"],
          answer: 1,
          hint: "Aliments riches en blocs de construction du corps.",
          explication: "Viande, œufs, poisson sont riches en protéines. Le pain (glucides), le sucre (glucides), l'huile (lipides) en contiennent peu."
        },
        {
          text: "Quel fruit ou légume est riche en vitamine C ?",
          options: ["l'orange", "le pain", "le beurre", "le sel"],
          answer: 0,
          hint: "Agrumes en général.",
          explication: "L'orange (et tous les agrumes) est riche en vitamine C, importante pour notre système immunitaire."
        },
        {
          text: "Que veut dire « avoir une alimentation équilibrée » ?",
          options: ["manger toujours la même chose", "manger varié et en quantités adaptées", "manger uniquement des légumes", "manger très peu"],
          answer: 1,
          hint: "Manger de tout, dans de bonnes proportions.",
          explication: "Une alimentation équilibrée signifie manger varié (tous les groupes alimentaires) en bonnes quantités."
        },
        {
          text: "Que se passe-t-il quand on mange ?",
          options: ["les aliments restent dans l'estomac toute la journée", "les aliments sont digérés et transformés en nutriments", "les aliments vont directement dans le sang", "les aliments deviennent de l'eau"],
          answer: 1,
          hint: "La digestion décompose la nourriture.",
          explication: "Les aliments sont digérés dans le tube digestif : ils sont décomposés en nutriments absorbés par le corps."
        },
        {
          type: "vrai_faux",
          text: "L'eau est indispensable à la vie mais ne contient aucun nutriment énergétique.",
          answer: 0,
          hint: "L'eau n'apporte pas de calories.",
          explication: "VRAI. L'eau ne contient ni glucides, ni lipides, ni protéines : elle ne fournit pas d'énergie mais est vitale."
        },
        {
          text: "Quel organe principal se charge de la digestion ?",
          options: ["le cerveau", "les poumons", "l'estomac (et plus largement le tube digestif)", "le cœur"],
          answer: 2,
          hint: "Là où la nourriture est broyée et digérée par les sucs gastriques.",
          explication: "L'estomac fait partie du tube digestif (bouche, œsophage, estomac, intestins) qui assure la digestion."
        },
        {
          type: "qcm",
          text: "Lesquels de ces aliments sont des sources de glucides (sucres) ?",
          options: ["le pain", "le riz", "le beurre", "le miel"],
          answer: [0, 1, 3],
          hint: "Le beurre est principalement un lipide (graisse).",
          explication: "Pain, riz et miel sont riches en glucides. Le beurre est riche en lipides (graisse animale)."
        },
        {
          text: "Pourquoi mange-t-on des fruits et légumes ?",
          options: ["uniquement pour leur goût", "ils apportent vitamines, minéraux et fibres", "ils donnent beaucoup d'énergie", "ils contiennent surtout des graisses"],
          answer: 1,
          hint: "Ils protègent contre certaines maladies.",
          explication: "Les fruits et légumes apportent vitamines, minéraux et fibres, essentiels au bon fonctionnement du corps."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on la transformation des aliments dans notre corps ? (Un mot)",
          answer: ["digestion", "Digestion", "la digestion"],
          hint: "Processus dans le tube digestif.",
          explication: "La digestion est la transformation des aliments en nutriments assimilables par le corps."
        }
      ]
    },
    {
      id: "respiration",
      name: "Respiration",
      emoji: "🫁",
      desc: "Poumons, échanges gazeux, oxygène",
      questions: [
        {
          text: "Quel gaz respirons-nous (inspirons) pour vivre ?",
          options: ["l'azote", "le dioxyde de carbone", "l'oxygène", "l'hydrogène"],
          answer: 2,
          hint: "Symbole chimique O₂.",
          explication: "Nous inspirons de l'oxygène (O₂), indispensable à la production d'énergie dans nos cellules."
        },
        {
          text: "Quel gaz rejetons-nous quand nous expirons ?",
          options: ["l'oxygène", "le dioxyde de carbone (CO₂)", "le méthane", "l'hydrogène"],
          answer: 1,
          hint: "C'est aussi le gaz qui contribue à l'effet de serre.",
          explication: "Nous expirons du dioxyde de carbone (CO₂), déchet produit par nos cellules."
        },
        {
          text: "Dans quel organe ont lieu les échanges gazeux entre l'air et le sang ?",
          options: ["le cœur", "les poumons", "le foie", "les reins"],
          answer: 1,
          hint: "Organe à 2 lobes (gauche et droit).",
          explication: "Les poumons assurent les échanges gazeux : ils captent l'O₂ et rejettent le CO₂."
        },
        {
          text: "Comment appelle-t-on les petits sacs des poumons où se font les échanges gazeux ?",
          options: ["les bronches", "les alvéoles", "les artères", "les neurones"],
          answer: 1,
          hint: "Très nombreux et microscopiques.",
          explication: "Les alvéoles pulmonaires sont les minuscules sacs où l'O₂ passe dans le sang et le CO₂ en sort."
        },
        {
          text: "Que transporte le sang dans tout le corps ?",
          options: ["uniquement de l'eau", "l'oxygène et les nutriments", "uniquement des déchets", "rien de particulier"],
          answer: 1,
          hint: "Le sang circule pour nourrir les cellules.",
          explication: "Le sang transporte l'oxygène et les nutriments vers les cellules, et ramène les déchets (CO₂)."
        },
        {
          type: "vrai_faux",
          text: "Les plantes respirent comme les animaux : elles utilisent de l'oxygène.",
          answer: 0,
          hint: "Comme tous les êtres vivants, elles ont besoin d'O₂.",
          explication: "VRAI. Les plantes respirent : elles consomment de l'O₂ et rejettent du CO₂ (en plus de la photosynthèse)."
        },
        {
          text: "Quel organe pompe le sang dans tout le corps ?",
          options: ["le cerveau", "le foie", "le cœur", "l'estomac"],
          answer: 2,
          hint: "Muscle qui bat environ 70 fois par minute au repos.",
          explication: "Le cœur est un muscle qui pompe le sang dans tout le corps via les artères et les veines."
        },
        {
          type: "qcm",
          text: "Que se passe-t-il quand on fait du sport ?",
          options: ["on respire plus vite", "le cœur bat plus vite", "on consomme moins d'oxygène", "on transpire pour se refroidir"],
          answer: [0, 1, 3],
          hint: "L'effort demande PLUS d'oxygène, pas moins.",
          explication: "À l'effort : respiration et fréquence cardiaque augmentent pour apporter plus d'O₂ aux muscles. La sueur refroidit le corps."
        },
        {
          text: "Pourquoi essoufflons-nous quand on court ?",
          options: ["nos muscles ont besoin de plus d'oxygène", "on s'ennuie", "il fait trop chaud", "on respire moins"],
          answer: 0,
          hint: "Pendant l'effort, les muscles travaillent davantage.",
          explication: "Pendant l'effort, les muscles consomment plus d'oxygène. La respiration s'accélère pour répondre à ce besoin."
        },
        {
          type: "texte",
          text: "Quel gaz inspirons-nous pour vivre ? (Un mot)",
          answer: ["oxygène", "Oxygène", "dioxygène"],
          hint: "Symbole O₂, environ 21 % de l'air.",
          explication: "L'oxygène (ou dioxygène, O₂) est indispensable à la vie. L'air en contient environ 21 %."
        }
      ]
    },
    {
      id: "squelette",
      name: "Squelette et muscles",
      emoji: "🦴",
      desc: "Os, articulations, mouvement",
      questions: [
        {
          text: "À quoi sert le squelette ?",
          options: ["à digérer", "à soutenir le corps et protéger les organes", "à respirer", "à voir"],
          answer: 1,
          hint: "Sans squelette, on serait mou !",
          explication: "Le squelette soutient le corps, lui donne sa forme, et protège les organes (cœur, cerveau, poumons)."
        },
        {
          text: "Combien d'os un adulte humain a-t-il environ ?",
          options: ["106", "206", "306", "506"],
          answer: 1,
          hint: "Un peu plus de 200.",
          explication: "Un adulte a 206 os. Un bébé en a plus (~300) mais certains se soudent en grandissant."
        },
        {
          text: "Quel os protège le cerveau ?",
          options: ["la colonne vertébrale", "le crâne", "le fémur", "les côtes"],
          answer: 1,
          hint: "Os de la tête, en forme de boîte.",
          explication: "Le crâne est un assemblage d'os qui forme une boîte protectrice autour du cerveau."
        },
        {
          text: "Quel est le plus long os du corps humain ?",
          options: ["le tibia", "le fémur (os de la cuisse)", "l'humérus", "le radius"],
          answer: 1,
          hint: "Dans la jambe, entre la hanche et le genou.",
          explication: "Le fémur, situé dans la cuisse, est le plus long et le plus solide des os humains."
        },
        {
          text: "Que permettent les articulations ?",
          options: ["de produire du sang", "de relier les os entre eux et permettre les mouvements", "de respirer", "de digérer"],
          answer: 1,
          hint: "Genou, coude, épaule, poignet…",
          explication: "Les articulations relient les os et leur permettent de bouger les uns par rapport aux autres."
        },
        {
          type: "vrai_faux",
          text: "Les muscles sont attachés aux os par des tendons.",
          answer: 0,
          hint: "Les tendons sont des « cordons » solides.",
          explication: "VRAI. Les tendons sont des tissus très solides qui relient les muscles aux os."
        },
        {
          text: "Que se passe-t-il quand un muscle se contracte ?",
          options: ["il s'allonge", "il raccourcit et tire sur l'os", "il devient plus mou", "rien du tout"],
          answer: 1,
          hint: "C'est ce qui produit le mouvement.",
          explication: "Quand un muscle se contracte, il raccourcit et tire sur les os auxquels il est attaché, créant le mouvement."
        },
        {
          type: "qcm",
          text: "Lesquels de ces éléments font partie du système locomoteur ?",
          options: ["les os", "les muscles", "les articulations", "le cerveau"],
          answer: [0, 1, 2],
          hint: "Le cerveau commande, mais ne fait pas partie du squelette ni des muscles.",
          explication: "Os, muscles et articulations forment le système locomoteur. Le cerveau commande le mouvement mais en est distinct."
        },
        {
          text: "Quel mot désigne l'usure d'un os qui peut nécessiter une intervention médicale ?",
          options: ["fracture", "luxation", "entorse", "arthrose"],
          answer: 3,
          hint: "Touche surtout les personnes âgées.",
          explication: "L'arthrose est l'usure progressive du cartilage des articulations. Une fracture est un os cassé."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on la cassure d'un os ? (Un mot)",
          answer: ["fracture", "Fracture", "une fracture"],
          hint: "On en plâtre généralement le membre.",
          explication: "Une fracture est la cassure d'un os, souvent suite à un choc ou une chute."
        }
      ]
    },
    {
      id: "reproduction",
      name: "Reproduction du vivant",
      emoji: "🌸",
      desc: "Sexuée, asexuée, cycles de vie",
      questions: [
        {
          text: "La reproduction sexuée nécessite…",
          options: ["un seul individu", "deux individus (mâle et femelle)", "trois individus", "aucun individu"],
          answer: 1,
          hint: "Mâle + femelle.",
          explication: "La reproduction sexuée combine les cellules reproductrices de deux individus (mâle et femelle)."
        },
        {
          text: "Comment appelle-t-on les cellules reproductrices mâles chez les animaux ?",
          options: ["les ovules", "les spermatozoïdes", "les neurones", "les globules"],
          answer: 1,
          hint: "Très petites cellules mobiles avec un flagelle.",
          explication: "Les spermatozoïdes sont les cellules reproductrices mâles. Elles fécondent l'ovule (cellule femelle)."
        },
        {
          text: "Comment appelle-t-on l'union d'un spermatozoïde et d'un ovule ?",
          options: ["la digestion", "la fécondation", "la respiration", "la croissance"],
          answer: 1,
          hint: "Première étape du développement d'un nouvel être vivant.",
          explication: "La fécondation est l'union d'une cellule mâle et d'une cellule femelle, donnant une cellule-œuf."
        },
        {
          text: "Comment les plantes à fleurs se reproduisent-elles ?",
          options: ["par la photosynthèse", "par leurs racines uniquement", "par les fleurs (pollen et ovules)", "par les feuilles"],
          answer: 2,
          hint: "Les abeilles transportent ce qui aide à la reproduction.",
          explication: "Les fleurs contiennent les organes reproducteurs des plantes. Le pollen féconde les ovules, donnant des graines."
        },
        {
          text: "Quel animal aide à transporter le pollen entre les fleurs ?",
          options: ["la fourmi", "l'abeille", "la mouche uniquement", "le moustique"],
          answer: 1,
          hint: "Insecte qui produit aussi du miel.",
          explication: "L'abeille (entre autres pollinisateurs) transporte le pollen de fleur en fleur, permettant la fécondation."
        },
        {
          type: "vrai_faux",
          text: "Certains êtres vivants peuvent se reproduire sans partenaire (reproduction asexuée).",
          answer: 0,
          hint: "Comme les bactéries qui se divisent en deux.",
          explication: "VRAI. Les bactéries, certaines plantes (boutures) ou même l'hydre se reproduisent sans partenaire."
        },
        {
          text: "Chez les mammifères, où se développe le bébé avant la naissance ?",
          options: ["dans l'estomac de la mère", "dans l'utérus de la mère", "dans le cerveau", "dans le poumon"],
          answer: 1,
          hint: "Organe spécifique de la femelle.",
          explication: "Chez les mammifères, le bébé se développe dans l'utérus de la mère pendant la gestation."
        },
        {
          type: "qcm",
          text: "Lesquels de ces animaux sont vivipares (donnent naissance à des petits déjà formés) ?",
          options: ["le chien", "la poule", "la vache", "le serpent"],
          answer: [0, 2],
          hint: "La poule pond des œufs, certains serpents aussi.",
          explication: "Chien et vache sont vivipares (petits déjà formés). Poule (ovipare : œufs) et la plupart des serpents (ovipares) pondent."
        },
        {
          text: "Comment appelle-t-on un animal qui pond des œufs ?",
          options: ["vivipare", "ovipare", "carnivore", "mammifère"],
          answer: 1,
          hint: "« Ovi » vient du latin « œuf ».",
          explication: "Un ovipare pond des œufs (poule, poisson, reptile, oiseau). Vivipare = donne des petits déjà formés."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on la cellule formée après la fécondation ? (Un mot composé : cellule-œ_)",
          answer: ["œuf", "oeuf", "cellule-œuf", "cellule-oeuf"],
          hint: "C'est le tout début du nouvel individu.",
          explication: "La cellule-œuf (zygote) est la première cellule formée après la fécondation, à partir de laquelle se développe le nouvel individu."
        }
      ]
    },
    {
      id: "environnement",
      name: "L'environnement proche",
      emoji: "🌍",
      desc: "Écosystèmes, biodiversité, protection",
      questions: [
        {
          text: "Qu'est-ce qu'un écosystème ?",
          options: ["un type de voiture", "un milieu de vie et les êtres vivants qui y vivent", "un appareil scientifique", "une grande ville"],
          answer: 1,
          hint: "Forêt, mare, prairie sont des exemples.",
          explication: "Un écosystème est l'ensemble formé par un milieu (eau, sol, climat) et tous les êtres vivants qui l'habitent."
        },
        {
          text: "Que veut dire « biodiversité » ?",
          options: ["la diversité des roches", "la diversité de tous les êtres vivants", "la diversité des langues", "la diversité des villes"],
          answer: 1,
          hint: "« Bio » = vie + diversité.",
          explication: "La biodiversité désigne la diversité de tous les êtres vivants (animaux, plantes, champignons, micro-organismes)."
        },
        {
          text: "Lequel de ces gestes protège l'environnement ?",
          options: ["jeter ses déchets par terre", "trier ses déchets pour le recyclage", "gaspiller l'eau", "détruire les forêts"],
          answer: 1,
          hint: "Trier permet de recycler.",
          explication: "Trier les déchets permet de les recycler et de réduire la pollution. Les autres gestes nuisent à l'environnement."
        },
        {
          text: "Qu'est-ce qu'une chaîne alimentaire ?",
          options: ["un type de magasin", "une suite d'êtres vivants qui se nourrissent les uns des autres", "un menu de restaurant", "un type de plante"],
          answer: 1,
          hint: "Exemple : herbe → lapin → renard.",
          explication: "Une chaîne alimentaire est une suite d'êtres vivants qui se mangent : chaque maillon est mangé par le suivant."
        },
        {
          text: "Quel être vivant est à la base de la plupart des chaînes alimentaires terrestres ?",
          options: ["les humains", "les plantes (producteurs)", "les loups", "les bactéries"],
          answer: 1,
          hint: "Capables de fabriquer leur nourriture grâce au soleil.",
          explication: "Les plantes (producteurs primaires) sont à la base des chaînes alimentaires car elles produisent leur matière organique grâce à la photosynthèse."
        },
        {
          type: "vrai_faux",
          text: "La pollution est une menace pour la biodiversité.",
          answer: 0,
          hint: "Pollution de l'eau, de l'air, des sols…",
          explication: "VRAI. La pollution (plastiques, pesticides, gaz à effet de serre) détruit les habitats et menace de nombreuses espèces."
        },
        {
          text: "Que fait une plante pour fabriquer sa nourriture ?",
          options: ["elle chasse les insectes", "elle utilise la lumière du Soleil (photosynthèse)", "elle mange la terre", "elle dort"],
          answer: 1,
          hint: "Mécanisme unique aux végétaux verts.",
          explication: "Les plantes vertes utilisent la lumière du Soleil pour transformer l'eau et le CO₂ en matière organique : c'est la photosynthèse."
        },
        {
          type: "qcm",
          text: "Quels gestes du quotidien aident à protéger la planète ?",
          options: ["éteindre la lumière en sortant", "fermer le robinet quand on se brosse les dents", "laisser les emballages partout", "prendre les transports en commun"],
          answer: [0, 1, 3],
          hint: "Économiser l'énergie, l'eau et les transports.",
          explication: "Éteindre la lumière, économiser l'eau, prendre les transports en commun aident la planète. Jeter les déchets n'aide pas."
        },
        {
          text: "Quel grand problème environnemental est lié aux émissions de CO₂ ?",
          options: ["la marée noire", "le réchauffement climatique", "les tremblements de terre", "les éruptions volcaniques"],
          answer: 1,
          hint: "La Terre se réchauffe à cause des gaz à effet de serre.",
          explication: "Le CO₂ est un gaz à effet de serre. Trop d'émissions provoquent le réchauffement climatique."
        },
        {
          type: "texte",
          text: "Quel processus permet aux plantes vertes de fabriquer leur nourriture grâce au Soleil ? (Un mot)",
          answer: ["photosynthèse", "Photosynthèse", "la photosynthèse"],
          hint: "« Photo » = lumière, « synthèse » = fabrication.",
          explication: "La photosynthèse est le processus par lequel les plantes vertes transforment l'eau et le CO₂ en matière organique grâce à la lumière du Soleil."
        }
      ]
    },
    {
      id: "roches-sols",
      name: "Roches et sols",
      emoji: "🪨",
      desc: "Minéraux, types de roches, formation des sols",
      questions: [
        {
          text: "Comment appelle-t-on les scientifiques qui étudient les roches ?",
          options: ["biologistes", "géologues", "astronomes", "chimistes"],
          answer: 1,
          hint: "« Géo » vient du grec qui signifie « Terre ».",
          explication: "Les géologues étudient les roches, les minéraux et la structure de la Terre."
        },
        {
          text: "Comment appelle-t-on une substance naturelle solide non vivante qui compose les roches ?",
          options: ["un nutriment", "un gaz", "un minéral", "un plasma"],
          answer: 2,
          hint: "Le quartz, le mica et le feldspath en sont des exemples.",
          explication: "Un minéral est une substance naturelle solide, d'origine non vivante, qui compose les roches (quartz, calcite, feldspath…)."
        },
        {
          text: "Comment s'appelle la roche très dure formée par le refroidissement lent du magma en profondeur ?",
          options: ["le calcaire", "le granit", "le marbre", "le sable"],
          answer: 1,
          hint: "Roche grise avec des taches, très utilisée en construction.",
          explication: "Le granit est une roche magmatique formée par le refroidissement lent du magma en profondeur."
        },
        {
          text: "Qu'est-ce que l'humus ?",
          options: ["une roche volcanique", "la matière organique issue de la décomposition d'êtres vivants dans le sol", "un type de minéral", "une couche de roche dure en surface"],
          answer: 1,
          hint: "C'est la partie sombre et fertile du sol.",
          explication: "L'humus est la matière organique résultant de la décomposition des végétaux et animaux morts. Il rend le sol fertile."
        },
        {
          text: "Quelle roche volcanique est si poreuse qu'elle peut flotter sur l'eau ?",
          options: ["le granit", "le basalte", "la pierre ponce", "le calcaire"],
          answer: 2,
          hint: "Elle est pleine de petits trous — des bulles de gaz piégées.",
          explication: "La pierre ponce est une roche volcanique très poreuse (pleine de bulles) : si légère qu'elle flotte sur l'eau."
        },
        {
          type: "vrai_faux",
          text: "Le calcaire peut se former à partir de l'accumulation de coquillages et de coraux.",
          answer: 0,
          hint: "Ces organismes marins ont un squelette riche en calcium.",
          explication: "VRAI. Le calcaire peut se former par accumulation de restes d'organismes marins (coquillages, coraux) riches en carbonate de calcium."
        },
        {
          text: "Quel est le minéral le plus courant dans le sable de plage ?",
          options: ["le sel", "le quartz", "le fer", "l'argile"],
          answer: 1,
          hint: "Minéral transparent ou blanc, très résistant à l'érosion.",
          explication: "Le quartz (silice) est le minéral le plus abondant dans le sable. Il est très résistant à l'érosion."
        },
        {
          type: "qcm",
          text: "Lesquels de ces éléments composent un sol ?",
          options: ["des minéraux (argile, sable)", "de l'humus (matière organique)", "de l'eau et de l'air", "des roches fondues (magma)"],
          answer: [0, 1, 2],
          hint: "Le magma est en profondeur, bien loin sous les sols de surface.",
          explication: "Un sol est composé de minéraux (sable, argile), d'humus, d'eau et d'air. Le magma n'est pas dans les sols de surface."
        },
        {
          text: "Comment appelle-t-on la destruction progressive des roches par l'eau, le vent et les variations de température ?",
          options: ["la photosynthèse", "l'érosion", "la digestion", "la fermentation"],
          answer: 1,
          hint: "Ce phénomène sculpte les paysages (falaises, canyons).",
          explication: "L'érosion est la dégradation des roches par les agents naturels : eau, vent, gel/dégel. Elle façonne les paysages."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on la matière sombre et fertile du sol, issue de la décomposition des organismes morts ? (Un mot)",
          answer: ["humus", "Humus", "l'humus"],
          hint: "Rend le sol riche en nutriments pour les plantes.",
          explication: "L'humus est la matière organique du sol, essentielle à la fertilité et à la croissance des plantes."
        }
      ]
    },
    {
      id: "cellule",
      name: "La cellule",
      emoji: "🔬",
      desc: "Structure cellulaire, cellule animale et végétale",
      questions: [
        {
          text: "Qu'est-ce qu'une cellule ?",
          options: ["une molécule d'eau", "la plus petite unité de vie", "un organe du corps", "un type de tissu"],
          answer: 1,
          hint: "C'est la « brique » de base de tout être vivant.",
          explication: "La cellule est la plus petite unité structurale et fonctionnelle du vivant. Tout organisme est formé d'une ou plusieurs cellules."
        },
        {
          text: "Quelle partie de la cellule contient l'ADN (l'information génétique) ?",
          options: ["la membrane", "le cytoplasme", "le noyau", "la paroi"],
          answer: 2,
          hint: "C'est le « centre de commande » de la cellule.",
          explication: "Le noyau contient l'ADN, le programme génétique de la cellule."
        },
        {
          text: "Comment appelle-t-on la fine enveloppe qui délimite la cellule ?",
          options: ["le noyau", "la membrane cellulaire", "la paroi", "le cytoplasme"],
          answer: 1,
          hint: "Elle contrôle les échanges entre la cellule et son environnement.",
          explication: "La membrane cellulaire (ou plasmique) est la fine enveloppe qui délimite la cellule et régule les échanges."
        },
        {
          text: "Quelle structure est présente dans la cellule végétale mais PAS dans la cellule animale ?",
          options: ["le noyau", "la membrane cellulaire", "la paroi cellulosique", "le cytoplasme"],
          answer: 2,
          hint: "Elle donne sa rigidité à la cellule végétale.",
          explication: "La paroi cellulosique (rigide) est propre aux cellules végétales. Les cellules animales n'en ont pas."
        },
        {
          text: "Comment appelle-t-on les organites verts des cellules végétales qui réalisent la photosynthèse ?",
          options: ["les mitochondries", "les chloroplastes", "les ribosomes", "les vacuoles"],
          answer: 1,
          hint: "Ils contiennent la chlorophylle qui capte la lumière solaire.",
          explication: "Les chloroplastes sont les organites verts des cellules végétales : ils réalisent la photosynthèse grâce à la chlorophylle."
        },
        {
          type: "vrai_faux",
          text: "Les bactéries sont des cellules sans vrai noyau délimité par une membrane.",
          answer: 0,
          hint: "On les appelle cellules « procaryotes ».",
          explication: "VRAI. Les bactéries sont des cellules procaryotes : elles ne possèdent pas de noyau délimité par une membrane."
        },
        {
          text: "Comment appelle-t-on la substance gélatineuse qui remplit la cellule autour du noyau ?",
          options: ["l'ADN", "la sève", "le cytoplasme", "la lymphe"],
          answer: 2,
          hint: "Il contient tous les organites de la cellule.",
          explication: "Le cytoplasme est le contenu semi-liquide de la cellule, dans lequel baignent le noyau et les organites."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces structures sont présentes dans TOUTES les cellules (animales ET végétales) ?",
          options: ["le noyau", "la membrane cellulaire", "les chloroplastes", "le cytoplasme"],
          answer: [0, 1, 3],
          hint: "Les chloroplastes sont réservés aux cellules végétales.",
          explication: "Noyau, membrane cellulaire et cytoplasme sont communs à toutes les cellules. Les chloroplastes sont spécifiques aux végétaux."
        },
        {
          text: "À quoi sert l'ADN dans la cellule ?",
          options: ["à produire de l'énergie", "à porter l'information génétique (programme de la cellule)", "à protéger la cellule des virus", "à fabriquer du glucose"],
          answer: 1,
          hint: "Il contient les « instructions » pour fabriquer toutes les protéines.",
          explication: "L'ADN est le support de l'information génétique : il contient les instructions pour le fonctionnement et la reproduction de la cellule."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on les organites verts des cellules végétales qui réalisent la photosynthèse ? (Un mot)",
          answer: ["chloroplastes", "Chloroplastes", "les chloroplastes", "chloroplaste"],
          hint: "Du grec « chloro » (vert) + « plastos » (formé).",
          explication: "Les chloroplastes sont les organites verts de la cellule végétale, sièges de la photosynthèse."
        }
      ]
    },
    {
      id: "eau-nature",
      name: "L'eau dans la nature",
      emoji: "💧",
      desc: "Cycle de l'eau, états, eau douce et salée",
      questions: [
        {
          text: "Quels sont les 3 états de l'eau ?",
          options: ["solide, liquide, plasma", "solide, liquide, gazeux", "liquide, gazeux, magnétique", "solide, dense, gazeux"],
          answer: 1,
          hint: "Glace, eau liquide, vapeur d'eau.",
          explication: "L'eau existe sous 3 états : solide (glace), liquide (eau), gazeux (vapeur d'eau)."
        },
        {
          text: "Comment appelle-t-on le passage de l'eau liquide à l'état de vapeur ?",
          options: ["la condensation", "la solidification", "l'évaporation", "la précipitation"],
          answer: 2,
          hint: "Ce qui arrive à une flaque d'eau par temps chaud.",
          explication: "L'évaporation est le passage de l'eau liquide à l'état gazeux (vapeur). Elle se produit sous l'effet de la chaleur."
        },
        {
          text: "Quelle proportion de l'eau sur Terre est de l'eau salée (mers et océans) ?",
          options: ["environ 10 %", "environ 50 %", "environ 75 %", "environ 97 %"],
          answer: 3,
          hint: "L'eau douce est très rare à l'échelle de la planète.",
          explication: "Environ 97 % de l'eau sur Terre est salée (mers et océans). Seulement 3 % est de l'eau douce."
        },
        {
          text: "Comment appelle-t-on le passage de la vapeur d'eau à l'état liquide (formation des nuages et de la rosée) ?",
          options: ["l'évaporation", "la condensation", "la filtration", "l'infiltration"],
          answer: 1,
          hint: "C'est l'inverse de l'évaporation.",
          explication: "La condensation est le passage de la vapeur d'eau à l'état liquide. C'est ce qui forme les nuages et la rosée."
        },
        {
          text: "D'où provient principalement l'eau que nous buvons au robinet ?",
          options: ["des mers et des océans directement", "des nappes souterraines et des rivières", "de la vapeur d'eau industrielle", "de la pluie collectée directement"],
          answer: 1,
          hint: "Elle est puisée sous terre ou dans les cours d'eau, puis traitée.",
          explication: "L'eau potable provient principalement des nappes souterraines et des rivières. Elle est traitée avant distribution."
        },
        {
          type: "vrai_faux",
          text: "Le cycle de l'eau est alimenté principalement par l'énergie du Soleil.",
          answer: 0,
          hint: "C'est le Soleil qui fait s'évaporer l'eau des océans.",
          explication: "VRAI. L'énergie solaire provoque l'évaporation de l'eau, ce qui est le moteur principal du cycle de l'eau."
        },
        {
          text: "Que se passe-t-il quand l'eau de pluie s'infiltre dans le sol ?",
          options: ["elle disparaît", "elle alimente les nappes souterraines", "elle monte vers les nuages", "elle devient salée"],
          answer: 1,
          hint: "C'est ainsi que se rechargent les réserves d'eau sous terre.",
          explication: "L'eau de pluie s'infiltre dans le sol pour alimenter les nappes phréatiques (souterraines), réservoirs naturels d'eau douce."
        },
        {
          type: "qcm",
          text: "Lesquels sont des réservoirs naturels d'eau douce ?",
          options: ["les glaciers", "les nappes souterraines", "les océans", "les lacs"],
          answer: [0, 1, 3],
          hint: "Les océans contiennent de l'eau salée.",
          explication: "Les glaciers, nappes souterraines et lacs contiennent de l'eau douce. Les océans contiennent de l'eau salée."
        },
        {
          text: "Comment appelle-t-on l'eau traitée et propre à la consommation humaine ?",
          options: ["eau distillée", "eau potable", "eau minérale uniquement", "eau brute"],
          answer: 1,
          hint: "Celle qui coule au robinet après traitement.",
          explication: "L'eau potable est une eau purifiée et contrôlée, propre à la consommation humaine sans risque pour la santé."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on le passage de l'eau liquide à l'état solide ? (Un mot)",
          answer: ["solidification", "Solidification", "congélation", "Congélation", "la solidification", "la congélation"],
          hint: "C'est ce qui se passe dans un congélateur.",
          explication: "La solidification (ou congélation) est le passage de l'eau liquide à l'état solide (glace), à 0 °C."
        }
      ]
    },
    {
      id: "soleil-saisons",
      name: "Soleil et saisons",
      emoji: "🌞",
      desc: "Mouvements de la Terre, jours/nuits, saisons",
      questions: [
        {
          text: "Qu'est-ce qui tourne autour de quoi dans notre système solaire ?",
          options: ["le Soleil tourne autour de la Terre", "la Terre tourne autour du Soleil", "la Lune tourne autour du Soleil", "le Soleil tourne autour de la Lune"],
          answer: 1,
          hint: "C'est ce que Copernic a démontré au XVIe siècle.",
          explication: "C'est la Terre qui tourne autour du Soleil (révolution), et non l'inverse."
        },
        {
          text: "Combien de temps dure la rotation de la Terre sur elle-même ?",
          options: ["12 heures", "24 heures (1 jour)", "365 jours", "28 jours"],
          answer: 1,
          hint: "C'est ce mouvement qui crée l'alternance jour/nuit.",
          explication: "La Terre tourne sur elle-même en 24 heures environ. Ce mouvement crée l'alternance jour/nuit."
        },
        {
          text: "Combien de temps met la Terre pour faire un tour complet autour du Soleil ?",
          options: ["24 heures", "28 jours", "365 jours (1 an)", "100 jours"],
          answer: 2,
          hint: "C'est la durée d'une année.",
          explication: "La révolution de la Terre autour du Soleil dure 365 jours et 6 heures environ (d'où les années bissextiles)."
        },
        {
          text: "Comment appelle-t-on le mouvement de la Terre autour du Soleil ?",
          options: ["la rotation", "la révolution", "l'oscillation", "la translation"],
          answer: 1,
          hint: "À ne pas confondre avec la rotation (mouvement sur elle-même).",
          explication: "La révolution est le mouvement de la Terre autour du Soleil. La rotation est le mouvement de la Terre sur son axe."
        },
        {
          text: "Pourquoi les saisons changent-elles au cours de l'année ?",
          options: ["à cause de la distance variable Terre-Soleil", "à cause de l'inclinaison de l'axe de la Terre", "à cause de la rotation de la Lune", "parce que le Soleil change de taille"],
          answer: 1,
          hint: "L'axe de la Terre est incliné d'environ 23,5°.",
          explication: "Les saisons sont dues à l'inclinaison de l'axe de la Terre (23,5°). Selon la position dans sa révolution, un hémisphère reçoit plus ou moins de lumière."
        },
        {
          type: "vrai_faux",
          text: "En été, les jours sont plus longs qu'en hiver dans l'hémisphère nord.",
          answer: 0,
          hint: "Observe la durée de la nuit en été et en hiver.",
          explication: "VRAI. En été, la France reçoit la lumière solaire plus longtemps (jusqu'à 16 h de jour). En hiver, les journées sont très courtes."
        },
        {
          text: "Comment appelle-t-on le moment de l'année où le jour et la nuit ont exactement la même durée ?",
          options: ["le solstice", "l'équinoxe", "l'apogée", "le zénith"],
          answer: 1,
          hint: "Il y en a deux par an : vers le 21 mars et le 23 septembre.",
          explication: "L'équinoxe (de printemps ou d'automne) est le moment où la durée du jour est égale à celle de la nuit (12 h chacune)."
        },
        {
          type: "qcm",
          text: "Quelles affirmations sur le Soleil sont correctes ?",
          options: ["c'est une étoile", "il est au centre de notre système solaire", "il tourne autour de la Terre", "il fournit l'énergie nécessaire à la vie sur Terre"],
          answer: [0, 1, 3],
          hint: "C'est la Terre qui tourne autour du Soleil, pas l'inverse.",
          explication: "Le Soleil est une étoile, au centre du système solaire. C'est la Terre qui en fait le tour. Il fournit lumière et chaleur indispensables à la vie."
        },
        {
          text: "Lors du solstice d'hiver (environ le 21 décembre en France), que se passe-t-il ?",
          options: ["les jours sont les plus longs", "la nuit est la plus longue de l'année", "le jour et la nuit durent 12 h chacun", "le Soleil se lève plein nord"],
          answer: 1,
          hint: "C'est le point opposé du solstice d'été.",
          explication: "Au solstice d'hiver, la nuit est la plus longue de l'année dans l'hémisphère nord. C'est l'inverse du solstice d'été (21 juin)."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on le mouvement de la Terre sur elle-même (qui dure 24 h) ? (Un mot)",
          answer: ["rotation", "Rotation", "la rotation"],
          hint: "Même famille que « rotatif » ou « rotonde ».",
          explication: "La rotation est le mouvement de la Terre sur son propre axe, en 24 heures. C'est elle qui crée le jour et la nuit."
        }
      ]
    }
  ]
};
