import {
  CheckCircle2,
  XCircle,
  Clock3,
  AlertTriangle,
  Loader2,
  MinusCircle,
} from "lucide-react";
import { cn } from "@/lib/cn";

export type Verdict = "AC" | "WA" | "TLE" | "MLE" | "CE" | "pending";

const config: Record<
  Verdict,
  {
    label: string;
    tone: string;
    Icon: typeof CheckCircle2;
  }
> = {
  AC: {
    label: "Accepté",
    tone: "border-success/25 bg-success-soft text-success",
    Icon: CheckCircle2,
  },
  WA: {
    label: "Mauvaise réponse",
    tone: "border-danger/25 bg-danger-soft text-danger",
    Icon: XCircle,
  },
  TLE: {
    label: "Temps dépassé",
    tone: "border-warning/25 bg-warning-soft text-warning",
    Icon: Clock3,
  },
  MLE: {
    label: "Mémoire dépassée",
    tone: "border-warning/25 bg-warning-soft text-warning",
    Icon: AlertTriangle,
  },
  CE: {
    label: "Erreur de compilation",
    tone: "border-danger/25 bg-danger-soft text-danger",
    Icon: XCircle,
  },
  pending: {
    label: "En attente",
    tone: "border-line bg-canvas text-muted",
    Icon: Loader2,
  },
};

export function VerdictBadge({
  verdict,
  compact = false,
  className,
}: {
  verdict: Verdict;
  compact?: boolean;
  className?: string;
}) {
  const { label, tone, Icon } = config[verdict];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-medium",
        tone,
        className
      )}
    >
      <Icon
        className={cn("size-3.5 shrink-0", verdict === "pending" && "animate-spin")}
        aria-hidden="true"
      />
      <span className="font-mono font-semibold">{verdict === "pending" ? "…" : verdict}</span>
      {!compact && <span className="hidden sm:inline">{label}</span>}
    </span>
  );
}

export function VerdictDot() {
  return <MinusCircle className="size-4 text-muted/60" aria-hidden="true" />;
}
