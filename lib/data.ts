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
    slug: "coding-with-gdg-ets-2-programmation-dynamique",
    title: "Coding with GDG-ÉTS #2 : programmation dynamique",
    excerpt:
      "Deuxième atelier de programmation compétitive : récursion, mémoïsation et bottom-up en Java sur HackerRank, pour se préparer à l'examen final de LOG200.",
    category: "ATELIER",
    categoryLabel: "Atelier",
    date: "25 nov. 2026",
    dateISO: "2026-11-25",
    readingMinutes: 3,
    cover: "/covers/atelier.jpg",
    coverAlt:
      "Étudiants réunis autour d'ordinateurs portables pendant un atelier",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Pavillon D · local D-4007",
    featured: true,
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
    cover: "/covers/atelier.jpg",
    coverAlt:
      "Étudiants réunis autour d'ordinateurs portables pendant un atelier",
    author: "Équipe GDG ÉTS",
    location: "ÉTS, Pavillon A · salle A-1302",
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
      "Après le succès de l'atelier du 21 septembre, le chapitre GDG on Campus de l'ÉTS a démarré sa première année avec une équipe de six personnes.",
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

// Every club event, in any order. Upcoming vs. past is computed from the date,
// so an event moves to "Retour sur nos activités" on its own once it is over.
export const allEvents: Event[] = [
  {
    slug: "coding-with-gdg-ets-2",
    day: "03",
    month: "DÉC",
    dateISO: "2026-12-03",
    type: "Atelier",
    title: "Coding with GDG-ÉTS #2 : programmation dynamique",
    time: "12h00 – 13h30",
    location: "ÉTS, Pavillon D · local D-4007",
    href: "/blog/coding-with-gdg-ets-2-programmation-dynamique",
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
  {
    slug: "devfest-montreal-2026",
    day: "06",
    month: "NOV",
    dateISO: "2026-11-06",
    type: "Conférence",
    title: "GDG ÉTS au DevFest Montréal 2026",
    time: "Journée complète",
    location: "Espace Ax.c, 800 rue du Square-Victoria",
    href: "/blog/devfest-montreal-2026",
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

/** Today's date in Montréal as YYYY-MM-DD. */
function todayInMontreal(now: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * Splits events into upcoming (soonest first) and past (most recent first).
 * An event stays "upcoming" for its whole day.
 */
export function splitEvents(events: Event[], now: Date) {
  const today = todayInMontreal(now);
  const upcoming = events
    .filter((event) => event.dateISO >= today)
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  const past = events
    .filter((event) => event.dateISO < today)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  return { upcoming, past };
}

export const devfest = {
  title: "GDG ÉTS au DevFest Montréal 2026",
  date: "Vendredi 6 novembre 2026",
  location: "Espace Ax.c, 800 rue du Square-Victoria",
  cover: "/covers/panel-ia.jpg",
  coverAlt: "Audience dans un amphithéâtre pendant une conférence technique",
  summary:
    "Oumaima El khayiri a présenté « Google Developer Groups on Campus: Mission, Impact, and Student Perspectives » avec Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
  articleHref: "/blog/devfest-montreal-2026",
};

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
