"use client";

import { useState } from "react";
import { AtSign, BriefcaseBusiness, Check, Link2 } from "lucide-react";

const itemClass =
  "inline-flex min-h-10 items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink";

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
    <div className="flex flex-col items-start">
      <button type="button" onClick={copyLink} className={itemClass}>
        {copied ? (
          <Check className="size-3.5 text-success" aria-hidden="true" />
        ) : (
          <Link2 className="size-3.5" aria-hidden="true" />
        )}
        {copied ? "Lien copié" : "Copier le lien"}
      </button>
      <button
        type="button"
        onClick={() => openShare("linkedin")}
        className={itemClass}
      >
        <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
        LinkedIn
      </button>
      <button
        type="button"
        onClick={() => openShare("x")}
        className={itemClass}
      >
        <AtSign className="size-3.5" aria-hidden="true" />
        X
      </button>
    </div>
  );
}
