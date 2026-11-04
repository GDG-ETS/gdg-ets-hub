import Link from "next/link";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import type { Event } from "@/lib/data";

export function EventList({ events }: { events: Event[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {events.map((event) => (
        <Link
          key={event.slug}
          id={event.slug}
          href={`/events#${event.slug}`}
          className="group flex scroll-mt-24 items-center gap-4 px-4 py-4 transition-colors hover:bg-canvas/70 sm:px-6 sm:py-5"
        >
          <div className="flex w-14 shrink-0 flex-col items-center rounded-lg border border-line bg-canvas py-1.5">
            <span className="font-display text-lg font-semibold leading-none tracking-tight">
              {event.day}
            </span>
            <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-widest text-muted">
              {event.month}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[10px] uppercase tracking-[0.12em]">
              <span className="text-brand">{event.type}</span>
              <span className="text-muted/70">{event.time}</span>
            </p>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand sm:text-lg">
              {event.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
              {event.online ? (
                <Globe2 className="size-3.5" aria-hidden="true" />
              ) : (
                <MapPin className="size-3.5" aria-hidden="true" />
              )}
              {event.location}
            </p>
          </div>

          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-brand group-hover:text-brand">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}
