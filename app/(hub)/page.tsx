import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { events, featuredEvent, posts } from "@/lib/data";

function formatLongDate(dateISO: string) {
  const label = new Intl.DateTimeFormat("fr-CA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${dateISO}T12:00:00Z`));

  return label.charAt(0).toUpperCase() + label.slice(1);
}

export default function HomePage() {
  const nextWorkshop = events.find((event) => event.type === "Atelier");

  return (
    <div className="container-hub py-8 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-14">
        <div>
          <header className="border-b border-line pb-8">
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
              Le hub du GDG ÉTS
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Ateliers, conférences et retours d&apos;expérience de la
              communauté Google Developer Groups on Campus de l&apos;École de
              technologie supérieure.
            </p>
          </header>

          <section
            aria-labelledby="next-event"
            className="border-b border-line py-6"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="next-event" className="text-sm font-semibold text-ink">
                Prochain rendez-vous
              </h2>
              <Link
                href="/events"
                className="text-sm text-brand hover:text-brand-dark"
              >
                Calendrier
              </Link>
            </div>

            <div className="mt-4 flex gap-4 sm:gap-6">
              <div className="w-12 shrink-0 sm:w-16">
                <span className="block text-3xl font-bold leading-none tracking-tight text-ink sm:text-4xl">
                  06
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-muted">
                  NOV
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {featuredEvent.date} · {featuredEvent.time}
                  <span className="hidden sm:inline">
                    {" "}
                    · {featuredEvent.location}
                  </span>
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                  {featuredEvent.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <a
                    href={featuredEvent.ticketsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-brand hover:text-brand-dark"
                  >
                    {featuredEvent.ticketsLabel}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                  <Link
                    href={featuredEvent.articleHref}
                    className="text-muted hover:text-ink"
                  >
                    Lire l&apos;annonce
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="latest-posts" className="pt-6">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 id="latest-posts" className="text-base font-bold text-ink">
                Articles
              </h2>
              <Link
                href="/blog"
                className="text-sm text-brand hover:text-brand-dark"
              >
                Tous les articles
              </Link>
            </div>

            <div className="divide-y divide-line">
              {posts.slice(0, 3).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/blog"
                className="text-sm font-medium text-brand hover:text-brand-dark"
              >
                Voir les {posts.length} articles
              </Link>
            </div>
          </section>
        </div>

        <aside className="border-t border-line pt-6 lg:border-t-0 lg:pt-1">
          <section className="border-b border-line pb-6">
            <h2 className="text-sm font-semibold text-ink">La communauté</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Un chapitre étudiant du réseau Google Developer Groups, animé par
              une équipe bénévole et épaulé par trois mentors.
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  Membres
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">06</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  Mentors
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">03</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  Articles
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">04</dd>
              </div>
            </dl>
            <Link
              href="/about"
              className="mt-4 inline-flex text-sm text-brand hover:text-brand-dark"
            >
              En savoir plus
            </Link>
          </section>

          {nextWorkshop && (
            <section className="border-b border-line py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold text-ink">
                  Prochain atelier
                </h2>
                <Link
                  href="/events"
                  className="text-xs text-brand hover:text-brand-dark"
                >
                  Tout voir
                </Link>
              </div>
              <Link
                href={`/events#${nextWorkshop.slug}`}
                className="mt-3 block text-sm font-medium leading-6 text-ink hover:text-brand"
              >
                {nextWorkshop.title}
              </Link>
              <p className="mt-1 text-xs leading-5 text-muted">
                {formatLongDate(nextWorkshop.dateISO)} · {nextWorkshop.time}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted">
                {nextWorkshop.location}
              </p>
            </section>
          )}

          <section className="border-b border-line py-6">
            <h2 className="text-sm font-semibold text-ink">Arène · démo</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Problèmes en français, éditeur intégré et classement ICPC.
              Concours et verdicts simulés, sans compte.
            </p>
            <Link
              href="/arena"
              className="mt-3 inline-flex text-sm text-brand hover:text-brand-dark"
            >
              Explorer la démo
            </Link>
          </section>

          <section className="pt-6">
            <h2 className="text-sm font-semibold text-ink">Sujets</h2>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {["Atelier", "Conférence", "Retour", "Annonce"].map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
