import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Annonces, retours d'événements et nouvelles du chapitre GDG ÉTS.",
};

export default function BlogPage() {
  return (
    <div className="container-hub py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-line pb-8">
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            Articles
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base">
            Des textes écrits par les membres du club : annonces, retours
            d&apos;événements et nouvelles de la première session.
          </p>
        </header>

        <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
          <h2 className="text-sm font-semibold text-ink">
            Toutes les publications
          </h2>
          <span className="text-xs text-muted">
            {posts.length.toString().padStart(2, "0")} articles
          </span>
        </div>

        <div className="divide-y divide-line">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <section
          aria-labelledby="contribute"
          className="mt-10 border-t border-line pt-8"
        >
          <h2 id="contribute" className="text-xl font-bold text-ink">
            Une idée d&apos;article ?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            Propose un sujet ou écris ton premier texte avec l&apos;équipe du
            club. Les propositions se discutent lors des activités.
          </p>
          <Link
            href="/events"
            className="mt-4 inline-flex text-sm font-medium text-brand hover:text-brand-dark"
          >
            Voir les prochains événements
          </Link>
        </section>
      </div>
    </div>
  );
}
