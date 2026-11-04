"use client";

import { useEffect, useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import type { ProblemCell, StandingRow } from "@/lib/data";

function cellText(cell: ProblemCell) {
  if (cell.kind === "solved") return `AC ${cell.time}`;
  if (cell.kind === "attempted") return `WA x${cell.attempts}`;
  if (cell.kind === "frozen") return "gelé";
  return "—";
}

export function LeaderboardTools({ rows }: { rows: StandingRow[] }) {
  const [lastUpdated, setLastUpdated] = useState(2);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLastUpdated((value) => value + 1);
    }, 1_000);
    return () => window.clearInterval(id);
  }, []);

  function exportCsv() {
    const header = [
      "Rang",
      "Participant",
      "École",
      "Résolus",
      "Pénalité",
      "A",
      "B",
      "C",
      "D",
      "E",
    ];
    const lines = rows.map((row) => [
      row.rank,
      row.handle,
      row.school,
      row.solved,
      row.penalty,
      cellText(row.cells.A),
      cellText(row.cells.B),
      cellText(row.cells.C),
      cellText(row.cells.D),
      cellText(row.cells.E),
    ]);
    const csv = [header, ...lines]
      .map((line) =>
        line
          .map((value) => {
            const text = String(value);
            return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
          })
          .join(",")
      )
      .join("\n");

    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "classement-hackathon-automne-2026.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
        <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
        Mis à jour il y a {lastUpdated} s
      </span>
      <button
        type="button"
        onClick={() => setLastUpdated(0)}
        className="inline-flex size-8 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-ink"
        aria-label="Actualiser le classement"
        title="Actualiser"
      >
        <RefreshCw className="size-3.5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={exportCsv}
        className={buttonStyles({ variant: "outline", size: "sm" })}
      >
        <Download className="size-3.5" aria-hidden="true" />
        Exporter CSV
      </button>
      <div className="inline-flex rounded-lg border border-line bg-surface p-0.5 text-[11px] font-medium">
        <span className="rounded-md bg-ink px-2.5 py-1 text-white">Public</span>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-md px-2.5 py-1 text-muted/60"
          title="Vue réservée au personnel du concours"
        >
          Jury
        </button>
      </div>
    </div>
  );
}
