export type PostCategory = "ATELIER" | "CONFÉRENCE" | "RETOUR" | "ANNONCE";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  categoryLabel: string;
  date: string;
  dateISO: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  coverFit?: "cover" | "contain";
  author: string;
  location: string;
  featured?: boolean;
};

export type Event = {
  slug: string;
  day: string;
  month: string;
  dateISO: string;
  type: string;
  title: string;
  time: string;
  location: string;
  href?: string;
  online?: boolean;
};

export const posts: Post[] = [
  {
    slug: "retour-devfest-montreal-2026",
    title: "Retour sur le DevFest Montréal 2026",
    excerpt:
      "Plus de 12 heures sur le terrain, la plénière, la session Flight Mode AI, les ateliers Cloud Run et Gemini + Apps Script, et Oumaima El khayiri sur scène : retour sur le DevFest Montréal 2026.",
    category: "RETOUR",
    categoryLabel: "Retour",
    date: "7 nov. 2026",
    dateISO: "2026-11-07",
    readingMinutes: 4,
    cover: "/photos/devfest-2026/06.jpg",
    coverAlt:
      "Quatre panélistes assis sur scène pendant la table ronde GDG on Campus au DevFest Montréal 2026",
    author: "Oumaima El khayiri",
    location: "Espace Ax.c, Montréal",
  },
  {
    slug: "atelier-leetcode-9-novembre",
    title: "Atelier LeetCode : pratique pour tes entrevues",
    excerpt:
      "Le tout premier événement officiel du GDG ÉTS : un atelier pratique pour découvrir la programmation compétitive et préparer tes entrevues techniques.",
    category: "ATELIER",
    categoryLabel: "Atelier",
    date: "3 nov. 2026",
    dateISO: "2026-11-03",
    readingMinutes: 4,
    cover: "/photos/leetcode/affiche.jpg",
    coverAlt:
      "Affiche de l'atelier LeetCode du GDG ÉTS, lundi 9 novembre 2026, Pavillon A, salle A-1302",
    coverFit: "contain",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Pavillon A · salle A-1302",
    featured: true,
  },
  {
    slug: "devfest-montreal-2026",
    title: "GDG ÉTS au DevFest Montréal 2026",
    excerpt:
      "Oumaima El khayiri est montée sur la scène du DevFest avec les GDG de Polytechnique, Concordia et McGill pour parler de la mission de GDG on Campus.",
    category: "CONFÉRENCE",
    categoryLabel: "Conférence",
    date: "28 oct. 2026",
    dateISO: "2026-10-28",
    readingMinutes: 5,
    cover: "/photos/devfest-annonce/02.jpg",
    coverAlt:
      "Affiche de la session « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec ses quatre intervenant·e·s",
    coverFit: "contain",
    author: "Équipe GDG ÉTS",
    location: "Espace Ax.c, Montréal",
  },
  {
    slug: "retour-meetup-vooban",
    title: "Retour sur le meetup GDG Cloud chez Vooban",
    excerpt:
      "Ayoub, Emilien et Patrick ont représenté le GDG ÉTS au meetup du GDG Cloud Montréal, entre démo de codelab et présentation d'un GDE.",
    category: "RETOUR",
    categoryLabel: "Retour",
    date: "2 oct. 2026",
    dateISO: "2026-10-02",
    readingMinutes: 4,
    cover: "/photos/vooban/02.jpg",
    coverAlt: "Membres du GDG ÉTS dans les locaux de Vooban lors du meetup GDG Cloud Montréal",
    author: "Équipe GDG ÉTS",
    location: "Vooban, Montréal",
  },
  {
    slug: "lancement-gdg-ets",
    title: "Le GDG ÉTS est officiellement lancé",
    excerpt:
      "Après le succès de l'atelier du 21 septembre, le chapitre GDG on Campus de l'ÉTS démarre sa première année avec une équipe de six personnes.",
    category: "ANNONCE",
    categoryLabel: "Annonce",
    date: "30 sept. 2026",
    dateISO: "2026-09-30",
    readingMinutes: 5,
    cover: "/photos/lancement/equipe.jpg",
    coverAlt: "Équipe fondatrice du GDG ÉTS : six portraits avec noms et rôles",
    coverFit: "contain",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Montréal",
  },
];

// Upcoming events, manually ordered by date. Move an event to pastEvents after it happens.
export const events: Event[] = [
  {
    slug: "atelier-leetcode",
    day: "09",
    month: "NOV",
    dateISO: "2026-11-09",
    type: "Atelier",
    title: "Atelier LeetCode : pratique pour tes entrevues",
    time: "12h00 – 13h30",
    location: "ÉTS, Pavillon A · salle A-1302",
    href: "/blog/atelier-leetcode-9-novembre",
  },
];

export const pastEvents: Event[] = [
  {
    slug: "devfest-montreal-2026",
    day: "06",
    month: "NOV",
    dateISO: "2026-11-06",
    type: "Conférence",
    title: "GDG ÉTS au DevFest Montréal 2026",
    time: "8 h 30 – 18 h",
    location: "Espace Ax.c, 800 rue du Square-Victoria",
    href: "/blog/retour-devfest-montreal-2026",
  },
  {
    slug: "meetup-vooban",
    day: "02",
    month: "OCT",
    dateISO: "2026-10-02",
    type: "Meetup",
    title: "GDG Cloud Montréal chez Vooban",
    time: "Soirée",
    location: "Vooban, Montréal",
    href: "/blog/retour-meetup-vooban",
  },
  {
    slug: "lancement-gdg-ets",
    day: "30",
    month: "SEP",
    dateISO: "2026-09-30",
    type: "Annonce",
    title: "Lancement officiel du chapitre GDG ÉTS",
    time: "En ligne",
    location: "LinkedIn",
    href: "/blog/lancement-gdg-ets",
    online: true,
  },
  {
    slug: "atelier-21-septembre",
    day: "21",
    month: "SEP",
    dateISO: "2026-09-21",
    type: "Atelier",
    title: "Atelier du 21 septembre",
    time: "Avant le lancement",
    location: "ÉTS",
    href: "/blog/lancement-gdg-ets",
  },
];

export const devfest = {
  title: "GDG ÉTS au DevFest Montréal 2026",
  date: "Vendredi 6 novembre 2026",
  time: "8 h 30 – 18 h",
  location: "Espace Ax.c, 800 rue du Square-Victoria",
  cover: "/photos/devfest-annonce/02.jpg",
  coverAlt: "Affiche de la session « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec ses quatre intervenant·e·s",
  coverFit: "contain",
  summary:
    "Oumaima El khayiri a présenté « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
  articleHref: "/blog/devfest-montreal-2026",
  recapHref: "/blog/retour-devfest-montreal-2026",
};

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
