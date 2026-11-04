import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Chroniques techniques, tutoriels et retours d'expérience de la communauté GDG ÉTS.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="container-page pb-10 pt-10 sm:pt-14">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand">Le blog</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Articles &amp; retours
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Des textes écrits par les membres du club : décryptages techniques,
            comptes rendus de panels et coulisses de nos concours.
          </p>
        </div>
      </section>

      <section className="container-page pb-14">
        <article className="group overflow-hidden rounded-2xl border border-line bg-surface">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid lg:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={featured.cover}
                alt={featured.coverAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <p className="eyebrow text-brand">À la une · {featured.categoryLabel}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-muted">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                <time dateTime={featured.dateISO}>{featured.date}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  {featured.readingMinutes} min de lecture
                </span>
                <span>{featured.author}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Lire le récapitulatif
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </article>
      </section>

      <section className="container-page pb-20">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Toutes les publications
          </h2>
          <span className="font-mono text-[11px] text-muted">
            {posts.length.toString().padStart(2, "0")} articles
          </span>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Une idée d&apos;article ?
            </h2>
            <p className="mt-1 text-sm text-muted">
              Propose un sujet ou écris ton premier texte avec l&apos;équipe
              éditoriale du club.
            </p>
          </div>
          <Link href="/about" className={buttonStyles({ variant: "dark", size: "md" })}>
            Rejoindre l&apos;équipe
          </Link>
        </div>
      </section>
    </>
  );
}
