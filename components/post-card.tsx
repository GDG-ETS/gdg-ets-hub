import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import type { Post } from "@/lib/data";
import { cn } from "@/lib/cn";

const categoryTone: Record<Post["category"], string> = {
  ATELIER: "text-success",
  CONFÉRENCE: "text-brand",
  RETOUR: "text-warning",
  ANNONCE: "text-danger",
};

export function PostCard({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink/20",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className={cn("eyebrow", categoryTone[post.category])}>
            {post.categoryLabel}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted">
            <time dateTime={post.dateISO}>{post.date}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {post.readingMinutes} min de lecture
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
