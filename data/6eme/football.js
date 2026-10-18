/* Matière : Culture foot ⚽ (6ème)
   10 thèmes × 10 questions = 100 questions
   Principe éditorial : uniquement des faits stables (règles, histoire, palmarès
   historiques, stades). Pas de question sur un joueur « actuellement » dans tel
   club ni sur un classement susceptible de changer. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["football"] = {
  id: "football",
  name: "Culture foot",
  emoji: "⚽",
  desc: "Règles, histoire, stades, légendes et vocabulaire",
  topics: [
    {
      id: "regles",
      name: "Les règles du jeu",
      emoji: "📜",
      desc: "Joueurs, durée, hors-jeu, cartons, penalty",
      questions: [
        {
          text: "Combien de joueurs une équipe de football aligne-t-elle sur le terrain, gardien de but compris ?",
          options: ["9", "10", "11", "12"],
          answer: 2,
          hint: "Le gardien est compté dans ce nombre.",
          explication: "Une équipe est composée de 11 joueurs sur le terrain : 10 joueurs de champ et 1 gardien de but."
        },
        {
          text: "Combien de temps dure un match de football, sans les prolongations ?",
          options: ["2 × 30 minutes", "2 × 40 minutes", "2 × 45 minutes", "2 × 50 minutes"],
          answer: 2,
          hint: "Il y a deux mi-temps, séparées par une pause.",
          explication: "Un match dure 90 minutes : deux mi-temps de 45 minutes. L'arbitre ajoute parfois quelques minutes de temps additionnel."
        },
        {
          type: "vrai_faux",
          text: "Un joueur de champ a le droit de toucher volontairement le ballon avec la main.",
          answer: 1,
          hint: "Pense à la célèbre « main » qui fait siffler l'arbitre.",
          explication: "FAUX. Seul le gardien de but peut prendre le ballon à la main, et uniquement dans sa surface de réparation. Pour les autres joueurs, c'est une faute."
        },
        {
          text: "Un joueur est hors-jeu quand, au moment de la passe, il se trouve…",
          options: [
            "plus près du but adverse que le ballon et l'avant-dernier adversaire",
            "plus près de son propre but que le ballon et le gardien adverse",
            "dans la surface de réparation, quelle que soit la situation du ballon",
            "à moins de dix mètres du gardien de l'équipe adverse"
          ],
          answer: 0,
          hint: "Le hors-jeu concerne un attaquant qui est trop avancé par rapport aux défenseurs.",
          explication: "Un attaquant est hors-jeu s'il est plus près de la ligne de but adverse que le ballon et que l'avant-dernier défenseur au moment où on lui passe la balle. Il ne peut pas être hors-jeu dans sa propre moitié de terrain."
        },
        {
          text: "Que se passe-t-il quand l'arbitre montre un carton rouge à un joueur ?",
          options: [
            "Il est exclu et son équipe ne peut pas le remplacer",
            "Il doit sortir cinq minutes puis revenir jouer",
            "Il reçoit un simple avertissement à voix haute",
            "L'équipe adverse marque un but automatique"
          ],
          answer: 0,
          hint: "C'est la sanction la plus sévère que l'arbitre puisse donner à un joueur.",
          explication: "Le carton rouge exclut définitivement le joueur du match. Son équipe doit finir la rencontre à dix, sans pouvoir le remplacer."
        },
        {
          text: "Un joueur reçoit un deuxième carton jaune dans le même match. Que se passe-t-il ?",
          options: [
            "Il est exclu, comme avec un carton rouge",
            "Il peut continuer à jouer normalement",
            "Il est remplacé au bout de dix minutes",
            "L'équipe adverse obtient un penalty"
          ],
          answer: 0,
          hint: "Deux avertissements dans un même match, c'est un de trop.",
          explication: "Deux cartons jaunes dans le même match valent un carton rouge : le joueur est exclu."
        },
        {
          text: "À quelle distance du but est placé le point de penalty ?",
          options: ["7 mètres", "9 mètres", "11 mètres", "16 mètres"],
          answer: 2,
          hint: "C'est un peu plus de dix mètres.",
          explication: "Le point de penalty est situé à 11 mètres du but. Lors d'un penalty, les autres joueurs doivent attendre en dehors de la surface."
        },
        {
          type: "vrai_faux",
          text: "Si un joueur lance le ballon à la main depuis la ligne de touche directement dans le but adverse, le but est accordé.",
          answer: 1,
          hint: "Cette remise en jeu a une règle particulière : on ne peut pas marquer directement.",
          explication: "FAUX. Un but ne peut pas être marqué directement sur une rentrée à la main. Le jeu reprend alors par un coup de pied de but pour l'équipe adverse."
        },
        {
          type: "qcm",
          text: "Sur quelles remises en jeu un joueur ne peut-il pas être signalé hors-jeu ? (plusieurs réponses)",
          options: ["la rentrée à la main", "le corner", "le coup de pied de but", "le coup franc direct"],
          answer: [0, 1, 2],
          hint: "Il y a trois remises en jeu où le hors-jeu n'existe pas.",
          explication: "Il n'y a pas de hors-jeu sur une rentrée à la main, un corner ou un coup de pied de but. En revanche, il peut y en avoir sur un coup franc."
        },
        {
          type: "texte",
          text: "Comment s'appelle la remise en jeu à la main quand le ballon est sorti sur le côté du terrain ?",
          answer: ["touche", "la touche", "rentrée", "rentree", "la rentrée", "rentrée de touche", "rentree de touche"],
          hint: "On l'appelle comme la ligne sur laquelle le ballon est sorti.",
          explication: "C'est la touche (ou rentrée de touche). Le joueur lance le ballon à deux mains, par-dessus sa tête, en gardant les deux pieds au sol."
        }
      ]
    },
    {
      id: "terrain",
      name: "Terrain, but et arbitrage",
      emoji: "🥅",
      desc: "Dimensions, lignes, arbitres, assistance vidéo",
      questions: [
        {
          text: "Quelle est la hauteur réglementaire d'un but de football ?",
          options: ["2 mètres", "2,44 mètres", "3 mètres", "3,50 mètres"],
          answer: 1,
          hint: "Le but est bien plus haut qu'un adulte debout, mais moins haut que trois mètres.",
          explication: "Un but mesure 2,44 m de haut et 7,32 m de large. Ces mesures viennent d'anciennes unités anglaises : 8 yards de large et 8 pieds de haut."
        },
        {
          text: "À quelle distance minimale du ballon le mur doit-il se placer sur un coup franc ?",
          options: ["5 mètres", "7,50 mètres", "9,15 mètres", "11 mètres"],
          answer: 2,
          hint: "C'est la même distance que le rayon du rond central.",
          explication: "Les adversaires doivent se placer à au moins 9,15 mètres du ballon (c'est 10 yards en unités anglaises)."
        },
        {
          type: "vrai_faux",
          text: "Le gardien de but doit porter un maillot de couleur différente de celle des autres joueurs et des arbitres.",
          answer: 0,
          hint: "Il doit être facile à reconnaître sur le terrain.",
          explication: "VRAI. Le gardien porte une couleur différente pour qu'on le distingue facilement, puisqu'il est le seul à pouvoir utiliser les mains."
        },
        {
          text: "Que signifie le sigle « VAR » au football ?",
          options: [
            "L'assistance vidéo à l'arbitrage",
            "Le tableau qui indique le temps additionnel",
            "Le sifflet électronique de l'arbitre",
            "La caméra qui suit le ballon à la télé"
          ],
          answer: 0,
          hint: "Des arbitres regardent des images dans une salle vidéo pour aider l'arbitre du terrain.",
          explication: "VAR veut dire Video Assistant Referee, soit « arbitre assistant vidéo ». Il aide l'arbitre à revoir les buts, les penaltys et les cartons rouges."
        },
        {
          text: "Comment s'appelle la barre horizontale en haut du but ?",
          options: ["la transversale", "le poteau de coin", "le filet du but", "la ligne de fond"],
          answer: 0,
          hint: "Elle relie les deux poteaux, de façon « transversale ».",
          explication: "La barre horizontale s'appelle la transversale. Les deux barres verticales sont les poteaux."
        },
        {
          text: "Que fait l'arbitre assistant, placé sur la ligne de touche, quand il repère un hors-jeu ?",
          options: [
            "Il lève son drapeau",
            "Il siffle trois fois très fort",
            "Il agite un maillot rouge",
            "Il court jusqu'au rond central"
          ],
          answer: 0,
          hint: "Il utilise un objet tenu à la main, de couleur vive.",
          explication: "L'arbitre assistant lève son drapeau pour signaler un hors-jeu à l'arbitre central, qui décide ensuite de siffler."
        },
        {
          type: "vrai_faux",
          text: "Pour qu'un but soit accordé, le ballon doit avoir entièrement franchi la ligne de but, entre les poteaux et sous la transversale.",
          answer: 0,
          hint: "Si le ballon n'a franchi qu'une partie de la ligne, le jeu continue.",
          explication: "VRAI. Tout le ballon doit avoir passé la ligne. S'il la touche seulement, il n'y a pas but."
        },
        {
          text: "Où est placé le ballon au moment du coup d'envoi d'un match ?",
          options: [
            "au point central du terrain",
            "dans la surface de réparation",
            "sur la ligne de touche",
            "dans un coin du terrain"
          ],
          answer: 0,
          hint: "C'est l'endroit où se trouve le rond que l'on voit au milieu du terrain.",
          explication: "Le coup d'envoi se joue depuis le point central, au milieu du terrain. Il est aussi donné après chaque but."
        },
        {
          type: "texte",
          text: "Combien d'arbitres assistants (juges de touche) aident habituellement l'arbitre central ? (écris un nombre)",
          answer: ["2", "deux"],
          hint: "Il y en a un de chaque côté du terrain.",
          explication: "Il y a deux arbitres assistants, un sur chaque ligne de touche. Ils aident l'arbitre central pour le hors-jeu et les sorties de ballon."
        },
        {
          type: "qcm",
          text: "Quels éléments trouve-t-on sur un terrain de football réglementaire ? (plusieurs réponses)",
          options: ["un rond central", "deux surfaces de réparation", "un panier", "un point de penalty"],
          answer: [0, 1, 3],
          hint: "Un seul élément de la liste n'a rien à faire sur un terrain de foot.",
          explication: "Un terrain comporte un rond central, deux surfaces de réparation et deux points de penalty. Le panier, lui, appartient au basket !"
        }
      ]
    },
    {
      id: "postes",
      name: "Postes et tactique",
      emoji: "🧠",
      desc: "Défenseurs, milieux, attaquants, formations",
      questions: [
        {
          text: "Quel est le rôle principal d'un défenseur central ?",
          options: [
            "protéger son but face aux attaquants adverses",
            "marquer le maximum de buts à lui seul",
            "tirer tous les corners de l'équipe",
            "remplacer le gardien s'il est blessé"
          ],
          answer: 0,
          hint: "Son nom indique ce qu'il fait : il défend.",
          explication: "Le défenseur central protège la zone devant le but. Il gêne les attaquants et récupère le ballon."
        },
        {
          text: "Dans une équipe qui joue en 4-4-2, que représentent ces chiffres ?",
          options: [
            "4 défenseurs, 4 milieux et 2 attaquants",
            "4 attaquants, 4 milieux et 2 défenseurs",
            "4 milieux, 4 défenseurs et 2 gardiens",
            "4 remplaçants, 4 milieux et 2 buteurs"
          ],
          answer: 0,
          hint: "On lit la formation en partant de la défense vers l'attaque.",
          explication: "On lit toujours la formation de l'arrière vers l'avant : 4 défenseurs, 4 milieux, 2 attaquants. Le gardien n'est pas compté."
        },
        {
          text: "Dans une formation en 4-3-3, combien y a-t-il de joueurs de champ ?",
          options: ["9", "10", "11", "12"],
          answer: 1,
          hint: "Additionne les chiffres : le gardien n'y figure pas.",
          explication: "4 + 3 + 3 = 10 joueurs de champ. Avec le gardien de but, on arrive aux 11 joueurs de l'équipe."
        },
        {
          type: "vrai_faux",
          text: "Dans une formation en 4-4-2, le gardien de but est compris dans les chiffres.",
          answer: 1,
          hint: "Additionne 4 + 4 + 2 et compare avec le nombre de joueurs d'une équipe.",
          explication: "FAUX. 4 + 4 + 2 = 10 : ce sont les joueurs de champ. Le gardien est le onzième joueur."
        },
        {
          text: "Quel poste occupe traditionnellement le joueur qui porte le numéro 1 ?",
          options: ["gardien de but", "avant-centre", "milieu défensif", "latéral droit"],
          answer: 0,
          hint: "C'est le seul joueur qui peut utiliser ses mains dans sa surface.",
          explication: "Traditionnellement, le numéro 1 est le gardien de but. Aujourd'hui, les joueurs choisissent souvent leur propre numéro."
        },
        {
          text: "Que fait un latéral dans une équipe de football ?",
          options: [
            "Il défend sur un côté et monte aider l'attaque",
            "Il reste en permanence devant le but adverse",
            "Il remplace le gardien quand celui-ci sort",
            "Il tire uniquement les penaltys de l'équipe"
          ],
          answer: 0,
          hint: "Il joue sur le côté du terrain, près de la ligne de touche.",
          explication: "Le latéral défend sur le côté du terrain, mais il monte aussi pour centrer et aider ses attaquants."
        },
        {
          text: "Que veut dire « faire le pressing » ?",
          options: [
            "gêner l'adversaire pour lui reprendre le ballon",
            "reculer tous ensemble pour défendre devant le but",
            "tirer au but dès la première touche de balle",
            "changer de formation à chaque mi-temps"
          ],
          answer: 0,
          hint: "On met la pression sur l'adversaire qui a le ballon.",
          explication: "Faire le pressing, c'est presser l'adversaire dès qu'il a le ballon pour le récupérer rapidement, souvent loin de son propre but."
        },
        {
          text: "Quel joueur porte le brassard autour du bras pendant le match ?",
          options: ["le capitaine", "l'entraîneur", "l'arbitre", "le gardien remplaçant"],
          answer: 0,
          hint: "C'est le joueur qui représente l'équipe auprès de l'arbitre.",
          explication: "Le capitaine porte le brassard. Il parle à l'arbitre au nom de son équipe et fait le tirage au sort avant le match."
        },
        {
          type: "vrai_faux",
          text: "Un gardien de but peut marquer un but.",
          answer: 0,
          hint: "Pense à un penalty ou à un dégagement très long.",
          explication: "VRAI. C'est rare, mais des gardiens ont déjà marqué, sur penalty, sur coup franc ou en montant dans la surface adverse en fin de match."
        },
        {
          type: "qcm",
          text: "Quels joueurs sont des joueurs de champ ? (plusieurs réponses)",
          options: ["un défenseur", "un milieu de terrain", "un attaquant", "un gardien de but"],
          answer: [0, 1, 2],
          hint: "Les joueurs de champ sont tous les joueurs sauf un poste.",
          explication: "Défenseurs, milieux et attaquants sont des joueurs de champ. Le gardien de but a un statut à part, car il peut toucher le ballon à la main."
        }
      ]
    },
    {
      id: "cdm_histoire",
      name: "Histoire de la Coupe du monde",
      emoji: "🏆",
      desc: "Premières éditions, finales, grands moments",
      questions: [
        {
          text: "Dans quel pays a eu lieu la toute première Coupe du monde de football, en 1930 ?",
          options: ["le Brésil", "l'Uruguay", "l'Italie", "la France"],
          answer: 1,
          hint: "C'est un petit pays d'Amérique du Sud, qui a aussi gagné cette édition.",
          explication: "La première Coupe du monde s'est jouée en Uruguay en 1930, et l'Uruguay l'a remportée."
        },
        {
          text: "Quel Français a donné son nom au premier trophée de la Coupe du monde ?",
          options: ["Jules Rimet", "Michel Platini", "Pierre de Coubertin", "Raymond Kopa"],
          answer: 0,
          hint: "Il a été président de la FIFA et a lancé l'idée de la compétition.",
          explication: "Le trophée s'appelait la « Coupe Jules-Rimet », du nom du président de la FIFA qui a créé la Coupe du monde. Le Brésil l'a gardé après son troisième titre en 1970."
        },
        {
          text: "Tous les combien d'années a lieu la Coupe du monde de football masculine ?",
          options: ["2 ans", "3 ans", "4 ans", "5 ans"],
          answer: 2,
          hint: "C'est le même rythme que les Jeux olympiques d'été.",
          explication: "La Coupe du monde a lieu tous les 4 ans. Elle n'a pas été jouée en 1942 et 1946 à cause de la Seconde Guerre mondiale."
        },
        {
          text: "En quelle année l'équipe de France a-t-elle remporté sa première Coupe du monde ?",
          options: ["1984", "1998", "2006", "2018"],
          answer: 1,
          hint: "Elle a gagné chez elle, devant son public.",
          explication: "La France a gagné sa première Coupe du monde en 1998, à domicile, en battant le Brésil 3-0 en finale. Elle a gagné une deuxième fois en 2018."
        },
        {
          text: "Quelle équipe a battu la France en finale de la Coupe du monde 2022, aux tirs au but ?",
          options: ["l'Argentine", "le Brésil", "la Croatie", "l'Allemagne"],
          answer: 0,
          hint: "Son capitaine était Lionel Messi.",
          explication: "L'Argentine a gagné la finale 2022 aux tirs au but, après un match nul 3-3 prolongations comprises. C'était le troisième titre argentin."
        },
        {
          type: "vrai_faux",
          text: "En 1998, la finale de la Coupe du monde s'est jouée au Stade de France.",
          answer: 0,
          hint: "La France organisait cette Coupe du monde.",
          explication: "VRAI. La finale 1998 a eu lieu au Stade de France, à Saint-Denis. La France a battu le Brésil 3-0, avec deux buts de Zinédine Zidane."
        },
        {
          text: "Quel joueur français a marqué trois buts en finale de la Coupe du monde 2022 ?",
          options: ["Kylian Mbappé", "Antoine Griezmann", "Olivier Giroud", "Ousmane Dembélé"],
          answer: 0,
          hint: "C'était un triplé, un exploit rare en finale.",
          explication: "Kylian Mbappé a marqué un triplé en finale 2022. C'est un exploit rare : avant lui, seul l'Anglais Geoff Hurst l'avait fait en finale, en 1966."
        },
        {
          text: "Quel pays a organisé la Coupe du monde 2022, la première dans un pays arabe ?",
          options: ["le Qatar", "l'Arabie saoudite", "l'Égypte", "les Émirats arabes unis"],
          answer: 0,
          hint: "C'est un petit pays du Golfe, dont la capitale est Doha.",
          explication: "La Coupe du monde 2022 a eu lieu au Qatar. Pour éviter la chaleur, elle s'est jouée en novembre et décembre, et non en été."
        },
        {
          text: "Quel pays détient le record de victoires en Coupe du monde masculine ?",
          options: ["le Brésil", "l'Allemagne", "l'Italie", "l'Argentine"],
          answer: 0,
          hint: "Ce pays a gagné en 1958, 1962, 1970, 1994 et 2002.",
          explication: "Le Brésil est le pays le plus titré, avec 5 victoires en Coupe du monde masculine. Il est aussi le seul à avoir participé à toutes les éditions."
        },
        {
          type: "texte",
          text: "Quel était le nom de la mascotte de la Coupe du monde 1998 en France ? (c'était un coq)",
          answer: ["footix"],
          hint: "Son nom se termine par « ix », comme un célèbre petit Gaulois.",
          explication: "La mascotte de 1998 était Footix, un coq bleu. Le coq est aussi le symbole du football français."
        }
      ]
    },
    {
      id: "stades",
      name: "Stades et villes célèbres",
      emoji: "🏟️",
      desc: "Stades mythiques de France et d'Europe",
      questions: [
        {
          text: "Dans quelle ville se trouve le Stade de France ?",
          options: ["Paris", "Saint-Denis", "Lyon", "Marseille"],
          answer: 1,
          hint: "C'est une ville juste au nord de Paris.",
          explication: "Le Stade de France est situé à Saint-Denis, tout près de Paris. Il a été construit pour la Coupe du monde 1998."
        },
        {
          text: "Quel club joue ses matchs à domicile au Parc des Princes ?",
          options: ["le Paris Saint-Germain", "l'Olympique de Marseille", "l'Olympique Lyonnais", "l'AS Monaco"],
          answer: 0,
          hint: "Le stade se trouve dans la capitale.",
          explication: "Le Parc des Princes est le stade du Paris Saint-Germain, à Paris."
        },
        {
          text: "Le Stade Vélodrome est le stade de quelle ville ?",
          options: ["Marseille", "Lille", "Nantes", "Bordeaux"],
          answer: 0,
          hint: "C'est le stade d'un club célèbre du sud de la France, au bord de la Méditerranée.",
          explication: "Le Stade Vélodrome est celui de l'Olympique de Marseille. Ses supporters sont réputés pour l'ambiance."
        },
        {
          text: "Dans quel pays se trouve le Maracanã, stade célèbre pour ses finales de Coupe du monde ?",
          options: ["le Brésil", "l'Argentine", "le Mexique", "la Colombie"],
          answer: 0,
          hint: "Il se trouve à Rio de Janeiro.",
          explication: "Le Maracanã est à Rio de Janeiro, au Brésil. Il a accueilli la finale de la Coupe du monde en 1950 et en 2014."
        },
        {
          text: "Quel club joue au stade Santiago-Bernabéu ?",
          options: ["le Real Madrid", "le FC Barcelone", "l'Atlético de Madrid", "le FC Séville"],
          answer: 0,
          hint: "Le stade se trouve dans la capitale de l'Espagne.",
          explication: "Le stade Santiago-Bernabéu est celui du Real Madrid, à Madrid."
        },
        {
          text: "Old Trafford est le stade de quel club anglais ?",
          options: ["Manchester United", "Manchester City", "Tottenham Hotspur", "Newcastle United"],
          answer: 0,
          hint: "Ses joueurs jouent en rouge et on les surnomme les « Red Devils ».",
          explication: "Old Trafford est le stade de Manchester United. On le surnomme « le Théâtre des rêves »."
        },
        {
          text: "Dans quelle ville joue le Bayern, à l'Allianz Arena ?",
          options: ["Berlin", "Munich", "Hambourg", "Dortmund"],
          answer: 1,
          hint: "C'est une grande ville du sud de l'Allemagne.",
          explication: "Le Bayern joue à Munich, dans le sud de l'Allemagne. L'Allianz Arena est célèbre pour sa façade qui peut changer de couleur."
        },
        {
          type: "vrai_faux",
          text: "Anfield est le stade du club anglais de Liverpool.",
          answer: 0,
          hint: "C'est le stade où les supporters chantent leur célèbre chant « You'll Never Walk Alone ».",
          explication: "VRAI. Anfield est le stade de Liverpool. Avant chaque match, les supporters y chantent « You'll Never Walk Alone »."
        },
        {
          text: "Dans quelle ville se trouve le stade San Siro, où jouent le Milan AC et l'Inter ?",
          options: ["Rome", "Milan", "Turin", "Naples"],
          answer: 1,
          hint: "Cette ville donne son nom à l'un des clubs.",
          explication: "San Siro est à Milan, en Italie. C'est un des rares grands stades partagés par deux clubs rivaux."
        },
        {
          type: "qcm",
          text: "Quels stades se trouvent en France ? (plusieurs réponses)",
          options: ["le Parc des Princes", "le Groupama Stadium", "Anfield", "le Stade Vélodrome"],
          answer: [0, 1, 3],
          hint: "L'un de ces stades est en Angleterre.",
          explication: "Le Parc des Princes (Paris), le Groupama Stadium (près de Lyon) et le Stade Vélodrome (Marseille) sont en France. Anfield est à Liverpool, en Angleterre."
        }
      ]
    },
    {
      id: "foot_france",
      name: "Le football en France",
      emoji: "🇫🇷",
      desc: "Les Bleus, les clubs et les grands noms français",
      questions: [
        {
          text: "Quel club français a remporté la Ligue des champions en 1993 ?",
          options: ["l'Olympique de Marseille", "le Paris Saint-Germain", "l'Olympique Lyonnais", "l'AS Saint-Étienne"],
          answer: 0,
          hint: "C'est un club du sud de la France, qui joue au Vélodrome.",
          explication: "L'Olympique de Marseille a gagné la Ligue des champions en 1993, en battant le Milan AC en finale. Pendant longtemps, c'était le seul club français à l'avoir fait."
        },
        {
          text: "En 2025, quel club français a gagné la Ligue des champions pour la première fois de son histoire ?",
          options: ["le Paris Saint-Germain", "l'Olympique Lyonnais", "l'AS Saint-Étienne", "le Stade Rennais"],
          answer: 0,
          hint: "C'est un club de la capitale.",
          explication: "Le Paris Saint-Germain a remporté la Ligue des champions en 2025 en battant l'Inter Milan 5-0 en finale à Munich."
        },
        {
          text: "Quel est le surnom de l'équipe de France de football ?",
          options: ["les Bleus", "les Rouges", "les Verts", "les Lions"],
          answer: 0,
          hint: "C'est la couleur de leur maillot.",
          explication: "L'équipe de France s'appelle « les Bleus », à cause de la couleur de son maillot."
        },
        {
          text: "Quel animal figure sur le maillot de l'équipe de France ?",
          options: ["le coq", "l'aigle", "le lion", "l'ours"],
          answer: 0,
          hint: "C'est un animal qui chante le matin.",
          explication: "Le coq est l'emblème du football français. Il figure sur le maillot et il est devenu un symbole de la France."
        },
        {
          text: "Qui a été le premier Français à recevoir le Ballon d'Or, en 1958 ?",
          options: ["Raymond Kopa", "Michel Platini", "Just Fontaine", "Zinédine Zidane"],
          answer: 0,
          hint: "Il jouait au Stade de Reims puis au Real Madrid.",
          explication: "Raymond Kopa est le premier Français à avoir reçu le Ballon d'Or, en 1958."
        },
        {
          text: "Avec Michel Platini, en quelle année la France a-t-elle gagné le Championnat d'Europe (l'Euro) à domicile ?",
          options: ["1984", "1992", "2000", "2016"],
          answer: 0,
          hint: "C'était le premier grand titre de l'équipe de France.",
          explication: "La France a remporté l'Euro 1984 en France, avec Michel Platini comme meneur de jeu. C'était son premier grand titre. En 2016, la France a organisé l'Euro mais a perdu en finale."
        },
        {
          text: "Quel joueur français a marqué 13 buts lors de la Coupe du monde 1958, un record pour une seule édition ?",
          options: ["Just Fontaine", "Raymond Kopa", "Michel Platini", "Jean Tigana"],
          answer: 0,
          hint: "Son nom de famille est aussi le nom d'un point d'eau.",
          explication: "Just Fontaine a marqué 13 buts en 6 matchs lors de la Coupe du monde 1958. Ce record n'a jamais été battu pour une seule édition."
        },
        {
          type: "vrai_faux",
          text: "L'Olympique Lyonnais a été champion de France sept années de suite, entre 2002 et 2008.",
          answer: 0,
          hint: "C'est une série jamais vue dans le football français.",
          explication: "VRAI. L'Olympique Lyonnais a remporté sept titres de champion de France consécutifs, de 2002 à 2008."
        },
        {
          type: "texte",
          text: "Comment s'appelle le championnat de France de football masculin de première division ?",
          answer: ["ligue 1", "ligue1", "la ligue 1", "ligue un"],
          hint: "Son nom contient un chiffre.",
          explication: "Le championnat de première division s'appelle la Ligue 1. En dessous, il y a la Ligue 2."
        },
        {
          type: "qcm",
          text: "Quels joueurs ont reçu le Ballon d'Or ? (plusieurs réponses)",
          options: ["Michel Platini", "Raymond Kopa", "Karim Benzema", "Antoine Griezmann"],
          answer: [0, 1, 2],
          hint: "L'un de ces joueurs n'a jamais gagné ce trophée.",
          explication: "Michel Platini (trois fois, de 1983 à 1985), Raymond Kopa (1958) et Karim Benzema (2022) ont reçu le Ballon d'Or. Antoine Griezmann ne l'a jamais gagné."
        }
      ]
    },
    {
      id: "europe",
      name: "Compétitions européennes",
      emoji: "🌍",
      desc: "Ligue des champions, Euro, clubs européens",
      questions: [
        {
          text: "Quelle compétition réunit chaque année les meilleurs clubs européens ?",
          options: ["la Ligue des champions", "la Coupe du monde", "la Copa América", "la Coupe d'Afrique"],
          answer: 0,
          hint: "C'est la plus prestigieuse compétition de clubs d'Europe.",
          explication: "La Ligue des champions réunit chaque saison les meilleurs clubs européens. La finale a lieu en fin de saison."
        },
        {
          text: "Quel club détient le record de victoires en Ligue des champions et en Coupe d'Europe des clubs champions ?",
          options: ["le Real Madrid", "le FC Barcelone", "le Bayern Munich", "Manchester United"],
          answer: 0,
          hint: "C'est un club espagnol, de la capitale, célèbre pour ses maillots blancs.",
          explication: "Le Real Madrid est le club le plus titré dans cette compétition, avec beaucoup plus de victoires que n'importe quel autre club."
        },
        {
          text: "Quel pays a gagné l'Euro 2024 ?",
          options: ["l'Espagne", "l'Angleterre", "la France", "l'Italie"],
          answer: 0,
          hint: "La finale s'est jouée à Berlin et le vainqueur a gagné 2-1.",
          explication: "L'Espagne a remporté l'Euro 2024 en battant l'Angleterre 2-1 en finale à Berlin."
        },
        {
          text: "Quel pays a gagné l'Euro 2016, organisé en France ?",
          options: ["le Portugal", "la France", "l'Allemagne", "l'Italie"],
          answer: 0,
          hint: "Cristiano Ronaldo, blessé en finale, a vu son équipe gagner.",
          explication: "Le Portugal a battu la France 1-0 en finale après prolongations. C'était le premier titre du Portugal dans cette compétition."
        },
        {
          text: "Tous les combien d'années a lieu le Championnat d'Europe des nations (l'Euro) ?",
          options: ["2 ans", "3 ans", "4 ans", "5 ans"],
          answer: 2,
          hint: "C'est le même rythme que la Coupe du monde, mais décalé de deux ans.",
          explication: "L'Euro a lieu tous les 4 ans, deux ans après ou avant la Coupe du monde."
        },
        {
          text: "Dans quel pays s'est déroulé l'Euro 2024 ?",
          options: ["l'Allemagne", "la France", "l'Espagne", "la Pologne"],
          answer: 0,
          hint: "La finale a eu lieu dans la capitale de ce pays, à Berlin.",
          explication: "L'Euro 2024 s'est joué en Allemagne. La finale a eu lieu à Berlin."
        },
        {
          type: "vrai_faux",
          text: "La Ligue des champions s'appelait autrefois la « Coupe d'Europe des clubs champions ».",
          answer: 0,
          hint: "Son nom a changé en 1992.",
          explication: "VRAI. La compétition a été créée en 1955 sous le nom de Coupe d'Europe des clubs champions, puis a pris le nom de Ligue des champions en 1992."
        },
        {
          text: "Quel club anglais a gagné la Ligue des champions en 2005, après avoir perdu 3-0 à la mi-temps contre Milan ?",
          options: ["Liverpool", "Chelsea", "Manchester United", "Arsenal"],
          answer: 0,
          hint: "Cette finale est restée célèbre sous le nom de « miracle d'Istanbul ».",
          explication: "Liverpool est revenu de 0-3 à 3-3, puis a gagné aux tirs au but. On appelle cette finale « le miracle d'Istanbul »."
        },
        {
          type: "texte",
          text: "Comment s'appelle la deuxième grande compétition européenne de clubs, après la Ligue des champions ? (elle commence par « Ligue »)",
          answer: ["ligue europa", "la ligue europa", "europa league", "ligue europa league"],
          hint: "Son nom rappelle le nom du continent.",
          explication: "C'est la Ligue Europa (Europa League en anglais). Elle réunit des clubs qui ne sont pas qualifiés pour la Ligue des champions."
        },
        {
          type: "qcm",
          text: "Quels clubs masculins ont déjà gagné au moins une Ligue des champions ? (plusieurs réponses)",
          options: ["le Real Madrid", "l'Olympique de Marseille", "le Paris Saint-Germain", "l'Olympique Lyonnais"],
          answer: [0, 1, 2],
          hint: "Un seul de ces clubs n'a jamais gagné la compétition chez les hommes.",
          explication: "Le Real Madrid, l'OM (1993) et le PSG (2025) ont gagné la Ligue des champions masculine. L'Olympique Lyonnais n'y est jamais parvenu, mais ses féminines l'ont gagnée plusieurs fois."
        }
      ]
    },
    {
      id: "legendes",
      name: "Légendes et Ballon d'Or",
      emoji: "⭐",
      desc: "Pelé, Maradona, Messi et les autres",
      questions: [
        {
          text: "Quel footballeur brésilien a gagné trois Coupes du monde, en 1958, 1962 et 1970 ?",
          options: ["Pelé", "Ronaldo", "Neymar", "Garrincha"],
          answer: 0,
          hint: "On le surnomme « O Rei », le roi.",
          explication: "Pelé est le seul joueur à avoir gagné trois Coupes du monde. Il avait 17 ans lors de son premier titre en 1958."
        },
        {
          text: "De quel pays est Cristiano Ronaldo ?",
          options: ["le Portugal", "l'Espagne", "le Brésil", "la Pologne"],
          answer: 0,
          hint: "Il a gagné l'Euro 2016 avec ce pays.",
          explication: "Cristiano Ronaldo est portugais. Il a gagné l'Euro 2016 avec le Portugal et plusieurs Ballons d'Or."
        },
        {
          text: "Quel joueur a remporté le plus de Ballons d'Or masculins ?",
          options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
          answer: 0,
          hint: "Il est argentin et a gagné la Coupe du monde 2022.",
          explication: "Lionel Messi détient le record avec 8 Ballons d'Or. Cristiano Ronaldo en compte 5."
        },
        {
          text: "Quel gardien soviétique est le seul gardien de but à avoir remporté le Ballon d'Or, en 1963 ?",
          options: ["Lev Yachine", "Gianluigi Buffon", "Manuel Neuer", "Fabien Barthez"],
          answer: 0,
          hint: "On le surnommait « l'Araignée noire ».",
          explication: "Lev Yachine est resté le seul gardien de but à avoir reçu le Ballon d'Or. On l'appelait « l'Araignée noire » à cause de son maillot noir."
        },
        {
          text: "Quel joueur néerlandais, qui portait le numéro 14, est le symbole du « football total » ?",
          options: ["Johan Cruyff", "Marco van Basten", "Ruud Gullit", "Dennis Bergkamp"],
          answer: 0,
          hint: "Il a aussi joué et entraîné au FC Barcelone.",
          explication: "Johan Cruyff est le symbole du « football total », un jeu où tous les joueurs peuvent changer de poste. Il a porté le numéro 14, très rare pour une star."
        },
        {
          text: "Quel joueur a marqué la célèbre « main de Dieu » lors de la Coupe du monde 1986 ?",
          options: ["Diego Maradona", "Pelé", "Lionel Messi", "Roberto Baggio"],
          answer: 0,
          hint: "Il a gagné cette Coupe du monde avec l'Argentine.",
          explication: "Diego Maradona a marqué avec la main, sans que l'arbitre le voie, contre l'Angleterre en 1986. Il a ensuite marqué un second but extraordinaire dans le même match."
        },
        {
          text: "Zinédine Zidane a marqué deux buts de la tête en finale de la Coupe du monde 1998 contre quelle équipe ?",
          options: ["le Brésil", "l'Italie", "la Croatie", "l'Allemagne"],
          answer: 0,
          hint: "L'équipe était la plus titrée de l'histoire.",
          explication: "Zidane a marqué deux buts de la tête sur corner contre le Brésil. La France a gagné 3-0, avec un dernier but d'Emmanuel Petit."
        },
        {
          type: "vrai_faux",
          text: "Lionel Messi a gagné la Coupe du monde avec l'Argentine en 2022.",
          answer: 0,
          hint: "Il l'a remportée en battant la France en finale.",
          explication: "VRAI. Messi a gagné la Coupe du monde 2022 avec l'Argentine, après une finale très disputée contre la France."
        },
        {
          type: "texte",
          text: "Quel capitaine de l'équipe de France a soulevé la Coupe du monde en 1998 ? (donne son nom de famille)",
          answer: ["deschamps", "didier deschamps"],
          hint: "Il est ensuite devenu entraîneur de l'équipe de France.",
          explication: "Didier Deschamps était capitaine des Bleus en 1998. Il est ensuite devenu l'entraîneur qui a mené la France au titre en 2018."
        },
        {
          type: "qcm",
          text: "Quels joueurs ont gagné la Coupe du monde 2018 avec l'équipe de France ? (plusieurs réponses)",
          options: ["Kylian Mbappé", "Antoine Griezmann", "Karim Benzema", "Paul Pogba"],
          answer: [0, 1, 3],
          hint: "L'un de ces joueurs ne faisait pas partie du groupe en 2018.",
          explication: "Mbappé, Griezmann et Pogba étaient dans l'équipe championne du monde 2018. Karim Benzema n'avait pas été sélectionné."
        }
      ]
    },
    {
      id: "feminin",
      name: "Football féminin",
      emoji: "👩",
      desc: "Coupe du monde, Ballon d'Or et grandes joueuses",
      questions: [
        {
          text: "Dans quel pays a eu lieu la première Coupe du monde féminine de football, en 1991 ?",
          options: ["la Chine", "les États-Unis", "la Suède", "le Japon"],
          answer: 0,
          hint: "C'est le pays le plus peuplé d'Asie.",
          explication: "La première Coupe du monde féminine a eu lieu en Chine en 1991, et les États-Unis l'ont gagnée."
        },
        {
          text: "Quel pays a gagné la Coupe du monde féminine en 2023 ?",
          options: ["l'Espagne", "l'Angleterre", "les États-Unis", "l'Allemagne"],
          answer: 0,
          hint: "La finale s'est jouée à Sydney, face à l'Angleterre.",
          explication: "L'Espagne a gagné la Coupe du monde féminine 2023 en battant l'Angleterre 1-0 en finale. C'était son premier titre mondial."
        },
        {
          text: "Quel pays a gagné le plus de Coupes du monde féminines jusqu'en 2023 ?",
          options: ["les États-Unis", "l'Allemagne", "le Japon", "la Norvège"],
          answer: 0,
          hint: "Ce pays a gagné en 1991, 1999, 2015 et 2019.",
          explication: "Les États-Unis sont le pays le plus titré, avec 4 victoires en Coupe du monde féminine jusqu'en 2019."
        },
        {
          text: "Quel club français a remporté huit fois la Ligue des champions féminine entre 2011 et 2022 ?",
          options: ["l'Olympique Lyonnais", "le Paris Saint-Germain", "Montpellier HSC", "l'AS Saint-Étienne"],
          answer: 0,
          hint: "Ce club a dominé le football féminin européen pendant des années.",
          explication: "L'Olympique Lyonnais a gagné huit fois la Ligue des champions féminine entre 2011 et 2022. C'est le club le plus titré de la compétition."
        },
        {
          text: "Marta, l'une des plus grandes joueuses de l'histoire, vient de quel pays ?",
          options: ["le Brésil", "la Norvège", "la Suède", "les États-Unis"],
          answer: 0,
          hint: "C'est le même pays que Pelé.",
          explication: "Marta est brésilienne. Elle a reçu le prix de meilleure joueuse du monde six fois et détient le record de buts en Coupe du monde féminine."
        },
        {
          text: "Quelle Espagnole a reçu le Ballon d'Or féminin en 2023 puis en 2024 ?",
          options: ["Aitana Bonmatí", "Alexia Putellas", "Jenni Hermoso", "Ada Hegerberg"],
          answer: 0,
          hint: "Elle joue au FC Barcelone et a gagné la Coupe du monde 2023.",
          explication: "Aitana Bonmatí a reçu le Ballon d'Or féminin en 2023 et en 2024. Sa coéquipière Alexia Putellas l'avait gagné en 2021 et 2022."
        },
        {
          text: "Qui a été la première joueuse à recevoir le Ballon d'Or féminin, en 2018 ?",
          options: ["Ada Hegerberg", "Megan Rapinoe", "Marta", "Wendie Renard"],
          answer: 0,
          hint: "Elle est norvégienne et jouait à l'Olympique Lyonnais.",
          explication: "La Norvégienne Ada Hegerberg est la première lauréate du Ballon d'Or féminin, en 2018."
        },
        {
          type: "vrai_faux",
          text: "Le Ballon d'Or féminin existe depuis 2018.",
          answer: 0,
          hint: "Le Ballon d'Or masculin, lui, existe depuis 1956.",
          explication: "VRAI. Le Ballon d'Or féminin a été créé en 2018, alors que le Ballon d'Or masculin existe depuis 1956."
        },
        {
          type: "vrai_faux",
          text: "La Coupe du monde féminine de football a lieu tous les quatre ans.",
          answer: 0,
          hint: "C'est le même rythme que la Coupe du monde masculine.",
          explication: "VRAI. La Coupe du monde féminine a lieu tous les quatre ans, comme celle des hommes, mais pas la même année."
        },
        {
          type: "texte",
          text: "Comment surnomme-t-on l'équipe de France féminine de football ? (« les … » avec un mot au féminin)",
          answer: ["les bleues", "bleues", "les bleues de france"],
          hint: "C'est le même mot que pour les garçons, accordé au féminin.",
          explication: "L'équipe de France féminine s'appelle « les Bleues », comme l'équipe masculine s'appelle « les Bleus »."
        }
      ]
    },
    {
      id: "vocabulaire",
      name: "Le vocabulaire du foot",
      emoji: "💬",
      desc: "Mots et expressions que tu entends à la télé",
      questions: [
        {
          text: "Que signifie « faire un doublé » ?",
          options: [
            "marquer deux buts dans le même match",
            "marquer un but de chaque pied",
            "gagner deux matchs de suite",
            "porter deux maillots à la fois"
          ],
          answer: 0,
          hint: "Pense au mot « double ».",
          explication: "Faire un doublé, c'est marquer deux buts dans un même match."
        },
        {
          text: "Que signifie « hat-trick » ?",
          options: [
            "marquer trois buts dans le même match",
            "marquer un but de la tête, du pied et du genou",
            "perdre trois matchs d'affilée",
            "recevoir trois cartons jaunes"
          ],
          answer: 0,
          hint: "Ce mot vient de l'anglais et parle d'un chapeau.",
          explication: "Un hat-trick, c'est trois buts marqués par le même joueur dans le même match. En anglais, « hat » veut dire chapeau."
        },
        {
          text: "Qu'appelle-t-on un « but contre son camp » ?",
          options: [
            "un but marqué par erreur dans son propre but",
            "un but refusé pour cause de hors-jeu",
            "un but marqué après la fin du match",
            "un but marqué par le gardien adverse"
          ],
          answer: 0,
          hint: "Le but compte pour l'équipe adverse.",
          explication: "Un but contre son camp est marqué par un joueur dans son propre but. Le but est accordé à l'équipe adverse."
        },
        {
          text: "Qu'appelle-t-on la « lucarne » au football ?",
          options: [
            "l'angle entre un poteau et la barre",
            "le bas du filet, près du gardien",
            "le point où l'arbitre place le ballon",
            "la zone devant le banc de touche"
          ],
          answer: 0,
          hint: "C'est l'endroit où le gardien a le plus de mal à arrêter le ballon.",
          explication: "La lucarne est l'angle supérieur du but, entre le poteau et la transversale. C'est l'endroit le plus difficile à défendre pour un gardien."
        },
        {
          text: "Quand un joueur passe le ballon entre les jambes d'un adversaire, on appelle cela…",
          options: ["un petit pont", "une talonnade", "une chandelle", "un tacle"],
          answer: 0,
          hint: "Le ballon passe sous une sorte de « pont » formé par les jambes.",
          explication: "Faire un petit pont, c'est faire passer le ballon entre les jambes de l'adversaire. C'est une belle manière de le dribbler."
        },
        {
          text: "Comment s'appelle une frappe qui passe doucement au-dessus du gardien ?",
          options: ["un lob", "un tacle", "un corner", "un dribble"],
          answer: 0,
          hint: "Le ballon décrit une courbe en hauteur.",
          explication: "Un lob est un tir en hauteur qui passe au-dessus du gardien avancé, avant de retomber dans le but."
        },
        {
          text: "Dans un match à élimination directe, que se passe-t-il si le score est toujours nul après les prolongations ?",
          options: [
            "une séance de tirs au but",
            "un nouveau match le lendemain",
            "un tirage au sort avec une pièce",
            "la plus jeune équipe est déclarée gagnante"
          ],
          answer: 0,
          hint: "Chaque équipe tire à tour de rôle, face au gardien.",
          explication: "Si le score est toujours nul, on départage les équipes avec les tirs au but : chaque équipe tire à tour de rôle, cinq tirs d'abord, puis un à un en cas d'égalité."
        },
        {
          text: "Combien de temps durent les prolongations d'un match de football ?",
          options: ["2 × 10 minutes", "2 × 15 minutes", "2 × 20 minutes", "30 minutes d'affilée"],
          answer: 1,
          hint: "Il y a deux périodes, et la durée totale fait une demi-heure.",
          explication: "Les prolongations durent 2 × 15 minutes. Les équipes changent de côté entre les deux périodes."
        },
        {
          type: "vrai_faux",
          text: "Un penalty « à la Panenka » consiste à tirer en douceur, en lob, au milieu du but.",
          answer: 0,
          hint: "Ce nom vient d'un joueur tchèque qui a gagné une finale avec ce tir.",
          explication: "VRAI. Antonín Panenka a inventé ce geste en 1976, en finale de l'Euro. Le gardien plonge sur le côté, et le ballon arrive doucement au centre."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on le geste de frapper le ballon avec le talon, vers l'arrière ? (« une … »)",
          answer: ["talonnade", "une talonnade"],
          hint: "Le nom vient d'une partie du pied.",
          explication: "Une talonnade est une passe ou un contrôle fait avec le talon. C'est un geste technique spectaculaire."
        }
      ]
    }
  ]
};
