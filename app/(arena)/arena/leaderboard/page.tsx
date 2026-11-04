import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Lock, Minus, Timer, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Countdown } from "@/components/countdown";
import { LeaderboardTools } from "@/components/leaderboard-tools";
import { Scoreboard } from "@/components/scoreboard";
import { contest, standings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Classement — Hackathon d'automne 2026",
  description:
    "Classement ICPC en direct du Hackathon d'automne 2026 du GDG ÉTS.",
};

export default function LeaderboardPage() {
  return (
    <div className="container-page py-8">
      <Link
        href="/arena/contest"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Retour au concours
      </Link>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Classement — {contest.title}
            </h1>
            <Badge tone="success">
              <span
                className="size-1.5 animate-pulse rounded-full bg-success"
                aria-hidden="true"
              />
              En cours
            </Badge>
          </div>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Timer className="size-3.5" aria-hidden="true" />
              Temps restant
              <Countdown
                seconds={contest.remainingSeconds}
                className="text-ink"
              />
            </span>
            <span className="text-muted/40" aria-hidden="true">
              ·
            </span>
            <span>Classement ICPC en direct</span>
          </p>
        </div>
        <LeaderboardTools rows={standings} />
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-warning/25 bg-warning-soft px-4 py-3 text-warning">
        <Lock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <div className="flex flex-1 flex-col gap-0.5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            Classement gelé pour les 60 dernières minutes
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider">
            Dégel dans <Countdown seconds={contest.freezeRemainingSeconds} variant="short" />
          </p>
        </div>
      </div>

      <p className="mt-5 text-[11px] text-muted sm:hidden">
        Fais défiler le tableau horizontalement pour voir les colonnes A à E.
      </p>

      <div className="mt-2 sm:mt-5">
        <Scoreboard rows={standings} />
      </div>

      <div className="mt-4 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-1.5">
            <Check className="size-3.5 text-success" aria-hidden="true" />
            Résolu
          </span>
          <span className="inline-flex items-center gap-1.5">
            <X className="size-3.5 text-danger" aria-hidden="true" />
            Tentative non résolue
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="size-3.5 text-muted/70" aria-hidden="true" />
            Gelé
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Minus className="size-3.5 text-muted/40" aria-hidden="true" />
            Aucune soumission
          </span>
        </div>
        <p className="font-mono text-[10px]">
          ICPC : résolus, puis pénalité, puis dernier AC.
        </p>
      </div>

      <p className="mt-6 rounded-lg border border-line bg-surface px-4 py-3 text-xs leading-5 text-muted">
        Le classement public est mis à jour toutes les 5 secondes. Les
        soumissions effectuées pendant la dernière heure restent visibles des
        équipes concernées, mais n&apos;apparaissent ici qu&apos;après le dégel.
      </p>
    </div>
  );
}
