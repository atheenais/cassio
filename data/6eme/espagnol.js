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
    }
  ]
};
