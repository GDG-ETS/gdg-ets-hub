export type PanelSpeaker = {
  name: string;
  role: string;
  company?: string;
  initials: string;
  color: string;
  tag: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "speakers"; items: PanelSpeaker[] }
  | { type: "gallery"; images: GalleryImage[]; caption?: string }
  | { type: "resources"; items: { label: string; kind: string; href?: string }[] };

export type ArticleBody = {
  lead: string[];
  blocks: ArticleBlock[];
};

export const articleBodies: Record<string, ArticleBody> = {
  "retour-devfest-montreal-2026": {
    lead: [
      "Le 6 novembre 2026, le GDG ÉTS a participé au DevFest Montréal 2026, à l'Espace Ax.c. L'équipe a passé plus de 12 heures sur le terrain avec les organisateurs, les conférenciers et les bénévoles.",
      "Entre les conférences, les sessions et les ateliers, l'équipe a pu vivre l'événement sous tous ses angles.",
    ],
    blocks: [
      { type: "heading", id: "sur-le-terrain", text: "Une journée sur le terrain" },
      {
        type: "p",
        text: "La journée a commencé tôt avec l'installation et l'accueil des participants pour la grande plénière de bienvenue.",
      },
      {
        type: "p",
        text: "L'équipe a ensuite soutenu la session Flight Mode AI aux côtés de Jhin Lee, puis accompagné les participants de l'atelier Cloud Run avec Rishab Kumar.",
      },
      {
        type: "p",
        text: "Elle a aussi aidé les participants de l'atelier Gemini + Apps Script avec Laudrup Cyprien Tankeu.",
      },
      { type: "heading", id: "oumaima-sur-scene", text: "Oumaima sur scène" },
      {
        type: "p",
        text: "Notre présidente, Oumaima El khayiri, est montée sur scène en tant que conférencière pour représenter le GDG ÉTS.",
      },
      { type: "heading", id: "ambiance", text: "L'ambiance" },
      {
        type: "p",
        text: "L'ambiance était à la hauteur : thème rétro avec les disques vinyles, buffet, station de création de swag personnalisé et moments mémorables au photobooth. L'énergie était au rendez-vous toute la journée.",
      },
      { type: "heading", id: "merci", text: "Merci" },
      {
        type: "p",
        text: "Un immense merci aux organisateurs, aux conférenciers et à toutes les personnes qui se sont déplacées.",
      },
      {
        type: "p",
        text: "Merci beaucoup à Stacy Véronneau et Raphaelle Giraud pour toute l'organisation.",
      },
      { type: "heading", id: "la-suite", text: "La suite" },
      {
        type: "p",
        text: "On attend avec enthousiasme la prochaine édition.",
      },
      { type: "heading", id: "en-images", text: "En images" },
      {
        type: "gallery",
        caption: "Photos : GDG ÉTS (LinkedIn)",
        images: [
          {
            src: "/photos/devfest-2026/01.jpg",
            alt: "L'équipe du GDG ÉTS au photobooth rétro avec lunettes et accessoires",
            width: 800,
            height: 800,
          },
          {
            src: "/photos/devfest-2026/02.jpg",
            alt: "Salle comble pour la plénière de bienvenue",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/03.jpg",
            alt: "Station de création de swag personnalisé",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/04.jpg",
            alt: "Deux membres du GDG ÉTS avec leurs badges DevFest",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/05.jpg",
            alt: "Membres du GDG ÉTS à la station de swag",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/06.jpg",
            alt: "Quatre panélistes sur scène pendant la table ronde GDG on Campus",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/07.jpg",
            alt: "Le buffet du DevFest",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/08.jpg",
            alt: "Le buffet, vu sous un autre angle",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/09.jpg",
            alt: "Un conférencier présente une session devant un écran",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/10.jpg",
            alt: "Bénévoles et membres devant la table de swag",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/11.jpg",
            alt: "Deux bénévoles à une table d'accueil",
            width: 480,
            height: 640,
          },
          {
            src: "/photos/devfest-2026/12.jpg",
            alt: "Trois participants devant le mur Google Developer Groups",
            width: 800,
            height: 800,
          },
          {
            src: "/photos/devfest-2026/13.jpg",
            alt: "Selfie de groupe dans l'espace de l'événement",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/14.jpg",
            alt: "L'atrium rempli de participants, vu d'en haut",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/15.jpg",
            alt: "Participants autour de la table de swag",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/16.jpg",
            alt: "Le public pendant une session en salle",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/17.jpg",
            alt: "Participants pendant un atelier",
            width: 800,
            height: 600,
          },
          {
            src: "/photos/devfest-2026/18.jpg",
            alt: "Diapositive de remerciement de la table ronde GDG on Campus avec les quatre intervenant·e·s",
            width: 800,
            height: 600,
          },
        ],
      },
      { type: "heading", id: "ressources", text: "Pour aller plus loin" },
      {
        type: "resources",
        items: [
          {
            label: "GDG ÉTS au DevFest Montréal 2026 : l'annonce",
            kind: "Article",
            href: "/blog/devfest-montreal-2026",
          },
          { label: "Calendrier des événements du GDG ÉTS", kind: "Calendrier", href: "/events" },
        ],
      },
    ],
  },
  "atelier-leetcode-9-novembre": {
    lead: [
      "Le GDG ÉTS lance sa première activité officielle avec un atelier consacré à LeetCode. Objectif : pratiquer la programmation compétitive dans un cadre accessible et préparer les entrevues techniques.",
      "Rendez-vous le lundi 9 novembre 2026, de 12 h à 13 h 30, au Pavillon A de l'ÉTS (salle A-1302). L'activité est gratuite et des tuteurs seront sur place pour accompagner les participant·es.",
    ],
    blocks: [
      { type: "heading", id: "au-programme", text: "Au programme" },
      {
        type: "p",
        text: "L'atelier combine pratique sur LeetCode et accompagnement en petits groupes. Les tuteurs peuvent aider à comprendre un énoncé, choisir une structure de données ou débloquer une solution.",
      },
      {
        type: "list",
        items: [
          "Résoudre des problèmes classiques de programmation compétitive.",
          "Comprendre les patterns qui reviennent souvent en entrevue.",
          "Poser des questions aux tuteurs et comparer les approches.",
          "Rencontrer les membres du club et découvrir les prochaines activités.",
        ],
      },
      { type: "heading", id: "pour-qui", text: "Pour qui ?" },
      {
        type: "p",
        text: "L'atelier s'adresse aux personnes qui veulent découvrir la programmation compétitive ou préparer leurs entrevues. Viens avec tes questions : les tuteurs adapteront leurs conseils au niveau des personnes présentes. Si tu n'as jamais fait de concours, c'est une bonne occasion de commencer.",
      },
      { type: "heading", id: "informations-pratiques", text: "Informations pratiques" },
      {
        type: "list",
        items: [
          "Date : lundi 9 novembre 2026",
          "Heure : 12 h à 13 h 30",
          "Lieu : ÉTS, Pavillon A, salle A-1302",
          "Coût : gratuit",
          "Apporte ton ordinateur portable si tu en as un.",
          "Des tuteurs seront sur place pour répondre à tes questions.",
        ],
      },
      { type: "heading", id: "pourquoi-leetcode", text: "Pourquoi pratiquer sur LeetCode ?" },
      {
        type: "p",
        text: "LeetCode est un bon terrain d'entraînement pour les algorithmes, les structures de données et la résolution de problèmes sous contrainte. C'est aussi un format que l'on retrouve dans plusieurs processus d'entrevue en entreprise.",
      },
      {
        type: "p",
        text: "L'atelier est ouvert à toute la communauté de l'ÉTS. Que tu sois en génie logiciel, en informatique ou dans un autre programme, tu peux venir pratiquer et rencontrer d'autres personnes intéressées par la programmation.",
      },
      { type: "heading", id: "ressources", text: "Pour aller plus loin" },
      {
        type: "resources",
        items: [
          { label: "Calendrier des événements du GDG ÉTS", kind: "Calendrier", href: "/events" },
          { label: "À propos du GDG ÉTS", kind: "Page", href: "/about" },
        ],
      },
    ],
  },
  "devfest-montreal-2026": {
    lead: [
      "Pour sa première année, le GDG ÉTS est monté sur la scène du DevFest Montréal 2026. Notre lead, Oumaima El khayiri, a participé à la session « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » aux côtés de Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
      "Le rendez-vous a eu lieu le vendredi 6 novembre 2026, à l'Espace Ax.c, au 800 rue du Square-Victoria, à Montréal.",
    ],
    blocks: [
      { type: "heading", id: "retour", text: "Retour sur l'événement" },
      {
        type: "p",
        text: "L'événement a eu lieu le 6 novembre 2026. Le récit complet de la journée est disponible dans notre article de retour.",
      },
      {
        type: "resources",
        items: [
          {
            label: "Retour sur le DevFest Montréal 2026",
            kind: "Retour",
            href: "/blog/retour-devfest-montreal-2026",
          },
        ],
      },
      { type: "heading", id: "le-devfest", text: "Le DevFest, c'est quoi ?" },
      {
        type: "p",
        text: "Le DevFest est la plus grande conférence tech communautaire au Québec, organisée par les Google Developer Groups. C'est une journée de conférences et de rencontres autour de l'IA, du cloud, du mobile et des technologies Google.",
      },
      { type: "heading", id: "notre-intervention", text: "Notre intervention" },
      {
        type: "p",
        text: "La session a réuni des voix étudiantes et des organisateur·ices de GDG on Campus pour parler de la mission du programme, de son impact et de la perspective étudiante. L'ÉTS y a rejoint les GDG de Polytechnique, Concordia et McGill sur scène.",
      },
      {
        type: "list",
        items: [
          "Oumaima El khayiri — Lead, GDG ÉTS",
          "Rebecca Abi Chahine",
          "Michael Persico",
          "Daniel Wei",
        ],
      },
      { type: "heading", id: "temps-forts", text: "Les temps forts de l'événement" },
      {
        type: "list",
        items: [
          "La communauté tech québécoise a partagé des projets et des retours d'expérience.",
          "Les échanges ont réuni des développeur·ses, des étudiant·es et des organisateur·ices de GDG.",
          "L'événement a permis d'élargir son réseau et de trouver de l'inspiration pour ses projets.",
          "Le GDG ÉTS a participé au DevFest pour la première fois.",
        ],
      },
      { type: "heading", id: "informations-pratiques", text: "Informations pratiques" },
      {
        type: "list",
        items: [
          "Date : vendredi 6 novembre 2026",
          "Lieu : Espace Ax.c, 800 rue du Square-Victoria, Montréal",
          "Statut : événement terminé",
          "L'ÉTS était représentée par Oumaima El khayiri.",
        ],
      },
      { type: "heading", id: "en-images", text: "En images" },
      {
        type: "gallery",
        images: [
          {
            src: "/photos/devfest-annonce/01.jpg",
            alt: "Affiche de la session avec Oumaima El khayiri, lead du GDG on Campus ÉTS",
            width: 800,
            height: 1066,
          },
          {
            src: "/photos/devfest-annonce/02.jpg",
            alt: "Affiche de la session « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec ses quatre intervenant·e·s",
            width: 800,
            height: 1066,
          },
        ],
      },
      { type: "heading", id: "ressources", text: "Ressources" },
      {
        type: "resources",
        items: [
          { label: "Calendrier des événements du GDG ÉTS", kind: "Calendrier", href: "/events" },
        ],
      },
    ],
  },
  "retour-meetup-vooban": {
    lead: [
      "Le GDG ÉTS était présent au meetup du GDG Cloud Montréal, accueilli dans les locaux de Vooban, au centre-ville. Ayoub Marouf, Emilien Busson et Patrick Nguyen ont représenté le club.",
      "Au programme : une démonstration complète du codelab, trois alternatives techniques pour atteindre le même résultat et une présentation d'un Google Developer Expert.",
    ],
    blocks: [
      { type: "heading", id: "ce-quon-a-retenu", text: "Ce qu'on a retenu" },
      {
        type: "list",
        items: [
          "Une démo de codelab décortiquée en direct.",
          "Trois approches concrètes pour arriver au même résultat technique.",
          "Une présentation d'un GDE avec des conseils pratiques pour la communauté.",
          "Un moment d'échanges avec les autres membres du GDG Cloud Montréal.",
        ],
      },
      {
        type: "p",
        text: "La soirée s'est déroulée dans les locaux de Vooban, en plein centre-ville de Montréal. C'était aussi l'occasion de découvrir un espace de travail et de rencontrer des personnes de la communauté tech montréalaise.",
      },
      { type: "heading", id: "merci", text: "Merci" },
      {
        type: "p",
        text: "Merci à Vooban pour l'accueil, à Stacy Véronneau et Francois Legare pour l'animation de la séance, ainsi qu'à Arunesh Choudhary pour sa présence.",
      },
      { type: "heading", id: "la-suite", text: "La suite" },
      {
        type: "p",
        text: "Le club a participé au DevFest Montréal 2026 et prépare son premier atelier officiel le 9 novembre. Les détails sont dans le calendrier.",
      },
      { type: "heading", id: "en-images", text: "En images" },
      {
        type: "gallery",
        images: [
          {
            src: "/photos/vooban/01.jpg",
            alt: "Le public pendant la présentation du meetup GDG Cloud Montréal chez Vooban",
            width: 800,
            height: 1063,
          },
          {
            src: "/photos/vooban/02.jpg",
            alt: "Membres du GDG ÉTS dans les locaux de Vooban",
            width: 800,
            height: 799,
          },
          {
            src: "/photos/vooban/03.jpg",
            alt: "Selfie des membres du GDG ÉTS avec un animateur du meetup",
            width: 800,
            height: 1067,
          },
        ],
      },
      { type: "heading", id: "ressources", text: "Pour aller plus loin" },
      {
        type: "resources",
        items: [
          {
            label: "Atelier LeetCode du 9 novembre",
            kind: "Calendrier",
            href: "/events#atelier-leetcode",
          },
          {
            label: "GDG ÉTS au DevFest Montréal 2026",
            kind: "Article",
            href: "/blog/devfest-montreal-2026",
          },
          { label: "Calendrier des événements", kind: "Calendrier", href: "/events" },
        ],
      },
    ],
  },
  "lancement-gdg-ets": {
    lead: [
      "Le GDG ÉTS est officiellement lancé. Après le succès de l'atelier du 21 septembre, le chapitre rejoint le réseau Google Developer Groups on Campus et démarre sa première année.",
      "Une équipe de six personnes, épaulée par trois mentors, prépare une programmation d'ateliers, de conférences et de rencontres pour la communauté étudiante de l'ÉTS.",
    ],
    blocks: [
      { type: "heading", id: "une-premiere-etape", text: "Une première étape" },
      {
        type: "p",
        text: "L'atelier du 21 septembre a rassemblé la communauté naissante autour d'une première activité technique. Après ce succès, l'équipe annonce officiellement le lancement du chapitre GDG on Campus à l'ÉTS.",
      },
      {
        type: "p",
        text: "Le club fait partie du réseau Google Developer Groups on Campus et pourra collaborer avec la communauté GDG nord-américaine, notamment lors d'événements comme le DevFest.",
      },
      { type: "heading", id: "lequipe", text: "L'équipe" },
      { type: "p", text: "Le club démarre avec six personnes :" },
      {
        type: "speakers",
        items: [
          {
            name: "Oumaima El khayiri",
            role: "Présidente",
            company: "GDG ÉTS",
            initials: "OK",
            color: "#1A73E8",
            tag: "Équipe fondatrice",
          },
          {
            name: "Wilson Ly",
            role: "Vice-président",
            company: "GDG ÉTS",
            initials: "WL",
            color: "#34A853",
            tag: "Équipe fondatrice",
          },
          {
            name: "Souad Goubaa",
            role: "Responsable des événements",
            company: "GDG ÉTS",
            initials: "SG",
            color: "#FBBC04",
            tag: "Équipe fondatrice",
          },
          {
            name: "Ly Andy Phok",
            role: "VP Communauté",
            company: "GDG ÉTS",
            initials: "LP",
            color: "#EA4335",
            tag: "Équipe fondatrice",
          },
          {
            name: "Emilien Busson",
            role: "VP Projets Cédille",
            company: "GDG ÉTS",
            initials: "EB",
            color: "#9334E6",
            tag: "Équipe fondatrice",
          },
          {
            name: "Patrick Nguyen",
            role: "Membre événements",
            company: "GDG ÉTS",
            initials: "PN",
            color: "#00ACC1",
            tag: "Équipe fondatrice",
          },
        ],
      },
      { type: "heading", id: "nos-mentors", text: "Nos mentors" },
      {
        type: "p",
        text: "L'équipe est accompagnée par trois mentors : Stacy Véronneau, Erica Silva et Ali El-Sharif. Leur expérience de la communauté GDG et de l'industrie aide le club à structurer ses activités et à prendre de l'ampleur.",
      },
      { type: "heading", id: "merci", text: "Merci" },
      {
        type: "p",
        text: "Un immense merci à Becky L. Phan, qui a guidé l'équipe de A à Z dans le processus de lancement, ainsi qu'aux mentors et à la communauté GDG pour leur soutien.",
      },
      { type: "heading", id: "ressources", text: "Pour aller plus loin" },
      {
        type: "resources",
        items: [
          { label: "Calendrier des événements du GDG ÉTS", kind: "Calendrier", href: "/events" },
          { label: "À propos du GDG ÉTS", kind: "Page", href: "/about" },
        ],
      },
    ],
  },
};
