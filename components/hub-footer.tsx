import Link from "next/link";
import { Logo } from "@/components/logo";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/events", label: "Événements" },
  { href: "/panels", label: "Conférences" },
  { href: "/blog", label: "Articles" },
  { href: "/arena", label: "Arène · démo" },
  { href: "/privacy", label: "Confidentialité" },
];

export function HubFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-white">
      <div className="container-hub py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-6 text-muted">
              Le chapitre Google Developer Groups on Campus de l&apos;École de
              technologie supérieure. Ateliers, conférences, articles et
              programmation compétitive.
            </p>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm sm:grid-cols-3"
            aria-label="Liens de pied de page"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 GDG ÉTS — Club étudiant de l&apos;École de technologie
            supérieure.
          </p>
          <p>Montréal, Québec</p>
        </div>
      </div>
    </footer>
  );
}
