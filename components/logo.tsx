import Link from "next/link";
import { cn } from "@/lib/cn";

const dots = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

export function Logo({
  href = "/",
  dark = false,
  compact = false,
  className,
}: {
  href?: string;
  dark?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group flex shrink-0 items-center gap-2.5", className)}
      aria-label="GDG ÉTS — accueil"
    >
      <span className="flex gap-[3px]" aria-hidden="true">
        {dots.map((color) => (
          <span
            key={color}
            className="size-[7px] rounded-full transition-transform group-hover:-translate-y-0.5"
            style={{ backgroundColor: color }}
          />
        ))}
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-display text-lg font-bold tracking-tight",
          dark ? "text-white" : "text-ink",
          compact && "text-base"
        )}
      >
        GDG ÉTS
      </span>
      {!compact && (
        <span
          className={cn(
            "hidden rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest sm:inline",
            dark
              ? "border-white/20 text-white/60"
              : "border-line text-muted"
          )}
        >
          Club étudiant
        </span>
      )}
    </Link>
  );
}
