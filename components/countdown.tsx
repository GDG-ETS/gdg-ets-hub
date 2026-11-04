"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type CountdownProps = {
  seconds: number;
  variant?: "clock" | "short";
  className?: string;
  label?: string;
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function describe(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;
  const parts: string[] = [];
  if (days) parts.push(`${days} jour${days > 1 ? "s" : ""}`);
  if (hours) parts.push(`${hours} heure${hours > 1 ? "s" : ""}`);
  if (minutes) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (!days && !hours) parts.push(`${seconds} seconde${seconds > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function Countdown({
  seconds,
  variant = "clock",
  className,
  label = "Temps restant",
}: CountdownProps) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((value) => (value <= 1 ? 0 : value - 1));
    }, 1_000);
    return () => window.clearInterval(id);
  }, []);

  const days = Math.floor(remaining / 86_400);
  const hours = Math.floor((remaining % 86_400) / 3_600);
  const minutes = Math.floor((remaining % 3_600) / 60);
  const secs = remaining % 60;

  return (
    <span
      className={cn("tabular font-mono", className)}
      role="timer"
      aria-live="off"
      aria-label={`${label} : ${describe(remaining)}`}
    >
      <span aria-hidden="true">
        {variant === "short" ? (
          <>
            {days > 0 && <>{days}j </>}
            {pad(hours)}h {pad(minutes)}m
          </>
        ) : (
          <>
            {days > 0 && <>{days}j </>}
            {pad(hours)}:{pad(minutes)}:{pad(secs)}
          </>
        )}
      </span>
    </span>
  );
}
