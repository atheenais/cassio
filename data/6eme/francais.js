/* Matière : Français 📚 (6ème)
   4 thèmes × 10 questions = 40 questions */
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
    }
  ]
};
