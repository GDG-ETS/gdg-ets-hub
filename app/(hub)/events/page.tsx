import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { EventList } from "@/components/event-list";
import { devfest, events, pastEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "L'agenda du GDG ÉTS : atelier LeetCode, DevFest Montréal 2026 et rencontres de la communauté GDG.",
};

const formats = [
  {
    title: "Atelier pratique",
    text: "Une session hands-on pour pratiquer une technologie ou un thème précis. Le premier atelier officiel du club porte sur LeetCode et la préparation aux entrevues.",
  },
  {
    title: "Conférence & panel",
    text: "Des membres du club et des invité·es partagent leur expérience. Le GDG ÉTS rejoint notamment la scène du DevFest Montréal 2026.",
  },
  {
    title: "Meetup communautaire",
    text: "On retrouve les autres chapitres GDG de la région, comme lors du meetup GDG Cloud Montréal accueilli chez Vooban.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container-page pb-10 pt-10 sm:pt-14">
        <p className="eyebrow text-success">Calendrier</p>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Prochains événements
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Ateliers, conférences et rencontres : voici les prochains
              rendez-vous du GDG ÉTS. Les ateliers du club sont gratuits et
              ouverts à la communauté de l&apos;ÉTS.
            </p>
          </div>
          <Link
            href="/panels"
            className={buttonStyles({ variant: "outline", size: "md" })}
          >
            Conférences &amp; panels
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                À venir
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {events.length} événements
              </span>
            </div>
            <EventList events={events} />

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-muted">
              <CalendarDays className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <p>
                Les détails et les changements de dernière minute sont publiés
                dans nos articles. Consulte l&apos;annonce de chaque activité
                avant de te déplacer.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-brand" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Comment participer
              </h2>
            </div>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="font-mono text-[11px] font-semibold text-brand">
                  01
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Choisis une activité
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Deux rendez-vous cette session : le DevFest le 6 novembre et
                    l&apos;atelier LeetCode le 9 novembre.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] font-semibold text-brand">
                  02
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">
                    Atelier : viens directement
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Gratuit, sans inscription. Rendez-vous au Pavillon A, salle
                    A-1302, de 12 h à 13 h 30. Des tuteurs seront sur place.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[11px] font-semibold text-brand">
                  03
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">
                    DevFest : prends ton billet
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    L&apos;événement est organisé par la communauté GDG. La
                    billetterie officielle donne accès au programme complet.
                  </p>
                  <a
                    href={devfest.ticketsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
                  >
                    Billets &amp; programme
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </li>
            </ol>
            <div className="mt-5 rounded-lg bg-canvas p-3 text-xs leading-5 text-muted">
              <p className="flex items-center gap-1.5 font-medium text-ink">
                <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                École de technologie supérieure
              </p>
              <p className="mt-1">1100, rue Notre-Dame Ouest, Montréal, QC H3C 1K3</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-brand">Depuis le lancement</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Retour sur nos activités
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Les premières rencontres du chapitre, entre atelier fondateur,
            lancement officiel et meetup communautaire.
          </p>
        </div>
        <div className="mt-6">
          <EventList events={pastEvents} />
        </div>
      </section>

      <section className="container-page pb-20">
        <p className="eyebrow text-success">Nos formats</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Trois façons de participer
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {formats.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
