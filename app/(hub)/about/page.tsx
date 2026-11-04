import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  HeartHandshake,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/button";

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
    icon: Code2,
    title: "Apprendre en pratiquant",
    text: "Nos activités partent d'un problème concret : un exercice LeetCode, une démo de codelab, un sujet à débattre. On apprend en faisant, ensemble.",
  },
  {
    icon: HeartHandshake,
    title: "Une communauté ouverte",
    text: "Que tu sois débutant·e ou déjà à l'aise avec le code, tu as une place. Les tuteurs sont là pour accompagner, pas pour impressionner.",
  },
  {
    icon: Network,
    title: "Se connecter à l'écosystème",
    text: "Le club fait partie du réseau GDG et participe à des événements comme le DevFest Montréal ou les meetups du GDG Cloud Montréal.",
  },
];

const team = [
  {
    name: "Oumaima El khayiri",
    role: "Présidente",
    initials: "OK",
    color: "#1A73E8",
  },
  {
    name: "Wilson Ly",
    role: "Vice-président",
    initials: "WL",
    color: "#34A853",
  },
  {
    name: "Souad Goubaa",
    role: "Responsable des événements",
    initials: "SG",
    color: "#FBBC04",
  },
  {
    name: "Ly Andy Phok",
    role: "VP Communauté",
    initials: "LP",
    color: "#EA4335",
  },
  {
    name: "Emilien Busson",
    role: "VP Projets Cédille",
    initials: "EB",
    color: "#9334E6",
  },
  {
    name: "Patrick Nguyen",
    role: "Membre aux événements",
    initials: "PN",
    color: "#00ACC1",
  },
];

const mentors = [
  { name: "Stacy Véronneau", initials: "SV", color: "#1A73E8" },
  { name: "Erica Silva", initials: "ES", color: "#34A853" },
  { name: "Ali El-Sharif", initials: "AE", color: "#FBBC04" },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-14 pt-10 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <p className="eyebrow text-brand">À propos</p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Une communauté qui construit, ensemble
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              GDG ÉTS est le chapitre Google Developer Groups on Campus de
              l&apos;École de technologie supérieure, à Montréal. Lancé à
              l&apos;automne 2026, le club rassemble les étudiant·es autour
              d&apos;ateliers, de conférences et de programmation compétitive.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="eyebrow text-muted">En bref</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Un chapitre étudiant du réseau Google Developer Groups, animé par
              une équipe bénévole et épaulé par trois mentors.
            </p>
            <Link
              href="/events"
              className={buttonStyles({
                variant: "dark",
                size: "sm",
                className: "mt-4 w-full",
              })}
            >
              Voir le calendrier
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/blog/lancement-gdg-ets"
              className="mt-3 block text-center text-xs font-medium text-brand hover:underline"
            >
              Lire l&apos;annonce de lancement
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div>
            <p className="eyebrow text-success">Notre mission</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Trois principes, une même envie de faire
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-xl border border-line bg-surface p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-brand">L&apos;équipe</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Les personnes derrière le club
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Six membres fondateurs, épaulés par des mentors du réseau GDG et
              par la communauté de l&apos;ÉTS.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-line bg-canvas/60 p-5"
              >
                <span
                  className="flex size-12 items-center justify-center rounded-full font-display text-sm font-semibold"
                  style={{
                    backgroundColor: `${person.color}1F`,
                    color: person.color,
                  }}
                  aria-hidden="true"
                >
                  {person.initials}
                </span>
                <p className="mt-4 font-display text-base font-semibold tracking-tight">
                  {person.name}
                </p>
                <p className="mt-1 text-xs text-muted">{person.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-success">Nos mentors</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  Un accompagnement du réseau GDG
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted">
                Leur expérience de la communauté et de l&apos;industrie aide le
                club à structurer ses activités et à prendre de l&apos;ampleur.
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {mentors.map((mentor) => (
                <div
                  key={mentor.name}
                  className="flex items-center gap-3 rounded-xl border border-line bg-canvas/60 p-4"
                >
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold"
                    style={{
                      backgroundColor: `${mentor.color}1F`,
                      color: mentor.color,
                    }}
                    aria-hidden="true"
                  >
                    {mentor.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold tracking-tight">
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
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-5 text-warning" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Envie de proposer quelque chose ?
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Un sujet de conférence, un atelier, un problème pour l&apos;Arène
              ou une idée pour améliorer le club : viens en parler à
              l&apos;équipe lors d&apos;une activité. Les propositions des
              membres nourrissent directement la programmation.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/events"
                className={buttonStyles({ variant: "primary", size: "md" })}
              >
                Voir les prochains événements
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog"
                className={buttonStyles({ variant: "outline", size: "md" })}
              >
                Lire les annonces
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-brand/20 bg-brand-soft/60 p-6">
            <Users className="size-5 text-brand" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg font-semibold tracking-tight">
              Participer
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Les ateliers du club sont gratuits et ouverts à la communauté de
              l&apos;ÉTS. Viens à une activité pour rencontrer l&apos;équipe.
            </p>
            <Link
              href="/events"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Voir le calendrier
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
