import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Clock3,
  FileText,
  Images,
  KeyRound,
  Link2,
  MapPin,
  Play,
  ShieldCheck,
  Ticket,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { ShareLinks } from "@/components/share-links";
import { getPost, posts } from "@/lib/data";
import { articleBodies, type ArticleBlock } from "@/lib/post-content";

export const instant = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const takeawayIcons = {
  shield: ShieldCheck,
  key: KeyRound,
  zap: Zap,
  users: Users,
} as const;

const categoryTone: Record<string, string> = {
  ATELIER: "text-success",
  CONFÉRENCE: "text-brand",
  RETOUR: "text-warning",
  ANNONCE: "text-danger",
};

const categoryBadge: Record<string, string> = {
  ATELIER: "Atelier pratique",
  CONFÉRENCE: "Conférence",
  RETOUR: "Retour d'expérience",
  ANNONCE: "Annonce officielle",
};

const categoryDot: Record<string, string> = {
  ATELIER: "bg-success",
  CONFÉRENCE: "bg-brand",
  RETOUR: "bg-warning",
  ANNONCE: "bg-danger",
};

const resourceIcons = {
  PDF: FileText,
  Galerie: Images,
  Billets: Ticket,
  Calendrier: CalendarDays,
  Article: FileText,
  Lien: Link2,
} as const;

type ResourceItem = Extract<ArticleBlock, { type: "resources" }>["items"][number];

