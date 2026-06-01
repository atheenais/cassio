/* Matière : Français 📚 (6ème)
   10 thèmes × 10 questions = 100 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["francais"] = {
  id: "francais",
  name: "Français",
  emoji: "📚",
  desc: "Grammaire, conjugaison, vocabulaire",
  topics: [
    {
      id: "classes-mots",
      name: "Classes de mots",
      emoji: "🏷️",
      desc: "Nom, verbe, adjectif, déterminant, pronom, adverbe",
      questions: [
        {
          text: "Dans la phrase « Le chat dort », quel est le nom ?",
          options: ["Le", "chat", "dort", "(aucun)"],
          answer: 1,
          hint: "Le nom désigne une chose, un animal ou une personne.",
          explication: "« chat » est le nom : il désigne un animal."
        },
        {
          text: "Dans « La petite fille court vite », quel mot est un adjectif ?",
          options: ["La", "petite", "court", "vite"],
          answer: 1,
          hint: "Un adjectif qualifie le nom (il dit comment est la chose).",
          explication: "« petite » est un adjectif qualificatif qui décrit le nom « fille »."
        },
        {
          text: "Quelle est la classe du mot « rapidement » ?",
          options: ["nom", "verbe", "adjectif", "adverbe"],
          answer: 3,
          hint: "Les mots qui finissent en -ment sont souvent des adverbes.",
          explication: "« rapidement » est un adverbe : il indique de quelle manière l'action est faite."
        },
        {
          text: "Dans « Je mange une pomme », quel mot est un pronom ?",
          options: ["Je", "mange", "une", "pomme"],
          answer: 0,
          hint: "Un pronom remplace un nom (il évite la répétition).",
          explication: "« Je » est un pronom personnel : il désigne celui qui parle."
        },
        {
          text: "Dans « Mon chien aboie », quel mot est un déterminant ?",
          options: ["Mon", "chien", "aboie", "(aucun)"],
          answer: 0,
          hint: "Le déterminant accompagne le nom (le, la, un, mon, ce…).",
          explication: "« Mon » est un déterminant possessif : il introduit le nom « chien »."
        },
        {
          type: "vrai_faux",
          text: "Le mot « courir » est un verbe.",
          answer: 0,
          hint: "Un verbe exprime une action ou un état.",
          explication: "« courir » est bien un verbe (à l'infinitif) : il exprime une action."
        },
        {
          type: "qcm",
          text: "Dans « Les grands arbres bougent doucement », quels mots sont des adjectifs ?",
          options: ["Les", "grands", "arbres", "doucement"],
          answer: [1],
          hint: "L'adjectif qualifie le nom et s'accorde avec lui.",
          explication: "Seul « grands » qualifie le nom « arbres ». « Les » est un déterminant, « doucement » est un adverbe."
        },
        {
          text: "Quelle est la classe du mot « hier » ?",
          options: ["nom", "adjectif", "adverbe", "verbe"],
          answer: 2,
          hint: "Hier indique un moment, c'est un mot invariable qui précise un verbe.",
          explication: "« hier » est un adverbe de temps. Il est invariable."
        },
        {
          text: "Dans « Cette voiture rouge est rapide », combien y a-t-il d'adjectifs ?",
          options: ["0", "1", "2", "3"],
          answer: 2,
          hint: "Cherche les mots qui décrivent la voiture.",
          explication: "« rouge » (couleur) et « rapide » (vitesse) sont 2 adjectifs qualificatifs."
        },
        {
          type: "texte",
          text: "Donne la classe du mot « beauté » : nom, verbe, adjectif ou adverbe ?",
          answer: "nom",
          hint: "Un nom commun se reconnaît au déterminant qui peut le précéder : « la beauté ».",
          explication: "« beauté » est un nom commun (on peut dire « la beauté »). L'adjectif correspondant est « beau »."
        }
      ]
    },
    {
      id: "conjugaison",
      name: "Conjugaison de l'indicatif",
      emoji: "⏰",
      desc: "Présent, imparfait, passé simple, futur",
      questions: [
        {
          text: "« Je chante » est conjugué à quel temps ?",
          options: ["présent", "imparfait", "passé simple", "futur"],
          answer: 0,
          hint: "Le présent indique ce qui se passe maintenant.",
          explication: "« Je chante » = présent de l'indicatif (action actuelle)."
        },
        {
          text: "« Nous mangions » est conjugué à quel temps ?",
          options: ["présent", "imparfait", "passé simple", "futur"],
          answer: 1,
          hint: "La terminaison -ions est typique de l'imparfait à « nous ».",
          explication: "« mangions » = imparfait (action qui durait dans le passé)."
        },
        {
          text: "Quelle est la terminaison du verbe « finir » à la 3e personne du pluriel au présent ?",
          options: ["-ent", "-issent", "-ont", "-aient"],
          answer: 1,
          hint: "Les verbes du 2e groupe (finir, choisir…) prennent -issent.",
          explication: "« ils finissent » : verbe du 2e groupe au présent → -issent."
        },
        {
          text: "Conjugue « être » à la 1re personne du singulier au futur.",
          options: ["J'étais", "Je suis", "Je serai", "Je fus"],
          answer: 2,
          hint: "Le futur exprime ce qui va se passer plus tard.",
          explication: "« Je serai » = futur de l'indicatif du verbe être."
        },
        {
          text: "« Il alla » est conjugué à quel temps ?",
          options: ["présent", "imparfait", "passé simple", "futur"],
          answer: 2,
          hint: "Le passé simple est très utilisé dans les récits écrits.",
          explication: "« Il alla » = passé simple du verbe aller (action ponctuelle dans le passé)."
        },
        {
          type: "vrai_faux",
          text: "« Vous aviez » est conjugué à l'imparfait.",
          answer: 0,
          hint: "La terminaison -iez à « vous » est typique de l'imparfait.",
          explication: "« Vous aviez » = imparfait du verbe avoir."
        },
        {
          type: "qcm",
          text: "Parmi ces formes, lesquelles sont au futur ?",
          options: ["Tu mangeras", "Nous finirons", "Vous étiez", "Ils partiront"],
          answer: [0, 1, 3],
          hint: "Au futur, on entend souvent un « r » avant la terminaison (-ras, -rons, -ront).",
          explication: "« Tu mangeras », « Nous finirons », « Ils partiront » sont au futur. « Vous étiez » est à l'imparfait."
        },
        {
          text: "Conjugue « avoir » à la 3e personne du pluriel au présent.",
          options: ["Ils avaient", "Ils ont", "Ils auront", "Ils eurent"],
          answer: 1,
          hint: "C'est l'auxiliaire qu'on entend dans « ils ont mangé ».",
          explication: "« Ils ont » = présent du verbe avoir."
        },
        {
          text: "Quelle est la terminaison du verbe « parler » à la 1re personne du pluriel au présent ?",
          options: ["-ons", "-ions", "-erons", "-ent"],
          answer: 0,
          hint: "Au présent, « nous » prend -ons pour la plupart des verbes.",
          explication: "« Nous parlons » : terminaison -ons au présent."
        },
        {
          type: "texte",
          text: "Conjugue « être » à la 2e personne du singulier au présent. Écris la forme complète avec le pronom (ex: « il est »).",
          answer: "tu es",
          hint: "C'est la forme du verbe être avec « tu », au présent.",
          explication: "« Tu es » = présent du verbe être à la 2e personne du singulier."
        }
      ]
    },
    {
      id: "fonctions",
      name: "Fonctions dans la phrase",
      emoji: "🔍",
      desc: "Sujet, COD, COI",
      questions: [
        {
          text: "Dans « Le chat dort sur le canapé », quel est le sujet ?",
          options: ["Le chat", "dort", "sur", "le canapé"],
          answer: 0,
          hint: "Le sujet répond à la question « Qui est-ce qui… ? »",
          explication: "Qui est-ce qui dort ? → Le chat. C'est le sujet du verbe."
        },
        {
          text: "Dans « Marie mange une pomme », quel est le COD (complément d'objet direct) ?",
          options: ["Marie", "mange", "une pomme", "(aucun)"],
          answer: 2,
          hint: "Le COD répond à la question « quoi ? » ou « qui ? » après le verbe.",
          explication: "Marie mange QUOI ? → une pomme. C'est le COD."
        },
        {
          text: "Dans « Léa parle à sa sœur », quel est le COI (complément d'objet indirect) ?",
          options: ["Léa", "parle", "à sa sœur", "(aucun)"],
          answer: 2,
          hint: "Le COI répond à « à qui ? » ou « de qui ? » et commence souvent par une préposition.",
          explication: "Léa parle À QUI ? → à sa sœur. C'est un COI (introduit par « à »)."
        },
        {
          text: "Dans « Hier, les enfants ont joué au parc », quel est le sujet ?",
          options: ["Hier", "les enfants", "ont joué", "au parc"],
          answer: 1,
          hint: "Cherche celui qui fait l'action.",
          explication: "Qui est-ce qui a joué ? → Les enfants."
        },
        {
          type: "vrai_faux",
          text: "Dans « Paul écrit une lettre à son ami », « une lettre » est un COD.",
          answer: 0,
          hint: "Paul écrit QUOI ? Cherche ce qui répond à cette question.",
          explication: "Paul écrit QUOI ? → une lettre. C'est un COD. (« à son ami » est COI.)"
        },
        {
          text: "Dans « Le professeur parle aux élèves », quelle est la fonction de « aux élèves » ?",
          options: ["Sujet", "COD", "COI", "(aucune)"],
          answer: 2,
          hint: "La préposition « à » (transformée en « aux ») est un indice.",
          explication: "Le professeur parle À QUI ? → aux élèves. C'est un COI."
        },
        {
          text: "Dans « Cette histoire intéresse les enfants », quel est le COD ?",
          options: ["Cette histoire", "intéresse", "les enfants", "(aucun)"],
          answer: 2,
          hint: "Cherche après le verbe : ça intéresse QUI ?",
          explication: "« Cette histoire » est le sujet, « les enfants » est le COD (intéresse QUI ?)."
        },
        {
          type: "qcm",
          text: "Dans « Le boulanger vend du pain aux clients », quelles sont les fonctions présentes ?",
          options: ["Sujet (Le boulanger)", "COD (du pain)", "COI (aux clients)", "COD (aux clients)"],
          answer: [0, 1, 2],
          hint: "Identifie le sujet, puis ce que le boulanger vend, puis à qui.",
          explication: "Le boulanger (sujet) vend QUOI → du pain (COD) À QUI → aux clients (COI)."
        },
        {
          text: "Dans « Il téléphone à ses parents », « à ses parents » est :",
          options: ["Sujet", "COD", "COI", "Adjectif"],
          answer: 2,
          hint: "Téléphoner À QUI ? Le complément est introduit par « à ».",
          explication: "« à ses parents » est un COI (téléphoner À QUI ?)."
        },
        {
          type: "texte",
          text: "Donne le sujet de la phrase : « Au loin, les oiseaux chantent joyeusement. »",
          answer: "les oiseaux",
          hint: "Demande-toi : qui est-ce qui chante ?",
          explication: "Qui est-ce qui chante ? → les oiseaux. C'est le sujet."
        }
      ]
    },
    {
      id: "vocabulaire",
      name: "Vocabulaire et registres",
      emoji: "💬",
      desc: "Synonymes, antonymes, registres de langue",
      questions: [
        {
          text: "Quel est le synonyme de « content » ?",
          options: ["triste", "fatigué", "heureux", "faim"],
          answer: 2,
          hint: "Un synonyme a un sens proche.",
          explication: "« content » et « heureux » expriment la même idée positive."
        },
        {
          text: "Quel est l'antonyme (contraire) de « grand » ?",
          options: ["large", "petit", "long", "gros"],
          answer: 1,
          hint: "L'antonyme a un sens opposé.",
          explication: "« grand » ↔ « petit » sont des antonymes (contraires)."
        },
        {
          text: "Le mot « bagnole » appartient à quel registre de langue ?",
          options: ["soutenu", "courant", "familier", "scientifique"],
          answer: 2,
          hint: "C'est un mot qu'on utilise entre amis, pas dans une rédaction.",
          explication: "« bagnole » est familier. Le mot courant est « voiture », le soutenu « automobile »."
        },
        {
          text: "Quel mot est de registre soutenu pour dire « manger » ?",
          options: ["bouffer", "manger", "se restaurer", "grignoter"],
          answer: 2,
          hint: "Le soutenu est utilisé à l'écrit, dans la littérature.",
          explication: "« se restaurer » est soutenu. « manger » est courant, « bouffer » est familier."
        },
        {
          text: "Quel est l'antonyme de « ouvrir » ?",
          options: ["casser", "fermer", "pousser", "entrer"],
          answer: 1,
          hint: "Cherche l'action opposée.",
          explication: "« ouvrir » ↔ « fermer »."
        },
        {
          type: "vrai_faux",
          text: "« Joyeux » et « gai » sont des synonymes.",
          answer: 0,
          hint: "Les deux mots expriment la même émotion.",
          explication: "« joyeux » et « gai » sont synonymes (sens très proche)."
        },
        {
          type: "qcm",
          text: "Lesquels de ces mots sont des synonymes de « regarder » ?",
          options: ["observer", "entendre", "contempler", "écouter"],
          answer: [0, 2],
          hint: "Cherche les mots qui ont à voir avec la vue, pas l'ouïe.",
          explication: "« observer » et « contempler » sont synonymes de « regarder ». « entendre » et « écouter » concernent l'ouïe."
        },
        {
          text: "Le mot « bouquin » appartient au registre…",
          options: ["familier", "courant", "soutenu", "scientifique"],
          answer: 0,
          hint: "C'est une façon décontractée de désigner un livre.",
          explication: "« bouquin » est familier. Le mot courant est « livre », le soutenu « ouvrage »."
        },
        {
          text: "Quel est l'antonyme de « dur » ?",
          options: ["lourd", "épais", "mou", "froid"],
          answer: 2,
          hint: "Cherche le contraire au toucher.",
          explication: "« dur » ↔ « mou ». Les autres mots ne s'opposent pas à « dur »."
        },
        {
          type: "texte",
          text: "Donne un synonyme de « content » en un seul mot.",
          answer: ["heureux", "joyeux", "satisfait", "ravi"],
          hint: "Cherche un mot qui exprime une émotion positive proche.",
          explication: "« heureux », « joyeux », « satisfait » ou « ravi » sont tous synonymes de « content »."
        }
      ]
    },
    {
      id: "phrase-ponctuation",
      name: "Phrase et ponctuation",
      emoji: "❓",
      desc: "Types de phrases, signes de ponctuation",
      questions: [
        {
          text: "Quel signe de ponctuation termine une phrase déclarative ?",
          options: [".", "?", "!", ":"],
          answer: 0,
          hint: "La phrase déclarative énonce un fait.",
          explication: "Une phrase déclarative se termine par un point (.). Exemple : « Il fait beau. »"
        },
        {
          text: "« Comme c'est beau ! » est une phrase…",
          options: ["déclarative", "interrogative", "exclamative", "injonctive"],
          answer: 2,
          hint: "Elle exprime une émotion forte avec un point d'exclamation.",
          explication: "L'exclamative exprime une émotion (joie, surprise…). Elle se termine par !"
        },
        {
          text: "Quelle est la nature de la phrase « Ferme la porte. » ?",
          options: ["déclarative", "interrogative", "exclamative", "injonctive (impérative)"],
          answer: 3,
          hint: "Elle donne un ordre ou un conseil.",
          explication: "Une phrase injonctive (ou impérative) donne un ordre, un conseil ou une interdiction."
        },
        {
          text: "Lequel de ces signes encadre un dialogue dans un récit ?",
          options: ["( )", "« »", "[ ]", "{ }"],
          answer: 1,
          hint: "Ce sont des guillemets français.",
          explication: "Les guillemets français « » encadrent les paroles rapportées dans un dialogue."
        },
        {
          text: "Combien de phrases y a-t-il dans : « Il pleut. Je prends mon parapluie. » ?",
          options: ["1", "2", "3", "0"],
          answer: 1,
          hint: "Compte les points.",
          explication: "Deux points = deux phrases distinctes."
        },
        {
          type: "vrai_faux",
          text: "Un point-virgule (;) sépare deux propositions liées par le sens dans une même phrase.",
          answer: 0,
          hint: "Le point-virgule marque une pause plus longue que la virgule mais plus courte que le point.",
          explication: "VRAI. Le point-virgule sert à séparer des idées liées sans terminer la phrase."
        },
        {
          text: "Quel est le rôle des deux points ( : ) dans une phrase ?",
          options: ["Mettre fin à la phrase", "Annoncer une explication, une énumération ou un dialogue", "Encadrer un dialogue", "Marquer une pause courte"],
          answer: 1,
          hint: "Ils introduisent quelque chose.",
          explication: "Les deux points annoncent une explication, une liste ou une parole rapportée."
        },
        {
          type: "qcm",
          text: "Parmi ces phrases, lesquelles sont interrogatives ?",
          options: ["Où vas-tu ?", "Tu viens.", "Es-tu prêt ?", "Quel beau soleil !"],
          answer: [0, 2],
          hint: "Une interrogative pose une question et se termine par ?",
          explication: "« Où vas-tu ? » et « Es-tu prêt ? » sont interrogatives. La 2e est déclarative, la 4e exclamative."
        },
        {
          text: "Que se passe-t-il quand on inverse le sujet et le verbe dans une phrase ?",
          options: ["Cela crée souvent une phrase interrogative", "Cela rend la phrase incorrecte", "Cela inverse le sens", "Rien, c'est pareil"],
          answer: 0,
          hint: "« Tu viens » devient « Viens-tu ? »",
          explication: "L'inversion sujet-verbe est l'une des façons de former une phrase interrogative en français soutenu."
        },
        {
          type: "texte",
          text: "Quelle est la nature de la phrase « Quel temps magnifique ! » ? Réponds par un seul mot.",
          answer: ["exclamative", "Exclamative"],
          hint: "Elle exprime une émotion et se termine par !",
          explication: "« Quel temps magnifique ! » est une phrase exclamative."
        }
      ]
    },
    {
      id: "verbes-3groupe",
      name: "Verbes du 3e groupe",
      emoji: "🔄",
      desc: "Verbes irréguliers : faire, aller, venir, dire…",
      questions: [
        {
          text: "Quelle est la 1re personne du singulier du verbe « faire » au présent ?",
          options: ["Je fais", "Je fait", "Je fais", "Je fes"],
          answer: 0,
          hint: "Faire prend un -s à « je » au présent.",
          explication: "« Je fais » est la forme correcte au présent."
        },
        {
          text: "« Nous allons » est le verbe…",
          options: ["aller", "avoir", "être", "faire"],
          answer: 0,
          hint: "Le verbe aller est très irrégulier.",
          explication: "« Nous allons » = présent du verbe aller."
        },
        {
          text: "Quel est l'infinitif de « ils viennent » ?",
          options: ["vouloir", "venir", "tenir", "voir"],
          answer: 1,
          hint: "« Ils viennent » sert à dire « ils arrivent ».",
          explication: "« Ils viennent » est la 3e personne du pluriel du verbe venir au présent."
        },
        {
          text: "« Tu prends » est le verbe…",
          options: ["prier", "prêcher", "prendre", "prouver"],
          answer: 2,
          hint: "« Prendre » a un -d intercalé à certaines personnes.",
          explication: "« Tu prends » = présent du verbe prendre (2e personne du singulier)."
        },
        {
          text: "À quelle personne le verbe « dire » s'écrit-il « vous dites » (sans -ez) ?",
          options: ["1re du singulier", "2e du pluriel", "3e du singulier", "1re du pluriel"],
          answer: 1,
          hint: "C'est une forme irrégulière à connaître par cœur.",
          explication: "« Vous dites » (et non « vous disez ») est la 2e personne du pluriel : verbe particulier."
        },
        {
          type: "vrai_faux",
          text: "Le verbe « aller » appartient au 1er groupe parce qu'il finit par -er.",
          answer: 1,
          hint: "Aller se conjugue de manière très irrégulière (je vais, nous allons, ils vont…).",
          explication: "FAUX. Bien qu'il finisse en -er, aller est un verbe du 3e groupe à cause de son irrégularité."
        },
        {
          text: "Conjugue « pouvoir » à la 1re personne du singulier au présent.",
          options: ["Je peus", "Je peux", "Je pouve", "Je pus"],
          answer: 1,
          hint: "Forme irrégulière à mémoriser.",
          explication: "« Je peux » : verbe pouvoir au présent. Attention au -x final."
        },
        {
          type: "qcm",
          text: "Quels verbes appartiennent au 3e groupe ?",
          options: ["chanter", "finir", "venir", "vouloir"],
          answer: [2, 3],
          hint: "1er groupe = -er sauf aller. 2e groupe = -ir avec -issons. 3e groupe = tout le reste.",
          explication: "« venir » et « vouloir » sont du 3e groupe. « chanter » est du 1er, « finir » du 2e (nous finissons)."
        },
        {
          text: "Quel est le participe passé du verbe « voir » ?",
          options: ["voi", "voit", "vu", "voyé"],
          answer: 2,
          hint: "« J'ai … le film. »",
          explication: "Le participe passé de voir est « vu ». On dit « j'ai vu »."
        },
        {
          type: "texte",
          text: "Conjugue « être » à la 1re personne du singulier au présent. Écris la forme complète avec le pronom.",
          answer: ["je suis", "Je suis"],
          hint: "Tout le monde la connaît : « … » + ton prénom.",
          explication: "« Je suis » = présent du verbe être à la 1re personne du singulier."
        }
      ]
    },
    {
      id: "accords",
      name: "Accords sujet-verbe",
      emoji: "🔗",
      desc: "Accord du verbe avec son sujet en personne et en nombre",
      questions: [
        {
          text: "Choisis la forme correcte : « Les enfants ___ au parc. »",
          options: ["joue", "jouent", "jouez", "jouait"],
          answer: 1,
          hint: "Le sujet est au pluriel, le verbe doit l'être aussi.",
          explication: "« Les enfants » (pluriel) → « jouent » (3e personne du pluriel)."
        },
        {
          text: "Choisis la forme correcte : « Marie et Paul ___ contents. »",
          options: ["est", "sont", "es", "été"],
          answer: 1,
          hint: "Deux personnes = sujet pluriel.",
          explication: "« Marie et Paul » = ils (pluriel) → « sont »."
        },
        {
          text: "Choisis : « Toi et moi ___ amis. »",
          options: ["es", "est", "sommes", "sont"],
          answer: 2,
          hint: "« Toi et moi » = nous (1re personne du pluriel).",
          explication: "« Toi et moi » correspond à « nous » → « sommes »."
        },
        {
          text: "Choisis : « Le chat et le chien ___ dans le jardin. »",
          options: ["dort", "dorment", "dormez", "dormait"],
          answer: 1,
          hint: "Deux sujets = pluriel.",
          explication: "« Le chat et le chien » → « dorment » (3e du pluriel)."
        },
        {
          type: "vrai_faux",
          text: "Dans la phrase « Toute la classe applaudit », le verbe est au singulier car « la classe » est un nom singulier.",
          answer: 0,
          hint: "« La classe » désigne un groupe mais grammaticalement c'est un singulier.",
          explication: "VRAI. « La classe » est un singulier grammatical, même s'il désigne plusieurs personnes."
        },
        {
          text: "Choisis : « Ni Léa ni Paul ne ___ ce film. »",
          options: ["aime", "aimes", "aiment", "aimait"],
          answer: 2,
          hint: "Deux sujets reliés par « ni... ni » → pluriel.",
          explication: "Quand deux sujets sont reliés par « ni... ni », le verbe est au pluriel : « aiment »."
        },
        {
          text: "Choisis : « C'est nous qui ___ raison. »",
          options: ["a", "as", "avons", "ont"],
          answer: 2,
          hint: "Le pronom relatif « qui » prend la personne de son antécédent (nous).",
          explication: "Le sujet de « avoir » est « nous », donc → « avons ». « C'est nous qui avons raison. »"
        },
        {
          type: "qcm",
          text: "Lesquelles de ces phrases sont correctement accordées ?",
          options: ["Les élèves écoutent attentivement.", "La voiture roule vite.", "Mes amis arrive bientôt.", "Le chien et le chat dort."],
          answer: [0, 1],
          hint: "Vérifie que le verbe s'accorde bien avec le sujet en nombre.",
          explication: "Phrases 1 et 2 OK. La 3 devrait être « arrivent », la 4 « dorment »."
        },
        {
          text: "Choisis : « Chacun ___ son chemin. »",
          options: ["suit", "suivent", "suis", "suivons"],
          answer: 0,
          hint: "« Chacun » est un pronom singulier.",
          explication: "« Chacun » est singulier → « suit » (3e du singulier)."
        },
        {
          type: "texte",
          text: "Complète : « Nous … (être) heureux. » Écris uniquement le verbe.",
          answer: ["sommes", "Sommes"],
          hint: "Verbe être au présent, 1re personne du pluriel.",
          explication: "« Nous sommes heureux. » Verbe être au présent."
        }
      ]
    },
    {
      id: "genres-litteraires",
      name: "Genres littéraires",
      emoji: "📖",
      desc: "Récit, théâtre, poésie, conte, fable",
      questions: [
        {
          text: "Un texte écrit pour être joué sur scène par des comédiens est…",
          options: ["un roman", "une pièce de théâtre", "un poème", "un conte"],
          answer: 1,
          hint: "Avec des personnages qui parlent à voix haute.",
          explication: "Une pièce de théâtre est écrite pour la représentation scénique, avec des dialogues."
        },
        {
          text: "Lequel de ces auteurs est connu pour ses fables ?",
          options: ["Victor Hugo", "Jean de La Fontaine", "Molière", "Charles Perrault"],
          answer: 1,
          hint: "Auteur du XVIIe siècle, célèbre pour Le Corbeau et le Renard.",
          explication: "Jean de La Fontaine (1621-1695) est célèbre pour ses Fables (Le Lièvre et la Tortue, Le Corbeau et le Renard…)."
        },
        {
          text: "Un conte se termine généralement par…",
          options: ["une morale", "une formule magique comme « Ils vécurent heureux »", "une chanson", "un débat"],
          answer: 1,
          hint: "Les contes finissent souvent par une formule rituelle.",
          explication: "Les contes traditionnels se terminent souvent par « Ils vécurent heureux et eurent beaucoup d'enfants »."
        },
        {
          text: "Une fable comporte généralement…",
          options: ["uniquement de la prose", "une histoire et une morale", "deux actes", "trois personnages"],
          answer: 1,
          hint: "La fable enseigne une leçon de vie.",
          explication: "Une fable est un court récit (souvent en vers) qui contient une morale enseignant une leçon."
        },
        {
          text: "Le mythe d'Ulysse, qui rentre chez lui après la guerre de Troie, s'appelle…",
          options: ["L'Iliade", "L'Énéide", "L'Odyssée", "Les Métamorphoses"],
          answer: 2,
          hint: "Œuvre attribuée à Homère sur le retour d'Ulysse.",
          explication: "L'Odyssée raconte le long voyage de retour d'Ulysse vers Ithaque après la guerre de Troie."
        },
        {
          type: "vrai_faux",
          text: "Un poème peut ne pas rimer.",
          answer: 0,
          hint: "Pense aux poèmes modernes en vers libres.",
          explication: "VRAI. Les poèmes modernes (vers libres) ne riment pas forcément. La rime n'est pas obligatoire en poésie."
        },
        {
          text: "Qui a écrit Le Petit Chaperon Rouge sous sa forme française la plus connue ?",
          options: ["Charles Perrault", "Les frères Grimm", "Andersen", "La Fontaine"],
          answer: 0,
          hint: "Auteur français du XVIIe siècle, célèbre pour ses contes.",
          explication: "Charles Perrault (1697) a écrit la version française la plus connue du Petit Chaperon Rouge."
        },
        {
          type: "qcm",
          text: "Lesquels de ces textes appartiennent au genre narratif (qui raconte une histoire) ?",
          options: ["un roman", "une pièce de théâtre", "un conte", "une recette de cuisine"],
          answer: [0, 2],
          hint: "Un récit raconte des événements en prose.",
          explication: "Roman et conte sont des récits (narratif). Le théâtre est dialogué (dramatique), la recette est explicative."
        },
        {
          text: "Une biographie est…",
          options: ["l'histoire d'une vie écrite par quelqu'un d'autre", "une autobiographie", "un poème", "un dictionnaire"],
          answer: 0,
          hint: "« bio » = vie, « graphie » = écrire.",
          explication: "Une biographie est le récit de la vie d'une personne, écrit par un autre auteur."
        },
        {
          type: "texte",
          text: "Comment appelle-t-on un court récit avec une morale, souvent mettant en scène des animaux ?",
          answer: ["fable", "Fable", "une fable"],
          hint: "Genre rendu célèbre par La Fontaine.",
          explication: "Une fable : court récit avec une morale, souvent avec des animaux personnifiés."
        }
      ]
    },
    {
      id: "figures-style",
      name: "Figures de style",
      emoji: "🎨",
      desc: "Comparaison, métaphore, personnification",
      questions: [
        {
          text: "« Il est fort comme un lion. » est une…",
          options: ["métaphore", "comparaison", "personnification", "antithèse"],
          answer: 1,
          hint: "Le mot « comme » est un indice.",
          explication: "Une comparaison utilise un outil comparatif (« comme », « tel », « semblable à »…)."
        },
        {
          text: "« Cet homme est un lion. » est une…",
          options: ["métaphore", "comparaison", "personnification", "hyperbole"],
          answer: 0,
          hint: "On dit qu'il EST un lion (pas qu'il est comme un lion).",
          explication: "La métaphore est une comparaison sans outil de comparaison (sans « comme »)."
        },
        {
          text: "« Le vent murmure dans les arbres. » est une…",
          options: ["métaphore", "comparaison", "personnification", "litote"],
          answer: 2,
          hint: "On attribue au vent une action humaine (murmurer).",
          explication: "La personnification attribue des qualités humaines à des choses ou des animaux."
        },
        {
          text: "« Je meurs de faim ! » est une…",
          options: ["comparaison", "personnification", "hyperbole (exagération)", "litote"],
          answer: 2,
          hint: "On exagère pour donner plus de force.",
          explication: "L'hyperbole est une exagération. On ne meurt pas vraiment de faim, on a juste très faim."
        },
        {
          type: "vrai_faux",
          text: "« Blanc comme neige » est une comparaison.",
          answer: 0,
          hint: "« Comme » est l'outil de comparaison.",
          explication: "VRAI. La présence de « comme » fait de cette expression une comparaison."
        },
        {
          text: "Quel est l'outil de comparaison dans : « Léa est rapide tel un guépard » ?",
          options: ["est", "rapide", "tel", "guépard"],
          answer: 2,
          hint: "C'est le mot qui établit la comparaison.",
          explication: "« Tel » est un outil de comparaison synonyme de « comme »."
        },
        {
          type: "qcm",
          text: "Lesquelles de ces expressions sont des métaphores ?",
          options: ["Cette femme est une perle.", "Il court comme le vent.", "Le temps est un fleuve.", "Léa est intelligente."],
          answer: [0, 2],
          hint: "La métaphore identifie deux choses sans utiliser « comme ».",
          explication: "« cette femme est une perle » et « le temps est un fleuve » sont des métaphores. La 2 est une comparaison, la 4 une phrase simple."
        },
        {
          text: "« La nuit habillait la ville de mystère. » Quelle figure ?",
          options: ["comparaison", "personnification", "hyperbole", "rien (phrase simple)"],
          answer: 1,
          hint: "« Habiller » est une action humaine attribuée à la nuit.",
          explication: "La nuit est personnifiée : on lui prête l'action humaine d'habiller."
        },
        {
          text: "L'expression « pleurer des rivières » est une…",
          options: ["comparaison", "personnification", "hyperbole", "métaphore"],
          answer: 2,
          hint: "Personne ne pleure littéralement des rivières.",
          explication: "L'hyperbole exagère pour insister sur la quantité de larmes."
        },
        {
          type: "texte",
          text: "Quelle figure de style trouve-t-on dans « La lune sourit dans le ciel » ? Réponds en un mot.",
          answer: ["personnification", "Personnification"],
          hint: "Sourire est une action humaine attribuée à un objet.",
          explication: "La lune sourit = personnification (on prête à la lune une action humaine)."
        }
      ]
    },
    {
      id: "orthographe",
      name: "Orthographe d'usage",
      emoji: "✍️",
      desc: "Homophones courants, accents, pluriels",
      questions: [
        {
          text: "Choisis : « Je prends ___ café. »",
          options: ["mon", "mont", "m'on", "mond"],
          answer: 0,
          hint: "Déterminant possessif singulier devant un nom masculin.",
          explication: "« Mon » est un déterminant possessif : « mon café » = le café qui est à moi."
        },
        {
          text: "Choisis : « ___ -tu venu hier ? »",
          options: ["A", "As", "À", "Ah"],
          answer: 1,
          hint: "Verbe avoir conjugué à la 2e personne du singulier.",
          explication: "« As-tu venu » : « as » est le verbe avoir conjugué (présent, 2e pers. sing.). Note : on devrait dire « Es-tu venu » avec être."
        },
        {
          text: "Choisis : « Il habite ___ Paris. »",
          options: ["a", "à", "as", "ha"],
          answer: 1,
          hint: "Préposition qui indique le lieu.",
          explication: "« À » (avec accent grave) = préposition. « A » sans accent = verbe avoir."
        },
        {
          text: "Quel est le pluriel de « cheval » ?",
          options: ["chevals", "chevaux", "cheveau", "chevales"],
          answer: 1,
          hint: "Mots en -al → souvent en -aux au pluriel.",
          explication: "Cheval → chevaux. Comme journal → journaux, hôpital → hôpitaux."
        },
        {
          text: "Quel est le pluriel de « bijou » ?",
          options: ["bijous", "bijoux", "bijous", "bijos"],
          answer: 1,
          hint: "« Hibou, caillou, chou, genou, joujou, pou, bijou » : ces 7 mots prennent un -x.",
          explication: "Bijou est un des 7 mots en -ou qui font leur pluriel en -oux (« bijoux »)."
        },
        {
          type: "vrai_faux",
          text: "Le pluriel de « festival » est « festivaux ».",
          answer: 1,
          hint: "Quelques mots en -al font exception et prennent un -s au pluriel.",
          explication: "FAUX. « Festival » fait son pluriel en -s : « festivals ». Comme bal, carnaval, chacal."
        },
        {
          text: "Choisis : « Il ___ deux frères. »",
          options: ["a", "à", "as", "à"],
          answer: 0,
          hint: "Verbe avoir à la 3e personne du singulier.",
          explication: "« Il a deux frères » : « a » est le verbe avoir conjugué (sans accent)."
        },
        {
          type: "qcm",
          text: "Quels mots sont mal orthographiés ?",
          options: ["acceuil", "accueil", "developpement", "développement"],
          answer: [0, 2],
          hint: "Vérifie les voyelles et les accents.",
          explication: "« Accueil » s'écrit -cu- (pas -ce-). « Développement » prend un accent aigu et 2 p."
        },
        {
          text: "Choisis : « Je ne ___ pas si tu viens. »",
          options: ["sais", "sait", "ses", "ces"],
          answer: 0,
          hint: "Verbe savoir à la 1re personne du singulier.",
          explication: "« Je sais » : verbe savoir, présent, 1re du singulier."
        },
        {
          type: "texte",
          text: "Quel est le pluriel de « œil » ? (Un mot)",
          answer: ["yeux", "Yeux"],
          hint: "Pluriel totalement irrégulier.",
          explication: "Le pluriel de « œil » est « yeux ». C'est un pluriel exceptionnel."
        }
      ]
    }
  ]
};
