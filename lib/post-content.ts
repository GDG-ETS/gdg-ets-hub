export type PanelSpeaker = {
  name: string;
  role: string;
  company?: string;
  initials: string;
  color: string;
  tag: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "speakers"; items: PanelSpeaker[] }
  | { type: "resources"; items: { label: string; kind: string; href?: string }[] };

export type ArticleBody = {
  lead: string[];
  blocks: ArticleBlock[];
};

export const articleBodies: Record<string, ArticleBody> = {
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
      "Pour sa première année, le GDG ÉTS sera sur la scène du DevFest Montréal 2026. Notre lead, Oumaima El khayiri, participe à la session « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » aux côtés de Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
      "Le rendez-vous est fixé au vendredi 6 novembre 2026, à l'Espace Ax.c, au 800 rue du Square-Victoria, à Montréal.",
    ],
    blocks: [
      { type: "heading", id: "le-devfest", text: "Le DevFest, c'est quoi ?" },
      {
        type: "p",
        text: "Le DevFest est la plus grande conférence tech communautaire au Québec, organisée par les Google Developer Groups. C'est une journée de conférences et de rencontres autour de l'IA, du cloud, du mobile et des technologies Google.",
      },
      { type: "heading", id: "notre-intervention", text: "Notre intervention" },
      {
        type: "p",
        text: "La session réunit des voix étudiantes et des organisateur·ices de GDG on Campus pour parler de la mission du programme, de son impact et de la perspective étudiante. L'ÉTS y rejoint les GDG de Polytechnique, Concordia et McGill sur scène.",
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
      { type: "heading", id: "pourquoi-venir", text: "Pourquoi venir ?" },
      {
        type: "list",
        items: [
          "Découvrir des projets et des retours d'expérience de la communauté tech québécoise.",
          "Rencontrer des développeur·ses, des étudiant·es et des organisateur·ices de GDG.",
          "Élargir ton réseau et trouver de l'inspiration pour tes propres projets.",
          "Soutenir la première participation du GDG ÉTS au DevFest.",
        ],
      },
      { type: "heading", id: "informations-pratiques", text: "Informations pratiques" },
      {
        type: "list",
        items: [
          "Date : vendredi 6 novembre 2026",
          "Lieu : Espace Ax.c, 800 rue du Square-Victoria, Montréal",
          "Billets : sur la billetterie officielle du DevFest",
          "L'ÉTS sera représentée par Oumaima El khayiri.",
        ],
      },
      { type: "heading", id: "ressources", text: "Billets et ressources" },
      {
        type: "resources",
        items: [
          {
            label: "Billets et programme du DevFest MTL 2026",
            kind: "Billets",
            href: "https://lnkd.in/gSnGEvnC",
          },
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
        text: "Le club continue sa première session avec le DevFest Montréal 2026, puis son premier atelier officiel le 9 novembre. Les détails sont dans le calendrier.",
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
