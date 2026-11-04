import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Mic,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { nextPanel, posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panels",
  description:
    "Les panels et conférences du GDG ÉTS : intervenants de l'industrie, retours d'expérience et récapitulatifs.",
};

const pastPanels = [
  {
    title: "Cybersécurité : ce que les entreprises ne vous disent pas",
    date: "12 octobre 2026",
    speakers: "Sophie Tremblay · Marc-Antoine Côté · Yasmine Belkacem",
    href: "/blog/retour-panel-cybersecurite",
  },
  {
    title: "Carrières en intelligence artificielle",
    date: "24 mars 2026",
    speakers: "5 intervenant·es de Mila, Google et Desjardins",
    href: "/blog",
  },
  {
    title: "Construire un produit en 48 heures",
    date: "18 novembre 2025",
    speakers: "Retour sur le hackathon inter-programmes",
    href: "/blog",
  },
];

export default function PanelsPage() {
  const panelPosts = posts.filter((post) => post.category === "PANEL");

  return (
    <>
      <section className="container-page pb-12 pt-10 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Panels &amp; conférences</p>
            <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Débats, retours de terrain, idées neuves
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Chaque session réunit des professionnel·les de l&apos;industrie
              autour d&apos;un sujet qui compte pour la communauté. Les
              récapitulatifs sont publiés ici après chaque événement.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <p className="eyebrow text-muted">Appel à intervenant·es</p>
            <p className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">
              Tu travailles sur un sujet qui compte ?
            </p>
            <p className="mt-1 text-sm leading-6 text-muted">
              On cherche des voix de l&apos;industrie pour la prochaine saison
              de panels.
            </p>
            <Link
              href="/about"
              className={buttonStyles({
                variant: "outline",
                size: "sm",
                className: "mt-4 w-full",
              })}
            >
              Proposer un sujet
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div
          id="inscription"
          className="group scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-surface"
        >
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
              <Image
                src={nextPanel.cover}
                alt={nextPanel.coverAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <Badge className="absolute left-4 top-4 border-white/20 bg-white/95 text-ink">
                <span className="size-1.5 rounded-full bg-danger" aria-hidden="true" />
                Prochain panel
              </Badge>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="eyebrow text-brand">18 novembre 2026 · 18h00</p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {nextPanel.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  18 novembre 2026
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  ÉTS, Pavillon A
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  18h00 – 20h00
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{nextPanel.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                  Trois intervenant·es de l&apos;industrie
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                  Période de questions et réseautage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                  Gratuit pour la communauté ÉTS
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={nextPanel.registerHref}
                  className={buttonStyles({ variant: "primary", size: "md" })}
                >
                  S&apos;inscrire
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/blog/retour-panel-cybersecurite"
                  className={buttonStyles({ variant: "outline", size: "md" })}
                >
                  Lire un récapitulatif
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {panelPosts.length > 0 && (
        <section className="container-page pb-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-success">À revoir</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Récapitulatifs récents
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Tous les articles
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {panelPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
            <article className="flex flex-col justify-center rounded-2xl border border-dashed border-line bg-canvas/50 p-6">
              <Sparkles className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                Un sujet en tête ?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Propose un thème ou un·e intervenant·e pour la prochaine saison
                de panels.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
              >
                Proposer un sujet
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>
      )}

      <section className="container-page pb-20">
        <div className="rounded-2xl border border-line bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <Mic className="size-4 text-muted" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Archives des panels
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              2025 — 2026
            </span>
          </div>
          <div className="divide-y divide-line">
            {pastPanels.map((panel) => (
              <Link
                key={panel.title}
                href={panel.href}
                className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-canvas/70 sm:px-6"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {panel.date}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-tight group-hover:text-brand sm:text-lg">
                    {panel.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{panel.speakers}</p>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
