import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Building2 } from "lucide-react";
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

type ResourceItem = Extract<ArticleBlock, { type: "resources" }>["items"][number];

function ResourceRow({ item }: { item: ResourceItem }) {
  const external = item.href?.startsWith("http");
  const content = (
    <>
      <span className="min-w-0 flex-1 font-medium text-ink group-hover:text-brand">
        {item.label}
      </span>
      <span className="shrink-0 text-xs text-muted">{item.kind}</span>
      {item.href ? (
        <ArrowUpRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
      ) : (
        <span className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
          Bientôt
        </span>
      )}
    </>
  );

  const className =
    "group flex items-center gap-3 py-3.5 text-sm transition-colors";

  if (item.href) {
    return (
      <a
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[17px] leading-8 text-ink/85">{block.text}</p>;

    case "heading":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 pt-4 text-2xl font-bold tracking-tight text-ink"
        >
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[17px] leading-8 text-ink/85 marker:text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-brand pl-5">
          <p className="text-lg font-medium leading-8 text-ink sm:text-xl">
            {block.text}
          </p>
          <footer className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">
            {block.cite}
          </footer>
        </blockquote>
      );

    case "speakers":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          {block.items.map((speaker) => (
            <div
              key={speaker.name}
              className="border-t border-line pt-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 items-center justify-center rounded-full bg-canvas text-xs font-semibold text-ink"
                  aria-hidden="true"
                >
                  {speaker.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-ink">
                    {speaker.name}
                  </h3>
                  <p className="text-xs leading-5 text-muted">{speaker.role}</p>
                </div>
              </div>
              {speaker.company && (
                <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-muted">
                  <Building2 className="size-3" aria-hidden="true" />
                  {speaker.company}
                </p>
              )}
              <p className="mt-2 text-[11px] uppercase tracking-wide text-muted">
                {speaker.tag}
              </p>
            </div>
          ))}
        </div>
      );

    case "resources":
      return (
        <div className="divide-y divide-line border-y border-line">
          {block.items.map((item) => (
            <ResourceRow key={item.label} item={item} />
          ))}
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
    <div className="container-hub pb-16 pt-6">
      <div className="mx-auto max-w-[760px] xl:max-w-[1040px]">
        <nav
          aria-label="Fil d'Ariane"
          className="max-w-[760px] text-xs text-muted"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-ink">
                Articles
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{post.categoryLabel}</li>
          </ol>
        </nav>

        <header className="mt-6 max-w-[760px]">
          <p className="text-sm font-medium text-brand">{post.categoryLabel}</p>
          <h1 className="mt-2 text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[42px]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-line py-4 text-xs text-muted">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-canvas text-[10px] font-semibold text-ink"
              aria-hidden="true"
            >
              GDG
            </span>
            <span className="font-medium text-ink">{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min de lecture</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="hidden sm:inline">{post.location}</span>
          </div>
        </header>

        <figure className="mt-8 max-w-[760px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-canvas">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              preload
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-muted">
            Image d&apos;illustration.
          </figcaption>
        </figure>

        <details className="mt-8 max-w-[760px] border-y border-line py-3 xl:hidden">
          <summary className="cursor-pointer text-sm font-medium text-ink">
            Sommaire
          </summary>
          <ol className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="#introduction"
                className="text-muted transition-colors hover:text-ink"
              >
                Introduction
              </a>
            </li>
            {toc.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ol>
        </details>

        <div className="mt-10 grid gap-12 xl:grid-cols-[minmax(0,700px)_220px] xl:gap-10">
          <article className="min-w-0 max-w-[700px] xl:max-w-none">
            <div
              id="introduction"
              className="space-y-5 scroll-mt-24"
            >
              {body.lead.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-[18px] leading-8 text-ink/90"
                      : "text-[17px] leading-8 text-ink/85"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              {body.blocks.map((block, index) => (
                <ArticleBlockView key={`${block.type}-${index}`} block={block} />
              ))}
            </div>

            <aside className="mt-12 border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink">
                Arène de programmation · démo
              </p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
                Problèmes en français, éditeur intégré et classement ICPC.
                Concours, soumissions et verdicts simulés. Aucun compte requis.
              </p>
              <Link
                href="/arena"
                className="mt-3 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
              >
                Explorer la démo
              </Link>
            </aside>
          </article>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-8">
              <nav aria-label="Sommaire de l'article">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Sommaire
                </p>
                <ol className="mt-3 space-y-2 border-l border-line pl-4 text-sm">
                  <li>
                    <a
                      href="#introduction"
                      className="text-muted transition-colors hover:text-ink"
                    >
                      Introduction
                    </a>
                  </li>
                  {toc.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-muted transition-colors hover:text-ink"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Partager
                </p>
                <div className="mt-3">
                  <ShareLinks />
                </div>
              </div>

              <div className="border-t border-line pt-5">
                <p className="text-sm font-semibold text-ink">GDG ÉTS</p>
                <p className="mt-2 text-xs leading-5 text-muted">
                  Le chapitre Google Developer Groups on Campus de l&apos;École de
                  technologie supérieure, à Montréal.
                </p>
                <Link
                  href="/events"
                  className="mt-3 inline-flex text-xs font-medium text-brand hover:text-brand-dark"
                >
                  Nos prochains événements
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