function ResourceRow({ item }: { item: ResourceItem }) {
  const Icon = resourceIcons[item.kind as keyof typeof resourceIcons] ?? FileText;
  const external = item.href?.startsWith("http");
  const content = (
    <>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-canvas text-muted">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="flex-1 font-medium text-ink">{item.label}</span>
      {item.href ? (
        <ArrowUpRight className="size-4 text-muted" aria-hidden="true" />
      ) : (
        <span className="rounded border border-line bg-canvas px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
          Bientôt
        </span>
      )}
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex items-center gap-3 px-4 py-3.5 text-sm transition-colors hover:bg-canvas/70"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3 px-4 py-3.5 text-sm">{content}</div>;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[16px] leading-8 text-ink/85">{block.text}</p>;

    case "heading":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 border-l-[3px] border-brand pl-3 pt-2 font-display text-2xl font-semibold tracking-tight text-ink"
        >
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul className="space-y-2.5 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-7 text-ink/85">
              <span
                className="mt-[11px] size-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="rounded-xl border border-line border-l-[3px] border-l-brand bg-surface p-5 sm:p-6">
          <p className="font-display text-lg leading-8 tracking-tight text-ink sm:text-xl">
            {block.text}
          </p>
          <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            — {block.cite}
          </footer>
        </blockquote>
      );

    case "takeaways":
      return (
        <div className="grid gap-3">
          {block.items.map((item) => {
            const Icon = takeawayIcons[item.icon];
            return (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-line bg-surface p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      );

    case "speakers":
      return (
        <div className="grid gap-3 sm:grid-cols-3">
          {block.items.map((speaker) => (
            <div
              key={speaker.name}
              className="rounded-xl border border-line bg-surface p-4"
            >
              <span
                className="flex size-11 items-center justify-center rounded-full font-display text-sm font-semibold"
                style={{
                  backgroundColor: `${speaker.color}1F`,
                  color: speaker.color,
                }}
                aria-hidden="true"
              >
                {speaker.initials}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug tracking-tight">
                {speaker.name}
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted">{speaker.role}</p>
              {speaker.company && (
                <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-muted">
                  <Building2 className="size-3" aria-hidden="true" />
                  {speaker.company}
                </p>
              )}
              <p
                className="mt-3 inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium"
                style={{
                  backgroundColor: `${speaker.color}14`,
                  color: speaker.color,
                }}
              >
                {speaker.tag}
              </p>
            </div>
          ))}
        </div>
      );

    case "video":
      return (
        <figure>
          <div
            className="relative aspect-video overflow-hidden rounded-xl bg-arena"
            role="img"
            aria-label="Aperçu de l'enregistrement vidéo du panel, disponible prochainement"
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(26,115,232,0.28),transparent_55%)]"
              aria-hidden="true"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur">
              <span className="size-1.5 rounded-full bg-danger" aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/80">
                Captation officielle GDG ÉTS
              </span>
            </div>
            <span className="absolute right-4 top-4 font-mono text-[10px] text-white/50">
              1080p · 49 min
            </span>
            <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg">
              <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
            </span>
            <div className="absolute inset-x-4 bottom-4">
              <div className="h-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-1/3 rounded-full bg-brand" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-white/60">
                <span>28:14 / 49:06</span>
                <span>FR · sous-titres à venir</span>
              </div>
            </div>
          </div>
          <figcaption className="mt-2 text-xs text-muted">
            Enregistrement complet de la conférence. La vidéo sera publiée sur la
            chaîne YouTube du club.
          </figcaption>
        </figure>
      );

    case "resources":
      return (
        <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {block.items.map((item) => (
            <ResourceRow key={item.label} item={item} />
          ))}
        </div>
      );

    case "code":
      return (
        <div className="overflow-hidden rounded-xl border border-line bg-arena">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              {block.language}
            </span>
            <span className="font-mono text-[10px] text-white/30">exemple</span>
          </div>
          <pre className="overflow-x-auto p-4 text-[12px] leading-6 text-white/85">
            <code>{block.code}</code>
          </pre>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  const body = articleBodies[slug];

  if (!post || !body) notFound();

  const toc = body.blocks.filter(
    (block): block is Extract<ArticleBlock, { type: "heading" }> =>
      block.type === "heading"
  );

  return (
    <div className="container-page pb-20 pt-8">
      <nav aria-label="Fil d'Ariane" className="text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-brand">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="transition-colors hover:text-brand">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className={categoryTone[post.category]}>{post.categoryLabel}</li>
        </ol>
      </nav>

      <header className="mt-7 max-w-4xl">
        <Badge tone="neutral" className="bg-surface">
          <span
            className={`size-1.5 rounded-full ${categoryDot[post.category]}`}
            aria-hidden="true"
          />
          {categoryBadge[post.category]}
        </Badge>
        <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <time dateTime={post.dateISO} className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            {post.date}
          </time>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden="true" />
            {post.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-4" aria-hidden="true" />
            {post.readingMinutes} min de lecture
          </span>
        </div>
      </header>

      <figure className="mt-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-canvas sm:aspect-[21/9]">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-xs text-muted">
          Image d&apos;illustration — {post.title}.
        </figcaption>
      </figure>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article>
          <div id="introduction" className="max-w-[72ch] space-y-5 scroll-mt-24">
            {body.lead.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-lg leading-8 text-ink/90"
                    : "text-[16px] leading-8 text-ink/85"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 max-w-[72ch] space-y-6">
            {body.blocks.map((block, index) => (
              <ArticleBlockView key={`${block.type}-${index}`} block={block} />
            ))}
          </div>

          <aside className="mt-12 max-w-[72ch] overflow-hidden rounded-2xl bg-arena p-6 text-white sm:p-8">
            <p className="eyebrow text-brand">Arène de programmation</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Découvre l&apos;arène du GDG ÉTS
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
              Problèmes en français, éditeur intégré, classement ICPC et
              soumissions simulées. La démo est ouverte à tous, sans compte.
            </p>
            <Link
              href="/arena"
              className={buttonStyles({
                variant: "primary",
                size: "md",
                className: "mt-5",
              })}
            >
              Explorer la démo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </aside>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="eyebrow text-muted">Sommaire</p>
              <ol className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#introduction"
                    className="flex gap-2 text-muted transition-colors hover:text-brand"
                  >
                    <span className="font-mono text-[10px] text-brand">01</span>
                    Introduction
                  </a>
                </li>
                {toc.map((heading, index) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="flex gap-2 text-muted transition-colors hover:text-brand"
                    >
                      <span className="font-mono text-[10px] text-muted/60">
                        {(index + 2).toString().padStart(2, "0")}
                      </span>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="eyebrow text-muted">Partager cet article</p>
              <div className="mt-3">
                <ShareLinks />
              </div>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand-soft/60 p-5">
              <p className="eyebrow text-brand">Organisé par GDG ÉTS</p>
              <p className="mt-2 text-xs leading-5 text-ink/70">
                Le GDG ÉTS est le chapitre Google Developer Groups on Campus de
                l&apos;École de technologie supérieure, à Montréal. Ateliers,
                conférences et programmation compétitive.
              </p>
              <Link
                href="/events"
                className="mt-3 inline-flex text-xs font-medium text-brand hover:underline"
              >
                Voir nos prochains événements
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
