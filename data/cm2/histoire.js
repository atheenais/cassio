/* Matière : Histoire-Géographie 🏛️
   7 thèmes × 10 questions = 70 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["cm2"] = window.CURRICULUM_PARTS["cm2"] || {};
window.CURRICULUM_PARTS["cm2"]["histoire"] = {
  id: "histoire",
  name: "Histoire-Géographie",
  emoji: "🏛️",
  desc: "IIIe République · Âge industriel · Guerres · Géographie",
  topics: [
    {
      id: "iiie_rep",
      name: "La IIIe République",
      emoji: "🏫",
      desc: "Jules Ferry, laïcité, droits et libertés",
      questions: [
        {
          text: "Quel ministre a rendu l'école primaire gratuite (1881) et obligatoire (1882) ?",
          options: ["Victor Hugo","Jules Ferry","Louis Pasteur","Léon Gambetta"],
          answer: 1,
          explication: "Jules Ferry, ministre de l'Instruction publique, a instauré l'école laïque, gratuite (1881) et obligatoire (1882) jusqu'à 13 ans."
        },
        {
          text: "Que signifie le mot « laïque » pour l'école républicaine ?",
          options: ["Réservée aux garçons","Dirigée par l'Église catholique","Neutre en matière de religion","Ouverte seulement aux riches"],
          answer: 2,
          explication: "Une école laïque est neutre vis-à-vis de toutes les religions. Les enseignants (instituteurs) y remplacent les religieux."
        },
        {
          text: "Quelle liberté fondamentale a été accordée en 1881 sous la IIIe République ?",
          options: ["Le droit de vote des femmes","La liberté de la presse","L'abolition de l'esclavage","Le suffrage universel masculin"],
          answer: 1,
          explication: "La loi de 1881 garantit la liberté de la presse : les journaux peuvent être publiés sans autorisation préalable du gouvernement."
        },
        {
          text: "En 1892, la France célèbre le centenaire (100 ans) de la proclamation de quelle République ?",
          options: ["La IIIe République (1870)","La Première République (1792)","La IVe République (1946)","La Ve République (1958)"],
          answer: 1,
          explication: "1792 + 100 = 1892. La Première République avait été proclamée en 1792. En 1892, la France fête ses 100 ans de vie républicaine."
        },
        {
          text: "Quel symbole de la République a été officiellement adopté comme hymne national en 1880 ?",
          options: ["Le drapeau tricolore","La Marseillaise","La devise « Liberté Égalité Fraternité »","Marianne"],
          answer: 1,
          explication: "La Marseillaise (écrite en 1792) a été officiellement adoptée comme hymne national en 1880, sous la IIIe République."
        },
        {
          type: "qcm",
          text: "Quelles libertés et droits ont été acquis sous la IIIe République ?",
          hint: "Plusieurs bonnes réponses ! Pense aux grandes lois entre 1880 et 1905.",
          options: ["La liberté de la presse (1881)","Le droit de vote des femmes","L'école laïque, gratuite et obligatoire","La séparation des Églises et de l'État (1905)"],
          answer: [0,2,3],
          explication: "La IIIe République a apporté : liberté de la presse (1881), école laïque/gratuite/obligatoire (Jules Ferry 1881-82), séparation Églises-État (1905). Mais le droit de vote des femmes n'arrive qu'en 1944 !"
        },
        {
          text: "Quel objet, symbole de l'école de la IIIe République, servait à écrire en classe ?",
          options: ["Le stylo à bille","L'ardoise et le porte-plume","L'ordinateur","Le feutre"],
          answer: 1,
          explication: "Les élèves écrivaient sur une ardoise puis au porte-plume trempé dans l'encre. Le stylo à bille n'apparaîtra que bien plus tard."
        },
        {
          text: "Comment appelait-on les instituteurs de la IIIe République, chargés de diffuser le savoir et les valeurs républicaines ?",
          hint: "Une expression imagée, comme des soldats au service de la République.",
          options: ["Les hussards noirs de la République","Les chevaliers du roi","Les missionnaires","Les gardes rouges"],
          answer: 0,
          explication: "On surnommait les instituteurs « les hussards noirs de la République » (à cause de leur blouse noire), car ils répandaient l'instruction et la laïcité."
        },
        {
          text: "Sous la IIIe République, l'école devient gratuite, obligatoire et...",
          options: ["payante","laïque","religieuse","réservée aux garçons"],
          answer: 1,
          explication: "Les lois Ferry (1881-1882) rendent l'école gratuite, obligatoire et LAÏQUE (neutre vis-à-vis des religions)."
        },
        {
          type: "vrai_faux",
          text: "Sous la IIIe République, les filles allaient aussi à l'école obligatoire.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. L'école devient obligatoire pour les filles ET les garçons de 6 à 13 ans, même si les classes étaient souvent séparées à l'époque."
        }
      ]
    },
    {
      id: "industriel",
      name: "L'âge industriel",
      emoji: "🏭",
      desc: "Charbon, locomotives, conditions de vie ouvrière",
      questions: [
        {
          text: "Quelle énergie, extraite des mines, alimente les premières machines à vapeur au XIXe siècle ?",
          options: ["Le pétrole","L'électricité","Le charbon","L'énergie solaire"],
          answer: 2,
          explication: "Le charbon extrait des mines de fond alimente les chaudières à vapeur. C'est le moteur de la révolution industrielle."
        },
        {
          text: "Comment appelle-t-on les maisons ouvrières construites près des mines de charbon au XIXe siècle ?",
          options: ["Les châteaux","Les corons","Les pavillons","Les HLM"],
          answer: 1,
          explication: "Les corons sont des rangées de maisons identiques construites par les compagnies minières pour loger leurs ouvriers."
        },
        {
          text: "Quel médecin français a démontré que les maladies sont causées par des microbes (XIXe siècle) ?",
          options: ["Charles Darwin","Marie Curie","Louis Pasteur","Claude Bernard"],
          answer: 2,
          explication: "Louis Pasteur a démontré que de nombreuses maladies sont dues à des micro-organismes. Il a aussi inventé la pasteurisation."
        },
        {
          text: "Comment appelle-t-on le mouvement de population qui quitte la campagne pour travailler en ville ?",
          options: ["L'immigration","L'exode rural","La colonisation","L'émigration"],
          answer: 1,
          explication: "L'exode rural : les paysans quittent les campagnes pour aller travailler dans les usines des villes industrielles."
        },
        {
          text: "Quel nouveau moyen de transport révolutionne les déplacements et le commerce au XIXe siècle ?",
          options: ["L'automobile","L'avion","Le chemin de fer (train à vapeur)","Le tramway électrique"],
          answer: 2,
          explication: "Le chemin de fer, avec la locomotive à vapeur, permet de relier les villes et de transporter marchandises et voyageurs rapidement."
        },
        {
          text: "Quelle grande invention de la fin du XIXe siècle a permis d'éclairer les villes et les maisons ?",
          options: ["La bougie","L'ampoule électrique","La lampe à huile","Le feu de bois"],
          answer: 1,
          explication: "L'ampoule électrique (mise au point par Edison vers 1879) remplace progressivement les lampes à pétrole et change la vie quotidienne."
        },
        {
          text: "Comment appelle-t-on le bâtiment où des ouvriers fabriquent des produits avec des machines ?",
          options: ["Une ferme","Une usine","Un château","Un marché"],
          answer: 1,
          explication: "L'usine est le lieu de la production industrielle : de nombreux ouvriers y travaillent avec des machines, souvent de longues journées."
        },
        {
          text: "Au XIXe siècle, dans quelles conditions travaillaient souvent les ouvriers, y compris les enfants ?",
          options: ["Peu d'heures et bien payés","De longues journées, des salaires faibles et peu de sécurité","Seulement le week-end","À la maison uniquement"],
          answer: 1,
          explication: "Les ouvriers (parfois des enfants) travaillaient jusqu'à 12-15 h par jour, pour de faibles salaires, dans des conditions dangereuses."
        },
        {
          text: "Quel moyen de transport, inventé à la fin du XIXe siècle, deviendra l'automobile ?",
          hint: "Il roule grâce à un moteur.",
          options: ["La diligence","Le véhicule à moteur","La charrette","Le radeau"],
          answer: 1,
          explication: "Le véhicule à moteur (à essence) apparaît à la fin du XIXe siècle et donnera naissance à l'automobile moderne."
        },
        {
          text: "Comment appelle-t-on une grande exposition qui présente les progrès et inventions, comme celle de 1889 à Paris ?",
          hint: "C'est pour elle que fut construite la tour Eiffel.",
          options: ["Une Exposition universelle","Un marché de Noël","Une foire agricole","Un salon du livre"],
          answer: 0,
          explication: "Les Expositions universelles montraient les progrès techniques. La tour Eiffel fut construite pour celle de Paris en 1889."
        }
      ]
    },
    {
      id: "guerres",
      name: "Les Guerres mondiales",
      emoji: "🌍",
      desc: "Première et Seconde Guerre mondiale · Résistance",
      questions: [
        {
          text: "Quelles sont les dates de la Première Guerre mondiale ?",
          options: ["1870 – 1871","1914 – 1918","1939 – 1945","1945 – 1955"],
          answer: 1,
          explication: "La Première Guerre mondiale a duré du 28 juillet 1914 à l'Armistice du 11 novembre 1918."
        },
        {
          text: "Quel général a lancé l'Appel du 18 juin 1940 depuis Londres ?",
          options: ["Pétain","Churchill","De Gaulle","Foch"],
          answer: 2,
          explication: "Le général de Gaulle a lancé son appel à la résistance depuis Londres sur Radio BBC le 18 juin 1940."
        },
        {
          text: "Quand a été signé l'Armistice de la Première Guerre mondiale ?",
          options: ["11 novembre 1918","8 mai 1945","14 juillet 1919","4 août 1914"],
          answer: 0,
          explication: "L'Armistice a été signé le 11 novembre 1918 à 11h. C'est pourquoi le 11 novembre est un jour de commémoration en France."
        },
        {
          text: "Dans quel but principal la construction européenne a-t-elle été lancée après 1945 ?",
          options: ["Dominer militairement l'Union soviétique","Assurer la paix et la coopération entre les pays européens","Créer un empire colonial commun","Imposer une seule langue en Europe"],
          answer: 1,
          explication: "Après les deux guerres mondiales dévastatrices, les dirigeants européens ont voulu construire la paix durable en coopérant économiquement et politiquement."
        },
        {
          text: "Comment s'appelait le régime français de collaboration avec les nazis pendant la guerre ?",
          options: ["IIIe République","IVe République","État français (régime de Vichy)","Empire français"],
          answer: 2,
          explication: "Le maréchal Pétain dirigeait l'« État français » basé à Vichy. Ce régime a collaboré avec l'Allemagne nazie."
        },
        {
          type: "vrai_faux",
          text: "La Seconde Guerre mondiale s'est terminée en Europe le 8 mai 1945.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Le 8 mai 1945 marque la capitulation sans condition de l'Allemagne nazie. C'est un jour férié en France (commémoration de la Victoire)."
        },
        {
          text: "Comment appelait-on les soldats français de la Première Guerre mondiale ?",
          options: ["Les chevaliers","Les poilus","Les mousquetaires","Les légionnaires"],
          answer: 1,
          explication: "Les « poilus » étaient les soldats français des tranchées (1914-1918), surnommés ainsi à cause de leur vie rude et de leur barbe."
        },
        {
          text: "Où les soldats de la Première Guerre mondiale se battaient-ils, abrités dans de longs fossés ?",
          options: ["Dans des châteaux","Dans les tranchées","Dans des grottes","Sur des bateaux"],
          answer: 1,
          explication: "La Première Guerre mondiale est une guerre de tranchées : de longs fossés creusés où les soldats vivaient et combattaient."
        },
        {
          text: "Quel pays était dirigé par Adolf Hitler pendant la Seconde Guerre mondiale ?",
          options: ["L'Italie","L'Allemagne nazie","Le Japon","L'Espagne"],
          answer: 1,
          explication: "Adolf Hitler dirigeait l'Allemagne nazie, à l'origine de la Seconde Guerre mondiale (1939-1945) en Europe."
        },
        {
          text: "Comment appelle-t-on le débarquement allié en Normandie du 6 juin 1944 ?",
          hint: "C'est le début de la libération de la France.",
          options: ["Le Jour J (D-Day)","L'Armistice","La Libération de Paris","La drôle de guerre"],
          answer: 0,
          explication: "Le 6 juin 1944, le « Jour J » (D-Day), les Alliés débarquent en Normandie : c'est le début de la libération de l'Europe de l'Ouest."
        }
      ]
    },
    {
      id: "geo_cm2",
      name: "Géographie CM2",
      emoji: "🗺️",
      desc: "Transports, communication, mieux habiter",
      questions: [
        {
          text: "Quel moyen de transport émet le moins de CO₂ par passager pour un long trajet en France ?",
          options: ["L'avion","La voiture individuelle","Le train","Le camion"],
          answer: 2,
          explication: "Le train (notamment le TGV électrique) émet environ 20 fois moins de CO₂ par passager qu'un avion pour le même trajet."
        },
        {
          text: "Qu'est-ce qu'un écoquartier ?",
          options: ["Un quartier réservé aux écoles","Un quartier conçu pour être respectueux de l'environnement","Une zone industrielle moderne","Un quartier sans voitures ni transports"],
          answer: 1,
          explication: "Un écoquartier intègre des bâtiments économes en énergie, des espaces verts, des transports en commun et du recyclage."
        },
        {
          text: "Quel réseau mondial permet d'accéder à des informations et de communiquer depuis n'importe où ?",
          options: ["Le réseau ferroviaire","Internet","Le réseau téléphonique fixe","Le réseau autoroutier"],
          answer: 1,
          explication: "Internet est un réseau informatique mondial qui relie des milliards d'appareils et permet d'échanger des données instantanément."
        },
        {
          text: "Comment appelle-t-on le départ des habitants des campagnes vers les villes ?",
          options: ["La métropolisation","L'exode rural","La suburbanisation","La rurbanisation"],
          answer: 1,
          explication: "L'exode rural désigne le départ des populations rurales vers les villes, accéléré par l'industrialisation au XIXe siècle."
        },
        {
          text: "Que signifie « développement durable » ?",
          options: ["Construire des bâtiments très solides","Répondre aux besoins d'aujourd'hui sans compromettre ceux des générations futures","Utiliser le maximum de ressources naturelles","Interdire toute nouvelle construction"],
          answer: 1,
          explication: "Le développement durable cherche un équilibre entre croissance économique, justice sociale et respect de l'environnement."
        },
        {
          text: "Quelle est la capitale de la France ?",
          options: ["Lyon","Marseille","Paris","Bordeaux"],
          answer: 2,
          explication: "Paris est la capitale de la France : c'est la plus grande ville et le siège des principales institutions (Assemblée, gouvernement…)."
        },
        {
          text: "Comment appelle-t-on une très grande ville et sa banlieue, comptant des millions d'habitants ?",
          hint: "Paris, Londres ou Tokyo en sont des exemples.",
          options: ["Un village","Une métropole","Un hameau","Un quartier"],
          answer: 1,
          explication: "Une métropole est une très grande ville qui concentre population, emplois et activités, et qui rayonne sur tout un territoire."
        },
        {
          text: "Qu'est-ce qu'un espace rural ?",
          options: ["Le centre d'une grande ville","Une zone de campagne, peu peuplée, avec champs et villages","Une zone industrielle","Un aéroport"],
          answer: 1,
          explication: "L'espace rural désigne la campagne : faible densité de population, agriculture, villages, forêts et grands espaces."
        },
        {
          text: "Comment appelle-t-on le déplacement quotidien entre le domicile et le lieu de travail ou d'école ?",
          options: ["Une migration","Une mobilité (un trajet pendulaire)","Une exportation","Une expédition"],
          answer: 1,
          explication: "Les déplacements quotidiens domicile-travail/école sont des mobilités (ou trajets pendulaires), souvent vers les villes."
        },
        {
          text: "Quel océan borde la côte ouest de la France ?",
          options: ["L'océan Pacifique","L'océan Indien","L'océan Atlantique","L'océan Arctique"],
          answer: 2,
          explication: "L'océan Atlantique borde l'ouest de la France (façade atlantique). La Méditerranée borde le sud-est."
        }
      ]
    },
    {
      id: "ve_republique",
      name: "De 1945 à nos jours",
      emoji: "🕊️",
      desc: "Décolonisation, Ve République, monde contemporain",
      questions: [
        {
          text: "En quelle année la Ve République française a-t-elle été instaurée ?",
          options: ["1945","1958","1968","1981"],
          answer: 1,
          explication: "La Ve République est instaurée en 1958, sous l'impulsion du général de Gaulle, pendant la crise de la guerre d'Algérie."
        },
        {
          text: "Quel est l'événement social majeur du printemps 1968 en France ?",
          options: ["L'abolition de l'esclavage","Une révolte étudiante et une grève générale","L'élection du premier président","La fin de la Seconde Guerre mondiale"],
          answer: 1,
          explication: "Mai 68 : grande crise sociale et culturelle, avec manifestations étudiantes à Paris et grève générale dans toute la France."
        },
        {
          text: "Quel processus a mené à l'indépendance des anciennes colonies françaises ?",
          options: ["La colonisation","La décolonisation","L'industrialisation","La mondialisation"],
          answer: 1,
          explication: "La décolonisation (1945-1962 surtout) est la période où les colonies africaines et asiatiques accèdent à l'indépendance."
        },
        {
          text: "Quel grand droit politique les femmes françaises ont-elles obtenu en 1944 ?",
          options: ["Le droit à l'éducation","Le droit de vote","Le droit de travailler","Le droit de propriété"],
          answer: 1,
          explication: "Les Françaises obtiennent le droit de vote par ordonnance le 21 avril 1944 (premier vote effectif en 1945) — bien après les hommes."
        },
        {
          text: "Quel président, élu en 1981, a fait abolir la peine de mort la même année ?",
          options: ["Charles de Gaulle","Georges Pompidou","Valéry Giscard d'Estaing","François Mitterrand"],
          answer: 3,
          explication: "François Mitterrand (élu en 1981) a fait abolir la peine de mort la même année, sous l'impulsion de son garde des Sceaux Robert Badinter."
        },
        {
          text: "Qui fut le premier président de la Ve République, à partir de 1958 ?",
          options: ["François Mitterrand","Charles de Gaulle","Jacques Chirac","Napoléon"],
          answer: 1,
          explication: "Charles de Gaulle, fondateur de la Ve République en 1958, en devient le premier président de la République."
        },
        {
          text: "Tous les combien d'années élit-on aujourd'hui le président de la République en France ?",
          hint: "C'est le « quinquennat » depuis 2000.",
          options: ["Tous les 3 ans","Tous les 5 ans","Tous les 7 ans","Tous les 10 ans"],
          answer: 1,
          explication: "Depuis 2000, le président est élu pour 5 ans (le quinquennat). Auparavant, le mandat durait 7 ans (le septennat)."
        },
        {
          text: "Comment les Français choisissent-ils leur président sous la Ve République ?",
          options: ["Il est désigné par le roi","Au suffrage universel direct (par le vote des citoyens)","Par tirage au sort","Il hérite du poste"],
          answer: 1,
          explication: "Depuis 1962, le président est élu au suffrage universel direct : chaque citoyen majeur vote directement pour lui."
        },
        {
          text: "En quelle année l'euro est-il devenu la monnaie utilisée au quotidien en France (pièces et billets) ?",
          options: ["1995","2002","2010","1988"],
          answer: 1,
          explication: "Les pièces et billets en euros sont entrés en circulation le 1er janvier 2002, remplaçant le franc français."
        },
        {
          type: "vrai_faux",
          text: "Sous la Ve République, hommes et femmes ont le droit de vote.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Les femmes ont obtenu le droit de vote en 1944. Sous la Ve République, tous les citoyens majeurs votent, sans distinction."
        }
      ]
    },
    {
      id: "france_paysages",
      name: "Paysages français",
      emoji: "🏔️",
      desc: "Fleuves, montagnes, climats, DOM-TOM",
      questions: [
        {
          text: "Quel est le plus long fleuve de France ?",
          options: ["La Seine","La Loire","Le Rhône","La Garonne"],
          answer: 1,
          explication: "La Loire (1 006 km) est le plus long fleuve de France. Elle naît dans le Massif Central et se jette dans l'Atlantique."
        },
        {
          text: "Quel massif montagneux sépare la France de l'Espagne ?",
          options: ["Les Alpes","Les Pyrénées","Le Jura","Les Vosges"],
          answer: 1,
          explication: "Les Pyrénées forment une frontière naturelle entre la France et l'Espagne sur environ 430 km."
        },
        {
          text: "Quel est le plus haut sommet de France et d'Europe occidentale ?",
          options: ["Le Puy de Dôme","Le Mont Ventoux","Le Mont Blanc","Le Pic du Midi"],
          answer: 2,
          explication: "Le Mont Blanc (4 807 m), dans les Alpes, est le toit de l'Europe occidentale."
        },
        {
          text: "Lequel n'est PAS un département d'outre-mer (DROM) français ?",
          options: ["La Guadeloupe","La Réunion","La Martinique","Le Québec"],
          answer: 3,
          explication: "Le Québec est une province canadienne (francophone mais étrangère). Les 5 DROM français : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte."
        },
        {
          text: "Quel climat règne sur la côte méditerranéenne française ?",
          options: ["Océanique","Méditerranéen (étés chauds et secs)","Continental","Montagnard"],
          answer: 1,
          explication: "Le climat méditerranéen : étés chauds et secs, hivers doux et pluvieux. Typique du sud de la France (Marseille, Nice, Montpellier…)."
        },
        {
          text: "Quelle mer borde le sud de la France ?",
          options: ["La mer du Nord","La mer Méditerranée","La mer Baltique","La mer Noire"],
          answer: 1,
          explication: "La mer Méditerranée borde le sud de la France (de l'Espagne à l'Italie), avec un climat doux et ensoleillé."
        },
        {
          text: "Comment appelle-t-on une côte découpée avec des falaises et des plages, comme en Bretagne ou en Normandie ?",
          options: ["Un littoral","Un plateau","Une plaine","Un désert"],
          answer: 0,
          explication: "Le littoral est la zone de contact entre la terre et la mer : plages, falaises, ports, stations balnéaires…"
        },
        {
          text: "Quel grand fleuve traverse Paris ?",
          image: "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" width=\"220\">\n    <!-- silhouette de la France approximative -->\n    <path d=\"M 110 20 Q 60 25 50 60 Q 30 90 35 130 Q 50 180 100 210 Q 150 215 190 180 Q 210 130 195 80 Q 175 35 130 20 Z\"\n          fill=\"rgba(127,127,127,.08)\" stroke=\"currentColor\" stroke-width=\"2\"/>\n    <!-- Seine (mise en évidence avec une couleur plus forte car c'est l'objet de la question) -->\n    <path d=\"M 130 60 Q 110 75 95 80\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3.5\"/>\n    <!-- Autres fleuves en plus discret -->\n    <path d=\"M 165 110 Q 135 120 95 130\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\" opacity=\".4\"/>\n    <path d=\"M 160 110 Q 165 145 155 185\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\" opacity=\".4\"/>\n    <path d=\"M 55 165 Q 75 175 95 195\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\" opacity=\".4\"/>\n    <!-- Paris (point rouge clairement identifié) -->\n    <circle cx=\"125\" cy=\"65\" r=\"4\" fill=\"#ef4444\"/>\n    <text x=\"132\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"currentColor\">Paris</text>\n    <!-- Flèche d'indication vers le fleuve à identifier -->\n    <text x=\"80\" y=\"55\" font-size=\"14\" fill=\"#3b82f6\" font-style=\"italic\">?</text>\n  </svg>",
          options: ["La Loire","Le Rhône","La Seine","La Garonne"],
          answer: 2,
          explication: "La Seine traverse Paris avant de se jeter dans la Manche au Havre. La Loire, le Rhône et la Garonne sont d'autres grands fleuves français."
        },
        {
          text: "Comment appelle-t-on une grande étendue de terres basses et plates ?",
          options: ["Une montagne","Une plaine","Un volcan","Une falaise"],
          answer: 1,
          explication: "Une plaine est une vaste étendue plate et basse, souvent favorable à l'agriculture (comme la Beauce ou la plaine du Nord)."
        },
        {
          text: "Dans quel massif se trouvent des volcans aujourd'hui éteints, en Auvergne ?",
          hint: "On y trouve la chaîne des Puys.",
          options: ["Les Alpes","Le Massif central","Les Vosges","Le Jura"],
          answer: 1,
          explication: "Le Massif central abrite d'anciens volcans (la chaîne des Puys, le puy de Dôme), aujourd'hui éteints."
        }
      ]
    },
    {
      id: "union_europ",
      name: "Union Européenne",
      emoji: "🇪🇺",
      desc: "Pays, monnaie, institutions, symboles",
      questions: [
        {
          text: "Combien de pays font partie de l'Union Européenne depuis 2020 ?",
          options: ["15","20","27","30"],
          answer: 2,
          explication: "L'Union Européenne compte 27 pays membres depuis le Brexit (départ du Royaume-Uni) en 2020."
        },
        {
          text: "Quelle est la monnaie commune de la zone euro ?",
          options: ["Le dollar","L'euro (€)","La livre sterling","Le franc"],
          answer: 1,
          explication: "L'euro (€) est la monnaie commune de 20 pays de l'UE. Il a remplacé le franc français en 2002."
        },
        {
          text: "Combien y a-t-il d'étoiles sur le drapeau européen ?",
          options: ["10","12","15","27"],
          answer: 1,
          explication: "Le drapeau européen possède 12 étoiles dorées en cercle sur fond bleu. Ce nombre est SYMBOLIQUE (perfection, unité) et ne dépend pas du nombre de pays."
        },
        {
          text: "Où siège le Parlement Européen ?",
          options: ["À Paris","À Strasbourg (et Bruxelles)","À Berlin","À Rome"],
          answer: 1,
          explication: "Le Parlement Européen siège à Strasbourg (France) pour ses sessions plénières et à Bruxelles (Belgique) pour les commissions."
        },
        {
          text: "Quelle est la mission principale de l'Union Européenne depuis sa création ?",
          options: ["Conquérir d'autres continents","Construire la paix et la coopération économique entre pays européens","Imposer une langue commune","Créer une armée européenne"],
          answer: 1,
          explication: "L'UE est née (Traité de Rome, 1957) après les guerres mondiales pour garantir la paix et la prospérité par la coopération économique."
        },
        {
          text: "Quel pays a quitté l'Union Européenne en 2020 (le « Brexit ») ?",
          options: ["L'Allemagne","Le Royaume-Uni","L'Espagne","La Pologne"],
          answer: 1,
          explication: "Le Royaume-Uni a quitté l'UE en 2020 : c'est le « Brexit » (British + exit). L'UE est ensuite passée à 27 membres."
        },
        {
          text: "Quelle est la couleur du fond du drapeau européen ?",
          options: ["Rouge","Bleu","Vert","Blanc"],
          answer: 1,
          explication: "Le drapeau européen présente 12 étoiles dorées disposées en cercle sur un fond bleu."
        },
        {
          text: "Citée comme « capitale de l'Europe », quelle ville accueille de nombreuses institutions européennes ?",
          hint: "C'est la capitale de la Belgique.",
          options: ["Bruxelles","Madrid","Vienne","Lisbonne"],
          answer: 0,
          explication: "Bruxelles (Belgique) abrite la Commission européenne et de nombreuses institutions : on la surnomme « capitale de l'Europe »."
        },
        {
          text: "Grâce à l'espace Schengen, que peuvent faire les habitants de nombreux pays de l'UE ?",
          options: ["Voyager entre ces pays sans contrôle de passeport à la frontière","Voter aux États-Unis","Utiliser une langue unique obligatoire","Payer moins d'impôts partout"],
          answer: 0,
          explication: "L'espace Schengen permet de circuler librement entre les pays membres, sans contrôle systématique aux frontières intérieures."
        },
        {
          text: "Combien d'États membres compte l'Union Européenne après le Brexit ?",
          options: ["25","27","28","30"],
          answer: 1,
          explication: "Depuis le départ du Royaume-Uni en 2020, l'Union Européenne compte 27 États membres."
        }
      ]
    }
  ]
};
