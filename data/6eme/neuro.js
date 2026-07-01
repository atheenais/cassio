/* Matière : Neurosciences 🧠 (6ème)
   10 thèmes × 10 questions = 100 questions
   Objectif : aider l'enfant à comprendre son cerveau pour mieux apprendre,
   se concentrer, gérer ses émotions et prendre soin de lui.
   Explications volontairement imagées et adaptées à 11-12 ans. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["neuro"] = {
  id: "neuro",
  name: "Neurosciences",
  emoji: "🧠",
  desc: "Comprendre ton cerveau pour mieux apprendre",
  topics: [
    {
      id: "besoins_cerveau",
      name: "Les besoins du cerveau",
      emoji: "🔋",
      desc: "Énergie, eau, oxygène, sommeil, mouvement",
      questions: [
        {
          text: "Le cerveau ne pèse qu'environ 2 % du poids du corps. Quelle part de l'énergie du corps consomme-t-il ?",
          options: ["2 %", "environ 20 %", "environ 50 %", "presque 0 %"],
          answer: 1,
          hint: "C'est un très gros consommateur pour sa petite taille.",
          explication: "Le cerveau consomme environ 20 % de l'énergie du corps, alors qu'il ne pèse que 2 %. C'est l'organe le plus gourmand en énergie : penser, ça consomme beaucoup !"
        },
        {
          text: "Quel est le principal carburant du cerveau ?",
          options: ["le sel", "le sucre (glucose) apporté par les aliments", "l'eau seule", "les vitamines seules"],
          answer: 1,
          hint: "On le trouve surtout dans le pain, les féculents, les fruits…",
          explication: "Le cerveau fonctionne surtout grâce au glucose, un sucre fourni par les aliments (pain, pâtes, riz, fruits…). C'est comme l'essence de la voiture : sans carburant, le moteur cale."
        },
        {
          text: "Pourquoi le cerveau a-t-il besoin d'oxygène en permanence ?",
          options: ["pour se refroidir", "parce que ses cellules (neurones) en ont besoin pour fonctionner", "pour grossir", "il n'en a pas besoin"],
          answer: 1,
          hint: "L'oxygène est apporté par le sang.",
          explication: "Les neurones ont besoin d'oxygène en continu pour transformer le glucose en énergie. Le sang leur en apporte sans arrêt : c'est pour ça que le cœur bat jour et nuit."
        },
        {
          text: "Environ combien de temps le cerveau peut-il rester sans oxygène avant d'être en danger ?",
          options: ["plusieurs heures", "quelques minutes seulement", "une journée entière", "il n'en a jamais besoin"],
          answer: 1,
          hint: "C'est très court, d'où l'importance de la respiration.",
          explication: "Après seulement quelques minutes sans oxygène, les neurones commencent à être en danger. C'est pourquoi respirer et avoir une bonne circulation du sang sont vitaux pour le cerveau."
        },
        {
          type: "vrai_faux",
          text: "Boire suffisamment d'eau aide le cerveau à bien fonctionner.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le cerveau est composé en grande partie d'eau.",
          explication: "VRAI. Le cerveau contient beaucoup d'eau. Être déshydraté (manquer d'eau) fatigue le cerveau : on se concentre moins bien et on peut avoir mal à la tête. Boire régulièrement l'aide à rester performant."
        },
        {
          text: "Quel comportement aide le cerveau à mieux apprendre et se concentrer ?",
          options: ["rester assis sans bouger toute la journée", "faire de l'activité physique régulièrement", "sauter le petit-déjeuner", "regarder des écrans toute la journée"],
          answer: 1,
          hint: "Bouger fait circuler le sang vers le cerveau.",
          explication: "Bouger et faire du sport envoient plus de sang (donc d'oxygène) au cerveau et l'aident à créer des connexions. Un enfant qui bouge se concentre et mémorise souvent mieux."
        },
        {
          type: "vrai_faux",
          text: "Sauter des repas n'a aucun effet sur la concentration en classe.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Pense au carburant du cerveau.",
          explication: "FAUX. Sans repas, le cerveau manque de glucose (son carburant). On se concentre moins bien, on est fatigué et de mauvaise humeur. C'est pour ça que le petit-déjeuner est important avant l'école."
        },
        {
          text: "Pourquoi le petit-déjeuner est-il utile avant une journée d'école ?",
          options: ["pour faire plaisir aux parents", "pour refaire le plein d'énergie du cerveau après la nuit", "parce que c'est obligatoire", "pour grandir plus vite uniquement"],
          answer: 1,
          hint: "Le cerveau a jeûné toute la nuit.",
          explication: "Pendant la nuit, le cerveau continue de consommer de l'énergie. Le matin, ses réserves sont basses : le petit-déjeuner refait le plein de carburant pour bien réfléchir et se concentrer en classe."
        },
        {
          text: "Quel type d'aliment est particulièrement bon pour le cerveau ?",
          options: ["beaucoup de sucres rapides (bonbons, sodas) pour un coup de boost", "les poissons gras, les fruits et les légumes", "les aliments très salés", "surtout des boissons énergisantes"],
          answer: 1,
          hint: "Pense aux oméga-3 des poissons ; les sucres rapides ne donnent qu'un boost très court.",
          explication: "Les poissons gras (contenant des oméga-3), les fruits et les légumes apportent des éléments utiles au cerveau. Les sucres rapides (bonbons, sodas) donnent un coup de fouet bref suivi d'un coup de fatigue."
        },
        {
          text: "De combien d'heures de sommeil un enfant de 11-12 ans a-t-il besoin, environ ?",
          options: ["4 heures", "6 heures", "9 à 11 heures", "15 heures"],
          answer: 2,
          hint: "Bien plus qu'un adulte !",
          explication: "Un enfant de cet âge a besoin d'environ 9 à 11 heures de sommeil. Le sommeil est un besoin essentiel du cerveau : c'est pendant la nuit qu'il range et consolide ce qu'il a appris."
        }
      ]
    },
    {
      id: "plasticite",
      name: "La plasticité cérébrale",
      emoji: "🌱",
      desc: "Le cerveau qui change, apprend et se répare",
      questions: [
        {
          text: "Que signifie la « plasticité » du cerveau ?",
          options: ["qu'il est fait en plastique", "sa capacité à se modifier et à se transformer en apprenant", "qu'il ne change jamais", "qu'il est fragile"],
          answer: 1,
          hint: "« Plastique » = qui peut se façonner, se modeler.",
          explication: "La plasticité cérébrale, c'est la capacité du cerveau à se modifier tout au long de la vie. Chaque fois qu'on apprend, il change un peu : il crée et renforce des connexions."
        },
        {
          text: "Que se passe-t-il dans le cerveau quand on apprend quelque chose de nouveau ?",
          options: ["rien ne change", "de nouvelles connexions se créent entre les neurones", "des neurones disparaissent", "le cerveau rétrécit"],
          answer: 1,
          hint: "Les neurones se relient entre eux.",
          explication: "Apprendre crée de nouvelles connexions (synapses) entre les neurones, et renforce celles qui existent déjà. Ton cerveau se « recâble » un peu à chaque nouvel apprentissage."
        },
        {
          type: "vrai_faux",
          text: "Plus on s'entraîne à une activité, plus les connexions du cerveau liées à cette activité deviennent solides.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Comme un chemin qu'on emprunte souvent.",
          explication: "VRAI. À force de répéter (un morceau de piano, une table de multiplication…), les connexions concernées se renforcent. C'est comme un sentier dans la forêt : plus on y passe, plus il devient large et facile à suivre."
        },
        {
          text: "Pourquoi s'entraîner régulièrement rend-il une tâche plus facile ?",
          options: ["parce que le cerveau oublie", "parce que les chemins entre neurones se renforcent avec la répétition", "par hasard", "parce que la tâche devient plus simple toute seule"],
          answer: 1,
          hint: "La répétition trace des chemins solides.",
          explication: "La répétition renforce les chemins neuronaux utilisés. Au début l'effort est grand, puis le « chemin » devient une autoroute : la tâche demande moins d'effort et devient presque automatique."
        },
        {
          type: "vrai_faux",
          text: "Une fois adulte, le cerveau ne peut plus jamais changer ni apprendre.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La plasticité dure toute la vie.",
          explication: "FAUX. Le cerveau reste plastique toute la vie : un adulte peut apprendre une langue, un instrument… Le cerveau est simplement encore plus « malléable » pendant l'enfance et l'adolescence."
        },
        {
          text: "À quoi compare-t-on souvent l'apprentissage pour expliquer la plasticité ?",
          options: ["à un ordinateur qui ne change jamais", "à un muscle qui se renforce avec l'entraînement", "à une pierre", "à une photo"],
          answer: 1,
          hint: "Plus on l'exerce, plus il devient fort.",
          explication: "On compare souvent le cerveau à un muscle : ce n'est pas vraiment un muscle, mais l'image est juste. Plus on l'entraîne, plus les connexions se renforcent. Sans entraînement, elles s'affaiblissent."
        },
        {
          text: "Que peut-il parfois se passer après une blessure dans une partie du cerveau ?",
          options: ["rien n'est jamais possible", "d'autres zones peuvent parfois prendre le relais et réapprendre la fonction", "le cerveau s'arrête définitivement", "la personne ne peut plus rien apprendre"],
          answer: 1,
          hint: "Le cerveau peut se réorganiser.",
          explication: "Grâce à la plasticité, d'autres zones du cerveau peuvent parfois « prendre le relais » après une blessure, surtout avec de la rééducation. Le cerveau se réorganise pour retrouver certaines fonctions."
        },
        {
          text: "À quel moment de la vie le cerveau est-il le plus « malléable » (facile à modeler) ?",
          options: ["jamais", "pendant l'enfance et l'adolescence", "seulement après 50 ans", "uniquement à la naissance"],
          answer: 1,
          hint: "C'est aussi pour ça qu'on apprend beaucoup à ton âge.",
          explication: "Le cerveau est particulièrement plastique pendant l'enfance et l'adolescence : c'est le moment idéal pour apprendre beaucoup de choses. Mais, bonne nouvelle, il reste capable d'apprendre toute la vie."
        },
        {
          text: "Apprendre plusieurs choses différentes (musique, langue, sport…) a quel effet sur le cerveau ?",
          options: ["cela l'abîme", "cela enrichit et multiplie ses connexions", "cela n'a aucun effet", "cela efface les autres apprentissages"],
          answer: 1,
          hint: "Plus d'activités variées = plus de connexions.",
          explication: "Varier les activités crée des connexions dans différentes zones du cerveau et l'enrichit. Un cerveau qui apprend des choses variées est comme une ville avec beaucoup de routes bien reliées."
        },
        {
          type: "vrai_faux",
          text: "On peut « entraîner » son cerveau en le faisant travailler régulièrement, un peu comme on entraîne son corps.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est le principe même de la plasticité.",
          explication: "VRAI. En faisant travailler son cerveau régulièrement (lecture, exercices, jeux de réflexion, apprentissages), on renforce ses connexions. L'entraînement régulier compte plus que les longues séances rares."
        }
      ]
    },
    {
      id: "memorisation",
      name: "La mémorisation",
      emoji: "💾",
      desc: "Comment on retient vraiment les informations",
      questions: [
        {
          text: "Quelles sont les deux grandes mémoires que l'on distingue le plus souvent ?",
          options: ["la mémoire rapide et la mémoire lente", "la mémoire à court terme et la mémoire à long terme", "la mémoire des yeux et celle des oreilles", "la bonne et la mauvaise mémoire"],
          answer: 1,
          hint: "L'une garde peu de temps, l'autre longtemps.",
          explication: "On distingue surtout la mémoire à court terme (ou mémoire de travail), qui garde peu d'informations quelques instants, et la mémoire à long terme, qui peut stocker énormément d'informations très longtemps."
        },
        {
          text: "Que fait la mémoire à court terme (mémoire de travail) ?",
          options: ["elle garde les infos pour toujours", "elle garde une petite quantité d'infos pendant quelques instants", "elle stocke des milliers de souvenirs", "elle ne sert à rien"],
          answer: 1,
          hint: "Comme retenir un numéro juste le temps de le composer.",
          explication: "La mémoire à court terme garde une petite quantité d'informations (quelques éléments) pendant quelques secondes : par exemple un numéro de téléphone juste le temps de le taper. Ensuite, l'info s'efface si on ne la travaille pas."
        },
        {
          text: "Que peut faire la mémoire à long terme ?",
          options: ["stocker très peu de choses", "stocker énormément d'informations, parfois toute la vie", "ne garder que les chiffres", "s'effacer chaque nuit"],
          answer: 1,
          hint: "C'est ta grande bibliothèque intérieure.",
          explication: "La mémoire à long terme peut stocker une quantité immense d'informations, parfois pour toute la vie (souvenirs d'enfance, langue maternelle, savoir-faire…). C'est comme une gigantesque bibliothèque."
        },
        {
          text: "Quelle structure du cerveau est essentielle pour fabriquer de nouveaux souvenirs ?",
          options: ["l'amygdale", "l'hippocampe", "le cervelet", "le tronc cérébral"],
          answer: 1,
          hint: "Son nom ressemble à celui d'un petit animal marin.",
          explication: "L'hippocampe (nommé ainsi car sa forme rappelle un hippocampe, le petit poisson) joue un rôle clé pour enregistrer de nouveaux souvenirs et les envoyer vers la mémoire à long terme."
        },
        {
          type: "vrai_faux",
          text: "Revoir une information plusieurs fois à des moments espacés aide à mieux la retenir.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "On appelle ça la répétition espacée.",
          explication: "VRAI. Revoir une leçon plusieurs fois, à des jours d'intervalle (répétition espacée), ancre bien mieux le souvenir que de tout revoir une seule fois. Chaque révision « réactive » et solidifie la trace en mémoire."
        },
        {
          text: "Quelle astuce aide souvent le cerveau à mieux retenir une information ?",
          options: ["la répéter machinalement sans y penser", "l'associer à une image, une histoire ou quelque chose qu'on connaît déjà", "la lire une seule fois très vite", "l'écrire les yeux fermés"],
          answer: 1,
          hint: "Le cerveau retient bien mieux ce qui a du sens et des liens.",
          explication: "Le cerveau retient beaucoup mieux ce qui a du sens et ce qui est relié à d'autres choses. Associer une nouvelle information à une image, une histoire ou un souvenir (un « moyen mnémotechnique ») crée des accroches qui facilitent le rappel."
        },
        {
          text: "À quel moment le cerveau consolide-t-il (renforce-t-il) beaucoup les souvenirs de la journée ?",
          options: ["pendant les repas", "pendant le sommeil", "pendant la récréation seulement", "jamais"],
          answer: 1,
          hint: "Une bonne raison de bien dormir avant un contrôle.",
          explication: "Pendant le sommeil, le cerveau rejoue et range les informations de la journée : il consolide les souvenirs. C'est pour ça que bien dormir la nuit avant un contrôle aide à mieux retenir sa leçon."
        },
        {
          text: "Pourquoi oublie-t-on certaines informations ?",
          options: ["c'est une maladie", "c'est normal : le cerveau trie et efface ce qui n'est pas réutilisé", "parce que le cerveau est trop petit", "on n'oublie jamais rien"],
          answer: 1,
          hint: "Le cerveau fait du tri pour ne pas être encombré.",
          explication: "Oublier est normal et même utile : le cerveau ne peut pas tout garder, alors il efface ce qu'on ne réutilise pas. Pour ne pas oublier une leçon, il faut la réactiver régulièrement."
        },
        {
          type: "vrai_faux",
          text: "On peut facilement retenir 30 numéros de téléphone d'un coup dans sa mémoire à court terme.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La mémoire de travail a une petite capacité.",
          explication: "FAUX. La mémoire à court terme ne retient que quelques éléments à la fois (souvent moins d'une dizaine). Pour retenir davantage, il faut regrouper les informations et les faire passer en mémoire à long terme par la répétition."
        },
        {
          text: "Pour retenir un long numéro (par exemple 06 45 12 88 30), quelle astuce aide la mémoire à court terme ?",
          options: ["le répéter une seule fois très vite", "le découper en petits groupes de chiffres", "le lire à l'envers", "fermer les yeux très fort"],
          answer: 1,
          hint: "La mémoire de travail gère mieux quelques « paquets » que beaucoup d'éléments isolés.",
          explication: "Découper en petits groupes (on appelle ça le « chunking ») aide beaucoup : au lieu de 10 chiffres séparés, on retient 5 paquets. La mémoire à court terme gère bien mieux quelques groupes qu'une longue suite d'éléments isolés."
        }
      ]
    },
    {
      id: "attention",
      name: "L'attention et la concentration",
      emoji: "🎯",
      desc: "Le « projecteur » du cerveau et les distractions",
      questions: [
        {
          text: "À quoi peut-on comparer l'attention ?",
          options: ["à une éponge qui absorbe tout", "à un projecteur qui éclaire une seule chose à la fois", "à un aimant", "à une horloge"],
          answer: 1,
          hint: "Elle éclaire ce sur quoi on se concentre.",
          explication: "L'attention est comme un projecteur (ou une lampe torche) : elle éclaire une chose à la fois, très nettement, pendant que le reste reste dans l'ombre. On ne peut pas tout éclairer en même temps."
        },
        {
          text: "Le cerveau peut-il vraiment faire deux tâches qui demandent de réfléchir en même temps ?",
          options: ["oui, sans aucun problème", "non, il alterne rapidement entre les deux, et c'est moins efficace", "oui, c'est même plus rapide", "seulement le matin"],
          answer: 1,
          hint: "On croit faire deux choses, mais on zappe de l'une à l'autre.",
          explication: "Le cerveau ne fait pas vraiment deux tâches réfléchies à la fois : il bascule très vite de l'une à l'autre. Ce « saut » coûte du temps et de l'énergie, et on fait les deux moins bien."
        },
        {
          type: "vrai_faux",
          text: "Écouter le cours tout en répondant à des messages permet de tout faire aussi bien.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Le projecteur ne peut éclairer qu'une chose.",
          explication: "FAUX. En faisant deux choses à la fois, l'attention se coupe en morceaux : on rate des bouts du cours et on répond moins bien. Le cerveau n'est pas fait pour ce « multitâche ». Une chose à la fois est plus efficace."
        },
        {
          text: "Quel effet les notifications du téléphone ont-elles sur l'attention ?",
          options: ["elles l'améliorent", "elles la coupent et la fragmentent", "elles n'ont aucun effet", "elles la rendent illimitée"],
          answer: 1,
          hint: "Chaque « bip » interrompt le projecteur.",
          explication: "Chaque notification coupe l'attention et oblige le cerveau à se reconcentrer ensuite, ce qui prend du temps. Beaucoup de notifications fragmentent l'attention et rendent le travail plus long et plus fatigant."
        },
        {
          text: "Quelle zone située à l'avant du cerveau aide à se concentrer et à se contrôler ?",
          options: ["le cervelet", "le cortex préfrontal", "l'hippocampe", "le tronc cérébral"],
          answer: 1,
          hint: "« Préfrontal » = juste derrière le front.",
          explication: "Le cortex préfrontal, situé à l'avant du cerveau (derrière le front), est le « chef d'orchestre » : il aide à se concentrer, à résister aux distractions et à se contrôler. Il continue de se développer jusqu'à l'âge adulte."
        },
        {
          text: "Pour bien se concentrer sur ses devoirs, quel est le meilleur choix ?",
          options: ["un endroit calme, sans écran ni bruit", "devant la télévision allumée", "avec le téléphone qui vibre à côté", "dans un endroit très bruyant"],
          answer: 0,
          hint: "Moins de distractions = projecteur plus stable.",
          explication: "Un environnement calme, sans écran ni notification, aide l'attention à rester stable. Moins il y a de distractions autour, moins le « projecteur » de l'attention se fait détourner."
        },
        {
          type: "vrai_faux",
          text: "Faire de courtes pauses aide le cerveau à rester concentré plus longtemps.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le cerveau se fatigue s'il force trop longtemps.",
          explication: "VRAI. L'attention se fatigue. De courtes pauses régulières (bouger, boire, regarder au loin) permettent au cerveau de « recharger » et de mieux se reconcentrer ensuite. Travailler des heures sans pause est peu efficace."
        },
        {
          text: "Combien de temps un élève de collège peut-il rester très concentré d'affilée, environ ?",
          options: ["5 heures sans pause", "20 à 30 minutes avant une petite pause", "10 secondes", "toute la journée sans effort"],
          answer: 1,
          hint: "Ensuite, une petite pause aide.",
          explication: "La concentration intense dure souvent 20 à 30 minutes chez un collégien, puis une courte pause aide à repartir. Découper le travail en blocs avec des pauses est plus efficace qu'une longue séance non-stop."
        },
        {
          text: "Que se passe-t-il quand on est interrompu au milieu d'une tâche ?",
          options: ["on reprend instantanément", "il faut un certain temps pour se reconcentrer sur ce qu'on faisait", "on travaille mieux", "cela n'a aucune importance"],
          answer: 1,
          hint: "Le projecteur doit retrouver sa cible.",
          explication: "Après une interruption, le cerveau met du temps à se replonger dans la tâche (parfois plusieurs minutes). Multiplier les interruptions rend le travail beaucoup plus long : mieux vaut protéger ses moments de concentration."
        },
        {
          text: "Quel est le bon réflexe pendant les devoirs ?",
          options: ["garder le téléphone allumé à portée de main", "mettre le téléphone en silencieux et loin de soi", "répondre à chaque message", "travailler devant une vidéo"],
          answer: 1,
          hint: "Éloigner la tentation protège l'attention.",
          explication: "Mettre le téléphone en silencieux et hors de vue (dans une autre pièce) évite les interruptions et la tentation d'y jeter un œil. L'attention reste alors bien plus stable et le travail va plus vite."
        }
      ]
    },
    {
      id: "emotions",
      name: "Les émotions",
      emoji: "❤️",
      desc: "Comprendre et apprivoiser ce que l'on ressent",
      questions: [
        {
          text: "Quelle petite structure du cerveau agit comme une « alarme » face au danger ou à la peur ?",
          options: ["l'hippocampe", "l'amygdale", "le cervelet", "le cortex visuel"],
          answer: 1,
          hint: "Il y en a deux, en forme d'amande.",
          explication: "L'amygdale est le « détecteur d'alarme » du cerveau : elle réagit très vite à la peur ou au danger et déclenche les réactions du corps (cœur qui bat, muscles prêts à réagir)."
        },
        {
          text: "À quoi servent les émotions ?",
          options: ["à rien, ce sont des défauts", "ce sont des signaux utiles qui nous informent et nous font réagir", "à nous rendre malades", "à nous empêcher de réfléchir uniquement"],
          answer: 1,
          hint: "Une émotion, c'est un message du cerveau.",
          explication: "Les émotions sont des messages utiles : la peur nous protège d'un danger, la colère signale une injustice, la joie nous pousse à recommencer ce qui est bon. Ce ne sont pas des ennemies : elles nous informent."
        },
        {
          type: "vrai_faux",
          text: "Ressentir de la peur ou de la colère est anormal, il faudrait ne jamais les ressentir.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Toutes les émotions ont une utilité.",
          explication: "FAUX. Toutes les émotions sont normales et utiles, même les désagréables. Le but n'est pas de les supprimer, mais d'apprendre à les reconnaître et à les gérer pour qu'elles ne nous débordent pas."
        },
        {
          text: "Que se passe-t-il dans le corps quand on a très peur (réaction d'alarme) ?",
          options: ["le cœur ralentit et on s'endort", "le cœur bat vite, la respiration s'accélère, le corps se prépare à réagir", "rien du tout", "on devient tout mou et calme"],
          answer: 1,
          hint: "Le corps se prépare à fuir ou à faire face.",
          explication: "Face au danger, l'amygdale déclenche une réaction d'alarme : le cœur bat plus vite, la respiration s'accélère, les muscles se tendent. Le corps se prépare à réagir (fuir ou faire face). C'est utile en cas de vrai danger."
        },
        {
          text: "Quelle partie du cerveau aide à « calmer l'alarme » et à réfléchir avant d'agir ?",
          options: ["l'amygdale", "le cortex préfrontal", "le cervelet", "l'oreille"],
          answer: 1,
          hint: "C'est le « chef » raisonnable, à l'avant du cerveau.",
          explication: "Le cortex préfrontal aide à calmer l'amygdale et à réfléchir avant d'agir. Chez les enfants et ados, il est encore en construction : c'est pour ça qu'on peut être plus vite débordé par ses émotions (c'est normal !)."
        },
        {
          text: "Quel geste simple aide à calmer une émotion forte ?",
          options: ["retenir sa respiration", "respirer lentement et profondément", "crier le plus fort possible", "courir sans réfléchir"],
          answer: 1,
          hint: "La respiration lente envoie un signal de calme.",
          explication: "Respirer lentement et profondément envoie au cerveau un signal de calme : le cœur ralentit et l'alarme (amygdale) s'apaise. C'est un outil simple et efficace pour reprendre le contrôle d'une émotion forte."
        },
        {
          type: "vrai_faux",
          text: "Mettre un mot sur ce que l'on ressent (« je suis stressé », « je suis en colère ») aide à mieux gérer l'émotion.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Nommer, c'est déjà commencer à apprivoiser.",
          explication: "VRAI. Nommer son émotion aide le cortex préfrontal à reprendre la main sur l'amygdale : l'émotion devient plus facile à gérer. Dire ou écrire ce qu'on ressent est un vrai outil pour se calmer."
        },
        {
          text: "Qu'est-ce que l'empathie ?",
          options: ["se moquer des autres", "la capacité à comprendre et ressentir ce que l'autre éprouve", "ne penser qu'à soi", "avoir toujours raison"],
          answer: 1,
          hint: "Se mettre à la place de l'autre.",
          explication: "L'empathie, c'est la capacité à comprendre et à partager les émotions d'une autre personne, à « se mettre à sa place ». Le cerveau humain est câblé pour ça : c'est un pilier de la vie en groupe."
        },
        {
          text: "Le stress est-il toujours mauvais ?",
          options: ["oui, toujours", "non : un peu de stress peut aider à se mobiliser, c'est l'excès qui pose problème", "le stress n'existe pas", "le stress est toujours utile, même en excès"],
          answer: 1,
          hint: "Un petit trac avant un exposé peut aider.",
          explication: "Un peu de stress peut être utile : il mobilise l'attention et l'énergie (par exemple avant un exposé ou un match). C'est le stress trop fort ou trop long qui devient nuisible et fatigue le cerveau et le corps."
        },
        {
          text: "Face à une émotion très forte, avant de réagir, mieux vaut…",
          options: ["agir tout de suite sans réfléchir", "prendre un moment, respirer, laisser le cerveau se calmer", "crier sur quelqu'un", "faire comme si de rien n'était pour toujours"],
          answer: 1,
          hint: "Laisser le cortex préfrontal reprendre la main.",
          explication: "Prendre un moment et respirer laisse le temps au cortex préfrontal de calmer l'alarme et de choisir une réaction réfléchie. Agir « à chaud » fait souvent regretter : une pause de quelques secondes change tout."
        }
      ]
    },
    {
      id: "anatomie",
      name: "Le cerveau, comment c'est fait ?",
      emoji: "🧩",
      desc: "Les grandes régions du cerveau",
      questions: [
        {
          text: "Combien pèse environ le cerveau d'un adulte ?",
          options: ["300 grammes", "environ 1,3 à 1,4 kg", "5 kilos", "10 kilos"],
          answer: 1,
          hint: "À peu près le poids de trois tablettes de beurre.",
          explication: "Le cerveau d'un adulte pèse environ 1,3 à 1,4 kg. Malgré ce petit poids, il consomme à lui seul près de 20 % de l'énergie du corps et contient des dizaines de milliards de neurones."
        },
        {
          text: "Comment s'appelle la couche externe plissée du cerveau, siège de la réflexion ?",
          options: ["le cortex", "le cervelet", "la moelle épinière", "l'amygdale"],
          answer: 0,
          hint: "C'est la surface toute ridée du cerveau.",
          explication: "Le cortex (ou cortex cérébral) est la couche externe plissée du cerveau. C'est là que se déroulent la réflexion, le langage, la mémoire et de nombreuses fonctions complexes."
        },
        {
          text: "Pourquoi le cortex est-il tout plissé (plein de replis) ?",
          options: ["pour être joli", "pour avoir une grande surface dans un petit espace", "par hasard", "parce qu'il a rétréci"],
          answer: 1,
          hint: "Comme une grande feuille qu'on froisse pour la ranger.",
          explication: "Les replis permettent de « ranger » une très grande surface de cortex dans le petit volume du crâne. Comme une grande feuille de papier froissée pour tenir dans une petite boîte : plus de surface = plus de capacités."
        },
        {
          text: "Quelle partie, à l'arrière et en bas du cerveau, gère l'équilibre et la coordination des mouvements ?",
          options: ["le cortex", "le cervelet", "l'hippocampe", "l'amygdale"],
          answer: 1,
          hint: "Son nom veut dire « petit cerveau ».",
          explication: "Le cervelet (« petit cerveau »), situé à l'arrière et en bas, gère l'équilibre et la coordination des gestes. C'est grâce à lui qu'on peut marcher, faire du vélo ou danser sans y penser."
        },
        {
          text: "Quelle partie relie le cerveau à la moelle épinière et contrôle des fonctions vitales comme la respiration ?",
          options: ["le cortex", "le tronc cérébral", "le cervelet", "l'amygdale"],
          answer: 1,
          hint: "C'est le « tronc » qui descend vers le corps.",
          explication: "Le tronc cérébral relie le cerveau à la moelle épinière. Il contrôle des fonctions vitales automatiques : la respiration, les battements du cœur, la digestion… même quand on dort."
        },
        {
          text: "Le cerveau est divisé en deux moitiés appelées…",
          options: ["les cortex", "les hémisphères (gauche et droit)", "les lobes uniquement", "les neurones"],
          answer: 1,
          hint: "Comme deux moitiés reliées par un pont.",
          explication: "Le cerveau comporte deux hémisphères, gauche et droit, reliés par un pont de fibres (le corps calleux) qui leur permet de communiquer. Les deux hémisphères travaillent ensemble en permanence."
        },
        {
          type: "vrai_faux",
          text: "Le cerveau est protégé par les os du crâne et par un liquide qui l'amortit.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Un casque en os et un coussin liquide.",
          explication: "VRAI. Le cerveau est fragile : il est protégé par les os du crâne (comme un casque) et baigne dans un liquide (le liquide céphalo-rachidien) qui l'amortit contre les chocs. C'est aussi pourquoi le casque à vélo est essentiel."
        },
        {
          type: "vrai_faux",
          text: "On n'utilise que 10 % de notre cerveau.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "C'est une idée fausse très répandue.",
          explication: "FAUX. C'est un mythe ! On utilise l'ensemble de notre cerveau, même si toutes les zones ne sont pas actives en même temps. Selon ce qu'on fait, différentes régions s'activent, mais aucune n'est inutile."
        },
        {
          type: "vrai_faux",
          text: "Il existe des gens « cerveau gauche » (logiques) et d'autres « cerveau droit » (créatifs).",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Encore une idée fausse célèbre.",
          explication: "FAUX. C'est un mythe. Les deux hémisphères collaborent en permanence pour presque tout ce qu'on fait, qu'on soit logique OU créatif. Personne n'utilise seulement une moitié de son cerveau."
        },
        {
          text: "Le cerveau, la moelle épinière et les nerfs forment ensemble…",
          options: ["le système digestif", "le système nerveux", "le système sanguin", "le squelette"],
          answer: 1,
          hint: "Le réseau qui transporte les messages du corps.",
          explication: "Le cerveau, la moelle épinière et les nerfs forment le système nerveux. C'est le réseau de communication du corps : il reçoit les informations, les traite et envoie les ordres aux muscles et aux organes."
        }
      ]
    },
    {
      id: "neurones",
      name: "Les neurones et les messages",
      emoji: "⚡",
      desc: "La cellule nerveuse, la synapse, le signal",
      questions: [
        {
          text: "Comment s'appelle la cellule de base du cerveau qui transmet les messages ?",
          options: ["le globule", "le neurone", "le muscle", "l'os"],
          answer: 1,
          hint: "C'est la « brique » du système nerveux.",
          explication: "Le neurone est la cellule de base du système nerveux. Il reçoit, traite et transmet des messages. Le cerveau en contient des dizaines de milliards, tous reliés entre eux."
        },
        {
          text: "Environ combien de neurones compte le cerveau humain ?",
          options: ["quelques milliers", "quelques millions", "environ 86 milliards", "une centaine"],
          answer: 2,
          hint: "Un nombre gigantesque, en milliards.",
          explication: "Le cerveau humain compte environ 86 milliards de neurones ! Et chacun peut être relié à des milliers d'autres, ce qui forme un réseau d'une complexité extraordinaire."
        },
        {
          text: "Quelle partie du neurone reçoit les messages venant des autres neurones ?",
          options: ["l'axone", "les dendrites", "le noyau seul", "la synapse"],
          answer: 1,
          hint: "Elles ressemblent aux branches d'un arbre.",
          explication: "Les dendrites sont les prolongements ramifiés (comme des branches) qui reçoivent les messages des autres neurones et les amènent vers le corps de la cellule."
        },
        {
          text: "Quelle longue « fibre » transporte le message vers les autres neurones ?",
          options: ["la dendrite", "l'axone", "le crâne", "le sang"],
          answer: 1,
          hint: "C'est le « câble » de sortie du neurone.",
          explication: "L'axone est la longue fibre qui transporte le message hors du neurone, vers les autres neurones ou vers les muscles. C'est le « câble » de sortie de la cellule nerveuse."
        },
        {
          text: "Comment s'appelle la zone de connexion entre deux neurones ?",
          options: ["la synapse", "le cortex", "le cervelet", "la moelle"],
          answer: 0,
          hint: "C'est le petit « pont » entre deux neurones.",
          explication: "La synapse est le point de connexion entre deux neurones. C'est là que le message passe d'un neurone à l'autre. Quand on apprend, les synapses utilisées se renforcent."
        },
        {
          text: "Comment le message circule-t-il le long d'un neurone ?",
          options: ["sous forme d'un signal électrique", "sous forme de son", "sous forme de lumière", "il ne circule pas"],
          answer: 0,
          hint: "Un peu comme dans un fil électrique.",
          explication: "À l'intérieur du neurone, le message circule sous la forme d'un petit signal électrique, qui parcourt la cellule de bout en bout, un peu comme un courant dans un fil."
        },
        {
          text: "À la synapse, comment le message passe-t-il d'un neurone à l'autre ?",
          options: ["par un fil", "grâce à des molécules chimiques appelées neurotransmetteurs", "par magie", "par la lumière"],
          answer: 1,
          hint: "Le signal électrique se transforme en signal chimique.",
          explication: "Au niveau de la synapse, il y a un minuscule espace. Le message y passe grâce à des molécules chimiques, les neurotransmetteurs, libérées par un neurone et captées par le suivant. Le signal électrique devient chimique, puis à nouveau électrique."
        },
        {
          type: "vrai_faux",
          text: "Les messages dans le cerveau circulent très lentement, en plusieurs minutes.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Pense à la vitesse de tes réflexes.",
          explication: "FAUX. Les messages nerveux circulent extrêmement vite (jusqu'à plus de 100 mètres par seconde !). C'est pour ça qu'on retire sa main d'un objet brûlant en une fraction de seconde, sans même y penser."
        },
        {
          text: "Que sont les neurotransmetteurs ?",
          options: ["des os minuscules", "des molécules messagères qui font passer l'info entre les neurones", "des cellules de la peau", "des vitamines"],
          answer: 1,
          hint: "La dopamine en est un exemple.",
          explication: "Les neurotransmetteurs sont des molécules qui transportent le message d'un neurone à l'autre au niveau des synapses. La dopamine (liée à la motivation et à la récompense) en est un exemple connu."
        },
        {
          text: "Quand on apprend, que devient une connexion (synapse) souvent utilisée ?",
          options: ["elle disparaît", "elle se renforce", "elle rétrécit", "elle change de couleur"],
          answer: 1,
          hint: "C'est le principe de la plasticité.",
          explication: "Une synapse souvent utilisée se renforce : le message y passe de mieux en mieux. C'est le mécanisme de la plasticité : « les neurones qui s'activent ensemble se relient plus fort ». À l'inverse, une connexion jamais utilisée s'affaiblit."
        }
      ]
    },
    {
      id: "sommeil",
      name: "Le sommeil : le grand ménage du cerveau",
      emoji: "🌙",
      desc: "Cycles, rêves et consolidation des souvenirs",
      questions: [
        {
          text: "Pendant le sommeil, que fait le cerveau avec les souvenirs de la journée ?",
          options: ["il les efface tous", "il les trie et consolide (renforce) les plus importants", "il ne fait rien", "il les mélange au hasard"],
          answer: 1,
          hint: "La nuit, le cerveau « range » la journée.",
          explication: "Pendant le sommeil, le cerveau rejoue, trie et consolide les souvenirs importants de la journée. C'est un peu comme ranger et classer ses affaires le soir : bien dormir aide donc à mieux retenir ses leçons."
        },
        {
          text: "Comment appelle-t-on la phase de sommeil où l'on rêve le plus ?",
          options: ["le sommeil profond", "le sommeil paradoxal", "la sieste", "l'éveil"],
          answer: 1,
          hint: "On l'appelle « paradoxal » car le cerveau y est très actif.",
          explication: "Le sommeil paradoxal est la phase où l'on rêve le plus. Le cerveau y est très actif (presque comme éveillé) alors que le corps, lui, est complètement détendu. D'où le mot « paradoxal »."
        },
        {
          text: "Environ combien de temps dure un cycle de sommeil ?",
          options: ["10 minutes", "environ 90 minutes", "6 heures", "20 secondes"],
          answer: 1,
          hint: "Une nuit est faite de plusieurs cycles enchaînés.",
          explication: "Un cycle de sommeil dure environ 90 minutes et enchaîne plusieurs phases (léger, profond, paradoxal). Une nuit complète comporte plusieurs cycles. Se réveiller en fin de cycle donne l'impression d'être plus reposé."
        },
        {
          type: "vrai_faux",
          text: "Bien dormir aide à mieux apprendre et à mieux mémoriser ses leçons.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le sommeil consolide la mémoire.",
          explication: "VRAI. Le sommeil consolide les souvenirs et « nettoie » le cerveau. Un élève qui dort bien retient mieux, se concentre mieux et est de meilleure humeur. Dormir la nuit avant un contrôle vaut mieux que réviser toute la nuit."
        },
        {
          text: "À quoi sert notamment le sommeil profond ?",
          options: ["à rien", "à récupérer et à permettre au cerveau de faire le « ménage » (éliminer des déchets)", "à digérer uniquement", "à faire pousser les cheveux"],
          answer: 1,
          hint: "La nuit, le cerveau se nettoie.",
          explication: "Pendant le sommeil profond, le cerveau récupère et élimine des déchets accumulés dans la journée : c'est un vrai « grand ménage ». C'est essentiel pour garder un cerveau en bonne santé et bien reposé."
        },
        {
          type: "vrai_faux",
          text: "Regarder des écrans juste avant de dormir (lumière bleue) peut retarder l'endormissement.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "La lumière trompe le cerveau sur l'heure.",
          explication: "VRAI. La lumière des écrans (surtout la lumière bleue) fait croire au cerveau qu'il fait encore jour et retarde l'endormissement. Mieux vaut arrêter les écrans un moment avant le coucher pour bien dormir."
        },
        {
          text: "Que risque-t-on après une nuit trop courte ?",
          options: ["être plus concentré", "avoir moins d'attention, une moins bonne mémoire et être plus irritable", "ne rien ressentir", "mieux apprendre"],
          answer: 1,
          hint: "Le manque de sommeil se voit dès le lendemain.",
          explication: "Après une nuit trop courte, on est moins attentif, on mémorise moins bien, on est plus fatigué et souvent de mauvaise humeur. Le manque de sommeil pénalise directement l'apprentissage et l'humeur."
        },
        {
          text: "Combien d'heures de sommeil pour un enfant de 11-12 ans, environ ?",
          options: ["4 à 5 heures", "9 à 11 heures", "3 heures", "14 à 16 heures"],
          answer: 1,
          hint: "Beaucoup plus qu'un adulte.",
          explication: "Un enfant de 11-12 ans a besoin d'environ 9 à 11 heures de sommeil par nuit. C'est plus qu'un adulte, car son cerveau et son corps sont en plein développement et ont besoin de récupérer davantage."
        },
        {
          type: "vrai_faux",
          text: "On peut rattraper complètement des semaines de manque de sommeil avec une seule grasse matinée.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La dette de sommeil ne s'efface pas d'un coup.",
          explication: "FAUX. Une grasse matinée aide un peu, mais elle ne rattrape pas des semaines de dette de sommeil. Le cerveau a besoin d'un sommeil régulier et suffisant chaque nuit : c'est la régularité qui compte le plus."
        },
        {
          text: "Quel est un bon réflexe pour bien dormir ?",
          options: ["regarder une vidéo dans le lit juste avant de dormir", "arrêter les écrans un moment avant le coucher et garder des horaires réguliers", "boire un soda le soir", "faire du sport intense juste avant de se coucher"],
          answer: 1,
          hint: "Des horaires réguliers et pas d'écran au lit.",
          explication: "Pour bien dormir : arrêter les écrans un moment avant le coucher, se coucher à des horaires réguliers, et éviter les excitants le soir. Le cerveau aime la routine : des horaires stables l'aident à s'endormir plus facilement."
        }
      ]
    },
    {
      id: "ecrans",
      name: "Le cerveau et les écrans",
      emoji: "📱",
      desc: "Dopamine, attention, sommeil et bon usage",
      questions: [
        {
          text: "Quelle molécule du cerveau est stimulée par les « j'aime » et les notifications, donnant envie d'y revenir ?",
          options: ["l'eau", "la dopamine", "le sel", "le calcium"],
          answer: 1,
          hint: "On l'appelle parfois la molécule de la récompense.",
          explication: "La dopamine est un neurotransmetteur lié à la motivation et à la récompense. Chaque « j'aime » ou notification donne un petit pic de dopamine, ce qui donne envie de recommencer : c'est le moteur de l'envie de revenir."
        },
        {
          text: "La dopamine est liée à…",
          options: ["la digestion", "la motivation et la récompense (l'envie de recommencer)", "la vue uniquement", "la croissance des os"],
          answer: 1,
          hint: "C'est ce qui nous pousse à recommencer ce qui est agréable.",
          explication: "La dopamine est au cœur du système de récompense du cerveau : elle nous motive à refaire ce qui nous a fait du bien. Utile pour apprendre… mais les applis s'en servent aussi pour nous garder le plus longtemps possible."
        },
        {
          type: "vrai_faux",
          text: "Les applications et les jeux sont souvent conçus exprès pour capter notre attention le plus longtemps possible.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Notifications, scroll infini, récompenses… ce n'est pas un hasard.",
          explication: "VRAI. De nombreuses applis sont conçues pour capter l'attention au maximum : notifications, « scroll » sans fin, petites récompenses. Le savoir aide à garder le contrôle et à ne pas se laisser piéger."
        },
        {
          text: "Pourquoi est-il parfois difficile de « décrocher » d'un jeu ou d'une vidéo ?",
          options: ["parce que le cerveau s'ennuie", "parce que le cerveau reçoit de petites récompenses (dopamine) qui donnent envie de continuer", "parce que c'est obligatoire", "parce que le temps s'arrête"],
          answer: 1,
          hint: "Chaque petite récompense relance l'envie.",
          explication: "Les jeux et vidéos offrent de petites récompenses fréquentes qui libèrent de la dopamine, ce qui donne toujours envie d'« encore un peu ». C'est pour ça qu'il est utile de fixer des limites de temps à l'avance."
        },
        {
          text: "Quel effet trop d'écrans le soir peut-il avoir ?",
          options: ["améliorer le sommeil", "perturber le sommeil et l'endormissement", "aucun effet", "faire grandir plus vite"],
          answer: 1,
          hint: "Rappelle-toi la lumière bleue.",
          explication: "Trop d'écrans le soir perturbe le sommeil : la lumière retarde l'endormissement et le cerveau reste excité. Un sommeil abîmé se paie le lendemain en attention, mémoire et humeur."
        },
        {
          type: "vrai_faux",
          text: "Regarder une vidéo tout en faisant ses devoirs permet d'apprendre aussi bien.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Rappelle-toi le « projecteur » de l'attention.",
          explication: "FAUX. Le cerveau ne fait pas deux tâches réfléchies à la fois : il bascule de l'une à l'autre et fait les deux moins bien. Faire ses devoirs sans vidéo ni écran est bien plus efficace et souvent plus rapide."
        },
        {
          text: "Les écrans sont-ils forcément mauvais pour le cerveau ?",
          options: ["oui, toujours", "non : tout dépend de l'usage (durée, moment, contenu)", "non, on peut en abuser sans risque", "ils sont toujours bénéfiques"],
          answer: 1,
          hint: "C'est une question d'équilibre.",
          explication: "Les écrans ne sont pas « mauvais » en soi : ils peuvent servir à apprendre, créer, se détendre. Ce qui compte, c'est l'équilibre : la durée, le moment (pas le soir) et le contenu. Le problème, c'est l'excès."
        },
        {
          text: "Quel bon réflexe protège à la fois l'attention et le sommeil ?",
          options: ["utiliser les écrans sans limite", "faire des pauses et éviter les écrans avant de dormir", "regarder deux écrans à la fois", "dormir avec le téléphone allumé"],
          answer: 1,
          hint: "Des pauses + pas d'écran le soir.",
          explication: "Faire des pauses régulières sans écran et arrêter les écrans avant le coucher protège l'attention dans la journée et le sommeil la nuit. Le cerveau a besoin de moments de vraie déconnexion."
        },
        {
          text: "Le « scroll » infini (faire défiler le fil sans fin) est conçu pour…",
          options: ["nous aider à nous arrêter", "faire en sorte qu'on ne s'arrête pas facilement", "nous faire dormir", "nous faire réfléchir davantage"],
          answer: 1,
          hint: "S'il n'y a jamais de « fin », on continue.",
          explication: "Le défilement sans fin est conçu pour qu'il n'y ait jamais de moment naturel d'arrêt : on continue sans s'en rendre compte. Fixer une limite (une minuterie) aide le cortex préfrontal à reprendre le contrôle."
        },
        {
          type: "vrai_faux",
          text: "Le cerveau a aussi besoin de moments sans écran (s'ennuyer, jouer dehors, bouger) pour bien se développer.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "L'ennui et le jeu libre sont utiles.",
          explication: "VRAI. Les moments sans écran — s'ennuyer, imaginer, jouer, bouger, discuter — sont précieux pour le cerveau. L'ennui stimule même la créativité. Un cerveau a besoin de variété, pas seulement d'écrans."
        }
      ]
    },
    {
      id: "apprendre",
      name: "Apprendre à apprendre",
      emoji: "📚",
      desc: "Les méthodes qui marchent vraiment",
      questions: [
        {
          text: "Pour retenir une leçon, qu'est-ce qui est le plus efficace ?",
          options: ["la relire plusieurs fois", "se tester : fermer le cahier et essayer de se réciter la leçon", "la recopier machinalement", "la regarder rapidement"],
          answer: 1,
          hint: "L'effort de se souvenir est la clé.",
          explication: "Se tester (fermer le cahier et se rappeler activement) est la méthode la plus efficace, bien plus que relire. Faire l'effort de retrouver l'information renforce fortement le souvenir. On appelle ça la « récupération »."
        },
        {
          text: "Qu'est-ce que la « répétition espacée » ?",
          options: ["tout apprendre en une fois", "revoir une leçon plusieurs fois, à des intervalles de plus en plus longs", "ne jamais réviser", "réviser uniquement en musique"],
          answer: 1,
          hint: "On espace les révisions dans le temps.",
          explication: "La répétition espacée consiste à revoir une leçon plusieurs fois à des jours d'écart (le lendemain, 3 jours après, une semaine après…). Chaque révision juste avant d'oublier ancre durablement le souvenir."
        },
        {
          type: "vrai_faux",
          text: "Faire des erreurs en apprenant est utile pour le cerveau.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "L'erreur montre au cerveau quoi corriger.",
          explication: "VRAI. L'erreur n'est pas un échec : c'est une information précieuse qui montre au cerveau ce qu'il faut ajuster. On apprend souvent mieux en se trompant puis en corrigeant qu'en ayant tout bon du premier coup."
        },
        {
          text: "Pourquoi expliquer une leçon à quelqu'un d'autre aide-t-il à mieux la comprendre ?",
          options: ["ça ne sert à rien", "cela oblige à organiser ses idées et révèle ce qu'on ne sait pas encore", "ça fait perdre du temps", "ça efface la leçon"],
          answer: 1,
          hint: "En expliquant, on repère ses trous.",
          explication: "Expliquer force à reformuler et à organiser ses idées : on repère aussitôt les points qu'on ne maîtrise pas. Enseigner à quelqu'un (ou à une peluche !) est un excellent moyen de vérifier et de renforcer sa compréhension."
        },
        {
          text: "Qu'est-ce qui marche le mieux à long terme ?",
          options: ["tout apprendre la veille au soir (bachotage)", "réviser un peu chaque jour, réparti dans le temps", "ne réviser qu'une fois", "réviser seulement le jour du contrôle"],
          answer: 1,
          hint: "Petit à petit, régulièrement.",
          explication: "Réviser un peu chaque jour est bien plus efficace à long terme que le bachotage de la veille. Le bachotage remplit la mémoire à court terme (vite oubliée) ; la régularité fait passer les infos en mémoire à long terme."
        },
        {
          type: "vrai_faux",
          text: "Relire ses notes au surligneur donne souvent l'impression de bien savoir, alors qu'on retient en réalité assez peu.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est le piège de « l'illusion de savoir ».",
          explication: "VRAI. Relire et surligner donne une « illusion de maîtrise » : ça semble familier, donc on croit savoir. Mais sans se tester, on retient peu. Mieux vaut fermer le cahier et vérifier ce dont on se souvient vraiment."
        },
        {
          text: "Pourquoi mélanger plusieurs types d'exercices (au lieu de faire le même en boucle) aide-t-il à apprendre ?",
          options: ["ça embrouille le cerveau", "cela entraîne le cerveau à choisir la bonne méthode selon la situation", "ça ne change rien", "c'est plus rapide seulement"],
          answer: 1,
          hint: "Le cerveau apprend à s'adapter.",
          explication: "Alterner les types d'exercices (au lieu de répéter le même) oblige le cerveau à reconnaître quel type de problème il a et quelle méthode utiliser. C'est plus difficile sur le moment, mais on apprend plus solidement."
        },
        {
          text: "Quel facteur, en plus du travail, est essentiel pour bien mémoriser ?",
          options: ["manger beaucoup de sucre", "un bon sommeil", "réviser toute la nuit", "rester assis longtemps"],
          answer: 1,
          hint: "C'est la nuit que la mémoire se consolide.",
          explication: "Un bon sommeil est indispensable pour mémoriser : c'est pendant la nuit que le cerveau consolide ce qu'on a appris. Travailler beaucoup sans dormir suffisamment fait perdre une grande partie du bénéfice."
        },
        {
          text: "Que faire quand on ne comprend pas quelque chose ?",
          options: ["abandonner tout de suite", "demander de l'aide, chercher et s'entraîner : le cerveau progresse avec l'effort", "conclure qu'on est « nul »", "attendre que ça vienne tout seul"],
          answer: 1,
          hint: "Le cerveau se muscle avec l'effort (plasticité).",
          explication: "Ne pas comprendre tout de suite est normal. En demandant de l'aide, en cherchant et en s'entraînant, on crée de nouvelles connexions : le cerveau progresse justement grâce à l'effort. La difficulté fait partie de l'apprentissage."
        },
        {
          type: "vrai_faux",
          text: "L'intelligence est fixée à la naissance : on ne peut pas progresser.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Rappelle-toi la plasticité du cerveau.",
          explication: "FAUX. Grâce à la plasticité, le cerveau se développe avec l'entraînement et les apprentissages. On peut progresser à tout âge en fournissant des efforts adaptés. Croire qu'on peut progresser (« état d'esprit de croissance ») aide déjà à mieux réussir."
        }
      ]
    }
  ]
};
