/* Matière : Histoire-Géographie 🗺️ (6ème)
   4 thèmes × 10 questions = 40 questions
   2 thèmes d'Histoire (Préhistoire, Athènes) + 2 thèmes de Géographie (métropole, faible densité) */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["histoire-geo"] = {
  id: "histoire-geo",
  name: "Histoire-Géographie",
  emoji: "🗺️",
  desc: "Préhistoire, Antiquité, géographie du monde",
  topics: [
    {
      id: "prehistoire",
      name: "Les débuts de l'humanité",
      emoji: "🦴",
      desc: "Premiers humains, vie quotidienne, grandes inventions",
      questions: [
        {
          text: "Comment appelle-t-on la période avant l'invention de l'écriture ?",
          options: ["l'Antiquité", "le Moyen Âge", "la Préhistoire", "les Temps modernes"],
          answer: 2,
          hint: "« Préhistoire » signifie littéralement « avant l'histoire (écrite) ».",
          explication: "La Préhistoire est la longue période avant l'invention de l'écriture, vers −3500 av. J.-C."
        },
        {
          text: "Sur quel continent les premiers êtres humains sont-ils apparus ?",
          options: ["Asie", "Europe", "Afrique", "Amérique"],
          answer: 2,
          hint: "Les plus anciens fossiles d'hominidés y ont été retrouvés.",
          explication: "C'est en Afrique, il y a environ 7 millions d'années, que les premiers ancêtres de l'humain sont apparus."
        },
        {
          text: "Quelle a été l'une des plus grandes découvertes des premiers humains ?",
          options: ["la roue", "le feu", "l'écriture", "la monnaie"],
          answer: 1,
          hint: "Cela leur a permis de cuire la viande et de se chauffer.",
          explication: "La maîtrise du feu, il y a environ 400 000 ans, a transformé la vie des premiers humains."
        },
        {
          text: "Comment vivaient les humains du Paléolithique (Préhistoire ancienne) ?",
          options: ["agriculteurs sédentaires", "chasseurs-cueilleurs nomades", "marchands", "soldats"],
          answer: 1,
          hint: "Ils suivaient les animaux et se déplaçaient souvent.",
          explication: "Au Paléolithique, les humains étaient nomades et vivaient de la chasse et de la cueillette."
        },
        {
          text: "Quelle grande invention apparaît au Néolithique ?",
          options: ["la chasse", "l'agriculture", "le feu", "les outils en pierre"],
          answer: 1,
          hint: "Les humains commencent à cultiver des plantes et élever des animaux.",
          explication: "Au Néolithique (il y a environ 10 000 ans), l'agriculture transforme tout : les humains deviennent sédentaires."
        },
        {
          type: "vrai_faux",
          text: "Les premiers humains utilisaient des outils en métal.",
          answer: 1,
          hint: "Le métal n'apparaît qu'à la fin de la Préhistoire.",
          explication: "Les premiers outils étaient en pierre taillée. Le métal (bronze, fer) n'apparaît que beaucoup plus tard."
        },
        {
          text: "Que représentent les peintures de la grotte de Lascaux ?",
          options: ["des batailles", "des animaux", "des dieux", "des maisons"],
          answer: 1,
          hint: "On y voit chevaux, taureaux, cerfs…",
          explication: "Les peintures de Lascaux (il y a environ 18 000 ans) représentent surtout des animaux que les humains chassaient."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces inventions appartiennent au Néolithique ?",
          options: ["l'agriculture", "le feu", "l'élevage", "la poterie"],
          answer: [0, 2, 3],
          hint: "Le Néolithique est l'âge où l'humain devient sédentaire.",
          explication: "Agriculture, élevage et poterie naissent au Néolithique. Le feu, lui, est bien plus ancien (Paléolithique)."
        },
        {
          text: "Quel événement marque la fin de la Préhistoire ?",
          options: ["la maîtrise du feu", "l'invention de l'agriculture", "l'invention de l'écriture", "la construction des pyramides"],
          answer: 2,
          hint: "« Préhistoire » s'arrête là où commence l'« histoire ».",
          explication: "L'invention de l'écriture (vers −3500 av. J.-C. en Mésopotamie) marque la fin de la Préhistoire."
        },
        {
          type: "texte",
          text: "Sur quel continent les premiers humains sont-ils apparus ? (un seul mot)",
          answer: "Afrique",
          hint: "Berceau de l'humanité.",
          explication: "Les premiers humains sont apparus en Afrique, il y a environ 7 millions d'années."
        }
      ]
    },
    {
      id: "athenes",
      name: "La cité des Athéniens",
      emoji: "🏛️",
      desc: "Démocratie, citoyens, vie quotidienne dans la Grèce antique",
      questions: [
        {
          text: "Dans quel pays actuel se trouve la ville d'Athènes ?",
          options: ["Italie", "Grèce", "Égypte", "Turquie"],
          answer: 1,
          hint: "C'est aujourd'hui la capitale de ce pays.",
          explication: "Athènes est la capitale de la Grèce, déjà célèbre dans l'Antiquité."
        },
        {
          text: "Quel régime politique les Athéniens ont-ils inventé ?",
          options: ["la monarchie", "la démocratie", "l'empire", "la dictature"],
          answer: 1,
          hint: "« démos » = peuple, « kratos » = pouvoir.",
          explication: "Les Athéniens ont inventé la démocratie : le pouvoir appartient au peuple (« démos »)."
        },
        {
          text: "Qui pouvait participer aux décisions politiques à Athènes au Ve siècle av. J.-C. ?",
          options: ["tous les habitants", "seulement les citoyens", "seulement les rois", "les esclaves"],
          answer: 1,
          hint: "Pas tous les habitants, mais une catégorie précise d'hommes libres.",
          explication: "Seuls les citoyens (hommes libres, nés de parents athéniens, majeurs) pouvaient voter. Les femmes, esclaves et étrangers étaient exclus."
        },
        {
          text: "Comment s'appelle la colline d'Athènes où se trouvent les principaux temples ?",
          options: ["l'Olympe", "l'Acropole", "le Parthénon", "l'Agora"],
          answer: 1,
          hint: "« Acro » = haut, « polis » = cité.",
          explication: "L'Acropole (« la haute ville ») est la colline sacrée d'Athènes, où se trouve notamment le temple du Parthénon."
        },
        {
          text: "Quelle déesse protégeait la cité d'Athènes ?",
          options: ["Aphrodite", "Héra", "Athéna", "Artémis"],
          answer: 2,
          hint: "Son nom ressemble à celui de la cité.",
          explication: "Athéna, déesse de la sagesse et de la guerre, est la protectrice d'Athènes (qui porte son nom)."
        },
        {
          type: "vrai_faux",
          text: "Les femmes pouvaient voter à Athènes.",
          answer: 1,
          hint: "La démocratie athénienne n'était pas comme la nôtre aujourd'hui.",
          explication: "Les femmes n'étaient pas citoyennes et ne pouvaient pas voter. Seuls les hommes citoyens votaient."
        },
        {
          text: "Comment s'appelle la place publique où se réunissaient les Athéniens ?",
          options: ["le forum", "l'agora", "le stade", "le théâtre"],
          answer: 1,
          hint: "C'est le mot grec pour « place publique ».",
          explication: "L'agora est la place centrale d'Athènes où se déroulaient le commerce et les discussions politiques."
        },
        {
          type: "qcm",
          text: "Parmi ces catégories, lesquelles n'avaient PAS le droit de vote à Athènes ?",
          options: ["les hommes citoyens", "les femmes", "les esclaves", "les métèques (étrangers)"],
          answer: [1, 2, 3],
          hint: "Seule une catégorie pouvait voter : les hommes citoyens.",
          explication: "À Athènes, seuls les hommes citoyens votaient. Femmes, esclaves et métèques en étaient exclus."
        },
        {
          text: "Quel monument célèbre se trouve sur l'Acropole d'Athènes ?",
          options: ["le Colisée", "le Parthénon", "les pyramides", "la tour Eiffel"],
          answer: 1,
          hint: "C'est un temple dédié à Athéna.",
          explication: "Le Parthénon est le temple le plus célèbre d'Athènes, construit sur l'Acropole au Ve siècle av. J.-C. en l'honneur d'Athéna."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on le régime politique inventé par les Athéniens ?",
          answer: ["démocratie", "la démocratie"],
          hint: "Le pouvoir au peuple : « démos » = peuple, « kratos » = pouvoir.",
          explication: "La démocratie : « pouvoir du peuple » en grec ancien."
        }
      ]
    },
    {
      id: "metropole",
      name: "Habiter une métropole",
      emoji: "🏙️",
      desc: "Grandes villes, transports, vie urbaine",
      questions: [
        {
          text: "Qu'est-ce qu'une métropole ?",
          options: ["un petit village", "une grande ville", "une région agricole", "une montagne"],
          answer: 1,
          hint: "« Métro » vient du grec et signifie « mère », « polis » signifie « cité ».",
          explication: "Une métropole est une grande ville qui concentre population, activités économiques et services."
        },
        {
          text: "Lequel de ces lieux est typique d'une métropole ?",
          options: ["une ferme", "un gratte-ciel", "un château fort", "une mine"],
          answer: 1,
          hint: "Dans les grandes villes, on construit en hauteur pour gagner de la place.",
          explication: "Les gratte-ciel (tours très hautes) sont caractéristiques des grandes métropoles modernes."
        },
        {
          text: "Quelle est la métropole la plus peuplée du monde ?",
          options: ["Paris", "New York", "Tokyo", "Londres"],
          answer: 2,
          hint: "Elle est située au Japon.",
          explication: "Tokyo (Japon) avec son agglomération est l'une des plus grandes métropoles du monde (plus de 37 millions d'habitants)."
        },
        {
          text: "Quel moyen de transport est typiquement urbain ?",
          options: ["le tracteur", "le métro", "le bateau de pêche", "le téléphérique de montagne"],
          answer: 1,
          hint: "Son nom vient de « chemin de fer métropolitain ».",
          explication: "Le métro est un moyen de transport en commun typique des grandes villes (Paris, New York, Tokyo…)."
        },
        {
          text: "Comment appelle-t-on les déplacements quotidiens entre la banlieue et le centre-ville ?",
          options: ["le tourisme", "les migrations pendulaires", "l'exil", "le commerce"],
          answer: 1,
          hint: "« Pendulaire » comme un pendule qui va et vient.",
          explication: "Les migrations pendulaires sont les allers-retours quotidiens domicile-travail, très importants dans les métropoles."
        },
        {
          type: "vrai_faux",
          text: "Une métropole a généralement plus d'habitants qu'un village.",
          answer: 0,
          hint: "Une métropole concentre des millions d'habitants.",
          explication: "Une métropole compte des centaines de milliers, voire des millions d'habitants, bien plus qu'un village."
        },
        {
          text: "Quelle est la plus grande métropole française ?",
          options: ["Marseille", "Lyon", "Paris", "Toulouse"],
          answer: 2,
          hint: "C'est aussi la capitale.",
          explication: "Paris est la plus grande métropole de France (plus de 10 millions d'habitants dans l'agglomération)."
        },
        {
          type: "qcm",
          text: "Quels sont les avantages de vivre dans une métropole ?",
          options: ["nombreux emplois", "grand calme", "beaucoup de services (écoles, hôpitaux)", "transports en commun nombreux"],
          answer: [0, 2, 3],
          hint: "Les métropoles sont rarement réputées pour leur calme.",
          explication: "Les métropoles offrent emplois, services et transports. Le calme est plutôt l'avantage des espaces ruraux."
        },
        {
          text: "Comment appelle-t-on les villes situées autour d'une grande métropole ?",
          options: ["la campagne", "la banlieue", "les colonies", "les vallées"],
          answer: 1,
          hint: "Zone résidentielle qui entoure le centre-ville.",
          explication: "La banlieue est l'ensemble des communes périphériques qui entourent le centre d'une métropole."
        },
        {
          type: "texte",
          text: "Donne le nom de la capitale de la France, qui est aussi sa plus grande métropole.",
          answer: "Paris",
          hint: "Ville célèbre pour sa tour métallique.",
          explication: "Paris, capitale de la France et plus grande métropole du pays."
        }
      ]
    },
    {
      id: "faible-densite",
      name: "Habiter un espace de faible densité",
      emoji: "🌾",
      desc: "Campagne, montagne, déserts : vie loin des villes",
      questions: [
        {
          text: "Qu'est-ce qu'un espace de faible densité ?",
          options: ["une grande ville", "une zone avec peu d'habitants", "un quartier d'affaires", "un port"],
          answer: 1,
          hint: "« Densité » = nombre d'habitants par km².",
          explication: "Un espace de faible densité est une zone où il y a peu d'habitants par km² (campagne, montagne, désert)."
        },
        {
          text: "Lequel de ces espaces est généralement de faible densité ?",
          options: ["le centre de Paris", "une rue commerçante", "un village de montagne", "une station de métro"],
          answer: 2,
          hint: "Cherche un endroit éloigné, peu accessible.",
          explication: "Un village de montagne abrite peu d'habitants sur une grande surface : c'est un espace de faible densité."
        },
        {
          text: "Quelle est une activité économique typique des espaces de faible densité ?",
          options: ["la finance", "l'agriculture", "la mode", "le tourisme d'affaires"],
          answer: 1,
          hint: "Activité qui demande beaucoup de terrain.",
          explication: "L'agriculture (cultures, élevage) est l'activité principale des zones rurales de faible densité."
        },
        {
          text: "Quel est un inconvénient majeur de vivre dans un espace de faible densité ?",
          options: ["trop de bruit", "pollution intense", "peu de services à proximité", "embouteillages"],
          answer: 2,
          hint: "Pense aux écoles, médecins, magasins éloignés.",
          explication: "Loin des villes, les services (écoles, hôpitaux, commerces) sont rares et lointains. Il faut souvent prendre la voiture."
        },
        {
          text: "Quel espace de faible densité a un climat très chaud et très peu d'eau ?",
          options: ["la forêt", "le désert", "la côte", "la plaine"],
          answer: 1,
          hint: "Lieu sec et aride.",
          explication: "Le désert est un espace très peu peuplé à cause du manque d'eau (Sahara, Atacama…)."
        },
        {
          type: "vrai_faux",
          text: "Les espaces de faible densité couvrent une grande partie de la France.",
          answer: 0,
          hint: "La France n'est pas qu'urbaine : pense aux campagnes, aux montagnes.",
          explication: "Une grande partie du territoire français (campagnes, montagnes, forêts) est de faible densité, même si la population est concentrée dans les villes."
        },
        {
          text: "Quelle activité touristique est typique de la montagne en hiver ?",
          options: ["la baignade", "le ski", "la plongée", "le surf"],
          answer: 1,
          hint: "On a besoin de neige.",
          explication: "Le ski et les sports d'hiver dynamisent les stations de montagne, espaces souvent de faible densité."
        },
        {
          type: "qcm",
          text: "Lesquels de ces espaces sont des espaces de faible densité ?",
          options: ["une métropole", "une zone montagneuse", "une grande plaine agricole", "un quartier d'affaires"],
          answer: [1, 2],
          hint: "Cherche les espaces où on trouve peu d'habitants au km².",
          explication: "Montagnes et plaines agricoles sont peu peuplées. Métropoles et quartiers d'affaires sont au contraire très denses."
        },
        {
          text: "Pourquoi certaines campagnes françaises perdent-elles des habitants ?",
          options: ["trop de pluie", "jeunes partis en ville pour étudier ou travailler", "climat trop froid", "invasion d'animaux"],
          answer: 1,
          hint: "Pense à où vont les jeunes pour leurs études supérieures ou leur premier emploi.",
          explication: "De nombreux jeunes quittent les campagnes pour étudier ou trouver du travail en ville : c'est l'exode rural."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on en un mot un espace très peu peuplé, comme le Sahara ?",
          answer: ["désert", "un désert"],
          hint: "Très chaud, très sec, presque sans végétation.",
          explication: "Le désert est l'exemple typique d'espace de très faible densité (peu d'eau, peu d'habitants)."
        }
      ]
    }
  ]
};
