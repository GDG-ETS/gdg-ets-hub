"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/arena", label: "Tableau de bord", exact: true },
  { href: "/arena/contest", label: "Concours" },
  { href: "/arena/leaderboard", label: "Classement" },
];

function isLinkActive(href: string, exact: boolean | undefined, pathname: string) {
  if (exact) return pathname === href;
  if (href === "/arena/contest") {
    return pathname.startsWith("/arena/contest") || pathname.startsWith("/arena/problems");
  }
  return pathname.startsWith(href);
}

export function ArenaHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-arena text-white">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo href="/arena" dark compact />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation de l'arène">
            {links.map((link) => {
              const active = isLinkActive(link.href, link.exact, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "font-medium text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Hub
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </Link>
          <div className="hidden items-center gap-2.5 rounded-full border border-white/10 py-1 pl-1 pr-3 sm:flex">
            <span className="flex size-7 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
              SB
            </span>
            <span className="text-sm text-white/90">Sami B.</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="arena-mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="arena-mobile-nav" className="border-t border-white/10 bg-arena md:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Navigation mobile de l'arène">
            {links.map((link) => {
              const active = isLinkActive(link.href, link.exact, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm",
                    active ? "bg-white/10 font-medium text-white" : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-white/70"
            >
              Retour au hub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
