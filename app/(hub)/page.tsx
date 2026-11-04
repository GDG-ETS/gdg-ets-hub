import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  MapPin,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { EventList } from "@/components/event-list";
import { PostCard } from "@/components/post-card";
import { devfest, events, featuredEvent, posts } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="container-page pb-16 pt-8 sm:pt-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={featuredEvent.cover}
                alt={featuredEvent.coverAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 780px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <Badge className="border-white/20 bg-white/95 text-ink backdrop-blur">
                  <span className="size-1.5 rounded-full bg-danger" aria-hidden="true" />
                  Prochain événement
                </Badge>
                <Badge className="border-white/20 bg-white/90 text-ink backdrop-blur">
                  Gratuit
                </Badge>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-8">
              <p className="eyebrow text-brand">Atelier · Programmation compétitive</p>
              <h1 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
                {featuredEvent.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-brand" aria-hidden="true" />
                  {featuredEvent.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-4 text-brand" aria-hidden="true" />
                  {featuredEvent.time}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-brand" aria-hidden="true" />
                  {featuredEvent.location}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
                {featuredEvent.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={featuredEvent.eventHref}
                  className={buttonStyles({ variant: "primary", size: "md" })}
                >
                  Voir les détails
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href={featuredEvent.articleHref}
                  className={buttonStyles({ variant: "outline", size: "md" })}
                >
                  Lire l&apos;annonce
                </Link>
                <span className="ml-auto hidden items-center gap-1.5 text-xs text-success sm:inline-flex">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Des tuteurs sur place
                </span>
              </div>
            </div>
          </article>

          <aside className="flex flex-col gap-4">
            <section className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
                <p className="eyebrow text-muted">GDG ÉTS sur scène</p>
                <Badge tone="neutral" className="bg-canvas">
                  Vendredi 6 nov.
                </Badge>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
                  DevFest Montréal 2026
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight">
                  Une première scène pour l&apos;ÉTS
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Oumaima El khayiri présente « Google Developer Groups on
                  Campus » avec Rebecca Abi Chahine, Michael Persico et Daniel
                  Wei.
                </p>

                <div className="mt-4 flex flex-col gap-1.5 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-brand" aria-hidden="true" />
                    {devfest.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                    {devfest.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5 text-brand" aria-hidden="true" />
                    Quatre intervenant·es sur scène
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={devfest.ticketsHref}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonStyles({
                      variant: "dark",
                      size: "md",
                      className: "justify-between",
                    })}
                  >
                    {devfest.ticketsLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <Link
                    href={devfest.articleHref}
                    className="text-center text-xs font-medium text-brand hover:underline"
                  >
                    Lire l&apos;annonce
                  </Link>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-arena p-5 text-white sm:p-6">
              <p className="eyebrow text-brand">Arène CP · Démo</p>
              <h2 className="mt-2 flex items-center gap-2 font-display text-xl font-semibold leading-snug tracking-tight">
                <Code2 className="size-5 text-brand" aria-hidden="true" />
                Teste l&apos;éditeur et le classement
              </h2>
              <p className="mt-2 text-xs leading-5 text-white/60">
                Concours, soumissions et verdicts simulés. Aucun compte requis.
              </p>
              <Link
                href="/arena"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-brand"
              >
                Explorer la démo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </section>
          </aside>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-brand">Publications &amp; retours</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Derniers articles
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Annonces, retours d&apos;événements et coulisses du club, écrits par
            les membres de la communauté.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1, 4).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
          >
            Tous les articles
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-success">Calendrier</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Prochains événements
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
          >
            Consulter l&apos;agenda complet
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-7">
          <EventList events={events} />
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
          <Clock3 className="size-3.5" aria-hidden="true" />
          Les ateliers du club sont gratuits. Le DevFest est organisé par la
          communauté GDG ; un billet est requis.
        </div>
      </section>
    </>
  );
}
