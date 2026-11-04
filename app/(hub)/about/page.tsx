import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "GDG ÉTS est le club de développement étudiant de l'École de technologie supérieure, à Montréal.",
};

const stats = [
  { value: "120+", label: "membres actifs" },
  { value: "18", label: "activités par année" },
  { value: "3", label: "concours ICPC" },
  { value: "100 %", label: "gratuit pour la communauté" },
];

const values = [
  {
    icon: Code2,
    title: "Apprendre en faisant",
    text: "On préfère un projet imparfait livré cette session à une présentation parfaite qui ne verra jamais le jour. Ateliers, concours et contributions ouvertes sont au cœur du club.",
  },
  {
    icon: HeartHandshake,
    title: "Ouvrir la tech à tout le monde",
    text: "Peu importe ton programme ou ton niveau, il y a une place pour toi. Nos activités sont pensées pour les débutant·es autant que pour les personnes qui préparent l'ICPC.",
  },
  {
    icon: Rocket,
    title: "Relier l'école à l'industrie",
    text: "Les panels et les conférences amènent des professionnel·les sur le campus pour parler de ce qui se passe réellement en entreprise, sans filtre marketing.",
  },
];

const team = [
  {
    name: "Sami Bouaziz",
    role: "Co-lead & arène",
    initials: "SB",
    color: "#1A73E8",
  },
  {
    name: "Emma Gauthier",
    role: "Contenu & éditorial",
    initials: "EG",
    color: "#34A853",
  },
  {
    name: "Thomas Rivest",
    role: "Juge & infrastructure",
    initials: "TR",
    color: "#FBBC04",
  },
  {
    name: "Léa Nguyen",
    role: "Partenariats & événements",
    initials: "LN",
    color: "#EA4335",
  },
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
              GDG ÉTS est le club de développement étudiant de l&apos;École de
              technologie supérieure, à Montréal. On organise des panels, des
              ateliers et des compétitions de programmation — et on publie ce
              qu&apos;on apprend.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="eyebrow text-muted">En bref</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Un club étudiant indépendant, soutenu par l&apos;ÉTS et animé par
              une équipe bénévole. Toutes nos activités sont gratuites.
            </p>
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({
                variant: "dark",
                size: "sm",
                className: "mt-4 w-full",
              })}
            >
              Rejoindre le Discord
              <ArrowRight className="size-4" aria-hidden="true" />
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
              Une équipe bénévole, épaulée par des membres actifs et des
              intervenant·es invité·es.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              Un sujet de panel, un atelier, un problème de concours ou une idée
              pour améliorer l&apos;Arène : l&apos;équipe est joignable sur le
              Discord du club. Les propositions des membres sont lues chaque
              semaine.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: "primary", size: "md" })}
              >
                Écrire sur le Discord
              </a>
              <a
                href="mailto:gdg-ets@etsmtl.ca"
                className={buttonStyles({ variant: "outline", size: "md" })}
              >
                Envoyer un courriel
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-brand/20 bg-brand-soft/60 p-6">
            <Users className="size-5 text-brand" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg font-semibold tracking-tight">
              Devenir membre
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              L&apos;adhésion est gratuite et ouverte à toute la communauté de
              l&apos;ÉTS. Viens à une activité pour commencer.
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
