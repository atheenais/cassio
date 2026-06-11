/* Matière : Espagnol 🇪🇸 (6ème)
   6 thèmes × 10 questions = 60 questions
   Niveau grand débutant (LV2 démarrage) : vocabulaire de base + structures
   très simples (me llamo, tengo X años). Pas de conjugaison complexe.
   Audit-clean : options uniques, distracteurs équilibrés, indices qui guident
   sans donner la réponse. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["espagnol"] = {
  id: "espagnol",
  name: "Espagnol",
  emoji: "🇪🇸",
  desc: "Premiers mots, se présenter, vocabulaire de base",
  topics: [
    {
      id: "saludos",
      name: "Saludos",
      emoji: "👋",
      desc: "Saluer, dire au revoir, politesse",
      questions: [
        {
          text: "Comment dit-on « Bonjour » en espagnol (en journée) ?",
          options: ["Hola", "Adiós", "Gracias", "Buenas noches"],
          answer: 0,
          hint: "C'est le mot de salutation le plus courant, court et amical.",
          explication: "« Hola » signifie « Bonjour / Salut ». C'est la salutation universelle en espagnol."
        },
        {
          text: "Que veut dire « Adiós » ?",
          options: ["Bonjour", "Au revoir", "Merci", "S'il te plaît"],
          answer: 1,
          hint: "On le dit en partant, pas en arrivant.",
          explication: "« Adiós » signifie « Au revoir »."
        },
        {
          text: "Comment dit-on « Merci » en espagnol ?",
          options: ["Hola", "Perdón", "Gracias", "Por favor"],
          answer: 2,
          hint: "Mot proche de l'idée de gratitude, commence par « gr ».",
          explication: "« Gracias » signifie « Merci »."
        },
        {
          text: "Que signifie « Por favor » ?",
          options: ["De rien", "S'il te plaît", "Pardon", "Bonsoir"],
          answer: 1,
          hint: "On l'utilise pour demander quelque chose poliment.",
          explication: "« Por favor » signifie « S'il te plaît »."
        },
        {
          text: "Comment dit-on « Bonne nuit » ?",
          options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
          answer: 2,
          hint: "« Noche » rappelle le mot « nocturne ».",
          explication: "« Buenas noches » = « Bonne nuit » (ou « Bonsoir » tard le soir). « Noche » = nuit."
        },
        {
          text: "Que veut dire « Buenos días » ?",
          options: ["Bonjour (le matin)", "Bonne nuit", "Au revoir", "À bientôt"],
          answer: 0,
          hint: "« Días » signifie « jours ». On le dit le matin.",
          explication: "« Buenos días » = « Bonjour » le matin (littéralement « bons jours »)."
        },
        {
          type: "vrai_faux",
          text: "« Hasta luego » veut dire « À bientôt / À plus tard ».",
          answer: 0,
          hint: "« Luego » indique un moment futur proche.",
          explication: "VRAI. « Hasta luego » signifie « À plus tard / À bientôt »."
        },
        {
          text: "Comment dit-on « Pardon / Excuse-moi » ?",
          options: ["Gracias", "Perdón", "Hola", "Sí"],
          answer: 1,
          hint: "Ce mot ressemble beaucoup au français.",
          explication: "« Perdón » signifie « Pardon / Excuse-moi ». Très proche du français."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces expressions sont des salutations ou formules de politesse ?",
          options: ["Hola", "Gracias", "Mesa", "Por favor"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots désigne un objet, pas une formule de politesse.",
          explication: "« Hola », « Gracias » et « Por favor » sont des formules. « Mesa » signifie « table »."
        },
        {
          type: "texte",
          text: "Comment dit-on « Bonjour / Salut » en espagnol ? (Un mot)",
          answer: ["hola", "Hola"],
          hint: "Quatre lettres, commence par « h » (qui est muet en espagnol).",
          explication: "« Hola » est la salutation de base en espagnol."
        }
      ]
    },
    {
      id: "presentarse",
      name: "Presentarse",
      emoji: "🙋",
      desc: "Dire son nom, son âge, d'où l'on vient",
      questions: [
        {
          text: "Comment dit-on « Je m'appelle Ana » ?",
          options: ["Me llamo Ana", "Tengo Ana", "Soy de Ana", "Yo Ana años"],
          answer: 0,
          hint: "L'expression utilise le verbe « llamarse » (s'appeler).",
          explication: "« Me llamo Ana » = « Je m'appelle Ana »."
        },
        {
          text: "Que veut dire « ¿Cómo te llamas? »",
          options: ["Quel âge as-tu ?", "Comment t'appelles-tu ?", "D'où viens-tu ?", "Comment vas-tu ?"],
          answer: 1,
          hint: "On y retrouve le verbe « llamarse » (s'appeler).",
          explication: "« ¿Cómo te llamas? » = « Comment t'appelles-tu ? »"
        },
        {
          text: "Comment dit-on « J'ai 11 ans » ?",
          options: ["Soy 11 años", "Tengo 11 años", "Me llamo 11", "Hay 11 años"],
          answer: 1,
          hint: "En espagnol, on utilise le verbe « avoir » (tener) pour l'âge, comme en français.",
          explication: "« Tengo 11 años » = « J'ai 11 ans ». On utilise « tener » (avoir)."
        },
        {
          text: "Que signifie « ¿Cuántos años tienes? »",
          options: ["Comment t'appelles-tu ?", "Quel âge as-tu ?", "Où habites-tu ?", "Quelle heure est-il ?"],
          answer: 1,
          hint: "« Años » signifie « ans ».",
          explication: "« ¿Cuántos años tienes? » = « Quel âge as-tu ? » (littéralement « combien d'années as-tu »)."
        },
        {
          text: "Comment dit-on « Je suis français » ?",
          options: ["Soy francés", "Tengo francés", "Me llamo francés", "Hablo Francia"],
          answer: 0,
          hint: "On utilise le verbe « ser » (être) : « soy ».",
          explication: "« Soy francés » = « Je suis français ». « Soy » vient du verbe « ser » (être)."
        },
        {
          text: "Que veut dire « ¿De dónde eres? »",
          options: ["Quel âge as-tu ?", "Comment vas-tu ?", "D'où viens-tu ?", "Que fais-tu ?"],
          answer: 2,
          hint: "« Dónde » signifie « où ».",
          explication: "« ¿De dónde eres? » = « D'où viens-tu ? »"
        },
        {
          type: "vrai_faux",
          text: "Pour dire son âge en espagnol, on utilise le verbe « tener » (avoir), comme en français.",
          answer: 0,
          hint: "Pense à « Tengo 12 años ».",
          explication: "VRAI. On dit « tengo X años » (j'ai X ans), avec le verbe « tener » (avoir)."
        },
        {
          text: "Comment répond-on à « ¿Cómo estás? » (Comment vas-tu ?) si tout va bien ?",
          options: ["Me llamo bien", "Estoy bien", "Tengo bien", "Soy bien"],
          answer: 1,
          hint: "On reprend le verbe « estar » : « estoy… ».",
          explication: "« Estoy bien » = « Je vais bien ». On utilise « estar » pour l'état du moment."
        },
        {
          type: "qcm",
          text: "Quelles phrases servent à se présenter ?",
          options: ["Me llamo Pedro", "Tengo diez años", "La ventana está abierta", "Soy español"],
          answer: [0, 1, 3],
          hint: "L'une des phrases parle d'une fenêtre, pas de soi.",
          explication: "« Me llamo… », « Tengo… años », « Soy… » servent à se présenter. « La ventana está abierta » = « La fenêtre est ouverte »."
        },
        {
          type: "texte",
          text: "Complète : « ___ llamo Lucas » (Je m'appelle Lucas). Écris le mot manquant.",
          answer: ["me", "Me"],
          hint: "Petit mot de deux lettres qui précède « llamo ».",
          explication: "« Me llamo Lucas » = « Je m'appelle Lucas »."
        }
      ]
    },
    {
      id: "numeros",
      name: "Los números",
      emoji: "🔢",
      desc: "Compter de 0 à 31",
      questions: [
        {
          text: "Comment dit-on « un / 1 » en espagnol ?",
          options: ["uno", "dos", "tres", "diez"],
          answer: 0,
          hint: "Très proche du mot italien « uno ».",
          explication: "« Uno » = 1."
        },
        {
          text: "Que veut dire « cinco » ?",
          options: ["3", "4", "5", "6"],
          answer: 2,
          hint: "Ce mot ressemble au préfixe de « quintuple ».",
          explication: "« Cinco » = 5."
        },
        {
          text: "Comment dit-on « 10 » ?",
          options: ["dos", "diez", "doce", "veinte"],
          answer: 1,
          hint: "Ne pas confondre avec « doce » (12).",
          explication: "« Diez » = 10. Attention : « doce » = 12."
        },
        {
          text: "Que veut dire « veinte » ?",
          options: ["12", "15", "20", "30"],
          answer: 2,
          hint: "C'est une dizaine ronde, à ne pas confondre avec « quince » (15).",
          explication: "« Veinte » = 20."
        },
        {
          text: "Quel nombre est « siete » ?",
          options: ["6", "7", "8", "9"],
          answer: 1,
          hint: "Il se place entre « seis » et « ocho ».",
          explication: "« Siete » = 7 (entre « seis » 6 et « ocho » 8)."
        },
        {
          text: "Comment dit-on « 3 » ?",
          options: ["tres", "trece", "treinta", "cuatro"],
          answer: 0,
          hint: "Ne pas confondre avec « trece » (13) ni « treinta » (30).",
          explication: "« Tres » = 3. Attention : « trece » = 13, « treinta » = 30."
        },
        {
          type: "vrai_faux",
          text: "« Once » signifie « 11 » en espagnol.",
          answer: 0,
          hint: "Il vient juste après « diez » (10).",
          explication: "VRAI. « Once » = 11."
        },
        {
          text: "Quel est le bon ordre croissant ?",
          options: ["uno, dos, tres, cuatro", "dos, uno, cuatro, tres", "cuatro, tres, dos, uno", "tres, uno, dos, cuatro"],
          answer: 0,
          hint: "Cherche la suite qui commence à 1 et augmente régulièrement.",
          explication: "« uno (1), dos (2), tres (3), cuatro (4) » est l'ordre croissant correct."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des nombres ?",
          options: ["seis", "ocho", "rojo", "nueve"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est une couleur, pas un nombre.",
          explication: "« Seis » (6), « ocho » (8), « nueve » (9) sont des nombres. « Rojo » = rouge (couleur)."
        },
        {
          type: "texte",
          text: "Comment écrit-on le nombre « 2 » en espagnol ? (Un mot)",
          answer: ["dos", "Dos"],
          hint: "Trois lettres, ressemble au français « duo ».",
          explication: "« Dos » = 2."
        }
      ]
    },
    {
      id: "colores",
      name: "Los colores",
      emoji: "🎨",
      desc: "Les couleurs de base",
      questions: [
        {
          text: "Que veut dire « rojo » ?",
          options: ["bleu", "rouge", "vert", "jaune"],
          answer: 1,
          hint: "C'est la couleur des tomates et des fraises.",
          explication: "« Rojo » = rouge."
        },
        {
          text: "Comment dit-on « bleu » ?",
          options: ["verde", "amarillo", "azul", "negro"],
          answer: 2,
          hint: "C'est la couleur du ciel dégagé.",
          explication: "« Azul » = bleu."
        },
        {
          text: "Que signifie « amarillo » ?",
          options: ["jaune", "orange", "marron", "blanc"],
          answer: 0,
          hint: "C'est la couleur du citron et du soleil.",
          explication: "« Amarillo » = jaune."
        },
        {
          text: "Comment dit-on « vert » ?",
          options: ["rojo", "verde", "gris", "rosa"],
          answer: 1,
          hint: "C'est la couleur de l'herbe. Le mot ressemble au français « verdure ».",
          explication: "« Verde » = vert."
        },
        {
          text: "Que veut dire « negro » ?",
          options: ["blanc", "gris", "noir", "violet"],
          answer: 2,
          hint: "C'est la couleur la plus sombre.",
          explication: "« Negro » = noir."
        },
        {
          text: "Comment dit-on « blanc » ?",
          options: ["blanco", "azul", "verde", "rojo"],
          answer: 0,
          hint: "Très proche du mot français.",
          explication: "« Blanco » = blanc."
        },
        {
          type: "vrai_faux",
          text: "« Rosa » signifie « rose » en espagnol.",
          answer: 0,
          hint: "Ce mot ressemble énormément au français.",
          explication: "VRAI. « Rosa » = rose."
        },
        {
          text: "De quelle couleur est le ciel par beau temps, en espagnol ?",
          options: ["rojo", "azul", "marrón", "negro"],
          answer: 1,
          hint: "C'est aussi la couleur de la mer.",
          explication: "Le ciel par beau temps est « azul » (bleu)."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots sont des couleurs ?",
          options: ["verde", "amarillo", "perro", "gris"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un animal.",
          explication: "« Verde » (vert), « amarillo » (jaune), « gris » (gris) sont des couleurs. « Perro » = chien."
        },
        {
          type: "texte",
          text: "Comment dit-on « rouge » en espagnol ? (Un mot)",
          answer: ["rojo", "Rojo"],
          hint: "Quatre lettres, couleur de la tomate.",
          explication: "« Rojo » = rouge."
        }
      ]
    },
    {
      id: "familia",
      name: "La familia",
      emoji: "👨‍👩‍👧‍👦",
      desc: "Les membres de la famille",
      questions: [
        {
          text: "Que veut dire « madre » ?",
          options: ["père", "mère", "sœur", "frère"],
          answer: 1,
          hint: "Ressemble au français « maternel ».",
          explication: "« Madre » = mère. Familièrement : « mamá »."
        },
        {
          text: "Comment dit-on « père » ?",
          options: ["madre", "padre", "hermano", "abuelo"],
          answer: 1,
          hint: "Ressemble au français « paternel ».",
          explication: "« Padre » = père. Familièrement : « papá »."
        },
        {
          text: "Que signifie « hermano » ?",
          options: ["frère", "sœur", "cousin", "oncle"],
          answer: 0,
          hint: "La version féminine est « hermana ».",
          explication: "« Hermano » = frère. « Hermana » = sœur."
        },
        {
          text: "Comment dit-on « sœur » ?",
          options: ["hermano", "hermana", "hija", "tía"],
          answer: 1,
          hint: "C'est la forme féminine de « hermano ».",
          explication: "« Hermana » = sœur."
        },
        {
          text: "Que veut dire « abuelo » ?",
          options: ["oncle", "cousin", "grand-père", "neveu"],
          answer: 2,
          hint: "La version féminine « abuela » désigne la grand-mère.",
          explication: "« Abuelo » = grand-père. « Abuela » = grand-mère."
        },
        {
          text: "Comment dit-on « fille » (enfant de sexe féminin) ?",
          options: ["hijo", "hija", "madre", "tía"],
          answer: 1,
          hint: "La forme masculine est « hijo » (fils).",
          explication: "« Hija » = fille (descendante). « Hijo » = fils."
        },
        {
          type: "vrai_faux",
          text: "« Tía » signifie « tante » en espagnol.",
          answer: 0,
          hint: "La forme masculine « tío » désigne l'oncle.",
          explication: "VRAI. « Tía » = tante, « tío » = oncle."
        },
        {
          text: "Comment dit-on « ma famille » ?",
          options: ["mi familia", "tu familia", "la familia", "su familia"],
          answer: 0,
          hint: "« Mon / ma » se dit « mi » en espagnol.",
          explication: "« Mi familia » = « ma famille ». « Mi » = mon/ma."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des membres de la famille ?",
          options: ["padre", "hermana", "gato", "abuela"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un animal de compagnie.",
          explication: "« Padre », « hermana », « abuela » sont de la famille. « Gato » = chat."
        },
        {
          type: "texte",
          text: "Comment dit-on « mère » en espagnol ? (Un mot)",
          answer: ["madre", "Madre"],
          hint: "Cinq lettres, ressemble à « maternel ».",
          explication: "« Madre » = mère."
        }
      ]
    },
    {
      id: "en-clase",
      name: "En clase",
      emoji: "🏫",
      desc: "Objets et vocabulaire de la classe",
      questions: [
        {
          text: "Que veut dire « el libro » ?",
          options: ["le stylo", "le livre", "la table", "le cahier"],
          answer: 1,
          hint: "Ressemble au mot « librairie » (lieu où l'on vend des livres).",
          explication: "« El libro » = le livre."
        },
        {
          text: "Comment dit-on « le professeur » ?",
          options: ["el alumno", "el profesor", "la mesa", "el lápiz"],
          answer: 1,
          hint: "Très proche du mot français.",
          explication: "« El profesor » = le professeur. « La profesora » au féminin."
        },
        {
          text: "Que signifie « la mesa » ?",
          options: ["la chaise", "la fenêtre", "la table", "la porte"],
          answer: 2,
          hint: "C'est le meuble sur lequel on pose ses affaires pour travailler.",
          explication: "« La mesa » = la table."
        },
        {
          text: "Comment dit-on « l'élève » ?",
          options: ["el alumno", "el profesor", "el libro", "la clase"],
          answer: 0,
          hint: "La forme féminine est « la alumna ».",
          explication: "« El alumno » = l'élève (garçon). « La alumna » = l'élève (fille)."
        },
        {
          text: "Que veut dire « el lápiz » ?",
          options: ["le cahier", "le crayon", "la gomme", "le sac"],
          answer: 1,
          hint: "C'est l'outil en bois avec une mine grise pour écrire.",
          explication: "« El lápiz » = le crayon (à papier)."
        },
        {
          text: "Comment dit-on « la porte » ?",
          options: ["la ventana", "la puerta", "la silla", "la mesa"],
          answer: 1,
          hint: "Ressemble au mot français « portail ».",
          explication: "« La puerta » = la porte."
        },
        {
          type: "vrai_faux",
          text: "« La ventana » signifie « la fenêtre ».",
          answer: 0,
          hint: "Pense à « ventiler » (faire entrer l'air).",
          explication: "VRAI. « La ventana » = la fenêtre."
        },
        {
          text: "Que veut dire « la silla » ?",
          options: ["la table", "la chaise", "le tableau", "le livre"],
          answer: 1,
          hint: "C'est ce sur quoi on s'assoit en classe.",
          explication: "« La silla » = la chaise."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des objets ou des personnes de la classe ?",
          options: ["el libro", "la mesa", "el perro", "el profesor"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un animal qui n'a rien à faire en classe.",
          explication: "« El libro », « la mesa », « el profesor » sont de la classe. « El perro » = le chien."
        },
        {
          type: "texte",
          text: "Comment dit-on « le livre » en espagnol ? (Deux mots, avec l'article)",
          answer: ["el libro", "El libro"],
          hint: "Article masculin « el » + le mot proche de « librairie ».",
          explication: "« El libro » = le livre."
        }
      ]
    },
    {
      id: "animales",
      name: "Los animales",
      emoji: "🐾",
      desc: "Animaux courants et animaux de compagnie",
      questions: [
        {
          text: "Que veut dire « perro » ?",
          options: ["chat", "chien", "cheval", "lapin"],
          answer: 1,
          hint: "Animal domestique courant, ami de l'homme.",
          explication: "« Perro » = chien. « Gato » = chat."
        },
        {
          text: "Comment dit-on « chat » en espagnol ?",
          options: ["perro", "conejo", "gato", "pájaro"],
          answer: 2,
          hint: "Ressemble un peu au mot anglais « cat ».",
          explication: "« Gato » = chat. « Gata » pour une chatte."
        },
        {
          text: "Que signifie « caballo » ?",
          options: ["vache", "mouton", "cheval", "cochon"],
          answer: 2,
          hint: "Animal qu'on monte pour se déplacer.",
          explication: "« Caballo » = cheval."
        },
        {
          text: "Comment dit-on « oiseau » en espagnol ?",
          options: ["pez", "pájaro", "ratón", "vaca"],
          answer: 1,
          hint: "Animal qui vole et qui chante.",
          explication: "« Pájaro » = oiseau. La « j » espagnole se prononce de façon gutturale."
        },
        {
          text: "Que veut dire « vaca » ?",
          options: ["chèvre", "mouton", "cochon", "vache"],
          answer: 3,
          hint: "Animal de la ferme qui donne du lait.",
          explication: "« Vaca » = vache."
        },
        {
          type: "vrai_faux",
          text: "« Pez » signifie « poisson » en espagnol.",
          answer: 0,
          hint: "On dit « un pez de colores » pour un poisson rouge.",
          explication: "VRAI. « Pez » = poisson (dans l'eau). « Pescado » désigne le poisson dans l'assiette."
        },
        {
          text: "Comment dit-on « lapin » en espagnol ?",
          options: ["ratón", "conejo", "pájaro", "rana"],
          answer: 1,
          hint: "Petit animal aux grandes oreilles.",
          explication: "« Conejo » = lapin."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des animaux domestiques courants ?",
          options: ["perro", "gato", "mesa", "conejo"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un meuble.",
          explication: "« Perro » (chien), « gato » (chat), « conejo » (lapin) sont des animaux. « Mesa » = table."
        },
        {
          text: "Comment dit-on « j'ai un chien » en espagnol ?",
          options: ["Soy un perro", "Me llamo perro", "Tengo un perro", "Hay un perro mío"],
          answer: 2,
          hint: "On utilise le verbe « tener » (avoir).",
          explication: "« Tengo un perro » = j'ai un chien. « Tener » = avoir."
        },
        {
          type: "texte",
          text: "Comment dit-on « chien » en espagnol ? (Un mot)",
          answer: ["perro", "Perro"],
          hint: "Cinq lettres avec deux « r » — qui se roulent en espagnol.",
          explication: "« Perro » = chien. Le double « rr » en espagnol se prononce de façon roulée."
        }
      ]
    },
    {
      id: "el-tiempo",
      name: "El tiempo y los días",
      emoji: "⛅",
      desc: "La météo et les jours de la semaine",
      questions: [
        {
          text: "Comment dit-on « il fait beau » en espagnol ?",
          options: ["Hace frío", "Hace calor", "Hace buen tiempo", "Llueve"],
          answer: 2,
          hint: "« Bueno » = bon, « tiempo » = temps.",
          explication: "« Hace buen tiempo » = il fait beau (littéralement « il fait bon temps »)."
        },
        {
          text: "Que veut dire « Llueve » ?",
          options: ["Il neige", "Il fait froid", "Il pleut", "Il y a du vent"],
          answer: 2,
          hint: "Pense au mot « lluvia » qui signifie « pluie ».",
          explication: "« Llueve » = il pleut. « Lluvia » = la pluie."
        },
        {
          text: "Comment dit-on « lundi » en espagnol ?",
          options: ["martes", "miércoles", "lunes", "jueves"],
          answer: 2,
          hint: "Son nom vient de « luna » (la Lune).",
          explication: "« Lunes » = lundi. Ce jour doit son nom à la Lune (« luna »)."
        },
        {
          text: "Quel jour de la semaine est « viernes » ?",
          options: ["mercredi", "jeudi", "vendredi", "samedi"],
          answer: 2,
          hint: "Son nom vient de Vénus, déesse romaine.",
          explication: "« Viernes » = vendredi. Il doit son nom à la planète Vénus (Veneris dies en latin)."
        },
        {
          text: "Comment dit-on « il fait froid » en espagnol ?",
          options: ["Hace calor", "Hace frío", "Hace sol", "Hace viento"],
          answer: 1,
          hint: "« Frío » ressemble au mot français « froid ».",
          explication: "« Hace frío » = il fait froid. « Frío » = froid."
        },
        {
          type: "vrai_faux",
          text: "« Domingo » signifie « dimanche » en espagnol.",
          answer: 0,
          hint: "Son nom vient du latin « Dominicus » (le jour du Seigneur).",
          explication: "VRAI. « Domingo » = dimanche."
        },
        {
          text: "Comment dit-on « il y a du soleil » en espagnol ?",
          options: ["Hace viento", "Hace calor", "Hace sol", "Nieva"],
          answer: 2,
          hint: "« Sol » = soleil.",
          explication: "« Hace sol » = il y a du soleil. « Sol » = soleil."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots sont des jours de la semaine ?",
          options: ["lunes", "martes", "enero", "sábado"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots est un mois.",
          explication: "« Lunes » (lundi), « martes » (mardi), « sábado » (samedi) sont des jours. « Enero » = janvier (mois)."
        },
        {
          text: "Que veut dire « Nieva » ?",
          options: ["Il fait soleil", "Il fait froid", "Il neige", "Il y a du vent"],
          answer: 2,
          hint: "Pense au mot « nieve » qui signifie « neige ».",
          explication: "« Nieva » = il neige. « Nieve » = la neige."
        },
        {
          type: "texte",
          text: "Comment dit-on « il fait beau » en espagnol ? (Trois mots : Hace ___ tiempo)",
          answer: ["buen", "Buen"],
          hint: "L'adjectif qui signifie « bon » devant un nom masculin.",
          explication: "« Hace buen tiempo » = il fait beau. « Buen » est la forme de « bueno » devant un nom masculin."
        }
      ]
    },
    {
      id: "alimentos",
      name: "Los alimentos",
      emoji: "🥘",
      desc: "Nourriture courante et repas",
      questions: [
        {
          text: "Que veut dire « el pan » ?",
          options: ["le lait", "le pain", "le fromage", "le beurre"],
          answer: 1,
          hint: "Aliment de base qu'on mange à chaque repas.",
          explication: "« El pan » = le pain. Très consommé en Espagne et dans les pays hispanophones."
        },
        {
          text: "Comment dit-on « l'eau » en espagnol ?",
          options: ["la leche", "el zumo", "el agua", "la sopa"],
          answer: 2,
          hint: "La boisson la plus importante pour la vie.",
          explication: "« El agua » = l'eau. En espagnol, « agua » est féminin mais prend l'article « el » pour des raisons de sonorité."
        },
        {
          text: "Que signifie « la leche » ?",
          options: ["le jus", "l'eau", "le lait", "la soupe"],
          answer: 2,
          hint: "Boisson blanche produite par les vaches.",
          explication: "« La leche » = le lait."
        },
        {
          text: "Comment dit-on « je mange » en espagnol ?",
          options: ["Bebo", "Tengo", "Como", "Hablo"],
          answer: 2,
          hint: "Verbe « comer » (manger) conjugué à la 1re personne.",
          explication: "« Como » = je mange. Vient du verbe « comer » (manger). « Bebo » = je bois."
        },
        {
          text: "Que veut dire « la fruta » ?",
          options: ["le légume", "le fruit", "la viande", "le gâteau"],
          answer: 1,
          hint: "Très proche du mot français.",
          explication: "« La fruta » = le fruit."
        },
        {
          type: "vrai_faux",
          text: "« El desayuno » signifie « le petit-déjeuner ».",
          answer: 0,
          hint: "C'est le premier repas de la journée.",
          explication: "VRAI. « El desayuno » = le petit-déjeuner. « Desayunar » = prendre le petit-déjeuner."
        },
        {
          text: "Comment dit-on « je bois du jus d'orange » en espagnol ?",
          options: ["Bebo zumo de naranja", "Como zumo de naranja", "Tengo zumo naranja", "Hablo zumo naranja"],
          answer: 0,
          hint: "Verbe « beber » (boire) → « bebo » à la 1re personne.",
          explication: "« Bebo zumo de naranja » = je bois du jus d'orange. « Beber » = boire, « naranja » = orange."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des aliments ou des boissons ?",
          options: ["el pan", "la leche", "la silla", "la fruta"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots désigne un meuble.",
          explication: "Pan (pain), leche (lait), fruta (fruit) sont des aliments. Silla = chaise."
        },
        {
          text: "Que veut dire « tengo hambre » ?",
          options: ["j'ai soif", "j'ai faim", "j'ai chaud", "j'ai froid"],
          answer: 1,
          hint: "« Hambre » = la faim.",
          explication: "« Tengo hambre » = j'ai faim (littéralement « j'ai de la faim »)."
        },
        {
          type: "texte",
          text: "Comment dit-on « le pain » en espagnol ? (Deux mots avec l'article)",
          answer: ["el pan", "El pan"],
          hint: "Article masculin singulier « el » + aliment de base.",
          explication: "« El pan » = le pain."
        }
      ]
    },
    {
      id: "la-casa",
      name: "La casa",
      emoji: "🏠",
      desc: "Les pièces et le mobilier de la maison",
      questions: [
        {
          text: "Que veut dire « la cocina » ?",
          options: ["la chambre", "la salle de bain", "la cuisine", "le salon"],
          answer: 2,
          hint: "Pièce où l'on prépare les repas. Le verbe « cocinar » = cuisiner.",
          explication: "« La cocina » = la cuisine."
        },
        {
          text: "Comment dit-on « la chambre à coucher » en espagnol ?",
          options: ["el baño", "la cocina", "el dormitorio", "el salón"],
          answer: 2,
          hint: "« Dormir » = dormir → la pièce où l'on dort.",
          explication: "« El dormitorio » = la chambre à coucher. De « dormir » (dormir)."
        },
        {
          text: "Que signifie « el baño » ?",
          options: ["la cuisine", "la salle de bain", "le couloir", "le grenier"],
          answer: 1,
          hint: "« Baño » ressemble au mot français « bain ».",
          explication: "« El baño » = la salle de bain. « Bañarse » = se baigner."
        },
        {
          text: "Comment dit-on « le salon » (pièce principale) en espagnol ?",
          options: ["el dormitorio", "la cocina", "el salón", "el pasillo"],
          answer: 2,
          hint: "Pièce où la famille se réunit — mot très proche du français.",
          explication: "« El salón » = le salon / la salle de séjour."
        },
        {
          text: "Que veut dire « la cama » ?",
          options: ["la table", "le lit", "la chaise", "la fenêtre"],
          answer: 1,
          hint: "On y dort la nuit.",
          explication: "« La cama » = le lit."
        },
        {
          type: "vrai_faux",
          text: "« El jardín » signifie « le jardin » en espagnol.",
          answer: 0,
          hint: "Ces deux mots ont la même origine latine.",
          explication: "VRAI. « El jardín » = le jardin."
        },
        {
          text: "Comment dit-on « la porte » en espagnol ?",
          options: ["la ventana", "la pared", "la puerta", "el techo"],
          answer: 2,
          hint: "On l'ouvre pour entrer ou sortir.",
          explication: "« La puerta » = la porte. « La ventana » = la fenêtre, « la pared » = le mur."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots désignent des pièces de la maison ?",
          options: ["la cocina", "el dormitorio", "el árbol", "el baño"],
          answer: [0, 1, 3],
          hint: "L'un de ces mots désigne un élément de la nature.",
          explication: "Cocina (cuisine), dormitorio (chambre), baño (salle de bain) sont des pièces. Árbol = arbre."
        },
        {
          text: "Comment dit-on « j'habite dans une maison » en espagnol ?",
          options: ["Tengo una casa", "Vivo en una casa", "Soy una casa", "Me llamo casa"],
          answer: 1,
          hint: "Verbe « vivir » (vivre / habiter) conjugué à la 1re personne : « vivo ».",
          explication: "« Vivo en una casa » = j'habite dans une maison. « Vivir » = vivre/habiter."
        },
        {
          type: "texte",
          text: "Comment dit-on « la cuisine » (pièce de la maison) en espagnol ? (Deux mots avec l'article)",
          answer: ["la cocina", "La cocina"],
          hint: "Article féminin « la » + lieu où l'on prépare les repas.",
          explication: "« La cocina » = la cuisine. Du verbe « cocinar » (cuisiner)."
        }
      ]
    }
  ]
};
