import Link from "next/link";
import { ArenaHeader } from "@/components/arena-header";

export default function ArenaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArenaHeader />
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
