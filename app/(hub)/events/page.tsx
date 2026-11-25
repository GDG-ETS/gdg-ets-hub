import type { Metadata } from "next";
import Link from "next/link";
import { EventList } from "@/components/event-list";
import { getEventSchedule } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "L'agenda du GDG ÉTS : ateliers, conférences et rencontres de la communauté GDG.",
};

const formats = [
  {
    title: "Atelier pratique",
    text: "Une session hands-on pour pratiquer une technologie ou un thème précis. Le premier atelier officiel du club portait sur LeetCode et la préparation aux entrevues.",
  },
  {
    title: "Conférence & panel",
    text: "Des membres du club et des invité·es partagent leur expérience. Le GDG ÉTS a notamment rejoint la scène du DevFest Montréal 2026.",
  },
  {
    title: "Meetup communautaire",
    text: "On retrouve les autres chapitres GDG de la région, comme lors du meetup GDG Cloud Montréal accueilli chez Vooban.",
  },
];

const steps = [
  {
    title: "Surveille le calendrier",
    text: "Les nouvelles activités sont ajoutées ici dès qu'elles sont confirmées, avec un article d'annonce.",
  },
  {
    title: "Ateliers : viens directement",
    text: "Les ateliers du club sont gratuits et sans inscription, sauf indication contraire dans l'annonce.",
  },
  {
    title: "Conférences externes",
    text: "Pour les événements organisés par d'autres communautés, l'annonce indique comment obtenir un billet.",
  },
];

export default async function EventsPage() {
  const { upcoming, past } = await getEventSchedule();

  return (
    <div className="container-hub py-8 sm:py-10">
      <header className="max-w-3xl border-b border-line pb-8">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          Événements
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base">
          Ateliers, conférences et rencontres : voici les rendez-vous du
          GDG ÉTS. Les ateliers du club sont gratuits et ouverts à la
          communauté de l&apos;ÉTS.
        </p>
        <p className="mt-3 text-sm text-muted">
          Voir aussi les{" "}
          <Link
            href="/panels"
            className="font-medium text-brand hover:text-brand-dark"
          >
            conférences et panels
          </Link>
          .
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-12">
        <div>
          <section aria-labelledby="upcoming-events">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2
                id="upcoming-events"
                className="text-base font-bold text-ink"
              >
                À venir
              </h2>
              <span className="text-xs text-muted">
                {upcoming.length}{" "}
                {upcoming.length > 1 ? "événements" : "événement"}
              </span>
            </div>
            {upcoming.length > 0 ? (
              <EventList events={upcoming} />
            ) : (
              <p className="border-b border-line py-6 text-sm leading-6 text-muted">
                Aucune activité annoncée pour le moment. L&apos;équipe prépare
                la suite : reviens bientôt ou consulte nos derniers articles.
              </p>
            )}
            <p className="mt-3 text-xs leading-5 text-muted">
              Les détails et les changements de dernière minute sont publiés
              dans nos articles. Consulte l&apos;annonce de chaque activité
              avant de te déplacer.
            </p>
          </section>

          <section aria-labelledby="past-events" className="mt-12">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 id="past-events" className="text-base font-bold text-ink">
                Retour sur nos activités
              </h2>
              <Link
                href="/blog"
                className="text-sm text-brand hover:text-brand-dark"
              >
                Les articles
              </Link>
            </div>
            <EventList events={past} />
          </section>

          <section aria-labelledby="event-formats" className="mt-12">
            <h2
              id="event-formats"
              className="border-b border-line pb-3 text-base font-bold text-ink"
            >
              Trois façons de participer
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-3">
              {formats.map((item, index) => (
                <article key={item.title} className="border-t border-line pt-4">
                  <p className="text-xs tabular-nums text-muted">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="border-t border-line pt-6 lg:border-t-0 lg:pt-1">
          <section className="border-b border-line pb-6">
            <h2 className="text-sm font-semibold text-ink">
              Comment participer
            </h2>
            <ol className="mt-4 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="pt-0.5 font-mono text-[11px] text-muted">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="pt-6">
            <h2 className="text-sm font-semibold text-ink">Lieu</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              École de technologie supérieure
              <br />
              1100, rue Notre-Dame Ouest
              <br />
              Montréal, QC H3C 1K3
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
