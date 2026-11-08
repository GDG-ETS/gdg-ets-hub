import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Event } from "@/lib/data";
import { getEventTypeColors } from "@/lib/category-colors";
import { cn } from "@/lib/cn";

export function EventList({ events }: { events: Event[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {events.map((event) => {
        const type = getEventTypeColors(event.type);

        return (
          <Link
            key={event.slug}
            id={event.slug}
            href={event.href ?? `/events#${event.slug}`}
            className="group grid scroll-mt-24 grid-cols-[48px_minmax(0,1fr)_20px] items-start gap-4 py-5 transition-colors hover:bg-canvas/50 sm:grid-cols-[64px_minmax(0,1fr)_20px] sm:gap-5"
          >
            <time
              dateTime={event.dateISO}
              className="pt-0.5 text-center sm:text-left"
            >
              <span className="block text-2xl font-bold leading-none tracking-tight text-ink">
                {event.day}
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-muted">
                {event.month}
              </span>
            </time>

            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 font-medium",
                    type.text,
                    type.softBg,
                    type.border,
                  )}
                >
                  {event.type}
                </span>
                <span>{event.time}</span>
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand sm:text-lg">
                {event.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted">{event.location}</p>
            </div>

            <ArrowUpRight
              className="mt-1 size-4 text-muted transition-colors group-hover:text-brand"
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </div>
  );
}
