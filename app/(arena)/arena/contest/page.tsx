import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  MessageSquare,
  ShieldCheck,
  Trophy,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { contest, problems, speakers, standings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hackathon d'automne 2026",
  description:
    "Aperçu, problèmes, règles et classement du Hackathon d'automne 2026 du GDG ÉTS.",
};

const tabs = [
  { href: "#apercu", label: "Aperçu" },
  { href: "#problemes", label: "Problèmes" },
  { href: "#classement", label: "Classement" },
  { href: "#clarifications", label: "Clarifications" },
];

const solvedTimes: Record<string, string> = {
  A: "00:18",
  B: "00:47",
};

function difficultyDots(difficulty: string) {
  const filled = difficulty === "Facile" ? 1 : difficulty === "Moyen" ? 3 : 5;
  return (
    <span className="flex items-center gap-1" aria-label={`Difficulté : ${difficulty}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`size-1.5 rounded-full ${
            index < filled ? "bg-ink/70" : "bg-line"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function ContestPage() {
  return (
    <div className="container-page py-8">
      <div id="apercu" className="scroll-mt-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="eyebrow text-brand">Concours en cours</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {contest.title}
              </h1>
              <Badge tone="success" className="bg-success-soft">
                <span
                  className="size-1.5 animate-pulse rounded-full bg-success"
                  aria-hidden="true"
                />
                En cours
              </Badge>
            </div>
            <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-2.5">
              <Clock3 className="size-4 text-muted" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                Temps restant
              </span>
              <Countdown
                seconds={contest.remainingSeconds}
                className="text-2xl font-semibold tracking-tight text-ink"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:pt-8">
            <Link
              href="#regles"
              className={buttonStyles({ variant: "outline", size: "md" })}
            >
              Règles
            </Link>
            <Link
              href="#problemes"
              className={buttonStyles({ variant: "primary", size: "md" })}
            >
              Voir les problèmes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <nav
          className="mt-7 flex gap-1 overflow-x-auto border-b border-line"
          aria-label="Sections du concours"
        >
          {tabs.map((tab, index) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`shrink-0 border-b-2 px-2 py-2.5 text-[13px] transition-colors sm:px-4 sm:text-sm ${
                index === 0
                  ? "border-brand font-medium text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <section
            id="regles"
            className="scroll-mt-24 overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="flex items-center gap-2 border-b border-line px-5 py-4">
              <ShieldCheck className="size-4 text-brand" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Règles du concours
              </h2>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
              {[
                { label: "Format", value: "ICPC" },
                { label: "Problèmes", value: `${problems.length}` },
                { label: "Durée", value: "3 heures" },
                { label: "Pénalité", value: "20 min" },
                { label: "Gel du classement", value: "60 min" },
                { label: "Langages", value: "C++17 · Python 3 · Java 17" },
              ].map((item) => (
                <div key={item.label} className="bg-surface px-4 py-3.5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="problemes"
            className="scroll-mt-24 overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Problèmes
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {problems.length} problèmes · 500 points
              </span>
            </div>
            <div className="divide-y divide-line">
              {problems.map((problem) => {
                const solved = problem.solved;
                const attempts = problem.attempts ?? 0;
                return (
                  <Link
                    key={problem.label}
                    href={`/arena/problems/${problem.label}`}
                    className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-canvas/70 sm:px-5"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-canvas font-mono text-xs font-semibold text-ink">
                      {problem.label}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink transition-colors group-hover:text-brand">
                        {problem.title}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        {difficultyDots(problem.difficulty)}
                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                          {problem.tagline}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      {solved && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                          <CheckCircle2 className="size-4" aria-hidden="true" />
                          <span className="font-mono tabular">
                            {solvedTimes[problem.label] ?? "00:00"}
                          </span>
                        </span>
                      )}
                      {!solved && attempts > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-danger">
                          <X className="size-4" aria-hidden="true" />
                          <span className="font-mono tabular">{attempts}</span>
                        </span>
                      )}
                      {!solved && attempts === 0 && (
                        <span className="hidden text-[11px] text-muted sm:inline">
                          Non tenté
                        </span>
                      )}
                      <ChevronRight
                        className="size-4 text-muted transition-colors group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex items-center gap-2 border-b border-line px-5 py-4">
              <MessageSquare className="size-4 text-warning" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Annonces
              </h2>
            </div>
            <div className="divide-y divide-line">
              <div className="px-5 py-4">
                <p className="text-sm leading-6 text-ink/85">
                  Les tests de D ont été mis à jour. Un rejudge est en cours.
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted">12:21</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm leading-6 text-ink/85">
                  Bienvenue ! Les clarifications sont ouvertes pour toute la
                  durée du concours.
                </p>
                <p className="mt-1 font-mono text-[10px] text-muted">00:00</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <section
            id="classement"
            className="scroll-mt-24 overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3.5">
              <div className="flex items-center gap-2">
                <Trophy className="size-4 text-warning" aria-hidden="true" />
                <h2 className="font-display text-base font-semibold tracking-tight">
                  Classement
                </h2>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted">
                <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                gelé
              </span>
            </div>
            <div className="divide-y divide-line">
              {standings.slice(0, 5).map((row) => (
                <div
                  key={row.handle}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm ${
                    row.isYou ? "bg-brand-soft/50" : ""
                  }`}
                >
                  <span className="w-5 font-mono text-[11px] tabular text-muted">
                    {row.rank.toString().padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-medium text-ink">
                    {row.handle}
                    {row.isYou && (
                      <span className="ml-1.5 text-[10px] font-normal text-brand">
                        vous
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-[11px] tabular text-ink">
                    {row.solved}
                  </span>
                  <span className="w-10 text-right font-mono text-[11px] tabular text-muted">
                    {row.penalty}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-line px-4 py-3">
              <Link
                href="/arena/leaderboard"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
              >
                Voir le classement complet
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section
            id="clarifications"
            className="scroll-mt-24 rounded-xl border border-line bg-surface p-4"
          >
            <div className="flex items-center gap-2">
              <CircleHelp className="size-4 text-brand" aria-hidden="true" />
              <h2 className="font-display text-base font-semibold tracking-tight">
                Clarifications
              </h2>
            </div>
            <div className="mt-3 rounded-lg bg-canvas p-3">
              <p className="text-xs font-medium text-ink">
                Q : La somme peut-elle dépasser 32 bits ?
              </p>
              <p className="mt-1.5 text-xs leading-5 text-muted">
                R : Oui. Utilisez <code className="font-mono">long long</code> en
                C++ et <code className="font-mono">int64</code> en Java.
              </p>
            </div>
            <button
              type="button"
              className={buttonStyles({
                variant: "outline",
                size: "sm",
                className: "mt-3 w-full",
              })}
              disabled
              title="Bientôt disponible dans cette maquette"
            >
              Poser une question
            </button>
          </section>

          <section className="rounded-xl border border-line bg-surface p-4">
            <h2 className="font-display text-base font-semibold tracking-tight">
              Jury
            </h2>
            <div className="mt-3 space-y-3">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-2.5">
                  <span
                    className="flex size-8 items-center justify-center rounded-full text-[10px] font-semibold"
                    style={{
                      backgroundColor: `${speaker.color}1F`,
                      color: speaker.color,
                    }}
                    aria-hidden="true"
                  >
                    {speaker.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-ink">
                      {speaker.name}
                    </p>
                    <p className="truncate text-[10px] text-muted">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-1.5 border-t border-line pt-3 text-[11px] text-muted">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              3 membres en ligne
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
