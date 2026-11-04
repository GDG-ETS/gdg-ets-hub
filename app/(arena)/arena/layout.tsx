import Link from "next/link";
import { Info } from "lucide-react";
import { ArenaHeader } from "@/components/arena-header";

export default function ArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArenaHeader />
      <div className="border-b border-warning/25 bg-warning-soft/70">
        <div className="container-page flex flex-col gap-1 py-2 text-[11px] sm:flex-row sm:items-center sm:gap-3">
          <span className="inline-flex w-fit items-center gap-1.5 font-mono font-semibold uppercase tracking-[0.14em] text-warning">
            <Info className="size-3.5" aria-hidden="true" />
            Démo
          </span>
          <p className="text-ink/70">
            Concours, soumissions, verdicts et classement sont simulés. Aucune
            donnée n&apos;est enregistrée.
          </p>
        </div>
      </div>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-line bg-surface">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>GDG ÉTS · Arène de programmation</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/arena/contest" className="transition-colors hover:text-brand">
              Règles du concours
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-brand">
              Confidentialité
            </Link>
            <Link href="/" className="transition-colors hover:text-brand">
              Retour au hub
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
