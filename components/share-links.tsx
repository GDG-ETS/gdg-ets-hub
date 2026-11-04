"use client";

import { useState } from "react";
import { AtSign, BriefcaseBusiness, Check, Link2 } from "lucide-react";

export function ShareLinks() {
  const [copied, setCopied] = useState(false);

  function currentUrl() {
    return typeof window === "undefined" ? "" : window.location.href;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1_800);
    } catch {
      setCopied(false);
    }
  }

  function openShare(network: "linkedin" | "x") {
    const url = encodeURIComponent(currentUrl());
    const target =
      network === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        : `https://twitter.com/intent/tweet?url=${url}`;
    window.open(target, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={copyLink}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
      >
        {copied ? (
          <Check className="size-3.5 text-success" aria-hidden="true" />
        ) : (
          <Link2 className="size-3.5 text-muted" aria-hidden="true" />
        )}
        {copied ? "Lien copié" : "Copier le lien"}
      </button>
      <button
        type="button"
        onClick={() => openShare("linkedin")}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
      >
        <BriefcaseBusiness className="size-3.5 text-muted" aria-hidden="true" />
        Partager sur LinkedIn
      </button>
      <button
        type="button"
        onClick={() => openShare("x")}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
      >
        <AtSign className="size-3.5 text-muted" aria-hidden="true" />
        Partager sur X
      </button>
    </div>
  );
}
