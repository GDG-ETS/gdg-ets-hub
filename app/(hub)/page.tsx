import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getEventTypeColors } from "@/lib/category-colors";
import { events, mentors, posts, team } from "@/lib/data";
import { cn } from "@/lib/cn";

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
  const nextEvent = events[0];

  return (
    <div className="container-hub py-8 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-14">
        <div>
          <header className="border-b border-line pb-8">
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
              GDG ÉTS Hub
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              Ateliers, conférences et retours d&apos;expérience de la
              communauté Google Developer Groups on Campus de l&apos;École de
              technologie supérieure.
            </p>
          </header>

          {nextEvent && (
            <section
              aria-labelledby="upcoming"
              className="border-b border-line py-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 id="upcoming" className="text-sm font-semibold text-ink">
                  Prochain événement
                </h2>
                <Link
                  href="/events"
                  className="text-sm text-brand hover:text-brand-dark"
                >
                  Tous les événements
                </Link>
              </div>

              <div className="mt-4 flex gap-4 sm:gap-6">
                <div className="w-12 shrink-0 sm:w-16">
                  <span className="block text-3xl font-bold leading-none tracking-tight text-ink sm:text-4xl">
                    {nextEvent.day}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-google-blue-fg">
                    {nextEvent.month}
                  </span>
                  <span className="mt-2 flex gap-0.5" aria-hidden="true">
                    <span className="h-0.5 w-2 rounded-full bg-google-blue" />
                    <span className="h-0.5 w-2 rounded-full bg-google-red" />
                    <span className="h-0.5 w-2 rounded-full bg-google-yellow" />
                    <span className="h-0.5 w-2 rounded-full bg-google-green" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                      getEventTypeColors(nextEvent.type).text,
                      getEventTypeColors(nextEvent.type).softBg,
                      getEventTypeColors(nextEvent.type).border,
                    )}
                  >
                    {nextEvent.type}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                    {nextEvent.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {formatLongDate(nextEvent.dateISO)} · {nextEvent.time}
                    <span className="hidden sm:inline">
                      {" "}
                      · {nextEvent.location}
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted sm:hidden">
                    {nextEvent.location}
                  </p>
                  {nextEvent.href && (
                    <div className="mt-3">
                      <Link
                        href={nextEvent.href}
                        className="text-sm font-medium text-brand hover:text-brand-dark"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          <section aria-labelledby="latest-posts" className="pt-6">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <h2 id="latest-posts" className="text-base font-bold text-ink">
                Derniers articles
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
              une équipe bénévole et épaulé par un mentor du réseau GDG.
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  Membres
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">
                  {team.length.toString().padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  {mentors.length > 1 ? "Mentors" : "Mentor"}
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">
                  {mentors.length.toString().padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  Articles
                </dt>
                <dd className="mt-1 text-xl font-semibold text-ink">
                  {posts.length.toString().padStart(2, "0")}
                </dd>
              </div>
            </dl>
            <Link
              href="/about"
              className="mt-4 inline-flex text-sm text-brand hover:text-brand-dark"
            >
              En savoir plus
            </Link>
          </section>

          <section className="pt-6">
            <h2 className="text-sm font-semibold text-ink">Sujets</h2>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {["Atelier", "Conférence", "Annonce", "Retour"].map((topic) => {
                const color = getEventTypeColors(topic);
                return (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 text-muted"
                  >
                    <span
                      className={cn("size-1.5 rounded-full", color.solid)}
                      aria-hidden="true"
                    />
                    {topic}
                  </span>
                );
              })}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
