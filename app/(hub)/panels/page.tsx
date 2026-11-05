import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { buttonStyles } from "@/components/ui/button";
import { devfest, posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conférences & panels",
  description:
    "Les conférences et panels du GDG ÉTS : DevFest Montréal 2026, retours d'expérience et rencontres avec la communauté GDG.",
};

const milestones = [
  {
    date: "6 novembre 2026",
    tag: "À venir",
    title: "DevFest Montréal 2026",
    detail:
      "Oumaima El khayiri présente la mission de GDG on Campus avec Rebecca Abi Chahine, Michael Persico et Daniel Wei.",
    href: "/blog/devfest-montreal-2026",
  },
  {
    date: "2 octobre 2026",
    tag: "Retour",
    title: "Meetup GDG Cloud Montréal chez Vooban",
    detail:
      "Ayoub Marouf, Emilien Busson et Patrick Nguyen ont représenté le club lors de cette soirée technique.",
    href: "/blog/retour-meetup-vooban",
  },
  {
    date: "30 septembre 2026",
    tag: "Annonce",
    title: "Lancement officiel du GDG ÉTS",
    detail:
      "Le chapitre GDG on Campus démarre sa première année avec six membres et trois mentors.",
    href: "/blog/lancement-gdg-ets",
  },
  {
    date: "21 septembre 2026",
    tag: "Atelier",
    title: "Atelier du 21 septembre",
    detail:
      "L'atelier qui a précédé l'annonce officielle du lancement du chapitre.",
    href: "/blog/lancement-gdg-ets",
  },
];

const recapPosts = posts.filter(
  (post) => post.category === "CONFÉRENCE" || post.category === "RETOUR"
);

export default function PanelsPage() {
  return (
    <div className="container-hub py-8 sm:py-10">
      <header className="max-w-3xl border-b border-line pb-8">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          Conférences &amp; panels
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base">
          Le GDG ÉTS organise et rejoint des conférences pour connecter les
          étudiant·es de l&apos;ÉTS à l&apos;écosystème tech. Retrouve ici les
          prochaines prises de parole et les retours d&apos;expérience.
        </p>
      </header>

      <section
        aria-labelledby="next-talk"
        className="border-b border-line py-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div>
            <p className="text-sm font-medium text-brand">
              Prochaine prise de parole
            </p>
            <h2
              id="next-talk"
              className="mt-2 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl"
            >
              {devfest.title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">
              {devfest.summary}
            </p>

            <div className="mt-4 space-y-1 text-sm leading-6 text-muted">
              <p>
                <span className="font-medium text-ink">Date :</span>{" "}
                {devfest.date}
              </p>
              <p>
                <span className="font-medium text-ink">Lieu :</span>{" "}
                {devfest.location}
              </p>
              <p>
                <span className="font-medium text-ink">Avec :</span> Oumaima El
                khayiri, Rebecca Abi Chahine, Michael Persico et Daniel Wei
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={devfest.ticketsHref}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: "primary", size: "md" })}
              >
                {devfest.ticketsLabel}
                <span aria-hidden="true">↗</span>
              </a>
              <Link
                href={devfest.articleHref}
                className="text-sm font-medium text-brand hover:text-brand-dark"
              >
                Lire l&apos;annonce
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-canvas">
            <Image
              src={devfest.cover}
              alt={devfest.coverAlt}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="recaps" className="pt-8">
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h2 id="recaps" className="text-base font-bold text-ink">
            Récapitulatifs &amp; retours
          </h2>
          <Link
            href="/blog"
            className="text-sm text-brand hover:text-brand-dark"
          >
            Tous les articles
          </Link>
        </div>
        <div className="divide-y divide-line">
          {recapPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section aria-labelledby="milestones" className="mt-12">
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h2 id="milestones" className="text-base font-bold text-ink">
            Jalons de la première session
          </h2>
          <span className="text-xs text-muted">Automne 2026</span>
        </div>
        <div className="divide-y divide-line border-b border-line">
          {milestones.map((milestone) => (
            <Link
              key={milestone.title}
              href={milestone.href}
              className="group grid gap-1 py-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
            >
              <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-muted">
                {milestone.date}
                <span className="ml-2 text-brand">{milestone.tag}</span>
              </p>
              <div>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
                  {milestone.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted">
                  {milestone.detail}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="text-xl font-bold text-ink">
          Une idée de conférence ?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Propose un thème ou une personne à inviter lors de la prochaine
          activité du club. Les propositions des membres nourrissent la
          programmation.
        </p>
        <Link
          href="/events"
          className="mt-4 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
        >
          Nous rencontrer
        </Link>
      </section>
    </div>
  );
}
