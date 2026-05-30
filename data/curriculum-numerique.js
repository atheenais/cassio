/* Matière : Culture numérique 💻
   4 thèmes × 10 questions = 40 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["numerique"] = {
  id: "numerique",
  name: "Culture numérique",
  emoji: "💻",
  desc: "Sécurité, identité, info, citoyenneté en ligne",
  topics: [
    {
      id: "securite",
      name: "Sécurité & mots de passe",
      emoji: "🔒",
      desc: "Protéger ses comptes et ses données",
      questions: [
        {
          text: "Quel mot de passe est le PLUS sécurisé ?",
          options: ["Tr@v3rs!eR-le-Pont","123456","motdepasse","mon prénom"],
          answer: 0,
          explication: "Un bon mot de passe est long (12+ caractères), mélange majuscules, minuscules, chiffres et symboles, et ne contient aucune information personnelle."
        },
        {
          text: "Que faut-il faire avec ses mots de passe ?",
          options: ["Les garder secrets et ne pas les partager","Les afficher sur son cahier","Les donner à un inconnu","Les écrire sur Internet"],
          answer: 0,
          explication: "Un mot de passe doit rester strictement personnel et secret. Le partager (même avec un ami) crée un risque pour le compte concerné."
        },
        {
          text: "Pourquoi ne faut-il PAS utiliser le même mot de passe partout ?",
          options: ["Si un site est piraté, tous tes autres comptes deviennent vulnérables","Cela ralentit l'ordinateur","Cela coûte de l'argent","Ce n'est pas grave"],
          answer: 0,
          explication: "Si un site est piraté et ton mot de passe volé, les pirates l'essaieront sur tes autres comptes. Un mot de passe différent par site protège l'ensemble."
        },
        {
          text: "Qu'est-ce qu'un « hameçonnage » (phishing) ?",
          hint: "Un escroc essaie de faire mordre à l'hameçon.",
          options: ["Un message piégé qui tente de voler tes identifiants en imitant un site officiel","Une pub pour la pêche","Un jeu vidéo","Un type d'ordinateur"],
          answer: 0,
          explication: "Le phishing/hameçonnage est un faux mail ou faux site (imitant la banque, la Poste…) qui te demande de saisir tes identifiants pour les voler."
        },
        {
          text: "Que faire si on reçoit un mail bizarre demandant un mot de passe ou un code ?",
          options: ["Ne pas répondre, ne pas cliquer, et prévenir un adulte","Répondre tout de suite avec son mot de passe","Cliquer sur le lien pour voir","Transférer le mail à tous ses contacts"],
          answer: 0,
          explication: "Aucune banque, école ou service sérieux ne demande un mot de passe par mail. En cas de doute, ne pas répondre, ne pas cliquer et prévenir un adulte."
        },
        {
          text: "Pourquoi mettre régulièrement à jour ses appareils (téléphone, ordinateur) ?",
          options: ["Pour corriger les failles de sécurité","Pour décorer l'écran","Pour ralentir l'appareil","Pour effacer ses photos"],
          answer: 0,
          explication: "Les mises à jour de sécurité corrigent les failles que les pirates pourraient exploiter. Garder ses appareils à jour est une mesure essentielle de protection."
        },
        {
          text: "Que fait un antivirus ?",
          options: ["Il détecte et bloque les programmes malveillants (malware)","Il rend l'ordinateur plus joli","Il efface les photos","Il fabrique des virus"],
          answer: 0,
          explication: "Un antivirus détecte et neutralise les programmes malveillants (virus, ransomwares, logiciels espions) qui menacent l'ordinateur ou les données."
        },
        {
          text: "Qu'est-ce que la « double authentification » ?",
          hint: "On ajoute une 2e étape après le mot de passe.",
          options: ["Une 2e étape de vérification (code reçu par SMS ou application) en plus du mot de passe","Avoir deux mots de passe identiques","Se connecter deux fois","Avoir deux comptes"],
          answer: 0,
          explication: "La double authentification ajoute une seconde preuve d'identité (code à usage unique) après le mot de passe. Même si le mot de passe est volé, le compte reste protégé."
        },
        {
          type: "qcm",
          text: "Parmi ces mots de passe, lesquels sont MAUVAIS (trop faibles) ?",
          options: ["123456","azerty","azerty1234!9-Px","le prénom du chat"],
          answer: [0,1,3],
          explication: "123456, azerty et un nom d'animal connu sont trop faibles : ils figurent dans toutes les listes utilisées par les pirates. Seul le 3e est solide."
        },
        {
          type: "vrai_faux",
          text: "Il est prudent d'utiliser le Wi-Fi public gratuit pour accéder à son compte bancaire.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Les Wi-Fi publics ne sont pas chiffrés : un pirate connecté au même réseau peut intercepter les données. On évite les opérations sensibles sur un Wi-Fi public."
        }
      ]
    },
    {
      id: "identite_num",
      name: "Identité numérique",
      emoji: "👤",
      desc: "Traces, profil, e-réputation",
      questions: [
        {
          text: "Qu'est-ce que l'identité numérique ?",
          options: ["L'ensemble des informations qui me représentent sur Internet","Mon vrai prénom uniquement","Ma photo de classe","Mon adresse postale"],
          answer: 0,
          explication: "L'identité numérique regroupe tout ce qui me représente en ligne : profils, publications, photos, commentaires, traces laissées sur les sites."
        },
        {
          text: "Qu'est-ce qu'une « trace numérique » ?",
          options: ["Toute information laissée sur Internet (recherche, publication, like…)","Une marque sur l'écran","Un type de pinceau","Une empreinte digitale physique"],
          answer: 0,
          explication: "Chaque action en ligne (recherche, like, commentaire, achat, position) laisse une trace numérique. Ces traces s'accumulent et forment notre profil."
        },
        {
          text: "Pourquoi est-il important de réfléchir avant de publier quelque chose en ligne ?",
          options: ["Une publication peut être copiée, partagée et rester très longtemps en ligne","Cela ralentit Internet","Cela coûte cher","Cela ne change rien"],
          answer: 0,
          explication: "Une publication peut être capturée, partagée et rester accessible des années (« Internet n'oublie jamais »). Avant de publier, on se demande : et si tout le monde le voyait ?"
        },
        {
          text: "Qu'est-ce que la « e-réputation » ?",
          hint: "Comment je suis vu(e) en ligne par les autres.",
          options: ["L'image qu'on a de toi en ligne, à travers ce qui est publié","Le nombre de fois où tu cliques","Ton score de jeu vidéo","Ton prénom officiel"],
          answer: 0,
          explication: "L'e-réputation, c'est l'image de toi sur Internet, construite par tes publications mais aussi par ce que les autres publient à ton sujet."
        },
        {
          text: "Quel âge minimum recommande la loi française pour s'inscrire seul(e) sur la plupart des réseaux sociaux (sans accord parental) ?",
          options: ["15 ans","8 ans","10 ans","Aucun âge minimum"],
          answer: 0,
          explication: "En France, depuis la loi de 2022, l'inscription seul(e) sur les réseaux sociaux est interdite avant 15 ans sans accord des parents."
        },
        {
          text: "Que faut-il vérifier dans les paramètres de confidentialité d'un compte ?",
          options: ["Qui peut voir tes publications, ta liste d'amis, ta localisation","La couleur du fond","La taille de l'écriture","La langue du site"],
          answer: 0,
          explication: "Les paramètres de confidentialité contrôlent qui peut voir tes publications, ta liste d'amis, ta localisation… À vérifier dès l'inscription."
        },
        {
          text: "Pourquoi ne pas mettre en ligne une photo de soi avec son nom complet et son école ?",
          options: ["Pour ne pas être facilement repérable par n'importe qui","Pour gagner des points","Cela améliore la photo","Cela accélère Internet"],
          answer: 0,
          explication: "Diffuser nom, école, adresse et photo facilite l'identification par des inconnus malveillants. Mieux vaut limiter ces informations en ligne."
        },
        {
          text: "Que sont les « cookies » sur Internet ?",
          options: ["De petits fichiers qui enregistrent des informations sur tes visites","Des biscuits","Des virus","Des photos personnelles"],
          answer: 0,
          explication: "Les cookies sont de petits fichiers stockés par les sites web pour mémoriser des préférences, mais aussi pour te suivre (publicité ciblée)."
        },
        {
          type: "qcm",
          text: "Parmi ces informations, lesquelles sont des DONNÉES PERSONNELLES ?",
          options: ["ton nom","ta date de naissance","la couleur du ciel","ton adresse mail"],
          answer: [0,1,3],
          explication: "Nom, date de naissance et adresse mail permettent de t'identifier : ce sont des données personnelles, protégées par la loi (RGPD)."
        },
        {
          type: "vrai_faux",
          text: "Quand on supprime une photo d'un réseau social, elle disparaît immédiatement et définitivement partout sur Internet.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Une photo peut avoir été téléchargée, partagée ou capturée par d'autres avant suppression. La supprimer du réseau n'efface pas les copies déjà faites."
        }
      ]
    },
    {
      id: "info_fiable",
      name: "Évaluer l'information",
      emoji: "🔍",
      desc: "Sources, fausses nouvelles, vérification",
      questions: [
        {
          text: "Qu'est-ce qu'une « fake news » (infox) ?",
          options: ["Une fausse information présentée comme vraie","Un journal du sport","Un type de logiciel","Une vraie information officielle"],
          answer: 0,
          explication: "Une fake news (ou infox) est une fausse information délibérément diffusée comme si elle était vraie, souvent pour tromper, choquer ou manipuler."
        },
        {
          text: "Comment vérifier qu'une information trouvée en ligne est fiable ?",
          options: ["La comparer avec plusieurs sources sérieuses et indépendantes","La croire si elle a beaucoup de likes","La partager immédiatement","La croire si elle est en couleur"],
          answer: 0,
          explication: "Pour vérifier une info, on consulte plusieurs sources sérieuses et indépendantes (médias reconnus, sites officiels). Une seule source ne suffit pas."
        },
        {
          text: "Quel type de source est généralement le plus fiable pour une information scientifique ?",
          options: ["Un site d'institution scientifique ou un média reconnu","Un commentaire anonyme sur un réseau social","Une chaîne d'amis sur WhatsApp","Une publicité"],
          answer: 0,
          explication: "Les sources institutionnelles (CNRS, INSERM, universités, médias reconnus) reposent sur des experts et des vérifications. Un commentaire anonyme ne garantit rien."
        },
        {
          text: "Pourquoi certaines fausses informations se propagent-elles très vite sur les réseaux sociaux ?",
          options: ["Elles jouent souvent sur les émotions (peur, colère, surprise) et incitent au partage","Parce qu'elles sont écrites en grand","Parce qu'elles sont en latin","Par hasard uniquement"],
          answer: 0,
          explication: "Les fake news jouent souvent sur les émotions fortes (peur, indignation, choc), ce qui pousse au partage rapide, sans prendre le temps de vérifier."
        },
        {
          text: "Que peut-on faire en cas de doute sur une image vue en ligne ?",
          hint: "Il existe des outils de recherche par image.",
          options: ["Faire une recherche inversée d'image pour retrouver son origine","Croire qu'elle est forcément vraie","La partager pour demander aux amis","L'effacer du téléphone"],
          answer: 0,
          explication: "La recherche inversée (Google Images, TinEye…) permet de retrouver où une image est déjà apparue. On découvre souvent qu'une image est ancienne ou hors contexte."
        },
        {
          text: "Que désigne le mot « source » en information ?",
          options: ["L'origine d'une information (qui la dit, où, quand)","Une fontaine d'eau","Un site de jeu","Une marque d'ordinateur"],
          answer: 0,
          explication: "La source est l'origine d'une information. Connaître la source permet d'évaluer sa fiabilité (auteur, date, contexte, intentions)."
        },
        {
          text: "Qu'est-ce qu'un « deepfake » ?",
          hint: "Vidéo ou audio truqué grâce à l'intelligence artificielle.",
          options: ["Une fausse vidéo créée par IA, très ressemblante mais trompeuse","Un type de jeu en ligne","Une marque de téléphone","Une vidéo officielle"],
          answer: 0,
          explication: "Un deepfake est une vidéo (ou audio) truquée par intelligence artificielle, faisant dire ou faire à quelqu'un ce qu'il n'a jamais dit. Il faut être vigilant."
        },
        {
          text: "Comment appelle-t-on l'enfermement d'un internaute dans des contenus qui confirment toujours son opinion ?",
          options: ["Une bulle de filtre / une bulle d'information","Un téléchargement","Un cookie","Un pare-feu"],
          answer: 0,
          explication: "Les algorithmes proposent souvent des contenus proches de ce qu'on aime déjà : c'est la « bulle de filtre ». On ne voit plus d'autres opinions, ce qui peut nuire à l'esprit critique."
        },
        {
          type: "qcm",
          text: "Parmi ces réflexes, lesquels sont BONS face à une info inhabituelle ?",
          options: ["vérifier la date et l'auteur","chercher d'autres sources fiables","partager tout de suite à tous ses contacts","regarder si l'info est confirmée par un média reconnu"],
          answer: [0,1,3],
          explication: "Vérifier date/auteur, croiser les sources et chercher confirmation par un média reconnu sont les bons réflexes. Partager sans vérifier diffuse la fake news."
        },
        {
          type: "vrai_faux",
          text: "Toute information publiée sur un site Internet est nécessairement vraie.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. N'importe qui peut publier en ligne. Une information n'est pas vraie parce qu'elle est sur Internet : il faut toujours évaluer la source et croiser les informations."
        }
      ]
    },
    {
      id: "droit_image",
      name: "Droit à l'image & données",
      emoji: "📸",
      desc: "Respect, autorisation, RGPD",
      questions: [
        {
          text: "Qu'est-ce que le « droit à l'image » ?",
          options: ["Le droit de chaque personne de contrôler l'utilisation de son image","Le droit de prendre toutes les photos qu'on veut","Le droit de copier les images du web","Le droit de modifier les photos des autres"],
          answer: 0,
          explication: "Le droit à l'image protège chaque personne : on ne peut pas diffuser sa photo sans son accord (et celui des parents s'il s'agit d'un mineur)."
        },
        {
          text: "Que faut-il faire avant de publier une photo où apparaît un autre élève ?",
          options: ["Lui demander son accord (et celui d'un parent si nécessaire)","Publier directement","Modifier la photo sans demander","L'envoyer en privé à tout le monde"],
          answer: 0,
          explication: "Avant de publier une photo de quelqu'un, il faut son accord explicite. Pour un mineur, l'accord des parents est aussi nécessaire."
        },
        {
          text: "Que faire si une photo de toi est publiée sans ton accord ?",
          options: ["Demander à la personne de la retirer et, si besoin, en parler à un adulte","Ignorer","Publier une autre photo en réponse","Insulter la personne"],
          answer: 0,
          explication: "Tu as le droit de demander le retrait. Si la demande n'aboutit pas, parle à un adulte ; en cas de cyberharcèlement, le 3018 (gratuit) peut aider."
        },
        {
          text: "Que signifie « données personnelles » ?",
          options: ["Toute information permettant d'identifier une personne","Une chanson qu'on aime","Une image de paysage","Une recette de cuisine"],
          answer: 0,
          explication: "Les données personnelles sont les informations qui identifient ou rendent identifiable une personne (nom, mail, photo, adresse, voix…). Elles sont protégées."
        },
        {
          text: "Que protège le RGPD en Europe ?",
          hint: "C'est la loi sur la protection des données personnelles.",
          options: ["Les données personnelles des citoyens européens","Les arbres","Les drapeaux","Le code source des logiciels"],
          answer: 0,
          explication: "Le RGPD (Règlement Général sur la Protection des Données, 2018) impose aux sites et entreprises de protéger les données personnelles et de demander leur autorisation pour les utiliser."
        },
        {
          text: "Qu'est-ce que le cyberharcèlement ?",
          options: ["Du harcèlement répété qui se déroule en ligne (messages, photos, rumeurs)","Un jeu vidéo","Une simple dispute","Une mise à jour"],
          answer: 0,
          explication: "Le cyberharcèlement est un harcèlement en ligne : messages, photos, rumeurs répétées. Il est puni par la loi. Conserver les preuves et en parler à un adulte sont essentiels."
        },
        {
          text: "Quel numéro français gratuit appelle-t-on en cas de harcèlement ou cyberharcèlement ?",
          options: ["Le 3018","Le 17","Le 12","Le 3000"],
          answer: 0,
          explication: "Le 3018 est le numéro national gratuit et anonyme contre le harcèlement, notamment en ligne. Il existe aussi une application Net Écoute."
        },
        {
          text: "Peut-on copier librement n'importe quel texte, image ou musique trouvé sur Internet ?",
          options: ["Non, ils sont souvent protégés par le droit d'auteur","Oui, tout est libre","Oui, si on aime","Oui, si c'est joli"],
          answer: 0,
          explication: "La majorité des œuvres en ligne sont protégées par le droit d'auteur. Il faut chercher des contenus libres (Creative Commons) ou demander l'autorisation."
        },
        {
          type: "qcm",
          text: "Parmi ces actions, lesquelles RESPECTENT les autres en ligne ?",
          options: ["demander l'accord avant de publier la photo de quelqu'un","diffuser une rumeur","respecter les opinions différentes","se moquer publiquement d'un camarade"],
          answer: [0,2],
          explication: "Demander l'accord et respecter les opinions différentes sont des comportements respectueux. Diffuser une rumeur ou se moquer relève du harcèlement."
        },
        {
          type: "vrai_faux",
          text: "Ce qui est interdit dans la vraie vie (insulter, menacer, harceler) est aussi interdit sur Internet.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Les mêmes lois s'appliquent en ligne : insulter, menacer, harceler, diffuser une fausse rumeur sont des infractions punies, qu'elles soient dans la rue ou sur Internet."
        }
      ]
    }
  ]
};
