/* Matière : Physique-Chimie ⚗️ (6ème)
   10 thèmes × 10 questions = 100 questions
   Programme officiel 6ème : matière, mélanges, électricité, lumière. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["physchim"] = {
  id: "physchim",
  name: "Physique-Chimie",
  emoji: "⚗️",
  desc: "Matière, mélanges, électricité et lumière",
  topics: [
    {
      id: "etats_matiere",
      name: "Les états de la matière",
      emoji: "🧊",
      desc: "Solide, liquide, gaz",
      questions: [
        {
          text: "Combien d'états de la matière existe-t-il en physique-chimie ?",
          options: ["2", "3", "4", "5"],
          answer: 1,
          hint: "Solide, liquide et…",
          explication: "Il existe 3 états de la matière : solide, liquide et gazeux."
        },
        {
          text: "Quel est l'état de la matière dans lequel les molécules sont très espacées et se déplacent librement dans toutes les directions ?",
          options: ["solide", "liquide", "gazeux", "plasma"],
          answer: 2,
          hint: "Cet état n'a ni forme ni volume propre.",
          explication: "À l'état gazeux, les molécules sont très éloignées et se déplacent librement : le gaz occupe tout l'espace disponible."
        },
        {
          text: "Un solide a-t-il une forme propre ?",
          options: ["Non, il prend la forme du récipient", "Oui, il conserve sa forme", "Cela dépend de la température", "Il n'a pas de forme"],
          answer: 1,
          hint: "Contrairement au liquide.",
          explication: "Un solide a une forme propre qu'il conserve : il ne s'adapte pas à la forme du récipient."
        },
        {
          text: "Lequel de ces exemples est un solide ?",
          options: ["le lait", "l'air", "un glaçon", "le jus d'orange"],
          answer: 2,
          hint: "Il faut le casser pour le déformer.",
          explication: "Un glaçon est un solide (de l'eau à l'état solide). Le lait et le jus sont des liquides, l'air est un gaz."
        },
        {
          text: "Quel état de la matière prend la forme du récipient mais conserve un volume constant ?",
          options: ["solide", "liquide", "gazeux", "aucun"],
          answer: 1,
          hint: "Verse de l'eau dans un verre puis dans une bouteille.",
          explication: "Le liquide prend la forme du récipient mais son volume ne change pas, contrairement au gaz qui remplit tout l'espace."
        },
        {
          text: "La vapeur d'eau est à quel état ?",
          options: ["solide", "liquide", "gazeux", "solide et liquide"],
          answer: 2,
          hint: "La vapeur est invisible et se propage dans l'air.",
          explication: "La vapeur d'eau est de l'eau à l'état gazeux. Elle est invisible (le « nuage blanc » au-dessus d'une casserole est de la condensation)."
        },
        {
          type: "vrai_faux",
          text: "Un gaz peut être compressé (son volume peut diminuer si on le comprime).",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Pense aux bouteilles de gaz ou aux pneus de vélo.",
          explication: "VRAI. Contrairement aux liquides et aux solides, les gaz sont compressibles car leurs molécules sont très espacées."
        },
        {
          text: "Comment appelle-t-on la matière constituée de molécules très serrées et organisées ?",
          options: ["gazeuse", "liquide", "solide", "vapeur"],
          answer: 2,
          hint: "Elles ne peuvent quasiment pas bouger.",
          explication: "À l'état solide, les molécules sont très proches et organisées en structure régulière — elles vibrent sur place mais ne se déplacent pas."
        },
        {
          type: "vrai_faux",
          text: "Un liquide conserve toujours le même volume, peu importe la forme du récipient.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Verse 250 mL d'eau dans deux verres de forme différente.",
          explication: "VRAI. Le volume d'un liquide est conservé : verser 250 mL d'eau dans un verre large ou un verre haut donne toujours 250 mL."
        },
        {
          text: "L'oxygène que nous respirons est à quel état à température ambiante ?",
          options: ["solide", "liquide", "gazeux", "plasma"],
          answer: 2,
          hint: "Tu ne vois pas l'air, et pourtant tu le respires.",
          explication: "L'oxygène (O₂) est un gaz à température ambiante. Il ne devient liquide qu'à très basse température (−183 °C)."
        }
      ]
    },
    {
      id: "changements_etat",
      name: "Les changements d'état",
      emoji: "🌡️",
      desc: "Fusion, solidification, vaporisation, condensation",
      questions: [
        {
          text: "Comment appelle-t-on le passage de l'état solide à l'état liquide ?",
          options: ["solidification", "vaporisation", "fusion", "condensation"],
          answer: 2,
          hint: "C'est ce qui arrive à un glaçon qui se réchauffe.",
          explication: "La fusion est le passage de l'état solide à l'état liquide. La glace fond à 0 °C."
        },
        {
          text: "À quelle température l'eau pure fond-elle sous pression atmosphérique normale ?",
          options: ["100 °C", "0 °C", "−10 °C", "37 °C"],
          answer: 1,
          hint: "C'est aussi la température de congélation.",
          explication: "L'eau fond (et se solidifie) à 0 °C sous pression atmosphérique normale."
        },
        {
          text: "Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?",
          options: ["fusion", "solidification", "condensation", "vaporisation"],
          answer: 3,
          hint: "L'eau bout et produit de la vapeur.",
          explication: "La vaporisation est le passage de l'état liquide à l'état gazeux. Elle peut se faire par ébullition (rapide) ou évaporation (lente)."
        },
        {
          text: "À quelle température l'eau bout-elle à pression atmosphérique normale ?",
          options: ["0 °C", "50 °C", "100 °C", "200 °C"],
          answer: 2,
          hint: "C'est la température d'ébullition de l'eau.",
          explication: "L'eau bout à 100 °C sous pression atmosphérique normale. C'est à cette température que la vaporisation est très rapide (ébullition)."
        },
        {
          text: "La solidification est le passage de l'état…",
          options: ["gazeux → liquide", "liquide → solide", "solide → gazeux", "gazeux → solide"],
          answer: 1,
          hint: "C'est ce qui se passe dans un congélateur.",
          explication: "La solidification est le passage de l'état liquide à l'état solide. L'eau se solidifie à 0 °C."
        },
        {
          text: "La condensation est le passage de l'état…",
          options: ["solide → liquide", "liquide → gaz", "gaz → liquide", "solide → gaz"],
          answer: 2,
          hint: "Les gouttelettes sur un miroir de salle de bain.",
          explication: "La condensation est le passage de l'état gazeux à l'état liquide. La vapeur d'eau se condense sur les surfaces froides."
        },
        {
          type: "vrai_faux",
          text: "Lors d'un changement d'état, la température reste constante (elle ne varie pas).",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Observe la température d'un glaçon qui fond dans l'eau.",
          explication: "VRAI. Pendant un changement d'état, la température reste constante : on dit qu'il y a un palier de température. La chaleur fournie est utilisée pour le changement d'état, pas pour réchauffer."
        },
        {
          text: "Quel changement d'état se produit quand on met de l'eau liquide au congélateur ?",
          options: ["fusion", "vaporisation", "solidification", "condensation"],
          answer: 2,
          hint: "L'eau devient de la glace.",
          explication: "En refroidissant en dessous de 0 °C, l'eau liquide se solidifie : c'est la solidification."
        },
        {
          text: "L'évaporation est une forme de vaporisation qui se produit…",
          options: ["uniquement à 100 °C", "à toute température, en surface", "uniquement en dessous de 0 °C", "uniquement en chauffant fortement"],
          answer: 1,
          hint: "Les flaques d'eau disparaissent même sans les chauffer.",
          explication: "L'évaporation se produit à toute température, à la surface d'un liquide. C'est pourquoi les flaques d'eau sèchent même par temps froid."
        },
        {
          type: "vrai_faux",
          text: "La sublimation est le passage direct de l'état solide à l'état gazeux.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "La glace carbonique (CO₂ solide) fait cela.",
          explication: "VRAI. La sublimation est le passage direct du solide au gaz sans passer par l'état liquide. La neige carbonique (CO₂ solide) en est un exemple."
        }
      ]
    },
    {
      id: "melanges",
      name: "Les mélanges",
      emoji: "🧪",
      desc: "Mélanges homogènes et hétérogènes",
      questions: [
        {
          text: "Un mélange est dit homogène quand…",
          options: ["on voit les différents constituants", "on ne peut pas distinguer les différents constituants", "il ne contient qu'un seul composé", "il est toujours liquide"],
          answer: 1,
          hint: "L'eau sucrée est un exemple.",
          explication: "Un mélange homogène a une composition uniforme : on ne peut pas distinguer les constituants à l'œil nu (ex. : eau sucrée, eau salée, air)."
        },
        {
          text: "Lequel de ces mélanges est hétérogène ?",
          options: ["de l'eau salée", "du jus de citron", "de l'eau et de l'huile", "du sirop de fraise"],
          answer: 2,
          hint: "L'un flotte sur l'autre.",
          explication: "L'eau et l'huile ne se mélangent pas : on voit deux couches distinctes — c'est un mélange hétérogène."
        },
        {
          text: "Comment appelle-t-on le liquide dans lequel on dissout une substance ?",
          options: ["soluté", "solvant", "solide", "solution"],
          answer: 1,
          hint: "L'eau est le solvant le plus courant.",
          explication: "Le solvant est le liquide qui dissout. La substance dissoute s'appelle le soluté. L'ensemble forme une solution."
        },
        {
          text: "Comment appelle-t-on la substance que l'on dissout dans un solvant ?",
          options: ["solvant", "soluté", "réactif", "produit"],
          answer: 1,
          hint: "Le sel dans l'eau salée.",
          explication: "Le soluté est la substance dissoute dans le solvant. Dans l'eau salée, le sel est le soluté et l'eau est le solvant."
        },
        {
          type: "vrai_faux",
          text: "L'air est un mélange homogène.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Tu ne vois pas les différents gaz qui composent l'air.",
          explication: "VRAI. L'air est un mélange homogène de gaz (azote, oxygène, argon, CO₂…). On ne peut pas distinguer ses constituants à l'œil nu."
        },
        {
          text: "Une solution obtenue en dissolvant un solide dans un liquide est-elle transparente ?",
          options: ["Toujours opaque", "Toujours transparente", "Transparente si la dissolution est complète", "Cela n'a aucun rapport"],
          answer: 2,
          hint: "Eau sucrée vs eau avec de la terre.",
          explication: "Une solution vraiment homogène est transparente (même si elle est colorée). Si elle est trouble, c'est que la dissolution est incomplète ou que le mélange est hétérogène."
        },
        {
          text: "Lequel de ces mélanges est homogène ?",
          options: ["salade de fruits", "eau et sable", "eau et sel dissous", "soupe avec des légumes visibles"],
          answer: 2,
          hint: "Quand on agite, on ne voit plus les grains.",
          explication: "L'eau salée (sel entièrement dissous) est homogène : on ne distingue plus les grains de sel."
        },
        {
          text: "Le granite est un mélange…",
          options: ["homogène", "hétérogène", "gazeux", "qui n'est pas un mélange"],
          answer: 1,
          hint: "On voit les différents minéraux qui le composent.",
          explication: "Le granite est un mélange hétérogène : on voit à l'œil nu ses différents constituants (quartz, feldspath, mica)."
        },
        {
          text: "L'eau de mer est un mélange…",
          options: ["hétérogène", "homogène", "pur", "non miscible"],
          answer: 1,
          hint: "Le sel est complètement dissous.",
          explication: "L'eau de mer est un mélange homogène : le sel (et d'autres minéraux) est entièrement dissous, on ne voit pas les constituants."
        },
        {
          type: "vrai_faux",
          text: "Un mélange hétérogène peut être séparé en filtrant.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "L'eau trouble filtrée donne de l'eau claire.",
          explication: "VRAI. La filtration permet de séparer des constituants solides non dissous d'un liquide — elle fonctionne sur les mélanges hétérogènes."
        }
      ]
    },
    {
      id: "separation",
      name: "Séparer les constituants d'un mélange",
      emoji: "🔬",
      desc: "Décantation, filtration, évaporation, distillation",
      questions: [
        {
          text: "Quelle technique permet de séparer un liquide d'un solide non dissous en utilisant un filtre ?",
          options: ["décantation", "distillation", "filtration", "évaporation"],
          answer: 2,
          hint: "On verse le mélange dans un entonnoir avec un papier filtre.",
          explication: "La filtration retient les solides non dissous (résidu) et laisse passer le liquide (filtrat) à travers un papier filtre."
        },
        {
          text: "Quelle technique utilise la différence de densité pour séparer deux liquides non miscibles ?",
          options: ["filtration", "décantation", "distillation", "évaporation"],
          answer: 1,
          hint: "L'huile remonte au-dessus de l'eau naturellement.",
          explication: "La décantation laisse les constituants se séparer sous l'effet de la gravité : le plus dense se dépose au fond ou au bas."
        },
        {
          text: "Comment obtenir du sel solide à partir d'eau salée ?",
          options: ["filtration", "décantation", "évaporation de l'eau", "distillation"],
          answer: 2,
          hint: "C'est ainsi que le sel marin est récolté dans les marais salants.",
          explication: "En évaporant l'eau (par chauffage ou par le soleil), on récupère le sel sous forme solide."
        },
        {
          text: "La distillation permet de…",
          options: ["séparer deux solides", "séparer un liquide de ses impuretés en le vaporisant puis en le condensant", "filtrer une solution", "mélanger deux liquides"],
          answer: 1,
          hint: "C'est le principe de fabrication des parfums et des spiritueux.",
          explication: "La distillation vaporise le liquide (qui s'évapore en premier), puis condense la vapeur pour obtenir un liquide purifié."
        },
        {
          type: "vrai_faux",
          text: "La filtration peut séparer du sel dissous dans de l'eau.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Le sel dissous passe à travers le filtre.",
          explication: "FAUX. La filtration ne sépare que les solides non dissous. Le sel dissous dans l'eau passe à travers le filtre — pour le récupérer, il faut évaporer l'eau."
        },
        {
          text: "Dans un entonnoir de décantation, l'huile se place…",
          options: ["au fond", "en haut", "uniformément", "cela dépend de la température"],
          answer: 1,
          hint: "L'huile est moins dense que l'eau.",
          explication: "L'huile est moins dense que l'eau, elle remonte et se place en couche supérieure dans l'entonnoir de décantation."
        },
        {
          text: "Dans les marais salants, on récolte le sel par…",
          options: ["filtration", "distillation", "évaporation naturelle sous le soleil", "décantation"],
          answer: 2,
          hint: "L'eau s'évapore et laisse le sel.",
          explication: "Le vent et le soleil font évaporer l'eau de mer. Le sel cristallise et est récolté : c'est le principe des marais salants."
        },
        {
          text: "Quelle technique utilise-t-on pour clarifier de l'eau boueuse (eau + terre) ?",
          options: ["évaporation", "distillation", "filtration ou décantation", "fusion"],
          answer: 2,
          hint: "La terre n'est pas dissoute.",
          explication: "L'eau boueuse est un mélange hétérogène. On peut le clarifier par décantation (la terre se dépose) ou filtration (le filtre retient la terre)."
        },
        {
          type: "vrai_faux",
          text: "La chromatographie permet de séparer les différents pigments colorés d'une encre.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "L'expérience du papier filtre et des feutres.",
          explication: "VRAI. La chromatographie sur papier permet de séparer les pigments selon leur vitesse de migration sur le papier — une encre noire révèle souvent plusieurs couleurs."
        },
        {
          text: "Quelle technique de séparation est la plus adaptée pour séparer des petits cailloux de sable d'une eau trouble ?",
          options: ["distillation", "évaporation", "décantation puis filtration", "chauffage"],
          answer: 2,
          hint: "Les grosses particules se déposent d'abord, puis les fines sont filtrées.",
          explication: "On commence par la décantation (les cailloux se déposent), puis la filtration pour retenir le sable fin. C'est le principe de la purification de l'eau."
        }
      ]
    },
    {
      id: "masse_volume",
      name: "Masse et volume",
      emoji: "⚖️",
      desc: "Mesurer la masse et le volume d'un corps",
      questions: [
        {
          text: "Quelle est l'unité de masse du Système International (SI) ?",
          options: ["le gramme (g)", "le kilogramme (kg)", "la tonne (t)", "le milligramme (mg)"],
          answer: 1,
          hint: "L'unité de base, pas le gramme ni la tonne.",
          explication: "L'unité de masse du Système International est le kilogramme (kg). Le gramme est un sous-multiple (1 kg = 1 000 g)."
        },
        {
          text: "Quel instrument utilise-t-on pour mesurer la masse d'un objet ?",
          options: ["une éprouvette", "une balance", "un thermomètre", "une règle"],
          answer: 1,
          hint: "Il en existe à plateau ou électroniques.",
          explication: "On mesure la masse avec une balance. Une balance à plateaux compare la masse d'un objet à des masses étalon ; une balance électronique donne directement la valeur."
        },
        {
          text: "Quelle est l'unité de volume du Système International ?",
          options: ["le litre (L)", "le millilitre (mL)", "le mètre cube (m³)", "le centilitre (cL)"],
          answer: 2,
          hint: "Ce n'est pas le litre.",
          explication: "L'unité de volume du Système International est le mètre cube (m³). Le litre est une unité usuelle pratique (1 L = 1 dm³ = 0,001 m³)."
        },
        {
          text: "Quel instrument utilise-t-on pour mesurer le volume d'un liquide avec précision ?",
          options: ["une balance", "une éprouvette graduée", "un thermomètre", "une règle"],
          answer: 1,
          hint: "Elle est cylindrique avec des graduations.",
          explication: "L'éprouvette graduée (ou la burette, la pipette) permet de mesurer le volume d'un liquide. On lit le volume au bas du ménisque."
        },
        {
          text: "Comment mesure-t-on le volume d'un objet solide irrégulier (comme un caillou) ?",
          options: ["avec une règle", "par la méthode de déplacement d'eau dans une éprouvette", "avec une balance", "en le pesant"],
          answer: 1,
          hint: "On plonge l'objet dans de l'eau et on mesure la différence de volume.",
          explication: "On plonge l'objet dans une éprouvette contenant un volume connu d'eau. Le volume d'eau déplacé (V₂ − V₁) est égal au volume de l'objet."
        },
        {
          type: "vrai_faux",
          text: "La masse d'un objet change selon l'endroit où on le mesure sur Terre.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Contrairement au poids.",
          explication: "FAUX. La masse est une propriété intrinsèque de la matière : elle reste constante partout. C'est le poids (force) qui varie selon la gravité."
        },
        {
          text: "1 litre d'eau pure a une masse de…",
          options: ["10 g", "100 g", "1 kg", "10 kg"],
          answer: 2,
          hint: "C'est une valeur à connaître par cœur.",
          explication: "1 litre d'eau pure a une masse de 1 kg (soit 1 000 g). C'est une propriété remarquable de l'eau."
        },
        {
          text: "Comment convertit-on 2,5 litres en millilitres ?",
          options: ["2,5 mL", "25 mL", "250 mL", "2 500 mL"],
          answer: 3,
          hint: "1 litre = 1 000 millilitres.",
          explication: "1 L = 1 000 mL, donc 2,5 L = 2 500 mL."
        },
        {
          text: "La densité d'un matériau est…",
          options: ["son volume divisé par sa masse", "sa masse divisée par son volume", "sa masse plus son volume", "sa masse multipliée par son volume"],
          answer: 1,
          hint: "Formule : d = m / V",
          explication: "La densité (ou masse volumique) est le rapport masse/volume : d = m/V. Si d > 1 g/cm³, l'objet coule dans l'eau ; s'il est < 1 g/cm³, il flotte."
        },
        {
          type: "vrai_faux",
          text: "Un objet dont la densité est inférieure à celle de l'eau (1 g/cm³) flotte sur l'eau.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le bois flotte, le métal coule.",
          explication: "VRAI. Si la densité de l'objet est inférieure à 1 g/cm³ (densité de l'eau), il flotte. Par exemple, le bois (≈ 0,6 g/cm³) flotte, le fer (≈ 7,8 g/cm³) coule."
        }
      ]
    },
    {
      id: "eau_nature",
      name: "L'eau dans la nature",
      emoji: "💧",
      desc: "Cycle de l'eau, états naturels",
      questions: [
        {
          text: "Quelle est la formule chimique de l'eau ?",
          options: ["CO₂", "H₂O", "O₂", "NaCl"],
          answer: 1,
          hint: "2 atomes d'hydrogène, 1 d'oxygène.",
          explication: "L'eau est composée de 2 atomes d'hydrogène (H) et 1 atome d'oxygène (O) : sa formule est H₂O."
        },
        {
          text: "Quel pourcentage de la surface de la Terre est couvert d'eau ?",
          options: ["environ 30 %", "environ 50 %", "environ 70 %", "environ 90 %"],
          answer: 2,
          hint: "Les océans dominent notre planète bleue.",
          explication: "Environ 70 % de la surface terrestre est couverte d'eau, dont la grande majorité dans les océans."
        },
        {
          text: "Comment s'appelle le passage de l'eau liquide en eau gazeuse (vapeur) qui monte dans l'atmosphère ?",
          options: ["précipitation", "condensation", "évaporation", "infiltration"],
          answer: 2,
          hint: "Les flaques d'eau disparaissent par ce phénomène.",
          explication: "L'évaporation transforme l'eau liquide (mers, lacs, sols) en vapeur d'eau qui monte dans l'atmosphère. C'est la première étape du cycle de l'eau."
        },
        {
          text: "Comment s'appellent les précipitations sous forme solide ?",
          options: ["grêle uniquement", "pluie", "neige et grêle", "brouillard"],
          answer: 2,
          hint: "Quand il fait très froid en altitude.",
          explication: "La neige et la grêle sont des précipitations solides. La neige se forme quand les gouttelettes d'eau gèlent à haute altitude."
        },
        {
          type: "vrai_faux",
          text: "L'eau douce représente la majorité de l'eau sur Terre.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Pense aux océans : ils sont salés.",
          explication: "FAUX. Environ 97 % de l'eau sur Terre est de l'eau salée (océans). L'eau douce ne représente que 3 %, dont la majorité est gelée dans les glaciers et la banquise."
        },
        {
          text: "Quelle étape du cycle de l'eau représente la formation des nuages ?",
          options: ["évaporation", "condensation en altitude", "précipitation", "infiltration"],
          answer: 1,
          hint: "La vapeur d'eau refroidit en montant.",
          explication: "En altitude, la vapeur d'eau refroidit et se condense en minuscules gouttelettes qui forment les nuages."
        },
        {
          text: "Quelle est la principale source d'énergie qui alimente le cycle de l'eau ?",
          options: ["la Lune", "le Soleil", "le vent", "la gravité seule"],
          answer: 1,
          hint: "Sans lui, l'eau ne s'évaporerait pas.",
          explication: "Le Soleil fournit l'énergie qui permet l'évaporation de l'eau. La gravité fait ensuite tomber les précipitations et ruisseler l'eau."
        },
        {
          text: "Comment s'appelle le phénomène par lequel l'eau de pluie s'enfonce dans le sol ?",
          options: ["ruissellement", "condensation", "infiltration", "évaporation"],
          answer: 2,
          hint: "Elle va alimenter les nappes souterraines.",
          explication: "L'infiltration est l'absorption de l'eau par le sol. Elle alimente les nappes phréatiques qui constituent une réserve d'eau douce."
        },
        {
          type: "vrai_faux",
          text: "L'eau peut exister sous ses trois états (solide, liquide, gaz) dans la nature.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Glace, rivière, vapeur…",
          explication: "VRAI. L'eau existe sous ses trois états dans la nature : glace et neige (solide), lacs, mers et pluie (liquide), vapeur d'eau dans l'atmosphère (gaz)."
        },
        {
          text: "Pourquoi est-il important de protéger les nappes phréatiques ?",
          options: ["elles produisent de l'électricité", "elles constituent une réserve d'eau douce potable", "elles empêchent les tremblements de terre", "elles réchauffent le sol"],
          answer: 1,
          hint: "L'eau potable du robinet provient souvent de là.",
          explication: "Les nappes phréatiques stockent l'eau douce infiltrée. Elles alimentent les puits et les robinets. Les polluer ou les épuiser compromet l'accès à l'eau potable."
        }
      ]
    },
    {
      id: "circuit_electrique",
      name: "Le circuit électrique simple",
      emoji: "⚡",
      desc: "Composants, schéma, courant",
      questions: [
        {
          text: "Quels sont les composants essentiels d'un circuit électrique simple permettant d'allumer une lampe ?",
          options: ["une lampe et de l'eau", "un générateur, des fils et un récepteur (lampe)", "un aimant et une lampe", "une pile et un aimant"],
          answer: 1,
          hint: "Il faut une source d'énergie et un chemin pour le courant.",
          explication: "Un circuit simple nécessite au minimum un générateur (pile), des fils conducteurs et un récepteur (lampe). Le tout doit former une boucle fermée."
        },
        {
          text: "Qu'est-ce qu'un générateur dans un circuit électrique ?",
          options: ["il consomme de l'énergie électrique", "il produit ou fournit de l'énergie électrique", "il interrompt le courant", "il mesure le courant"],
          answer: 1,
          hint: "Une pile est un exemple.",
          explication: "Le générateur est la source d'énergie électrique du circuit : il 'pousse' les électrons. Une pile, une batterie ou un panneau solaire sont des générateurs."
        },
        {
          text: "Qu'est-ce qu'un récepteur dans un circuit électrique ?",
          options: ["il fournit de l'énergie", "il consomme de l'énergie électrique pour la transformer en autre forme d'énergie", "il mesure la tension", "il stocke le courant"],
          answer: 1,
          hint: "Une lampe transforme l'électricité en lumière.",
          explication: "Le récepteur consomme l'énergie électrique fournie par le générateur pour la convertir : en lumière (ampoule), en chaleur (résistance), en mouvement (moteur)."
        },
        {
          text: "Un circuit est dit 'ouvert' quand…",
          options: ["le courant circule normalement", "il y a un interrupteur ouvert qui interrompt le circuit", "la pile est neuve", "les fils sont bien connectés"],
          answer: 1,
          hint: "Comme un robinet fermé : rien ne passe.",
          explication: "Un circuit ouvert est un circuit incomplet (interrupteur ouvert, fil débranché) : le courant ne peut pas circuler et la lampe ne s'allume pas."
        },
        {
          type: "vrai_faux",
          text: "Le courant électrique peut circuler dans un circuit qui n'est pas en boucle fermée.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Si le circuit est ouvert, la lampe s'éteint.",
          explication: "FAUX. Pour que le courant circule, le circuit doit être fermé (en boucle complète). Si la boucle est ouverte (fil débranché, interrupteur ouvert), le courant ne passe pas."
        },
        {
          text: "Quel symbole représente un interrupteur ouvert dans un schéma de circuit électrique ?",
          options: ["un cercle barré", "un trait oblique entre deux points", "un rectangle", "une flèche"],
          answer: 1,
          hint: "Un pont-levis levé : les deux bornes ne sont pas connectées.",
          explication: "L'interrupteur ouvert est représenté par un trait oblique (comme un pont levé) entre deux points de connexion. Fermé, le trait relie les deux points."
        },
        {
          text: "Que se passe-t-il si on ajoute un deuxième interrupteur en série dans un circuit ?",
          options: ["la lampe brille plus fort", "les deux interrupteurs doivent être fermés pour que la lampe s'allume", "le circuit ne marche plus du tout", "cela ne change rien"],
          answer: 1,
          hint: "En série = bout à bout.",
          explication: "En série, les deux interrupteurs forment une chaîne : il suffit qu'un seul soit ouvert pour interrompre le circuit. Les deux doivent être fermés pour allumer la lampe."
        },
        {
          text: "Comment représente-t-on une pile (générateur) dans un schéma de circuit ?",
          options: ["un rectangle plein", "deux traits parallèles inégaux (long = pôle +, court = pôle −)", "un cercle avec une croix", "une flèche"],
          answer: 1,
          hint: "Le trait long est positif, le court est négatif.",
          explication: "Le symbole d'une pile est composé de deux traits parallèles : le long représente le pôle positif (+) et le court le pôle négatif (−)."
        },
        {
          type: "vrai_faux",
          text: "Dans un circuit simple (une pile, une lampe, des fils), le courant sort du pôle positif de la pile.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Par convention, le courant va du + vers le −.",
          explication: "VRAI. Par convention, le courant conventionnel va du pôle positif (+) vers le pôle négatif (−) à l'extérieur du générateur."
        },
        {
          text: "Qu'appelle-t-on un court-circuit ?",
          options: ["un circuit avec beaucoup de lampes", "une connexion directe entre les deux bornes de la pile sans résistance", "un circuit avec un seul fil", "un circuit hors tension"],
          answer: 1,
          hint: "C'est dangereux : ça chauffe beaucoup.",
          explication: "Un court-circuit relie directement les deux bornes de la pile sans résistance : le courant très fort peut endommager la pile, faire fondre les fils et provoquer un incendie."
        }
      ]
    },
    {
      id: "conducteurs_isolants",
      name: "Conducteurs, isolants et sécurité",
      emoji: "🔌",
      desc: "Matériaux conducteurs, isolants, règles de sécurité",
      questions: [
        {
          text: "Un conducteur électrique est un matériau qui…",
          options: ["empêche le passage du courant", "laisse passer le courant", "stocke le courant", "produit le courant"],
          answer: 1,
          hint: "Les fils électriques sont en cuivre pour cette raison.",
          explication: "Un conducteur laisse passer le courant électrique. Les métaux (cuivre, fer, aluminium) sont de bons conducteurs."
        },
        {
          text: "Lequel de ces matériaux est un bon conducteur électrique ?",
          options: ["le bois", "le plastique", "le cuivre", "le verre"],
          answer: 2,
          hint: "Utilisé pour les fils électriques.",
          explication: "Le cuivre est un excellent conducteur électrique. C'est pourquoi il est utilisé pour les fils électriques dans les maisons."
        },
        {
          text: "Un isolant électrique est un matériau qui…",
          options: ["laisse passer facilement le courant", "s'oppose au passage du courant", "produit de l'électricité", "stocke de l'énergie"],
          answer: 1,
          hint: "Le plastique autour des fils électriques.",
          explication: "Un isolant s'oppose au passage du courant. Les gaines plastiques autour des fils protègent des électrocutions."
        },
        {
          text: "Lequel de ces matériaux est un bon isolant électrique ?",
          options: ["l'aluminium", "le fer", "le caoutchouc", "le sel fondu"],
          answer: 2,
          hint: "Les semelles de chaussures sont en ce matériau.",
          explication: "Le caoutchouc est un excellent isolant électrique. C'est pour cette raison que les gants d'électricien et les semelles de chaussures de sécurité en sont faits."
        },
        {
          type: "vrai_faux",
          text: "L'eau pure (distillée) est un bon conducteur électrique.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "C'est l'eau salée (avec des ions dissous) qui conduit.",
          explication: "FAUX. L'eau pure (sans minéraux ni sel dissous) est un très mauvais conducteur. C'est l'eau du robinet (avec des minéraux) ou l'eau salée qui conduit le courant."
        },
        {
          text: "Pourquoi ne faut-il jamais utiliser des appareils électriques avec les mains mouillées ?",
          options: ["parce que cela abîme l'appareil", "parce que l'eau du robinet conduit le courant et risque d'électrocuter", "parce que l'eau est froide", "parce que cela fait court-circuit dans la prise"],
          answer: 1,
          hint: "L'eau du robinet contient des minéraux conducteurs.",
          explication: "L'eau du robinet contient des sels minéraux qui la rendent conductrice. Toucher un appareil électrique avec les mains mouillées peut provoquer une électrocution mortelle."
        },
        {
          text: "Que signifie le symbole ⚡ sur un équipement électrique ?",
          options: ["batterie chargée", "danger : haute tension", "vitesse de charge rapide", "courant alternatif"],
          answer: 1,
          hint: "C'est un avertissement.",
          explication: "Le symbole ⚡ (éclair dans un triangle) signale un danger électrique, souvent lié à une haute tension. Il faut ne pas toucher ces équipements sans protection."
        },
        {
          type: "vrai_faux",
          text: "On peut brancher autant d'appareils qu'on veut sur une même prise multiple sans danger.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Chaque prise a une intensité maximale autorisée.",
          explication: "FAUX. Chaque prise a une intensité maximale. Brancher trop d'appareils puissants peut entraîner une surchauffe, un incendie ou un disjoncteur qui saute."
        },
        {
          text: "Quel composant du circuit électrique domestique protège contre les surcharges et les courts-circuits ?",
          options: ["un interrupteur", "un transformateur", "un disjoncteur ou un fusible", "un condensateur"],
          answer: 2,
          hint: "Il coupe automatiquement le circuit si le courant est trop fort.",
          explication: "Le disjoncteur (ou le fusible) coupe automatiquement le circuit en cas de surcharge ou de court-circuit, protégeant les appareils et prévenant les incendies."
        },
        {
          text: "Parmi ces matériaux, lequel est conducteur ?",
          options: ["papier", "verre", "laine", "graphite (mine de crayon)"],
          answer: 3,
          hint: "La mine de crayon est en carbone, qui conduit légèrement.",
          explication: "Le graphite (carbone, mine de crayon) est un semi-conducteur : il conduit le courant, contrairement au papier, au verre et à la laine qui sont isolants."
        }
      ]
    },
    {
      id: "sources_lumiere",
      name: "Sources de lumière et propagation",
      emoji: "💡",
      desc: "Sources lumineuses, propagation rectiligne",
      questions: [
        {
          text: "Qu'est-ce qu'une source de lumière primaire ?",
          options: ["un objet qui reflète la lumière", "un objet qui produit lui-même de la lumière", "un objet transparent", "un miroir"],
          answer: 1,
          hint: "Le Soleil est un exemple.",
          explication: "Une source primaire (ou source lumineuse) produit sa propre lumière : le Soleil, une ampoule, une bougie, un écran. La Lune, elle, réfléchit la lumière du Soleil — c'est une source secondaire."
        },
        {
          text: "La Lune est-elle une source de lumière primaire ?",
          options: ["Oui, elle brille comme le Soleil", "Non, elle réfléchit la lumière du Soleil", "Non, elle absorbe toute la lumière", "Oui, elle produit de la chaleur"],
          answer: 1,
          hint: "Elle n'a pas de source de lumière propre.",
          explication: "La Lune est une source secondaire : elle ne produit pas de lumière mais réfléchit celle du Soleil vers la Terre."
        },
        {
          text: "Dans quel milieu la lumière se propage-t-elle le plus vite ?",
          options: ["dans l'eau", "dans le verre", "dans le vide (ou l'air)", "dans un solide"],
          answer: 2,
          hint: "Rien ne va plus vite que la lumière dans le vide.",
          explication: "La lumière se propage le plus vite dans le vide (≈ 300 000 km/s). Elle ralentit légèrement dans l'air, puis davantage dans l'eau et le verre."
        },
        {
          text: "Comment se propage la lumière dans un milieu homogène (comme l'air) ?",
          options: ["en courbes", "en spirales", "en ligne droite", "au hasard"],
          answer: 2,
          hint: "Le faisceau laser en est la preuve.",
          explication: "Dans un milieu homogène, la lumière se propage en ligne droite. On parle de propagation rectiligne — c'est ce que montre un faisceau laser ou un rayon de soleil."
        },
        {
          type: "vrai_faux",
          text: "La lumière visible est une onde électromagnétique.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Comme les rayons X, les micro-ondes et les ondes radio.",
          explication: "VRAI. La lumière visible est une onde électromagnétique, appartenant au spectre électromagnétique, comme les rayons UV, infrarouges, X ou les ondes radio."
        },
        {
          text: "Environ combien de temps met la lumière du Soleil pour arriver sur Terre ?",
          options: ["1 seconde", "8 minutes", "24 heures", "1 an"],
          answer: 1,
          hint: "Le Soleil est à environ 150 millions de km.",
          explication: "La lumière met environ 8 minutes pour parcourir les 150 millions de km qui séparent le Soleil de la Terre, à la vitesse de 300 000 km/s."
        },
        {
          text: "Quelle propriété de la lumière explique qu'une pièce sombre ne soit jamais éclairée derrière un mur solide ?",
          options: ["la lumière est lente", "la lumière se propage en ligne droite et ne contourne pas les obstacles opaques", "la lumière est absorbée par tous les murs", "la lumière change de direction dans l'air"],
          answer: 1,
          hint: "Les ombres portées s'expliquent aussi par cette propriété.",
          explication: "La propagation rectiligne de la lumière fait qu'un obstacle opaque crée une zone d'ombre derrière lui — la lumière ne contourne pas les obstacles."
        },
        {
          text: "Qu'est-ce qu'un milieu transparent ?",
          options: ["un milieu qui absorbe toute la lumière", "un milieu qui laisse passer la lumière en la laissant visible (verre clair)", "un milieu qui réfléchit la lumière", "un milieu qui ne laisse passer aucune lumière"],
          answer: 1,
          hint: "Tu vois à travers une vitre.",
          explication: "Un milieu transparent laisse passer la lumière et permet de voir clairement à travers. Ex. : air, eau claire, verre. Un milieu opaque ne la laisse pas passer."
        },
        {
          type: "vrai_faux",
          text: "Un milieu translucide laisse passer la lumière mais on ne voit pas clairement à travers.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le verre dépoli ou le papier calque.",
          explication: "VRAI. Un milieu translucide (verre dépoli, papier calque) laisse passer une partie de la lumière, mais diffuse celle-ci — on ne voit pas distinctement les objets derrière."
        },
        {
          text: "Que se passe-t-il quand un rayon lumineux passe d'un milieu (l'air) à un autre milieu (l'eau) ?",
          options: ["il continue tout droit sans changement", "il est dévié — on parle de réfraction", "il est complètement absorbé", "il revient en arrière"],
          answer: 1,
          hint: "Une paille dans un verre d'eau semble brisée.",
          explication: "Quand la lumière change de milieu (air → eau, air → verre), elle change de vitesse et est déviée : c'est la réfraction. C'est ce qui donne l'illusion d'une paille brisée."
        }
      ]
    },
    {
      id: "ombres",
      name: "Ombres et propagation rectiligne",
      emoji: "🌑",
      desc: "Formation des ombres, éclipses, pinhole",
      questions: [
        {
          text: "Quelle propriété de la lumière explique la formation des ombres ?",
          options: ["la lumière change de couleur", "la lumière se propage en ligne droite", "la lumière contourne les obstacles", "la lumière est lente"],
          answer: 1,
          hint: "Un obstacle opaque bloque la lumière dans la direction où elle va.",
          explication: "La propagation rectiligne de la lumière explique les ombres : un objet opaque bloque les rayons lumineux derrière lui, créant une zone de pénombre."
        },
        {
          text: "Pour former une ombre, il faut obligatoirement…",
          options: ["une source de lumière, un objet opaque et un écran", "deux sources de lumière et un miroir", "un objet transparent et de l'eau", "une source de lumière seule"],
          answer: 0,
          hint: "L'ombre se projette sur quelque chose.",
          explication: "L'ombre nécessite trois éléments : une source lumineuse, un objet opaque qui bloque la lumière, et un écran (ou le sol) sur lequel l'ombre se projette."
        },
        {
          text: "Quand la source lumineuse est petite (ponctuelle), l'ombre formée est…",
          options: ["floue avec une zone de demi-ombre", "nette (ombre et lumière bien délimitées)", "colorée", "très grande"],
          answer: 1,
          hint: "Contrairement à une grande source qui crée de la pénombre.",
          explication: "Une source ponctuelle crée une ombre nette avec une limite franche. Une source étendue crée une pénombre (zone de passage progressif entre l'ombre et la lumière)."
        },
        {
          text: "Lors d'une éclipse de Lune, qu'est-ce qui se passe ?",
          options: ["la Lune passe devant le Soleil", "la Terre passe entre le Soleil et la Lune : la Lune entre dans l'ombre de la Terre", "la Lune passe derrière le Soleil", "le Soleil s'éteint momentanément"],
          answer: 1,
          hint: "L'ombre de la Terre couvre la Lune.",
          explication: "Lors d'une éclipse de Lune, la Terre se trouve entre le Soleil et la Lune : l'ombre portée de la Terre couvre la Lune, qui rougit ou disparaît."
        },
        {
          text: "Lors d'une éclipse de Soleil totale, qu'est-ce qui se passe ?",
          options: ["la Terre passe entre le Soleil et la Lune", "la Lune passe entre le Soleil et la Terre", "le Soleil tourne autour de la Terre", "des nuages couvrent le Soleil"],
          answer: 1,
          hint: "La Lune cache le Soleil depuis la Terre.",
          explication: "Lors d'une éclipse de Soleil, la Lune s'interpose entre le Soleil et la Terre : son ombre portée couvre une partie de la Terre, cachant momentanément le Soleil."
        },
        {
          type: "vrai_faux",
          text: "Plus la source lumineuse est éloignée d'un objet, plus l'ombre portée de l'objet est grande.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Rapproche-toi d'une lampe : ton ombre grandit.",
          explication: "FAUX. Plus la source est proche, plus l'ombre est grande. À l'inverse, plus la source s'éloigne, plus l'ombre tend à avoir la même taille que l'objet."
        },
        {
          text: "Qu'est-ce que la pénombre ?",
          options: ["une ombre totale", "une zone partiellement éclairée entre l'ombre et la lumière", "une lumière très faible", "une couleur sombre"],
          answer: 1,
          hint: "Lors d'une éclipse partielle.",
          explication: "La pénombre est la zone de transition entre l'ombre complète (umbra) et la pleine lumière : elle reçoit une partie de la lumière de la source étendue."
        },
        {
          text: "Qu'est-ce que la chambre noire (ou camera obscura) ?",
          options: ["une pièce sans fenêtre", "un dispositif avec un petit trou qui projette une image renversée de la scène", "un appareil photo numérique", "un télescope"],
          answer: 1,
          hint: "Principe de base de la photographie.",
          explication: "La camera obscura est une boîte opaque avec un minuscule trou. La lumière qui passe par le trou forme une image renversée et inversée sur la paroi opposée — principe utilisé avant l'invention de la photographie."
        },
        {
          type: "vrai_faux",
          text: "L'ombre d'un objet a toujours la même forme que l'objet.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "L'angle d'éclairage change la forme de l'ombre.",
          explication: "FAUX. La forme de l'ombre dépend de l'angle entre la source lumineuse et l'objet. Une sphère peut projeter une ombre circulaire ou elliptique selon la direction de la lumière."
        },
        {
          text: "Pourquoi les ombres sont-elles plus longues le matin et le soir qu'à midi ?",
          options: ["le Soleil est plus faible à ces moments", "le Soleil est bas sur l'horizon, les rayons arrivent obliquement", "les objets sont plus grands le matin", "la Terre tourne plus vite à midi"],
          answer: 1,
          hint: "L'angle d'incidence des rayons change.",
          explication: "Le matin et le soir, le Soleil est bas sur l'horizon : ses rayons frappent obliquement les objets, créant des ombres très allongées. À midi, le Soleil est au zénith et les ombres sont courtes."
        }
      ]
    }
  ]
};
