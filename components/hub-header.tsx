"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/panels", label: "Conférences" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Événements" },
  { href: "/about", label: "À propos" },
];

export function HubHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:text-brand",
                isActive(link.href)
                  ? "font-medium text-ink"
                  : "text-muted"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="mx-auto mt-1 block h-0.5 w-4 rounded-full bg-brand" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-md border border-line p-0.5 text-[11px] font-medium sm:flex">
            <span className="rounded bg-ink px-1.5 py-0.5 text-white">FR</span>
            <span className="px-1.5 py-0.5 text-muted">EN</span>
          </div>
          <Link
            href="/arena"
            className={buttonStyles({ variant: "dark", size: "sm", className: "max-sm:hidden" })}
          >
            Arène
          </Link>
          <span className="hidden cursor-default items-center rounded-md px-3 py-2 text-sm text-muted/70 md:inline-flex">
            Connexion · bientôt
          </span>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-canvas lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Navigation mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm",
                  isActive(link.href)
                    ? "bg-surface font-medium text-ink"
                    : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-line pt-3">
              <Link
                href="/arena"
                onClick={() => setOpen(false)}
                className={buttonStyles({ variant: "dark", size: "sm", className: "flex-1" })}
              >
                Entrer dans l&apos;Arène
              </Link>
              <span className="flex flex-1 cursor-default items-center justify-center rounded-md border border-line bg-surface px-3 py-2 text-sm text-muted/70">
                Connexion · bientôt
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
