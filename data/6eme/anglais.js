/* Matière : Anglais 🇬🇧 (6ème)
   6 thèmes × 10 questions = 60 questions
   Vocabulaire courant + grammaire de base (présent simple, be/have got…) */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["anglais"] = {
  id: "anglais",
  name: "Anglais",
  emoji: "🇬🇧",
  desc: "Vocabulaire, grammaire de base, expressions",
  topics: [
    {
      id: "greetings",
      name: "Greetings & introductions",
      emoji: "👋",
      desc: "Saluer, se présenter, formules de politesse",
      questions: [
        {
          text: "Comment dit-on « Bonjour » en anglais (le matin) ?",
          options: ["Good night", "Good morning", "Good evening", "Goodbye"],
          answer: 1,
          hint: "Pour saluer du lever jusqu'au midi.",
          explication: "« Good morning » se dit le matin (avant midi). « Good evening » = bonsoir, « Good night » = bonne nuit."
        },
        {
          text: "Comment se présente-t-on en anglais ?",
          options: ["I have John", "My name is John", "I am John speaking only", "My John"],
          answer: 1,
          hint: "Formule très courante : « Mon nom est… »",
          explication: "« My name is John » est la formule classique. On peut aussi dire « I'm John »."
        },
        {
          text: "Comment dit-on « Au revoir » ?",
          options: ["Hello", "Thank you", "Goodbye", "Please"],
          answer: 2,
          hint: "Mot composé de « good » + « bye ».",
          explication: "« Goodbye » signifie au revoir. Plus familier : « Bye » ou « See you »."
        },
        {
          text: "Que veut dire « Nice to meet you » ?",
          options: ["Bon appétit", "Enchanté(e)", "Bonne nuit", "Salut"],
          answer: 1,
          hint: "On le dit lors d'une première rencontre.",
          explication: "« Nice to meet you » signifie « enchanté(e) de te/vous rencontrer »."
        },
        {
          text: "Comment dit-on « Comment vas-tu ? » ?",
          options: ["What is your name?", "How are you?", "Where are you?", "Who are you?"],
          answer: 1,
          hint: "« Comment » = how.",
          explication: "« How are you? » = Comment vas-tu / allez-vous ?"
        },
        {
          type: "vrai_faux",
          text: "« Please » est un mot de politesse qui veut dire « s'il te plaît / s'il vous plaît ».",
          answer: 0,
          hint: "Mot très utile pour être poli.",
          explication: "VRAI. « Please » = s'il te plaît / s'il vous plaît. Très important en anglais !"
        },
        {
          text: "Comment dit-on « Merci » ?",
          options: ["Sorry", "Hello", "Thank you", "Please"],
          answer: 2,
          hint: "Pense à ce qu'on dit en anglais quand on reçoit un cadeau.",
          explication: "« Thank you » = merci. Plus familier : « Thanks »."
        },
        {
          text: "Que répond-on à « How are you? »",
          options: ["I am John", "I'm fine, thank you", "My name is John", "Goodbye"],
          answer: 1,
          hint: "On dit comment on va.",
          explication: "« I'm fine, thank you » (je vais bien, merci) est la réponse classique."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces expressions sont des salutations ?",
          options: ["Hello", "Goodbye", "Thank you", "Hi"],
          answer: [0, 3],
          hint: "« Goodbye » est un adieu, « Thank you » un remerciement.",
          explication: "« Hello » et « Hi » servent à saluer. « Goodbye » à prendre congé, « Thank you » à remercier."
        },
        {
          type: "texte",
          text: "Comment dit-on « Merci » en anglais (deux mots) ?",
          answer: ["thank you", "Thank you"],
          hint: "Réponse en deux mots.",
          explication: "« Thank you » est la formule de remerciement standard en anglais."
        }
      ]
    },
    {
      id: "personal-info",
      name: "Personal information",
      emoji: "🆔",
      desc: "Nom, âge, nationalité, parler de soi",
      questions: [
        {
          text: "Comment dit-on « Quel âge as-tu ? » ?",
          options: ["What is your name?", "How old are you?", "Where are you from?", "What do you do?"],
          answer: 1,
          hint: "Mot à mot : « Combien vieux es-tu ? »",
          explication: "« How old are you? » signifie « Quel âge as-tu ? »"
        },
        {
          text: "Comment dit-on « J'ai 12 ans » en anglais ?",
          options: ["I have 12 years", "I am 12 years old", "I have 12", "I am 12 years"],
          answer: 1,
          hint: "En anglais, on dit qu'on EST vieux de X ans (avec « to be »).",
          explication: "En anglais, on utilise le verbe « to be » pour l'âge : « I am 12 years old. »"
        },
        {
          text: "Que veut dire « Where are you from? »",
          options: ["Comment t'appelles-tu ?", "D'où viens-tu ?", "Quel âge as-tu ?", "Où vis-tu ?"],
          answer: 1,
          hint: "« From » = de / depuis.",
          explication: "« Where are you from? » = D'où viens-tu / venez-vous ?"
        },
        {
          text: "Comment dit-on « Je suis français(e) » ?",
          options: ["I am France", "I'm from french", "I am French", "I'm French country"],
          answer: 2,
          hint: "Les nationalités prennent une majuscule en anglais.",
          explication: "« I am French » : on utilise l'adjectif de nationalité, avec une majuscule."
        },
        {
          text: "Comment dit-on « Je m'appelle Sophie » ?",
          options: ["I call Sophie", "I'm name Sophie", "My name is Sophie", "Me Sophie"],
          answer: 2,
          hint: "« Mon nom est… »",
          explication: "« My name is Sophie » ou « I'm Sophie » sont les formules correctes."
        },
        {
          type: "vrai_faux",
          text: "En anglais, les nationalités s'écrivent avec une majuscule (French, English, Spanish…).",
          answer: 0,
          hint: "Contrairement au français !",
          explication: "VRAI. En anglais, les nationalités et les langues prennent toujours une majuscule."
        },
        {
          text: "Comment demande-t-on « Quel est ton nom ? »",
          options: ["What is your name?", "How is your name?", "Where is your name?", "Who is name?"],
          answer: 0,
          hint: "« Quel » = What.",
          explication: "« What is your name? » est la question pour demander le nom de quelqu'un."
        },
        {
          type: "qcm",
          text: "Parmi ces phrases, lesquelles parlent de soi correctement ?",
          options: ["I am 10 years old.", "My name is Emma.", "I have 10 years.", "I from Spain."],
          answer: [0, 1],
          hint: "Avec le verbe TO BE pour l'âge, et « to be from » pour l'origine.",
          explication: "Les 2 premières sont correctes. « I have 10 years » est faux (c'est I am 10). « I from Spain » oublie « am » (I am from Spain)."
        },
        {
          text: "Que répond-on à la question « What is your name? » ?",
          options: ["I am 12 years old", "My name is …", "I'm fine", "Where are you from?"],
          answer: 1,
          hint: "On donne son prénom.",
          explication: "« My name is … » est la réponse standard à « What is your name? »"
        },
        {
          type: "texte",
          text: "Comment dit-on « anglais » (la nationalité) en anglais ?",
          answer: ["English"],
          hint: "Avec une majuscule.",
          explication: "« English » signifie anglais en tant que langue ou nationalité. Toujours avec une majuscule."
        }
      ]
    },
    {
      id: "family",
      name: "Family",
      emoji: "👨‍👩‍👧‍👦",
      desc: "Membres de la famille, liens de parenté",
      questions: [
        {
          text: "Comment dit-on « mère » en anglais ?",
          options: ["father", "mother", "sister", "brother"],
          answer: 1,
          hint: "Familièrement : « mum ».",
          explication: "« Mother » signifie mère. « Mum » est l'équivalent familier de « maman »."
        },
        {
          text: "Comment dit-on « père » ?",
          options: ["mother", "brother", "father", "uncle"],
          answer: 2,
          hint: "Familièrement : « dad ».",
          explication: "« Father » = père. « Dad » = papa (familier)."
        },
        {
          text: "Que veut dire « sister » ?",
          options: ["frère", "sœur", "cousine", "tante"],
          answer: 1,
          hint: "Fille des mêmes parents.",
          explication: "« Sister » signifie sœur. « Brother » = frère."
        },
        {
          text: "Comment dit-on « grand-père » ?",
          options: ["uncle", "grandfather", "father", "stepfather"],
          answer: 1,
          hint: "« Grand » + père.",
          explication: "« Grandfather » = grand-père. Familièrement : « grandpa » ou « granddad »."
        },
        {
          text: "Que veut dire « aunt » ?",
          options: ["grand-mère", "cousine", "tante", "nièce"],
          answer: 2,
          hint: "Sœur du père ou de la mère.",
          explication: "« Aunt » signifie tante. « Uncle » = oncle."
        },
        {
          type: "vrai_faux",
          text: "« Cousin » s'écrit de la même façon en anglais et en français.",
          answer: 0,
          hint: "Mais se prononce différemment.",
          explication: "VRAI. « Cousin » s'écrit pareil dans les deux langues. La prononciation diffère."
        },
        {
          text: "Comment dit-on « fils » ?",
          options: ["daughter", "son", "brother", "nephew"],
          answer: 1,
          hint: "Enfant de sexe masculin.",
          explication: "« Son » = fils. « Daughter » = fille (descendance)."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des parents au sens large ?",
          options: ["father", "school", "cousin", "uncle"],
          answer: [0, 2, 3],
          hint: "« School » n'a rien à voir avec la famille.",
          explication: "Father, cousin, uncle sont des liens de parenté. « School » = école."
        },
        {
          text: "Comment dit-on « ma famille » ?",
          options: ["the family", "my family", "your family", "his family"],
          answer: 1,
          hint: "« Mon / ma » = my.",
          explication: "« My family » = ma famille. « Your » = ton, « his » = son (à lui)."
        },
        {
          type: "texte",
          text: "Comment dit-on « frère » en anglais ?",
          answer: ["brother", "Brother"],
          hint: "Un mot très courant.",
          explication: "« Brother » signifie frère en anglais."
        }
      ]
    },
    {
      id: "numbers-dates",
      name: "Numbers & dates",
      emoji: "🔢",
      desc: "Nombres, jours, mois",
      questions: [
        {
          text: "Comment écrit-on « 12 » en lettres en anglais ?",
          options: ["twelve", "twelf", "twenty", "ten two"],
          answer: 0,
          hint: "Attention à la prononciation : /twelv/.",
          explication: "« Twelve » = 12. À ne pas confondre avec « twenty » (20)."
        },
        {
          text: "Que veut dire « twenty » ?",
          options: ["12", "20", "30", "200"],
          answer: 1,
          hint: "Dizaine.",
          explication: "« Twenty » = 20. « Thirty » = 30, « twelve » = 12."
        },
        {
          text: "Comment dit-on « lundi » ?",
          options: ["Sunday", "Monday", "Tuesday", "Friday"],
          answer: 1,
          hint: "Premier jour de la semaine de travail en anglais.",
          explication: "« Monday » = lundi. Attention : les jours prennent toujours une majuscule en anglais."
        },
        {
          text: "Quel jour de la semaine est « Friday » ?",
          options: ["lundi", "mercredi", "vendredi", "samedi"],
          answer: 2,
          hint: "Avant le week-end.",
          explication: "« Friday » = vendredi. À retenir : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
        },
        {
          text: "Comment dit-on « janvier » ?",
          options: ["January", "Jenuary", "Genuary", "Januari"],
          answer: 0,
          hint: "Comme en français mais en anglais !",
          explication: "« January » = janvier. Les mois prennent une majuscule en anglais."
        },
        {
          type: "vrai_faux",
          text: "En anglais, les jours et mois s'écrivent toujours avec une majuscule.",
          answer: 0,
          hint: "Contrairement au français !",
          explication: "VRAI. Monday, Tuesday, January, February… toujours avec une majuscule."
        },
        {
          text: "Que veut dire « July » ?",
          options: ["juin", "juillet", "août", "septembre"],
          answer: 1,
          hint: "Mois d'été (vacances).",
          explication: "« July » = juillet. « June » = juin, attention à ne pas confondre."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent un jour de la semaine ?",
          options: ["Wednesday", "January", "Sunday", "Tuesday"],
          answer: [0, 2, 3],
          hint: "« January » est un mois.",
          explication: "Wednesday (mercredi), Sunday (dimanche), Tuesday (mardi) sont des jours. January (janvier) est un mois."
        },
        {
          text: "Comment écrit-on le nombre 15 en anglais ?",
          options: ["fivteen", "fifteen", "fivten", "fiveteen"],
          answer: 1,
          hint: "« Five » + « teen ».",
          explication: "« Fifteen » = 15. De 13 à 19, les nombres se forment avec « -teen »."
        },
        {
          type: "texte",
          text: "Comment dit-on « dimanche » en anglais ?",
          answer: ["Sunday", "sunday"],
          hint: "Avec une majuscule en anglais.",
          explication: "« Sunday » = dimanche. Toujours avec une majuscule en anglais."
        }
      ]
    },
    {
      id: "daily-routine",
      name: "Daily routine",
      emoji: "🕗",
      desc: "Verbes courants, activités quotidiennes",
      questions: [
        {
          text: "Que veut dire « to eat » ?",
          options: ["dormir", "boire", "manger", "courir"],
          answer: 2,
          hint: "Quand on a faim.",
          explication: "« To eat » signifie manger. « To drink » = boire."
        },
        {
          text: "Que veut dire « I wake up » ?",
          options: ["Je me lave", "Je me réveille", "Je marche", "Je dors"],
          answer: 1,
          hint: "Action du matin, à l'opposé de dormir.",
          explication: "« I wake up » = je me réveille. « To wake up » = se réveiller."
        },
        {
          text: "Comment dit-on « Je vais à l'école » ?",
          options: ["I go to school", "I go school", "I goes to school", "I going school"],
          answer: 0,
          hint: "Préposition « to » + « school ».",
          explication: "« I go to school » est correct. Attention à la préposition « to »."
        },
        {
          text: "Que veut dire « to sleep » ?",
          options: ["jouer", "dormir", "manger", "parler"],
          answer: 1,
          hint: "Activité de la nuit.",
          explication: "« To sleep » = dormir. « I sleep » = je dors."
        },
        {
          text: "Comment dit-on « Je joue au football » ?",
          options: ["I play football", "I plays football", "I am play football", "I do football"],
          answer: 0,
          hint: "Verbe « to play » au présent simple.",
          explication: "« I play football » : verbe « to play » à la 1re personne du présent simple."
        },
        {
          type: "vrai_faux",
          text: "Au présent simple, on ajoute -s au verbe à la 3e personne du singulier (he, she, it).",
          answer: 0,
          hint: "Règle de base : « he plays », « she eats », « it runs ».",
          explication: "VRAI. À la 3e personne du singulier au présent simple, on ajoute -s : « he plays football »."
        },
        {
          text: "Que veut dire « to drink » ?",
          options: ["manger", "courir", "boire", "voir"],
          answer: 2,
          hint: "Avec un verre par exemple.",
          explication: "« To drink » = boire. « I drink water » = je bois de l'eau."
        },
        {
          type: "qcm",
          text: "Quels verbes désignent des activités quotidiennes courantes ?",
          options: ["to eat", "to sleep", "to fly to Mars", "to brush teeth"],
          answer: [0, 1, 3],
          hint: "Aller sur Mars n'est pas (encore) quotidien.",
          explication: "Manger, dormir, se brosser les dents sont quotidiens. Voler vers Mars ne l'est pas."
        },
        {
          text: "Comment dit-on « Je me brosse les dents » ?",
          options: ["I wash my teeth", "I brush my teeth", "I clean my teeth only", "My teeth brush"],
          answer: 1,
          hint: "Verbe « to brush ».",
          explication: "« I brush my teeth » = je me brosse les dents."
        },
        {
          type: "texte",
          text: "Comment dit-on « manger » (à l'infinitif, avec « to » en anglais) ?",
          answer: ["to eat", "eat"],
          hint: "Infinitif anglais.",
          explication: "« To eat » = manger. L'infinitif anglais utilise toujours « to »."
        }
      ]
    },
    {
      id: "school",
      name: "School",
      emoji: "🏫",
      desc: "Vocabulaire de l'école et des matières",
      questions: [
        {
          text: "Que veut dire « school » ?",
          options: ["maison", "école", "magasin", "parc"],
          answer: 1,
          hint: "Lieu où on apprend.",
          explication: "« School » = école. « High school » = lycée."
        },
        {
          text: "Comment dit-on « professeur » ?",
          options: ["student", "teacher", "doctor", "engineer"],
          answer: 1,
          hint: "Personne qui enseigne.",
          explication: "« Teacher » = professeur, enseignant. « Student » = élève / étudiant."
        },
        {
          text: "Que veut dire « student » ?",
          options: ["élève / étudiant", "professeur", "directeur", "parent"],
          answer: 0,
          hint: "Celui qui apprend.",
          explication: "« Student » désigne l'élève ou l'étudiant qui apprend."
        },
        {
          text: "Comment dit-on « mathématiques » ?",
          options: ["History", "Maths (ou Mathematics)", "English", "Science"],
          answer: 1,
          hint: "Abrégé en « maths » en anglais britannique.",
          explication: "« Maths » (UK) ou « Math » (US) = mathématiques. La forme longue est « Mathematics »."
        },
        {
          text: "Que veut dire « English class » ?",
          options: ["classe d'anglais", "anglais difficile", "cours d'histoire", "salle de sport"],
          answer: 0,
          hint: "« Class » = cours / classe.",
          explication: "« English class » = classe / cours d'anglais."
        },
        {
          type: "vrai_faux",
          text: "« Homework » signifie « devoirs ».",
          answer: 0,
          hint: "« Home » + « work » = travail à la maison.",
          explication: "VRAI. « Homework » = devoirs à la maison."
        },
        {
          text: "Que veut dire « to learn » ?",
          options: ["enseigner", "apprendre", "écrire", "lire"],
          answer: 1,
          hint: "Action d'acquérir des connaissances.",
          explication: "« To learn » = apprendre. « To teach » = enseigner."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots sont liés à l'école ?",
          options: ["teacher", "homework", "kitchen", "classroom"],
          answer: [0, 1, 3],
          hint: "« Kitchen » signifie cuisine.",
          explication: "Teacher (professeur), homework (devoirs), classroom (salle de classe) sont liés à l'école. « Kitchen » = cuisine."
        },
        {
          text: "Comment dit-on « livre » en anglais ?",
          options: ["pen", "book", "paper", "desk"],
          answer: 1,
          hint: "Mot très courant.",
          explication: "« Book » = livre. « Pen » = stylo, « paper » = papier, « desk » = bureau."
        },
        {
          type: "texte",
          text: "Comment dit-on « professeur » en anglais ? (Un mot)",
          answer: ["teacher", "Teacher"],
          hint: "Vient de « to teach » = enseigner.",
          explication: "« Teacher » = professeur, enseignant en anglais."
        }
      ]
    },
    {
      id: "food-drinks",
      name: "Food & drinks",
      emoji: "🍎",
      desc: "Nourriture, boissons, repas",
      questions: [
        {
          text: "Comment dit-on « pomme » en anglais ?",
          options: ["orange", "apple", "banana", "grape"],
          answer: 1,
          hint: "Ce mot a donné son nom à une célèbre marque informatique.",
          explication: "« Apple » = pomme. « Orange » = orange, « banana » = banane, « grape » = raisin."
        },
        {
          text: "Que veut dire « I'm hungry » ?",
          options: ["J'ai soif", "J'ai faim", "Je suis fatigué", "Je suis heureux"],
          answer: 1,
          hint: "« Hungry » = affamé.",
          explication: "« I'm hungry » = J'ai faim. L'opposé : « I'm thirsty » = J'ai soif."
        },
        {
          text: "Comment dit-on « eau » en anglais ?",
          options: ["milk", "juice", "water", "coffee"],
          answer: 2,
          hint: "Mot de 5 lettres, la boisson la plus importante.",
          explication: "« Water » = eau. « Milk » = lait, « juice » = jus."
        },
        {
          text: "Que veut dire « bread » ?",
          options: ["beurre", "pain", "fromage", "lait"],
          answer: 1,
          hint: "Aliment de base qu'on mange le matin avec du beurre.",
          explication: "« Bread » = pain. « Butter » = beurre, « cheese » = fromage."
        },
        {
          text: "Comment dit-on « le petit-déjeuner » ?",
          options: ["lunch", "dinner", "breakfast", "snack"],
          answer: 2,
          hint: "Repas du matin qui « brise » le jeûne de la nuit.",
          explication: "« Breakfast » = petit-déjeuner (littéralement « briser le jeûne »). « Lunch » = déjeuner, « dinner » = dîner."
        },
        {
          type: "vrai_faux",
          text: "« Chicken » signifie « poulet » en anglais.",
          answer: 0,
          hint: "On peut aussi l'entendre pour désigner la poule.",
          explication: "VRAI. « Chicken » = poulet (viande) ou poule. Ce mot désigne à la fois l'animal et sa viande."
        },
        {
          text: "Comment dit-on « Je voudrais un jus d'orange » ?",
          options: ["I would like an orange juice", "I want orange drink please I", "Give me orange drink", "I have orange juice"],
          answer: 0,
          hint: "« I would like » est la formule polie pour commander.",
          explication: "« I would like an orange juice » est la formule polie. Moins formel : « Can I have an orange juice? »"
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des fruits ?",
          options: ["apple", "banana", "potato", "strawberry"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un légume.",
          explication: "Apple (pomme), banana (banane), strawberry (fraise) sont des fruits. Potato (pomme de terre) est un légume."
        },
        {
          text: "Que veut dire « to drink » ?",
          options: ["manger", "boire", "cuisiner", "goûter"],
          answer: 1,
          hint: "Action qu'on fait avec un verre à la main.",
          explication: "« To drink » = boire. « To eat » = manger."
        },
        {
          type: "texte",
          text: "Comment dit-on « lait » en anglais ?",
          answer: ["milk", "Milk"],
          hint: "Trois lettres, boisson blanche.",
          explication: "« Milk » = lait."
        }
      ]
    },
    {
      id: "my-house",
      name: "My house",
      emoji: "🏠",
      desc: "Pièces de la maison, mobilier",
      questions: [
        {
          text: "Comment dit-on « cuisine » (pièce de la maison) en anglais ?",
          options: ["bedroom", "kitchen", "bathroom", "living room"],
          answer: 1,
          hint: "C'est la pièce où on prépare les repas.",
          explication: "« Kitchen » = cuisine. Attention : « cuisine » en anglais ne désigne pas la pièce mais la gastronomie."
        },
        {
          text: "Que veut dire « bedroom » ?",
          options: ["salle de bain", "salon", "chambre à coucher", "cuisine"],
          answer: 2,
          hint: "« Bed » = lit + « room » = pièce.",
          explication: "« Bedroom » = chambre à coucher. Formé de « bed » (lit) + « room » (pièce)."
        },
        {
          text: "Comment dit-on « salle de bain » ?",
          options: ["living room", "bathroom", "kitchen", "garden"],
          answer: 1,
          hint: "« Bath » = bain + « room » = pièce.",
          explication: "« Bathroom » = salle de bain."
        },
        {
          text: "Que veut dire « living room » ?",
          options: ["chambre", "cuisine", "salon / salle de séjour", "couloir"],
          answer: 2,
          hint: "Pièce principale où la famille se réunit.",
          explication: "« Living room » = salon / salle de séjour, la pièce principale de la maison."
        },
        {
          text: "Comment dit-on « fenêtre » en anglais ?",
          options: ["door", "window", "wall", "floor"],
          answer: 1,
          hint: "Windows est aussi le nom d'un système informatique.",
          explication: "« Window » = fenêtre. « Door » = porte, « wall » = mur, « floor » = sol/plancher."
        },
        {
          type: "vrai_faux",
          text: "« Garden » signifie « jardin » en anglais.",
          answer: 0,
          hint: "Même racine que le mot français « jardin ».",
          explication: "VRAI. « Garden » = jardin. Les deux mots ont la même origine étymologique."
        },
        {
          text: "Que veut dire « stairs » ?",
          options: ["portes", "fenêtres", "escaliers", "murs"],
          answer: 2,
          hint: "On les monte et on les descend pour changer d'étage.",
          explication: "« Stairs » = escaliers. « I go up the stairs » = je monte l'escalier."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des pièces de la maison ?",
          options: ["kitchen", "bedroom", "tree", "bathroom"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots désigne un arbre.",
          explication: "Kitchen (cuisine), bedroom (chambre), bathroom (salle de bain) sont des pièces. Tree = arbre."
        },
        {
          text: "Comment dit-on « porte » en anglais ?",
          options: ["window", "wall", "door", "roof"],
          answer: 2,
          hint: "On l'ouvre pour entrer ou sortir.",
          explication: "« Door » = porte. « Window » = fenêtre, « wall » = mur, « roof » = toit."
        },
        {
          type: "texte",
          text: "Comment dit-on « chambre à coucher » en anglais ? (Un mot)",
          answer: ["bedroom", "Bedroom"],
          hint: "« Bed » (lit) + « room » (pièce).",
          explication: "« Bedroom » = chambre à coucher, formé de « bed » (lit) + « room » (pièce)."
        }
      ]
    },
    {
      id: "body-parts",
      name: "Body parts",
      emoji: "🧍",
      desc: "Les parties du corps",
      questions: [
        {
          text: "Que veut dire « head » ?",
          options: ["main", "pied", "tête", "dos"],
          answer: 2,
          hint: "Partie du corps tout en haut.",
          explication: "« Head » = tête."
        },
        {
          text: "Comment dit-on « main » (partie du corps) en anglais ?",
          options: ["foot", "hand", "arm", "leg"],
          answer: 1,
          hint: "Handbag = sac à main.",
          explication: "« Hand » = main. « Arm » = bras, « foot » = pied, « leg » = jambe."
        },
        {
          text: "Que veut dire « eye » ?",
          options: ["oreille", "nez", "œil", "bouche"],
          answer: 2,
          hint: "Les yeux au pluriel : « eyes ».",
          explication: "« Eye » = œil. Au pluriel : « eyes »."
        },
        {
          text: "Comment dit-on « jambe » en anglais ?",
          options: ["arm", "hand", "foot", "leg"],
          answer: 3,
          hint: "Partie du corps qu'on utilise pour courir.",
          explication: "« Leg » = jambe. « Arm » = bras."
        },
        {
          text: "Que veut dire « mouth » ?",
          options: ["nez", "bouche", "oreille", "dent"],
          answer: 1,
          hint: "Sert à parler et à manger.",
          explication: "« Mouth » = bouche. « Nose » = nez, « ear » = oreille."
        },
        {
          type: "vrai_faux",
          text: "« Nose » signifie « nez » en anglais.",
          answer: 0,
          hint: "Il se prononce « nôze ».",
          explication: "VRAI. « Nose » = nez."
        },
        {
          text: "Comment dit-on « dos » (partie du corps) en anglais ?",
          options: ["chest", "back", "shoulder", "neck"],
          answer: 1,
          hint: "Sac à dos = backpack (littéralement « paquet dans le dos »).",
          explication: "« Back » = dos. « Backpack » = sac à dos."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des parties du visage ?",
          options: ["eye", "nose", "knee", "mouth"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots désigne une articulation de la jambe.",
          explication: "Eye (œil), nose (nez), mouth (bouche) sont sur le visage. Knee = genou."
        },
        {
          text: "Que veut dire « finger » ?",
          options: ["pied", "bras", "doigt", "coude"],
          answer: 2,
          hint: "On en a dix sur les mains.",
          explication: "« Finger » = doigt (de la main). « Toe » = doigt de pied."
        },
        {
          type: "texte",
          text: "Comment dit-on « bras » en anglais ?",
          answer: ["arm", "Arm"],
          hint: "Trois lettres.",
          explication: "« Arm » = bras. Au pluriel : « arms »."
        }
      ]
    },
    {
      id: "clothes-colours",
      name: "Clothes & colours",
      emoji: "👕",
      desc: "Vêtements et couleurs",
      questions: [
        {
          text: "Comment dit-on « rouge » en anglais ?",
          options: ["blue", "green", "red", "yellow"],
          answer: 2,
          hint: "Couleur du feu et des pompiers.",
          explication: "« Red » = rouge. « Blue » = bleu, « green » = vert, « yellow » = jaune."
        },
        {
          text: "Comment dit-on « pantalon » en anglais ?",
          options: ["skirt", "trousers", "shoes", "coat"],
          answer: 1,
          hint: "Vêtement qui couvre les deux jambes.",
          explication: "« Trousers » = pantalon (anglais britannique). Aux États-Unis on dit « pants »."
        },
        {
          text: "Que veut dire « blue » ?",
          options: ["rouge", "vert", "bleu", "noir"],
          answer: 2,
          hint: "Couleur du ciel et de la mer.",
          explication: "« Blue » = bleu."
        },
        {
          text: "Comment dit-on « chaussures » en anglais ?",
          options: ["socks", "gloves", "shoes", "hat"],
          answer: 2,
          hint: "On les porte aux pieds pour sortir.",
          explication: "« Shoes » = chaussures. « Socks » = chaussettes, « hat » = chapeau."
        },
        {
          text: "Que veut dire « coat » ?",
          options: ["robe", "jupe", "manteau", "chapeau"],
          answer: 2,
          hint: "On le met quand il fait froid pour sortir.",
          explication: "« Coat » = manteau. « Dress » = robe, « skirt » = jupe."
        },
        {
          type: "vrai_faux",
          text: "« Black » signifie « noir » et « white » signifie « blanc ».",
          answer: 0,
          hint: "Ce sont les deux couleurs opposées.",
          explication: "VRAI. « Black » = noir, « white » = blanc."
        },
        {
          text: "Comment dit-on « Je porte un t-shirt vert » ?",
          options: ["I wear a green T-shirt", "I am a green T-shirt", "I have green clothes T-shirt", "My T-shirt is wearing green"],
          answer: 0,
          hint: "Verbe « to wear » = porter un vêtement.",
          explication: "« I wear a green T-shirt » : « to wear » = porter un vêtement. L'adjectif de couleur se place avant le nom."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des couleurs ?",
          options: ["red", "green", "shirt", "yellow"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un vêtement.",
          explication: "Red (rouge), green (vert), yellow (jaune) sont des couleurs. Shirt = chemise."
        },
        {
          text: "Que veut dire « skirt » ?",
          options: ["pantalon", "veste", "jupe", "robe"],
          answer: 2,
          hint: "Vêtement féminin qui couvre le bas du corps sans séparer les jambes.",
          explication: "« Skirt » = jupe. « Dress » = robe, « trousers » = pantalon."
        },
        {
          type: "texte",
          text: "Comment dit-on « vert » en anglais ?",
          answer: ["green", "Green"],
          hint: "Couleur de l'herbe.",
          explication: "« Green » = vert."
        }
      ]
    }
  ]
};
