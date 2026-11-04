import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Mic,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
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
  (post) => post.category === "CONFÉRENCE" || post.category === "RETOUR",
);

export default function PanelsPage() {
  return (
    <>
      <section className="container-page pb-12 pt-10 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Conférences &amp; panels</p>
            <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Des voix de la communauté, sur scène
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Le GDG ÉTS organise et rejoint des conférences pour connecter les
              étudiant·es de l&apos;ÉTS à l&apos;écosystème tech. Retrouve ici
              les prochaines prises de parole et les retours d&apos;expérience.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="eyebrow text-muted">Tu veux présenter ?</p>
            <p className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">
              Un projet, un retour d&apos;expérience, une idée de panel ?
            </p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Viens en parler à l&apos;équipe lors d&apos;une activité. Les
              propositions des membres nourrissent la programmation.
            </p>
            <Link
              href="/events"
              className={buttonStyles({
                variant: "outline",
                size: "sm",
                className: "mt-4 w-full",
              })}
            >
              Voir les prochains événements
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <article className="overflow-hidden rounded-2xl bg-arena text-white">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="dark">
                  <span className="size-1.5 rounded-full bg-danger" aria-hidden="true" />
                  Prochaine prise de parole
                </Badge>
                <Badge tone="dark" className="text-white/70">
                  Conférence
                </Badge>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
                DevFest Montréal 2026
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {devfest.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                {devfest.summary}
              </p>

              <div className="mt-5 flex flex-col gap-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-brand" aria-hidden="true" />
                  {devfest.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                  {devfest.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mic className="size-3.5 text-brand" aria-hidden="true" />
                  Oumaima El khayiri · Rebecca Abi Chahine · Michael Persico ·
                  Daniel Wei
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={devfest.ticketsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles({ variant: "primary", size: "md" })}
                >
                  {devfest.ticketsLabel}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <Link
                  href={devfest.articleHref}
                  className={buttonStyles({
                    variant: "outline",
                    size: "md",
                    className:
                      "border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10",
                  })}
                >
                  Lire l&apos;annonce
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px] border-t border-white/10 lg:border-l lg:border-t-0">
              <Image
                src={devfest.cover}
                alt={devfest.coverAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-arena/80 via-arena/10 to-transparent lg:bg-gradient-to-r lg:from-arena/70 lg:via-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-arena/70 px-4 py-3 backdrop-blur">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  ÉTS sur scène
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Google Developer Groups on Campus: Mission, Impact, and Student
                  Perspectives
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-success">À revoir</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Récapitulatifs &amp; retours
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
          >
            Tous les articles
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {recapPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
          <article className="flex flex-col justify-center gap-4 rounded-2xl border border-dashed border-line bg-canvas/50 p-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 size-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Une idée de conférence ?
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Propose un thème ou une personne à inviter lors de la
                  prochaine activité du club.
                </p>
              </div>
            </div>
            <Link
              href="/events"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Nous rencontrer
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl border border-line bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <Clock3 className="size-4 text-muted" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Jalons de la première session
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Automne 2026
            </span>
          </div>
          <div className="divide-y divide-line">
            {milestones.map((milestone) => (
              <Link
                key={milestone.title}
                href={milestone.href}
                className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-canvas/70 sm:px-6"
              >
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-x-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    <span>{milestone.date}</span>
                    <span className="text-brand">{milestone.tag}</span>
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-tight group-hover:text-brand sm:text-lg">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    {milestone.detail}
                  </p>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
