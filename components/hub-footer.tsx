import Link from "next/link";
import { Logo } from "@/components/logo";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/events", label: "Événements" },
  { href: "/blog", label: "Articles" },
  { href: "/arena", label: "Arène de programmation" },
  { href: "/privacy", label: "Confidentialité" },
];

export function HubFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-canvas">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-muted">
              Le club de développement étudiant de l&apos;École de technologie
              supérieure. Panels, ateliers, articles et compétitions de
              programmation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.com"
              className="py-1 text-muted transition-colors hover:text-brand"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            <a
              href="https://github.com"
              className="py-1 text-muted transition-colors hover:text-brand"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GDG ÉTS — Club étudiant de l&apos;École de technologie supérieure.</p>
          <p>
            Fait avec <span className="text-danger">❤</span> à Montréal.
          </p>
        </div>
      </div>
    </footer>
  );
}
