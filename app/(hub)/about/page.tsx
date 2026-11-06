import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "GDG ÉTS est le chapitre Google Developer Groups on Campus de l'École de technologie supérieure, à Montréal.",
};

const stats = [
  { value: "2026", label: "lancement du chapitre" },
  { value: "06", label: "membres fondateurs" },
  { value: "03", label: "mentors" },
  { value: "01", label: "chapitre GDG on Campus à l'ÉTS" },
];

const values = [
  {
    title: "Apprendre en pratiquant",
    text: "Nos activités partent d'un problème concret : un exercice LeetCode, une démo de codelab, un sujet à débattre. On apprend en faisant, ensemble.",
  },
  {
    title: "Une communauté ouverte",
    text: "Que tu sois débutant·e ou déjà à l'aise avec le code, tu as une place. Les tuteurs sont là pour accompagner, pas pour impressionner.",
  },
  {
    title: "Se connecter à l'écosystème",
    text: "Le club fait partie du réseau GDG et participe à des événements comme le DevFest Montréal ou les meetups du GDG Cloud Montréal.",
  },
];

const team = [
  { name: "Oumaima El khayiri", role: "Présidente", initials: "OK" },
  { name: "Wilson Ly", role: "Vice-président", initials: "WL" },
  { name: "Souad Goubaa", role: "Responsable des événements", initials: "SG" },
  { name: "Ly Andy Phok", role: "VP Communauté", initials: "LP" },
  { name: "Emilien Busson", role: "VP Projets Cédille", initials: "EB" },
  { name: "Patrick Nguyen", role: "Membre aux événements", initials: "PN" },
];

const mentors = [
  { name: "Stacy Véronneau", initials: "SV" },
  { name: "Erica Silva", initials: "ES" },
  { name: "Ali El-Sharif", initials: "AE" },
];

export default function AboutPage() {
  return (
    <div className="container-hub py-8 sm:py-10">
      <header className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-start">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            Une communauté qui construit, ensemble
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">
            GDG ÉTS est le chapitre Google Developer Groups on Campus de
            l&apos;École de technologie supérieure, à Montréal. Lancé à
            l&apos;automne 2026, le club rassemble les étudiant·es autour
            d&apos;ateliers, de conférences et de programmation compétitive.
          </p>
        </div>

        <aside className="border-t border-line pt-5 xl:border-t-0 xl:pt-0">
          <p className="text-sm font-semibold text-ink">En bref</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Un chapitre étudiant du réseau Google Developer Groups, animé par
            une équipe bénévole et épaulé par trois mentors.
          </p>
          <div className="mt-3 flex flex-col items-start gap-2 text-sm">
            <Link
              href="/events"
              className="text-brand hover:text-brand-dark"
            >
              Voir le calendrier
            </Link>
            <Link
              href="/blog/lancement-gdg-ets"
              className="text-brand hover:text-brand-dark"
            >
              Lire l&apos;annonce de lancement
            </Link>
          </div>
        </aside>
      </header>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[11px] uppercase leading-5 tracking-wide text-muted">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <section className="mt-12 grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Notre mission
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Trois principes, une même envie de faire.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <article key={value.title} className="border-t border-line pt-4">
              <p className="text-xs tabular-nums text-muted">0{index + 1}</p>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          Les personnes derrière le club
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Six membres fondateurs, épaulés par des mentors du réseau GDG et par
          la communauté de l&apos;ÉTS.
        </p>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="flex items-center gap-3 border-t border-line pt-4">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-canvas text-xs font-semibold text-ink"
                aria-hidden="true"
              >
                {person.initials}
              </span>
              <div>
                <p className="text-sm font-semibold tracking-tight text-ink">
                  {person.name}
                </p>
                <p className="text-xs text-muted">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold tracking-tight text-ink">Mentors</h3>
          <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
            Leur expérience de la communauté et de l&apos;industrie aide le
            club à structurer ses activités et à prendre de l&apos;ampleur.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="flex items-center gap-3 border-t border-line pt-4"
              >
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-canvas text-[11px] font-semibold text-ink"
                  aria-hidden="true"
                >
                  {mentor.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-ink">
                    {mentor.name}
                  </p>
                  <p className="text-xs text-muted">Mentor·e</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">
            Merci à Becky L. Phan pour son accompagnement tout au long du
            processus de lancement du chapitre.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-8 border-t border-line pt-8 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Envie de proposer quelque chose ?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            Un sujet de conférence, un atelier ou une idée pour améliorer le
            club : viens en parler à l&apos;équipe lors d&apos;une activité. Les
            propositions des membres nourrissent directement la programmation.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <Link href="/events" className="text-brand hover:text-brand-dark">
              Voir les prochains événements
            </Link>
            <Link href="/blog" className="text-brand hover:text-brand-dark">
              Lire les articles
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Participer
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Les ateliers du club sont gratuits et ouverts à la communauté de
            l&apos;ÉTS. Viens à une activité pour rencontrer l&apos;équipe.
          </p>
          <Link
            href="/events"
            className="mt-3 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
          >
            Voir le calendrier
          </Link>
        </div>
      </section>
    </div>
  );
}
