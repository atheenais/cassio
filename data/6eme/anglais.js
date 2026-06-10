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
    }
  ]
};
