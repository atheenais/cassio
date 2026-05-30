/* Matière : Anglais 🇬🇧
   8 thèmes × 10 questions = 80 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["anglais"] = {
  id: "anglais",
  name: "Anglais",
  emoji: "🇬🇧",
  desc: "Vocabulaire, grammaire, verbes, expressions",
  topics: [
    {
      id: "vocab_en",
      name: "Vocabulaire",
      emoji: "📚",
      desc: "Traductions et mots courants",
      questions: [
        {
          text: "What does 'butterfly' mean in French?",
          options: ["Une abeille","Un papillon","Une libellule","Un oiseau"],
          answer: 1,
          explication: "'Butterfly' = un papillon. 'Bee' = une abeille, 'Dragonfly' = une libellule, 'Bird' = un oiseau."
        },
        {
          text: "Comment dit-on 'fenêtre' en anglais ?",
          options: ["door","wall","window","roof"],
          answer: 2,
          explication: "'Window' = la fenêtre. 'Door' = la porte, 'Wall' = le mur, 'Roof' = le toit."
        },
        {
          text: "What does 'proud' mean in French?",
          options: ["Triste","En colère","Fier / Fière","Fatigué"],
          answer: 2,
          explication: "'Proud' = fier/fière. Ex : 'I am proud of you.' = 'Je suis fier/fière de toi.'"
        },
        {
          text: "Comment dit-on 'hier' en anglais ?",
          options: ["today","tomorrow","yesterday","now"],
          answer: 2,
          explication: "'Yesterday' = hier. 'Today' = aujourd'hui, 'Tomorrow' = demain, 'Now' = maintenant."
        },
        {
          text: "Which word means 'l'école' in English?",
          options: ["library","hospital","school","market"],
          answer: 2,
          explication: "'School' = l'école. 'Library' = la bibliothèque, 'Hospital' = l'hôpital, 'Market' = le marché."
        },
        {
          text: "What does 'tree' mean in French?",
          options: ["Une fleur","Un arbre","Une feuille","Un fruit"],
          answer: 1,
          explication: "'Tree' = un arbre. 'Flower' = une fleur, 'Leaf' = une feuille, 'Fruit' = un fruit."
        },
        {
          text: "Comment dit-on « un chien » en anglais ?",
          options: ["a cat","a dog","a bird","a horse"],
          answer: 1,
          explication: "'A dog' = un chien. 'A cat' = un chat, 'A bird' = un oiseau, 'A horse' = un cheval."
        },
        {
          text: "What does 'happy' mean in French?",
          options: ["Triste","Heureux / Content","Fatigué","En colère"],
          answer: 1,
          explication: "'Happy' = heureux/content. 'Sad' = triste, 'Tired' = fatigué, 'Angry' = en colère."
        },
        {
          text: "Comment dit-on « la nourriture » en anglais ?",
          options: ["water","food","drink","table"],
          answer: 1,
          explication: "'Food' = la nourriture. 'Water' = l'eau, 'Drink' = la boisson, 'Table' = la table."
        },
        {
          text: "Which word means 'le livre' in English?",
          options: ["pen","book","bag","desk"],
          answer: 1,
          explication: "'Book' = le livre. 'Pen' = le stylo, 'Bag' = le sac, 'Desk' = le bureau."
        }
      ]
    },
    {
      id: "grammar_en",
      name: "Grammaire",
      emoji: "📖",
      desc: "Structure de la phrase anglaise",
      questions: [
        {
          text: "Quelle est la bonne traduction de 'Je m'appelle Lila.' ?",
          options: ["I name is Lila.","My name is Lila.","Me call Lila.","I am Lila name."],
          answer: 1,
          explication: "En anglais : 'My name is…' = 'Je m'appelle…'. On dit littéralement 'Mon nom est Lila'."
        },
        {
          text: "Complète : 'She ___ a student.'",
          hint: "Sujet 'she' → verbe 'to be' au présent simple.",
          options: ["am","are","is","be"],
          answer: 2,
          explication: "To be au présent : I AM / You ARE / He-She-It IS / We ARE / They ARE. Avec 'she', c'est toujours 'is'."
        },
        {
          text: "Comment forme-t-on la négation avec 'to be' ?",
          hint: "Ex : 'I am happy.' → négatif = ?",
          options: ["On met 'no' avant le verbe","On ajoute 'not' après am/is/are","On met 'don't' devant","On inverse sujet et verbe"],
          answer: 1,
          explication: "Négation avec 'to be' : sujet + am/is/are + NOT. Ex : 'She is not happy.' ou forme contractée 'She isn't happy.'"
        },
        {
          text: "Quelle phrase traduit correctement 'Il y a deux chats.' ?",
          options: ["There is two cats.","There are two cats.","It has two cats.","Have two cats."],
          answer: 1,
          explication: "'There are' pour le pluriel, 'There is' pour le singulier. Deux chats = pluriel → 'There are two cats.'"
        },
        {
          text: "Comment dit-on 'Quel âge as-tu ?' en anglais ?",
          options: ["What is your name?","How old are you?","How many years?","What age have you?"],
          answer: 1,
          explication: "'How old are you?' = 'Quel âge as-tu ?' On répond : 'I am 10 years old.' = 'J'ai 10 ans.'"
        },
        {
          text: "Complète : 'I ___ a teacher.'",
          hint: "Avec 'I', le verbe 'to be' au présent.",
          options: ["am","is","are","be"],
          answer: 0,
          explication: "To be : I AM / you are / he-she-it is. Avec 'I', c'est toujours 'am' : 'I am a teacher.'"
        },
        {
          text: "Quel est le pluriel correct de 'a box' ?",
          hint: "Les mots en -x, -s, -ch, -sh prennent -es.",
          options: ["boxs","boxes","boxies","box"],
          answer: 1,
          explication: "Les noms en -x prennent -es au pluriel : box → boxes. (De même : bus → buses, watch → watches.)"
        },
        {
          text: "Complète : 'There ___ a cat on the chair.'",
          hint: "Singulier ou pluriel ? 'a cat' = un seul.",
          options: ["are","is","am","be"],
          answer: 1,
          explication: "'There is' pour le singulier (un seul chat). 'There are' s'emploierait pour plusieurs : 'There are two cats.'"
        },
        {
          text: "Comment dit-on « mon stylo » en anglais ?",
          options: ["my pen","me pen","I pen","mine pen"],
          answer: 0,
          explication: "L'adjectif possessif 'my' = mon/ma/mes : 'my pen' = mon stylo. (your = ton, his/her = son…)"
        },
        {
          text: "Quelle phrase est correcte pour poser une question ?",
          options: ["You are happy?","Are you happy?","Happy you are?","Is you happy?"],
          answer: 1,
          explication: "Avec 'to be', on inverse le sujet et le verbe pour poser une question : 'Are you happy?'"
        }
      ]
    },
    {
      id: "temps_en",
      name: "Temps verbaux",
      emoji: "⏳",
      desc: "Présent simple, présent continu, passé",
      questions: [
        {
          text: "Conjugue 'to play' au présent simple, 3e personne du singulier (she).",
          hint: "Au présent simple, on ajoute -s à la 3e personne du singulier.",
          options: ["She play","She plays","She playing","She is play"],
          answer: 1,
          explication: "Présent simple : I play / You play / He-She-It PLAYS (+s !) / We play / They play."
        },
        {
          text: "Quelle forme exprime une action en cours ? 'She ___ reading a book.'",
          hint: "Présent continu = to be + verbe-ing.",
          options: ["has","is","does","was"],
          answer: 1,
          explication: "Le présent continu (present continuous) = to be + verbe-ing. 'She is reading.' = 'Elle est en train de lire.'"
        },
        {
          text: "What is the past tense of 'go'? (verbe irrégulier)",
          hint: "Ce verbe ne forme pas son passé avec -ed !",
          options: ["goed","goes","gone","went"],
          answer: 3,
          explication: "'Go' est irrégulier : go → WENT. Ex : 'I went to school yesterday.' = 'Je suis allé à l'école hier.'"
        },
        {
          text: "Comment forme-t-on le passé simple des verbes RÉGULIERS en anglais ?",
          options: ["On ajoute -ing","On ajoute -ed","On ajoute -s","On ne change rien"],
          answer: 1,
          explication: "Verbes réguliers au passé : + ED. Ex : walk → walked, play → played, watch → watched."
        },
        {
          text: "Traduis : 'Elle était en train de manger une pomme.' (action en cours dans le passé)",
          options: ["She eat an apple.","She ate an apple.","She was eating an apple.","She has eaten an apple."],
          answer: 2,
          explication: "'She was eating' = past continuous (action en cours dans le passé). 'She ate' = passé simple (action terminée)."
        },
        {
          text: "What is the past tense of 'eat'? (verbe irrégulier)",
          hint: "Ce verbe ne prend pas -ed.",
          options: ["eated","eat","ate","eaten"],
          answer: 2,
          explication: "'Eat' est irrégulier : eat → ATE. Ex : 'I ate an apple yesterday.' (j'ai mangé une pomme hier)."
        },
        {
          text: "Conjugue 'to watch' au présent simple, 3e personne (he).",
          hint: "Verbe en -ch à la 3e personne → +es.",
          options: ["he watch","he watchs","he watches","he watching"],
          answer: 2,
          explication: "Au présent simple, 3e personne, les verbes en -ch prennent -es : he WATCHES. (De même : he goes, she does.)"
        },
        {
          text: "Quelle phrase exprime une action habituelle (présent simple) ?",
          options: ["She is playing now.","She plays football every day.","She played yesterday.","She will play tomorrow."],
          answer: 1,
          explication: "Le présent simple exprime une habitude : 'She plays football every day.' ('every day' indique la répétition)."
        },
        {
          text: "Comment exprime-t-on le futur avec 'will' : 'Demain, je jouerai au foot.' ?",
          options: ["I play football tomorrow.","I will play football tomorrow.","I played football tomorrow.","I am play football tomorrow."],
          answer: 1,
          explication: "Le futur se forme avec 'will' + verbe : 'I will play football tomorrow.'"
        },
        {
          text: "What is the '-ing' form of 'run'?",
          hint: "Attention, on double parfois la dernière consonne.",
          options: ["runing","running","runnig","runed"],
          answer: 1,
          explication: "'Run' double le 'n' devant -ing : run → RUNNING. (De même : swim → swimming, sit → sitting.)"
        }
      ]
    },
    {
      id: "dialogue_en",
      name: "Expressions & dialogue",
      emoji: "💬",
      desc: "Phrases utiles et communication",
      questions: [
        {
          text: "What does 'Can I help you?' mean?",
          options: ["Tu peux m'aider ?","Puis-je vous aider ?","Veux-tu jouer ?","Où es-tu ?"],
          answer: 1,
          explication: "'Can I help you?' = 'Puis-je vous aider ?' C'est une formule très courante dans les magasins ou en classe."
        },
        {
          text: "Comment répond-on poliment à 'How are you?'",
          options: ["I am 10.","Fine, thank you. And you?","My name is Tom.","I don't know."],
          answer: 1,
          explication: "Réponse standard : 'Fine, thank you. And you?' = 'Bien, merci. Et toi ?' C'est la formule de politesse la plus courante."
        },
        {
          text: "Que signifie 'I'd like a glass of water, please.' ?",
          options: ["Je n'aime pas l'eau.","Je voudrais un verre d'eau, s'il vous plaît.","J'ai de l'eau.","L'eau est froide."],
          answer: 1,
          explication: "'I'd like' = 'Je voudrais' (forme polie de 'I want'). Toujours ajouter 'please' pour être poli !"
        },
        {
          text: "Comment dit-on 'À bientôt !' en anglais ?",
          options: ["Goodbye forever!","See you soon!","Good morning!","Thank you very much!"],
          answer: 1,
          explication: "'See you soon!' = 'À bientôt !' 'Goodbye' = 'Au revoir', 'Good morning' = 'Bonjour (le matin)'."
        },
        {
          text: "Traduis : 'Je ne comprends pas. Pouvez-vous répéter, s'il vous plaît ?'",
          options: ["I understand. Please stop.","I don't understand. Can you repeat, please?","I can't hear you. Speak louder!","What is your name, please?"],
          answer: 1,
          explication: "'I don't understand.' = 'Je ne comprends pas.' 'Can you repeat, please?' = 'Pouvez-vous répéter, s'il vous plaît ?'"
        },
        {
          text: "What does 'Nice to meet you.' mean?",
          options: ["Au revoir.","Enchanté(e) de te rencontrer.","Je suis fatigué.","Quelle heure est-il ?"],
          answer: 1,
          explication: "'Nice to meet you.' = Enchanté(e) de faire ta connaissance, quand on rencontre quelqu'un pour la première fois."
        },
        {
          text: "Comment demande-t-on poliment quelque chose en anglais ?",
          hint: "On ajoute un petit mot magique à la fin.",
          options: ["Give me water.","Water now.","Can I have some water, please?","Water!"],
          answer: 2,
          explication: "Pour être poli, on utilise 'Can I have… , please?'. 'Please' (s'il vous plaît) rend la demande courtoise."
        },
        {
          text: "Que répond-on à 'Thank you!' ?",
          options: ["Goodbye.","You're welcome.","Hello.","Sorry."],
          answer: 1,
          explication: "On répond 'You're welcome.' (= De rien / Je vous en prie) à un remerciement ('Thank you')."
        },
        {
          text: "What does 'What time is it?' mean?",
          options: ["Quel jour sommes-nous ?","Quelle heure est-il ?","Quel temps fait-il ?","Quel est ton nom ?"],
          answer: 1,
          explication: "'What time is it?' = Quelle heure est-il ? On répond par exemple : 'It's three o'clock.' (Il est trois heures.)"
        },
        {
          text: "Comment dit-on « Excuse-moi / Pardon » pour s'excuser en anglais ?",
          options: ["Hello","Sorry","Please","Yes"],
          answer: 1,
          explication: "'Sorry' = Pardon / Désolé(e). 'Excuse me' s'emploie aussi pour attirer poliment l'attention de quelqu'un."
        }
      ]
    },
    {
      id: "numbers_colors",
      name: "Nombres, couleurs, jours",
      emoji: "🌈",
      desc: "Numbers, colors, days, months, weather",
      questions: [
        {
          text: "Comment dit-on « jaune » en anglais ?",
          options: ["red","blue","yellow","green"],
          answer: 2,
          explication: "« Yellow » = jaune. Autres couleurs : red (rouge), blue (bleu), green (vert), black (noir), white (blanc)."
        },
        {
          text: "What number is 'fifteen' in figures?",
          options: ["5","15","50","55"],
          answer: 1,
          explication: "« Fifteen » = 15. Attention : 50 = fifty, 5 = five. Les nombres en -teen vont de 13 à 19 (thirteen, fourteen, fifteen…)."
        },
        {
          text: "Quel est le premier jour de la semaine en anglais (convention britannique) ?",
          options: ["Sunday","Monday","Friday","Saturday"],
          answer: 1,
          explication: "« Monday » = lundi. Les jours : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."
        },
        {
          text: "Comment dit-on « décembre » en anglais ?",
          options: ["November","October","December","September"],
          answer: 2,
          explication: "« December » = décembre. Mois : January, February, March, April, May, June, July, August, September, October, November, December."
        },
        {
          text: "What does 'It's sunny today.' mean?",
          options: ["Il pleut aujourd'hui.","Il fait beau / il y a du soleil aujourd'hui.","Il fait froid aujourd'hui.","Il neige aujourd'hui."],
          answer: 1,
          explication: "« Sunny » vient de « sun » (soleil). « It's sunny » = il y a du soleil. Autres météos : rainy, cloudy, windy, snowy."
        },
        {
          type: "texte",
          text: "Tape en anglais : Comment dit-on « lundi » ?",
          hint: "Le premier jour de la semaine, en minuscules ou majuscules au choix.",
          answer: ["monday","Monday","MONDAY"],
          explication: "« Monday » = lundi. En anglais, les jours de la semaine prennent toujours une majuscule au début quand on les écrit correctement. La casse est tolérée ici."
        },
        {
          text: "What number is 'twenty' in figures?",
          options: ["12","20","2","200"],
          answer: 1,
          explication: "'Twenty' = 20. À ne pas confondre avec 'twelve' (12) !"
        },
        {
          text: "Comment dit-on « rouge » en anglais ?",
          options: ["blue","green","red","black"],
          answer: 2,
          explication: "'Red' = rouge. 'Blue' = bleu, 'Green' = vert, 'Black' = noir."
        },
        {
          text: "What does 'It's raining.' mean?",
          options: ["Il fait soleil.","Il pleut.","Il neige.","Il fait chaud."],
          answer: 1,
          explication: "'It's raining.' = Il pleut. ('It's sunny' = il fait soleil, 'It's snowing' = il neige.)"
        },
        {
          type: "texte",
          text: "Tape en anglais : comment dit-on le chiffre « 3 » (en lettres) ?",
          hint: "Th... commence comme dans 'the'.",
          answer: ["three"],
          explication: "3 = 'three' en anglais. (one, two, three, four, five…)"
        }
      ]
    },
    {
      id: "family_body",
      name: "Famille & corps",
      emoji: "👨‍👩‍👧",
      desc: "Family members, body parts",
      questions: [
        {
          text: "Comment dit-on « ma sœur » en anglais ?",
          options: ["my brother","my sister","my mother","my cousin"],
          answer: 1,
          explication: "« Sister » = sœur, « Brother » = frère. Famille : mother (mère), father (père), son (fils), daughter (fille)."
        },
        {
          text: "What does 'hand' mean in French?",
          options: ["la tête","le pied","la main","l'œil"],
          answer: 2,
          explication: "« Hand » = la main. Corps : head (tête), foot (pied), eye (œil), nose (nez), mouth (bouche)."
        },
        {
          text: "Comment appelle-t-on les parents de ses parents en anglais ?",
          options: ["uncle and aunt","grandparents","cousins","siblings"],
          answer: 1,
          explication: "« Grandparents » = grands-parents. « Grandmother » = grand-mère, « grandfather » = grand-père. Uncle = oncle, aunt = tante."
        },
        {
          text: "Quelle partie du corps utilise-t-on pour voir ?",
          options: ["the ears","the eyes","the nose","the mouth"],
          answer: 1,
          explication: "« Eyes » (pluriel de eye) = les yeux. Ears = oreilles (entendre), nose = nez (sentir), mouth = bouche (parler/manger)."
        },
        {
          text: "Comment dit-on « bébé » en anglais ?",
          options: ["boy","girl","baby","child"],
          answer: 2,
          explication: "« Baby » = bébé. « Boy » = garçon, « girl » = fille, « child » = enfant (pluriel children)."
        },
        {
          text: "Comment dit-on « mon frère » en anglais ?",
          options: ["my sister","my brother","my mother","my father"],
          answer: 1,
          explication: "'My brother' = mon frère. 'My sister' = ma sœur, 'My mother' = ma mère, 'My father' = mon père."
        },
        {
          text: "What does 'foot' mean in French?",
          options: ["La main","Le pied","La tête","Le bras"],
          answer: 1,
          explication: "'Foot' = le pied (pluriel irrégulier : 'feet'). 'Hand' = la main, 'Head' = la tête, 'Arm' = le bras."
        },
        {
          text: "Comment dit-on « la bouche » en anglais ?",
          options: ["nose","mouth","ear","eye"],
          answer: 1,
          explication: "'Mouth' = la bouche. 'Nose' = le nez, 'Ear' = l'oreille, 'Eye' = l'œil."
        },
        {
          text: "Which word means 'la grand-mère' in English?",
          options: ["grandfather","grandmother","mother","aunt"],
          answer: 1,
          explication: "'Grandmother' = la grand-mère (souvent 'grandma'). 'Grandfather' = le grand-père, 'Aunt' = la tante."
        },
        {
          text: "What does 'I have brown hair.' mean?",
          options: ["J'ai les yeux bleus.","J'ai les cheveux bruns.","Je suis grand.","J'ai un chien."],
          answer: 1,
          explication: "'I have brown hair.' = J'ai les cheveux bruns. ('hair' = les cheveux, 'brown' = brun/marron.)"
        }
      ]
    },
    {
      id: "culture_en",
      name: "Culture anglo-saxonne",
      emoji: "🇬🇧",
      desc: "UK, USA, traditions, fêtes",
      questions: [
        {
          text: "Quelle est la capitale du Royaume-Uni (United Kingdom) ?",
          options: ["New York","London","Edinburgh","Dublin"],
          answer: 1,
          explication: "« London » (Londres) est la capitale du Royaume-Uni. Edinburgh est la capitale de l'Écosse, Dublin celle de l'Irlande, New York est aux USA."
        },
        {
          text: "Quelle fête anglo-saxonne célèbre-t-on le 31 octobre ?",
          options: ["Christmas","Easter","Halloween","Thanksgiving"],
          answer: 2,
          explication: "« Halloween » (le 31 octobre) : les enfants se déguisent et demandent des bonbons en disant « Trick or treat! » (Un bonbon ou un sort !)."
        },
        {
          text: "Quel monument célèbre se trouve à New York ?",
          options: ["Big Ben","The Statue of Liberty (la statue de la Liberté)","The Eiffel Tower","Stonehenge"],
          answer: 1,
          explication: "La Statue de la Liberté (offerte par la France en 1886) symbolise New York et les États-Unis."
        },
        {
          text: "Quelle est la monnaie du Royaume-Uni ?",
          options: ["L'euro","Le dollar","La livre sterling (pound)","Le franc"],
          answer: 2,
          explication: "« Pound sterling » (livre sterling, £) est la monnaie britannique. Les États-Unis utilisent le « dollar » ($)."
        },
        {
          text: "Que dit-on traditionnellement en anglais pour fêter Noël ?",
          options: ["Happy New Year!","Merry Christmas!","Happy Birthday!","Good morning!"],
          answer: 1,
          explication: "« Merry Christmas! » = Joyeux Noël ! « Happy New Year! » = Bonne année ! « Happy Birthday! » = Joyeux anniversaire !"
        },
        {
          text: "Quelle est la capitale des États-Unis (USA) ?",
          hint: "Ce n'est pas New York !",
          options: ["New York","Washington D.C.","Los Angeles","Boston"],
          answer: 1,
          explication: "La capitale des États-Unis est Washington D.C. New York est la plus grande ville, mais pas la capitale."
        },
        {
          text: "Comment s'appelle le grand repas traditionnel américain de fin novembre, autour d'une dinde ?",
          options: ["Halloween","Thanksgiving","Easter","Boxing Day"],
          answer: 1,
          explication: "Thanksgiving (le 4e jeudi de novembre aux USA) est une fête familiale où l'on partage un repas, souvent une dinde, pour se dire merci."
        },
        {
          text: "Quel monument célèbre se trouve à Londres, avec une grande horloge ?",
          options: ["La tour Eiffel","Big Ben","Le Colisée","La statue de la Liberté"],
          answer: 1,
          explication: "Big Ben est la célèbre cloche/horloge de la tour du Parlement de Londres, au Royaume-Uni."
        },
        {
          text: "Dans quel pays anglophone trouve-t-on les kangourous et les koalas ?",
          options: ["Le Canada","L'Australie","l'Irlande","L'Écosse"],
          answer: 1,
          explication: "L'Australie, pays anglophone, abrite des animaux uniques comme les kangourous, les koalas et les ornithorynques."
        },
        {
          text: "What do children say to ask for sweets at Halloween?",
          hint: "Une expression célèbre en deux mots.",
          options: ["Happy New Year","Trick or treat","Good morning","See you"],
          answer: 1,
          explication: "À Halloween, les enfants déguisés disent 'Trick or treat!' (= des bonbons ou un sort !) pour réclamer des friandises."
        }
      ]
    },
    {
      id: "class_en",
      name: "En classe",
      emoji: "🏫",
      desc: "Classroom language, consignes",
      questions: [
        {
          text: "What does 'Open your book, please.' mean?",
          options: ["Ferme ton livre s'il te plaît.","Ouvre ton livre s'il te plaît.","Lis ton livre.","Apporte ton livre."],
          answer: 1,
          explication: "« Open » = ouvrir, « your book » = ton livre, « please » = s'il te plaît. Consigne courante en classe d'anglais."
        },
        {
          text: "Comment dit-on « écoute » en anglais (consigne de classe) ?",
          options: ["Look!","Listen!","Read!","Speak!"],
          answer: 1,
          explication: "« Listen! » = Écoute ! « Look! » = Regarde ! « Read! » = Lis ! « Speak! » = Parle !"
        },
        {
          text: "Que veut dire « Stand up. » ?",
          options: ["Assieds-toi.","Lève-toi.","Dépêche-toi.","Reste tranquille."],
          answer: 1,
          explication: "« Stand up » = se lever, debout. « Sit down » = s'asseoir. Consignes très utiles en classe."
        },
        {
          text: "Comment dit-on « Je ne comprends pas. » en classe ?",
          options: ["I am tired.","I don't understand.","I am hungry.","I want to go home."],
          answer: 1,
          explication: "« I don't understand. » = Je ne comprends pas. Très utile à savoir dire en classe pour demander des explications !"
        },
        {
          text: "What does 'Raise your hand!' mean?",
          hint: "C'est le geste qu'on fait pour demander la parole.",
          options: ["Tape dans tes mains !","Lève la main !","Range tes affaires !","Sors de la classe !"],
          answer: 1,
          explication: "« Raise your hand! » = Lève la main ! (pour demander la parole ou répondre à une question)."
        },
        {
          text: "What does 'Sit down, please.' mean?",
          options: ["Lève-toi.","Assieds-toi.","Sors.","Écris."],
          answer: 1,
          explication: "'Sit down, please.' = Assieds-toi, s'il te plaît. Le contraire est 'Stand up.' (Lève-toi.)"
        },
        {
          text: "Comment dit-on « Répète, s'il te plaît » en classe ?",
          options: ["Close the door, please.","Repeat, please.","Open your book.","Be quiet."],
          answer: 1,
          explication: "'Repeat, please.' = Répète, s'il te plaît. Utile pour bien comprendre une prononciation."
        },
        {
          text: "What does 'Be quiet, please.' mean?",
          options: ["Parle plus fort.","Fais silence, s'il te plaît.","Lève la main.","Range tes affaires."],
          answer: 1,
          explication: "'Be quiet, please.' = Fais silence / Sois calme, s'il te plaît."
        },
        {
          text: "Comment dit-on « Lis » (consigne de lecture) en anglais ?",
          options: ["Write","Read","Draw","Count"],
          answer: 1,
          explication: "'Read' = lis. 'Write' = écris, 'Draw' = dessine, 'Count' = compte."
        },
        {
          text: "What does 'Work in pairs.' mean?",
          hint: "'Pair' = une paire, deux.",
          options: ["Travaillez seuls.","Travaillez à deux (par deux).","Travaillez en silence.","Travaillez à la maison."],
          answer: 1,
          explication: "'Work in pairs.' = Travaillez par deux (en binôme). 'In groups' = en groupes, 'alone' = seul."
        }
      ]
    }
  ]
};
