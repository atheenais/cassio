/* Matière : Histoire-Géographie 🗺️ (6ème)
   10 thèmes × 10 questions = 100 questions
   5 thèmes d'Histoire (Préhistoire, Athènes, Rome, Christianisme, Islam médiéval)
   + 5 thèmes de Géographie (Métropole, Faible densité, Littoraux, Fortes contraintes, Ville française) */
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
    },
    {
      id: "rome-antique",
      name: "Rome antique",
      emoji: "🏛️",
      desc: "République, Empire, vie quotidienne romaine",
      questions: [
        {
          text: "Selon la légende, par qui Rome a-t-elle été fondée ?",
          options: ["Jules César et Brutus", "Romulus et Rémus", "Tarquin et Marius", "Auguste et Néron"],
          answer: 1,
          hint: "Deux frères jumeaux élevés par une louve.",
          explication: "La légende raconte que Rome fut fondée en 753 av. J.-C. par les jumeaux Romulus et Rémus, élevés par une louve."
        },
        {
          text: "Vers quelle date Rome a-t-elle été fondée selon la tradition ?",
          options: ["3500 av. J.-C.", "753 av. J.-C.", "476 av. J.-C.", "100 ap. J.-C."],
          answer: 1,
          hint: "Au VIIIe siècle avant Jésus-Christ.",
          explication: "Selon la tradition, Rome a été fondée en 753 av. J.-C."
        },
        {
          text: "Quel grand chef militaire romain a conquis la Gaule ?",
          options: ["Auguste", "Néron", "Jules César", "Marc Aurèle"],
          answer: 2,
          hint: "Il a écrit « La Guerre des Gaules ».",
          explication: "Jules César a conquis la Gaule entre 58 et 51 av. J.-C. (victoire d'Alésia contre Vercingétorix)."
        },
        {
          text: "Qui était le premier empereur romain ?",
          options: ["Jules César", "Auguste", "Néron", "Constantin"],
          answer: 1,
          hint: "Petit-neveu et fils adoptif de Jules César.",
          explication: "Auguste (Octave) devient le premier empereur en 27 av. J.-C. Jules César n'a été que dictateur, pas empereur."
        },
        {
          text: "Comment s'appelait l'écriture utilisée par les Romains ?",
          options: ["alphabet grec", "alphabet latin", "hiéroglyphes", "alphabet runique"],
          answer: 1,
          hint: "C'est aussi l'alphabet que nous utilisons aujourd'hui en français.",
          explication: "Les Romains utilisaient l'alphabet latin, encore utilisé aujourd'hui dans de nombreuses langues."
        },
        {
          type: "vrai_faux",
          text: "Le Colisée est un grand amphithéâtre romain.",
          answer: 0,
          hint: "On y organisait des combats de gladiateurs.",
          explication: "VRAI. Le Colisée à Rome (inauguré en 80 ap. J.-C.) pouvait accueillir 50 000 spectateurs."
        },
        {
          text: "Quelle langue parlait-on dans l'Empire romain ?",
          options: ["le français", "le grec ancien uniquement", "le latin", "l'italien"],
          answer: 2,
          hint: "Cette langue est l'ancêtre du français.",
          explication: "Le latin était la langue officielle de l'Empire romain. Le français en descend directement."
        },
        {
          type: "qcm",
          text: "Que trouvait-on dans une ville romaine ?",
          options: ["un forum (place centrale)", "des thermes (bains publics)", "un parlement", "des aqueducs"],
          answer: [0, 1, 3],
          hint: "Le parlement est une invention moderne.",
          explication: "Forum, thermes et aqueducs sont typiques des villes romaines. Le parlement est moderne."
        },
        {
          text: "Quand l'Empire romain d'Occident a-t-il chuté ?",
          options: ["en 476 ap. J.-C.", "en 100 av. J.-C.", "en 1453", "en 1789"],
          answer: 0,
          hint: "Cet événement marque la fin de l'Antiquité.",
          explication: "L'Empire romain d'Occident chute en 476 ap. J.-C., date qui marque traditionnellement le début du Moyen Âge."
        },
        {
          type: "texte",
          text: "Comment appelait-on les combattants qui s'affrontaient dans le Colisée ?",
          answer: ["gladiateurs", "Gladiateurs", "les gladiateurs"],
          hint: "Armés d'épées, ils combattaient pour divertir le peuple.",
          explication: "Les gladiateurs étaient des esclaves ou prisonniers qui combattaient dans les arènes pour le divertissement public."
        }
      ]
    },
    {
      id: "christianisme",
      name: "Naissance du christianisme",
      emoji: "✝️",
      desc: "Jésus, premiers chrétiens, expansion de la religion",
      questions: [
        {
          text: "Dans quelle région est né Jésus selon les Évangiles ?",
          options: ["en Égypte", "en Judée (actuelle Palestine/Israël)", "en Grèce", "à Rome"],
          answer: 1,
          hint: "À Bethléem, dans une province romaine.",
          explication: "Jésus est né en Judée, alors province romaine, vers l'an 1 (à Bethléem selon les Évangiles)."
        },
        {
          text: "Comment appelle-t-on les livres qui racontent la vie de Jésus ?",
          options: ["les Psaumes", "les Évangiles", "le Coran", "la Torah"],
          answer: 1,
          hint: "Il y en a quatre (Matthieu, Marc, Luc, Jean).",
          explication: "Les quatre Évangiles racontent la vie et l'enseignement de Jésus. Ils font partie du Nouveau Testament."
        },
        {
          text: "Quel empereur romain a fait du christianisme la religion officielle ?",
          options: ["Auguste", "Néron", "Constantin", "Théodose Ier"],
          answer: 3,
          hint: "À la fin du IVe siècle.",
          explication: "Théodose Ier a fait du christianisme la religion officielle de l'Empire en 380. Constantin l'avait d'abord légalisé en 313."
        },
        {
          text: "Quel empereur a légalisé le christianisme par l'édit de Milan en 313 ?",
          options: ["Auguste", "Néron", "Constantin", "Marc Aurèle"],
          answer: 2,
          hint: "Il aurait eu une vision avant une bataille.",
          explication: "Constantin a légalisé le christianisme par l'édit de Milan en 313, mettant fin aux persécutions."
        },
        {
          type: "vrai_faux",
          text: "Au début, les chrétiens étaient persécutés dans l'Empire romain.",
          answer: 0,
          hint: "Ils refusaient d'adorer les dieux romains et l'empereur.",
          explication: "VRAI. Les premiers chrétiens furent persécutés pendant près de trois siècles avant la légalisation par Constantin."
        },
        {
          text: "Quel est le lieu saint le plus important pour les chrétiens, où Jésus aurait été crucifié ?",
          options: ["La Mecque", "Jérusalem", "Rome", "Athènes"],
          answer: 1,
          hint: "Ville sainte pour les trois religions monothéistes.",
          explication: "Jérusalem est le lieu de la crucifixion et de la résurrection de Jésus selon les Évangiles."
        },
        {
          text: "Que veut dire le mot « christianisme » ?",
          options: ["religion des croyants", "religion qui suit l'enseignement du Christ", "religion de Rome", "religion antique"],
          answer: 1,
          hint: "« Christ » signifie « oint » en grec, surnom donné à Jésus.",
          explication: "Le christianisme désigne la religion fondée sur l'enseignement de Jésus, appelé le Christ."
        },
        {
          type: "qcm",
          text: "Lesquels de ces livres ou collections font partie de la Bible chrétienne ?",
          options: ["L'Ancien Testament", "Les Évangiles", "Le Coran", "Le Nouveau Testament"],
          answer: [0, 1, 3],
          hint: "Le Coran est le livre saint d'une autre religion.",
          explication: "La Bible chrétienne contient l'Ancien et le Nouveau Testament (dont les Évangiles font partie). Le Coran appartient à l'islam."
        },
        {
          text: "Quel symbole religieux est associé au christianisme ?",
          options: ["la croix", "le croissant", "l'étoile à 6 branches", "la roue"],
          answer: 0,
          hint: "Rappelle la crucifixion de Jésus.",
          explication: "La croix est le symbole du christianisme, en référence à la crucifixion de Jésus."
        },
        {
          type: "texte",
          text: "Quel jour de la semaine est traditionnellement consacré au repos et au culte chez les chrétiens ?",
          answer: ["dimanche", "Dimanche", "le dimanche"],
          hint: "Jour de la résurrection de Jésus selon les Évangiles.",
          explication: "Le dimanche est le jour de la résurrection de Jésus, devenu jour de repos et de culte chez les chrétiens."
        }
      ]
    },
    {
      id: "islam-medieval",
      name: "Naissance de l'Islam",
      emoji: "🕌",
      desc: "Mahomet, expansion arabe, civilisation médiévale",
      questions: [
        {
          text: "Qui est le prophète fondateur de l'islam ?",
          options: ["Abraham", "Moïse", "Mahomet (Muhammad)", "Jésus"],
          answer: 2,
          hint: "Il a vécu en Arabie au VIIe siècle.",
          explication: "Mahomet (Muhammad) est le prophète fondateur de l'islam. Il a vécu de 570 à 632."
        },
        {
          text: "Dans quelle ville l'islam est-il né ?",
          options: ["Jérusalem", "Bagdad", "La Mecque", "Damas"],
          answer: 2,
          hint: "Ville sainte de l'Arabie, lieu du pèlerinage musulman.",
          explication: "L'islam est né à La Mecque (Arabie), ville natale du prophète Mahomet."
        },
        {
          text: "Comment s'appelle le livre saint de l'islam ?",
          options: ["la Bible", "le Coran", "la Torah", "les Védas"],
          answer: 1,
          hint: "Il contient la parole de Dieu (Allah) selon les musulmans.",
          explication: "Le Coran est le livre saint de l'islam. Il contient la parole d'Allah transmise à Mahomet par l'ange Gabriel."
        },
        {
          text: "En quel siècle l'islam est-il apparu ?",
          options: ["IVe siècle", "VIIe siècle", "Xe siècle", "XIIIe siècle"],
          answer: 1,
          hint: "Mahomet est né vers 570.",
          explication: "L'islam apparaît au VIIe siècle. La date traditionnelle de son fondement est 622 (Hégire)."
        },
        {
          text: "Que signifie le mot « islam » ?",
          options: ["paix", "soumission (à Dieu)", "prière", "frère"],
          answer: 1,
          hint: "Le mot a une racine commune avec « salam » (paix).",
          explication: "« Islam » signifie « soumission » (à la volonté de Dieu). Il partage une racine avec « salam » (paix)."
        },
        {
          type: "vrai_faux",
          text: "Comme le christianisme et le judaïsme, l'islam est une religion monothéiste (un seul Dieu).",
          answer: 0,
          hint: "Allah est le Dieu unique des musulmans.",
          explication: "VRAI. L'islam est monothéiste : un seul Dieu, Allah. Comme le judaïsme et le christianisme."
        },
        {
          text: "Quelle ville est devenue une grande capitale culturelle de l'Islam médiéval ?",
          options: ["Athènes", "Bagdad", "Rome", "Constantinople"],
          answer: 1,
          hint: "Capitale du califat abbasside.",
          explication: "Bagdad, fondée en 762, est devenue la capitale culturelle et scientifique du monde musulman médiéval."
        },
        {
          type: "qcm",
          text: "Lesquels de ces lieux sont saints pour les musulmans ?",
          options: ["La Mecque", "Médine", "Jérusalem", "Rome"],
          answer: [0, 1, 2],
          hint: "Rome est le centre du catholicisme.",
          explication: "Les 3 villes saintes de l'islam sont La Mecque, Médine et Jérusalem. Rome appartient au christianisme."
        },
        {
          text: "Comment s'appelle le lieu de culte musulman ?",
          options: ["l'église", "la synagogue", "la mosquée", "le temple"],
          answer: 2,
          hint: "Bâtiment surmonté souvent d'un dôme et d'un minaret.",
          explication: "Les musulmans prient à la mosquée. L'église est chrétienne, la synagogue est juive."
        },
        {
          type: "texte",
          text: "Comment s'appelle le pèlerinage à La Mecque que tout musulman doit faire au moins une fois s'il le peut ?",
          answer: ["hajj", "Hajj", "le hajj", "le pèlerinage"],
          hint: "C'est l'un des 5 piliers de l'islam.",
          explication: "Le hajj (ou pèlerinage à La Mecque) est l'un des 5 piliers de l'islam : tout musulman doit le faire une fois s'il en a les moyens."
        }
      ]
    },
    {
      id: "littoraux",
      name: "Habiter les littoraux",
      emoji: "🏖️",
      desc: "Côtes touristiques et industrielles, ports",
      questions: [
        {
          text: "Qu'est-ce qu'un littoral ?",
          options: ["une montagne", "une zone située le long d'une côte", "un désert", "une forêt"],
          answer: 1,
          hint: "« Littoral » vient du latin « litus » (rivage).",
          explication: "Un littoral est l'espace de contact entre la terre et la mer (côtes, plages, falaises, ports…)."
        },
        {
          text: "Quelle est l'activité économique principale d'un littoral touristique ?",
          options: ["l'agriculture", "le tourisme", "l'industrie lourde", "la chasse"],
          answer: 1,
          hint: "Plages, hôtels, restaurants, sports nautiques.",
          explication: "Les littoraux touristiques vivent principalement du tourisme : plages, hôtels, activités balnéaires."
        },
        {
          text: "Lequel de ces lieux est un littoral industriel important ?",
          options: ["Saint-Tropez", "Le Havre", "Chamonix", "Toulouse"],
          answer: 1,
          hint: "Grand port français à l'embouchure de la Seine.",
          explication: "Le Havre est un grand port industriel français. Saint-Tropez est touristique, les autres ne sont pas côtiers."
        },
        {
          text: "Que trouve-t-on dans un littoral industriel ?",
          options: ["des plages bondées", "des usines, raffineries et ports de commerce", "des stations de ski", "des champs cultivés"],
          answer: 1,
          hint: "Le littoral industriel sert au commerce maritime et à la production.",
          explication: "Un littoral industriel concentre des activités lourdes : raffineries, usines pétrochimiques, ports de commerce."
        },
        {
          text: "Quel océan borde la côte atlantique de la France ?",
          options: ["l'océan Pacifique", "l'océan Atlantique", "l'océan Indien", "l'océan Arctique"],
          answer: 1,
          hint: "C'est dans son nom : « côte atlantique ».",
          explication: "La France a un littoral atlantique à l'ouest (Bretagne, Aquitaine…) et méditerranéen au sud."
        },
        {
          type: "vrai_faux",
          text: "Les littoraux sont des espaces fragiles, sensibles à la pollution.",
          answer: 0,
          hint: "Marées noires, déchets plastiques, érosion…",
          explication: "VRAI. Les littoraux sont des écosystèmes fragiles, menacés par la pollution et la surfréquentation."
        },
        {
          text: "Une station balnéaire est…",
          options: ["une gare de train", "une ville touristique au bord de la mer", "un type de bateau", "un parc national"],
          answer: 1,
          hint: "« Balnéaire » signifie « lié aux bains ».",
          explication: "Une station balnéaire est une ville côtière organisée autour du tourisme de plage (ex: Cannes, Deauville)."
        },
        {
          type: "qcm",
          text: "Quels sont les avantages de vivre sur le littoral ?",
          options: ["accès facile à la mer", "emplois liés au tourisme et au commerce maritime", "isolement total", "climat souvent doux"],
          answer: [0, 1, 3],
          hint: "L'isolement n'est généralement pas un atout du littoral.",
          explication: "Mer accessible, emplois, climat doux : avantages. L'isolement caractérise plutôt les espaces de faible densité."
        },
        {
          text: "Comment appelle-t-on la disparition progressive de la côte sous l'action de la mer ?",
          options: ["la sédimentation", "l'érosion", "la marée", "l'évaporation"],
          answer: 1,
          hint: "Phénomène qui « grignote » les falaises et les plages.",
          explication: "L'érosion littorale est l'usure progressive des côtes par les vagues et le vent."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on un lieu aménagé pour accueillir les bateaux sur le littoral ?",
          answer: ["port", "Port", "un port"],
          hint: "Lieu d'embarquement et de débarquement des bateaux.",
          explication: "Un port est un lieu aménagé sur le littoral pour accueillir les navires de commerce, de pêche ou de plaisance."
        }
      ]
    },
    {
      id: "fortes-contraintes",
      name: "Habiter avec des contraintes",
      emoji: "⛰️",
      desc: "Montagnes, déserts, îles : surmonter les difficultés",
      questions: [
        {
          text: "Quelle est la principale contrainte pour habiter en haute montagne ?",
          options: ["la chaleur excessive", "le froid et le relief difficile", "la sécheresse", "le manque de soleil"],
          answer: 1,
          hint: "Pense aux Alpes en hiver.",
          explication: "En haute montagne, le froid intense, la neige et les pentes raides rendent la vie quotidienne difficile."
        },
        {
          text: "Quelle est la principale contrainte dans un désert chaud comme le Sahara ?",
          options: ["le manque d'eau", "le froid", "le brouillard", "la végétation envahissante"],
          answer: 0,
          hint: "Pluies très rares, écart de température jour/nuit énorme.",
          explication: "Dans le désert chaud, le manque d'eau (sécheresse) est la principale contrainte pour les humains."
        },
        {
          text: "Une oasis est…",
          options: ["un type de tempête", "un endroit dans le désert où l'eau est disponible", "une montagne enneigée", "une grande ville"],
          answer: 1,
          hint: "Lieu où la végétation pousse grâce à l'eau souterraine.",
          explication: "Une oasis est un point d'eau dans le désert qui permet à la végétation et aux humains de s'installer."
        },
        {
          text: "Comment appelle-t-on les habitants nomades du Sahara qui élèvent des chameaux ?",
          options: ["les Esquimaux", "les Touaregs", "les Bantous", "les Cosaques"],
          answer: 1,
          hint: "Peuple connu pour ses voiles indigo.",
          explication: "Les Touaregs sont un peuple nomade berbère du Sahara, connu pour leurs voiles bleu indigo."
        },
        {
          text: "Quelle activité économique permet aux régions de montagne de se développer ?",
          options: ["la pêche en haute mer", "le tourisme d'hiver (ski) et d'été (randonnée)", "la production de pétrole", "la culture du blé"],
          answer: 1,
          hint: "Ski en hiver, randonnée et VTT en été.",
          explication: "Le tourisme (sports d'hiver, randonnée…) est l'activité principale qui dynamise les régions de montagne."
        },
        {
          type: "vrai_faux",
          text: "Plus on monte en altitude, plus la température diminue.",
          answer: 0,
          hint: "C'est pour ça qu'il y a de la neige en haut des montagnes.",
          explication: "VRAI. La température baisse d'environ 6 °C tous les 1000 m d'altitude."
        },
        {
          text: "Habiter une petite île présente quelles contraintes ?",
          options: ["espace limité et dépendance pour s'approvisionner", "trop d'habitants au km²", "froid extrême", "embouteillages"],
          answer: 0,
          hint: "Difficile d'arriver et de repartir.",
          explication: "Sur une petite île : surface restreinte, isolement, nécessité d'importer beaucoup de marchandises."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces régions sont des espaces à fortes contraintes ?",
          options: ["la Côte d'Azur", "le Sahara", "l'Himalaya", "le Groenland"],
          answer: [1, 2, 3],
          hint: "La Côte d'Azur a un climat doux et agréable, peu de contraintes naturelles fortes.",
          explication: "Sahara (chaleur/sécheresse), Himalaya (altitude/froid), Groenland (froid polaire) sont à fortes contraintes."
        },
        {
          text: "Quelle activité est typique des zones de montagne en été ?",
          options: ["la plongée sous-marine", "la randonnée et l'alpinisme", "le surf", "la culture du riz"],
          answer: 1,
          hint: "Activité de plein air sur des sentiers.",
          explication: "La randonnée et l'alpinisme sont les activités touristiques typiques de la montagne en été."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on les habitants traditionnels du Grand Nord, comme au Groenland ?",
          answer: ["Inuits", "inuits", "les Inuits"],
          hint: "Peuple autochtone des régions polaires.",
          explication: "Les Inuits sont les peuples autochtones des régions arctiques (Canada, Groenland, Alaska)."
        }
      ]
    },
    {
      id: "ville-francaise",
      name: "Habiter en France",
      emoji: "🇫🇷",
      desc: "Villes françaises, espaces ruraux, diversité du territoire",
      questions: [
        {
          text: "Quelle est la capitale de la France ?",
          options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
          answer: 2,
          hint: "Tour Eiffel, Louvre, Notre-Dame.",
          explication: "Paris est la capitale et la plus grande ville de France."
        },
        {
          text: "Quelle est la 2e plus grande ville de France (commune) ?",
          options: ["Lyon", "Marseille", "Toulouse", "Nice"],
          answer: 1,
          hint: "Grand port méditerranéen au sud.",
          explication: "Marseille est la 2e commune la plus peuplée de France (~870 000 hab.) après Paris."
        },
        {
          text: "Comment appelle-t-on l'espace situé hors des villes, avec des champs et des villages ?",
          options: ["la métropole", "la banlieue", "la campagne (espace rural)", "le centre-ville"],
          answer: 2,
          hint: "On y trouve fermes, prés, forêts.",
          explication: "L'espace rural (ou campagne) est l'espace agricole et forestier, généralement peu peuplé."
        },
        {
          text: "Qu'est-ce qu'une aire urbaine ?",
          options: ["une zone agricole", "l'ensemble d'une ville et de ses banlieues étendues", "une forêt", "une zone montagneuse"],
          answer: 1,
          hint: "Centre-ville + banlieues + couronne périurbaine.",
          explication: "Une aire urbaine regroupe une ville-centre et toute son agglomération, y compris les zones où les habitants travaillent en ville."
        },
        {
          text: "Quel est le fleuve qui traverse Paris ?",
          options: ["la Loire", "le Rhône", "la Seine", "la Garonne"],
          answer: 2,
          hint: "Sous le Pont Neuf, le Pont des Arts…",
          explication: "La Seine traverse Paris d'est en ouest avant de se jeter dans la Manche au Havre."
        },
        {
          type: "vrai_faux",
          text: "La majorité de la population française vit dans les villes.",
          answer: 0,
          hint: "Environ 80 % des Français sont urbains.",
          explication: "VRAI. Environ 80 % des Français vivent en milieu urbain (en ville ou en banlieue)."
        },
        {
          text: "Qu'est-ce qu'une commune en France ?",
          options: ["une entreprise", "la plus petite division administrative dirigée par un maire", "un département", "une école"],
          answer: 1,
          hint: "Il y en a environ 35 000 en France.",
          explication: "La commune est la plus petite division administrative française, dirigée par un maire élu."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces villes sont situées en France ?",
          options: ["Toulouse", "Madrid", "Lyon", "Bordeaux"],
          answer: [0, 2, 3],
          hint: "Madrid est la capitale de l'Espagne.",
          explication: "Toulouse, Lyon et Bordeaux sont en France. Madrid est en Espagne."
        },
        {
          text: "Lequel de ces espaces se développe parfois au détriment de la campagne autour des villes ?",
          options: ["la forêt", "les zones d'activités et les lotissements pavillonnaires", "les déserts", "les littoraux"],
          answer: 1,
          hint: "Phénomène appelé « étalement urbain ».",
          explication: "L'étalement urbain (lotissements, zones commerciales) grignote les espaces agricoles et naturels autour des villes."
        },
        {
          type: "texte",
          text: "Quelle est la capitale de la France ? Un seul mot.",
          answer: ["Paris", "paris"],
          hint: "Ville lumière, tour Eiffel.",
          explication: "Paris est la capitale française."
        }
      ]
    }
  ]
};
