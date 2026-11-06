import Link from "next/link";
import { cn } from "@/lib/cn";

const dots = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
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
      <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink">
        GDG ÉTS
      </span>
    </Link>
  );
}
