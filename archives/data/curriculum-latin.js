/* Matière : Latin & racines 🏛️
   4 thèmes × 10 questions = 40 questions */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["latin"] = {
  id: "latin",
  name: "Latin & racines",
  emoji: "🏛️",
  desc: "Racines, expressions, mythologie",
  topics: [
    {
      id: "racines_lat",
      name: "Racines latines",
      emoji: "🌿",
      desc: "Mots français issus du latin",
      questions: [
        {
          text: "La racine latine « aqua » signifie...",
          hint: "Pense au mot « aquarium ».",
          options: ["eau","feu","terre","air"],
          answer: 0,
          explication: "« Aqua » = eau en latin. On la retrouve dans aquarium (récipient d'eau), aquatique (relatif à l'eau), aqueduc (qui conduit l'eau)."
        },
        {
          text: "Quel mot français vient du latin « luna » (= la Lune) ?",
          options: ["lundi","samedi","vendredi","dimanche"],
          answer: 0,
          explication: "Lundi vient de « lunae dies » (le jour de la Lune) en latin. Les jours de la semaine sont issus du latin (mardi = Mars, mercredi = Mercure…)."
        },
        {
          text: "La racine « manus » en latin signifie...",
          hint: "Pense à « manuel », « manuscrit ».",
          options: ["pied","main","tête","œil"],
          answer: 1,
          explication: "« Manus » = la main. On la retrouve dans manuel (travail à la main), manuscrit (écrit à la main), manipuler, manucure."
        },
        {
          text: "Que signifie « terra » en latin ?",
          options: ["la terre","le ciel","la mer","le feu"],
          answer: 0,
          explication: "« Terra » = la terre. On la retrouve dans terrestre, territoire, terrain, atterrir (poser à terre), terrier."
        },
        {
          text: "« Audire » en latin signifie...",
          hint: "Pense à « auditeur ».",
          options: ["voir","entendre / écouter","parler","courir"],
          answer: 1,
          explication: "« Audire » = entendre. On la retrouve dans auditeur, audition, audible, audiovisuel (qui se voit ET s'entend)."
        },
        {
          text: "Quel mot français vient du latin « scribere » (= écrire) ?",
          options: ["scrutateur","scribe","score","écharpe"],
          answer: 1,
          explication: "« Scribere » = écrire. D'où viennent scribe (écrivain dans l'Antiquité), inscription, prescription, manuscrit, écriture."
        },
        {
          text: "La racine « porto » (latin « portare ») signifie...",
          options: ["jeter","manger","porter / transporter","rire"],
          answer: 2,
          explication: "« Portare » = porter. On la retrouve dans porter, porte (qui sert à passer), transport, portable (qu'on peut porter), import (porter vers l'intérieur)."
        },
        {
          text: "Que signifie « bene » en latin ?",
          hint: "Le contraire est « mal ».",
          options: ["mal","bien","petit","grand"],
          answer: 1,
          explication: "« Bene » = bien. On la retrouve dans bénéfice, bénir, bienveillant, bénédiction. « Mal » donne maléfique, malheur."
        },
        {
          type: "qcm",
          text: "Parmi ces mots, lesquels viennent de la racine latine « video / videre » (= voir) ?",
          options: ["vidéo","visible","audible","violon"],
          answer: [0,1],
          explication: "Vidéo et visible viennent de « videre » (voir). Audible vient d'« audire » (entendre). Violon n'a pas de lien avec la vue."
        },
        {
          type: "vrai_faux",
          text: "Beaucoup de mots français viennent du latin, parce que le latin était la langue de la Rome antique et de la Gaule romaine.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Le français descend du latin parlé en Gaule sous l'Empire romain. On estime qu'environ 80 % du vocabulaire français a une origine latine."
        }
      ]
    },
    {
      id: "racines_grec",
      name: "Racines grecques",
      emoji: "📜",
      desc: "Mots français issus du grec",
      questions: [
        {
          text: "Que signifie la racine grecque « hydro » ?",
          hint: "Pense à « hydraulique ».",
          options: ["eau","feu","terre","vent"],
          answer: 0,
          explication: "« Hydro » = eau en grec. On la retrouve dans hydraulique, hydrater, déshydraté, hydrogène (qui produit de l'eau), hydrothérapie."
        },
        {
          text: "Que signifie « bio » en grec ?",
          options: ["vie","machine","lumière","feu"],
          answer: 0,
          explication: "« Bio » = vie. On la retrouve dans biologie (étude de la vie), biographie (récit d'une vie), antibiotique (contre les micro-organismes vivants)."
        },
        {
          text: "La racine « tele » signifie...",
          hint: "Téléphone, télévision, télescope…",
          options: ["loin","près","haut","bas"],
          answer: 0,
          explication: "« Tele » = loin. On la retrouve dans téléphone (son à distance), télévision (vision à distance), télescope (regarder loin), télégramme."
        },
        {
          text: "Que signifie « chronos » en grec ?",
          options: ["le temps","l'espace","la couleur","le son"],
          answer: 0,
          explication: "« Chronos » = le temps. On la retrouve dans chronomètre (mesure du temps), chronologie, synchronisé (en même temps), chronique."
        },
        {
          text: "Que signifie la racine « graphe / graphein » ?",
          hint: "Pense à « graphique ».",
          options: ["écrire / dessiner","manger","courir","voir"],
          answer: 0,
          explication: "« Graphein » = écrire/dessiner. On la retrouve dans orthographe (écriture correcte), photographie (écrire avec la lumière), graphique, biographie."
        },
        {
          text: "Que signifie « micro » en grec ?",
          options: ["petit","grand","rapide","rouge"],
          answer: 0,
          explication: "« Micro » = petit. On la retrouve dans microscope (voir le petit), microbe, micro-onde, micro (petit appareil pour la voix). L'opposé est « macro » (grand)."
        },
        {
          text: "Que signifie « phobie » en grec ?",
          hint: "Claustrophobie, arachnophobie…",
          options: ["peur","amour","savoir","vitesse"],
          answer: 0,
          explication: "« Phobos » = peur. Claustrophobie = peur des espaces clos, arachnophobie = peur des araignées, agoraphobie = peur des espaces ouverts."
        },
        {
          text: "Que signifie la racine « zoo » ?",
          options: ["animal","plante","minéral","humain"],
          answer: 0,
          explication: "« Zoo / zôon » = animal. On la retrouve dans zoo (parc à animaux), zoologie (étude des animaux), protozoaire (animal microscopique)."
        },
        {
          type: "qcm",
          text: "Parmi ces mots, lesquels viennent du grec « polis » (= ville) ?",
          options: ["politique","policier","police","polaire"],
          answer: [0,1,2],
          explication: "Politique, policier, police viennent de « polis » (la cité, la ville). Polaire vient de « polos » (l'axe), sans rapport."
        },
        {
          type: "vrai_faux",
          text: "Beaucoup de mots scientifiques (biologie, géographie, astronomie…) ont une origine grecque.",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. Beaucoup de termes scientifiques sont formés à partir de racines grecques : -logie (étude), -graphie (description), -nomie (lois)…"
        }
      ]
    },
    {
      id: "expressions_lat",
      name: "Expressions latines",
      emoji: "💬",
      desc: "Locutions latines encore utilisées",
      questions: [
        {
          text: "Que signifie l'expression « Carpe diem » ?",
          options: ["Profite du jour présent","Bonne nuit","Cours vite","Tu as raison"],
          answer: 0,
          explication: "« Carpe diem » = « cueille le jour », c'est-à-dire profite du moment présent. Expression du poète latin Horace, devenue célèbre dans le monde entier."
        },
        {
          text: "Que signifie « Et cetera » (etc.) ?",
          options: ["Et le reste / et les autres choses","Au revoir","Très bien","Faux"],
          answer: 0,
          explication: "« Et cetera » signifie « et les autres choses ». Abrégé en « etc. », on l'emploie pour éviter une longue liste : « les fruits : pommes, poires, etc. »"
        },
        {
          text: "Que veut dire « A priori » ?",
          options: ["À première vue, avant examen","Définitivement","Sans raison","Au contraire"],
          answer: 0,
          explication: "« A priori » = à première vue, avant d'avoir examiné de près. « A posteriori » signifie l'inverse : après examen, en s'appuyant sur l'expérience."
        },
        {
          text: "L'abréviation « P.S. » (post-scriptum) signifie...",
          options: ["Écrit après","Avant tout","Pour s'amuser","Pour la suite"],
          answer: 0,
          explication: "« Post-scriptum » (P.S.) = « écrit après ». On l'utilise à la fin d'une lettre pour ajouter quelque chose après la signature."
        },
        {
          text: "Que veut dire « ex aequo » ?",
          hint: "Souvent utilisé pour des compétitions.",
          options: ["À égalité","Le meilleur","Le perdant","Très rapide"],
          answer: 0,
          explication: "« Ex aequo » = à égalité, au même rang. « Deux élèves sont arrivés premiers ex aequo » = ils sont à égalité au classement."
        },
        {
          text: "Que signifie l'abréviation « cf. » dans un texte ?",
          options: ["Compare / voir aussi (du latin « confer »)","Ce n'est pas important","Conclusion finale","Cher frère"],
          answer: 0,
          explication: "« cf. » vient du latin « confer » qui signifie « compare avec » ou « voir aussi ». On l'utilise pour renvoyer le lecteur à une autre source."
        },
        {
          text: "Que veut dire « in extremis » ?",
          options: ["Au tout dernier moment","Très loin","Au début","Sans difficulté"],
          answer: 0,
          explication: "« In extremis » = au tout dernier moment, juste avant qu'il ne soit trop tard. « Il a réussi son train in extremis. »"
        },
        {
          text: "Que signifie « Veni, vidi, vici » prononcé par Jules César ?",
          hint: "« Vincere » = vaincre.",
          options: ["Je suis venu, j'ai vu, j'ai vaincu","Bonjour à tous","Travaillez bien","Romains, écoutez"],
          answer: 0,
          explication: "« Veni, vidi, vici » = « Je suis venu, j'ai vu, j'ai vaincu ». Phrase célèbre de Jules César après une victoire rapide, devenue symbole d'efficacité."
        },
        {
          text: "Que signifie « Alea jacta est » ?",
          options: ["Les dés sont jetés","Au plaisir","Bon courage","Bienvenue à Rome"],
          answer: 0,
          explication: "« Alea jacta est » = « les dés sont jetés ». Phrase attribuée à Jules César franchissant le Rubicon : la décision est prise, on ne peut plus revenir en arrière."
        },
        {
          type: "vrai_faux",
          text: "L'expression « bis » qu'on crie à la fin d'un concert vient du latin et signifie « deux fois ».",
          options: ["Vrai","Faux"],
          answer: 0,
          explication: "VRAI. « Bis » signifie « deux fois » en latin : on demande aux artistes de rejouer un morceau (de le « refaire »)."
        }
      ]
    },
    {
      id: "mythologie",
      name: "Mythologie gréco-romaine",
      emoji: "⚔️",
      desc: "Dieux, héros, récits",
      questions: [
        {
          text: "Qui est le roi des dieux dans la mythologie grecque ?",
          options: ["Zeus","Apollon","Hadès","Arès"],
          answer: 0,
          explication: "Zeus, maître du ciel et de la foudre, règne sur les dieux de l'Olympe. Chez les Romains, il s'appelle Jupiter."
        },
        {
          text: "Quel dieu grec règne sur la mer et brandit un trident ?",
          options: ["Poséidon","Apollon","Hermès","Dionysos"],
          answer: 0,
          explication: "Poséidon est le dieu grec de la mer, des séismes et des chevaux. Il porte un trident. Chez les Romains : Neptune."
        },
        {
          text: "Qui est Hadès dans la mythologie grecque ?",
          hint: "Il vit dans le monde souterrain.",
          options: ["Le dieu des Enfers (royaume des morts)","Le roi des animaux","Le dieu du vent","Le dieu de la pluie"],
          answer: 0,
          explication: "Hadès règne sur les Enfers, le royaume des morts. Il n'est pas méchant mais redouté. Chez les Romains : Pluton."
        },
        {
          text: "Quel héros grec a vaincu la Méduse, une créature dont le regard pétrifiait ?",
          options: ["Persée","Achille","Ulysse","Hercule"],
          answer: 0,
          explication: "Persée a vaincu la Gorgone Méduse en utilisant son bouclier comme miroir pour éviter son regard. Il lui a tranché la tête."
        },
        {
          text: "Qui est l'auteur des récits « L'Iliade » et « L'Odyssée » ?",
          options: ["Homère","Platon","Virgile","Aristote"],
          answer: 0,
          explication: "Homère, poète grec, est l'auteur de l'Iliade (la guerre de Troie) et de l'Odyssée (le retour d'Ulysse à Ithaque)."
        },
        {
          text: "Quel héros revient chez lui à Ithaque après dix ans d'errance, dans l'Odyssée ?",
          options: ["Ulysse","Hercule","Achille","Thésée"],
          answer: 0,
          explication: "Ulysse (Odusseus en grec) met dix ans à rentrer chez lui après la guerre de Troie, affrontant cyclopes, sirènes, tempêtes…"
        },
        {
          text: "Qui sont les douze travaux célèbres dans la mythologie ?",
          options: ["Les douze épreuves accomplies par Hercule","Les douze mois de l'année","Les douze dieux mineurs","Les douze cités grecques"],
          answer: 0,
          explication: "Hercule (Héraclès chez les Grecs) accomplit douze travaux pour expier ses fautes : tuer le lion de Némée, l'hydre de Lerne, capturer Cerbère, etc."
        },
        {
          text: "Comment appelle-t-on les guerriers cachés dans un cheval géant en bois pour entrer dans Troie ?",
          options: ["Les Grecs (ruse du cheval de Troie)","Les Romains","Les Égyptiens","Les Perses"],
          answer: 0,
          explication: "Les Grecs ont fait croire à un cadeau : un cheval géant en bois. Caché à l'intérieur, leurs soldats sont sortis la nuit pour ouvrir les portes de Troie. C'est la ruse du « cheval de Troie »."
        },
        {
          type: "qcm",
          text: "Parmi ces dieux, lesquels font partie des dieux GRECS ?",
          options: ["Zeus","Apollon","Jupiter","Athéna"],
          answer: [0,1,3],
          explication: "Zeus, Apollon et Athéna sont grecs. Jupiter est leur équivalent romain (= Zeus). Beaucoup de dieux romains sont des « copies » des dieux grecs."
        },
        {
          text: "Quelle déesse, fille de Zeus, est associée à la sagesse, à la guerre stratégique et porte un casque ?",
          hint: "Elle donne son nom à la capitale de la Grèce.",
          options: ["Athéna","Aphrodite","Héra","Artémis"],
          answer: 0,
          explication: "Athéna est la déesse de la sagesse, de la stratégie militaire et des artisans. La ville d'Athènes lui est dédiée. Chez les Romains : Minerve."
        }
      ]
    }
  ]
};
