import type { PostCategory } from "@/lib/data";

type ColorTokens = {
  /** Text color class, safe for small text on white (WCAG AA). */
  text: string;
  /** Soft background for pills and accents. */
  softBg: string;
  /** Subtle border color for pills. */
  border: string;
  /** Solid brand color for decorative accents (not for small text on white). */
  solid: string;
};

const postCategoryColors: Record<PostCategory, ColorTokens> = {
  ATELIER: {
    text: "text-google-blue-fg",
    softBg: "bg-google-blue-soft",
    border: "border-google-blue/20",
    solid: "bg-google-blue",
  },
  CONFÉRENCE: {
    text: "text-google-red-fg",
    softBg: "bg-google-red-soft",
    border: "border-google-red/20",
    solid: "bg-google-red",
  },
  RETOUR: {
    text: "text-google-green-fg",
    softBg: "bg-google-green-soft",
    border: "border-google-green/20",
    solid: "bg-google-green",
  },
  ANNONCE: {
    text: "text-google-yellow-fg",
    softBg: "bg-google-yellow-soft",
    border: "border-google-yellow/30",
    solid: "bg-google-yellow",
  },
};

const eventTypeColors: Record<string, ColorTokens> = {
  Atelier: postCategoryColors.ATELIER,
  Conférence: postCategoryColors.CONFÉRENCE,
  Retour: postCategoryColors.RETOUR,
  Meetup: postCategoryColors.RETOUR,
  Annonce: postCategoryColors.ANNONCE,
};

const fallbackColors: ColorTokens = {
  text: "text-muted",
  softBg: "bg-canvas",
  border: "border-line",
  solid: "bg-muted",
};

export function getCategoryColors(category: PostCategory): ColorTokens {
  return postCategoryColors[category];
}

export function getEventTypeColors(type: string): ColorTokens {
  return eventTypeColors[type] ?? fallbackColors;
}
