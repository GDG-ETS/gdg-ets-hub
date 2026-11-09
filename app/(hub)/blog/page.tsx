import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getCategoryColors } from "@/lib/category-colors";
import { cn } from "@/lib/cn";
import { posts, type Post, type PostCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Annonces, retours d'événements et nouvelles du chapitre GDG ÉTS.",
};

const ALL_CATEGORIES: { key: PostCategory; label: string; slug: string }[] = [
  { key: "ANNONCE", label: "Annonce", slug: "annonce" },
  { key: "RETOUR", label: "Retour", slug: "retour" },
  { key: "CONFÉRENCE", label: "Conférence", slug: "conference" },
  { key: "ATELIER", label: "Atelier", slug: "atelier" },
];

const availableCategories = ALL_CATEGORIES.filter((cat) =>
  posts.some((post) => post.category === cat.key)
);

function normalizeCat(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function BlogListUI({
  activeCategory,
  filteredPosts,
}: {
  activeCategory?: (typeof availableCategories)[number];
  filteredPosts: Post[];
}) {
  return (
    <>
      <nav
        aria-label="Filtrer par catégorie"
        className="mt-6 flex flex-wrap items-center gap-2"
      >
        <Link
          href="/blog"
          aria-current={!activeCategory ? "page" : undefined}
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            !activeCategory
              ? "border-ink bg-ink text-white"
              : "border-line bg-white text-muted hover:border-muted hover:text-ink"
          )}
        >
          Tous
        </Link>
        {availableCategories.map((cat) => {
          const isSelected = activeCategory?.key === cat.key;
          const colors = getCategoryColors(cat.key);

          return (
            <Link
              key={cat.key}
              href={`/blog?categorie=${cat.slug}`}
              aria-current={isSelected ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                isSelected
                  ? cn(colors.text, colors.softBg, colors.border, "font-semibold")
                  : "border-line bg-white text-muted hover:border-muted hover:text-ink"
              )}
            >
              <span
                className={cn("size-1.5 rounded-full", colors.solid)}
                aria-hidden="true"
              />
              {cat.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
        <h2 className="text-sm font-semibold text-ink">
          {activeCategory
            ? `Publications : ${activeCategory.label}`
            : "Toutes les publications"}
        </h2>
        <span className="text-xs text-muted">
          {filteredPosts.length.toString().padStart(2, "0")}{" "}
          {filteredPosts.length > 1 ? "articles" : "article"}
        </span>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="divide-y divide-line">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-muted">
          Aucun article trouvé dans cette catégorie.
        </p>
      )}
    </>
  );
}

async function FilteredBlogList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const paramVal =
    typeof resolvedSearchParams?.categorie === "string"
      ? resolvedSearchParams.categorie
      : undefined;

  const activeCategory = paramVal
    ? availableCategories.find(
        (cat) =>
          normalizeCat(cat.slug) === normalizeCat(paramVal) ||
          normalizeCat(cat.label) === normalizeCat(paramVal) ||
          normalizeCat(cat.key) === normalizeCat(paramVal)
      )
    : undefined;

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory.key)
    : posts;

  return (
    <BlogListUI
      activeCategory={activeCategory}
      filteredPosts={filteredPosts}
    />
  );
}

export default function BlogPage({ searchParams }: Props) {
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

        <Suspense fallback={<BlogListUI filteredPosts={posts} />}>
          <FilteredBlogList searchParams={searchParams} />
        </Suspense>

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
