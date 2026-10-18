/* Matière : Technologie ⚙️
   5 thèmes × 10 questions = 50 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["cm2"] = window.CURRICULUM_PARTS["cm2"] || {};
window.CURRICULUM_PARTS["cm2"]["techno"] = {
  id: "techno",
  name: "Technologie",
  emoji: "⚙️",
  desc: "Objets, matériaux, énergies, programmation",
  topics: [
    {
      id: "objet_tech",
      name: "L'objet technique",
      emoji: "🔧",
      desc: "Besoin, fonctions, contraintes",
      questions: [
        {
          text: "Qu'est-ce qu'un objet technique ?",
          options: ["Un objet fabriqué par l'être humain pour répondre à un besoin","Un objet naturel (caillou, fleur)","Un animal","Un nuage"],
          answer: 0,
          explication: "Un objet technique est conçu et fabriqué par l'être humain pour répondre à un besoin précis : se déplacer, communiquer, manger, etc."
        },
        {
          text: "À quel besoin répond un vélo ?",
          options: ["Manger","Se déplacer","Dormir","Voir dans le noir"],
          answer: 1,
          explication: "Le vélo répond au besoin de se déplacer rapidement, à effort modéré et sans polluer."
        },
        {
          text: "Comment appelle-t-on la « mission » principale qu'un objet technique doit accomplir ?",
          hint: "On parle de fonction d'____.",
          options: ["Une fonction d'usage","Une décoration","Une couleur","Un prix"],
          answer: 0,
          explication: "La fonction d'usage décrit ce que fait l'objet (à quoi il sert). Ex : la fonction d'usage d'un parapluie est de protéger de la pluie."
        },
        {
          text: "Qu'est-ce qu'une contrainte dans la fabrication d'un objet ?",
          options: ["Une exigence à respecter (coût, taille, sécurité, environnement…)","Une décoration","Une publicité","Un cadeau"],
          answer: 0,
          explication: "Les contraintes sont les exigences à respecter : prix maximal, dimensions, sécurité des utilisateurs, respect de l'environnement, normes…"
        },
        {
          text: "Avant de fabriquer un objet, à quoi sert le dessin ou le schéma technique ?",
          options: ["À montrer comment sera l'objet et comment il sera fabriqué","À jouer","À faire joli sans utilité","À cacher des informations"],
          answer: 0,
          explication: "Le schéma technique précise la forme, les dimensions, les pièces et l'assemblage de l'objet : il guide la fabrication."
        },
        {
          text: "Qu'est-ce qu'un prototype ?",
          hint: "C'est ce qu'on fabrique d'abord, avant la production en grand nombre.",
          options: ["Un premier modèle qui sert à tester et améliorer un objet","Le produit final vendu en magasin","Une publicité","Un emballage"],
          answer: 0,
          explication: "Le prototype est le premier exemplaire d'un objet, fabriqué pour tester son fonctionnement et corriger les défauts avant la production en série."
        },
        {
          text: "Comment appelle-t-on le mode d'emploi qui explique comment utiliser un objet en sécurité ?",
          options: ["La notice d'utilisation","Le cahier de vacances","L'emballage","La pub"],
          answer: 0,
          explication: "La notice d'utilisation explique le fonctionnement et les précautions de sécurité d'un objet technique. Elle est obligatoire pour beaucoup de produits."
        },
        {
          type: "qcm",
          text: "Parmi ces objets, lesquels sont des objets techniques ?",
          options: ["un crayon","un caillou trouvé dans la rue","un téléphone portable","une fleur sauvage"],
          answer: [0,2],
          explication: "Le crayon et le téléphone sont conçus et fabriqués par l'humain pour un besoin : ce sont des objets techniques. Le caillou et la fleur sont des éléments naturels."
        },
        {
          text: "Pourquoi l'évolution des objets techniques permet-elle des appareils de plus en plus performants ?",
          options: ["Grâce aux progrès des matériaux, des techniques et des connaissances","Parce que les gens vieillissent","Par hasard","À cause de la météo"],
          answer: 0,
          explication: "Au fil du temps, les ingénieurs utilisent de nouveaux matériaux, de nouvelles techniques et de nouvelles découvertes scientifiques pour améliorer les objets."
        },
        {
          type: "vrai_faux",
          text: "Un même besoin peut être satisfait par plusieurs objets techniques différents.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Pour le besoin « se déplacer », on a inventé le vélo, la voiture, le train, le bus, l'avion… autant de solutions techniques différentes."
        }
      ]
    },
    {
      id: "materiaux",
      name: "Matériaux",
      emoji: "🧱",
      desc: "Familles, propriétés, recyclage",
      questions: [
        {
          text: "Quel matériau provient d'un arbre ?",
          options: ["Le bois","Le verre","Le plastique","Le métal"],
          answer: 0,
          explication: "Le bois est issu des arbres. C'est un matériau naturel, renouvelable s'il est issu de forêts gérées durablement."
        },
        {
          text: "À partir de quoi le plastique est-il principalement fabriqué ?",
          options: ["Du pétrole","Du bois","Du sable","De la laine"],
          answer: 0,
          explication: "Le plastique est principalement issu du pétrole (matière fossile). Son recyclage est important car le pétrole n'est pas renouvelable et il pollue."
        },
        {
          text: "Quel matériau est obtenu à partir du sable que l'on fait fondre à très haute température ?",
          options: ["Le bois","Le verre","Le coton","Le caoutchouc"],
          answer: 1,
          explication: "Le verre est fabriqué en faisant fondre du sable (silice) à très haute température (environ 1500 °C). Il est transparent et recyclable presque à l'infini."
        },
        {
          text: "Quelle propriété recherche-t-on pour le pneu d'un vélo ?",
          hint: "Il doit pouvoir rebondir et s'adapter au sol.",
          options: ["Rigide et cassant","Souple et élastique","Lourd et froid","Transparent"],
          answer: 1,
          explication: "Un pneu doit être souple et élastique pour épouser le sol, absorber les chocs et offrir une bonne adhérence. Le caoutchouc convient parfaitement."
        },
        {
          text: "Quel matériau est un EXCELLENT conducteur d'électricité ?",
          options: ["Le bois","Le plastique","Le cuivre","Le verre"],
          answer: 2,
          explication: "Le cuivre conduit très bien l'électricité : c'est pourquoi les fils électriques ont un cœur en cuivre, gainé d'un isolant en plastique."
        },
        {
          text: "Qu'est-ce qu'un matériau biodégradable ?",
          options: ["Un matériau qui se décompose naturellement dans l'environnement","Un matériau qui rouille toujours","Un matériau métallique uniquement","Un matériau impossible à recycler"],
          answer: 0,
          explication: "Un matériau biodégradable se décompose naturellement par l'action des micro-organismes (comme le carton, certains bioplastiques). C'est mieux pour l'environnement."
        },
        {
          text: "Pourquoi recycler le verre, le métal et le papier ?",
          options: ["Pour économiser les ressources naturelles et l'énergie","Pour augmenter la pollution","Pour faire travailler les déchets","Cela n'a aucun intérêt"],
          answer: 0,
          explication: "Recycler permet d'économiser matières premières (sable, minerais, bois) et énergie : refondre du verre demande bien moins d'énergie que d'en fabriquer du neuf."
        },
        {
          type: "qcm",
          text: "Parmi ces matériaux, lesquels sont d'origine naturelle (non transformés chimiquement) ?",
          options: ["le bois","le coton","le plastique","le polyester"],
          answer: [0,1],
          explication: "Le bois (arbre) et le coton (plante) sont d'origine naturelle. Le plastique et le polyester sont synthétiques (issus de la chimie du pétrole)."
        },
        {
          text: "Pourquoi utilise-t-on l'aluminium pour fabriquer les avions ?",
          hint: "Il est léger ET résistant.",
          options: ["Parce qu'il est léger mais résistant","Parce qu'il est très lourd","Parce qu'il est mou","Parce qu'il est transparent"],
          answer: 0,
          explication: "L'aluminium combine légèreté et résistance : idéal pour l'aéronautique où chaque gramme compte pour économiser le carburant."
        },
        {
          text: "Qu'est-ce qu'un isolant thermique ?",
          options: ["Un matériau qui ralentit le passage de la chaleur","Un matériau qui produit de la chaleur","Un matériau qui conduit l'électricité","Un métal très chaud"],
          answer: 0,
          explication: "Un isolant thermique (laine de verre, polystyrène, liège) empêche la chaleur de passer : il sert à isoler les maisons pour économiser l'énergie."
        }
      ]
    },
    {
      id: "energies",
      name: "Énergies & systèmes",
      emoji: "⚡",
      desc: "Sources, conversions, énergies renouvelables",
      questions: [
        {
          text: "Qu'est-ce qu'une source d'énergie renouvelable ?",
          options: ["Une énergie qui se reconstitue rapidement à l'échelle humaine","Une énergie qui s'épuise en quelques années","Une énergie qui n'existe pas","Une énergie réservée aux machines anciennes"],
          answer: 0,
          explication: "Une énergie renouvelable se reconstitue naturellement à notre échelle : soleil, vent, eau, biomasse, géothermie. Le pétrole et le charbon, eux, ne sont pas renouvelables."
        },
        {
          text: "Comment fonctionne une éolienne ?",
          options: ["Le vent fait tourner ses pales, ce qui produit de l'électricité","Elle brûle du charbon","Elle absorbe la lumière du soleil","Elle utilise le mouvement des vagues"],
          answer: 0,
          explication: "Les pales d'une éolienne tournent grâce au vent. Elles entraînent un générateur électrique qui produit de l'électricité."
        },
        {
          text: "À quoi servent les panneaux solaires photovoltaïques ?",
          options: ["Transformer la lumière du soleil en électricité","Chauffer le four","Faire de l'ombre uniquement","Produire du pétrole"],
          answer: 0,
          explication: "Les panneaux photovoltaïques convertissent directement la lumière solaire en électricité grâce à des cellules en silicium."
        },
        {
          text: "Comment appelle-t-on la transformation d'une énergie en une autre ?",
          hint: "Ex : pile (chimique) → moteur (mouvement).",
          options: ["Une conversion d'énergie","Une consommation","Une explosion","Une combustion uniquement"],
          answer: 0,
          explication: "La conversion d'énergie est le passage d'une forme à une autre : chimique → électrique (pile), électrique → lumineuse (ampoule), mécanique → électrique (dynamo)."
        },
        {
          text: "Quelle énergie est NON renouvelable ?",
          options: ["Le solaire","L'éolien","Le pétrole","L'hydraulique"],
          answer: 2,
          explication: "Le pétrole est une énergie fossile : il met des millions d'années à se former. Les autres (soleil, vent, eau) sont renouvelables."
        },
        {
          text: "Pourquoi est-il important de faire des économies d'énergie ?",
          options: ["Pour préserver les ressources et réduire la pollution","Pour rester dans le noir","Pour casser les appareils","Cela n'a aucun intérêt"],
          answer: 0,
          explication: "Économiser l'énergie réduit la consommation de ressources, limite la pollution (CO₂) et diminue la facture d'électricité."
        },
        {
          text: "Qu'est-ce qu'une chaîne d'énergie dans un objet technique ?",
          options: ["Source → Transformation → Utilisation","Une boucle musicale","Le câble d'une lampe","La clé de la maison"],
          answer: 0,
          explication: "Une chaîne d'énergie décrit le parcours de l'énergie dans un objet : la source (pile, secteur), sa transformation (moteur, ampoule), et son utilisation finale."
        },
        {
          type: "qcm",
          text: "Parmi ces sources, lesquelles sont RENOUVELABLES ?",
          options: ["le vent","le gaz naturel","l'eau (barrage)","le charbon"],
          answer: [0,2],
          explication: "Le vent et l'eau (hydraulique) sont renouvelables. Le gaz naturel et le charbon sont des énergies fossiles non renouvelables."
        },
        {
          text: "Que produit principalement un barrage hydroélectrique ?",
          options: ["De l'électricité grâce à la force de l'eau","Du pétrole","De la nourriture","Du sable"],
          answer: 0,
          explication: "L'eau retenue par le barrage tombe et fait tourner des turbines, lesquelles entraînent un générateur d'électricité."
        },
        {
          type: "vrai_faux",
          text: "Éteindre les appareils en veille permet d'économiser de l'énergie.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Les appareils en veille consomment de l'électricité en continu. Les éteindre complètement (ou utiliser une multiprise à interrupteur) fait des économies."
        }
      ]
    },
    {
      id: "algo",
      name: "Algorithmique & programmation",
      emoji: "🤖",
      desc: "Instructions, boucles, conditions",
      questions: [
        {
          text: "Qu'est-ce qu'un algorithme ?",
          options: ["Une suite d'instructions précises pour résoudre un problème","Un type d'ordinateur","Un câble électrique","Un nom de jeu vidéo"],
          answer: 0,
          explication: "Un algorithme est une suite d'instructions ordonnées et précises permettant de résoudre un problème ou d'accomplir une tâche (comme une recette de cuisine)."
        },
        {
          text: "Dans un programme Scratch, à quoi sert le bloc « si … alors … » ?",
          options: ["À exécuter des instructions seulement quand une condition est vraie","À répéter sans fin","À effacer le programme","À éteindre l'ordinateur"],
          answer: 0,
          explication: "Le bloc « si … alors … » est une instruction conditionnelle : les actions à l'intérieur ne s'exécutent que si la condition est vraie."
        },
        {
          text: "À quoi sert une boucle dans un programme ?",
          options: ["À répéter une ou plusieurs instructions plusieurs fois","À effacer le programme","À allumer une lampe","À enregistrer une vidéo"],
          answer: 0,
          explication: "Une boucle (répéter N fois, répéter jusqu'à…) évite de réécrire plusieurs fois les mêmes instructions et structure le programme."
        },
        {
          text: "En Scratch, pour faire tracer un carré au lutin, quelle boucle est la plus efficace ?",
          hint: "Un carré a 4 côtés identiques.",
          options: ["Répéter 4 fois : avancer puis tourner de 90°","Avancer une seule fois","Tourner 100 fois sans avancer","Effacer l'écran"],
          answer: 0,
          explication: "Un carré = 4 côtés égaux avec angle droit. La boucle « répéter 4 fois (avancer puis tourner de 90°) » trace exactement un carré."
        },
        {
          text: "Que veut dire « déboguer » un programme ?",
          options: ["Trouver et corriger les erreurs (bugs) du programme","Effacer le programme","L'imprimer sur papier","Le rendre plus joli"],
          answer: 0,
          explication: "Déboguer (du mot anglais « debug ») signifie repérer et corriger les erreurs (les « bugs ») qui empêchent un programme de fonctionner correctement."
        },
        {
          text: "Comment appelle-t-on une instruction qui demande de répéter quelque chose tant qu'une condition est vraie ?",
          options: ["Une boucle conditionnelle (tant que…)","Une variable","Une fonction","Un commentaire"],
          answer: 0,
          explication: "« Tant que … » est une boucle conditionnelle : elle répète des instructions tant qu'une condition reste vraie (ex : tant que la souris ne touche pas le bord)."
        },
        {
          text: "Dans un programme, qu'est-ce qu'une variable ?",
          hint: "C'est comme une boîte qui contient une valeur que l'on peut modifier.",
          options: ["Un emplacement nommé qui stocke une valeur modifiable (score, position…)","Une couleur fixe","Une touche du clavier","Un commentaire"],
          answer: 0,
          explication: "Une variable est une « boîte » dans laquelle on stocke une valeur (un nombre, un texte) que le programme peut lire et modifier. Ex : la variable « score »."
        },
        {
          type: "qcm",
          text: "Parmi ces langages, lesquels permettent de programmer ?",
          options: ["Scratch","Python","le français","JavaScript"],
          answer: [0,1,3],
          explication: "Scratch, Python et JavaScript sont des langages de programmation. Le français est une langue naturelle, pas un langage informatique."
        },
        {
          text: "Dans Scratch, que se passe-t-il quand on clique sur le drapeau vert ?",
          options: ["Le programme démarre (exécution)","L'ordinateur s'éteint","Tous les sprites disparaissent","Rien du tout"],
          answer: 0,
          explication: "Le drapeau vert sert à lancer l'exécution du programme. Le bouton rouge (octogone) sert à l'arrêter."
        },
        {
          type: "vrai_faux",
          text: "Un programme informatique peut donner un résultat différent selon les actions de l'utilisateur.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Grâce aux conditions et aux entrées (clics, touches du clavier), un programme peut réagir différemment selon ce que fait l'utilisateur (jeux, applications interactives)."
        }
      ]
    },
    {
      id: "numerique",
      name: "Le numérique",
      emoji: "💻",
      desc: "Ordinateur, réseau, Internet",
      questions: [
        {
          text: "Quel composant est le « cerveau » de l'ordinateur ?",
          hint: "Souvent abrégé en anglais CPU.",
          options: ["Le processeur (CPU)","L'écran","Le clavier","Le câble d'alimentation"],
          answer: 0,
          explication: "Le processeur (CPU) exécute les instructions des programmes : c'est lui qui calcule, traite et coordonne l'ensemble. C'est le « cerveau » de l'ordinateur."
        },
        {
          text: "Quelle mémoire conserve les données même quand l'ordinateur est éteint ?",
          options: ["La RAM (mémoire vive)","Le disque dur (ou SSD)","L'écran","L'imprimante"],
          answer: 1,
          explication: "Le disque dur ou SSD est la mémoire de stockage : il conserve les données (photos, documents) même éteint. La RAM est volatile : tout s'efface à l'arrêt."
        },
        {
          text: "Qu'est-ce qu'Internet ?",
          options: ["Un immense réseau mondial qui relie des millions d'ordinateurs entre eux","Un seul ordinateur géant","Une marque d'ordinateur","Un programme unique"],
          answer: 0,
          explication: "Internet est un réseau planétaire interconnectant des millions d'ordinateurs, de serveurs et d'appareils. Le Web (sites) en est un des services."
        },
        {
          text: "Quel appareil permet plusieurs ordinateurs et téléphones d'accéder à Internet sans fil à la maison ?",
          options: ["Une box / un routeur Wi-Fi","Un grille-pain","Un téléphone fixe","Une lampe"],
          answer: 0,
          explication: "La box (routeur Wi-Fi) crée un réseau sans fil qui relie tous les appareils de la maison à Internet via le câble du fournisseur."
        },
        {
          text: "Qu'est-ce qu'un « fichier » sur un ordinateur ?",
          options: ["Un ensemble de données enregistrées sous un nom (texte, image, musique…)","Un objet en papier","Un câble","Une marque d'ordinateur"],
          answer: 0,
          explication: "Un fichier est un ensemble d'informations enregistrées sous un nom unique : photo.jpg, devoir.docx, musique.mp3. L'extension indique souvent son type."
        },
        {
          text: "Que signifie URL (l'adresse d'un site web) ?",
          options: ["L'adresse unique qui permet d'accéder à une page web","Un type de virus","Un nom d'ordinateur","Le nom d'un câble"],
          answer: 0,
          explication: "L'URL (Uniform Resource Locator) est l'adresse unique d'une ressource sur le web, par exemple https://www.exemple.fr."
        },
        {
          text: "Pourquoi est-il important de faire des sauvegardes de ses fichiers importants ?",
          options: ["Pour les protéger en cas de panne, vol ou virus","Pour les rendre invisibles","Pour les vendre","Pour les détruire"],
          answer: 0,
          explication: "Une sauvegarde (sur disque externe ou cloud) protège les données : en cas de panne, virus, perte ou vol, on peut les récupérer."
        },
        {
          text: "Que sont les pixels ?",
          options: ["Les minuscules points lumineux qui composent une image numérique","Des virus informatiques","Des câbles électriques","Des touches de clavier"],
          answer: 0,
          explication: "Les pixels sont les petits points colorés qui composent une image numérique. Plus il y en a, plus l'image est précise (haute définition)."
        },
        {
          type: "qcm",
          text: "Parmi ces éléments, lesquels sont des PÉRIPHÉRIQUES d'un ordinateur ?",
          options: ["la souris","le clavier","le processeur","l'imprimante"],
          answer: [0,1,3],
          explication: "Souris, clavier et imprimante sont des périphériques (extérieurs à l'unité centrale). Le processeur est un composant interne."
        },
        {
          type: "vrai_faux",
          text: "Toutes les informations trouvées sur Internet sont vraies.",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Internet contient à la fois des informations fiables et de nombreuses fausses informations. Il faut toujours vérifier la source."
        }
      ]
    }
  ]
};
