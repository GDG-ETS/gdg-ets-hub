import { Check, Lock, Minus, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ProblemCell, StandingRow } from "@/lib/data";

const problemLabels = ["A", "B", "C", "D", "E"] as const;

function Cell({ cell }: { cell: ProblemCell }) {
  if (cell.kind === "solved") {
    return (
      <span className="inline-flex items-center gap-1 text-success">
        <Check className="size-3.5" aria-hidden="true" />
        <span className="font-mono text-xs tabular">{cell.time}</span>
        <span className="sr-only">résolu à {cell.time}</span>
      </span>
    );
  }

  if (cell.kind === "attempted") {
    return (
      <span className="inline-flex items-center gap-1 text-danger">
        <X className="size-3.5" aria-hidden="true" />
        <span className="font-mono text-xs tabular">{cell.attempts}</span>
        <span className="sr-only">
          {cell.attempts} tentative{cell.attempts > 1 ? "s" : ""} non résolue
          {cell.attempts > 1 ? "s" : ""}
        </span>
      </span>
    );
  }

  if (cell.kind === "frozen") {
    return (
      <span className="inline-flex items-center gap-1 text-muted/70">
        <Lock className="size-3.5" aria-hidden="true" />
        <span className="sr-only">gelé</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center text-muted/30">
      <Minus className="size-3.5" aria-hidden="true" />
      <span className="sr-only">aucune soumission</span>
    </span>
  );
}

export function Scoreboard({
  rows,
  className,
}: {
  rows: StandingRow[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border border-line bg-surface [contain:paint]",
        className
      )}
    >
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <caption className="sr-only">
          Classement ICPC du Hackathon d&apos;automne 2026
        </caption>
        <thead>
          <tr className="bg-arena text-white">
            <th
              scope="col"
              className="px-3 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 sm:px-4"
            >
              Rang
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 sm:px-4"
            >
              Participant
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/60"
            >
              Résolus
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/60"
            >
              Pénalité
            </th>
            {problemLabels.map((label) => (
              <th
                key={label}
                scope="col"
                className="px-3 py-3 text-center font-mono text-[11px] font-semibold text-white/80"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const podium = row.rank <= 3;
            return (
              <tr
                key={row.handle}
                className={cn(
                  "border-t border-line/80 transition-colors hover:bg-canvas/70",
                  row.isYou && "bg-brand-soft/50 hover:bg-brand-soft/70"
                )}
              >
                <td
                  className={cn(
                    "px-3 py-3 sm:px-4",
                    row.isYou && "border-l-2 border-brand"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tabular",
                      podium ? "font-semibold text-ink" : "text-muted"
                    )}
                  >
                    {row.rank.toString().padStart(2, "0")}
                  </span>
                </td>
                <td className="px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-ink">{row.handle}</span>
                    {row.isYou && (
                      <span className="rounded-full border border-brand/20 bg-white px-1.5 py-0.5 text-[10px] font-medium text-brand">
                        vous
                      </span>
                    )}
                    <span className="hidden text-xs text-muted sm:inline">
                      {row.school}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3 text-center font-mono text-xs tabular text-ink">
                  {row.solved}
                </td>
                <td className="px-3 py-3 text-center font-mono text-xs tabular text-muted">
                  {row.penalty}
                </td>
                {problemLabels.map((label) => (
                  <td key={label} className="px-3 py-3 text-center">
                    <Cell cell={row.cells[label]} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
