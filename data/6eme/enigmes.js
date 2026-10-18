/* Matière : Énigmes 🧩 (6ème)
   10 thèmes × 10 questions = 100 questions
   Principe éditorial : chaque énigme n'a qu'UNE réponse défendable.
   Les réponses numériques à taper acceptent les variantes (chiffres, lettres).
   Les indices aident à raisonner sans donner la réponse. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["enigmes"] = {
  id: "enigmes",
  name: "Énigmes",
  emoji: "🧩",
  desc: "Logique, devinettes et casse-têtes pour faire chauffer ton cerveau",
  topics: [
    {
      id: "logique",
      name: "Logique et déduction",
      emoji: "🕵️",
      desc: "Déduis la réponse à partir des indices",
      questions: [
        {
          text: "Léa est plus grande que Tom. Tom est plus grand que Sacha. Qui est la plus petite personne ?",
          options: ["Léa", "Tom", "Sacha", "On ne peut pas savoir"],
          answer: 2,
          hint: "Range les trois enfants du plus grand au plus petit.",
          explication: "Léa est plus grande que Tom, qui est plus grand que Sacha. Sacha est donc la plus petite des trois."
        },
        {
          text: "Dans une course, tu dépasses le coureur qui est en deuxième position. Dans quelle position es-tu maintenant ?",
          options: ["premier", "deuxième", "troisième", "dernier"],
          answer: 1,
          hint: "Tu prends la place de celui que tu viens de dépasser.",
          explication: "Si tu dépasses le deuxième, tu prends sa place : tu es deuxième. Pour être premier, il faudrait dépasser aussi celui qui est devant."
        },
        {
          type: "vrai_faux",
          text: "Tous les chats sont des animaux. Félix est un chat. Donc Félix est un animal.",
          answer: 0,
          hint: "Si un groupe est inclus dans un plus grand groupe, ses membres aussi.",
          explication: "VRAI. Les chats font partie des animaux, donc Félix, qui est un chat, est forcément un animal."
        },
        {
          text: "Ali, Bao et Chloé portent chacun un tee-shirt d'une couleur différente : rouge, bleu ou vert. Ali ne porte ni rouge ni vert. Bao ne porte pas de rouge. Quelle couleur porte Chloé ?",
          options: ["rouge", "bleu", "vert", "on ne peut pas savoir"],
          answer: 0,
          hint: "Commence par Ali : il ne reste qu'une couleur possible pour lui.",
          explication: "Ali porte du bleu. Bao ne porte ni rouge ni bleu, donc il porte du vert. Il reste le rouge pour Chloé."
        },
        {
          type: "texte",
          text: "Je suis un nombre pair, plus grand que 20 et plus petit que 25. Je suis aussi un multiple de 3. Quel nombre suis-je ?",
          answer: ["24", "vingt-quatre", "vingt quatre"],
          hint: "Liste d'abord les nombres pairs entre 20 et 25.",
          explication: "Les nombres pairs entre 20 et 25 sont 22 et 24. Seul 24 est un multiple de 3, car 3 × 8 = 24."
        },
        {
          text: "Marie dit : « Mon frère a deux sœurs. » Combien Marie a-t-elle de sœurs ?",
          options: ["0", "1", "2", "3"],
          answer: 1,
          hint: "Marie fait partie des sœurs de son frère.",
          explication: "Le frère de Marie a deux sœurs : Marie et une autre fille. Marie a donc une seule sœur."
        },
        {
          text: "Avant-hier, nous étions mercredi. Quel jour serons-nous demain ?",
          options: ["jeudi", "vendredi", "samedi", "dimanche"],
          answer: 2,
          hint: "Cherche d'abord quel jour nous sommes aujourd'hui.",
          explication: "Avant-hier, mercredi. Hier, jeudi. Aujourd'hui, vendredi. Demain, samedi."
        },
        {
          type: "qcm",
          text: "Quels nombres sont à la fois pairs et multiples de 5 ? (plusieurs réponses)",
          options: ["10", "15", "20", "25"],
          answer: [0, 2],
          hint: "Un nombre pair se termine par 0, 2, 4, 6 ou 8.",
          explication: "10 et 20 sont pairs et multiples de 5. 15 et 25 sont des multiples de 5, mais ils sont impairs."
        },
        {
          text: "Dans une file d'attente, Hugo est 4e en comptant depuis le début et 5e en comptant depuis la fin. Combien y a-t-il de personnes dans la file ?",
          options: ["7", "8", "9", "10"],
          answer: 1,
          hint: "Attention à ne pas compter Hugo deux fois.",
          explication: "Il y a 3 personnes devant Hugo, Hugo lui-même, et 4 personnes derrière lui. 3 + 1 + 4 = 8."
        },
        {
          type: "texte",
          text: "Le père de Paul a trois fils : Lundi, Mardi et… comment s'appelle le troisième ?",
          answer: ["paul"],
          hint: "Relis le début de la phrase.",
          explication: "Le père de Paul a trois fils, dont Paul lui-même. Le troisième fils s'appelle donc Paul !"
        }
      ]
    },
    {
      id: "suites",
      name: "Suites de nombres et de lettres",
      emoji: "🔢",
      desc: "Trouve la règle et complète la suite",
      questions: [
        {
          text: "Complète la suite : 3, 6, 12, 24, …",
          options: ["30", "36", "48", "96"],
          answer: 2,
          hint: "Regarde ce qui se passe d'un nombre au suivant : on ne fait pas toujours « + ».",
          explication: "On multiplie par 2 à chaque fois. 24 × 2 = 48."
        },
        {
          text: "Complète la suite : 1, 4, 9, 16, 25, …",
          options: ["30", "34", "36", "49"],
          answer: 2,
          hint: "Ce sont des nombres que l'on obtient en multipliant un nombre par lui-même.",
          explication: "Ce sont les carrés : 1×1, 2×2, 3×3, 4×4, 5×5. Le suivant est 6×6 = 36."
        },
        {
          type: "texte",
          text: "Complète la suite (écris un nombre) : 1, 1, 2, 3, 5, 8, 13, …",
          answer: ["21", "vingt et un", "vingt-et-un"],
          hint: "Additionne les deux nombres précédents.",
          explication: "Chaque nombre est la somme des deux précédents : 8 + 13 = 21. C'est la célèbre suite de Fibonacci."
        },
        {
          text: "Complète la suite : 100, 91, 82, 73, …",
          options: ["62", "63", "64", "65"],
          answer: 2,
          hint: "Calcule l'écart entre deux nombres qui se suivent.",
          explication: "On enlève 9 à chaque fois. 73 − 9 = 64."
        },
        {
          text: "Complète la suite : 1, 2, 4, 7, 11, 16, …",
          options: ["20", "21", "22", "23"],
          answer: 2,
          hint: "Les écarts entre les nombres augmentent de 1 à chaque fois.",
          explication: "On ajoute 1, puis 2, puis 3, puis 4, puis 5. Ensuite on ajoute 6 : 16 + 6 = 22."
        },
        {
          text: "Complète la suite de lettres : A, C, E, G, …",
          options: ["H", "I", "J", "K"],
          answer: 1,
          hint: "Écris l'alphabet et regarde les lettres que l'on saute.",
          explication: "On saute une lettre à chaque fois : A, (B), C, (D), E, (F), G, (H), I. La lettre suivante est I."
        },
        {
          type: "vrai_faux",
          text: "La suite 2, 6, 18, 54 est obtenue en multipliant par 3 à chaque étape.",
          answer: 0,
          hint: "Vérifie chaque étape : 2 × 3, 6 × 3, 18 × 3.",
          explication: "VRAI. 2 × 3 = 6, 6 × 3 = 18 et 18 × 3 = 54."
        },
        {
          text: "Complète la suite des jours : lundi, mercredi, vendredi, …",
          options: ["samedi", "dimanche", "lundi", "mardi"],
          answer: 1,
          hint: "On saute un jour à chaque fois.",
          explication: "On saute un jour à chaque fois : lundi, mercredi, vendredi, puis dimanche."
        },
        {
          type: "texte",
          text: "Quel nombre manque dans cette suite de nombres premiers : 2, 3, 5, 7, 11, …, 17 ?",
          answer: ["13", "treize"],
          hint: "Cherche le nombre entre 11 et 17 qui n'a que deux diviseurs : 1 et lui-même.",
          explication: "12 est divisible par 2, 3, 4 et 6, mais 13 ne se divise que par 1 et par lui-même. Le nombre manquant est 13."
        },
        {
          type: "qcm",
          text: "Parmi ces suites, lesquelles augmentent toujours de la même quantité ? (plusieurs réponses)",
          options: ["5, 8, 11, 14", "2, 4, 8, 16", "10, 20, 30, 40", "1, 2, 4, 7"],
          answer: [0, 2],
          hint: "Calcule l'écart entre chaque couple de nombres voisins.",
          explication: "5, 8, 11, 14 augmente de 3 à chaque fois. 10, 20, 30, 40 augmente de 10. Les deux autres suites ont des écarts différents."
        }
      ]
    },
    {
      id: "calcul_malin",
      name: "Calcul malin",
      emoji: "⚡",
      desc: "Des astuces pour calculer vite et bien",
      questions: [
        {
          text: "Que vaut 25 × 4 × 7 ?",
          options: ["70", "280", "700", "1 400"],
          answer: 2,
          hint: "Commence par regrouper deux nombres qui font un compte rond.",
          explication: "25 × 4 = 100, puis 100 × 7 = 700. En choisissant l'ordre des calculs, on gagne du temps."
        },
        {
          text: "Quel est le résultat de 99 × 7 ?",
          options: ["637", "693", "700", "707"],
          answer: 1,
          hint: "99, c'est 100 moins 1.",
          explication: "99 × 7 = 100 × 7 − 7 = 700 − 7 = 693."
        },
        {
          text: "Calcule astucieusement 38 + 47 + 62 + 53.",
          options: ["180", "190", "200", "210"],
          answer: 2,
          hint: "Associe des nombres dont la somme fait un compte rond.",
          explication: "38 + 62 = 100 et 47 + 53 = 100. Le total est donc 200."
        },
        {
          type: "texte",
          text: "Combien font 5 × 17 × 2 ? (écris un nombre)",
          answer: ["170", "cent soixante-dix", "cent-soixante-dix"],
          hint: "Commence par multiplier 5 par 2.",
          explication: "5 × 2 = 10, puis 10 × 17 = 170."
        },
        {
          text: "Quel est le double de la moitié de 36 ?",
          options: ["9", "18", "36", "72"],
          answer: 2,
          hint: "Doubler et prendre la moitié sont deux opérations qui s'annulent.",
          explication: "La moitié de 36 est 18, et le double de 18 est 36. On retrouve le nombre de départ."
        },
        {
          text: "Un stylo et une gomme coûtent 1,10 € ensemble. Le stylo coûte 1 € de plus que la gomme. Combien coûte la gomme ?",
          options: ["0,01 €", "0,05 €", "0,10 €", "1 €"],
          answer: 1,
          hint: "Si la gomme coûtait 0,10 €, combien coûterait le stylo, et combien feraient-ils ensemble ?",
          explication: "Gomme à 0,05 € et stylo à 1,05 € : leur différence est bien 1 €, et leur total 1,10 €. La réponse « 0,10 € » est le piège classique."
        },
        {
          type: "vrai_faux",
          text: "12 × 15 donne le même résultat que 6 × 30.",
          answer: 0,
          hint: "Si on divise un facteur par 2, on peut multiplier l'autre par 2.",
          explication: "VRAI. 12 × 15 = 180 et 6 × 30 = 180. On a divisé 12 par 2 et multiplié 15 par 2."
        },
        {
          text: "Quel est le résultat de 0 × 837 + 837 × 1 ?",
          options: ["0", "837", "1 674", "8 370"],
          answer: 1,
          hint: "Multiplier par 0 donne 0, et multiplier par 1 ne change rien.",
          explication: "0 × 837 = 0 et 837 × 1 = 837. Le total est 0 + 837 = 837."
        },
        {
          type: "texte",
          text: "Par quel nombre faut-il multiplier 8 pour obtenir 96 ? (écris un nombre)",
          answer: ["12", "douze"],
          hint: "Pense à la division : 96 ÷ 8.",
          explication: "96 ÷ 8 = 12, car 8 × 12 = 96."
        },
        {
          type: "qcm",
          text: "Quels calculs donnent 100 ? (plusieurs réponses)",
          options: ["50 × 2", "25 × 4", "10 × 100", "99 + 1"],
          answer: [0, 1, 3],
          hint: "Un seul calcul donne un résultat beaucoup plus grand.",
          explication: "50 × 2 = 100, 25 × 4 = 100 et 99 + 1 = 100. En revanche, 10 × 100 = 1 000."
        }
      ]
    },
    {
      id: "devinettes",
      name: "Devinettes classiques",
      emoji: "🤔",
      desc: "Les devinettes que tout le monde connaît (ou presque)",
      questions: [
        {
          text: "Plus on en prend, plus on en laisse derrière soi. Qu'est-ce que c'est ?",
          options: ["les pas", "les photos", "les bonbons", "les devoirs"],
          answer: 0,
          hint: "Pense à une promenade sur la plage.",
          explication: "Plus tu fais de pas, plus tu laisses de traces derrière toi."
        },
        {
          text: "Qu'est-ce qui a des dents mais ne mord pas ?",
          options: ["un peigne", "un chien", "un requin", "un crocodile"],
          answer: 0,
          hint: "On l'utilise le matin, devant le miroir.",
          explication: "Un peigne a des dents, mais il ne mord personne !"
        },
        {
          text: "Qu'est-ce qui monte toujours et ne descend jamais ?",
          options: ["l'âge", "le soleil", "l'ascenseur", "la fusée"],
          answer: 0,
          hint: "Chaque anniversaire en ajoute un.",
          explication: "L'âge augmente chaque année et ne diminue jamais."
        },
        {
          text: "Je suis plein de trous, mais je retiens l'eau. Qui suis-je ?",
          options: ["une éponge", "une passoire", "un seau", "un filet de pêche"],
          answer: 0,
          hint: "On s'en sert pour nettoyer la table.",
          explication: "Une éponge est pleine de trous, mais elle garde l'eau à l'intérieur. La passoire, elle, laisse tout passer."
        },
        {
          text: "Qu'est-ce qui a un cou mais pas de tête ?",
          options: ["une bouteille", "une girafe", "une cravate", "une chaussette"],
          answer: 0,
          hint: "On la trouve souvent sur la table pendant le repas.",
          explication: "Une bouteille a un col, ou un « cou », mais pas de tête. La girafe, elle, a un cou ET une tête."
        },
        {
          type: "texte",
          text: "Qu'est-ce qui t'appartient, mais que les autres utilisent plus que toi ? (une seule réponse)",
          answer: ["ton prenom", "mon prenom", "prenom", "le prenom", "ton prénom", "mon prénom", "prénom", "le prénom"],
          hint: "Tes amis et ta famille s'en servent tout le temps pour t'appeler.",
          explication: "C'est ton prénom : il est à toi, mais ce sont les autres qui le disent le plus souvent."
        },
        {
          text: "Je n'ai pas de voix, mais je peux te raconter une histoire. Qui suis-je ?",
          options: ["un livre", "un téléphone", "une radio", "un perroquet"],
          answer: 0,
          hint: "Il est silencieux, mais on le lit.",
          explication: "Un livre n'a pas de voix, mais il raconte des histoires avec des mots écrits."
        },
        {
          text: "Qu'est-ce qui fait le tour du monde en restant dans son coin ?",
          options: ["un timbre", "une carte", "un avion", "une horloge"],
          answer: 0,
          hint: "On le colle sur une enveloppe.",
          explication: "Un timbre est collé dans le coin d'une lettre, et la lettre voyage partout dans le monde."
        },
        {
          text: "Qu'est-ce qui a des touches, mais n'ouvre aucune porte ?",
          options: ["un piano", "une serrure", "un coffre-fort", "une valise"],
          answer: 0,
          hint: "Un musicien l'utilise pour jouer des notes.",
          explication: "Un piano a des touches, mais on ne s'en sert pas pour ouvrir une porte."
        },
        {
          type: "vrai_faux",
          text: "Un kilo de plumes est plus léger qu'un kilo de plomb.",
          answer: 1,
          hint: "Compare ce que pèse un kilo de chaque matière.",
          explication: "FAUX. Un kilo, c'est toujours un kilo ! Il faut simplement beaucoup plus de plumes que de plomb pour atteindre cette masse."
        }
      ]
    },
    {
      id: "jeux_mots",
      name: "Pièges et jeux de mots",
      emoji: "🪤",
      desc: "Attention, ces questions cachent un piège",
      questions: [
        {
          text: "Combien d'animaux de chaque espèce Moïse a-t-il emmenés dans son arche ?",
          options: ["deux", "aucun", "sept", "un seul"],
          answer: 1,
          hint: "Relis bien le nom du personnage de la question.",
          explication: "C'est Noé qui a construit l'arche, pas Moïse ! Moïse n'a donc emmené aucun animal."
        },
        {
          text: "Un coq pond un œuf sur le toit d'une maison. De quel côté tombe l'œuf ?",
          options: [
            "il roule du côté gauche",
            "il roule du côté droit",
            "aucun côté : un coq ne pond pas d'œuf",
            "il reste en équilibre sur le toit"
          ],
          answer: 2,
          hint: "Pose-toi la question : qui pond des œufs ?",
          explication: "Un coq est un mâle : il ne pond pas d'œufs. C'est la poule qui pond !"
        },
        {
          text: "Un fermier a 17 moutons. Tous sauf 9 s'enfuient. Combien lui en reste-t-il ?",
          options: ["8", "9", "17", "0"],
          answer: 1,
          hint: "« Tous sauf 9 » : combien ne s'enfuient pas ?",
          explication: "« Tous sauf 9 » veut dire que 9 moutons restent. Il lui en reste donc 9."
        },
        {
          text: "Quels mois de l'année ont au moins 28 jours ?",
          options: ["seulement février", "tous les mois", "aucun mois", "seulement les mois d'été"],
          answer: 1,
          hint: "Pense au mois le plus court de l'année.",
          explication: "Février en a 28 (ou 29), et tous les autres mois en ont davantage. Tous les mois ont donc au moins 28 jours."
        },
        {
          text: "Un train électrique roule vers le nord. De quel côté part la fumée ?",
          options: ["elle part vers le nord", "elle part vers le sud", "il n'y a pas de fumée", "elle monte tout droit vers le ciel"],
          answer: 2,
          hint: "Réfléchis à ce qui fait fonctionner un train électrique.",
          explication: "Un train électrique n'a pas de moteur qui brûle du charbon ou du carburant. Il ne produit donc pas de fumée."
        },
        {
          type: "texte",
          text: "Qu'est-ce qui est blanc quand il est sale et noir quand il est propre ? (un objet d'école)",
          answer: ["tableau", "un tableau", "tableau noir", "un tableau noir", "ardoise", "une ardoise"],
          hint: "On écrit dessus à la craie.",
          explication: "C'est un tableau noir : il est couvert de craie blanche quand il est sale, et noir quand il est propre."
        },
        {
          type: "vrai_faux",
          text: "Le mot « incorrectement » contient le mot « correct ».",
          answer: 0,
          hint: "Épelle le mot en entier et cherche « c-o-r-r-e-c-t » à l'intérieur.",
          explication: "VRAI. Dans « incorrectement », on retrouve bien « correct » au milieu du mot."
        },
        {
          text: "Quel animal marche à quatre pattes le matin, à deux pattes à midi et à trois pattes le soir ?",
          options: ["l'ours", "l'homme", "le singe", "le chat"],
          answer: 1,
          hint: "Les trois moments de la journée représentent trois âges de la vie.",
          explication: "C'est l'homme : bébé, il marche à quatre pattes ; adulte, sur deux jambes ; vieux, avec une canne. C'est l'énigme du Sphinx dans la légende d'Œdipe."
        },
        {
          type: "qcm",
          text: "Quels mots sont des palindromes, c'est-à-dire qu'ils se lisent de la même façon dans les deux sens ? (plusieurs réponses)",
          options: ["kayak", "maison", "été", "ressasser"],
          answer: [0, 2, 3],
          hint: "Lis chaque mot de la fin vers le début.",
          explication: "Kayak, été et ressasser se lisent pareil à l'endroit et à l'envers. Maison devient « nosiam »."
        },
        {
          type: "texte",
          text: "Quel mot de 5 lettres se lit pareil dans les deux sens et désigne un appareil qui repère les avions ?",
          answer: ["radar", "un radar", "le radar"],
          hint: "Il utilise des ondes pour détecter les objets dans le ciel.",
          explication: "C'est un radar, mot de cinq lettres qui se lit de la même manière de gauche à droite et de droite à gauche."
        }
      ]
    },
    {
      id: "ages",
      name: "Âges et familles",
      emoji: "👨‍👩‍👧",
      desc: "Âges, parentés et liens de famille",
      questions: [
        {
          text: "Papa a 35 ans et son fils en a 5. Dans combien d'années l'âge de papa sera-t-il exactement le triple de l'âge de son fils ?",
          options: ["5 ans", "10 ans", "15 ans", "20 ans"],
          answer: 1,
          hint: "Teste les propositions : calcule l'âge de chacun après la durée proposée.",
          explication: "Dans 10 ans, papa aura 45 ans et son fils 15 ans. Et 45 = 3 × 15."
        },
        {
          text: "Il y a 2 ans, Inès avait 9 ans. Quel âge aura-t-elle dans 3 ans ?",
          options: ["12 ans", "13 ans", "14 ans", "15 ans"],
          answer: 2,
          hint: "Cherche d'abord son âge aujourd'hui.",
          explication: "Aujourd'hui, Inès a 9 + 2 = 11 ans. Dans 3 ans, elle aura 11 + 3 = 14 ans."
        },
        {
          type: "texte",
          text: "Zoé a 4 ans de plus que son frère Max. Quand Max aura 10 ans, quel âge aura Zoé ? (écris un nombre)",
          answer: ["14", "14 ans", "quatorze", "quatorze ans"],
          hint: "L'écart d'âge entre deux personnes ne change jamais.",
          explication: "Zoé aura toujours 4 ans de plus que Max. Quand Max aura 10 ans, Zoé aura 14 ans."
        },
        {
          text: "Deux pères et deux fils vont à la pêche. Ils ne ramènent que 3 poissons, mais chacun en a un. Comment est-ce possible ?",
          options: [
            "il y a un grand-père, son fils et son petit-fils",
            "l'un des poissons a été partagé en deux",
            "une des personnes n'a pas pêché",
            "ils ont rejeté un poisson à l'eau"
          ],
          answer: 0,
          hint: "Une même personne peut être à la fois père et fils.",
          explication: "Il n'y a que trois personnes : un grand-père, son fils et son petit-fils. Le fils est à la fois père (du petit-fils) et fils (du grand-père)."
        },
        {
          text: "La mère de Tom a quatre enfants : Avril, Mai, Juin et… comment s'appelle le quatrième ?",
          options: ["Juillet", "Août", "Tom", "Mars"],
          answer: 2,
          hint: "Relis la première phrase : de qui parle-t-on ?",
          explication: "La mère de Tom a quatre enfants, dont Tom lui-même. Le quatrième s'appelle donc Tom."
        },
        {
          text: "J'ai 2 grands-parents du côté de papa et 2 du côté de maman. Chacun de mes grands-parents a lui-même deux parents. Combien ai-je d'arrière-grands-parents ?",
          options: ["4", "6", "8", "16"],
          answer: 2,
          hint: "Compte combien d'arrière-grands-parents a chaque grand-parent, puis multiplie.",
          explication: "J'ai 4 grands-parents, chacun a 2 parents. 4 × 2 = 8 arrière-grands-parents."
        },
        {
          type: "vrai_faux",
          text: "Le frère de ma mère est mon oncle.",
          answer: 0,
          hint: "Pense à qui sont les frères et sœurs de tes parents.",
          explication: "VRAI. Le frère de ta mère ou de ton père est ton oncle."
        },
        {
          text: "Quel lien de parenté as-tu avec le fils du frère de ton père ?",
          options: ["c'est mon cousin", "c'est mon oncle", "c'est mon frère", "c'est mon neveu"],
          answer: 0,
          hint: "Le frère de ton père est ton oncle : que sont les enfants de ton oncle ?",
          explication: "Le frère de ton père est ton oncle, et son fils est donc ton cousin."
        },
        {
          type: "texte",
          text: "Maya aura 15 ans dans 6 ans. Quel âge avait-elle il y a 2 ans ? (écris un nombre)",
          answer: ["7", "7 ans", "sept", "sept ans"],
          hint: "Calcule d'abord son âge aujourd'hui.",
          explication: "Aujourd'hui, Maya a 15 − 6 = 9 ans. Il y a 2 ans, elle avait 9 − 2 = 7 ans."
        },
        {
          type: "qcm",
          text: "Parmi ces personnes, lesquelles sont tes cousins ou cousines ? (plusieurs réponses)",
          options: [
            "le fils de la sœur de ta mère",
            "la fille du frère de ton père",
            "le frère de ta mère",
            "la sœur de ton père"
          ],
          answer: [0, 1],
          hint: "Les frères et sœurs de tes parents sont tes oncles et tantes, pas tes cousins.",
          explication: "Les enfants de tes oncles et tantes sont tes cousins et cousines. Le frère de ta mère est ton oncle, et la sœur de ton père est ta tante."
        }
      ]
    },
    {
      id: "durees",
      name: "Durées et mesures",
      emoji: "⏱️",
      desc: "Heures, minutes, masses et distances",
      questions: [
        {
          text: "Un film commence à 14 h 50 et dure 1 h 45. À quelle heure se termine-t-il ?",
          options: ["16 h 15", "16 h 35", "16 h 45", "17 h 05"],
          answer: 1,
          hint: "Ajoute d'abord l'heure, puis les minutes.",
          explication: "14 h 50 + 1 h = 15 h 50. Puis 15 h 50 + 45 min = 16 h 35."
        },
        {
          text: "Combien de secondes y a-t-il dans 5 minutes ?",
          options: ["50", "300", "500", "3 000"],
          answer: 1,
          hint: "Une minute compte 60 secondes.",
          explication: "5 × 60 = 300 secondes."
        },
        {
          type: "texte",
          text: "Combien de minutes y a-t-il dans 2 heures et demie ? (écris un nombre)",
          answer: ["150", "150 minutes", "cent cinquante"],
          hint: "2 heures, c'est 120 minutes.",
          explication: "2 heures = 120 minutes, et une demi-heure = 30 minutes. 120 + 30 = 150 minutes."
        },
        {
          text: "Un train part à 9 h 40 et arrive à 12 h 15. Combien de temps dure le voyage ?",
          options: ["2 h 25", "2 h 35", "3 h 25", "2 h 55"],
          answer: 1,
          hint: "Avance de 9 h 40 jusqu'à 10 h, puis jusqu'à 12 h, puis jusqu'à 12 h 15.",
          explication: "De 9 h 40 à 10 h : 20 min. De 10 h à 12 h : 2 h. De 12 h à 12 h 15 : 15 min. Au total : 2 h 35."
        },
        {
          text: "Combien de grammes y a-t-il dans 3,5 kg ?",
          options: ["35 g", "350 g", "3 500 g", "35 000 g"],
          answer: 2,
          hint: "1 kg = 1 000 g.",
          explication: "3,5 × 1 000 = 3 500 grammes."
        },
        {
          text: "Une piscine mesure 25 m de long. Tu nages 8 longueurs. Quelle distance as-tu parcourue ?",
          options: ["100 m", "150 m", "200 m", "250 m"],
          answer: 2,
          hint: "Multiplie la longueur de la piscine par le nombre de longueurs.",
          explication: "8 × 25 m = 200 m. Tu as nagé 200 mètres."
        },
        {
          type: "vrai_faux",
          text: "Un litre d'eau pèse environ un kilogramme.",
          answer: 0,
          hint: "C'est comme cela que l'on a défini le kilogramme à l'origine.",
          explication: "VRAI. 1 litre d'eau pèse environ 1 kilogramme."
        },
        {
          text: "Quelle durée est la plus longue ?",
          options: ["un quart d'heure", "20 minutes", "900 secondes", "elles sont toutes égales"],
          answer: 1,
          hint: "Convertis tout en minutes.",
          explication: "Un quart d'heure = 15 min, 900 s = 15 min, et 20 min est plus long. La plus longue durée est donc 20 minutes."
        },
        {
          type: "texte",
          text: "Combien de jours y a-t-il en tout dans les mois d'avril, mai et juin (une année ordinaire) ? (écris un nombre)",
          answer: ["91", "91 jours", "quatre-vingt-onze"],
          hint: "Avril et juin ont 30 jours. Mai en a 31.",
          explication: "Avril : 30, mai : 31, juin : 30. 30 + 31 + 30 = 91 jours."
        },
        {
          type: "qcm",
          text: "Quelles durées sont égales à 1 heure ? (plusieurs réponses)",
          options: ["60 minutes", "3 600 secondes", "100 minutes", "6 000 secondes"],
          answer: [0, 1],
          hint: "Une heure = 60 minutes, et une minute = 60 secondes.",
          explication: "1 h = 60 min = 60 × 60 = 3 600 s. Une heure ne vaut pas 100 minutes, ni 6 000 secondes."
        }
      ]
    },
    {
      id: "intrus",
      name: "Intrus et classements",
      emoji: "🔍",
      desc: "Repère celui qui ne ressemble pas aux autres",
      questions: [
        {
          text: "Quel est l'intrus dans cette liste : 2, 4, 6, 9, 10 ?",
          options: ["2", "4", "9", "10"],
          answer: 2,
          hint: "Regarde la parité des nombres.",
          explication: "Tous les nombres sont pairs, sauf 9 qui est impair."
        },
        {
          text: "Quel est l'intrus : lion, tigre, loup, panthère ?",
          options: ["lion", "tigre", "loup", "panthère"],
          answer: 2,
          hint: "Pense à la famille d'animaux.",
          explication: "Le lion, le tigre et la panthère sont des félins. Le loup fait partie de la famille des chiens."
        },
        {
          text: "Quel est l'intrus : triangle, carré, cercle, rectangle ?",
          options: ["triangle", "carré", "cercle", "rectangle"],
          answer: 2,
          hint: "Regarde les côtés et les sommets de chaque figure.",
          explication: "Le triangle, le carré et le rectangle sont des polygones : ils ont des côtés droits et des sommets. Le cercle est rond."
        },
        {
          text: "Quel nombre est le plus grand : 0,7 ; 0,07 ; 0,69 ; 0,699 ?",
          options: ["0,7", "0,07", "0,69", "0,699"],
          answer: 0,
          hint: "Écris-les avec le même nombre de chiffres après la virgule.",
          explication: "En écrivant 0,700 ; 0,070 ; 0,690 ; 0,699, on voit que 0,7 est le plus grand."
        },
        {
          type: "texte",
          text: "Quel est l'intrus : Paris, Lyon, Berlin, Marseille ? (écris le nom)",
          answer: ["berlin"],
          hint: "Pense au pays de chaque ville.",
          explication: "Paris, Lyon et Marseille sont des villes françaises. Berlin est la capitale de l'Allemagne."
        },
        {
          type: "vrai_faux",
          text: "Le nombre 51 est un nombre premier.",
          answer: 1,
          hint: "Essaie de le diviser par 3.",
          explication: "FAUX. 51 = 3 × 17 : il a d'autres diviseurs que 1 et lui-même, il n'est donc pas premier."
        },
        {
          text: "Quel est l'intrus : 16, 25, 36, 40 ?",
          options: ["16", "25", "36", "40"],
          answer: 3,
          hint: "Observe les nombres de la forme « un nombre multiplié par lui-même ».",
          explication: "16 = 4 × 4, 25 = 5 × 5 et 36 = 6 × 6 sont des carrés parfaits. 40 n'en est pas un."
        },
        {
          text: "Quel est l'intrus : Jupiter, Mars, la Lune, Vénus ?",
          options: ["Jupiter", "Mars", "la Lune", "Vénus"],
          answer: 2,
          hint: "Un seul des quatre ne tourne pas autour du Soleil directement.",
          explication: "Jupiter, Mars et Vénus sont des planètes. La Lune est un satellite de la Terre."
        },
        {
          text: "Quel est l'intrus : mercredi, janvier, jeudi, samedi ?",
          options: ["mercredi", "janvier", "jeudi", "samedi"],
          answer: 1,
          hint: "Pense au type de mot : jour ou mois ?",
          explication: "Mercredi, jeudi et samedi sont des jours de la semaine. Janvier est un mois."
        },
        {
          type: "qcm",
          text: "Quels nombres sont des nombres premiers ? (plusieurs réponses)",
          options: ["13", "15", "17", "21"],
          answer: [0, 2],
          hint: "Un nombre premier n'a que deux diviseurs : 1 et lui-même.",
          explication: "13 et 17 sont premiers. 15 = 3 × 5 et 21 = 3 × 7 ont d'autres diviseurs."
        }
      ]
    },
    {
      id: "vf_pieges",
      name: "Vrai ou faux piégeux",
      emoji: "⚠️",
      desc: "Des affirmations qui semblent simples, mais attention",
      questions: [
        {
          type: "vrai_faux",
          text: "Zéro est un nombre pair.",
          answer: 0,
          hint: "Un nombre pair est un multiple de 2.",
          explication: "VRAI. 0 = 2 × 0 : c'est un multiple de 2, donc un nombre pair."
        },
        {
          type: "vrai_faux",
          text: "Un carré est un rectangle particulier.",
          answer: 0,
          hint: "Compare les angles et les côtés des deux figures.",
          explication: "VRAI. Un rectangle a quatre angles droits ; le carré aussi, et il a en plus ses quatre côtés égaux."
        },
        {
          type: "vrai_faux",
          text: "Entre 1 et 100, il y a plus de nombres pairs que de nombres impairs.",
          answer: 1,
          hint: "Un nombre sur deux est pair.",
          explication: "FAUX. Entre 1 et 100, il y a 50 nombres pairs et 50 nombres impairs : autant de chaque."
        },
        {
          type: "vrai_faux",
          text: "Le nombre 1 est un nombre premier.",
          answer: 1,
          hint: "Un nombre premier doit avoir exactement deux diviseurs différents.",
          explication: "FAUX. Le nombre 1 n'a qu'un seul diviseur, lui-même. Un nombre premier en a exactement deux."
        },
        {
          type: "vrai_faux",
          text: "Un triangle peut avoir deux angles droits.",
          answer: 1,
          hint: "La somme des angles d'un triangle est toujours la même.",
          explication: "FAUX. La somme des angles d'un triangle fait 180°. Deux angles droits feraient déjà 180°, il ne resterait rien pour le troisième."
        },
        {
          type: "vrai_faux",
          text: "Quand on multiplie un nombre par 0,5, on obtient toujours un résultat plus grand que ce nombre.",
          answer: 1,
          hint: "Multiplier par 0,5, c'est la même chose que prendre la moitié.",
          explication: "FAUX. Multiplier par 0,5, c'est prendre la moitié : 10 × 0,5 = 5, qui est plus petit que 10."
        },
        {
          type: "vrai_faux",
          text: "Une pièce de monnaie tombe 5 fois de suite sur « pile ». Au 6e lancer, elle a plus de chances de tomber sur « face ».",
          answer: 1,
          hint: "La pièce n'a pas de mémoire.",
          explication: "FAUX. À chaque lancer, il y a une chance sur deux d'obtenir pile ou face, quels que soient les lancers précédents."
        },
        {
          type: "vrai_faux",
          text: "Un mille-pattes a exactement mille pattes.",
          answer: 1,
          hint: "Son nom ne dit pas le nombre exact de ses pattes.",
          explication: "FAUX. Aucun mille-pattes n'a vraiment mille pattes. Selon les espèces, ils en ont de quelques dizaines à plus de sept cents."
        },
        {
          text: "Il est 11 h 45. Quelle heure sera-t-il une heure et demie plus tard ?",
          options: ["12 h 15", "13 h 15", "13 h 45", "14 h 15"],
          answer: 1,
          hint: "Ajoute d'abord une heure, puis une demi-heure.",
          explication: "11 h 45 + 1 h = 12 h 45. 12 h 45 + 30 min = 13 h 15."
        },
        {
          type: "texte",
          text: "Combien font 8 ÷ 0,5 ? (écris un nombre)",
          answer: ["16", "seize"],
          hint: "Combien de demis y a-t-il dans 1 ?",
          explication: "Dans 1, il y a deux demis. Dans 8, il y en a donc 8 × 2 = 16."
        }
      ]
    },
    {
      id: "casse_tetes",
      name: "Mini casse-têtes",
      emoji: "🧮",
      desc: "Quelques défis pour les plus malins",
      questions: [
        {
          text: "Un escargot veut monter en haut d'un mur de 5 mètres. Le jour, il monte de 2 m. La nuit, il redescend de 1 m. Au bout de combien de jours arrive-t-il en haut ?",
          options: ["3 jours", "4 jours", "5 jours", "6 jours"],
          answer: 1,
          hint: "Compte sa hauteur à la fin de chaque jour, et arrête-toi dès qu'il touche le haut.",
          explication: "Fin du jour 1 : 2 m, nuit : 1 m. Jour 2 : 3 m, nuit : 2 m. Jour 3 : 4 m, nuit : 3 m. Jour 4 : il monte à 5 m et arrive en haut avant la nuit."
        },
        {
          text: "Combien de carrés de toutes tailles peux-tu compter dans une grille de 3 cases sur 3 cases ?",
          options: ["9", "10", "14", "16"],
          answer: 2,
          hint: "N'oublie pas les carrés plus grands que les petites cases.",
          explication: "Il y a 9 petits carrés (1×1), 4 carrés de 2×2 et 1 grand carré de 3×3. 9 + 4 + 1 = 14."
        },
        {
          type: "texte",
          text: "Je pense à un nombre. Je le double, j'ajoute 6, puis je divise le résultat par 2. Je trouve 10. Quel est mon nombre ? (écris un nombre)",
          answer: ["7", "sept"],
          hint: "Remonte les calculs à l'envers, en partant de 10.",
          explication: "À l'envers : 10 × 2 = 20, puis 20 − 6 = 14, puis 14 ÷ 2 = 7. Vérification : 7 × 2 = 14 ; 14 + 6 = 20 ; 20 ÷ 2 = 10."
        },
        {
          text: "Six personnes se serrent la main, chacune une seule fois avec chacune des autres. Combien y a-t-il de poignées de main au total ?",
          options: ["12", "15", "18", "30"],
          answer: 1,
          hint: "La première personne serre 5 mains, la deuxième 4 nouvelles mains, etc.",
          explication: "5 + 4 + 3 + 2 + 1 = 15 poignées de main."
        },
        {
          text: "Combien de pattes ont en tout 3 poules et 2 chiens ?",
          options: ["10", "12", "14", "16"],
          answer: 2,
          hint: "Une poule a 2 pattes et un chien en a 4.",
          explication: "3 poules × 2 pattes = 6 pattes. 2 chiens × 4 pattes = 8 pattes. Au total : 6 + 8 = 14 pattes."
        },
        {
          text: "Des nénuphars recouvrent un lac. La surface couverte double chaque jour, et le lac est entièrement couvert au bout de 30 jours. Au bout de combien de jours est-il couvert à moitié ?",
          options: ["15 jours", "25 jours", "28 jours", "29 jours"],
          answer: 3,
          hint: "Si la surface double chaque jour, que se passe-t-il la veille du jour où le lac est plein ?",
          explication: "La surface double chaque jour : la veille du jour 30, elle était donc moitié moins grande. Le lac est couvert à moitié le jour 29."
        },
        {
          type: "vrai_faux",
          text: "On peut partager 10 € entre deux personnes pour que l'une reçoive exactement 3 € de plus que l'autre.",
          answer: 0,
          hint: "Si la plus petite part vaut x, la plus grande vaut x + 3.",
          explication: "VRAI. 3,50 € et 6,50 € : la différence est bien 3 € et le total fait 10 €."
        },
        {
          text: "Avec les nombres 1, 2, 3 et 4, chacun utilisé une seule fois, quel calcul donne 24 ?",
          options: ["1 + 2 + 3 + 4", "(1 + 2) × 3 + 4", "4 × 3 + 2 + 1", "1 × 2 × 3 × 4"],
          answer: 3,
          hint: "Il faut un résultat plus grand que la somme des quatre nombres.",
          explication: "1 × 2 × 3 × 4 = 24. Les autres calculs donnent 10, 13 et 15."
        },
        {
          type: "texte",
          text: "Combien de chiffres faut-il pour écrire tous les nombres de 1 à 20 ? (écris un nombre)",
          answer: ["31", "trente et un", "trente-et-un"],
          hint: "Compte séparément les nombres de 1 à 9 et ceux de 10 à 20.",
          explication: "De 1 à 9, il y a 9 nombres à 1 chiffre : 9 chiffres. De 10 à 20, il y a 11 nombres à 2 chiffres : 22 chiffres. 9 + 22 = 31."
        },
        {
          type: "qcm",
          text: "Quels paiements font exactement 1 € ? (plusieurs réponses)",
          options: ["50 c + 20 c + 20 c + 10 c", "5 pièces de 20 c", "2 pièces de 50 c", "9 pièces de 10 c"],
          answer: [0, 1, 2],
          hint: "Calcule chaque somme en centimes.",
          explication: "50 + 20 + 20 + 10 = 100 c, 5 × 20 = 100 c et 2 × 50 = 100 c. En revanche, 9 × 10 = 90 c."
        }
      ]
    }
  ]
};
