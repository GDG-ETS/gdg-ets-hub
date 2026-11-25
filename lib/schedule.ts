import { cacheLife } from "next/cache";
import { allEvents, splitEvents } from "@/lib/data";

/**
 * Upcoming and past events, recomputed at most every hour so the site never
 * keeps advertising an event after it has happened.
 */
export async function getEventSchedule() {
  "use cache";
  cacheLife("hours");
  return splitEvents(allEvents, new Date());
}
