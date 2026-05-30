/* Matière : SVT 🌱
   5 thèmes × 10 questions = 50 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["svt"] = {
  id: "svt",
  name: "SVT",
  emoji: "🌱",
  desc: "Sciences de la Vie et de la Terre",
  topics: [
    {
      id: "classification",
      name: "Classification du vivant",
      emoji: "🦴",
      desc: "Critères, groupes, vertébrés et invertébrés",
      questions: [
        {
          text: "Qu'est-ce qui caractérise un être vivant ?",
          options: ["Il pousse, se reproduit et meurt","Il est toujours grand","Il a toujours des poils","Il est immobile"],
          answer: 0,
          explication: "Un être vivant naît, se nourrit, grandit, se reproduit et meurt. Ces caractéristiques le distinguent du monde minéral."
        },
        {
          text: "Comment appelle-t-on les animaux qui possèdent une colonne vertébrale ?",
          image: "<div class=\"emoji-row\">🐺 🐅 🐘 🐬</div><div class=\"emoji-caption\">Tous ces animaux ont un squelette interne</div>",
          options: ["Les invertébrés","Les vertébrés","Les mollusques","Les crustacés"],
          answer: 1,
          explication: "Les vertébrés possèdent une colonne vertébrale (os ou cartilages) : poissons, amphibiens, reptiles, oiseaux et mammifères."
        },
        {
          text: "Parmi ces animaux, lequel est un invertébré ?",
          options: ["Le chat","Le saumon","L'escargot","Le serpent"],
          answer: 2,
          explication: "L'escargot est un invertébré (groupe des mollusques) : il n'a pas de squelette interne, mais une coquille externe."
        },
        {
          text: "Quel groupe d'animaux a la peau couverte d'écailles, pond des œufs sur la terre ferme et respire avec des poumons ?",
          hint: "Pense aux serpents et aux lézards.",
          options: ["Les poissons","Les amphibiens","Les reptiles","Les oiseaux"],
          answer: 2,
          explication: "Les reptiles (serpents, lézards, tortues, crocodiles) ont la peau écailleuse, respirent par les poumons et pondent des œufs à terre."
        },
        {
          text: "Quelle caractéristique est commune à tous les mammifères ?",
          options: ["Ils pondent des œufs","Les femelles allaitent leurs petits","Ils volent","Ils vivent dans l'eau"],
          answer: 1,
          explication: "Les mammifères ont des poils et les femelles allaitent leurs petits avec du lait. La plupart ne pondent pas d'œufs (sauf l'ornithorynque)."
        },
        {
          type: "qcm",
          text: "Parmi ces animaux, lesquels sont des AMPHIBIENS ?",
          hint: "Ils vivent à la fois dans l'eau et sur la terre.",
          options: ["la grenouille","le triton","le lézard","le crocodile"],
          answer: [0,1],
          explication: "Grenouilles et tritons sont des amphibiens (peau humide, vie aquatique larvaire puis terrestre). Lézards et crocodiles sont des reptiles."
        },
        {
          text: "Comment appelle-t-on un être vivant qui peut être observé seulement au microscope ?",
          options: ["Un mammifère","Un micro-organisme","Un végétal","Un fossile"],
          answer: 1,
          explication: "Les micro-organismes (bactéries, certains champignons, protozoaires) sont invisibles à l'œil nu et nécessitent un microscope pour être étudiés."
        },
        {
          text: "Qu'est-ce qu'une espèce ?",
          options: ["Un groupe d'êtres vivants qui peuvent se reproduire entre eux et avoir une descendance fertile","Tous les animaux d'un même pays","Tous les êtres vivants d'une même couleur","Un groupe d'animaux qui mangent la même chose"],
          answer: 0,
          explication: "Une espèce regroupe les êtres vivants qui peuvent se reproduire entre eux et donner des descendants féconds (par exemple le chien, l'être humain)."
        },
        {
          text: "Dans quel groupe classe-t-on la pieuvre, la moule et l'escargot ?",
          hint: "Corps mou, parfois protégé par une coquille.",
          options: ["Les mammifères","Les mollusques","Les insectes","Les crustacés"],
          answer: 1,
          explication: "Pieuvre, moule, escargot sont des mollusques : invertébrés à corps mou, parfois recouverts d'une coquille (calcaire) protectrice."
        },
        {
          type: "vrai_faux",
          text: "La baleine est un poisson car elle vit dans la mer.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. La baleine est un mammifère : elle respire l'air par des poumons, allaite ses petits et possède un squelette interne. Vivre dans l'eau ne suffit pas pour être un poisson."
        }
      ]
    },
    {
      id: "peuplement",
      name: "Peuplement des milieux",
      emoji: "🌳",
      desc: "Saisons, adaptations, migrations",
      questions: [
        {
          text: "Pourquoi de nombreux arbres perdent-ils leurs feuilles en automne ?",
          options: ["Pour avoir plus de soleil","Pour économiser l'eau et l'énergie pendant l'hiver","Parce qu'elles deviennent trop lourdes","Pour attirer les oiseaux"],
          answer: 1,
          explication: "Les arbres à feuilles caduques perdent leurs feuilles à l'automne pour limiter les pertes d'eau et économiser l'énergie pendant l'hiver (peu de lumière, gel)."
        },
        {
          text: "Comment appelle-t-on le grand sommeil de certains animaux pendant l'hiver, comme la marmotte ?",
          options: ["La migration","L'hibernation","La photosynthèse","La métamorphose"],
          answer: 1,
          explication: "L'hibernation est un sommeil profond où l'animal ralentit fortement son corps (rythme cardiaque, respiration) pour survivre au froid et au manque de nourriture."
        },
        {
          text: "Pourquoi beaucoup d'oiseaux migrent-ils en automne vers le sud ?",
          hint: "C'est lié à la nourriture et au climat.",
          options: ["Pour rester au chaud et trouver de la nourriture","Pour visiter de nouveaux pays","Pour fuir leurs prédateurs","Pour changer de couleur"],
          answer: 0,
          explication: "Les oiseaux migrateurs partent vers des régions plus chaudes où ils trouvent plus de nourriture (insectes, graines) qu'en hiver dans nos régions."
        },
        {
          text: "Comment appelle-t-on une caractéristique qui permet à un être vivant de survivre dans son milieu ?",
          options: ["Une migration","Une adaptation","Une saison","Une chaîne"],
          answer: 1,
          explication: "Une adaptation est une caractéristique (fourrure épaisse, camouflage, longues racines) qui permet à un être vivant de mieux vivre dans son milieu."
        },
        {
          text: "Quelle adaptation possède l'ours polaire pour survivre au grand froid ?",
          options: ["Une fourrure épaisse et une couche de graisse","Des plumes colorées","De petites pattes","Des écailles"],
          answer: 0,
          explication: "L'ours polaire est adapté au froid : fourrure épaisse, peau noire qui capte la chaleur, couche de graisse isolante, grandes pattes pour marcher sur la neige."
        },
        {
          text: "Comment appelle-t-on un milieu de vie comme une forêt, une mare ou un désert ?",
          options: ["Un écosystème","Une espèce","Une migration","Un fossile"],
          answer: 0,
          explication: "Un écosystème est l'ensemble formé par un milieu (sol, eau, climat) et les êtres vivants qui y vivent en interaction."
        },
        {
          text: "Dans une mare, quel être vivant peut-on observer comme producteur (qui fabrique sa matière grâce à la lumière) ?",
          options: ["Le brochet","La grenouille","Le nénuphar","Le héron"],
          answer: 2,
          explication: "Le nénuphar est un végétal : il réalise la photosynthèse à partir de la lumière, de l'eau et du CO₂. C'est un producteur."
        },
        {
          text: "Pourquoi les couleurs des feuilles changent-elles en automne ?",
          hint: "Les arbres arrêtent de produire un pigment vert.",
          options: ["Les feuilles sont peintes","Le pigment vert (chlorophylle) disparaît et laisse apparaître d'autres couleurs","Elles attrapent froid","Les arbres changent d'espèce"],
          answer: 1,
          explication: "Quand la chlorophylle (pigment vert) se dégrade à l'automne, les autres pigments (jaunes, rouges) deviennent visibles : c'est la couleur des feuilles d'automne."
        },
        {
          text: "Quel facteur climatique influence le plus la répartition des animaux et des plantes ?",
          options: ["La température et l'eau disponible","La couleur du ciel","Le bruit ambiant","L'altitude des étoiles"],
          answer: 0,
          explication: "La température, l'eau et la lumière sont les principaux facteurs qui déterminent quels êtres vivants peuvent occuper un milieu donné."
        },
        {
          type: "vrai_faux",
          text: "Toutes les espèces vivent partout sur Terre dans les mêmes conditions.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Chaque espèce occupe un milieu particulier auquel elle est adaptée. Un poisson rouge ne survit pas dans le désert, un cactus ne pousse pas dans la banquise."
        }
      ]
    },
    {
      id: "nutrition",
      name: "Nutrition des êtres vivants",
      emoji: "🍎",
      desc: "Photosynthèse, alimentation, digestion",
      questions: [
        {
          text: "Comment les plantes fabriquent-elles leur propre matière organique ?",
          options: ["Par la photosynthèse","En mangeant des insectes","En buvant du lait","En dormant"],
          answer: 0,
          explication: "Les plantes vertes réalisent la photosynthèse : grâce à la lumière, à l'eau et au CO₂, elles fabriquent leurs sucres et rejettent de l'oxygène."
        },
        {
          text: "Quel gaz les plantes rejettent-elles lors de la photosynthèse ?",
          options: ["Le dioxyde de carbone (CO₂)","L'oxygène (O₂)","L'azote (N₂)","L'hydrogène (H)"],
          answer: 1,
          explication: "La photosynthèse produit de l'oxygène (O₂), rejeté dans l'air. C'est grâce à cela que l'air contient l'oxygène que nous respirons."
        },
        {
          text: "Que prennent les plantes dans le sol grâce à leurs racines ?",
          options: ["De l'eau et des sels minéraux","Du sucre directement","De l'oxygène pur","De la lumière"],
          answer: 0,
          explication: "Les racines absorbent l'eau et les sels minéraux du sol, indispensables à la croissance et à la photosynthèse des plantes."
        },
        {
          text: "Comment appelle-t-on un animal qui se nourrit d'autres animaux ?",
          options: ["Un herbivore","Un carnivore","Un végétarien","Un producteur"],
          answer: 1,
          explication: "Un carnivore se nourrit principalement de viande (autres animaux). Lion, loup, requin sont des carnivores."
        },
        {
          text: "Qu'est-ce qu'un régime alimentaire équilibré chez l'humain ?",
          options: ["Manger varié : fruits, légumes, céréales, protéines, peu de sucres et de matières grasses","Manger uniquement des bonbons","Ne manger qu'une seule sorte d'aliment","Manger énormément en une seule fois"],
          answer: 0,
          explication: "Une alimentation équilibrée comporte fruits, légumes, céréales, protéines (viandes, poissons, œufs, légumineuses), peu de sucres ajoutés et peu de graisses."
        },
        {
          text: "Dans le tube digestif humain, où commence la digestion des aliments ?",
          hint: "On y mâche les aliments.",
          options: ["Dans l'estomac","Dans la bouche","Dans l'intestin grêle","Dans les poumons"],
          answer: 1,
          explication: "La digestion commence dans la bouche : les dents broient les aliments, la salive les humidifie et commence à les transformer chimiquement."
        },
        {
          text: "Quel organe digestif sert à transformer les aliments grâce à des sucs acides ?",
          options: ["Le cœur","L'estomac","Le foie","Le poumon"],
          answer: 1,
          explication: "L'estomac brasse les aliments avec ses sucs gastriques (acides) pour former une bouillie qui passe ensuite dans l'intestin grêle."
        },
        {
          text: "Où se trouvent les nutriments qui passent dans le sang après la digestion ?",
          hint: "Cet organe est long de plusieurs mètres.",
          options: ["Dans le gros intestin","Dans l'intestin grêle","Dans la bouche","Dans les reins"],
          answer: 1,
          explication: "L'intestin grêle est l'organe principal de l'absorption : les nutriments traversent sa paroi et passent dans le sang pour nourrir tout le corps."
        },
        {
          type: "qcm",
          text: "Parmi ces aliments, lesquels sont riches en PROTÉINES ?",
          hint: "Les protéines sont surtout dans les aliments d'origine animale et certaines légumineuses.",
          options: ["la viande","le sucre","les lentilles","l'huile"],
          answer: [0,2],
          explication: "Viande et lentilles (légumineuses) sont riches en protéines. Le sucre apporte surtout de l'énergie rapide, l'huile des matières grasses."
        },
        {
          text: "Pourquoi boire suffisamment d'eau chaque jour est-il important ?",
          options: ["Le corps est composé en grande partie d'eau et en perd chaque jour","L'eau fait grandir plus vite","L'eau remplace la nourriture","L'eau fait dormir"],
          answer: 0,
          explication: "Notre corps est composé d'environ 60 % d'eau et en perd chaque jour (urine, transpiration, respiration). Il faut donc en boire régulièrement."
        }
      ]
    },
    {
      id: "respiration",
      name: "Respiration & milieux",
      emoji: "💨",
      desc: "Échanges gazeux, poumons, branchies",
      questions: [
        {
          text: "Quel gaz l'être humain absorbe-t-il en respirant ?",
          options: ["Le dioxyde de carbone (CO₂)","L'oxygène (O₂)","L'azote pur","L'hélium"],
          answer: 1,
          explication: "Lors de l'inspiration, nous absorbons l'oxygène (O₂) de l'air ; lors de l'expiration, nous rejetons du dioxyde de carbone (CO₂)."
        },
        {
          text: "Avec quels organes les poissons respirent-ils ?",
          options: ["Les poumons","Les branchies","La peau","Les nageoires"],
          answer: 1,
          explication: "Les poissons respirent avec leurs branchies : ces organes filtrent l'oxygène dissous dans l'eau et permettent les échanges gazeux."
        },
        {
          text: "Où l'oxygène passe-t-il dans le sang chez l'être humain ?",
          hint: "Au fond des poumons, dans de petits sacs.",
          options: ["Dans la bouche","Dans les alvéoles pulmonaires","Dans l'estomac","Dans le cœur"],
          answer: 1,
          explication: "Les alvéoles pulmonaires sont de minuscules sacs au fond des poumons où l'oxygène passe dans le sang et le CO₂ est rejeté."
        },
        {
          text: "Quel système transporte l'oxygène et les nutriments dans tout le corps ?",
          options: ["Le système digestif","Le système nerveux","Le système circulatoire (sang et vaisseaux)","Le système osseux"],
          answer: 2,
          explication: "Le sang, propulsé par le cœur dans les vaisseaux sanguins, transporte l'oxygène et les nutriments jusqu'à toutes les cellules du corps."
        },
        {
          text: "Quelle pollution peut rendre l'air difficile à respirer en ville ?",
          options: ["Les gaz d'échappement des voitures et les fumées d'usines","Les fleurs en mai","Les nuages blancs","La pluie"],
          answer: 0,
          explication: "Les gaz d'échappement, les fumées d'usines et certains produits chimiques polluent l'air et nuisent à la santé respiratoire (asthme, allergies)."
        },
        {
          text: "Pourquoi le sport régulier est-il bon pour les poumons et le cœur ?",
          options: ["Il les rend plus efficaces et résistants","Il les rend plus petits","Il les use rapidement","Il les fait disparaître"],
          answer: 0,
          explication: "L'activité physique régulière améliore la capacité respiratoire des poumons et la force du cœur, qui devient plus efficace pour pomper le sang."
        },
        {
          text: "Comment appelle-t-on un être vivant qui respire à la fois dans l'eau (jeune) puis dans l'air (adulte) ?",
          hint: "Ce groupe inclut grenouilles et tritons.",
          options: ["Un mammifère","Un amphibien","Un poisson","Un insecte"],
          answer: 1,
          explication: "Les amphibiens (grenouilles, tritons) respirent par les branchies à l'état larvaire (têtard) puis par des poumons et la peau à l'âge adulte."
        },
        {
          text: "Quel organe se contracte pour faire entrer l'air dans les poumons ?",
          options: ["Le diaphragme","Le cœur","L'estomac","Le foie"],
          answer: 0,
          explication: "Le diaphragme est un muscle situé sous les poumons : quand il se contracte (descend), il agrandit la cage thoracique et fait entrer l'air."
        },
        {
          text: "Pourquoi est-il dangereux de fumer pour les poumons ?",
          options: ["La fumée du tabac irrite et endommage les poumons, favorisant des maladies graves","La fumée rend les poumons plus forts","Cela n'a aucun effet","Cela améliore le sport"],
          answer: 0,
          explication: "Le tabac contient des substances toxiques qui endommagent les poumons et augmentent le risque de cancer, bronchite chronique, maladies cardiovasculaires."
        },
        {
          type: "vrai_faux",
          text: "Tous les êtres vivants ont besoin d'oxygène pour vivre.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI pour la grande majorité (animaux, plantes, champignons, la plupart des bactéries). Quelques rares micro-organismes vivent sans oxygène (anaérobies), mais ce sont des exceptions."
        }
      ]
    },
    {
      id: "biodiversite",
      name: "Biodiversité & écosystèmes",
      emoji: "🦋",
      desc: "Chaînes alimentaires, équilibres",
      questions: [
        {
          text: "Qu'est-ce que la biodiversité ?",
          options: ["La diversité de toutes les formes de vie sur Terre","Le nombre d'humains sur Terre","La pollution de l'air","Une espèce particulière de poisson"],
          answer: 0,
          explication: "La biodiversité est la diversité de tous les êtres vivants (espèces, gènes) et des écosystèmes où ils vivent. Elle est essentielle à l'équilibre de la planète."
        },
        {
          text: "Dans une chaîne alimentaire, comment appelle-t-on un animal qui chasse et mange un autre animal ?",
          options: ["Un producteur","Une proie","Un prédateur","Un décomposeur"],
          answer: 2,
          explication: "Le prédateur chasse et mange une proie. Exemple : le renard (prédateur) mange le lapin (proie)."
        },
        {
          text: "Quel rôle jouent les champignons et certaines bactéries dans un écosystème ?",
          hint: "Ils transforment ce qui est mort.",
          options: ["Ils décomposent les êtres morts et recyclent la matière dans le sol","Ils produisent l'oxygène par photosynthèse","Ils chassent les prédateurs","Ils transportent l'eau"],
          answer: 0,
          explication: "Les décomposeurs (champignons, bactéries) transforment les déchets et les êtres morts en éléments réutilisables par les plantes. Sans eux, rien ne se recycle."
        },
        {
          text: "Lequel de ces facteurs menace le plus la biodiversité aujourd'hui ?",
          options: ["Les activités humaines (pollution, déforestation, surexploitation)","Le passage des saisons","La pluie","Le vent"],
          answer: 0,
          explication: "Les activités humaines (destruction d'habitats, pollution, surpêche, réchauffement climatique) sont la principale menace pour la biodiversité."
        },
        {
          text: "Pourquoi protéger une espèce, même petite comme un insecte ?",
          options: ["Chaque espèce a un rôle dans un écosystème, son extinction le fragilise","Parce qu'elle est jolie","Cela n'a aucune importance","Pour la mettre au zoo"],
          answer: 0,
          explication: "Chaque espèce a un rôle dans son écosystème (pollinisation, recyclage, alimentation des autres). Sa disparition déséquilibre tout le système."
        },
        {
          text: "Comment appelle-t-on un lieu protégé qui préserve la biodiversité, comme un parc national ?",
          options: ["Un aéroport","Une réserve naturelle","Un centre commercial","Une zone industrielle"],
          answer: 1,
          explication: "Une réserve naturelle ou un parc national est un espace protégé où la flore, la faune et les milieux sont conservés et étudiés."
        },
        {
          text: "Qui pollinise la majorité des plantes à fleurs et permet la production de fruits ?",
          options: ["Les abeilles et autres insectes pollinisateurs","Les serpents","Les poissons","Les vers de terre"],
          answer: 0,
          explication: "Les abeilles et de nombreux insectes pollinisateurs transportent le pollen entre les fleurs : sans eux, la majorité des fruits et légumes ne pousseraient pas."
        },
        {
          text: "Que signifie « espèce en voie d'extinction » ?",
          options: ["Une espèce dont il reste très peu d'individus et qui risque de disparaître","Une espèce qui vient d'apparaître","Une espèce qui change de couleur","Une espèce de plante uniquement"],
          answer: 0,
          explication: "Une espèce en voie d'extinction compte peu d'individus et risque de disparaître. Exemples : le panda géant, le tigre de Sibérie, le lynx ibérique."
        },
        {
          type: "qcm",
          text: "Parmi ces gestes, lesquels aident à protéger la biodiversité ?",
          options: ["planter des fleurs locales","utiliser beaucoup de pesticides","ramasser ses déchets en pleine nature","déranger les nids d'oiseaux"],
          answer: [0,2],
          explication: "Planter des fleurs locales (nourriture pour les pollinisateurs) et ramasser ses déchets aident la biodiversité. Pesticides et dérangement de la faune lui nuisent."
        },
        {
          text: "Dans une chaîne alimentaire « herbe → lapin → renard », quel est le rôle du lapin ?",
          options: ["Producteur","Consommateur primaire (herbivore)","Consommateur secondaire (carnivore)","Décomposeur"],
          answer: 1,
          explication: "Le lapin mange l'herbe (producteur) : il est consommateur PRIMAIRE (herbivore). Le renard, qui mange le lapin, est consommateur secondaire (carnivore)."
        }
      ]
    }
  ]
};
