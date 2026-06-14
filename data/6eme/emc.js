/* Matière : EMC ⚖️ — Enseignement Moral et Civique (6ème)
   10 thèmes × 10 questions = 100 questions
   Programme officiel 6ème : vivre ensemble, citoyenneté, valeurs républicaines. */
window.CURRICULUM_PARTS = window.CURRICULUM_PARTS || {};
window.CURRICULUM_PARTS["6eme"] = window.CURRICULUM_PARTS["6eme"] || {};
window.CURRICULUM_PARTS["6eme"]["emc"] = {
  id: "emc",
  name: "EMC",
  emoji: "⚖️",
  desc: "Citoyenneté, vivre ensemble et valeurs républicaines",
  topics: [
    {
      id: "reglement_vie",
      name: "Règlement intérieur et vie de classe",
      emoji: "📋",
      desc: "Règles, droits et devoirs dans l'établissement",
      questions: [
        {
          text: "Qu'est-ce que le règlement intérieur d'un collège ?",
          options: ["un document secret réservé aux professeurs", "un document officiel qui fixe les droits et les devoirs de tous les membres de la communauté scolaire", "un règlement sportif", "une liste de punitions"],
          answer: 1,
          hint: "Il s'applique à tous : élèves, personnels, parents.",
          explication: "Le règlement intérieur est un document officiel adopté par le conseil d'administration du collège. Il définit les droits et les devoirs de tous les membres de la communauté éducative."
        },
        {
          text: "Pourquoi les règles de vie en classe sont-elles nécessaires ?",
          options: ["pour punir les élèves", "pour permettre à tous de travailler dans de bonnes conditions et de vivre ensemble", "pour embêter les élèves", "uniquement pour les professeurs"],
          answer: 1,
          hint: "Sans règles, le travail collectif serait impossible.",
          explication: "Les règles de vie permettent d'assurer le bon déroulement des cours, le respect mutuel et la sécurité. Elles sont la condition du vivre-ensemble."
        },
        {
          text: "Le droit d'expression des élèves dans un collège est…",
          options: ["interdit", "reconnu, mais s'exerce dans le respect des autres et du règlement", "illimité sans aucune contrainte", "réservé aux délégués uniquement"],
          answer: 1,
          hint: "La liberté s'arrête où commence celle des autres.",
          explication: "Les élèves ont le droit d'expression, mais il s'exerce dans le respect des règles de vie scolaire, de la dignité des personnes et sans perturber le bon fonctionnement des cours."
        },
        {
          text: "Quel est le devoir principal d'un élève à l'école ?",
          options: ["obéir à toutes les décisions sans les questionner", "assister aux cours avec assiduité et respect", "rapporter ce que font ses camarades", "ne pas parler en cours"],
          answer: 1,
          hint: "La loi rend la scolarité obligatoire jusqu'à 16 ans.",
          explication: "L'élève a le devoir d'assister régulièrement aux cours, de respecter les professeurs et les camarades, et de s'investir dans son travail scolaire."
        },
        {
          type: "vrai_faux",
          text: "Un élève peut refuser d'obéir à une règle du règlement intérieur si elle lui semble injuste.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Il existe des voies légitimes pour contester une règle.",
          explication: "FAUX. Un élève doit respecter le règlement intérieur en vigueur. S'il juge une règle injuste, il peut en parler à ses délégués ou à ses parents pour contester par les voies prévues (CPE, conseil d'administration)."
        },
        {
          text: "Un élève qui perturbe régulièrement le cours risque…",
          options: ["une médaille", "rien, le règlement ne prévoit rien", "des sanctions graduées (avertissement, retenue, exclusion temporaire…)", "uniquement d'être changé de classe"],
          answer: 2,
          hint: "Le règlement prévoit une échelle de sanctions.",
          explication: "Le règlement intérieur prévoit une échelle de sanctions graduées : avertissement, retenue, exclusion temporaire de cours, voire exclusion de l'établissement pour les cas graves."
        },
        {
          text: "Que signifie 'la laïcité' dans le cadre scolaire ?",
          options: ["interdire toute religion", "garantir la neutralité de l'école et le respect de toutes les convictions", "imposer une religion d'État", "interdire de croire en quoi que ce soit"],
          answer: 1,
          hint: "L'école respecte toutes les convictions sans en imposer aucune.",
          explication: "La laïcité à l'école garantit la neutralité : aucune religion n'est imposée, enseignée comme vérité ni favorisée. Chaque élève peut avoir ses convictions en les gardant dans la sphère privée."
        },
        {
          text: "Comment peut-on faire changer une règle du règlement intérieur qui semble injuste ?",
          options: ["en la violant systématiquement", "en portant la demande via les délégués au conseil d'administration", "en faisant grève", "ce n'est pas possible"],
          answer: 1,
          hint: "Il existe des instances représentatives.",
          explication: "Les élèves peuvent s'exprimer via leurs délégués qui siègent au conseil de classe et au conseil d'administration. Ce dernier peut modifier le règlement intérieur."
        },
        {
          type: "vrai_faux",
          text: "Les sanctions scolaires doivent être proportionnelles à la faute commise.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "C'est un principe fondamental du droit.",
          explication: "VRAI. Le principe de proportionnalité est fondamental : la sanction doit être adaptée à la gravité de la faute. Une exclusion définitive pour un oubli de cahier serait disproportionnée."
        },
        {
          text: "Qu'est-ce que le Conseil de Vie Collégienne (CVC) ?",
          options: ["un conseil des professeurs uniquement", "une instance représentative où des élèves travaillent sur l'amélioration de la vie au collège", "une réunion de parents d'élèves", "une commission disciplinaire"],
          answer: 1,
          hint: "Les élèves y ont une voix.",
          explication: "Le CVC (ou CVL au lycée) est une instance où des élèves élus travaillent avec les adultes pour améliorer la vie scolaire, proposer des projets et s'exprimer sur le règlement."
        }
      ]
    },
    {
      id: "harcelement",
      name: "Le harcèlement scolaire",
      emoji: "🛡️",
      desc: "Reconnaître, comprendre et réagir",
      questions: [
        {
          text: "Comment définit-on le harcèlement scolaire ?",
          options: ["une dispute unique entre deux élèves", "des violences répétées (physiques, verbales ou psychologiques) sur une même victime dans un rapport de force déséquilibré", "une mauvaise blague entre amis", "un conflit entre professeurs et élèves"],
          answer: 1,
          hint: "Trois critères : répétition, intentionnalité, déséquilibre des forces.",
          explication: "Le harcèlement scolaire est caractérisé par la répétition (pas un acte isolé), l'intentionnalité (volonté de faire souffrir) et un rapport de force inégal entre l'agresseur et la victime."
        },
        {
          text: "Le cyberharcèlement, c'est…",
          options: ["jouer trop longtemps aux jeux vidéo", "du harcèlement via les outils numériques (réseaux sociaux, messageries, Internet)", "envoyer des messages à ses amis", "regarder des vidéos en ligne"],
          answer: 1,
          hint: "Il se produit en ligne et peut toucher la victime 24h/24.",
          explication: "Le cyberharcèlement est une forme de harcèlement qui utilise les outils numériques : insultes, menaces, moqueries, diffusion de photos humiliantes sur les réseaux sociaux ou messageries."
        },
        {
          text: "Que doit faire un élève témoin de harcèlement ?",
          options: ["rien, ce n'est pas son problème", "encourager les harceleurs", "prévenir un adulte de confiance (professeur, CPE, parent) et soutenir la victime", "filmer la scène pour la poster en ligne"],
          answer: 2,
          hint: "Ne pas rester passif, c'est aussi une forme de courage.",
          explication: "Un témoin de harcèlement doit agir : prévenir un adulte (professeur, CPE, infirmière, parent) et ne pas encourager les harceleurs. Le silence des témoins entretient le harcèlement."
        },
        {
          text: "Lequel de ces comportements est du harcèlement ?",
          options: ["se disputer une fois avec un camarade", "se moquer régulièrement d'un même élève devant tout le monde", "faire une blague que les deux parties trouvent drôle", "avoir un désaccord sur un jeu"],
          answer: 1,
          hint: "La répétition est le critère clé.",
          explication: "Se moquer régulièrement d'un même élève est du harcèlement : c'est répété, intentionnel et crée une souffrance. Une dispute ponctuelle ou une blague mutuelle ne sont pas du harcèlement."
        },
        {
          type: "vrai_faux",
          text: "La victime de harcèlement est responsable du comportement de ses harceleurs.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Personne ne mérite d'être harcelé.",
          explication: "FAUX. La victime n'est jamais responsable du harcèlement. Les harceleurs sont seuls responsables de leurs actes. Accuser la victime est une forme de revictimisation."
        },
        {
          text: "Quel numéro national gratuit peut appeler un élève victime ou témoin de harcèlement ?",
          options: ["le 15", "le 3020", "le 112", "le 119"],
          answer: 1,
          hint: "C'est le numéro dédié au harcèlement scolaire.",
          explication: "Le 3020 est le numéro national gratuit dédié au harcèlement scolaire, accessible du lundi au vendredi. Des professionnels écoutent et conseillent les victimes et les témoins."
        },
        {
          text: "Qu'est-ce que l'effet spectateur (bystander effect) ?",
          options: ["un programme anti-harcèlement", "le phénomène par lequel les témoins n'interviennent pas en croyant que d'autres le feront", "une forme de harcèlement", "une loi sur le harcèlement"],
          answer: 1,
          hint: "Plus il y a de témoins, moins chacun agit.",
          explication: "L'effet spectateur (bystander effect) désigne le phénomène où chaque témoin pense que quelqu'un d'autre va intervenir, si bien que personne ne le fait. C'est pourquoi il faut agir individuellement."
        },
        {
          text: "Le harcèlement scolaire peut provoquer chez la victime…",
          options: ["une amélioration des résultats scolaires", "une chute des résultats scolaires, de l'anxiété, une dépression, des idées suicidaires", "aucun effet", "plus de popularité"],
          answer: 1,
          hint: "Les conséquences peuvent être graves et durables.",
          explication: "Le harcèlement peut provoquer des troubles graves : baisse des résultats, refus de l'école, anxiété, dépression, troubles du sommeil et, dans les cas les plus graves, des idées suicidaires."
        },
        {
          type: "vrai_faux",
          text: "Le cyberharcèlement est moins grave que le harcèlement physique car il se passe en ligne.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Il peut toucher la victime partout et à toute heure.",
          explication: "FAUX. Le cyberharcèlement peut être aussi grave voire plus grave : il suit la victime partout et à toute heure, les contenus humiliants peuvent être vus par des milliers de personnes et restent accessibles longtemps."
        },
        {
          text: "Quelle attitude des adultes et de l'institution scolaire face au harcèlement est la plus efficace ?",
          options: ["ignorer pour ne pas aggraver", "minimiser ('c'est de la chamaillerie')", "prendre au sérieux chaque signalement et agir rapidement selon un protocole", "punir uniquement l'agresseur sans accompagnement"],
          answer: 2,
          hint: "L'inaction entretient le harcèlement.",
          explication: "Prendre au sérieux les signalements, enquêter rapidement, protéger la victime, accompagner l'agresseur et informer les parents sont les éléments d'une réponse efficace de l'institution."
        }
      ]
    },
    {
      id: "laicite",
      name: "La laïcité à l'école",
      emoji: "🕊️",
      desc: "Principe, histoire et application au quotidien",
      questions: [
        {
          text: "En quelle année a été votée la loi de séparation des Églises et de l'État en France ?",
          options: ["1789", "1905", "1958", "1968"],
          answer: 1,
          hint: "Au début du XXe siècle.",
          explication: "La loi du 9 décembre 1905 a établi la séparation des Églises et de l'État en France, posant le fondement de la laïcité républicaine."
        },
        {
          text: "Que garantit la laïcité à chaque citoyen français ?",
          options: ["le droit d'imposer sa religion aux autres", "la liberté de conscience : croire ou ne pas croire sans pression ni discrimination", "l'interdiction de toute religion", "le droit à une religion officielle"],
          answer: 1,
          hint: "Ni obligation ni interdiction de croire.",
          explication: "La laïcité garantit la liberté de conscience : chaque citoyen est libre de croire ou de ne pas croire, de pratiquer une religion ou d'être athée, sans subir de discrimination."
        },
        {
          text: "Les agents de l'État (fonctionnaires) ont-ils le droit d'afficher leurs convictions religieuses dans l'exercice de leurs fonctions ?",
          options: ["Oui, librement", "Non, ils sont tenus à un devoir de neutralité stricte", "Uniquement pendant les pauses", "Cela dépend de leur grade"],
          answer: 1,
          hint: "Le service public est neutre.",
          explication: "Les fonctionnaires sont soumis au principe de neutralité du service public : ils ne doivent pas afficher leurs convictions religieuses, politiques ou philosophiques dans l'exercice de leurs missions."
        },
        {
          text: "Depuis la loi de 2004, que ne peuvent pas porter les élèves dans les établissements scolaires publics ?",
          options: ["des bijoux", "des signes ostensibles d'appartenance religieuse (voile, grande croix, kippah…)", "des vêtements de marque", "des téléphones portables"],
          answer: 1,
          hint: "La loi concerne les 'signes ostensibles'.",
          explication: "La loi du 15 mars 2004 interdit le port de signes ou tenues manifestant ostensiblement une appartenance religieuse dans les écoles, collèges et lycées publics."
        },
        {
          type: "vrai_faux",
          text: "La laïcité interdit aux élèves d'avoir une religion.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La laïcité protège la liberté de conscience.",
          explication: "FAUX. La laïcité ne s'oppose pas à la religion : elle garantit la liberté de croire ou de ne pas croire. Elle interdit d'imposer ses convictions à l'autre et exige la neutralité des agents de l'État."
        },
        {
          text: "Dans une école publique française, la religion peut-elle être enseignée comme vérité ?",
          options: ["Oui, si les parents le demandent", "Non, les religions sont étudiées en histoire et culture, pas enseignées comme vérités", "Oui, si c'est la religion majoritaire", "Oui, dans les cours d'EMC"],
          answer: 1,
          hint: "L'école est neutre sur les questions religieuses.",
          explication: "Dans une école publique, aucune religion n'est enseignée comme vérité. Les faits religieux sont étudiés en histoire-géographie ou en cours de lettres comme éléments culturels."
        },
        {
          text: "Comment s'appelle la loi qui a officialisé la laïcité à l'école primaire publique en France ?",
          options: ["les lois Ferry (1881-1882)", "la loi de 1905", "la loi de 2004", "la loi de 1958"],
          answer: 0,
          hint: "Jules Ferry, ministre de l'Instruction publique.",
          explication: "Les lois Jules Ferry (1881-1882) ont rendu l'école primaire publique gratuite, laïque et obligatoire. Elles ont retiré l'enseignement religieux des programmes de l'école publique."
        },
        {
          text: "La laïcité est inscrite dans…",
          options: ["le règlement intérieur des écoles uniquement", "la Constitution française (article 1er)", "une loi ordinaire révisable facilement", "les traités européens"],
          answer: 1,
          hint: "C'est un principe fondamental de la République.",
          explication: "L'article 1er de la Constitution de 1958 stipule : 'La France est une République indivisible, laïque, démocratique et sociale.' La laïcité est donc un principe constitutionnel."
        },
        {
          type: "vrai_faux",
          text: "Les établissements scolaires privés sous contrat sont également soumis au principe de laïcité stricte.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Ils ont une plus grande liberté pédagogique.",
          explication: "FAUX. Les établissements privés sous contrat bénéficient d'une plus grande liberté : ils peuvent avoir un caractère propre (souvent religieux) et ne sont pas soumis aux mêmes règles que les écoles publiques."
        },
        {
          text: "Pourquoi dit-on que la laïcité est un 'ciment républicain' ?",
          options: ["parce qu'elle oblige tout le monde à penser pareil", "parce qu'elle permet à des citoyens aux convictions différentes de vivre ensemble sous les mêmes lois", "parce qu'elle date de la Révolution française", "parce qu'elle est très rigide"],
          answer: 1,
          hint: "Elle unit sans uniformiser.",
          explication: "La laïcité permet à des citoyens aux croyances très diverses de vivre ensemble et d'être égaux devant la loi, sans que leurs convictions privées ne soient source de discrimination ou de hiérarchie."
        }
      ]
    },
    {
      id: "symboles_republique",
      name: "Les symboles de la République",
      emoji: "🇫🇷",
      desc: "Drapeau, Marianne, devise, hymne, fête nationale",
      questions: [
        {
          text: "Quelle est la devise de la République française ?",
          options: ["Patrie, Honneur, Valeur", "Liberté, Égalité, Fraternité", "Un pour tous, tous pour un", "Liberté, Laïcité, Solidarité"],
          answer: 1,
          hint: "Trois mots symbolisant les valeurs fondamentales.",
          explication: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle est inscrite sur les édifices publics et dans la Constitution."
        },
        {
          text: "Quelles sont les couleurs du drapeau français dans l'ordre (de la hampe vers le bord libre) ?",
          options: ["rouge, blanc, bleu", "bleu, blanc, rouge", "blanc, bleu, rouge", "rouge, bleu, blanc"],
          answer: 1,
          hint: "Du côté de la hampe au côté libre.",
          explication: "Le drapeau tricolore français est composé de bleu (côté hampe), blanc (au centre) et rouge (côté libre). Il symbolise l'union entre le roi (blanc) et Paris (bleu et rouge)."
        },
        {
          text: "Qui est Marianne ?",
          options: ["une reine de France", "une figure allégorique représentant la République française", "une héroïne de la Révolution", "la statue de la Liberté"],
          answer: 1,
          hint: "On la voit sur les mairies et les timbres.",
          explication: "Marianne est l'allégorie de la République française : elle symbolise la liberté et la raison. Son buste orne toutes les mairies et ses portraits figurent sur les timbres officiels."
        },
        {
          text: "Quel est l'hymne national français ?",
          options: ["La Marseillaise", "Le Chant du départ", "L'Internationale", "Ode à la joie"],
          answer: 0,
          hint: "Composé en 1792 par Rouget de Lisle.",
          explication: "La Marseillaise est l'hymne national français depuis 1879. Composé en 1792 par Rouget de Lisle pendant la Révolution, elle est chantée lors des cérémonies officielles et des compétitions sportives."
        },
        {
          text: "Le 14 juillet est fêté en France. Que commémore cette date ?",
          options: ["la naissance de Napoléon", "la prise de la Bastille en 1789 et la Fête de la Fédération en 1790", "la fin de la Seconde Guerre mondiale", "la signature de la Constitution de 1958"],
          answer: 1,
          hint: "Début de la Révolution française.",
          explication: "Le 14 juillet commémore la prise de la Bastille le 14 juillet 1789 (symbole de la chute de l'absolutisme royal) et la Fête de la Fédération du 14 juillet 1790 (unité nationale)."
        },
        {
          type: "vrai_faux",
          text: "La 'Liberté guidant le peuple' de Delacroix représente Marianne.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Le tableau de 1830 représente la Liberté.",
          explication: "VRAI. La femme au bonnet phrygien dans le tableau de Delacroix (1830) représente la Liberté, figure allégorique qui est une des incarnations de Marianne."
        },
        {
          text: "Qu'est-ce que le bonnet phrygien, souvent représenté sur la tête de Marianne ?",
          options: ["un symbole royal", "un symbole de liberté repris de l'Antiquité par les révolutionnaires de 1789", "un couvre-chef militaire", "un symbole religieux"],
          answer: 1,
          hint: "Porté dans l'Antiquité par les esclaves affranchis.",
          explication: "Le bonnet phrygien était porté dans l'Antiquité par les esclaves affranchis. Les révolutionnaires français l'ont adopté comme symbole de la liberté reconquise."
        },
        {
          text: "Quelle institution a pour rôle de faire respecter la Constitution et les lois fondamentales en France ?",
          options: ["le Parlement", "le gouvernement", "le Conseil constitutionnel", "la mairie"],
          answer: 2,
          hint: "Il vérifie que les lois sont conformes à la Constitution.",
          explication: "Le Conseil constitutionnel est chargé de veiller à la conformité des lois avec la Constitution française. Il peut annuler une loi contraire à la Constitution."
        },
        {
          type: "vrai_faux",
          text: "La France est une République depuis la Révolution de 1789, sans interruption.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Napoléon, les rois, les empereurs…",
          explication: "FAUX. La France a alterné entre républiques, empire et monarchies : 1ère République (1792), Empire napoléonien, Restauration monarchique, 2ème République, 2ème Empire, avant la 3ème République (1870) et les régimes suivants."
        },
        {
          text: "Combien de valeurs républicaines composent la devise française ?",
          options: ["1", "2", "3", "5"],
          answer: 2,
          hint: "Liberté, Égalité, Fraternité.",
          explication: "La devise 'Liberté, Égalité, Fraternité' est composée de 3 valeurs fondamentales qui structurent le projet républicain français depuis la Révolution."
        }
      ]
    },
    {
      id: "egalite_discriminations",
      name: "Égalité et lutte contre les discriminations",
      emoji: "🤝",
      desc: "Égalité filles-garçons, préjugés, stéréotypes",
      questions: [
        {
          text: "Qu'est-ce qu'une discrimination ?",
          options: ["faire des différences selon les compétences", "traiter une personne différemment en raison de caractéristiques comme le sexe, l'origine, la religion…", "aimer certaines personnes plus que d'autres", "choisir ses amis"],
          answer: 1,
          hint: "Elle est illégale en France.",
          explication: "Une discrimination est un traitement inégal fondé sur des caractéristiques non pertinentes (sexe, origine, religion, handicap…). En France, les discriminations sont interdites et punies par la loi."
        },
        {
          text: "L'égalité entre filles et garçons est…",
          options: ["un objectif secondaire", "un principe constitutionnel et une valeur républicaine fondamentale en France", "réservée aux adultes", "uniquement une question scolaire"],
          answer: 1,
          hint: "Inscrit dans la Constitution de 1958.",
          explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel en France. La Constitution garantit l'égalité des droits entre les citoyens sans distinction de sexe."
        },
        {
          text: "Qu'est-ce qu'un stéréotype de genre ?",
          options: ["une vérité scientifique sur les différences entre filles et garçons", "une idée préconçue et simplifiée sur ce qu'une fille ou un garçon devrait être ou faire", "une loi sur l'égalité", "un résultat scolaire"],
          answer: 1,
          hint: "'Les filles sont douces, les garçons sont forts' — c'en est un.",
          explication: "Un stéréotype de genre est une idée généralisée sur les comportements, les goûts ou les compétences attribués à un sexe. Il peut limiter les choix individuels et renforcer les inégalités."
        },
        {
          text: "Le sexisme consiste à…",
          options: ["respecter les différences entre hommes et femmes", "discriminer ou mépriser une personne en raison de son sexe", "encourager l'égalité professionnelle", "observer les différences biologiques"],
          answer: 1,
          hint: "Il peut toucher les deux sexes mais touche principalement les femmes.",
          explication: "Le sexisme est une forme de discrimination fondée sur le sexe ou le genre. Il se manifeste par des préjugés, des inégalités de traitement ou des violences liées au genre."
        },
        {
          type: "vrai_faux",
          text: "En France, les femmes ont eu le droit de vote en même temps que les hommes.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les femmes ont voté pour la première fois en 1945.",
          explication: "FAUX. En France, le suffrage universel masculin date de 1848, mais les femmes n'ont obtenu le droit de vote qu'en 1944 (ordonnance du Général de Gaulle), et ont voté pour la première fois en 1945."
        },
        {
          text: "Qu'est-ce que le racisme ?",
          options: ["observer des différences culturelles", "la croyance en la hiérarchie des 'races' et les actes discriminatoires qui en découlent", "comparer des civilisations", "étudier les origines des peuples"],
          answer: 1,
          hint: "Il est fondé sur des théories scientifiquement fausses.",
          explication: "Le racisme est la croyance que certains groupes humains seraient supérieurs à d'autres en raison de leurs origines. C'est scientifiquement faux (il n'existe pas de 'races' humaines) et illégal en France."
        },
        {
          text: "La loi française interdit les discriminations dans de nombreux domaines, dont…",
          options: ["uniquement dans les écoles", "dans l'emploi, le logement, les services, l'éducation…", "uniquement dans la fonction publique", "uniquement entre adultes"],
          answer: 1,
          hint: "La protection est étendue à la vie quotidienne.",
          explication: "La loi française interdit les discriminations dans de nombreux domaines de la vie : accès à l'emploi, au logement, aux services, à l'éducation, aux loisirs…"
        },
        {
          text: "Le Défenseur des droits est une institution qui…",
          options: ["défend les droits des animaux", "protège les citoyens face aux discriminations et aux manquements du service public", "gère les litiges entre voisins", "dirige la police nationale"],
          answer: 1,
          hint: "On peut le saisir gratuitement.",
          explication: "Le Défenseur des droits est une autorité administrative indépendante. Il peut être saisi gratuitement par toute personne qui se juge victime de discrimination ou de violation de ses droits."
        },
        {
          type: "vrai_faux",
          text: "Les inégalités salariales entre femmes et hommes ont totalement disparu en France.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les femmes gagnent encore moins à poste équivalent.",
          explication: "FAUX. Malgré les lois sur l'égalité salariale, un écart persistant existe : à poste, diplôme et expérience comparables, les femmes gagnent en moyenne moins que les hommes en France."
        },
        {
          text: "Comment appelle-t-on une blague basée sur l'origine, la religion ou le handicap d'une personne ?",
          options: ["de l'humour inoffensif", "un préjugé", "une blague discriminatoire ou raciste pouvant être sanctionnée", "une satire"],
          answer: 2,
          hint: "Si elle blesse, elle n'est plus de l'humour.",
          explication: "Une 'blague' qui se moque de l'origine, de la religion ou du handicap d'une personne peut être discriminatoire. En France, les propos racistes ou discriminatoires publics sont punissables par la loi."
        }
      ]
    },
    {
      id: "droits_devoirs_eleve",
      name: "Droits et devoirs de l'élève",
      emoji: "📚",
      desc: "Ce que j'ai le droit de faire et ce que je dois faire",
      questions: [
        {
          text: "L'éducation est en France…",
          options: ["un privilège réservé aux familles aisées", "un droit fondamental garanti par l'État", "facultative pour les moins de 12 ans", "uniquement privée"],
          answer: 1,
          hint: "La scolarité est obligatoire jusqu'à 16 ans.",
          explication: "En France, l'éducation est un droit fondamental garanti par l'État. La scolarité est obligatoire pour tous les enfants de 3 à 16 ans, quelle que soit leur origine."
        },
        {
          text: "Les élèves ont-ils le droit de s'informer et de s'exprimer dans l'établissement scolaire ?",
          options: ["Non, jamais", "Oui, dans le respect des règles et de la dignité des personnes", "Uniquement à l'oral", "Uniquement via leurs parents"],
          answer: 1,
          hint: "La liberté d'expression s'exerce avec responsabilité.",
          explication: "Les élèves ont le droit de s'informer et de s'exprimer dans l'établissement, sous réserve de respecter les règles de vie scolaire, le droit des personnes et de ne pas perturber les cours."
        },
        {
          text: "Quel est le devoir de l'élève vis-à-vis du matériel scolaire mis à disposition ?",
          options: ["il peut l'abîmer ou le perdre sans conséquence", "il doit en prendre soin et le restituer en bon état", "il peut l'emporter définitivement à la fin de l'année", "cela ne concerne que les professeurs"],
          answer: 1,
          hint: "Le matériel appartient à la collectivité.",
          explication: "L'élève a le devoir de prendre soin du matériel mis à disposition (manuels, équipements numériques…) et de le restituer en bon état. Les dégradations peuvent entraîner une réparation aux frais de la famille."
        },
        {
          text: "La ponctualité et l'assiduité sont…",
          options: ["des conseils optionnels", "des devoirs de l'élève inscrits dans le règlement", "uniquement des obligations pour les professeurs", "une règle qui ne s'applique qu'aux interros"],
          answer: 1,
          hint: "Arriver à l'heure et venir tous les jours.",
          explication: "L'assiduité (venir tous les jours) et la ponctualité (arriver à l'heure) sont des devoirs de l'élève. Les absences injustifiées peuvent entraîner des signalements à l'inspection académique."
        },
        {
          type: "vrai_faux",
          text: "Les parents ont le droit de consulter les notes et les appréciations de leur enfant.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "L'Espace numérique de travail (ENT) y donne accès.",
          explication: "VRAI. Les parents ont le droit d'être informés de la scolarité de leur enfant mineur : notes, absences, appréciations. L'ENT (Espace Numérique de Travail) facilite cet accès."
        },
        {
          text: "Un élève exclu temporairement de cours pour un comportement grave a-t-il le droit à du travail scolaire ?",
          options: ["Non, il est privé de tout", "Oui, l'établissement doit lui fournir du travail pour ne pas prendre de retard", "Cela dépend du professeur concerné", "Seulement si ses parents le demandent"],
          answer: 1,
          hint: "L'exclusion ne suspend pas le droit à l'éducation.",
          explication: "Même temporairement exclu, un élève a droit à la continuité de son éducation : l'établissement doit lui fournir du travail scolaire pendant la période d'exclusion."
        },
        {
          text: "Quel organisme représente les parents d'élèves au sein des établissements scolaires ?",
          options: ["la mairie", "les associations de parents d'élèves, représentées au conseil d'administration", "le ministère de l'Éducation", "le syndicat enseignant"],
          answer: 1,
          hint: "Leurs représentants siègent au conseil d'administration et dans les conseils de classe.",
          explication: "Les associations de parents d'élèves élisent des représentants qui siègent dans les instances de l'établissement (conseil de classe, conseil d'administration) pour défendre les intérêts des familles."
        },
        {
          text: "Qu'est-ce qu'un conseil de classe ?",
          options: ["une réunion d'élèves uniquement", "une réunion trimestrielle réunissant professeurs, représentants des élèves et des parents pour évaluer la vie de la classe", "une réunion de la direction", "une réunion des parents uniquement"],
          answer: 1,
          hint: "Il se tient trois fois par an.",
          explication: "Le conseil de classe se réunit chaque trimestre. Il regroupe les professeurs, le CPE, des représentants des élèves et des parents pour faire le bilan des résultats et de la vie de la classe."
        },
        {
          type: "vrai_faux",
          text: "Un élève peut refuser de passer un contrôle sans justification sans conséquence.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Le travail scolaire est un devoir.",
          explication: "FAUX. Participer aux évaluations est un devoir de l'élève. Un refus injustifié peut être sanctionné (zéro, avertissement). En cas de problème, les parents doivent informer l'établissement."
        },
        {
          text: "Que peut faire un élève s'il estime être victime d'une injustice de la part d'un professeur ?",
          options: ["insulter le professeur", "en parler au CPE, au chef d'établissement ou à ses parents, qui pourront intervenir par les voies officielles", "quitter la classe en protestation", "ne plus venir au cours"],
          answer: 1,
          hint: "Il existe des voies de recours légitimes.",
          explication: "Un élève qui se sent injustement traité peut en parler au CPE, au principal ou à ses parents. Ces derniers peuvent contester une décision auprès du chef d'établissement ou via le conseil de classe."
        }
      ]
    },
    {
      id: "citoyennete_numerique",
      name: "La citoyenneté numérique",
      emoji: "💻",
      desc: "Respect en ligne, cyberharcèlement, image",
      questions: [
        {
          text: "Qu'est-ce qu'un « citoyen numérique » ?",
          options: ["un expert en informatique", "quelqu'un qui utilise les outils numériques de façon responsable, respectueuse et sécurisée", "un programmeur professionnel", "quelqu'un qui n'utilise jamais Internet"],
          answer: 1,
          hint: "Les mêmes valeurs qu'hors ligne s'appliquent en ligne.",
          explication: "Un citoyen numérique utilise les outils numériques de façon responsable : respect des autres, protection de sa vie privée, vérification des informations, comportement éthique en ligne."
        },
        {
          text: "Le droit à l'image signifie que…",
          options: ["on peut photographier et diffuser n'importe qui", "on ne peut pas diffuser l'image d'une personne sans son consentement", "toutes les photos sur Internet sont libres d'utilisation", "les selfies sont interdits"],
          answer: 1,
          hint: "Ton image t'appartient.",
          explication: "Le droit à l'image est un droit fondamental : toute personne a le droit de contrôler l'utilisation de son image. Publier la photo de quelqu'un sans son accord est illégal."
        },
        {
          text: "Qu'est-ce que le droit à l'oubli numérique ?",
          options: ["le droit d'oublier son mot de passe", "le droit de demander la suppression de données personnelles en ligne vous concernant", "le droit de ne pas utiliser Internet", "le droit de ne pas faire ses devoirs numériques"],
          answer: 1,
          hint: "On peut demander à Google ou aux réseaux sociaux de supprimer des informations.",
          explication: "Le droit à l'oubli permet à toute personne de demander la suppression de données personnelles la concernant sur Internet, en particulier si elles sont inexactes ou portent atteinte à sa réputation."
        },
        {
          text: "Poster une photo humiliante d'un camarade sur les réseaux sociaux est…",
          options: ["de l'humour", "un acte de cyberharcèlement pouvant être poursuivi en justice", "normal entre amis", "uniquement une faute scolaire"],
          answer: 1,
          hint: "Cela peut avoir de graves conséquences pour les deux parties.",
          explication: "Diffuser une photo humiliante constitue une atteinte à la vie privée et au droit à l'image. Cela peut relever du cyberharcèlement et être poursuivi pénalement, y compris pour des mineurs."
        },
        {
          type: "vrai_faux",
          text: "Ce qu'on publie sur Internet disparaît automatiquement après quelques jours.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Internet a une longue mémoire.",
          explication: "FAUX. Les contenus publiés sur Internet peuvent persister très longtemps : ils sont souvent copiés, partagés, archivés et peuvent être retrouvés des années après leur publication."
        },
        {
          text: "Quelle attitude adopter face à une information surprenante ou choquante partagée en ligne ?",
          options: ["la partager immédiatement à tous ses contacts", "la vérifier auprès de sources fiables avant de la partager", "y croire automatiquement car elle est sur Internet", "l'ignorer sans la vérifier"],
          answer: 1,
          hint: "Les fake news se propagent vite.",
          explication: "Avant de partager une information en ligne, il faut vérifier sa source, la recouper avec d'autres sources fiables. Les fausses informations (fake news) se propagent très rapidement sur les réseaux."
        },
        {
          text: "Qu'est-ce que la 'nétiquette' ?",
          options: ["un réseau social", "l'ensemble des règles de bonne conduite sur Internet (politesse, respect)", "un logiciel de sécurité", "une loi sur Internet"],
          answer: 1,
          hint: "Net (Internet) + étiquette (politesse).",
          explication: "La nétiquette est l'ensemble des règles de comportement et de politesse sur Internet : ne pas écrire en majuscules (impoli), respecter les opinions des autres, ne pas diffuser de contenus offensants."
        },
        {
          text: "Pour protéger ta vie privée en ligne, que dois-tu éviter de partager ?",
          options: ["tes goûts musicaux", "ton adresse, ton numéro de téléphone, tes mots de passe et tes données bancaires", "le titre de ton film préféré", "tes activités sportives"],
          answer: 1,
          hint: "Ces informations peuvent être utilisées à mauvais escient.",
          explication: "Pour protéger ta vie privée, ne jamais partager en ligne : ton adresse, ton numéro de téléphone, tes mots de passe, tes données bancaires ou tout ce qui permettrait de t'identifier ou de te localiser."
        },
        {
          type: "vrai_faux",
          text: "Un mineur ne peut pas être poursuivi en justice pour cyberharcèlement.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "La loi s'applique aussi aux mineurs.",
          explication: "FAUX. Les mineurs peuvent être poursuivis en justice pour cyberharcèlement. Selon leur âge, ils peuvent être jugés par un tribunal pour enfants et leurs parents peuvent engager leur responsabilité civile."
        },
        {
          text: "Que faire si on est victime de cyberharcèlement ?",
          options: ["répondre de la même façon", "prévenir un adulte de confiance, conserver les preuves (captures d'écran) et signaler les contenus", "effacer ses réseaux sociaux et ne plus utiliser Internet", "faire comme si rien n'était"],
          answer: 1,
          hint: "Ne reste pas seul(e) avec ce problème.",
          explication: "En cas de cyberharcèlement : prévenir un adulte de confiance, conserver les preuves (captures d'écran), signaler les contenus via les plateformes et alerter la police si nécessaire. Le numéro 3020 peut aider."
        }
      ]
    },
    {
      id: "liberte_expression",
      name: "La liberté d'expression et ses limites",
      emoji: "🗣️",
      desc: "Droit à la parole, responsabilité, discours haineux",
      questions: [
        {
          text: "La liberté d'expression est…",
          options: ["le droit de dire n'importe quoi sans conséquence", "le droit d'exprimer ses opinions librement, dans le respect de la loi et des droits d'autrui", "réservée aux adultes", "uniquement un droit des journalistes"],
          answer: 1,
          hint: "Elle a des limites fixées par la loi.",
          explication: "La liberté d'expression est un droit fondamental qui permet d'exprimer ses opinions. Elle a des limites légales : elle ne peut pas être utilisée pour diffamer, inciter à la haine ou menacer."
        },
        {
          text: "Qu'est-ce que la diffamation ?",
          options: ["dire du bien de quelqu'un", "alléguer ou imputer un fait faux portant atteinte à l'honneur d'une personne", "critiquer une décision politique", "exprimer son opinion"],
          answer: 1,
          hint: "Accuser quelqu'un d'un fait qu'on sait faux.",
          explication: "La diffamation consiste à alléguer un fait faux (ou présenté comme vrai) portant atteinte à la réputation ou à l'honneur d'une personne. C'est un délit punissable en France."
        },
        {
          text: "Les discours de haine (incitation à la haine, discrimination, violence) sont…",
          options: ["protégés par la liberté d'expression", "interdits et punis par la loi française", "autorisés sur Internet uniquement", "libres si l'on reste anonyme"],
          answer: 1,
          hint: "La loi Pleven de 1972 les encadre.",
          explication: "Les discours haineux (incitation à la haine raciale, antisémitisme, homophobie…) sont interdits en France. Ils ne sont pas protégés par la liberté d'expression et peuvent mener à des poursuites judiciaires."
        },
        {
          text: "La presse écrite, la radio et la télévision sont des supports de…",
          options: ["communication personnelle", "liberté de la presse (média d'information)", "censure d'État", "propagande unique"],
          answer: 1,
          hint: "Ils informent le public.",
          explication: "La presse et les médias audiovisuels sont des acteurs de la liberté de la presse : ils informent les citoyens, contrôlent les pouvoirs et permettent le débat démocratique."
        },
        {
          type: "vrai_faux",
          text: "En France, la liberté de la presse est garantie par la loi depuis 1881.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "La loi du 29 juillet 1881 sur la liberté de la presse.",
          explication: "VRAI. La loi du 29 juillet 1881 garantit la liberté de la presse en France. Elle définit les libertés et les limites (diffamation, incitation à la haine) applicables aux médias."
        },
        {
          text: "Qu'est-ce que la censure ?",
          options: ["une critique négative d'un film", "l'interdiction par une autorité de publier, diffuser ou s'exprimer", "un contrôle de qualité journalistique", "la vérification des informations"],
          answer: 1,
          hint: "Les régimes autoritaires l'utilisent pour contrôler l'information.",
          explication: "La censure est l'interdiction préalable, par une autorité (souvent le pouvoir politique), de publier ou diffuser certaines informations. Elle est incompatible avec une démocratie saine."
        },
        {
          text: "Un journaliste peut-il publier des informations confidentielles portant gravement atteinte à la vie privée ?",
          options: ["Oui, tout est permis au nom de la liberté de la presse", "Non, la liberté de la presse s'arrête où commence le respect de la vie privée et des droits des personnes", "Oui, si c'est dans l'intérêt public uniquement", "Cela dépend de la nationalité du journaliste"],
          answer: 1,
          hint: "Un équilibre entre information et vie privée.",
          explication: "La liberté de la presse n'est pas absolue : le respect de la vie privée, de la présomption d'innocence et de la dignité des personnes constituent des limites légales que les journalistes doivent respecter."
        },
        {
          text: "Comment s'appelle le droit accordé aux journalistes de ne pas révéler leurs sources ?",
          options: ["le secret d'État", "le secret des sources journalistiques", "le secret professionnel médical", "l'anonymat numérique"],
          answer: 1,
          hint: "Il protège les informateurs.",
          explication: "Le secret des sources journalistiques protège les journalistes : ils ne sont pas obligés de révéler qui leur a fourni des informations. Ce droit est essentiel pour protéger les lanceurs d'alerte."
        },
        {
          type: "vrai_faux",
          text: "Sur les réseaux sociaux, tout ce qu'on publie est protégé par la liberté d'expression et ne peut jamais être sanctionné.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les lois s'appliquent aussi sur Internet.",
          explication: "FAUX. Les lois encadrant la liberté d'expression (diffamation, incitation à la haine, insultes…) s'appliquent aussi sur Internet. L'anonymat en ligne ne protège pas contre les poursuites judiciaires."
        },
        {
          text: "Qu'est-ce qu'une 'fake news' (infox) ?",
          options: ["une nouvelle surprenante mais vraie", "une fausse information diffusée intentionnellement pour tromper", "un article satirique clairement identifié", "une information confidentielle"],
          answer: 1,
          hint: "Elle cherche à tromper et se propage sur les réseaux.",
          explication: "Une fake news (infox en français) est une fausse information présentée comme vraie, souvent diffusée intentionnellement pour tromper, manipuler ou créer de la polémique. Elle peut avoir des effets graves sur la société."
        }
      ]
    },
    {
      id: "respect_differences",
      name: "Respect des différences et vivre-ensemble",
      emoji: "🌍",
      desc: "Altérité, tolérance, diversité",
      questions: [
        {
          text: "Qu'est-ce que l'altérité ?",
          options: ["le fait d'être identique à tout le monde", "la reconnaissance et le respect de la différence de l'autre", "le fait de changer d'avis souvent", "un synonyme de supériorité"],
          answer: 1,
          hint: "Accepter que l'autre soit différent de moi.",
          explication: "L'altérité désigne la qualité de ce qui est autre, différent. Reconnaître l'altérité, c'est accepter et respecter que les autres aient des valeurs, des cultures, des modes de vie différents des siens."
        },
        {
          text: "La tolérance, ce n'est pas…",
          options: ["respecter les différences de l'autre", "accepter que chacun ait ses propres convictions", "accepter sans limite des comportements qui violent les droits d'autrui", "vivre avec des personnes différentes de soi"],
          answer: 2,
          hint: "La tolérance a des limites.",
          explication: "La tolérance ne signifie pas tout accepter. Elle a des limites : on ne peut pas tolérer des comportements qui bafouent les droits fondamentaux ou la dignité des personnes."
        },
        {
          text: "La diversité culturelle est…",
          options: ["un problème à résoudre", "une richesse pour la société", "une source de conflits inévitables", "une idée récente"],
          answer: 1,
          hint: "Les échanges entre cultures enrichissent les sociétés.",
          explication: "La diversité culturelle est une richesse : les échanges entre cultures différentes (cuisine, musique, art, savoirs) ont toujours enrichi les sociétés tout au long de l'histoire."
        },
        {
          text: "Qu'est-ce que l'empathie ?",
          options: ["se sentir supérieur aux autres", "la capacité à comprendre et ressentir ce que l'autre éprouve", "ne pas se soucier des autres", "imiter quelqu'un"],
          answer: 1,
          hint: "Se mettre à la place de l'autre.",
          explication: "L'empathie est la capacité à comprendre et à partager les émotions d'une autre personne, à 'se mettre à sa place'. C'est un fondement essentiel du vivre-ensemble."
        },
        {
          type: "vrai_faux",
          text: "Respecter les différences signifie approuver tous les comportements.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Respecter ne veut pas dire tout approuver.",
          explication: "FAUX. Respecter les différences signifie reconnaître le droit de l'autre à être différent, mais pas nécessairement approuver tous ses comportements — surtout s'ils nuisent aux autres."
        },
        {
          text: "Qu'est-ce que le vivre-ensemble républicain ?",
          options: ["vivre uniquement avec des personnes identiques à soi", "partager un espace commun dans le respect des valeurs républicaines malgré les différences", "supprimer toutes les différences", "refuser les personnes étrangères"],
          answer: 1,
          hint: "La diversité est une force dans un cadre commun.",
          explication: "Le vivre-ensemble républicain consiste à partager un espace commun (l'école, la société) et des règles communes dans le respect des valeurs (liberté, égalité, fraternité), malgré les différences individuelles."
        },
        {
          text: "Qu'est-ce que l'intégration d'une personne dans une société ?",
          options: ["lui imposer de renoncer à toute sa culture d'origine", "son processus d'insertion dans la société tout en conservant ses propres valeurs dans le cadre des lois communes", "l'isoler de la société majoritaire", "uniquement l'apprentissage de la langue"],
          answer: 1,
          hint: "Un équilibre entre particularités et règles communes.",
          explication: "L'intégration est le processus par lequel une personne participe à la vie sociale et respecte les lois communes, tout en conservant ses valeurs personnelles et culturelles dans la sphère privée."
        },
        {
          text: "La fraternité, troisième terme de la devise républicaine, signifie…",
          options: ["ne fréquenter que ses proches", "un lien de solidarité et de bienveillance entre tous les citoyens", "être frère biologiquement", "appartenir à une fraternité secrète"],
          answer: 1,
          hint: "Solidarité entre citoyens.",
          explication: "La fraternité républicaine est un lien de solidarité et d'entraide entre tous les citoyens, au-delà des différences. Elle se manifeste dans la solidarité sociale (aides, services publics…)."
        },
        {
          type: "vrai_faux",
          text: "Le préjugé est une opinion formée à l'avance, sans connaissance réelle de la personne ou du groupe.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Juger avant de connaître.",
          explication: "VRAI. Un préjugé est un jugement porté sur une personne ou un groupe avant toute expérience réelle. Il est souvent basé sur des stéréotypes et peut mener à des discriminations."
        },
        {
          text: "Comment peut-on lutter contre les préjugés dans la vie quotidienne ?",
          options: ["les ignorer complètement", "aller à la rencontre de personnes différentes de soi et s'informer", "éviter les personnes différentes", "ne jamais exprimer d'opinions"],
          answer: 1,
          hint: "La connaissance de l'autre est le meilleur remède au préjugé.",
          explication: "La meilleure façon de lutter contre les préjugés est de rencontrer des personnes différentes, de s'informer sur d'autres cultures et de questionner ses propres a priori."
        }
      ]
    },
    {
      id: "engagement_citoyennete",
      name: "S'engager : délégués, vote et solidarité",
      emoji: "🗳️",
      desc: "Démocratie, représentation, engagement",
      questions: [
        {
          text: "Qu'est-ce qu'un délégué de classe ?",
          options: ["le meilleur élève de la classe", "un représentant élu par ses camarades pour défendre leurs intérêts dans les instances du collège", "le secrétaire du professeur principal", "un élève désigné par le professeur"],
          answer: 1,
          hint: "Élu au suffrage direct par la classe.",
          explication: "Le délégué de classe est élu par ses camarades. Il représente la classe dans les conseils de classe et peut porter les préoccupations des élèves auprès de la direction."
        },
        {
          text: "Quand se déroulent les élections de délégués de classe au collège ?",
          options: ["en juin", "à la rentrée scolaire, dans les premières semaines", "en janvier", "uniquement en seconde"],
          answer: 1,
          hint: "En début d'année, pour l'année entière.",
          explication: "Les élections de délégués de classe se tiennent dans les premières semaines de la rentrée scolaire, généralement en septembre ou octobre, pour désigner les représentants pour l'année entière."
        },
        {
          text: "Le vote est-il une obligation légale en France ?",
          options: ["Oui, l'abstention est sanctionnée", "Non, voter est un droit mais pas une obligation (sauf exceptions)", "Oui, à partir de 18 ans", "Non, avant 21 ans uniquement"],
          answer: 1,
          hint: "Contrairement à certains pays (Belgique, Australie).",
          explication: "En France, voter est un droit fondamental mais non une obligation légale. Les citoyens sont libres de s'abstenir, même si cela est souvent vu comme civiquement négatif pour le bon fonctionnement de la démocratie."
        },
        {
          text: "Quel est le droit d'une personne élue en démocratie ?",
          options: ["faire ce qu'elle veut sans rendre de comptes", "représenter les électeurs et rendre des comptes sur son action", "être réélue automatiquement", "prendre des décisions seul sans consulter"],
          answer: 1,
          hint: "Elle est mandatée par les électeurs.",
          explication: "Une personne élue en démocratie est mandatée par les électeurs pour les représenter. Elle doit rendre des comptes sur son action et peut être sanctionnée aux élections suivantes si elle ne remplit pas son mandat."
        },
        {
          type: "vrai_faux",
          text: "La démocratie représentative signifie que les citoyens votent sur chaque décision.",
          options: ["Vrai", "Faux"],
          answer: 1,
          hint: "Les citoyens élisent des représentants qui prennent les décisions.",
          explication: "FAUX. Dans une démocratie représentative (comme en France), les citoyens élisent des représentants (parlementaires, élus locaux) qui prennent les décisions en leur nom. La démocratie directe (où chaque citoyen vote sur chaque décision) est très rare."
        },
        {
          text: "Qu'est-ce que le bénévolat ?",
          options: ["un travail rémunéré", "une activité accomplie librement et sans rémunération au service d'une cause ou d'une association", "un stage professionnel", "une obligation légale"],
          answer: 1,
          hint: "Les pompiers volontaires en sont un exemple.",
          explication: "Le bénévolat est une activité exercée librement et gratuitement, souvent au sein d'une association. C'est une forme d'engagement civique très importante dans la société française."
        },
        {
          text: "Comment peut-on s'engager concrètement dans la vie de son école ?",
          options: ["en ne participant à rien", "en se portant candidat délégué, en participant aux projets, aux clubs ou aux initiatives de solidarité", "uniquement en ayant de bonnes notes", "en critiquant l'organisation"],
          answer: 1,
          hint: "Il existe de nombreuses façons de s'engager.",
          explication: "L'engagement à l'école peut prendre de nombreuses formes : être délégué, participer aux associations, aux projets humanitaires, aux clubs sportifs ou culturels, ou à des actions de solidarité."
        },
        {
          text: "Qu'est-ce que le suffrage universel ?",
          options: ["le vote réservé aux riches propriétaires", "le droit de vote accordé à tous les citoyens majeurs sans distinction", "le vote uniquement par Internet", "le vote réservé aux hommes"],
          answer: 1,
          hint: "Universel = pour tous.",
          explication: "Le suffrage universel signifie que tous les citoyens adultes ont le droit de vote, sans distinction de sexe, de richesse, d'origine ou de religion. En France, il est en vigueur pour les deux sexes depuis 1944."
        },
        {
          type: "vrai_faux",
          text: "La solidarité est une des valeurs fondamentales de la République française.",
          options: ["Vrai", "Faux"],
          answer: 0,
          hint: "Elle est liée à la fraternité dans la devise.",
          explication: "VRAI. La solidarité est étroitement liée à la fraternité, troisième terme de la devise républicaine. Elle se concrétise dans les politiques sociales (sécurité sociale, aide aux plus démunis…)."
        },
        {
          text: "Pourquoi est-il important de voter, même pour un délégué de classe ?",
          options: ["pour éviter les punitions", "pour exercer son droit à la représentation et s'impliquer dans la vie collective", "parce que c'est obligatoire", "uniquement pour aider ses amis"],
          answer: 1,
          hint: "La démocratie s'apprend dès l'école.",
          explication: "Voter pour le délégué de classe, c'est exercer son droit à la représentation et participer à la vie démocratique de la classe. C'est aussi une façon d'apprendre le fonctionnement de la démocratie."
        }
      ]
    }
  ]
};
