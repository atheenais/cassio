/* Matière : EMC ⚖️
   4 thèmes × 10 questions = 40 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["cm2"] = window.CURRICULUM_PARTS["cm2"] || {};
window.CURRICULUM_PARTS["cm2"]["emc"] = {
  id: "emc",
  name: "EMC",
  emoji: "⚖️",
  desc: "Valeurs républicaines, citoyenneté, respect",
  topics: [
    {
      id: "valeurs_rep",
      name: "Valeurs républicaines",
      emoji: "🇫🇷",
      desc: "Marianne, drapeau, devise, hymne, laïcité",
      questions: [
        {
          text: "Quelle est la devise de la République française ?",
          options: ["Honneur et Patrie","Liberté, Égalité, Fraternité","Dieu et Patrie","Un pour tous, tous pour un"],
          answer: 1,
          explication: "« Liberté, Égalité, Fraternité » est la devise officielle, héritée de la Révolution française et inscrite sur toutes les mairies."
        },
        {
          text: "Quel est le drapeau de la France ?",
          options: ["Bleu, jaune, rouge (bandes verticales)","Bleu, blanc, rouge (bandes verticales)","Vert, blanc, rouge (bandes horizontales)","Bleu, blanc, jaune (bandes horizontales)"],
          answer: 1,
          explication: "Le drapeau tricolore français est bleu, blanc, rouge (bandes verticales). Adopté en 1794, il symbolise la République."
        },
        {
          text: "Qui est Marianne ?",
          options: ["Une reine de France","Le symbole personnifié de la République française","Une chanteuse célèbre","Un prénom rare"],
          answer: 1,
          explication: "Marianne représente la République, souvent en buste dans les mairies avec un bonnet phrygien. Symbole de la liberté et de la République."
        },
        {
          text: "Quel est l'hymne national français ?",
          options: ["La Madelon","La Marseillaise","Le Chant des Partisans","Le Chant de l'Europe"],
          answer: 1,
          explication: "La Marseillaise (écrite par Rouget de Lisle en 1792) est devenue hymne national officiel en 1879 sous la IIIe République."
        },
        {
          text: "Que signifie « laïcité » ?",
          options: ["Ne pas avoir de religion","La séparation entre l'État et les religions, et la liberté de croyance pour chacun","Imposer une religion à tous","Interdire toutes les religions"],
          answer: 1,
          explication: "La laïcité (loi de 1905) garantit la liberté de conscience : chacun peut croire ou non, mais l'État reste neutre et n'impose aucune religion."
        },
        {
          text: "Que célèbre la fête nationale française du 14 juillet ?",
          options: ["La fin de la Seconde Guerre mondiale","La prise de la Bastille (1789)","Le Nouvel An","La fête du Travail"],
          answer: 1,
          explication: "Le 14 juillet commémore la prise de la Bastille en 1789, symbole du début de la Révolution française et de la fin de la monarchie absolue."
        },
        {
          text: "Que garantit la liberté d'expression ?",
          options: ["Le droit de dire et écrire ce que l'on pense, dans le respect de la loi","Le droit de faire n'importe quoi","Le droit d'insulter les autres","L'obligation de se taire"],
          answer: 0,
          explication: "La liberté d'expression permet de donner son opinion, mais dans le respect de la loi et des autres (pas d'insultes ni d'incitation à la haine)."
        },
        {
          text: "Que signifie « égalité » dans la devise de la République ?",
          options: ["Tout le monde doit être identique","Tous les citoyens ont les mêmes droits et la même dignité","Tout le monde a le même argent","Personne n'a de droits"],
          answer: 1,
          explication: "L'égalité signifie que tous les citoyens ont les mêmes droits devant la loi, sans distinction d'origine, de religion ou de sexe."
        },
        {
          text: "Où peut-on voir la devise « Liberté, Égalité, Fraternité » inscrite ?",
          options: ["Sur les paquets de bonbons","Sur le fronton des mairies et des écoles publiques","Sur les voitures","Nulle part"],
          answer: 1,
          explication: "La devise est inscrite sur le fronton des bâtiments publics (mairies, écoles), souvent accompagnée du drapeau tricolore."
        },
        {
          type: "vrai_faux",
          text: "En France, grâce à la laïcité, chacun est libre de croire ou de ne pas croire.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. La laïcité garantit la liberté de conscience : chacun peut avoir une religion, en changer ou n'en avoir aucune, et l'État reste neutre."
        }
      ]
    },
    {
      id: "droits_devoirs",
      name: "Droits & devoirs",
      emoji: "📜",
      desc: "Vivre en société à l'école et en famille",
      questions: [
        {
          text: "À quel âge devient-on majeur en France ?",
          options: ["16 ans","18 ans","20 ans","21 ans"],
          answer: 1,
          explication: "À 18 ans, on devient majeur : on a le droit de vote, on est responsable de ses actes, on peut signer des contrats."
        },
        {
          text: "Quel est un devoir fondamental d'un élève à l'école ?",
          options: ["Toujours être premier","Respecter les autres élèves et les adultes","Apporter des cadeaux","Parler très fort"],
          answer: 1,
          explication: "Le respect (des autres, du matériel, des règles) est un devoir fondamental. C'est la base du vivre-ensemble."
        },
        {
          text: "Quel droit fondamental tous les enfants ont-ils ?",
          options: ["Le droit de conduire une voiture","Le droit à l'éducation, à la santé et à la protection","Le droit de voter","Le droit de travailler à plein temps"],
          answer: 1,
          explication: "La Convention internationale des Droits de l'Enfant (1989) garantit : éducation, santé, protection, jeu, expression… pour tous les enfants."
        },
        {
          text: "À l'école, quelle attitude est attendue de chaque élève ?",
          options: ["Ne parler à personne","Participer, écouter et respecter les règles de classe","Faire ce qu'on veut","Toujours rester silencieux"],
          answer: 1,
          explication: "L'école est un lieu d'apprentissage où chaque élève a des droits (être respecté, apprendre) et des devoirs (écouter, participer, respecter)."
        },
        {
          text: "Quel mot désigne le fait de bien vivre ensemble en société ?",
          options: ["L'individualisme","La citoyenneté","L'isolement","La compétition"],
          answer: 1,
          explication: "La citoyenneté = participer à la vie de la société en respectant les autres, les règles et les valeurs communes (liberté, égalité, fraternité)."
        },
        {
          text: "Qu'est-ce qu'une règle (ou un règlement) dans une classe ou un club ?",
          options: ["Une décision pour embêter les élèves","Un ensemble de consignes pour vivre ensemble en sécurité et en respect","Une punition automatique","Quelque chose qu'on peut ignorer"],
          answer: 1,
          explication: "Les règles organisent la vie commune : elles protègent chacun et permettent de vivre ensemble dans le respect et la sécurité."
        },
        {
          text: "Quel est un DEVOIR du citoyen en France ?",
          options: ["Respecter les lois","Gagner beaucoup d'argent","Avoir une voiture","Voyager chaque année"],
          answer: 0,
          explication: "Respecter les lois est un devoir fondamental du citoyen, tout comme le respect des autres et de l'environnement."
        },
        {
          text: "À quoi sert un délégué de classe ?",
          hint: "Il est élu par ses camarades.",
          options: ["À commander les autres élèves","À représenter ses camarades et porter leur parole","À noter les élèves","À choisir les devoirs"],
          answer: 1,
          explication: "Le délégué est élu pour représenter la classe, transmettre les idées et les problèmes des élèves : c'est un premier apprentissage de la démocratie."
        },
        {
          text: "Pourquoi est-il important que chacun respecte les règles communes ?",
          options: ["Pour que la vie en groupe soit agréable et juste pour tous","Pour faire plaisir au directeur uniquement","Cela n'a aucune importance","Pour être le plus fort"],
          answer: 0,
          explication: "Quand chacun respecte les règles, la vie en groupe est plus juste, plus sûre et plus agréable pour tout le monde."
        },
        {
          type: "vrai_faux",
          text: "Avoir des droits implique aussi d'avoir des devoirs envers les autres.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Droits et devoirs vont ensemble : on a le droit d'être respecté, et le devoir de respecter les autres en retour."
        }
      ]
    },
    {
      id: "respect",
      name: "Respect & harcèlement",
      emoji: "🤝",
      desc: "Vivre ensemble, lutter contre les violences",
      questions: [
        {
          text: "Qu'est-ce que le harcèlement scolaire ?",
          options: ["Une dispute occasionnelle entre élèves","Des violences (mots, gestes) répétées contre un même enfant","Une compétition entre classes","Un examen difficile"],
          answer: 1,
          explication: "Le harcèlement combine : violence + répétition + isolement de la victime. C'est INTERDIT par la loi et sévèrement puni."
        },
        {
          text: "Si tu es témoin d'un harcèlement, que dois-tu faire ?",
          options: ["Ignorer et passer ton chemin","En parler à un adulte de confiance (enseignant, parent, CPE)","Filmer la scène","Te moquer avec les autres"],
          answer: 1,
          explication: "Ne pas rester silencieux ! Un témoin qui parle peut sauver la victime. Numéro gratuit en France : 3018 (Non au harcèlement)."
        },
        {
          text: "Que signifie « tolérance » ?",
          options: ["Ne pas aimer les autres","Accepter et respecter les différences de chacun","Imposer ses idées à tous","Être indifférent à tout"],
          answer: 1,
          explication: "La tolérance = respecter les autres, leurs opinions, leurs origines, leurs croyances, leurs choix, même si on ne pense pas comme eux."
        },
        {
          text: "Quelle attitude est la PLUS respectueuse en classe ?",
          options: ["Couper la parole quand on a une bonne idée","Lever la main et écouter quand un camarade parle","Parler en même temps que la maîtresse","Se moquer des réponses des autres"],
          answer: 1,
          explication: "Respecter la parole de chacun : lever la main, écouter sans interrompre, ne pas se moquer. C'est la base d'une classe sereine."
        },
        {
          text: "Qu'est-ce que la discrimination ?",
          options: ["Aider quelqu'un en difficulté","Traiter quelqu'un différemment (en moins bien) à cause de ses origines, son physique, sa religion…","Faire un compliment","Apprendre une nouvelle langue"],
          answer: 1,
          explication: "La discrimination = traiter une personne moins bien à cause d'un critère (couleur, sexe, handicap, religion…). C'est INTERDIT et puni par la loi."
        },
        {
          text: "Que faire si un camarade est régulièrement mis à l'écart et moqué ?",
          options: ["Rire avec les autres","En parler à un adulte et soutenir la personne","Faire comme si on n'avait rien vu","Filmer la scène"],
          answer: 1,
          explication: "Face à une situation de harcèlement, il faut en parler à un adulte de confiance et ne pas laisser seule la victime. Le silence aggrave la situation."
        },
        {
          text: "Que signifie « respecter les différences » ?",
          options: ["Se moquer de ceux qui ne sont pas comme nous","Accepter que les autres aient des origines, des goûts ou des idées différents","Obliger tout le monde à penser pareil","Ignorer les autres"],
          answer: 1,
          explication: "Respecter les différences, c'est accepter et valoriser la diversité (origines, croyances, goûts), sans jugement ni moquerie."
        },
        {
          text: "Quel numéro gratuit peut-on appeler en France en cas de harcèlement scolaire ?",
          options: ["Le 15","Le 3018","Le 112","Le 18"],
          answer: 1,
          explication: "Le 3018 est le numéro national gratuit contre le harcèlement (notamment en ligne). Le 15 = Samu, le 18 = pompiers, le 112 = urgences européennes."
        },
        {
          text: "Comment appelle-t-on le harcèlement qui se produit sur Internet et les réseaux sociaux ?",
          hint: "Un mot anglais avec « cyber ».",
          options: ["Le cyberharcèlement","Le téléchargement","Le streaming","Le bug"],
          answer: 0,
          explication: "Le cyberharcèlement est un harcèlement en ligne (messages, photos, rumeurs). Il faut conserver les preuves et en parler à un adulte."
        },
        {
          text: "Quelle attitude montre de l'empathie envers un camarade triste ?",
          options: ["L'ignorer complètement","Lui demander si ça va et l'écouter","Se moquer de lui","Le laisser seul"],
          answer: 1,
          explication: "L'empathie, c'est se mettre à la place de l'autre : demander comment il va et l'écouter avec bienveillance aide la personne à se sentir soutenue."
        }
      ]
    },
    {
      id: "citoyennete_env",
      name: "Citoyenneté & environnement",
      emoji: "🌍",
      desc: "Gestes éco-responsables, vie démocratique",
      questions: [
        {
          text: "Que signifie « voter » en démocratie ?",
          options: ["Acheter quelque chose","Choisir ses représentants ou se prononcer sur une décision","Crier dans la rue","Voyager"],
          answer: 1,
          explication: "Voter = exprimer son choix lors d'élections (président, maire, députés…). C'est un droit ET un devoir civique dès 18 ans."
        },
        {
          text: "Quel geste citoyen aide le plus à protéger la planète ?",
          options: ["Jeter ses déchets par terre","Trier ses déchets, économiser l'eau et l'électricité","Acheter beaucoup d'emballages","Laisser couler l'eau du robinet"],
          answer: 1,
          explication: "Trier, économiser, recycler, consommer de manière responsable : ces gestes simples, multipliés par millions, ont un impact énorme."
        },
        {
          text: "Qui est le ou la maire ?",
          options: ["Le responsable de tout le pays","Le ou la responsable élu·e d'une commune (ville ou village)","Un policier","Un commerçant"],
          answer: 1,
          explication: "Le maire est élu pour 6 ans. Il gère sa commune : écoles, voirie, urbanisme, état civil (mariages, naissances)…"
        },
        {
          text: "Pourquoi est-il important de protéger l'environnement ?",
          options: ["Parce que c'est obligatoire à l'école","Pour préserver la planète pour les générations futures","Parce que c'est à la mode","Pour avoir de bonnes notes"],
          answer: 1,
          explication: "Notre planète est un héritage commun. Bien la protéger aujourd'hui, c'est permettre aux enfants de demain d'y vivre aussi."
        },
        {
          text: "Quel principe résume bien la vie en société ?",
          options: ["Chacun pour soi","Mes droits s'arrêtent là où commencent ceux des autres","Le plus fort gagne toujours","Tout est permis"],
          answer: 1,
          explication: "Ce principe (issu de la Déclaration des Droits de l'Homme, art. 4) : être libre, oui, mais sans nuire aux autres. C'est la base du vivre-ensemble."
        },
        {
          text: "Comment appelle-t-on l'ensemble des habitants qui ont le droit de voter pour choisir leurs représentants ?",
          options: ["Les électeurs","Les touristes","Les spectateurs","Les clients"],
          answer: 0,
          explication: "Les électeurs sont les citoyens en âge et en droit de voter. Voter, c'est participer aux décisions de la société (démocratie)."
        },
        {
          text: "Que peut faire un élève pour agir concrètement en faveur de l'environnement à l'école ?",
          options: ["Laisser couler l'eau du robinet","Trier les déchets et éviter le gaspillage","Jeter les papiers par terre","Laisser les lumières allumées"],
          answer: 1,
          explication: "Trier les déchets, économiser l'eau et l'électricité, éviter le gaspillage : ce sont des éco-gestes simples et utiles, accessibles à chacun."
        },
        {
          text: "Qu'est-ce que la démocratie ?",
          hint: "Le mot vient du grec : « pouvoir du peuple ».",
          options: ["Le pouvoir d'un seul roi","Un système où le peuple choisit ses dirigeants par le vote","L'absence de toute règle","Le pouvoir des plus riches"],
          answer: 1,
          explication: "En démocratie, le peuple détient le pouvoir : il choisit ses représentants par des élections et participe aux décisions communes."
        },
        {
          text: "Que symbolise l'urne dans laquelle on glisse son bulletin lors d'une élection ?",
          options: ["Le secret et l'égalité du vote","Une simple décoration","Une poubelle","Une tirelire"],
          answer: 0,
          explication: "L'urne garantit que chaque vote est secret et compte autant que les autres : c'est un symbole fort de l'égalité démocratique."
        },
        {
          text: "Pourquoi est-il important de s'informer avant de donner son avis sur un sujet ?",
          options: ["Pour pouvoir se forger une opinion réfléchie et éviter les fausses informations","Pour copier l'avis des autres","Ce n'est pas important","Pour avoir toujours raison"],
          answer: 0,
          explication: "S'informer à partir de sources fiables permet de se faire une opinion réfléchie et de ne pas se laisser tromper par de fausses informations."
        }
      ]
    }
  ]
};
