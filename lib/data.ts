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
    slug: "atelier-leetcode-9-novembre",
    title: "Atelier LeetCode : pratique pour tes entrevues",
    excerpt:
      "Le tout premier événement officiel du GDG ÉTS : un atelier pratique pour découvrir la programmation compétitive et préparer tes entrevues techniques.",
    category: "ATELIER",
    categoryLabel: "Atelier",
    date: "3 nov. 2026",
    dateISO: "2026-11-03",
    readingMinutes: 4,
    cover: "/covers/atelier.jpg",
    coverAlt:
      "Étudiants réunis autour d'ordinateurs portables pendant un atelier",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Pavillon A · salle A-1302",
    featured: true,
  },
  {
    slug: "devfest-montreal-2026",
    title: "GDG ÉTS au DevFest Montréal 2026",
    excerpt:
      "Oumaima El khayiri monte sur la scène du DevFest avec les GDG de Polytechnique, Concordia et McGill pour parler de la mission de GDG on Campus.",
    category: "CONFÉRENCE",
    categoryLabel: "Conférence",
    date: "28 oct. 2026",
    dateISO: "2026-10-28",
    readingMinutes: 5,
    cover: "/covers/panel-ia.jpg",
    coverAlt:
      "Audience dans un amphithéâtre pendant une conférence technique",
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
    cover: "/covers/cloud-run.jpg",
    coverAlt: "Espace de travail avec du code sur plusieurs écrans",
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
    cover: "/covers/equipe.jpg",
    coverAlt: "Étudiants travaillant ensemble sur des ordinateurs",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Montréal",
  },
];

// Upcoming events, manually ordered by date. Move an event to pastEvents after it happens.
export const events: Event[] = [
  {
    slug: "devfest-montreal-2026",
    day: "06",
    month: "NOV",
    dateISO: "2026-11-06",
    type: "Conférence",
    title: "GDG ÉTS au DevFest Montréal 2026",
    time: "Horaire sur la billetterie",
    location: "Espace Ax.c, 800 rue du Square-Victoria",
    href: "/blog/devfest-montreal-2026",
  },
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
  time: "Horaire sur la billetterie",
  location: "Espace Ax.c, 800 rue du Square-Victoria",
  cover: "/covers/panel-ia.jpg",
  coverAlt: "Audience dans un amphithéâtre pendant une conférence technique",
  summary:
    "Oumaima El khayiri présente « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
  articleHref: "/blog/devfest-montreal-2026",
  ticketsHref: "https://lnkd.in/gSnGEvnC",
  ticketsLabel: "Billets & programme",
};

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
