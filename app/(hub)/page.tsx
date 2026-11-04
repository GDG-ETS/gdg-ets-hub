import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { EventList } from "@/components/event-list";
import { PostCard } from "@/components/post-card";
import { contest, events, nextPanel, posts } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="container-page pb-16 pt-8 sm:pt-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={nextPanel.cover}
                alt={nextPanel.coverAlt}
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
                  Prochain panel
                </Badge>
                <Badge className="border-white/20 bg-white/90 text-ink backdrop-blur">
                  Inscriptions ouvertes
                </Badge>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-8">
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
                {nextPanel.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-brand" aria-hidden="true" />
                  {nextPanel.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-brand" aria-hidden="true" />
                  {nextPanel.location}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
                {nextPanel.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={nextPanel.registerHref}
                  className={buttonStyles({ variant: "primary", size: "md" })}
                >
                  S&apos;inscrire
                </Link>
                <Link
                  href="/panels"
                  className={buttonStyles({ variant: "outline", size: "md" })}
                >
                  Voir le programme
                </Link>
                <span className="ml-auto hidden items-center gap-1.5 text-xs text-success sm:inline-flex">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Gratuit pour la communauté ÉTS
                </span>
              </div>
            </div>
          </article>

          <aside className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="eyebrow text-muted">Arène CP</p>
              <Badge tone="success">
                <span
                  className="size-1.5 animate-pulse rounded-full bg-success"
                  aria-hidden="true"
                />
                En cours
              </Badge>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
                Édition 2026
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight">
                Hackathon d&apos;automne
              </h2>
              <p className="mt-2 text-sm text-muted">
                {contest.format} · {contest.startLabel}
              </p>

              <div className="mt-5 rounded-xl border border-line bg-canvas px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Temps restant
                </p>
                <Countdown
                  seconds={contest.remainingSeconds}
                  variant="short"
                  className="mt-1 block text-[30px] font-semibold tracking-tight text-ink"
                />
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                  <Radio className="size-3.5 text-success" aria-hidden="true" />
                  Classement en direct · juge opérationnel
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 text-[13px] text-muted">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  Classement ICPC gelé à la dernière heure
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  C++17, Python 3 et Java 17
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {contest.registered} participants inscrits
                </li>
              </ul>

              <Link
                href="/arena"
                className={buttonStyles({
                  variant: "outline",
                  size: "md",
                  className: "mt-auto justify-between",
                })}
              >
                Voir l&apos;arène
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
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
            Chroniques techniques, débriefings d&apos;ateliers et retours
            d&apos;expérience rédigés par les membres de la communauté.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
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
            <p className="eyebrow text-success">Calendrier académique</p>
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
          Les activités sont ouvertes à tous les étudiants de l&apos;ÉTS, peu
          importe le programme.
        </div>
      </section>
    </>
  );
}
