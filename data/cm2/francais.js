/* Matière : Français 📝
   8 thèmes × 10 questions = 80 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["cm2"] = window.CURRICULUM_PARTS["cm2"] || {};
window.CURRICULUM_PARTS["cm2"]["francais"] = {
  id: "francais",
  name: "Français",
  emoji: "📝",
  desc: "Grammaire, conjugaison, orthographe, vocabulaire",
  topics: [
    {
      id: "grammaire",
      name: "Grammaire",
      emoji: "🔤",
      desc: "Nature et fonction des mots, types de phrases",
      questions: [
        {
          text: "Dans « Les oiseaux chantent dans les arbres », quel est le sujet du verbe ?",
          options: ["oiseaux","Les oiseaux","chantent","dans les arbres"],
          answer: 1,
          explication: "Le sujet est « Les oiseaux » (avec l'article). Pour le trouver : Qui est-ce qui chante ? → Les oiseaux."
        },
        {
          text: "Quelle est la nature grammaticale du mot « rapidement » ?",
          options: ["Nom commun","Verbe","Adverbe","Adjectif qualificatif"],
          answer: 2,
          explication: "« rapidement » est un adverbe. Il modifie le verbe (Ex : « Il court rapidement. »)."
        },
        {
          text: "Quel type de phrase est « Ferme la fenêtre ! » ?",
          options: ["Déclarative","Interrogative","Impérative","Exclamative"],
          answer: 2,
          explication: "C'est une phrase impérative (ou injonctive) : elle donne un ordre ou un conseil."
        },
        {
          text: "Dans « Paul semble fatigué », quelle est la fonction de « fatigué » ?",
          hint: "Il est relié au sujet par un verbe d'état (sembler, être, paraître…).",
          options: ["Sujet","Complément d'objet direct (COD)","Attribut du sujet","Complément circonstanciel"],
          answer: 2,
          explication: "« fatigué » est attribut du sujet : relié à « Paul » par le verbe d'état « sembler », il donne une qualité au sujet."
        },
        {
          text: "Dans « Emma joue dans le jardin », quelle est la fonction de « dans le jardin » ?",
          hint: "Pose la question « où ? » au verbe.",
          options: ["Sujet","Complément d'objet direct","Attribut du sujet","Complément circonstanciel de lieu"],
          answer: 3,
          explication: "« dans le jardin » répond à la question « où ? » → c'est un complément circonstanciel de lieu (CC de lieu)."
        },
        {
          type: "qcm",
          text: "Parmi ces mots, lesquels sont des VERBES ?",
          hint: "Plusieurs réponses possibles. Un verbe se conjugue.",
          options: ["manger","rapide","courir","lire"],
          answer: [0,2,3],
          explication: "Manger, courir et lire sont des verbes (ils se conjuguent : je mange, tu cours, il lit). « rapide » est un adjectif qualificatif."
        },
        {
          text: "Dans « Le chien dort tranquillement », quel mot est un adverbe ?",
          options: ["Le","chien","dort","tranquillement"],
          answer: 3,
          explication: "« tranquillement » est un adverbe : il précise comment se fait l'action (le verbe dort). Les adverbes en -ment sont très fréquents."
        },
        {
          text: "Quelle est la nature du mot « celui-ci » ?",
          hint: "Il remplace un nom et le « montre ».",
          options: ["Un pronom démonstratif","Un adjectif","Une conjonction","une préposition"],
          answer: 0,
          explication: "« celui-ci » est un pronom démonstratif : il désigne et remplace un nom déjà cité (comme celui-là, ceux-ci…)."
        },
        {
          text: "Dans « Je lis un livre passionnant », quelle est la fonction de « un livre passionnant » ?",
          hint: "Il répond à la question « je lis QUOI ? ».",
          options: ["Sujet","Complément d'objet direct (COD)","Complément circonstanciel","Attribut"],
          answer: 1,
          explication: "« un livre passionnant » répond à « lis quoi ? » : c'est un complément d'objet direct (COD), placé directement après le verbe."
        },
        {
          type: "qcm",
          text: "Parmi ces mots, lesquels sont des DÉTERMINANTS ?",
          hint: "Le déterminant accompagne le nom (le, mon, trois, cette…).",
          options: ["la","manger","trois","rapidement"],
          answer: [0,2],
          explication: "« la » (article) et « trois » (déterminant numéral) accompagnent un nom. « manger » est un verbe, « rapidement » un adverbe."
        }
      ]
    },
    {
      id: "conjugaison",
      name: "Conjugaison",
      emoji: "⏰",
      desc: "Présent, imparfait, futur, passé composé",
      questions: [
        {
          text: "Conjugue « finir » à l'imparfait, 1re personne du pluriel.",
          hint: "Imparfait de finir : radical finiss- + terminaisons -ais, -ais, -ait, -ions, -iez, -aient",
          options: ["Nous finissons","Nous finissions","Nous finirons","Nous finirions"],
          answer: 1,
          explication: "Imparfait de finir : nous finissions. Attention : finissons = présent, finirons = futur."
        },
        {
          text: "Conjugue « aller » au futur simple, 3e personne du singulier.",
          options: ["Elle va","Elle allait","Elle ira","Elle est allée"],
          answer: 2,
          explication: "Le futur de « aller » est irrégulier : j'irai, tu iras, il/elle ira, nous irons…"
        },
        {
          text: "Conjugue « prendre » au passé composé, 3e personne du pluriel.",
          hint: "Le participe passé de prendre est irrégulier.",
          options: ["Ils prenaient","Ils ont pris","Ils prirent","Ils prendront"],
          answer: 1,
          explication: "Passé composé de prendre : ils ont pris. Participe passé irrégulier : pris (et non prendé)."
        },
        {
          text: "Conjugue « aller » au passé simple, 3e personne du singulier.",
          hint: "Le passé simple de aller : all- + terminaisons -ai, -as, -a…",
          options: ["Il allait","Il est allé","Il alla","Il ira"],
          answer: 2,
          explication: "Passé simple de aller : j'allai, tu allas, il/elle alla, nous allâmes, vous allâtes, ils/elles allèrent."
        },
        {
          text: "Conjugue « partir » au plus-que-parfait, 3e personne du pluriel.",
          hint: "Plus-que-parfait = imparfait de l'auxiliaire + participe passé.",
          options: ["Ils partirent","Ils étaient partis","Ils sont partis","Ils avaient parti"],
          answer: 1,
          explication: "Plus-que-parfait : auxiliaire être à l'imparfait (étaient) + participe passé accordé avec le sujet (partis = masculin pluriel)."
        },
        {
          type: "texte",
          text: "Conjugue le verbe « finir » au futur simple, à la 1re personne du singulier : je ___",
          hint: "Radical = infinitif complet « finir », puis terminaison « -ai ».",
          answer: ["finirai","je finirai"],
          explication: "Futur simple de « finir » : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront. Terminaisons : -ai, -as, -a, -ons, -ez, -ont."
        },
        {
          text: "Conjugue « être » au présent de l'indicatif, 2e personne du pluriel.",
          options: ["vous êtes","vous étes","vous estes","vous êtez"],
          answer: 0,
          explication: "Présent : je suis, tu es, il est, nous sommes, vous ÊTES, ils sont. L'accent circonflexe est obligatoire."
        },
        {
          text: "À quel temps est le verbe dans « Demain, nous partirons en voyage » ?",
          hint: "« Demain » donne un indice : l'action n'a pas encore eu lieu.",
          options: ["Présent","Imparfait","Futur simple","Passé composé"],
          answer: 2,
          explication: "« partirons » est au futur simple (terminaison -ons du futur). « Demain » confirme une action à venir."
        },
        {
          text: "Conjugue « voir » au présent, 3e personne du pluriel.",
          options: ["ils voyent","ils voient","ils voivent","ils voitent"],
          answer: 1,
          explication: "Présent du verbe voir : je vois, tu vois, il voit, nous voyons, vous voyez, ils VOIENT."
        },
        {
          type: "texte",
          text: "Conjugue « manger » à l'imparfait, 1re personne du pluriel : nous ___",
          hint: "Imparfait + verbe en -ger → on garde le « e » devant -ions ? Vérifie.",
          answer: ["mangions","nous mangions"],
          explication: "À l'imparfait : nous mangions. (Le « e » de -ger n'est nécessaire que devant a/o, donc « nous mangeons » au présent mais « nous mangions » à l'imparfait.)"
        }
      ]
    },
    {
      id: "orthographe",
      name: "Orthographe",
      emoji: "✍️",
      desc: "Accords, homophones grammaticaux, pluriels",
      questions: [
        {
          text: "Quelle phrase est correctement orthographiée ?",
          options: ["Les enfants sont contents.","Les enfants est contents.","Les enfant sont contente.","Le enfants sont content."],
          answer: 0,
          explication: "« enfants » est masculin pluriel → verbe au pluriel (sont) et adjectif au masculin pluriel (contents)."
        },
        {
          text: "Choisis la bonne forme : « Ils ___ parti de bonne heure. »",
          hint: "On peut remplacer par « avaient » pour tester si c'est « ont ».",
          options: ["on","ont","ons","hon"],
          answer: 1,
          explication: "« ont » est l'auxiliaire avoir conjugué (ils ont parti). Test : « ils avaient parti » → on utilise « ont »."
        },
        {
          text: "Laquelle de ces formes complète correctement : « Il faut ___ cette leçon » ?",
          hint: "Après « il faut », on utilise l'infinitif.",
          options: ["réviser","révisé","révise","révisées"],
          answer: 0,
          explication: "Après « il faut » ou tout verbe semi-auxiliaire, on emploie l'infinitif : réviser."
        },
        {
          text: "Quel est le pluriel de « cheval » ?",
          options: ["chevals","chevaux","chevales","chèvres"],
          answer: 1,
          explication: "Les mots en -al font leur pluriel en -aux : cheval → chevaux (comme bateau → bateaux)."
        },
        {
          text: "Complète : « Les filles ___ parties tôt ce matin. »",
          hint: "Verbe conjugué avec être → le participe passé s'accorde avec le sujet.",
          options: ["sont parti","sont partis","sont parties","ont parties"],
          answer: 2,
          explication: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet. « filles » = féminin pluriel → « parties »."
        },
        {
          type: "vrai_faux",
          text: "Le pluriel du mot « cheval » s'écrit « chevals ».",
          options: ["Vrai","Faux"],
          answer: 1,
          explication: "FAUX. Le pluriel de « cheval » est « chevaux ». Les noms en -al font généralement leur pluriel en -aux (journal/journaux, animal/animaux)."
        },
        {
          text: "Quel est le pluriel de « un bijou » ?",
          hint: "Bijou fait partie des fameux mots en -ou qui prennent un -x.",
          options: ["des bijous","des bijoux","des bijoues","des bijouxs"],
          answer: 1,
          explication: "7 mots en -ou prennent un -x au pluriel : bijou, caillou, chou, genou, hibou, joujou, pou. Donc « des bijoux »."
        },
        {
          text: "Comment écrit-on correctement ce mot ?",
          options: ["un éléfant","un éléphant","un élephant","un ellephant"],
          answer: 1,
          explication: "« éléphant » : le son [f] s'écrit « ph » (origine grecque), et il y a deux accents aigus."
        },
        {
          text: "Choisis la bonne terminaison : « Elle a ___ son manteau. »",
          hint: "Avec l'auxiliaire AVOIR, le participe ne s'accorde pas avec le sujet.",
          options: ["mis","mise","mit","miss"],
          answer: 0,
          explication: "Avec « avoir », le participe passé ne s'accorde pas avec le sujet : « elle a mis » (le COD « manteau » est placé après)."
        },
        {
          text: "Quel est le féminin de l'adjectif « heureux » ?",
          options: ["heureuse","heureuxe","heureuse","heureus"],
          answer: 0,
          explication: "Les adjectifs en -eux font leur féminin en -euse : heureux → heureuse, joyeux → joyeuse."
        }
      ]
    },
    {
      id: "vocabulaire",
      name: "Vocabulaire",
      emoji: "💬",
      desc: "Synonymes, antonymes, sens figuré, familles de mots",
      questions: [
        {
          text: "Quel est le synonyme du mot « courageux » ?",
          options: ["Peureux","Timide","Vaillant","Triste"],
          answer: 2,
          explication: "Vaillant = courageux, brave, valeureux. Peureux est l'ANTONYME (le contraire) de courageux."
        },
        {
          text: "Quel est l'antonyme (le contraire) de « généreux » ?",
          options: ["Avare","Riche","Gentil","Brave"],
          answer: 0,
          explication: "L'antonyme de généreux est avare : quelqu'un qui ne donne rien, qui garde tout pour lui."
        },
        {
          text: "Que signifie l'expression « avoir le cafard » ?",
          options: ["Être en colère","Être triste","Avoir peur","Être fatigué"],
          answer: 1,
          explication: "Au sens figuré, « avoir le cafard » signifie être triste, déprimé. C'est une expression familière."
        },
        {
          text: "Que signifie le préfixe « dé- » dans le mot « défaire » ?",
          options: ["Faire à nouveau","Faire en sens contraire","Faire rapidement","Faire lentement"],
          answer: 1,
          explication: "Le préfixe dé- exprime l'action contraire ou l'annulation : défaire = annuler ce qui a été fait."
        },
        {
          text: "Dans la famille du mot « terre », lequel n'en fait PAS partie ?",
          options: ["terrasse","terrain","terreur","territoire"],
          answer: 2,
          explication: "« terreur » vient du latin « terror » (la peur). Les autres (terrasse, terrain, territoire) viennent de « terra » (la terre)."
        },
        {
          text: "Quel est le synonyme du mot « débuter » ?",
          options: ["finir","commencer","arrêter","continuer"],
          answer: 1,
          explication: "« débuter » et « commencer » sont synonymes (sens proche). « finir » et « arrêter » sont des contraires."
        },
        {
          text: "Que signifie le suffixe « -able » dans « mangeable » ?",
          hint: "Pense à « lavable », « cassable »…",
          options: ["le contraire","qui peut être (fait)","petit","qui répète"],
          answer: 1,
          explication: "Le suffixe -able indique la possibilité : mangeable = qui peut être mangé, lavable = qui peut être lavé."
        },
        {
          text: "Quel mot est un homonyme de « ver » (l'animal) ?",
          hint: "Même son, sens et orthographe différents.",
          options: ["vert","vif","vrai","vent"],
          answer: 0,
          explication: "« ver », « vert », « vers », « verre » se prononcent pareil : ce sont des homonymes (homophones)."
        },
        {
          text: "Dans quel ordre ces mots apparaissent-ils dans le dictionnaire ?",
          options: ["bateau, balle, banane","balle, banane, bateau","banane, balle, bateau","bateau, banane, balle"],
          answer: 1,
          explication: "Ordre alphabétique sur la 2e lettre puis la 3e : bAlle, bAnane, bAteau → balle, banane, bateau."
        },
        {
          text: "Que veut dire l'expression « couper la poire en deux » ?",
          options: ["Préparer un dessert","Trouver un compromis, un arrangement","Se disputer","Partir en voyage"],
          answer: 1,
          explication: "« Couper la poire en deux » signifie faire un compromis : chacun fait un effort pour trouver un accord équitable."
        }
      ]
    },
    {
      id: "lecture",
      name: "Compréhension de lecture",
      emoji: "📖",
      desc: "Comprendre, déduire, identifier le sens",
      questions: [
        {
          text: "Que signifie le verbe « rétorquer » dans : « Il rétorqua qu'il avait raison. » ?",
          options: ["chuchoter","répondre avec vivacité","demander poliment","regretter"],
          answer: 1,
          explication: "« Rétorquer » = répondre vivement, répliquer pour contredire. Synonyme : « répliquer »."
        },
        {
          text: "Dans « Elle avait le cœur lourd en quittant sa maison », que ressent le personnage ?",
          options: ["De la joie","De la fatigue","De la tristesse","De la colère"],
          answer: 2,
          explication: "« Avoir le cœur lourd » est une expression imagée pour dire être triste, peiné. C'est du sens figuré."
        },
        {
          text: "Qui est le narrateur dans : « Je me promenais dans la forêt quand j'ai vu un cerf. » ?",
          options: ["Un narrateur extérieur à l'histoire","Un narrateur à la 1re personne (qui raconte ses propres actions)","Un narrateur omniscient qui sait tout","Il n'y a pas de narrateur"],
          answer: 1,
          explication: "Le pronom « je » indique un narrateur interne : le personnage raconte sa propre histoire à la 1re personne."
        },
        {
          text: "Dans « Le ciel était couvert, des nuages noirs s'amoncelaient. », à quoi peut-on s'attendre ?",
          hint: "C'est une déduction (inférence) à partir d'indices.",
          options: ["À une journée ensoleillée","À un orage ou de la pluie","À de la neige","À une chaleur intense"],
          answer: 1,
          explication: "Les nuages noirs qui s'amoncellent annoncent un orage ou une forte pluie. C'est une inférence : déduire ce qui n'est pas dit."
        },
        {
          text: "À quoi sert un dictionnaire ?",
          options: ["À apprendre l'histoire de France","À trouver le sens, l'orthographe et la nature d'un mot","À écrire des romans","À calculer des opérations"],
          answer: 1,
          explication: "Le dictionnaire donne la définition, l'orthographe, la nature grammaticale et parfois des exemples d'emploi des mots."
        },
        {
          text: "Dans un récit, qu'appelle-t-on un « personnage principal » ?",
          options: ["Le premier nom cité dans le texte","Le héros autour duquel l'histoire se construit","Le narrateur","L'auteur du livre"],
          answer: 1,
          explication: "Le personnage principal est celui dont l'histoire est centrale. Les autres sont des personnages secondaires."
        },
        {
          text: "Que signifie « être muet comme une carpe » ?",
          options: ["Parler beaucoup","Ne rien dire / garder le silence","Crier fort","Chanter"],
          answer: 1,
          explication: "Expression imagée : la carpe (poisson) ne fait pas de bruit → quelqu'un qui se tait totalement."
        },
        {
          text: "Comment cherche-t-on un mot dans un dictionnaire papier ?",
          options: ["Par nombre de lettres","Par ordre alphabétique","Par fréquence d'usage","Par ordre de difficulté"],
          answer: 1,
          explication: "Les dictionnaires papier classent les mots par ordre alphabétique (A, B, C…). Les mots-repères en haut des pages aident à se repérer."
        },
        {
          text: "Quel est le but d'un texte documentaire ?",
          options: ["Raconter une histoire imaginaire","Informer le lecteur sur un sujet réel","Faire pleurer","Donner un ordre"],
          answer: 1,
          explication: "Un texte documentaire apporte des informations vraies sur un sujet réel (animaux, sciences, histoire…). Il s'oppose au récit de fiction."
        },
        {
          text: "Dans « Léa, qui adorait lire, dévorait livre sur livre », que signifie « dévorait » ?",
          options: ["Elle mangeait","Elle lisait avec passion et rapidité","Elle jetait","Elle achetait"],
          answer: 1,
          explication: "Sens figuré : « dévorer un livre » = le lire très vite et avec passion (comme on mangerait avec gourmandise)."
        }
      ]
    },
    {
      id: "redaction",
      name: "Expression écrite",
      emoji: "✏️",
      desc: "Structure, ponctuation, formulation",
      questions: [
        {
          text: "Quelle phrase est la mieux construite pour commencer un récit ?",
          options: ["Le rouge.","Il était une fois un petit garçon qui vivait dans un village.","Mange courir vite.","Hier après-midi."],
          answer: 1,
          explication: "Une bonne phrase d'ouverture présente un personnage et un cadre. « Il était une fois » est un classique du conte."
        },
        {
          text: "Quel signe de ponctuation marque la fin d'une question ?",
          options: [". (point)","? (point d'interrogation)","! (point d'exclamation)",", (virgule)"],
          answer: 1,
          explication: "Le point d'interrogation (?) termine toute question : « Où vas-tu ? » À ne pas confondre avec le point d'exclamation (!)."
        },
        {
          text: "Quel connecteur logique exprime la conséquence ?",
          options: ["mais","parce que","donc","comme"],
          answer: 2,
          explication: "« Donc » exprime la conséquence : « Il pleut, donc je prends un parapluie. » « Parce que » exprime la cause."
        },
        {
          text: "Une phrase doit toujours commencer par...",
          options: ["Une virgule","Une majuscule","Un nombre","Un guillemet"],
          answer: 1,
          explication: "Toute phrase commence par une MAJUSCULE et se termine par un signe de ponctuation forte (., ?, !)."
        },
        {
          text: "Comment améliorer : « J'ai vu un chien. Le chien était noir. Le chien aboyait. » ?",
          options: ["Garder tel quel","Utiliser des pronoms : « J'ai vu un chien. Il était noir et aboyait. »","Supprimer le mot « chien »","Tout mettre en majuscules"],
          answer: 1,
          explication: "Pour éviter les répétitions, on utilise des pronoms (il, elle…) ou on relie les phrases. Cela rend le texte plus fluide."
        },
        {
          text: "Quel connecteur sert à exprimer le TEMPS dans un récit ?",
          options: ["car","ensuite","mais","donc"],
          answer: 1,
          explication: "« ensuite » organise les étapes dans le temps (puis, ensuite, enfin). « car/donc » = cause/conséquence, « mais » = opposition."
        },
        {
          text: "Dans un dialogue, quel signe annonce qu'un nouveau personnage prend la parole ?",
          options: ["Le point-virgule","Le tiret (—)","Les parenthèses","L'astérisque"],
          answer: 1,
          explication: "Dans un dialogue, le tiret (—) marque chaque nouvelle réplique. On utilise aussi les guillemets pour ouvrir et fermer le dialogue."
        },
        {
          text: "Pour éviter de répéter « le loup » dans un texte, on peut le remplacer par...",
          hint: "On cherche un pronom ou un synonyme.",
          options: ["il / l'animal / la bête","le loup à nouveau","rien du tout","un point"],
          answer: 0,
          explication: "Pour éviter les répétitions, on utilise des pronoms (il, le) ou des synonymes (l'animal, la bête, le prédateur)."
        },
        {
          text: "Quelle phrase est la plus précise et la plus vivante ?",
          options: ["Le chien fait du bruit.","Le gros chien noir aboyait furieusement contre le facteur.","Il y a un chien.","Le chien est là."],
          answer: 1,
          explication: "La 2e phrase apporte des détails (taille, couleur, action précise, contexte) : elle est plus vivante et imagée."
        },
        {
          type: "vrai_faux",
          text: "Dans un récit au passé, on raconte généralement avec l'imparfait et le passé simple.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. L'imparfait décrit le décor et les actions qui durent ; le passé simple raconte les actions courtes et soudaines."
        }
      ]
    },
    {
      id: "litterature",
      name: "Littérature & poésie",
      emoji: "📚",
      desc: "Genres littéraires, figures de style, auteurs",
      questions: [
        {
          text: "Comment appelle-t-on un texte écrit en vers ?",
          options: ["Un roman","Une fable","Un poème","Une biographie"],
          answer: 2,
          explication: "Un poème est un texte écrit en vers (lignes courtes), souvent avec des rimes. La fable est un type de poème (avec une morale)."
        },
        {
          text: "Quel auteur français est célèbre pour ses fables (animaux qui parlent + morale) ?",
          options: ["Victor Hugo","Jean de La Fontaine","Charles Perrault","Molière"],
          answer: 1,
          explication: "Jean de La Fontaine (XVIIe siècle) est l'auteur des Fables : Le Corbeau et le Renard, La Cigale et la Fourmi, Le Lièvre et la Tortue…"
        },
        {
          text: "Dans « Cette voiture file comme une flèche », quelle figure de style est utilisée ?",
          hint: "On compare une voiture à une flèche grâce au mot « comme ».",
          options: ["Une métaphore","Une comparaison","Une rime","Une exagération"],
          answer: 1,
          explication: "La COMPARAISON utilise un outil de comparaison (« comme », « tel », « pareil à »…). Sans outil, c'est une métaphore."
        },
        {
          text: "Qui a écrit les contes « Le Petit Chaperon Rouge » et « Cendrillon » ?",
          options: ["Hans Christian Andersen","Charles Perrault","Les frères Grimm","Antoine de Saint-Exupéry"],
          answer: 1,
          explication: "Charles Perrault (XVIIe siècle) a écrit les contes français : Cendrillon, Le Chat Botté, La Belle au Bois Dormant, Barbe Bleue…"
        },
        {
          text: "Dans un poème, qu'est-ce qu'une rime ?",
          options: ["Un mot inventé","Le même son qui se répète à la fin de plusieurs vers","Le titre du poème","Le nombre de mots par ligne"],
          answer: 1,
          explication: "Une rime = même son à la fin de plusieurs vers. Ex : « chanson / maison » ou « bateau / chapeau »."
        },
        {
          text: "Comment appelle-t-on un récit merveilleux avec des fées, des ogres ou des sorcières ?",
          options: ["Un roman policier","Un conte","Une biographie","Un documentaire"],
          answer: 1,
          explication: "Le conte est un récit merveilleux (souvent transmis oralement) avec des personnages magiques et une morale possible."
        },
        {
          text: "Dans la mythologie grecque, qui est le roi des dieux ?",
          hint: "Il lance la foudre depuis le mont Olympe.",
          options: ["Hadès","Poséidon","Zeus","Apollon"],
          answer: 2,
          explication: "Zeus est le roi des dieux de l'Olympe, maître du ciel et de la foudre. Poséidon règne sur la mer, Hadès sur les Enfers."
        },
        {
          text: "Quelle figure de style compare deux choses avec un mot comme « comme » ?",
          options: ["La métaphore","La comparaison","La répétition","L'exagération"],
          answer: 1,
          explication: "La comparaison relie deux éléments avec un outil de comparaison (comme, tel, pareil à). Sans cet outil, c'est une métaphore."
        },
        {
          text: "Qui est l'auteur du long poème « L'Odyssée », qui raconte le retour d'Ulysse ?",
          options: ["Molière","Victor Hugo","Homère","Jean de La Fontaine"],
          answer: 2,
          explication: "Homère, poète de la Grèce antique, est l'auteur de « L'Iliade » et de « L'Odyssée » (le voyage d'Ulysse vers Ithaque)."
        },
        {
          text: "Dans une pièce de théâtre, comment appelle-t-on le texte qu'un personnage dit ?",
          options: ["Une strophe","Une réplique","Un chapitre","Un refrain"],
          answer: 1,
          explication: "Au théâtre, chaque prise de parole est une réplique. Une longue réplique seul en scène s'appelle un monologue."
        }
      ]
    },
    {
      id: "homophones",
      name: "Homophones grammaticaux",
      emoji: "🔀",
      desc: "a/à, et/est, son/sont, ces/ses, ou/où",
      questions: [
        {
          text: "Complète : « Léa ___ un chat ___ la maison. »",
          hint: "« a » (verbe avoir, on peut dire AVAIT) ou « à » (préposition) ?",
          options: ["à / a","a / à","a / a","à / à"],
          answer: 1,
          explication: "« Léa a un chat » = verbe avoir (test : « Léa AVAIT un chat » ✓). « à la maison » = préposition de lieu."
        },
        {
          text: "Choisis : « Tom ___ content ___ Léa rit. »",
          hint: "Conjonction « et » (= aussi) ou verbe « est » (= être) ?",
          options: ["est / et","et / est","est / est","et / et"],
          answer: 0,
          explication: "« Tom est content » (verbe être, test : « Tom ÉTAIT content » ✓). « et Léa » = conjonction qui relie."
        },
        {
          text: "Choisis : « ___ parents ___ arrivés. »",
          hint: "Adjectif possessif (= les siens) ou verbe être au pluriel ?",
          options: ["Sont / ses","Ses / sont","Ses / ses","Sont / sont"],
          answer: 1,
          explication: "« Ses parents » = adjectif possessif (les parents de quelqu'un). « sont arrivés » = verbe être (3e pluriel)."
        },
        {
          text: "Complète : « ___ vas-tu en vacances, à la mer ___ à la montagne ? »",
          hint: "Le premier interroge sur le lieu, le second exprime un choix.",
          options: ["Ou / où","Où / ou","Ou / ou","Où / où"],
          answer: 1,
          explication: "« Où vas-tu ? » (avec accent = lieu, question). « ou » (sans accent) = choix entre deux options."
        },
        {
          text: "Choisis : « Regarde ___ beaux dessins ! »",
          hint: "Ce sont CES dessins-là (qu'on montre) ou les SIENS (possessif) ?",
          options: ["ces","ses","c'est","s'est"],
          answer: 0,
          explication: "« Ces beaux dessins » = adjectif démonstratif (ces = ceux-là, qu'on montre). « ses » serait possessif (= les siens)."
        },
        {
          text: "Complète : « Il ___ allé ___ l'école. »",
          hint: "« est » = verbe être ; « à » = préposition.",
          options: ["est / a","et / à","est / à","et / a"],
          answer: 2,
          explication: "« Il EST allé » (verbe être, on peut dire « était ») « À l'école » (préposition de lieu, avec accent)."
        },
        {
          text: "Choisis : « Je ne sais pas ___ il habite. »",
          hint: "« où » (lieu) ou « ou » (= ou bien) ?",
          options: ["ou","où","oux","hou"],
          answer: 1,
          explication: "« où » avec accent indique le lieu (= à quel endroit). « ou » sans accent signifie « ou bien » (un choix)."
        },
        {
          text: "Complète : « ___ amis sont venus. »",
          hint: "« Ses » (à lui/elle) ou « Ces » (ceux-là) ?",
          options: ["Ses","Ces","C'est","Sait"],
          answer: 0,
          explication: "« Ses amis » = les amis de quelqu'un (possessif). « Ces amis » serait possible mais désignerait des amis qu'on montre."
        },
        {
          text: "Choisis : « ___ trop tard pour partir. »",
          hint: "On peut remplacer par « cela est ».",
          options: ["Ces","Ses","C'est","Sais"],
          answer: 2,
          explication: "« C'est » = « cela est ». Test : « cela est trop tard » fonctionne, donc on écrit « C'est »."
        },
        {
          text: "Complète : « ___ chien aboie quand ___ joue. »",
          hint: "« Son » (possessif) / « son » ; « on » (pronom) joue.",
          options: ["On / son","Son / on","Son / son","On / on"],
          answer: 1,
          explication: "« SON chien » (à lui, possessif) « quand ON joue » (pronom, = quelqu'un). Test : « on » se remplace par « il »."
        }
      ]
    }
  ]
};
