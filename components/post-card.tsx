import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/data";
import { getCategoryColors } from "@/lib/category-colors";
import { cn } from "@/lib/cn";

export function PostCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  const category = getCategoryColors(post.category);

  return (
    <article className={cn("group py-6 sm:py-7", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_112px] sm:items-start sm:gap-6"
      >
        <div className="min-w-0">
          <p>
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                category.text,
                category.softBg,
                category.border,
              )}
            >
              {post.categoryLabel}
            </span>
          </p>
          <h3 className="mt-1.5 text-xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand sm:text-[22px]">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[15px] leading-6 text-muted">
            {post.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min de lecture</span>
          </div>
        </div>

        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-md bg-canvas sm:block">
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="112px"
            className={cn(
              post.coverFit === "contain" ? "object-contain" : "object-cover"
            )}
          />
        </div>
      </Link>
    </article>
  );
}
