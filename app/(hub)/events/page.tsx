import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { EventList } from "@/components/event-list";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "L'agenda du GDG ÉTS : panels, ateliers, conférences et sessions d'entraînement.",
};

const recurring = [
  {
    title: "Arène ouverte",
    cadence: "Un mercredi sur deux · 18h00",
    description:
      "Des problèmes d'entraînement accessibles, un jury présent et des explications de solution en fin de session.",
  },
  {
    title: "Atelier technique",
    cadence: "Une fois par mois · 18h00",
    description:
      "Une technologie, un projet concret, deux heures pour pratiquer. Apporte ton ordinateur portable.",
  },
  {
    title: "Panel de l'industrie",
    cadence: "Une fois par session · 18h00",
    description:
      "Des professionnel·les racontent leur réalité de terrain, puis répondent aux questions de la salle.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="container-page pb-10 pt-10 sm:pt-14">
        <p className="eyebrow text-success">Calendrier académique</p>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Prochains événements
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Ateliers, conférences et entraînements : tout ce qui fait vivre la
              communauté cette session. Les activités sont gratuites et ouvertes
              aux étudiants de l&apos;ÉTS.
            </p>
          </div>
          <Link
            href="/panels"
            className={buttonStyles({ variant: "outline", size: "md" })}
          >
            Voir les panels
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
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
                Les inscriptions ouvrent deux semaines avant chaque activité.
                Surveille le Discord pour les rappels et les changements de
                salle.
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
              {[
                {
                  step: "01",
                  title: "Choisis une activité",
                  text: "Chaque événement indique le niveau requis et le matériel nécessaire.",
                },
                {
                  step: "02",
                  title: "Inscris-toi en ligne",
                  text: "Les places sont limitées pour les ateliers afin de garder un bon ratio d'encadrement.",
                },
                {
                  step: "03",
                  title: "Présente-toi 10 minutes avant",
                  text: "Apporte ton ordinateur portable et une carte étudiante pour les activités sur le campus.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-3">
                  <span className="font-mono text-[11px] font-semibold text-brand">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
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

      <section className="container-page pb-20">
        <p className="eyebrow text-brand">Tout au long de la session</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Nos rendez-vous réguliers
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {recurring.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand">
                {item.cadence}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
