import { cn } from "@/lib/cn";

type Tone = "neutral" | "brand" | "success" | "danger" | "warning" | "dark";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-canvas text-muted",
  brand: "border-brand/20 bg-brand-soft text-brand-dark",
  success: "border-success/20 bg-success-soft text-success",
  danger: "border-danger/20 bg-danger-soft text-danger",
  warning: "border-warning/20 bg-warning-soft text-warning",
  dark: "border-white/15 bg-white/10 text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
