/* Matière : Technologie 🔧 (6ème)
   10 thèmes × 10 questions = 100 questions
   Programme officiel 6ème : objet technique, matériaux, énergie, représentation, programmation. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["techno"] = {
  id: "techno",
  name: "Technologie",
  emoji: "🔧",
  desc: "Objets techniques, matériaux, énergie et programmation",
  topics: [
    {
      id: "besoin_fonction",
      name: "Besoin et fonction d'usage",
      emoji: "🎯",
      desc: "À quoi sert un objet technique ?",
      questions: [
        {
          text: "Qu'est-ce qu'un objet technique ?",
          options: ["un objet naturel comme un caillou", "un objet fabriqué par l'homme pour répondre à un besoin", "un objet vivant", "un objet trouvé dans la nature"],
          answer: 1,
          hint: "Il est conçu et fabriqué.",
          explication: "Un objet technique est conçu et fabriqué par l'être humain pour répondre à un besoin précis (se déplacer, communiquer, se nourrir…)."
        },
        {
          text: "Qu'est-ce que la fonction d'usage d'un objet technique ?",
          options: ["la matière dans laquelle il est fabriqué", "ce à quoi il sert — le service qu'il rend à l'utilisateur", "sa couleur et son design", "son prix de vente"],
          answer: 1,
          hint: "Pourquoi a-t-on besoin de cet objet ?",
          explication: "La fonction d'usage exprime le service rendu à l'utilisateur. Exemple : la fonction d'usage d'un stylo est 'd'écrire'."
        },
        {
          text: "Comment s'appelle l'expression qui résume la fonction d'usage d'un objet ?",
          options: ["le brevet d'invention", "la formule de service attendu", "le cahier des charges", "l'analyse fonctionnelle"],
          answer: 2,
          hint: "C'est un document qui décrit ce que l'objet doit faire.",
          explication: "Le cahier des charges recense les besoins à satisfaire et les contraintes à respecter pour la conception de l'objet."
        },
        {
          text: "Quelle est la fonction d'usage d'un réfrigérateur ?",
          options: ["chauffer les aliments", "conserver les aliments au froid", "cuire les aliments", "emballer les aliments"],
          answer: 1,
          hint: "Il maintient une basse température.",
          explication: "La fonction d'usage d'un réfrigérateur est de conserver les aliments en les maintenant à basse température pour ralentir leur dégradation."
        },
        {
          type: "vrai_faux",
          text: "Un objet technique peut remplir plusieurs fonctions d'usage simultanément.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Un smartphone : appeler, photographier, naviguer…",
          explication: "VRAI. Un smartphone remplit de nombreuses fonctions d'usage : téléphoner, prendre des photos, naviguer sur Internet, écouter de la musique, etc."
        },
        {
          text: "Qu'appelle-t-on la 'contrainte' dans la conception d'un objet ?",
          options: ["une exigence à respecter (budget, sécurité, environnement…)", "la couleur imposée", "la forme finale de l'objet", "la quantité à fabriquer"],
          answer: 0,
          hint: "Ce que l'objet ne doit pas dépasser ou doit respecter.",
          explication: "Une contrainte est une limite ou une exigence que l'objet doit respecter : budget maximum, normes de sécurité, impact environnemental, poids limite…"
        },
        {
          text: "L'analyse du besoin consiste à répondre à trois questions. Lesquelles ?",
          options: ["Qui ? Quoi ? Combien ?", "À qui rend-il service ? Sur quoi agit-il ? Dans quel but ?", "Comment ? Pourquoi ? Quand ?", "Qui fabrique ? Où ? Quand ?"],
          answer: 1,
          hint: "Méthode bête à cornes.",
          explication: "La méthode bête à cornes pose 3 questions : À qui rend-il service ? Sur quoi agit-il ? Dans quel but ? Ces réponses définissent la fonction principale."
        },
        {
          text: "Un objet technique qui devient obsolète signifie que…",
          options: ["il est très cher", "il ne répond plus aux besoins actuels ou a été remplacé par mieux", "il est trop grand", "il consomme trop d'électricité"],
          answer: 1,
          hint: "Les téléphones à cadran rotatif sont devenus obsolètes.",
          explication: "Un objet obsolète ne répond plus aux attentes actuelles (technologie dépassée, pièces introuvables, consommation trop élevée…). Les besoins évoluent et les objets aussi."
        },
        {
          type: "vrai_faux",
          text: "Le besoin doit être identifié avant de concevoir un objet technique.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "On ne conçoit pas une solution sans connaître le problème.",
          explication: "VRAI. Avant de concevoir un objet, il faut analyser le besoin : comprendre qui a besoin de quoi, dans quel contexte. C'est la base de la démarche de conception."
        },
        {
          text: "L'ergonomie d'un objet technique concerne…",
          options: ["sa résistance aux chocs", "son adaptation à l'utilisateur (confort, facilité d'utilisation)", "sa durée de vie", "sa couleur"],
          answer: 1,
          hint: "Un outil bien en main est 'ergonomique'.",
          explication: "L'ergonomie étudie l'adaptation de l'objet à l'être humain : prise en main, lisibilité des commandes, effort nécessaire, confort d'utilisation."
        }
      ]
    },
    {
      id: "fonctions_techniques",
      name: "Les fonctions techniques",
      emoji: "⚙️",
      desc: "Décomposer un objet en fonctions",
      questions: [
        {
          text: "Comment appelle-t-on les fonctions qui permettent à un objet de remplir sa fonction d'usage ?",
          options: ["fonctions d'estime", "fonctions techniques", "fonctions décoratives", "fonctions marginales"],
          answer: 1,
          hint: "Elles assurent le fonctionnement interne.",
          explication: "Les fonctions techniques sont les fonctions internes de l'objet qui permettent de réaliser la fonction d'usage. Exemple : dans un stylo, 'conduire l'encre vers la bille'."
        },
        {
          text: "La décomposition fonctionnelle d'un objet consiste à…",
          options: ["le démonter physiquement", "identifier et décrire chacune de ses fonctions internes", "le peindre différemment", "en faire une copie"],
          answer: 1,
          hint: "On analyse ce que fait chaque partie.",
          explication: "La décomposition fonctionnelle identifie les fonctions de chaque sous-ensemble de l'objet. Cela aide à comprendre comment il fonctionne et comment l'améliorer."
        },
        {
          text: "Dans un vélo, quelle est la fonction technique du dérailleur ?",
          options: ["freiner le vélo", "modifier le rapport de transmission (vitesse)", "diriger le vélo", "supporter le poids du cycliste"],
          answer: 1,
          hint: "Il change les vitesses.",
          explication: "Le dérailleur a pour fonction technique de déplacer la chaîne d'un pignon à l'autre, modifiant ainsi le rapport de transmission et facilitant la montée ou la descente."
        },
        {
          text: "Comment s'appelle le schéma qui représente les relations entre la fonction principale et les fonctions de contrainte d'un objet ?",
          options: ["diagramme de Gantt", "diagramme bête à cornes", "diagramme pieuvre (FAST)", "schéma cinématique"],
          answer: 2,
          hint: "Les 'pattes' représentent les interactions.",
          explication: "Le diagramme pieuvre (ou FAST) représente l'objet au centre et ses interactions avec son environnement. Chaque 'tentacule' est une fonction de service."
        },
        {
          type: "vrai_faux",
          text: "Un objet technique peut avoir plusieurs solutions pour réaliser la même fonction technique.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Un robinet peut s'ouvrir par rotation, par levier, ou par capteur.",
          explication: "VRAI. Il existe souvent plusieurs solutions techniques pour une même fonction : ouvrir un robinet peut se faire par poignée, levier, capteur infrarouge, etc."
        },
        {
          text: "La fonction 'assembler les pièces entre elles' dans un objet technique est une fonction…",
          options: ["d'estime", "technique", "d'usage", "esthétique"],
          answer: 1,
          hint: "Elle concerne le fonctionnement interne de l'objet.",
          explication: "L'assemblage des pièces est une fonction technique : elle assure la cohésion mécanique de l'objet mais n'est pas directement visible par l'utilisateur."
        },
        {
          text: "Quel est l'objectif principal d'une analyse fonctionnelle ?",
          options: ["calculer le prix de l'objet", "comprendre comment l'objet répond à son besoin pour concevoir ou améliorer", "décorer l'objet", "classer les objets par couleur"],
          answer: 1,
          hint: "C'est la base de la conception en technologie.",
          explication: "L'analyse fonctionnelle permet de comprendre le fonctionnement d'un objet existant ou de définir les exigences d'un objet à concevoir."
        },
        {
          text: "Dans une lampe de poche, la fonction 'convertir l'énergie électrique en lumière' est assurée par…",
          options: ["les piles", "l'interrupteur", "l'ampoule ou la LED", "le boîtier"],
          answer: 2,
          hint: "C'est la partie qui brille.",
          explication: "L'ampoule (ou la LED) convertit l'énergie électrique en lumière. C'est la fonction technique principale de la lampe."
        },
        {
          type: "vrai_faux",
          text: "Les fonctions techniques sont indépendantes les unes des autres : si une ne fonctionne pas, les autres continuent normalement.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Dans une lampe, si la pile est morte, la lampe ne s'allume pas.",
          explication: "FAUX. Les fonctions techniques sont souvent interdépendantes. Si une fonction de la chaîne ne fonctionne pas (pile morte), les fonctions aval (éclairer) ne peuvent pas s'exécuter."
        },
        {
          text: "Comment appelle-t-on la liste des exigences qu'un objet doit satisfaire pour être accepté ?",
          options: ["le planning de fabrication", "le cahier des charges fonctionnel", "le devis", "le brevet"],
          answer: 1,
          hint: "Document de référence pour la conception.",
          explication: "Le cahier des charges fonctionnel (CdCF) liste toutes les fonctions de service et les contraintes que l'objet doit satisfaire. C'est le document de référence du concepteur."
        }
      ]
    },
    {
      id: "materiaux",
      name: "Les familles de matériaux",
      emoji: "🪵",
      desc: "Métaux, plastiques, bois, verre, textiles",
      questions: [
        {
          text: "Combien de grandes familles de matériaux distingue-t-on en technologie ?",
          options: ["2", "3", "5", "10"],
          answer: 2,
          hint: "Métaux, plastiques, bois/papier, verre/céramique, textiles.",
          explication: "On distingue généralement 5 familles de matériaux : métaux et alliages, matières plastiques, bois et dérivés, verre et céramiques, textiles et composites."
        },
        {
          text: "Le fer, l'aluminium et le cuivre appartiennent à quelle famille de matériaux ?",
          options: ["plastiques", "bois", "métaux", "céramiques"],
          answer: 2,
          hint: "Ils conduisent l'électricité et la chaleur.",
          explication: "Le fer, l'aluminium et le cuivre sont des métaux. Ils sont généralement durs, brillants, conducteurs de l'électricité et de la chaleur."
        },
        {
          text: "Comment appelle-t-on un mélange de deux métaux ou plus ?",
          options: ["composite", "alliage", "polymère", "céramique"],
          answer: 1,
          hint: "L'acier est un alliage de fer et de carbone.",
          explication: "Un alliage est un mélange de deux métaux ou d'un métal avec un autre élément. L'acier (fer + carbone), le bronze (cuivre + étain) sont des alliages courants."
        },
        {
          text: "Le PET (bouteilles d'eau), le PVC (tuyaux) et le polystyrène appartiennent à quelle famille ?",
          options: ["métaux", "bois", "matières plastiques", "céramiques"],
          answer: 2,
          hint: "Ils sont issus de la pétrochimie.",
          explication: "Le PET, le PVC et le polystyrène sont des matières plastiques (polymères). Ils sont obtenus principalement à partir du pétrole."
        },
        {
          text: "Quelle famille de matériaux est issue de ressources naturelles renouvelables (forêts gérées durablement) ?",
          options: ["métaux", "plastiques", "bois et dérivés", "verre"],
          answer: 2,
          hint: "On peut replanter des arbres.",
          explication: "Le bois provient de forêts qui peuvent être replantées — c'est une ressource renouvelable, à condition que la gestion forestière soit durable."
        },
        {
          type: "vrai_faux",
          text: "Le verre est fabriqué principalement à partir de sable (silice).",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "La silice (SiO₂) est chauffée à très haute température.",
          explication: "VRAI. Le verre est obtenu en fondant du sable (silice, SiO₂) avec de la soude et du calcaire à très haute température (1 400–1 600 °C)."
        },
        {
          text: "Un matériau composite est…",
          options: ["un plastique recyclé", "un matériau associant plusieurs familles pour combiner leurs propriétés", "un métal léger", "un bois traité"],
          answer: 1,
          hint: "La fibre de carbone + résine époxy en est un exemple.",
          explication: "Un composite associe plusieurs matériaux (fibre + matrice) pour obtenir des propriétés supérieures à celles de chaque constituant seul : légèreté + résistance."
        },
        {
          text: "Quelle propriété caractérise le béton armé, matériau composite utilisé en construction ?",
          options: ["légèreté et flexibilité", "résistance à la traction (grâce aux armatures) et à la compression (grâce au béton)", "transparence", "conductivité électrique élevée"],
          answer: 1,
          hint: "Le béton résiste à l'écrasement, l'acier à la traction.",
          explication: "Le béton armé associe le béton (résistant à la compression) et des barres d'acier (résistantes à la traction). Ensemble, ils forment un matériau composite très résistant."
        },
        {
          type: "vrai_faux",
          text: "L'aluminium est plus léger que le fer à volume égal.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Densité aluminium ≈ 2,7 g/cm³ ; fer ≈ 7,9 g/cm³.",
          explication: "VRAI. L'aluminium (densité ≈ 2,7 g/cm³) est environ 3 fois plus léger que le fer (≈ 7,9 g/cm³). C'est pourquoi on l'utilise dans l'aéronautique et l'automobile."
        },
        {
          text: "Laquelle de ces affirmations sur les plastiques est correcte ?",
          options: ["ils sont tous recyclables", "la plupart proviennent du pétrole et mettent des siècles à se dégrader", "ils conduisent bien l'électricité", "ils résistent très mal à la chaleur"],
          answer: 1,
          hint: "C'est un défi environnemental majeur.",
          explication: "La plupart des plastiques sont issus du pétrole et se dégradent très lentement (des centaines à des milliers d'années). Seule une partie est réellement recyclée."
        }
      ]
    },
    {
      id: "proprietes_materiaux",
      name: "Propriétés et choix des matériaux",
      emoji: "🔩",
      desc: "Résistance, conductivité, flexibilité, choix approprié",
      questions: [
        {
          text: "Pourquoi utilise-t-on du cuivre pour les fils électriques ?",
          options: ["parce qu'il est très léger", "parce qu'il est un excellent conducteur électrique", "parce qu'il est peu cher", "parce qu'il résiste à la chaleur"],
          answer: 1,
          hint: "La conductivité électrique est sa propriété clé.",
          explication: "Le cuivre est utilisé pour les fils électriques car c'est l'un des meilleurs conducteurs électriques accessibles : il a une faible résistivité et est facile à mettre en fil."
        },
        {
          text: "Quelle propriété d'un matériau désigne sa capacité à reprendre sa forme initiale après une déformation ?",
          options: ["la dureté", "la plasticité", "l'élasticité", "la ductilité"],
          answer: 2,
          hint: "Un ressort ou du caoutchouc.",
          explication: "L'élasticité est la capacité d'un matériau à reprendre sa forme initiale après avoir été déformé. Le caoutchouc et l'acier trempé sont très élastiques."
        },
        {
          text: "Pourquoi utilise-t-on du verre pour les fenêtres plutôt que du bois ?",
          options: ["le verre est plus solide", "le verre est transparent et laisse passer la lumière", "le verre est moins cher", "le verre est plus chaud"],
          answer: 1,
          hint: "La transparence est la propriété clé.",
          explication: "Le verre est utilisé pour les fenêtres car il est transparent : il laisse passer la lumière visible tout en formant une barrière contre le vent et la pluie."
        },
        {
          text: "Qu'est-ce que la ductilité d'un métal ?",
          options: ["sa capacité à conduire la chaleur", "sa capacité à être étiré en fils sans se casser", "sa dureté", "sa résistance à la corrosion"],
          answer: 1,
          hint: "L'or et le cuivre sont très ductiles.",
          explication: "La ductilité est la propriété d'un métal à pouvoir être étiré en fils minces sans se rompre. L'or est le métal le plus ductile."
        },
        {
          type: "vrai_faux",
          text: "Le plastique est généralement un bon isolant thermique.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Les poignées de casseroles sont en plastique.",
          explication: "VRAI. Les plastiques conduisent peu la chaleur (mauvais conducteurs thermiques). C'est pourquoi on les utilise pour les poignées d'ustensiles de cuisine."
        },
        {
          text: "La corrosion du fer s'appelle…",
          options: ["l'oxydation uniquement", "la rouille", "la fusion", "la carbonisation"],
          answer: 1,
          hint: "C'est la couche orange-marron qui se forme.",
          explication: "La rouille est la corrosion du fer en présence d'eau et d'oxygène : le fer s'oxyde et se transforme en oxydes de fer (FeO, Fe₂O₃) de couleur rougeâtre."
        },
        {
          text: "Comment protège-t-on l'acier de la rouille dans la carrosserie d'une voiture ?",
          options: ["en le refroidissant", "en le peignant et en appliquant une galvanisation (couche de zinc)", "en l'enveloppant dans du plastique", "en le chauffant régulièrement"],
          answer: 1,
          hint: "Le zinc se corrode à la place du fer.",
          explication: "La peinture isole l'acier de l'humidité. La galvanisation dépose une couche de zinc qui, en se corrodant en premier, protège le fer en dessous."
        },
        {
          text: "Pour fabriquer un câble de pont suspendu, quelle propriété est la plus importante ?",
          options: ["transparence", "résistance à la traction et haute résistance mécanique", "légèreté absolue", "facilité de mise en couleur"],
          answer: 1,
          hint: "Le câble doit supporter un poids énorme.",
          explication: "Les câbles de ponts suspendus sont soumis à d'énormes forces de traction. On choisit donc l'acier à haute résistance mécanique (câbles de fils d'acier tressés)."
        },
        {
          type: "vrai_faux",
          text: "Un matériau fragile casse sans se déformer (peu d'énergie absorbée avant la rupture).",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le verre se casse net, il ne se déforme pas.",
          explication: "VRAI. Un matériau fragile (comme le verre ou la céramique) casse brusquement sans se déformer. À l'inverse, un matériau ductile (comme l'acier doux) se déforme avant de rompre."
        },
        {
          text: "Pour choisir un matériau adapté, on doit prendre en compte…",
          options: ["uniquement sa résistance mécanique", "ses propriétés techniques, son coût, son impact environnemental et sa disponibilité", "uniquement son prix", "uniquement son esthétique"],
          answer: 1,
          hint: "Le choix est toujours un compromis.",
          explication: "Le choix d'un matériau est un compromis entre propriétés techniques requises, coût, disponibilité, facilité de mise en œuvre et impact environnemental (recyclabilité, ressources)."
        }
      ]
    },
    {
      id: "energies",
      name: "Les énergies",
      emoji: "🔋",
      desc: "Sources d'énergie, conversions, économies",
      questions: [
        {
          text: "Quelle est la source d'énergie principale utilisée dans les centrales électriques en France ?",
          options: ["le pétrole", "le charbon", "l'énergie nucléaire", "le gaz naturel"],
          answer: 2,
          hint: "La France est un des pays les plus nucléarisés du monde.",
          explication: "En France, environ 70 % de l'électricité est produite par les centrales nucléaires qui utilisent la fission de l'uranium."
        },
        {
          text: "Quelle est la différence entre énergie renouvelable et non renouvelable ?",
          options: ["l'une coûte plus cher", "l'une se renouvelle naturellement (soleil, vent), l'autre s'épuise (pétrole, gaz)", "l'une est verte, l'autre est noire", "l'une est électrique, l'autre non"],
          answer: 1,
          hint: "Le soleil ne s'épuisera pas à notre échelle.",
          explication: "Les énergies renouvelables (soleil, vent, eau, géothermie) se renouvellent naturellement. Les énergies fossiles (pétrole, gaz, charbon) sont en quantité limitée et mettent des millions d'années à se former."
        },
        {
          text: "Quelle est la forme d'énergie que l'on consomme pour allumer une lampe ?",
          options: ["énergie mécanique", "énergie électrique", "énergie chimique", "énergie nucléaire"],
          answer: 1,
          hint: "Elle circule dans les fils.",
          explication: "Pour allumer une lampe, on consomme de l'énergie électrique qui est convertie en énergie lumineuse (et une partie en chaleur)."
        },
        {
          text: "Une pile convertit quelle forme d'énergie en énergie électrique ?",
          options: ["énergie lumineuse", "énergie mécanique", "énergie chimique", "énergie nucléaire"],
          answer: 2,
          hint: "Des réactions chimiques se produisent à l'intérieur.",
          explication: "Une pile électrochimique convertit l'énergie chimique (stockée dans ses réactifs) en énergie électrique grâce à des réactions d'oxydoréduction."
        },
        {
          type: "vrai_faux",
          text: "L'énergie ne peut pas être créée ni détruite, seulement convertie d'une forme à une autre.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est le principe de conservation de l'énergie.",
          explication: "VRAI. C'est le premier principe de la thermodynamique : l'énergie totale d'un système isolé reste constante. Elle peut changer de forme mais pas disparaître ni apparaître."
        },
        {
          text: "Qu'est-ce que l'énergie solaire photovoltaïque ?",
          options: ["la conversion de la chaleur du soleil en vapeur", "la conversion de la lumière du soleil en électricité via des cellules photovoltaïques", "le chauffage direct par le soleil", "la conversion du vent en électricité"],
          answer: 1,
          hint: "Les panneaux solaires sur les toits.",
          explication: "Les cellules photovoltaïques convertissent directement la lumière solaire en électricité par effet photoélectrique. C'est différent du solaire thermique qui chauffe un fluide."
        },
        {
          text: "Qu'est-ce qu'une éolienne ?",
          options: ["un barrage hydraulique", "une machine qui convertit l'énergie du vent en électricité", "une centrale thermique", "un panneau solaire"],
          answer: 1,
          hint: "Elle tourne grâce au vent.",
          explication: "Une éolienne convertit l'énergie cinétique du vent en énergie électrique via des pales et un générateur. C'est une énergie renouvelable et non polluante."
        },
        {
          text: "Qu'appelle-t-on 'rendement' d'un système énergétique ?",
          options: ["sa vitesse de fonctionnement", "le rapport entre l'énergie utile produite et l'énergie totale consommée", "sa puissance maximale", "sa durée de vie"],
          answer: 1,
          hint: "Une ampoule à 90 % de pertes en chaleur a un mauvais rendement.",
          explication: "Le rendement est le rapport entre l'énergie utile (ce qu'on veut) et l'énergie totale consommée. Un rendement de 100 % est impossible (il y a toujours des pertes)."
        },
        {
          type: "vrai_faux",
          text: "L'hydroélectricité utilise l'eau des rivières et des barrages pour produire de l'électricité.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Les barrages comme celui de Serre-Ponçon.",
          explication: "VRAI. L'hydroélectricité convertit l'énergie potentielle et cinétique de l'eau en électricité grâce à des turbines. C'est la principale source d'énergie renouvelable en France."
        },
        {
          text: "Pourquoi les ampoules LED sont-elles préférées aux ampoules à incandescence ?",
          options: ["elles sont moins lumineuses", "elles ont un meilleur rendement (moins de pertes en chaleur) et durent plus longtemps", "elles sont moins chères à l'achat", "elles fonctionnent sans électricité"],
          answer: 1,
          hint: "Moins de chaleur = plus de lumière pour la même énergie.",
          explication: "Les LED ont un rendement lumineux bien supérieur aux ampoules à incandescence (qui convertissent 90 % de l'énergie en chaleur perdue) et durent 15 à 25 fois plus longtemps."
        }
      ]
    },
    {
      id: "representer_objet",
      name: "Représenter un objet technique",
      emoji: "📐",
      desc: "Croquis, schéma, dessin technique",
      questions: [
        {
          text: "Quel est l'objectif principal d'un dessin technique ?",
          options: ["décorer l'objet", "communiquer des informations précises sur la forme et les dimensions d'un objet", "choisir la couleur de l'objet", "montrer le fonctionnement interne"],
          answer: 1,
          hint: "Il doit être compris par tous les fabricants.",
          explication: "Le dessin technique est un langage universel qui permet de communiquer des informations précises (formes, dimensions, matériaux) pour fabriquer un objet de façon identique partout."
        },
        {
          text: "Combien de vues standard utilise-t-on en dessin technique (norme européenne) ?",
          options: ["1 vue", "2 vues", "3 vues principales (face, dessus, côté)", "6 vues"],
          answer: 2,
          hint: "Face, dessus et côté droit.",
          explication: "En dessin technique (norme ISO), on utilise 3 vues principales : la vue de face (devant), la vue de dessus (au-dessus) et la vue de côté (à gauche ou droite)."
        },
        {
          text: "Qu'est-ce qu'un croquis (esquisse) en technologie ?",
          options: ["un dessin technique précis avec toutes les cotes", "un dessin rapide et à main levée pour représenter une idée", "un plan d'architecte", "une vue en coupe"],
          answer: 1,
          hint: "On l'utilise pour communiquer rapidement une idée.",
          explication: "Le croquis (ou esquisse) est un dessin rapide fait à main levée. Il sert à exprimer une idée de conception sans exiger de précision dimensionnelle."
        },
        {
          text: "Qu'est-ce qu'une coupe dans un dessin technique ?",
          options: ["une vue de l'objet de côté", "une représentation de l'intérieur de l'objet comme si on l'avait coupé", "une vue en perspective", "une vue de dessus uniquement"],
          answer: 1,
          hint: "Permet de voir l'intérieur d'une pièce creuse.",
          explication: "Une vue en coupe montre l'intérieur de l'objet comme s'il avait été tranché. Elle permet de voir les formes cachées (alésages, rainures, épaisseurs)."
        },
        {
          type: "vrai_faux",
          text: "Sur un dessin technique, les lignes en tirets représentent les arêtes ou contours invisibles.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Ce qu'on ne voit pas de l'extérieur.",
          explication: "VRAI. Les lignes en tirets (pointillés) représentent les arêtes ou contours cachés à la vue considérée : trous, rainures ou formes à l'intérieur de l'objet."
        },
        {
          text: "Qu'est-ce qu'une cotation sur un dessin technique ?",
          options: ["la couleur indiquée sur le dessin", "l'indication des dimensions (longueur, largeur, diamètre) avec les valeurs numériques", "la liste des matériaux", "le nom du concepteur"],
          answer: 1,
          hint: "Les flèches avec des chiffres sur le plan.",
          explication: "La cotation indique les dimensions de l'objet (longueur, largeur, hauteur, diamètre) avec des lignes de cote, des flèches et des valeurs numériques."
        },
        {
          text: "Dans quel logiciel de CAO (Conception Assistée par Ordinateur) peut-on créer des dessins techniques en 3D ?",
          options: ["Word", "Excel", "Fusion 360 ou SolidWorks", "Paint"],
          answer: 2,
          hint: "Ce ne sont pas des logiciels de bureautique.",
          explication: "Les logiciels de CAO comme Fusion 360, SolidWorks ou FreeCAD permettent de créer des modèles 3D et des dessins techniques de pièces mécaniques."
        },
        {
          text: "Une vue en perspective isométrique sert à…",
          options: ["montrer l'intérieur de l'objet", "donner une vision en 3D de l'objet pour le visualiser facilement", "mesurer précisément les dimensions", "montrer uniquement la vue de dessus"],
          answer: 1,
          hint: "Elle montre l'objet 'en volume'.",
          explication: "La perspective isométrique représente l'objet en 3D sur une surface 2D, avec les trois axes à 120° les uns des autres. Elle aide à visualiser l'objet mais ne permet pas de mesurer directement."
        },
        {
          type: "vrai_faux",
          text: "Un dessin technique à l'échelle 1:2 signifie que l'objet dessiné est deux fois plus grand que la réalité.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "1:2 = dessin deux fois plus petit que la réalité.",
          explication: "FAUX. L'échelle 1:2 signifie que le dessin est deux fois plus petit que l'objet réel. L'échelle 2:1 signifierait que le dessin est deux fois plus grand."
        },
        {
          text: "Quel outil informatique permet de simuler le comportement d'un objet avant de le fabriquer ?",
          options: ["un traitement de texte", "un logiciel de simulation ou de CAO avec analyse par éléments finis", "un tableur", "un navigateur Web"],
          answer: 1,
          hint: "On peut tester sa résistance sans le fabriquer.",
          explication: "Les logiciels de simulation (comme SolidWorks Simulation) permettent de tester virtuellement la résistance, la déformation ou le comportement thermique d'un objet avant sa fabrication."
        }
      ]
    },
    {
      id: "fabrication",
      name: "Les étapes de fabrication",
      emoji: "🏭",
      desc: "Procédés de fabrication, gamme opératoire",
      questions: [
        {
          text: "Comment s'appelle le document qui décrit l'ordre et les opérations nécessaires pour fabriquer un objet ?",
          options: ["le cahier des charges", "la gamme opératoire (ou gamme de fabrication)", "le dessin technique", "le devis"],
          answer: 1,
          hint: "Comme une recette de cuisine pour l'industrie.",
          explication: "La gamme opératoire liste dans l'ordre toutes les opérations de fabrication, les outils utilisés et les contrôles à effectuer à chaque étape."
        },
        {
          text: "Lequel de ces procédés permet de donner une forme à un métal en le chauffant et en le comprimant dans un moule ?",
          options: ["l'usinage", "le moulage ou le forgeage", "le collage", "la découpe laser"],
          answer: 1,
          hint: "On chauffe le métal pour le ramollir puis on le forme.",
          explication: "Le moulage et le forgeage permettent de donner une forme à un métal chaud (ou liquide pour le moulage) en l'introduisant dans un moule ou en le frappant."
        },
        {
          text: "Qu'est-ce que l'usinage ?",
          options: ["assembler des pièces par vissage", "enlever de la matière pour donner une forme précise", "imprimer une pièce en 3D", "coller des pièces ensemble"],
          answer: 1,
          hint: "Le tournage et le fraisage en sont des exemples.",
          explication: "L'usinage consiste à enlever de la matière par abrasion ou coupe (tour, fraiseuse, perceuse) pour donner une forme précise à une pièce."
        },
        {
          text: "L'impression 3D est un procédé de fabrication dit…",
          options: ["par enlèvement de matière", "par déformation", "par ajout de matière (fabrication additive)", "par moulage uniquement"],
          answer: 2,
          hint: "On ajoute des couches de matière successives.",
          explication: "L'impression 3D (fabrication additive) construit l'objet couche par couche en ajoutant de la matière (plastique, métal, béton…). C'est l'inverse de l'usinage."
        },
        {
          type: "vrai_faux",
          text: "Dans une chaîne de production industrielle, chaque poste de travail effectue toujours toutes les opérations.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Ford a inventé la chaîne de montage spécialisée.",
          explication: "FAUX. Dans une chaîne de production, le travail est divisé : chaque poste effectue une opération spécialisée. Cela augmente la cadence et réduit les erreurs."
        },
        {
          text: "Qu'est-ce que le contrôle qualité dans une production industrielle ?",
          options: ["décorer les pièces fabriquées", "vérifier que les pièces respectent les dimensions et les propriétés prévues", "accélérer la production", "choisir les matières premières"],
          answer: 1,
          hint: "On mesure et on compare aux tolérances.",
          explication: "Le contrôle qualité vérifie que les pièces produites respectent les dimensions, les propriétés et les normes définies dans le cahier des charges. Les pièces non conformes sont écartées."
        },
        {
          text: "Quelle technique d'assemblage utilise un faisceau lumineux très concentré pour fondre et souder deux pièces métalliques ?",
          options: ["le vissage", "le collage", "la soudure (à l'arc ou au laser)", "le rivetage"],
          answer: 2,
          hint: "Un point de fusion très localisé.",
          explication: "La soudure (à l'arc électrique, au laser ou au chalumeau) utilise une source de chaleur intense pour fondre localement les deux pièces et les assembler après refroidissement."
        },
        {
          text: "Qu'est-ce que le prototypage rapide ?",
          options: ["la fabrication en série à grande vitesse", "la réalisation d'une maquette fonctionnelle pour tester un concept avant la production en série", "la vente rapide du produit", "la modification du cahier des charges"],
          answer: 1,
          hint: "On teste avant de lancer la production.",
          explication: "Le prototypage rapide consiste à fabriquer rapidement (souvent par impression 3D) un prototype pour tester la forme, l'assemblage et les fonctions avant la fabrication en série."
        },
        {
          type: "vrai_faux",
          text: "La découpe laser peut être utilisée pour couper du bois, du plastique ou du métal.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est une technique polyvalente.",
          explication: "VRAI. La découpe laser est polyvalente : elle peut découper de nombreux matériaux (bois, plastique, métal, tissu…) selon la puissance du laser utilisé."
        },
        {
          text: "Qu'est-ce que la maintenance préventive d'une machine ?",
          options: ["réparer une machine en panne", "effectuer des vérifications et des entretiens réguliers pour éviter les pannes", "remplacer la machine par une neuve", "nettoyer la machine uniquement"],
          answer: 1,
          hint: "Mieux vaut prévenir que guérir.",
          explication: "La maintenance préventive consiste à entretenir régulièrement une machine (graissage, remplacement de pièces d'usure, vérifications) pour prévenir les pannes et prolonger sa durée de vie."
        }
      ]
    },
    {
      id: "objets_programmables",
      name: "Objets programmables et capteurs",
      emoji: "🤖",
      desc: "Arduino, capteurs, actionneurs",
      questions: [
        {
          text: "Qu'est-ce qu'un objet programmable ?",
          options: ["un objet qui se répare tout seul", "un objet dont le comportement peut être modifié par un programme informatique", "un objet très cher", "un robot humanoïde uniquement"],
          answer: 1,
          hint: "Ton smartphone, ta machine à laver, un Arduino.",
          explication: "Un objet programmable contient un microcontrôleur ou un processeur dont le comportement est défini par un programme : on peut le modifier pour changer ce que fait l'objet."
        },
        {
          text: "Qu'est-ce qu'un capteur dans un objet technique ?",
          options: ["un composant qui consomme de l'énergie pour agir sur l'environnement", "un composant qui détecte une grandeur physique et la convertit en signal exploitable", "un composant qui stocke de l'énergie", "un composant d'affichage"],
          answer: 1,
          hint: "Un thermomètre numérique mesure la température.",
          explication: "Un capteur mesure une grandeur physique (température, lumière, distance, pression…) et la convertit en signal électrique utilisable par le système de contrôle."
        },
        {
          text: "Qu'est-ce qu'un actionneur dans un objet technique ?",
          options: ["un composant qui mesure", "un composant qui agit sur l'environnement en convertissant une énergie en mouvement ou en effet", "un composant qui stocke l'information", "un capteur amélioré"],
          answer: 1,
          hint: "Un moteur, une LED, un haut-parleur.",
          explication: "Un actionneur reçoit un signal de commande et produit un effet physique : mouvement (moteur), son (haut-parleur), lumière (LED), chaleur (résistance chauffante)."
        },
        {
          text: "Lequel de ces composants est un capteur de lumière ?",
          options: ["une LED", "une photorésistance (LDR)", "un moteur", "un haut-parleur"],
          answer: 1,
          hint: "Sa résistance varie selon la lumière reçue.",
          explication: "Une photorésistance (LDR — Light Dependent Resistor) est un capteur de lumière : sa résistance électrique diminue quand la lumière augmente."
        },
        {
          type: "vrai_faux",
          text: "Arduino est une carte électronique programmable très utilisée en éducation pour créer des projets interactifs.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Elle se programme en C++ simplifié.",
          explication: "VRAI. Arduino est une plateforme électronique open-source composée d'un microcontrôleur et d'un environnement de développement simplifié, très utilisée en éducation et dans les fab labs."
        },
        {
          text: "Dans un système de porte automatique, quel composant détecte une personne qui approche ?",
          options: ["le moteur", "le capteur infrarouge ou de présence", "la batterie", "le panneau de la porte"],
          answer: 1,
          hint: "Il détecte le mouvement ou la chaleur corporelle.",
          explication: "Un capteur infrarouge passif (PIR) ou ultrasonique détecte la présence ou le mouvement d'une personne et envoie un signal pour ouvrir la porte via un moteur."
        },
        {
          text: "Comment s'appelle la chaîne de traitement d'un système automatique ?",
          options: ["capteur → traitement → actionneur", "actionneur → capteur → traitement", "traitement → actionneur → capteur", "capteur → actionneur → traitement"],
          answer: 0,
          hint: "Acquérir → traiter → agir.",
          explication: "La chaîne de traitement suit toujours : capteur (acquérir l'information) → traitement (prendre une décision) → actionneur (agir sur l'environnement)."
        },
        {
          text: "Un thermomètre connecté qui envoie la température sur Internet est un exemple de…",
          options: ["réseau Wi-Fi", "objet connecté (IoT — Internet des objets)", "intelligence artificielle", "robotique avancée"],
          answer: 1,
          hint: "IoT = Internet of Things.",
          explication: "Un objet connecté (IoT) combine un capteur, un système de traitement et une connexion réseau pour transmettre des données à distance. Le thermomètre connecté en est un exemple simple."
        },
        {
          type: "vrai_faux",
          text: "Un moteur est à la fois un capteur et un actionneur.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Un moteur transforme l'énergie électrique en mouvement.",
          explication: "FAUX. Un moteur est un actionneur : il reçoit de l'énergie électrique et produit un mouvement. Ce n'est pas un capteur (qui mesurerait une grandeur physique)."
        },
        {
          text: "Quelle est la différence entre un système automatique et un système autonome ?",
          options: ["il n'y a pas de différence", "automatique : répond à des règles fixes préprogrammées ; autonome : s'adapte à l'environnement (IA)", "automatique utilise le Wi-Fi, autonome non", "automatique est plus cher"],
          answer: 1,
          hint: "Un robot autonome prend des décisions.",
          explication: "Un système automatique exécute des séquences prédéfinies selon des règles fixes. Un système autonome (avec IA) analyse son environnement et adapte son comportement."
        }
      ]
    },
    {
      id: "algorithmique",
      name: "Algorithmique et programmation par blocs",
      emoji: "🖥️",
      desc: "Algorithmes, Scratch, structures de contrôle",
      questions: [
        {
          text: "Qu'est-ce qu'un algorithme ?",
          options: ["un langage de programmation", "une suite d'instructions ordonnées pour résoudre un problème ou accomplir une tâche", "un type de robot", "un logiciel de traitement de texte"],
          answer: 1,
          hint: "Comme une recette de cuisine : étape 1, étape 2…",
          explication: "Un algorithme est une suite finie d'instructions précises et ordonnées permettant de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine est un algorithme."
        },
        {
          text: "Scratch est un environnement de programmation qui utilise…",
          options: ["du code texte en Python", "des blocs visuels que l'on assemble", "des formules mathématiques", "un clavier spécial"],
          answer: 1,
          hint: "On glisse-dépose les blocs pour programmer.",
          explication: "Scratch est un environnement de programmation visuelle par blocs : on assemble des blocs comme des pièces de puzzle pour créer des programmes sans écrire de code texte."
        },
        {
          text: "Dans un programme, que fait une boucle (répétition) ?",
          options: ["elle arrête le programme", "elle exécute un bloc d'instructions plusieurs fois", "elle affiche un résultat", "elle déclare une variable"],
          answer: 1,
          hint: "Répète 10 fois : avancer de 10 pas.",
          explication: "Une boucle (ou structure de répétition) exécute le même bloc d'instructions plusieurs fois, soit un nombre fixe de fois, soit tant qu'une condition est vraie."
        },
        {
          text: "Dans un programme, que fait une structure conditionnelle (si…alors…sinon) ?",
          options: ["elle répète une action", "elle exécute différentes instructions selon si une condition est vraie ou fausse", "elle affiche un message", "elle arrête le programme"],
          answer: 1,
          hint: "Si la touche est pressée, alors avancer, sinon s'arrêter.",
          explication: "La structure conditionnelle (si…alors…sinon) permet au programme de prendre des décisions en exécutant des blocs d'instructions différents selon si une condition est vérifiée."
        },
        {
          type: "vrai_faux",
          text: "Un programme informatique s'exécute toujours dans l'ordre des instructions, de haut en bas.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Sauf si une boucle ou une condition change cet ordre.",
          explication: "VRAI. Par défaut, un programme s'exécute séquentiellement de la première à la dernière instruction. Les boucles et les conditions modifient localement cet ordre d'exécution."
        },
        {
          text: "Qu'est-ce qu'une variable en programmation ?",
          options: ["une instruction qui répète une action", "un espace mémoire qui stocke une valeur pouvant changer", "une couleur dans Scratch", "un type de boucle"],
          answer: 1,
          hint: "Comme une boîte avec une étiquette : score = 10.",
          explication: "Une variable est un espace mémoire identifié par un nom qui stocke une valeur (nombre, texte, booléen). Sa valeur peut être modifiée au cours du programme."
        },
        {
          text: "Dans Scratch, quel bloc permet de détecter si une touche du clavier est pressée ?",
          options: ["un bloc de mouvement", "un bloc capteur (si touche [espace] pressée ?)", "un bloc son", "un bloc apparence"],
          answer: 1,
          hint: "Les blocs capteurs sont généralement ovales.",
          explication: "Dans Scratch, les blocs capteurs (catégorie 'Capteurs') permettent de détecter des interactions : touche pressée, souris cliquée, collision avec un autre sprite…"
        },
        {
          text: "Comment débogue-t-on un programme qui ne fonctionne pas comme prévu ?",
          options: ["on le supprime et on recommence", "on l'exécute pas à pas pour identifier l'instruction qui provoque l'erreur", "on attend que le problème se résoudre seul", "on change de logiciel"],
          answer: 1,
          hint: "Comme chercher une erreur dans un calcul.",
          explication: "Le débogage consiste à exécuter le programme pas à pas et à vérifier l'état du programme à chaque étape pour identifier quelle instruction cause un comportement inattendu."
        },
        {
          type: "vrai_faux",
          text: "En programmation par blocs (Scratch), une boucle 'répéter indéfiniment' continue jusqu'à ce qu'on arrête le programme.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Elle ne s'arrête pas d'elle-même.",
          explication: "VRAI. La boucle 'répéter indéfiniment' (forever) de Scratch ne s'arrête jamais seule : elle continue jusqu'à ce que le programme soit arrêté manuellement ou qu'une condition l'interrompe."
        },
        {
          text: "À quoi sert le bloc 'Quand ⚑ cliqué' dans Scratch ?",
          options: ["à dessiner un drapeau", "à déclencher le script lorsqu'on clique sur le drapeau vert (démarrer le programme)", "à changer la couleur du sprite", "à ajouter un son"],
          answer: 1,
          hint: "C'est le point de départ de tout programme Scratch.",
          explication: "Le bloc 'Quand ⚑ cliqué' est le déclencheur principal : lorsque l'utilisateur clique sur le drapeau vert, le script qui lui est attaché commence à s'exécuter."
        }
      ]
    },
    {
      id: "evolution_objets",
      name: "Évolution des objets techniques",
      emoji: "📱",
      desc: "Du passé au futur : comment évoluent les objets",
      questions: [
        {
          text: "Comment appelle-t-on le processus par lequel un objet technique est progressivement remplacé par un modèle plus performant ?",
          options: ["la destruction", "l'innovation technologique", "le recyclage", "la normalisation"],
          answer: 1,
          hint: "Du téléphone à cadran au smartphone.",
          explication: "L'innovation technologique est le processus par lequel de nouvelles solutions remplacent les anciennes en offrant de meilleures performances, un moindre coût ou un moindre impact environnemental."
        },
        {
          text: "Quel facteur principal a permis la miniaturisation des appareils électroniques ?",
          options: ["l'utilisation du bois", "le développement des circuits intégrés et des microprocesseurs", "l'augmentation des batteries", "l'utilisation de matériaux plus lourds"],
          answer: 1,
          hint: "De plus en plus de transistors dans un espace de plus en plus petit.",
          explication: "La loi de Moore décrit la miniaturisation des circuits intégrés : le nombre de transistors double tous les 2 ans. Cela a permis de créer des processeurs puissants dans des espaces infimes."
        },
        {
          text: "Qu'est-ce que l'obsolescence programmée ?",
          options: ["la mise à jour automatique d'un objet", "la conception délibérée d'un objet pour qu'il devienne inutilisable après un certain temps", "le recyclage d'un objet", "la durée de garantie légale"],
          answer: 1,
          hint: "Certains fabricants seraient accusés de faire ça avec les smartphones.",
          explication: "L'obsolescence programmée est la pratique consistant à concevoir un objet pour qu'il soit difficile à réparer, que ses pièces deviennent introuvables ou qu'une mise à jour logicielle le ralentisse."
        },
        {
          text: "Qu'est-ce que l'éco-conception d'un objet technique ?",
          options: ["concevoir un objet vert de couleur", "intégrer dès la conception les impacts environnementaux de l'objet sur tout son cycle de vie", "ne pas utiliser d'électricité", "fabriquer en forêt"],
          answer: 1,
          hint: "Du berceau à la tombe.",
          explication: "L'éco-conception intègre les impacts environnementaux dès la phase de conception : choix des matériaux, consommation d'énergie en fonctionnement, recyclabilité en fin de vie."
        },
        {
          type: "vrai_faux",
          text: "Les objets techniques ont toujours évolué principalement pour répondre à de nouveaux besoins ou améliorer les performances.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Des besoins nouveaux → de nouveaux objets.",
          explication: "VRAI. L'évolution des objets techniques est généralement motivée par de nouveaux besoins (communiquer à distance), des contraintes (économiser l'énergie) ou des avancées scientifiques."
        },
        {
          text: "Quel objet technique a remplacé la machine à écrire dans les bureaux ?",
          options: ["le téléphone fixe", "le magnétoscope", "l'ordinateur avec traitement de texte", "la photocopieuse"],
          answer: 2,
          hint: "Il permet aussi de corriger sans correcteur blanc.",
          explication: "L'ordinateur avec logiciel de traitement de texte a remplacé la machine à écrire : il permet de corriger, de mettre en forme, d'enregistrer et d'imprimer facilement."
        },
        {
          text: "Qu'est-ce que le cycle de vie d'un produit ?",
          options: ["la durée de sa garantie", "l'ensemble des étapes de sa vie : extraction des matériaux → fabrication → utilisation → fin de vie", "le nombre d'utilisateurs", "la durée de sa publicité"],
          answer: 1,
          hint: "De la naissance à la mort de l'objet.",
          explication: "Le cycle de vie d'un produit couvre toutes ses étapes : extraction des matières premières, fabrication, transport, utilisation, et fin de vie (recyclage, déchets)."
        },
        {
          text: "Comment s'appelle le principe qui consiste à fabriquer moins mais mieux, et à réparer plutôt que jeter ?",
          options: ["l'économie linéaire", "l'économie circulaire", "l'économie de marché", "l'économie numérique"],
          answer: 1,
          hint: "Boucler la boucle : réduire, réutiliser, recycler.",
          explication: "L'économie circulaire s'oppose à l'économie linéaire (extraire → fabriquer → jeter). Elle vise à prolonger la durée de vie des produits, réparer, réutiliser et recycler."
        },
        {
          type: "vrai_faux",
          text: "L'impression 3D est une technologie de fabrication additive qui n'existait pas avant les années 1980.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Elle a été inventée par Chuck Hull en 1984.",
          explication: "VRAI. La stéréolithographie (première forme d'impression 3D) a été inventée par Chuck Hull en 1984. L'impression 3D grand public s'est développée dans les années 2010."
        },
        {
          text: "Pourquoi les voitures électriques se développent-elles au détriment des voitures thermiques ?",
          options: ["elles vont plus vite", "elles émettent moins de CO₂ à l'usage et réduisent la dépendance au pétrole", "elles coûtent moins cher", "elles nécessitent moins d'entretien"],
          answer: 1,
          hint: "Enjeux climatiques et énergétiques.",
          explication: "Les voitures électriques émettent moins de CO₂ à l'usage (surtout si l'électricité est décarbonée) et réduisent la dépendance au pétrole. C'est une réponse aux enjeux climatiques et énergétiques."
        }
      ]
    }
  ]
};
