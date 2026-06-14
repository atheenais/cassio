/* Matière : Numérique 💻 (6ème)
   10 thèmes × 10 questions = 100 questions
   Programme officiel 6ème : culture numérique, usage responsable, sécurité. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["numerique"] = {
  id: "numerique",
  name: "Numérique",
  emoji: "💻",
  desc: "Culture numérique, Internet, sécurité et usage responsable",
  topics: [
    {
      id: "composants_ordi",
      name: "Les composants d'un ordinateur",
      emoji: "🖥️",
      desc: "Matériel, entrée, sortie, mémoire, processeur",
      questions: [
        {
          text: "Quel composant est le 'cerveau' de l'ordinateur, chargé d'effectuer les calculs ?",
          options: ["le disque dur", "la carte graphique", "le processeur (CPU)", "la mémoire RAM"],
          answer: 2,
          hint: "CPU = Central Processing Unit.",
          explication: "Le processeur (CPU) est le composant qui exécute les instructions des programmes. Il effectue tous les calculs et coordonne le fonctionnement des autres composants."
        },
        {
          text: "Quelle est la différence entre la mémoire RAM et le disque dur ?",
          options: ["il n'y a pas de différence", "la RAM est rapide et temporaire (s'efface à l'extinction) ; le disque dur est permanent et plus lent", "le disque dur est plus rapide", "la RAM stocke les fichiers de façon permanente"],
          answer: 1,
          hint: "La RAM = mémoire de travail ; disque dur = rangement.",
          explication: "La RAM (mémoire vive) stocke temporairement les données en cours d'utilisation : elle est rapide mais s'efface à l'extinction. Le disque dur conserve les données de façon permanente."
        },
        {
          text: "Un clavier et une souris sont des périphériques…",
          options: ["de sortie", "d'entrée", "de stockage", "de calcul"],
          answer: 1,
          hint: "Ils envoient des informations vers l'ordinateur.",
          explication: "Le clavier et la souris sont des périphériques d'entrée : ils permettent à l'utilisateur d'envoyer des informations (frappes, clics) vers l'ordinateur."
        },
        {
          text: "Un écran et une imprimante sont des périphériques…",
          options: ["d'entrée", "de sortie", "de stockage", "de traitement"],
          answer: 1,
          hint: "Ils reçoivent des informations de l'ordinateur.",
          explication: "L'écran et l'imprimante sont des périphériques de sortie : ils affichent ou produisent le résultat du traitement de l'ordinateur à destination de l'utilisateur."
        },
        {
          type: "vrai_faux",
          text: "Plus un ordinateur a de RAM, plus il peut faire tourner des programmes lourds simultanément.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "La RAM c'est le bureau de travail : plus il est grand, plus on peut y poser de choses.",
          explication: "VRAI. La RAM détermine combien de données l'ordinateur peut traiter simultanément. Plus on a de RAM, plus on peut ouvrir de programmes ou de fichiers volumineux en même temps."
        },
        {
          text: "Un SSD est un type de support de stockage. Quelle est sa particularité ?",
          options: ["il est plus lent qu'un disque dur classique", "il n'a pas de pièce mécanique en mouvement, il est plus rapide et silencieux", "il ne peut stocker que des photos", "il remplace le processeur"],
          answer: 1,
          hint: "Solid State Drive = mémoire flash.",
          explication: "Le SSD (Solid State Drive) utilise de la mémoire flash sans pièce mécanique : il est beaucoup plus rapide, silencieux et résistant aux chocs qu'un disque dur mécanique traditionnel (HDD)."
        },
        {
          text: "Qu'est-ce que le BIOS (ou UEFI) d'un ordinateur ?",
          options: ["un système d'exploitation comme Windows", "un programme de base qui s'exécute au démarrage et initialise le matériel", "un logiciel de retouche photo", "un antivirus"],
          answer: 1,
          hint: "Il démarre avant Windows ou macOS.",
          explication: "Le BIOS (Basic Input/Output System) ou UEFI est un micrologiciel stocké dans une puce sur la carte mère. Il s'exécute au démarrage pour initialiser le matériel puis lance le système d'exploitation."
        },
        {
          text: "Qu'est-ce qu'un système d'exploitation (OS) ?",
          options: ["un document texte", "le logiciel de base qui gère les ressources de l'ordinateur et fait fonctionner les autres logiciels", "un navigateur Web", "un jeu vidéo"],
          answer: 1,
          hint: "Windows, macOS et Linux en sont des exemples.",
          explication: "Le système d'exploitation (Windows, macOS, Linux, Android…) gère le matériel, la mémoire, les fichiers et permet aux autres logiciels de fonctionner. C'est le 'chef d'orchestre' de l'ordinateur."
        },
        {
          type: "vrai_faux",
          text: "Un smartphone est un ordinateur de poche avec un processeur, de la RAM et un système d'exploitation.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "iOS et Android sont des systèmes d'exploitation.",
          explication: "VRAI. Un smartphone contient tous les éléments d'un ordinateur : processeur (CPU), RAM, stockage, système d'exploitation (Android ou iOS) et des périphériques (écran, caméra, micro…)."
        },
        {
          text: "Quelle unité mesure la fréquence (vitesse) d'un processeur ?",
          options: ["les octets (o)", "les hertz (Hz), gigahertz (GHz)", "les pixels", "les watts (W)"],
          answer: 1,
          hint: "Un processeur à 3 GHz effectue 3 milliards de cycles par seconde.",
          explication: "La fréquence d'un processeur se mesure en hertz (Hz), généralement en gigahertz (GHz). Un processeur à 3 GHz effectue 3 milliards de cycles d'horloge par seconde."
        }
      ]
    },
    {
      id: "fichiers_dossiers",
      name: "Fichiers, dossiers et arborescence",
      emoji: "📁",
      desc: "Organisation des données sur un ordinateur",
      questions: [
        {
          text: "Qu'est-ce qu'un fichier informatique ?",
          options: ["un programme uniquement", "un ensemble de données enregistrées sous un nom sur un support de stockage", "un dossier vide", "une connexion Internet"],
          answer: 1,
          hint: "Un document, une photo, une chanson sont des fichiers.",
          explication: "Un fichier est un ensemble de données numériques enregistré sur un support de stockage (disque dur, clé USB) sous un nom. Il peut contenir un texte, une image, un programme…"
        },
        {
          text: "À quoi sert l'extension d'un fichier (la partie après le point, ex: .jpg, .mp3) ?",
          options: ["à rien, c'est décoratif", "à indiquer le type de fichier et quel logiciel peut l'ouvrir", "à donner le nom de l'auteur", "à indiquer la taille du fichier"],
          answer: 1,
          hint: ".pdf → PDF reader, .jpg → visionneuse d'images.",
          explication: "L'extension indique le format du fichier : .jpg (image), .mp3 (musique), .pdf (document), .docx (Word)… Le système d'exploitation utilise cette information pour ouvrir le bon logiciel."
        },
        {
          text: "Qu'est-ce qu'un dossier (ou répertoire) ?",
          options: ["un fichier de grande taille", "un conteneur qui peut regrouper des fichiers et d'autres dossiers", "un type de fichier particulier", "un programme d'organisation"],
          answer: 1,
          hint: "Comme une chemise cartonnée dans un classeur.",
          explication: "Un dossier (ou répertoire) est un conteneur permettant d'organiser les fichiers. Il peut contenir des fichiers et d'autres dossiers (sous-dossiers), formant une arborescence."
        },
        {
          text: "Comment appelle-t-on la structure en forme d'arbre formée par les dossiers et sous-dossiers ?",
          options: ["la mémoire vive", "l'arborescence de fichiers", "le système de fichiers en réseau", "le bureau"],
          answer: 1,
          hint: "Racine → branches → feuilles.",
          explication: "L'arborescence est la structure hiérarchique en forme d'arbre qui organise les dossiers et fichiers : à la racine (C:\ ou /), des dossiers, puis des sous-dossiers, puis des fichiers."
        },
        {
          type: "vrai_faux",
          text: "Sur un ordinateur, on peut avoir deux fichiers avec le même nom dans le même dossier.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Deux fichiers identiques ne peuvent pas cohabiter au même endroit.",
          explication: "FAUX. Dans un même dossier, chaque fichier doit avoir un nom unique. Si on essaie d'enregistrer un fichier avec un nom déjà pris, on doit choisir d'écraser l'ancien ou de renommer le nouveau."
        },
        {
          text: "Qu'est-ce qu'un chemin d'accès (path) ?",
          options: ["la connexion Internet", "l'adresse complète d'un fichier dans l'arborescence (ex: C:\\Documents\\Mon fichier.txt)", "le nom du fichier uniquement", "l'icône du fichier"],
          answer: 1,
          hint: "C:\\Utilisateurs\\Elias\\Devoirs\\Maths.docx",
          explication: "Le chemin d'accès indique l'emplacement exact d'un fichier dans l'arborescence, depuis la racine jusqu'au fichier. Ex : C:\\Utilisateurs\\Elias\\Devoirs\\Maths.docx"
        },
        {
          text: "Quelle unité mesure la taille d'un fichier ?",
          options: ["les mètres", "les octets (o), kilooctets (ko), mégaoctets (Mo), gigaoctets (Go)", "les hertz", "les pixels"],
          answer: 1,
          hint: "1 ko = 1 024 octets.",
          explication: "La taille d'un fichier se mesure en octets et ses multiples : kilooctets (ko), mégaoctets (Mo), gigaoctets (Go), téraoctets (To). Un octet contient 8 bits."
        },
        {
          text: "Pourquoi est-il conseillé d'organiser ses fichiers en dossiers thématiques ?",
          options: ["pour que l'ordinateur aille plus vite", "pour retrouver facilement ses fichiers et éviter d'encombrer le bureau", "pour économiser de l'espace disque", "pour partager ses fichiers sur Internet"],
          answer: 1,
          hint: "Comme ranger sa chambre.",
          explication: "Organiser ses fichiers en dossiers thématiques permet de retrouver rapidement un document, d'éviter les doublons et de maintenir un espace de travail numérique lisible."
        },
        {
          type: "vrai_faux",
          text: "Supprimer un fichier en le mettant à la corbeille le supprime définitivement immédiatement.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La corbeille est une étape intermédiaire.",
          explication: "FAUX. Envoyer un fichier à la corbeille ne le supprime pas immédiatement : il reste accessible jusqu'à ce qu'on vide la corbeille. C'est une protection contre les suppressions accidentelles."
        },
        {
          text: "Qu'est-ce qu'une sauvegarde (backup) ?",
          options: ["un raccourci vers un fichier", "une copie de sécurité des données sur un support séparé", "une mise à jour du système", "un type de compression de fichiers"],
          answer: 1,
          hint: "Si le disque dur tombe en panne, les données sont perdues sans sauvegarde.",
          explication: "Une sauvegarde est une copie de sécurité des données, stockée sur un support séparé (disque externe, cloud). Elle permet de récupérer les données en cas de panne, de vol ou de suppression accidentelle."
        }
      ]
    },
    {
      id: "internet_web",
      name: "Internet et le Web",
      emoji: "🌐",
      desc: "Différence Internet / Web, protocoles, adresses",
      questions: [
        {
          text: "Quelle est la différence entre Internet et le Web ?",
          options: ["ils sont identiques", "Internet est le réseau mondial d'infrastructures ; le Web est un service (pages HTML) qui utilise Internet", "le Web est plus ancien qu'Internet", "Internet est un site Web particulier"],
          answer: 1,
          hint: "Le Web est une application parmi d'autres sur Internet.",
          explication: "Internet est l'infrastructure mondiale de réseaux interconnectés. Le Web (World Wide Web) est un service qui fonctionne sur Internet : c'est l'ensemble des pages web accessibles via un navigateur."
        },
        {
          text: "Qui a inventé le World Wide Web ?",
          options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
          answer: 2,
          hint: "Il travaillait au CERN en Suisse.",
          explication: "Tim Berners-Lee a inventé le World Wide Web en 1989 au CERN. Il a développé les protocoles HTTP et HTML, les fondations de l'échange de pages web."
        },
        {
          text: "Que signifie 'HTTP' dans une adresse web ?",
          options: ["HyperText Transfer Protocol — protocole de communication pour les pages web", "High Technology Transfer Program", "Home Text and Transfer Page", "Hyper Terminal Text Protocol"],
          answer: 0,
          hint: "Le 'S' de HTTPS signifie 'Secure'.",
          explication: "HTTP (HyperText Transfer Protocol) est le protocole de communication utilisé pour transférer les pages web entre un serveur et un navigateur. HTTPS est sa version sécurisée (chiffrée)."
        },
        {
          text: "Qu'est-ce qu'une URL ?",
          options: ["un type de virus", "l'adresse d'une page web (ex : https://www.college.fr/accueil)", "un logiciel de navigation", "un réseau social"],
          answer: 1,
          hint: "URL = Uniform Resource Locator.",
          explication: "Une URL (Uniform Resource Locator) est l'adresse unique d'une ressource sur le Web. Ex : https://www.education.gouv.fr. Elle indique le protocole, le nom de domaine et le chemin de la page."
        },
        {
          type: "vrai_faux",
          text: "Le Web et la messagerie électronique (email) utilisent le même protocole.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Chaque service Internet a ses propres protocoles.",
          explication: "FAUX. Le Web utilise le protocole HTTP/HTTPS, tandis que la messagerie utilise SMTP (envoi), IMAP et POP3 (réception). Chaque service d'Internet a ses propres protocoles."
        },
        {
          text: "Qu'est-ce qu'un navigateur web ?",
          options: ["un moteur de recherche", "un logiciel qui permet d'afficher des pages web (Chrome, Firefox, Safari…)", "un fournisseur d'accès à Internet", "un antivirus"],
          answer: 1,
          hint: "Tu l'utilises pour aller sur des sites Web.",
          explication: "Un navigateur web (Chrome, Firefox, Edge, Safari…) est le logiciel qui interprète les pages HTML et les affiche à l'utilisateur. Il ne faut pas le confondre avec un moteur de recherche comme Google."
        },
        {
          text: "Qu'est-ce qu'un moteur de recherche ?",
          options: ["un navigateur web", "un service qui indexe les pages web et permet de les retrouver via des mots-clés", "un fournisseur d'accès à Internet", "un réseau social"],
          answer: 1,
          hint: "Google, Bing, Qwant en sont des exemples.",
          explication: "Un moteur de recherche explore et indexe les pages web, puis permet à l'utilisateur de les retrouver en tapant des mots-clés. Ce n'est pas la même chose qu'un navigateur."
        },
        {
          text: "Qu'est-ce que le DNS (Domain Name System) ?",
          options: ["un antivirus", "un système qui traduit les noms de domaine (www.google.fr) en adresses IP numériques", "un protocole de messagerie", "un système d'exploitation"],
          answer: 1,
          hint: "L'annuaire d'Internet.",
          explication: "Le DNS traduit les noms de domaine humainement lisibles (www.google.fr) en adresses IP numériques (142.250.74.46) que les ordinateurs utilisent pour se connecter. C'est 'l'annuaire d'Internet'."
        },
        {
          type: "vrai_faux",
          text: "Le 'cloud' (nuage informatique) signifie que les données sont stockées sur des serveurs distants accessibles par Internet.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Google Drive, iCloud, OneDrive sont du cloud.",
          explication: "VRAI. Le cloud computing désigne le stockage et le traitement de données sur des serveurs distants accessibles via Internet. Tes photos sur Google Photos, tes documents sur Drive sont dans le cloud."
        },
        {
          text: "Quelle est la différence entre une adresse IP et un nom de domaine ?",
          options: ["ils sont identiques", "l'adresse IP est un numéro (ex : 93.184.216.34) ; le nom de domaine est lisible par l'homme (example.com)", "le nom de domaine est plus sécurisé", "l'adresse IP est réservée aux serveurs"],
          answer: 1,
          hint: "Le DNS fait le lien entre les deux.",
          explication: "Une adresse IP est un identifiant numérique unique de chaque machine sur Internet (ex : 93.184.216.34). Le nom de domaine (example.com) est l'équivalent lisible par les humains."
        }
      ]
    },
    {
      id: "reseau_college",
      name: "Le réseau du collège",
      emoji: "📡",
      desc: "Réseau local, Wi-Fi, serveur, ENT",
      questions: [
        {
          text: "Qu'est-ce qu'un réseau informatique local (LAN) ?",
          options: ["Internet dans son ensemble", "un ensemble d'ordinateurs et d'équipements connectés entre eux dans un espace limité (école, maison)", "uniquement les connexions sans fil", "un serveur unique"],
          answer: 1,
          hint: "LAN = Local Area Network.",
          explication: "Un réseau local (LAN) connecte des ordinateurs et des appareils dans un espace géographique limité (collège, maison, entreprise). Il permet le partage de ressources (imprimante, fichiers)."
        },
        {
          text: "Qu'est-ce qu'un serveur dans un réseau scolaire ?",
          options: ["un élève chargé de distribuer les ordinateurs", "un ordinateur puissant qui fournit des services et des ressources aux autres ordinateurs du réseau", "un câble réseau", "un antivirus centralisé"],
          answer: 1,
          hint: "Il stocke les fichiers des élèves et gère les comptes.",
          explication: "Un serveur est un ordinateur (souvent puissant) qui fournit des services aux autres machines du réseau : stockage de fichiers, gestion des comptes, impression, accès à Internet…"
        },
        {
          text: "Quelle est la différence entre une connexion filaire (Ethernet) et une connexion Wi-Fi ?",
          options: ["il n'y a pas de différence", "Ethernet utilise un câble (plus stable et rapide) ; Wi-Fi est sans fil (plus pratique mais moins stable)", "Wi-Fi est toujours plus rapide", "Ethernet ne permet pas d'accéder à Internet"],
          answer: 1,
          hint: "Le câble RJ45 pour Ethernet, les ondes radio pour le Wi-Fi.",
          explication: "Ethernet (filaire) offre une connexion stable, rapide et sécurisée via un câble. Le Wi-Fi est sans fil et plus pratique mais peut être plus lent et soumis à des interférences."
        },
        {
          text: "Qu'est-ce que l'ENT (Espace Numérique de Travail) du collège ?",
          options: ["un réseau social pour les élèves", "une plateforme numérique permettant aux élèves, parents et professeurs d'accéder aux ressources scolaires", "un système d'exploitation", "une messagerie uniquement"],
          answer: 1,
          hint: "Pronote, Ecole Directe ou Skolengo en sont des exemples.",
          explication: "L'ENT est une plateforme numérique accessible via Internet. Elle donne accès aux notes, cahier de textes, messagerie scolaire, ressources pédagogiques et emploi du temps."
        },
        {
          type: "vrai_faux",
          text: "Le réseau du collège est accessible sans identifiant car il est destiné à tout le monde.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Chaque élève a son propre compte.",
          explication: "FAUX. L'accès au réseau du collège nécessite un identifiant et un mot de passe personnel. Chaque utilisateur a des droits spécifiques (élève, professeur, administrateur)."
        },
        {
          text: "Pourquoi ne doit-on pas partager ses identifiants scolaires avec d'autres élèves ?",
          options: ["c'est juste une règle arbitraire", "parce que chacun est responsable des actions effectuées avec son compte", "parce que cela ralentirait le réseau", "parce que les identifiants changent trop souvent"],
          answer: 1,
          hint: "Ton compte = ta responsabilité.",
          explication: "Partager ses identifiants expose à des risques : quelqu'un d'autre pourrait utiliser ton compte pour des actes illicites dont tu serais tenu responsable. Chaque utilisateur est responsable de l'usage de son compte."
        },
        {
          text: "Qu'est-ce qu'un pare-feu (firewall) dans un réseau ?",
          options: ["un câble ignifugé", "un système de sécurité qui filtre les connexions entrantes et sortantes pour protéger le réseau", "un disque dur externe", "un antivirus classique"],
          answer: 1,
          hint: "Il contrôle ce qui entre et sort du réseau.",
          explication: "Un pare-feu est un système de sécurité (logiciel ou matériel) qui analyse et filtre le trafic réseau selon des règles définies. Il protège le réseau contre les accès non autorisés et les attaques extérieures."
        },
        {
          text: "Pourquoi les établissements scolaires filtrent-ils les sites accessibles sur leur réseau ?",
          options: ["pour ralentir Internet exprès", "pour protéger les élèves des contenus inappropriés et respecter les obligations légales", "pour espionner les élèves", "parce que les serveurs ne sont pas assez puissants"],
          answer: 1,
          hint: "Protection des mineurs.",
          explication: "Les établissements scolaires sont tenus par la loi de protéger les élèves mineurs contre les contenus inappropriés (violents, pornographiques…). Le filtrage est une obligation légale et éducative."
        },
        {
          type: "vrai_faux",
          text: "Quand on utilise le réseau du collège, les responsables informatiques peuvent voir les sites visités.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est pour détecter les usages inappropriés.",
          explication: "VRAI. Sur un réseau géré, les administrateurs peuvent accéder aux journaux de connexion (logs) qui indiquent quels sites ont été consultés. L'usage doit rester conforme à la charte informatique."
        },
        {
          text: "Qu'est-ce qu'une adresse MAC ?",
          options: ["une adresse web qui commence par 'mac'", "un identifiant unique attribué à chaque carte réseau d'un appareil", "le nom d'utilisateur sur un Mac (Apple)", "un protocole de messagerie"],
          answer: 1,
          hint: "MAC = Media Access Control.",
          explication: "L'adresse MAC (Media Access Control) est un identifiant unique gravé dans chaque carte réseau par le fabricant. Elle permet d'identifier un appareil précis sur un réseau local."
        }
      ]
    },
    {
      id: "sources_fiables",
      name: "Rechercher et vérifier une information",
      emoji: "🔍",
      desc: "Moteurs de recherche, sources fiables, fake news",
      questions: [
        {
          text: "Qu'est-ce qu'une source primaire ?",
          options: ["la première source trouvée sur Google", "un document original de première main (texte officiel, témoignage direct, étude scientifique originale)", "un résumé d'une autre source", "n'importe quel site Web"],
          answer: 1,
          hint: "Pas de filtre entre la réalité et le document.",
          explication: "Une source primaire est un document original de première main : article scientifique, texte de loi, témoignage direct, document d'archive. Elle n'a pas été interprétée par un tiers."
        },
        {
          text: "Pourquoi ne peut-on pas toujours faire confiance à Wikipedia ?",
          options: ["parce que Wikipedia est en anglais", "parce que n'importe qui peut modifier les articles et des erreurs peuvent subsister", "parce que Wikipedia n'existe pas en France", "parce que les articles sont trop courts"],
          answer: 1,
          hint: "Encyclopédie collaborative = modifiable par tous.",
          explication: "Wikipédia est une encyclopédie collaborative modifiable par n'importe qui. Bien qu'elle ait des mécanismes de contrôle, des erreurs ou des vandalismes peuvent subsister. Il faut vérifier les sources citées."
        },
        {
          text: "Comment vérifier qu'une information trouvée sur Internet est fiable ?",
          options: ["en regardant si l'article est long", "en recoupant avec plusieurs sources indépendantes et en vérifiant l'auteur et la date", "en regardant uniquement le nombre de partages", "en faisant confiance si c'est sur un beau site"],
          answer: 1,
          hint: "Croiser les sources est la règle d'or.",
          explication: "Pour vérifier une information : identifier l'auteur et sa crédibilité, vérifier la date, recouper avec d'autres sources indépendantes et fiables. Les sites en .gouv.fr ou .edu sont généralement plus fiables."
        },
        {
          text: "Qu'est-ce que le fact-checking ?",
          options: ["vérifier l'orthographe d'un texte", "la vérification des faits et informations par des journalistes ou des organismes spécialisés", "compter les sources citées", "corriger les erreurs de grammaire"],
          answer: 1,
          hint: "Des sites comme AFP Factuel ou Les Décodeurs le pratiquent.",
          explication: "Le fact-checking (vérification des faits) est pratiqué par des journalistes spécialisés qui vérifient l'exactitude des affirmations publiques. Des sites comme AFP Factuel ou Les Décodeurs du Monde en font."
        },
        {
          type: "vrai_faux",
          text: "Un site web avec un beau design et une interface soignée est forcément fiable.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "L'apparence ne garantit pas le contenu.",
          explication: "FAUX. L'aspect visuel d'un site ne dit rien de la fiabilité de son contenu. Des sites de désinformation peuvent être très bien conçus. Il faut toujours vérifier l'auteur, la source et recouper les informations."
        },
        {
          text: "Qu'est-ce qu'une bulle de filtre algorithmique ?",
          options: ["un filtre anti-spam", "le phénomène par lequel les algorithmes ne montrent que des contenus similaires à ce qu'on a déjà vu, enfermant dans une vision partielle du monde", "un filtre de recherche avancée", "un type de pare-feu"],
          answer: 1,
          hint: "YouTube te recommande toujours les mêmes types de vidéos.",
          explication: "La bulle de filtre est créée par les algorithmes de recommandation qui personnalisent les contenus selon les goûts de l'utilisateur. Cela peut l'enfermer dans une vision partielle et biaisée du monde."
        },
        {
          text: "Quelle extension de domaine garantit le plus qu'un site est officiel en France ?",
          options: [".com", ".net", ".gouv.fr", ".fr"],
          answer: 2,
          hint: "Réservé aux organismes gouvernementaux français.",
          explication: "Le domaine .gouv.fr est réservé aux organismes officiels du gouvernement français. Un site en .gouv.fr est donc un site gouvernemental authentique (ex : education.gouv.fr)."
        },
        {
          text: "Que signifie le cadenas vert/gris dans la barre d'adresse d'un navigateur ?",
          options: ["le site est gratuit", "la connexion est chiffrée (HTTPS), les données échangées sont protégées", "le site est populaire", "le site n'a pas de publicité"],
          answer: 1,
          hint: "HTTPS = connexion sécurisée.",
          explication: "Le cadenas indique que la connexion est sécurisée via HTTPS (chiffrement SSL/TLS). Les données échangées (mots de passe, paiements) sont chiffrées. Mais cela ne certifie pas que le site est légitime."
        },
        {
          type: "vrai_faux",
          text: "Un article très partagé sur les réseaux sociaux est forcément vrai.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les fake news se partagent souvent plus vite que la vérité.",
          explication: "FAUX. Les fausses informations (fake news) se partagent souvent plus rapidement que les vraies car elles sont sensationnelles ou choquantes. La popularité d'un contenu ne dit rien de sa véracité."
        },
        {
          text: "Quelle méthode aide à ne pas se laisser piéger par une émotion forte avant de partager une information ?",
          options: ["la méthode ABC", "la méthode STOP (Stop, Think, Observe, Plan) ou le recul émotionnel", "partager immédiatement pour prévenir ses amis", "n'utiliser que les réseaux sociaux officiels"],
          answer: 1,
          hint: "S'arrêter avant de cliquer 'partager'.",
          explication: "Avant de partager une information qui provoque une émotion forte (choc, colère, peur), il faut s'arrêter, prendre du recul et vérifier la source. Les fake news jouent souvent sur les émotions."
        }
      ]
    },
    {
      id: "identite_numerique",
      name: "L'identité numérique et les traces",
      emoji: "👤",
      desc: "Empreinte numérique, données personnelles, vie privée",
      questions: [
        {
          text: "Qu'est-ce que l'identité numérique ?",
          options: ["un document d'identité numérisé", "l'ensemble des informations disponibles sur une personne sur Internet (profils, photos, commentaires…)", "uniquement son adresse email", "son numéro de téléphone"],
          answer: 1,
          hint: "Tout ce qu'on peut trouver sur toi en ligne.",
          explication: "L'identité numérique est l'ensemble des traces qu'une personne laisse sur Internet : profils de réseaux sociaux, commentaires, photos, achats en ligne, historique de navigation…"
        },
        {
          text: "Qu'est-ce que l'empreinte numérique (digital footprint) ?",
          options: ["une empreinte de doigt pour déverrouiller un téléphone", "l'ensemble des données laissées par nos activités en ligne", "le logo d'un site web", "une marque de fabrique"],
          answer: 1,
          hint: "Chaque clic, chaque recherche laisse une trace.",
          explication: "L'empreinte numérique est la totalité des données générées par nos activités en ligne : recherches, visites de sites, posts, achats… Elle peut être utilisée par des entreprises pour cibler des publicités."
        },
        {
          text: "Qu'est-ce qu'une donnée personnelle ?",
          options: ["uniquement les données médicales", "toute information permettant d'identifier directement ou indirectement une personne physique", "les données d'une entreprise", "uniquement le nom et le prénom"],
          answer: 1,
          hint: "Nom, email, téléphone, IP, position GPS…",
          explication: "Une donnée personnelle est toute information permettant d'identifier une personne : nom, prénom, email, numéro de téléphone, adresse IP, localisation GPS, photo…"
        },
        {
          text: "Que garantit le RGPD (Règlement Général sur la Protection des Données) ?",
          options: ["le droit de pirater les données des entreprises", "le droit des personnes sur leurs données personnelles (accès, rectification, suppression…)", "la liberté de collecter toutes les données", "l'obligation d'avoir un compte sur tous les réseaux sociaux"],
          answer: 1,
          hint: "Entré en vigueur en 2018 dans l'Union européenne.",
          explication: "Le RGPD (2018) est le règlement européen de protection des données. Il donne aux citoyens des droits sur leurs données : droit d'accès, de rectification, d'effacement (droit à l'oubli), de portabilité…"
        },
        {
          type: "vrai_faux",
          text: "Supprimer son compte sur un réseau social efface automatiquement toutes ses données de leurs serveurs.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les données peuvent être conservées un certain temps.",
          explication: "FAUX. Supprimer son compte n'efface pas immédiatement toutes les données. Les plateformes peuvent les conserver quelque temps pour des raisons légales. Il faut souvent faire une demande explicite d'effacement via le RGPD."
        },
        {
          text: "À partir de quel âge peut-on s'inscrire seul sur la plupart des réseaux sociaux en Europe (selon le RGPD) ?",
          options: ["10 ans", "13 ans", "15 ans", "18 ans"],
          answer: 2,
          hint: "La France a fixé cette limite.",
          explication: "Le RGPD prévoit une limite entre 13 et 16 ans selon les pays. La France a fixé cette limite à 15 ans : en dessous, le consentement d'un parent est obligatoire pour créer un compte."
        },
        {
          text: "Qu'est-ce qu'un cookie de navigation ?",
          options: ["un biscuit numérique", "un petit fichier déposé par un site web sur ton ordinateur pour mémoriser des informations (préférences, session, publicité)", "un type de virus", "une image de site web"],
          answer: 1,
          hint: "Les sites te demandent de les accepter ou refuser.",
          explication: "Un cookie est un petit fichier texte stocké sur ton ordinateur par un site web. Il mémorise des informations : connexion, préférences, panier d'achat. Certains cookies tracent ton comportement pour la publicité."
        },
        {
          text: "Pourquoi les réseaux sociaux sont-ils gratuits alors qu'ils coûtent des milliards à développer ?",
          options: ["grâce aux dons des utilisateurs", "parce que tes données personnelles sont leur produit, revendues à des publicitaires", "grâce aux subventions gouvernementales", "parce qu'ils ne coûtent rien à faire"],
          answer: 1,
          hint: "Si c'est gratuit, c'est toi le produit.",
          explication: "Les réseaux sociaux gratuits monétisent les données des utilisateurs : ils les analysent pour proposer des publicités ciblées aux annonceurs. Les données personnelles sont au cœur de leur modèle économique."
        },
        {
          type: "vrai_faux",
          text: "Mettre son profil en 'privé' sur un réseau social garantit une confidentialité totale.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les données sont toujours accessibles à la plateforme.",
          explication: "FAUX. Un profil privé empêche les inconnus de voir tes publications, mais la plateforme elle-même a toujours accès à tes données. De plus, tes amis peuvent copier et rediffuser tes contenus."
        },
        {
          text: "Quelle autorité française protège les données personnelles des citoyens ?",
          options: ["le Conseil constitutionnel", "la CNIL (Commission Nationale de l'Informatique et des Libertés)", "le Défenseur des droits", "l'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)"],
          answer: 1,
          hint: "On peut lui signaler des violations de données.",
          explication: "La CNIL est l'autorité administrative indépendante française chargée de protéger les données personnelles. Elle contrôle le respect du RGPD, reçoit les signalements et peut sanctionner les entreprises fautives."
        }
      ]
    },
    {
      id: "securite_numerique",
      name: "Sécurité : mots de passe et hameçonnage",
      emoji: "🔐",
      desc: "Créer des mots de passe forts, reconnaître le phishing",
      questions: [
        {
          text: "Qu'est-ce qu'un mot de passe fort ?",
          options: ["le prénom suivi de la date de naissance", "un mot de passe long (12+ caractères) combinant lettres, chiffres et symboles", "le mot 'password' ou '123456'", "le nom de son animal de compagnie"],
          answer: 1,
          hint: "Plus il est long et varié, plus il est difficile à deviner.",
          explication: "Un mot de passe fort comporte au moins 12 caractères, mélange lettres majuscules et minuscules, chiffres et symboles (!@#…). Il est unique pour chaque compte et ne contient pas d'informations personnelles."
        },
        {
          text: "Pourquoi ne faut-il pas utiliser le même mot de passe pour tous ses comptes ?",
          options: ["pour s'en souvenir plus facilement", "parce que si un compte est piraté, tous les autres seraient compromis", "c'est uniquement une recommandation esthétique", "parce que certains sites refusent les mêmes mots de passe"],
          answer: 1,
          hint: "Un seul piratage = tous tes comptes en danger.",
          explication: "Si tu utilises le même mot de passe partout et qu'un site est piraté, le hacker peut essayer ce mot de passe sur tous tes autres comptes. C'est ce qu'on appelle le 'credential stuffing'."
        },
        {
          text: "Qu'est-ce que le phishing (hameçonnage) ?",
          options: ["une technique de pêche sportive", "une arnaque en ligne consistant à se faire passer pour une entité de confiance pour voler des données", "un type de virus informatique", "une technique de publicité en ligne"],
          answer: 1,
          hint: "Email imitant ta banque pour voler ton mot de passe.",
          explication: "Le phishing (hameçonnage) est une arnaque où des escrocs envoient des messages imitant des entités de confiance (banque, impôts…) pour t'amener à livrer tes données personnelles ou bancaires."
        },
        {
          text: "Comment reconnaître un email de phishing ?",
          options: ["il contient toujours des fautes d'orthographe graves", "il crée une urgence, demande des données sensibles et l'adresse de l'expéditeur est suspecte", "il est toujours en anglais", "il vient toujours de personnes inconnues uniquement"],
          answer: 1,
          hint: "Urgence + demande d'informations = signal d'alerte.",
          explication: "Les signes d'un phishing : ton de l'urgence ('agis maintenant ou ton compte sera bloqué'), demande de mot de passe ou coordonnées bancaires, adresse expéditeur suspecte, lien vers une page qui imite un vrai site."
        },
        {
          type: "vrai_faux",
          text: "La double authentification (2FA) renforce la sécurité d'un compte.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Code envoyé par SMS en plus du mot de passe.",
          explication: "VRAI. La double authentification (2FA) ajoute une couche de sécurité : même si un hacker connaît ton mot de passe, il ne peut pas se connecter sans le second facteur (code SMS, application…)."
        },
        {
          text: "Qu'est-ce qu'un gestionnaire de mots de passe ?",
          options: ["un carnet papier où noter ses mots de passe", "un logiciel qui génère et stocke de façon sécurisée tous tes mots de passe", "un service de récupération de mot de passe oublié", "le navigateur lui-même uniquement"],
          answer: 1,
          hint: "Bitwarden, 1Password, Dashlane en sont des exemples.",
          explication: "Un gestionnaire de mots de passe (Bitwarden, 1Password…) génère des mots de passe forts et uniques, et les stocke de façon chiffrée. On n'a qu'un seul mot de passe maître à retenir."
        },
        {
          text: "Que faire si tu reçois un email de ta 'banque' demandant ton code secret ?",
          options: ["répondre immédiatement avec le code", "appeler ta banque via le numéro officiel pour vérifier et ne jamais cliquer sur le lien de l'email", "ignorer et supprimer sans agir", "transférer l'email à tes amis"],
          answer: 1,
          hint: "Ta banque ne demande jamais ton code par email.",
          explication: "Ta banque ne demande JAMAIS ton code par email. En cas de doute, appelle ta banque via le numéro officiel (sur leur site ou sur ta carte). Ne clique jamais sur un lien d'un email suspect."
        },
        {
          text: "Qu'est-ce qu'un logiciel malveillant (malware) ?",
          options: ["un logiciel de sécurité", "un programme conçu pour endommager, espionner ou prendre le contrôle d'un ordinateur", "un programme trop gourmand en ressources", "un logiciel de jeu vidéo"],
          answer: 1,
          hint: "Virus, cheval de Troie, ransomware en sont des exemples.",
          explication: "Un malware (logiciel malveillant) est un programme conçu pour nuire : virus (se reproduit), cheval de Troie (se cache dans un programme), ransomware (chiffre tes données et demande une rançon)…"
        },
        {
          type: "vrai_faux",
          text: "Télécharger des logiciels depuis des sites non officiels peut exposer à des malwares.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Les sites non officiels peuvent modifier les logiciels.",
          explication: "VRAI. Des sites non officiels peuvent distribuer des versions modifiées de logiciels contenant des malwares. Il est recommandé de toujours télécharger depuis les sites officiels ou des sources vérifiées."
        },
        {
          text: "Pourquoi faut-il mettre à jour régulièrement ses logiciels et son système d'exploitation ?",
          options: ["uniquement pour avoir les nouvelles fonctionnalités", "parce que les mises à jour corrigent des failles de sécurité qui pourraient être exploitées par des hackers", "cela ne sert à rien", "pour ralentir l'ordinateur"],
          answer: 1,
          hint: "Les failles de sécurité sont corrigées dans les mises à jour.",
          explication: "Les mises à jour corrigent des vulnérabilités de sécurité découvertes après la sortie du logiciel. Ne pas mettre à jour laisse des 'portes ouvertes' que les hackers peuvent exploiter."
        }
      ]
    },
    {
      id: "courrier_electronique",
      name: "Le courrier électronique",
      emoji: "📧",
      desc: "Fonctionnement de l'email, bonnes pratiques",
      questions: [
        {
          text: "Que signifie la partie après le @ dans une adresse email (ex : nom@college.fr) ?",
          options: ["le nom de l'utilisateur", "le nom de domaine du serveur de messagerie", "le mot de passe", "le pays d'origine"],
          answer: 1,
          hint: "C'est le 'chez qui' de l'adresse.",
          explication: "Dans une adresse email, la partie après le @ désigne le domaine du serveur de messagerie. 'nom@college.fr' signifie que la boîte est hébergée par le serveur 'college.fr'."
        },
        {
          text: "Quelle est la différence entre 'Répondre' et 'Répondre à tous' dans une messagerie ?",
          options: ["il n'y a pas de différence", "'Répondre' envoie uniquement à l'expéditeur ; 'Répondre à tous' envoie à tous les destinataires du message original", "'Répondre à tous' supprime les destinataires", "'Répondre' envoie à tous"],
          answer: 1,
          hint: "Attention au mauvais bouton !",
          explication: "'Répondre' envoie la réponse uniquement à la personne qui a envoyé l'email. 'Répondre à tous' envoie à toutes les personnes incluses dans l'email original (Cc inclus)."
        },
        {
          text: "Que signifient les champs 'À', 'Cc' et 'Cci' dans un email ?",
          options: ["ils sont identiques", "'À' : destinataire principal ; 'Cc' : copie visible ; 'Cci' : copie cachée (les autres ne voient pas cette personne)", "'Cci' est le destinataire principal", "ils concernent uniquement les pièces jointes"],
          answer: 1,
          hint: "Cc = Carbon copy ; Cci = Copie cachée invisible.",
          explication: "'À' désigne le(s) destinataire(s) principal(aux). 'Cc' (copie) informe des personnes qui voient aussi l'email. 'Cci' (copie cachée) : les autres destinataires ne voient pas que cette personne reçoit le message."
        },
        {
          text: "Qu'est-ce qu'une pièce jointe dans un email ?",
          options: ["un message ajouté à la fin du texte", "un fichier (document, image, vidéo) attaché à l'email et envoyé avec lui", "une signature électronique", "un lien vers un site web"],
          answer: 1,
          hint: "On l'indique avec le symbole 📎.",
          explication: "Une pièce jointe est un fichier (document Word, photo, PDF…) attaché à l'email et transmis avec lui. La taille des pièces jointes est souvent limitée (quelques Mo à quelques dizaines de Mo)."
        },
        {
          type: "vrai_faux",
          text: "Un email une fois envoyé peut être rappelé et supprimé chez le destinataire.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Réfléchis avant d'envoyer.",
          explication: "FAUX. En général, une fois un email envoyé, il ne peut pas être rappelé (certains services offrent une fenêtre de quelques secondes). Le destinataire l'a reçu et peut l'avoir déjà lu ou transféré."
        },
        {
          text: "Comment reconnaître un email de spam ?",
          options: ["il vient d'un contact connu", "il provient d'une adresse inconnue, propose des offres incroyables ou demande des informations personnelles", "il contient une pièce jointe attendue", "il est court et professionnel"],
          answer: 1,
          hint: "Offres trop belles, expéditeur inconnu, liens suspects.",
          explication: "Les spams (courriers indésirables) sont souvent non sollicités, proposent des offres incroyables ('vous avez gagné !'), viennent d'adresses suspectes et contiennent des liens ou pièces jointes potentiellement dangereux."
        },
        {
          text: "Que faut-il vérifier avant d'ouvrir une pièce jointe ?",
          options: ["uniquement son nom", "l'identité de l'expéditeur, l'objet du message et l'extension du fichier (méfiance si .exe)", "uniquement sa taille", "rien, les pièces jointes sont toujours sûres"],
          answer: 1,
          hint: "Un .exe inattendu peut être un virus.",
          explication: "Avant d'ouvrir une pièce jointe : vérifier l'expéditeur (connu ?), l'objet (cohérent ?), l'extension (.exe, .bat, .scr peuvent être des malwares). En cas de doute, ne pas ouvrir et contacter l'expéditeur par un autre moyen."
        },
        {
          text: "Qu'est-ce que la signature électronique dans un email ?",
          options: ["un dessin de sa signature manuscrite", "un bloc de texte automatique à la fin des emails (nom, titre, coordonnées)", "un certificat cryptographique prouvant l'identité", "un emoji de signature"],
          answer: 1,
          hint: "Souvent : Prénom Nom / Titre / Téléphone.",
          explication: "La signature d'email est un bloc de texte automatiquement ajouté à la fin de chaque message envoyé : nom, prénom, titre, contact. Elle aide le destinataire à identifier l'expéditeur et à le contacter."
        },
        {
          type: "vrai_faux",
          text: "L'ENT scolaire fournit généralement une messagerie pour communiquer avec les professeurs.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Une messagerie interne sécurisée.",
          explication: "VRAI. La plupart des ENT (Pronote, Skolengo, Ecole Directe…) intègrent une messagerie interne permettant aux élèves de communiquer avec leurs professeurs et à la direction de façon sécurisée."
        },
        {
          text: "Quelle est la bonne pratique pour rédiger un email à un professeur ?",
          options: ["utiliser des abréviations SMS et des emojis", "rédiger de façon formelle avec une formule de politesse, un objet clair et sa signature", "ne jamais mettre d'objet", "envoyer plusieurs fois si on n'a pas de réponse immédiate"],
          answer: 1,
          hint: "Un email professionnel respecte les codes de politesse.",
          explication: "Un email à un professeur doit être formel : objet clair, formule d'appel ('Madame / Monsieur'), message structuré, formule de clôture polie et signature (prénom, classe). Pas d'abréviations SMS."
        }
      ]
    },
    {
      id: "droit_auteur",
      name: "Droit d'auteur, image et partage",
      emoji: "©️",
      desc: "Propriété intellectuelle, licences, plagiat",
      questions: [
        {
          text: "Qu'est-ce que le droit d'auteur ?",
          options: ["le droit de copier n'importe quelle œuvre", "le droit exclusif qu'un créateur a sur son œuvre (texte, musique, photo, code…)", "le droit de lire des livres en bibliothèque", "uniquement applicable aux livres publiés"],
          answer: 1,
          hint: "L'auteur contrôle l'utilisation de son œuvre.",
          explication: "Le droit d'auteur protège toute œuvre originale (texte, musique, photo, vidéo, logiciel…) dès sa création. L'auteur seul peut décider de son utilisation, reproduction ou diffusion."
        },
        {
          text: "Qu'est-ce que le plagiat ?",
          options: ["traduire un texte dans une autre langue", "copier le travail de quelqu'un d'autre en le présentant comme le sien sans citer la source", "résumer un article", "citer un auteur en indiquant sa source"],
          answer: 1,
          hint: "Voler le travail intellectuel d'un autre.",
          explication: "Le plagiat consiste à s'approprier le travail ou les idées d'un autre sans le citer. C'est une violation du droit d'auteur et une faute grave sanctionnée dans l'éducation comme dans le monde professionnel."
        },
        {
          text: "Le symbole © (copyright) sur une œuvre signifie…",
          options: ["l'œuvre est gratuite", "l'œuvre est protégée par le droit d'auteur", "l'œuvre est en domaine public", "l'œuvre peut être copiée librement"],
          answer: 1,
          hint: "Copyright = droit de copie réservé à l'auteur.",
          explication: "Le symbole © indique que l'œuvre est protégée par le droit d'auteur (copyright). Sa reproduction ou diffusion sans autorisation de l'auteur est illégale."
        },
        {
          text: "Qu'est-ce qu'une licence Creative Commons ?",
          options: ["une licence pour les logiciels uniquement", "une licence qui permet à l'auteur de définir les conditions d'utilisation de son œuvre (partage, modification, usage commercial…)", "une interdiction totale de partage", "une licence payante obligatoire"],
          answer: 1,
          hint: "Certaines permettent le partage gratuit sous conditions.",
          explication: "Une licence Creative Commons permet à l'auteur de partager son œuvre avec des conditions souples. Selon la licence, on peut partager, modifier ou utiliser commercialement l'œuvre, sous certaines conditions."
        },
        {
          type: "vrai_faux",
          text: "Une image trouvée sur Internet peut être utilisée librement dans un exposé scolaire.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Toute image est protégée sauf mention contraire.",
          explication: "FAUX. Une image sur Internet est protégée par le droit d'auteur sauf si elle est explicitement en licence libre (Creative Commons, domaine public). Pour un usage scolaire, il faut citer la source et vérifier la licence."
        },
        {
          text: "Qu'est-ce que le domaine public ?",
          options: ["Internet dans son ensemble", "l'ensemble des œuvres dont la protection a expiré et qui peuvent être utilisées librement", "les œuvres de l'État uniquement", "les œuvres vendues en supermarché"],
          answer: 1,
          hint: "En France, les droits patrimoniaux expirent 70 ans après la mort de l'auteur.",
          explication: "Une œuvre tombe dans le domaine public 70 ans après la mort de son auteur en France/Europe. Elle peut alors être copiée, diffusée et modifiée librement. Les œuvres de Mozart ou de Victor Hugo sont dans le domaine public."
        },
        {
          text: "Comment citer correctement l'image d'un autre dans un exposé ?",
          options: ["ne pas citer, personne ne le verra", "indiquer l'auteur, la source et la licence utilisée", "uniquement mettre une étoile à côté", "cela n'est pas nécessaire pour les images"],
          answer: 1,
          hint: "Source et auteur = respect du droit d'auteur.",
          explication: "Pour citer correctement une image : mentionner le nom de l'auteur/photographe, le titre de l'œuvre, la source (URL ou nom du site) et la licence. Cela respecte le droit d'auteur et les pratiques académiques."
        },
        {
          text: "Qu'est-ce qu'un logiciel libre (open source) ?",
          options: ["un logiciel gratuit uniquement", "un logiciel dont le code source est disponible et peut être étudié, modifié et redistribué", "un logiciel sans bug", "un logiciel réservé aux professionnels"],
          answer: 1,
          hint: "Linux, Firefox, LibreOffice sont open source.",
          explication: "Un logiciel libre (open source) met son code source à disposition : n'importe qui peut l'étudier, le modifier et le redistribuer. Cela favorise la collaboration et la transparence, mais il peut aussi être payant."
        },
        {
          type: "vrai_faux",
          text: "Le droit à l'image s'applique aussi aux photos prises dans des lieux publics.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Même en public, l'image d'une personne identifiable lui appartient.",
          explication: "VRAI. Même dans un lieu public, photographier et diffuser l'image d'une personne identifiable sans son consentement est illégal. Seules les photos de foules anonymes ou de manifestations publiques ont des règles plus souples."
        },
        {
          text: "Qu'est-ce que le piratage de logiciels (warez) ?",
          options: ["acheter un logiciel moins cher", "utiliser ou distribuer un logiciel sans acheter la licence nécessaire", "créer un logiciel concurrent", "utiliser un logiciel gratuit"],
          answer: 1,
          hint: "Télécharger un logiciel payant sans payer sa licence.",
          explication: "Le piratage de logiciels consiste à utiliser, copier ou distribuer un logiciel sans avoir acquis la licence d'utilisation. C'est illégal et passible de sanctions pénales en France."
        }
      ]
    },
    {
      id: "reseaux_sociaux",
      name: "Réseaux sociaux : règles et bon usage",
      emoji: "📱",
      desc: "Fonctionnement, risques, usage responsable",
      questions: [
        {
          text: "Quel est le modèle économique principal des réseaux sociaux gratuits ?",
          options: ["les dons des utilisateurs", "la publicité ciblée grâce aux données des utilisateurs", "les abonnements payants uniquement", "les subventions gouvernementales"],
          answer: 1,
          hint: "Tes données = leurs revenus.",
          explication: "La plupart des réseaux sociaux gratuits gagnent de l'argent grâce à la publicité ciblée : ils collectent et analysent tes données pour proposer aux annonceurs des publicités très précises selon ton profil."
        },
        {
          text: "Qu'est-ce qu'un algorithme de recommandation sur un réseau social ?",
          options: ["un mode de tri alphabétique", "un système automatique qui sélectionne et affiche les contenus selon les habitudes de l'utilisateur", "un filtre anti-spam", "un système de vote des utilisateurs"],
          answer: 1,
          hint: "Il décide ce que tu vois dans ton fil d'actualité.",
          explication: "L'algorithme de recommandation analyse tes interactions (likes, temps de visionnage, clics) pour sélectionner les contenus qui te garderont le plus longtemps sur la plateforme. Il crée la 'bulle de filtre'."
        },
        {
          text: "Que risque-t-on à accepter des demandes d'inconnus sur les réseaux sociaux ?",
          options: ["rien, les réseaux sont sécurisés", "partager ses informations personnelles avec des personnes malveillantes (grooming, arnaques)", "uniquement de recevoir trop de messages", "de voir son compte bloqué"],
          answer: 1,
          hint: "On ne sait pas qui est réellement derrière un profil.",
          explication: "Accepter des inconnus expose au risque de partager des informations personnelles avec des personnes malintentionnées. Certains utilisent de faux profils pour manipuler des mineurs (grooming) ou arnaquer."
        },
        {
          text: "Que signifie 'FOMO' dans le contexte des réseaux sociaux ?",
          options: ["un type de format de fichier", "Fear Of Missing Out — l'anxiété de rater quelque chose en ne vérifiant pas constamment ses réseaux", "un réseau social pour enfants", "un filtre photo"],
          answer: 1,
          hint: "La peur de rater ce qui se passe en ligne.",
          explication: "Le FOMO (Fear Of Missing Out) est l'anxiété ressentie quand on craint de rater des événements ou des nouvelles en restant hors ligne. Les réseaux sociaux sont conçus pour amplifier ce sentiment."
        },
        {
          type: "vrai_faux",
          text: "Il est possible de se créer une fausse identité sur les réseaux sociaux sans risque légal.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Usurper l'identité de quelqu'un est un délit.",
          explication: "FAUX. Usurper l'identité d'une autre personne en ligne est un délit pénal en France (article 226-4-1 du Code pénal). Même une fausse identité peut être utilisée à des fins frauduleuses sanctionnées."
        },
        {
          text: "Pourquoi les 'défis' (challenges) viraux sur les réseaux sociaux peuvent-ils être dangereux ?",
          options: ["ils sont toujours inoffensifs", "certains encouragent des comportements risqués ou dangereux pour obtenir des vues et des likes", "ils ne touchent pas les mineurs", "ils sont contrôlés par les plateformes avant diffusion"],
          answer: 1,
          hint: "La pression du groupe peut pousser à prendre des risques.",
          explication: "Certains challenges viraux encouragent des comportements dangereux (automutilation, consommation de produits toxiques…) en profitant de la pression sociale et du désir de reconnaissance sur les réseaux."
        },
        {
          text: "Que faire si on voit un contenu choquant ou illégal sur un réseau social ?",
          options: ["le partager pour alerter ses amis", "le signaler à la plateforme et, si c'est très grave, à des autorités (police, PHAROS)", "l'ignorer complètement", "en reparler uniquement en classe"],
          answer: 1,
          hint: "Les plateformes ont des outils de signalement.",
          explication: "Face à un contenu choquant ou illégal : signaler à la plateforme via le bouton de signalement et, pour les contenus graves (pédopornographie, incitation à la violence…), signaler à PHAROS (plateforme officielle en France)."
        },
        {
          text: "Qu'est-ce que la 'déconnexion numérique' (digital detox) ?",
          options: ["réparer son ordinateur", "prendre volontairement du recul par rapport aux écrans et aux réseaux sociaux", "supprimer définitivement ses comptes", "changer de réseau social"],
          answer: 1,
          hint: "Passer du temps sans écran.",
          explication: "La déconnexion numérique (digital detox) consiste à réduire volontairement son utilisation des écrans et des réseaux sociaux pour retrouver un équilibre de vie, du temps en plein air et des interactions en face à face."
        },
        {
          type: "vrai_faux",
          text: "Un 'like' (j'aime) sur les réseaux sociaux n'a aucun effet sur la santé mentale.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les dopamines sont libérées à chaque like reçu.",
          explication: "FAUX. Recevoir des likes déclenche une libération de dopamine (hormone du plaisir). Les plateformes ont conçu ce mécanisme pour créer une dépendance. Manquer de likes peut générer de l'anxiété chez les jeunes."
        },
        {
          text: "Pourquoi est-il conseillé de ne pas utiliser les réseaux sociaux avant 13 ans (voire 15 ans en France) ?",
          options: ["parce que les enfants ne savent pas lire", "pour protéger les mineurs de contenus inappropriés, de la manipulation et des risques liés à l'exposition des données", "parce qu'Internet est trop lent pour les enfants", "parce qu'ils sont trop chers"],
          answer: 1,
          hint: "Le cerveau des enfants est plus vulnérable.",
          explication: "Les réseaux sociaux sont déconseillés aux jeunes enfants car ils peuvent les exposer à des contenus inappropriés, au cyberharcèlement et à des mécanismes d'addiction. Le cerveau des mineurs est plus vulnérable à ces influences."
        }
      ]
    }
  ]
};
