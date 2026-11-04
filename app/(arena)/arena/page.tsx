import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { VerdictBadge } from "@/components/verdict-badge";
import { contest, submissions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Ton espace personnel dans l'arène du GDG ÉTS.",
};

const stats = [
  { label: "Concours disputés", value: "3", icon: Trophy, tone: "text-brand" },
  { label: "Problèmes résolus", value: "14", icon: CheckCircle2, tone: "text-success" },
  { label: "Rang saison", value: "27e", icon: TrendingUp, tone: "text-warning" },
];

export default function ArenaDashboardPage() {
  return (
    <div className="container-page py-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            Bonjour, Sami
          </h1>
          <p className="mt-1 text-sm text-muted">
            Le Hackathon d&apos;automne est en cours. Bonne chance !
          </p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          Mardi 3 novembre 2026
        </p>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <section className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
              <p className="eyebrow text-brand">Concours en cours</p>
              <Badge tone="success">
                <CheckCircle2 className="size-3" aria-hidden="true" />
                Inscrit
              </Badge>
            </div>
            <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {contest.title}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {contest.format} · {contest.startLabel}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/arena/contest"
                    className={buttonStyles({ variant: "primary", size: "md" })}
                  >
                    Ouvrir le concours
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/arena/contest#regles"
                    className={buttonStyles({ variant: "outline", size: "md" })}
                  >
                    Voir les règles
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-line bg-canvas px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Temps restant
                </p>
                <Countdown
                  seconds={contest.remainingSeconds}
                  className="mt-1 block text-[32px] font-semibold tracking-tight text-ink"
                />
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                  <span
                    className="size-1.5 animate-pulse rounded-full bg-success"
                    aria-hidden="true"
                  />
                  Juge opérationnel
                </p>
              </div>
            </div>
          </section>

          <section aria-label="Statistiques personnelles">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line bg-surface p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                        {stat.label}
                      </p>
                      <Icon className={`size-4 ${stat.tone}`} aria-hidden="true" />
                    </div>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Mes soumissions récentes
              </h2>
              <Link
                href="/arena/contest#problemes"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
              >
                Voir tout
                <ChevronRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-canvas/60 text-[10px] uppercase tracking-[0.12em] text-muted">
                    <th scope="col" className="px-5 py-2.5 font-medium">
                      Problème
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-medium">
                      Verdict
                    </th>
                    <th scope="col" className="hidden px-4 py-2.5 font-medium sm:table-cell">
                      Langage
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-medium">
                      Temps
                    </th>
                    <th scope="col" className="hidden px-4 py-2.5 font-medium sm:table-cell">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {submissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="transition-colors hover:bg-canvas/60"
                    >
                      <td className="px-5 py-3">
                        <span className="font-medium text-ink">
                          {submission.problem}
                        </span>
                        <span className="ml-2 hidden font-mono text-[10px] text-muted sm:inline">
                          #{submission.id.replace("sub_", "")}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <VerdictBadge verdict={submission.verdict} />
                      </td>
                      <td className="hidden whitespace-nowrap px-4 py-3 font-mono text-xs text-muted sm:table-cell">
                        {submission.language}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs tabular text-muted">
                        {submission.time}
                      </td>
                      <td className="hidden whitespace-nowrap px-4 py-3 text-xs text-muted sm:table-cell">
                        {submission.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="min-w-0 space-y-4">
          <section className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-center gap-2">
              <CircleUserRound className="size-4 text-brand" aria-hidden="true" />
              <h2 className="font-display text-base font-semibold tracking-tight">
                Profil complété à 80 %
              </h2>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-canvas">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: "80%" }}
              />
            </div>
            <p className="mt-3 text-xs leading-5 text-muted">
              Ajoute ton lien GitHub pour apparaître dans la liste des membres
              actifs.
            </p>
            <Link
              href="/about"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
            >
              Compléter mon profil
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </section>

          <section className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-center gap-2">
              <Bell className="size-4 text-warning" aria-hidden="true" />
              <h2 className="font-display text-base font-semibold tracking-tight">
                Annonces
              </h2>
            </div>
            <div className="mt-3 space-y-3">
              <div className="border-b border-line pb-3">
                <p className="text-sm leading-6 text-ink/85">
                  Les tests de D ont été mis à jour. Un rejudge est en cours.
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted">12:21</p>
              </div>
              <div>
                <p className="text-sm leading-6 text-ink/85">
                  Bienvenue ! Les clarifications sont ouvertes pour toute la
                  durée du concours.
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted">00:00</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-line bg-surface p-5">
            <p className="eyebrow text-muted">Prochain entraînement</p>
            <p className="mt-2 font-display text-base font-semibold tracking-tight">
              Arène ouverte
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              25 novembre · 18h00
            </p>
            <Link
              href="/events"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
            >
              Voir le calendrier
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
