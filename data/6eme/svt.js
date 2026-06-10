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
    }
  ]
};
