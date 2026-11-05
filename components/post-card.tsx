import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/data";
import { cn } from "@/lib/cn";

export function PostCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <article className={cn("group py-6 sm:py-7", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_112px] sm:items-start sm:gap-6"
      >
        <div className="min-w-0">
          <p className="text-xs font-medium text-ink">{post.categoryLabel}</p>
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
            className="object-cover"
          />
        </div>
      </Link>
    </article>
  );
}
