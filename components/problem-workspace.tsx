"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Loader2,
  Play,
  Send,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { Problem } from "@/lib/data";

type Language = "C++17" | "Python 3" | "Java 17";

const languages: Language[] = ["C++17", "Python 3", "Java 17"];

const languageExtensions = {
  "C++17": cpp,
  "Python 3": python,
  "Java 17": java,
};

function starterFor(problem: Problem, language: Language) {
  if (language === "C++17") return problem.starter;
  if (language === "Python 3") {
    return `# ${problem.label} — ${problem.title}\nimport sys\n\ndef solve():\n    data = sys.stdin.buffer.read().split()\n    if not data:\n        return\n    # TODO : implémenter la solution\n    print(\"TODO\")\n\nif __name__ == \"__main__\":\n    solve()\n`;
  }
  return `// ${problem.label} — ${problem.title}\nimport java.io.*;\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));\n        // TODO : implémenter la solution\n        System.out.println(\"TODO\");\n    }\n}\n`;
}

export function ProblemWorkspace({ problem }: { problem: Problem }) {
  const [language, setLanguage] = useState<Language>("C++17");
  const [code, setCode] = useState(() => starterFor(problem, "C++17"));
  const [mobileTab, setMobileTab] = useState<"statement" | "editor">("statement");
  const [saved, setSaved] = useState(true);
  const [copied, setCopied] = useState<"input" | "output" | null>(null);
  const [runState, setRunState] = useState<"idle" | "running" | "done">("idle");
  const [submission, setSubmission] = useState<
    null | { state: "queued" | "accepted"; id: string }
  >(null);
  const [showDetails, setShowDetails] = useState(false);

  const runTimer = useRef<number | null>(null);
  const submitTimer = useRef<number | null>(null);
  const copyTimer = useRef<number | null>(null);
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (runTimer.current) window.clearTimeout(runTimer.current);
      if (submitTimer.current) window.clearTimeout(submitTimer.current);
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, []);

  function changeLanguage(next: Language) {
    setLanguage(next);
    setCode(starterFor(problem, next));
    setSaved(true);
    setRunState("idle");
    setSubmission(null);
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
  }

  function runSample() {
    setRunState("running");
    if (runTimer.current) window.clearTimeout(runTimer.current);
    runTimer.current = window.setTimeout(() => setRunState("done"), 900);
  }

  function submit() {
    setSubmission({ state: "queued", id: "sub_1043" });
    if (submitTimer.current) window.clearTimeout(submitTimer.current);
    submitTimer.current = window.setTimeout(
      () => setSubmission({ state: "accepted", id: "sub_1043" }),
      1_800
    );
  }

  function copy(value: string, kind: "input" | "output") {
    navigator.clipboard?.writeText(value).catch(() => undefined);
    setCopied(kind);
    if (copyTimer.current) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(null), 1_500);
  }

  const sample = problem.samples[0];
  const extensions = [languageExtensions[language]()];

  return (
    <div className="flex flex-col">
      <div className="border-b border-line bg-surface">
        <div className="container-page flex flex-wrap items-center gap-3 py-3">
          <Link
            href="/arena/contest"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Tous les problèmes</span>
          </Link>
          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded bg-ink font-mono text-[11px] font-semibold text-white">
              {problem.label}
            </span>
            <span className="truncate text-sm font-medium">{problem.title}</span>
          </div>
          <span className="hidden items-center gap-1.5 md:flex">
            <span className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[10px] text-muted">
              {problem.timeLimit}
            </span>
            <span className="rounded border border-line bg-canvas px-2 py-0.5 font-mono text-[10px] text-muted">
              {problem.memoryLimit}
            </span>
          </span>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <label htmlFor="language" className="sr-only">
                Langage
              </label>
              <select
                id="language"
                value={language}
                onChange={(event) => changeLanguage(event.target.value as Language)}
                className="h-9 appearance-none rounded-lg border border-line bg-surface pl-3 pr-8 text-[13px] font-medium text-ink"
              >
                {languages.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
            </div>
            <button
              type="button"
              onClick={runSample}
              disabled={runState === "running"}
              className={buttonStyles({ variant: "outline", size: "sm" })}
            >
              {runState === "running" ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Play className="size-3.5" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">Exécuter l&apos;exemple</span>
              <span className="sm:hidden">Exécuter</span>
            </button>
            <button
              type="button"
              onClick={submit}
              className={buttonStyles({ variant: "primary", size: "sm" })}
            >
              <Send className="size-3.5" aria-hidden="true" />
              Soumettre
            </button>
          </div>
        </div>
      </div>

      <div className="container-page py-3 lg:hidden">
        <div
          className="inline-flex rounded-lg border border-line bg-surface p-1"
          role="tablist"
          aria-label="Affichage de l'espace de travail"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === "statement"}
            onClick={() => setMobileTab("statement")}
            className={cn(
              "rounded-md px-4 py-1.5 text-sm transition-colors",
              mobileTab === "statement"
                ? "bg-ink font-medium text-white"
                : "text-muted"
            )}
          >
            Énoncé
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === "editor"}
            onClick={() => setMobileTab("editor")}
            className={cn(
              "rounded-md px-4 py-1.5 text-sm transition-colors",
              mobileTab === "editor"
                ? "bg-ink font-medium text-white"
                : "text-muted"
            )}
          >
            Code
          </button>
        </div>
      </div>

      <div className="container-page grid gap-4 pb-8 lg:grid-cols-[45fr_55fr] lg:items-start">
        <section
          className={cn(
            "rounded-xl border border-line bg-surface lg:sticky lg:top-20 lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto",
            mobileTab === "statement" ? "block" : "hidden lg:block"
          )}
          aria-label="Énoncé du problème"
        >
          <div className="border-b border-line px-5 py-5 sm:px-6">
            <p className="eyebrow text-brand">Problème {problem.label}</p>
            <h1 className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {problem.title}
            </h1>
            <p className="mt-2 font-mono text-[11px] text-muted">
              {problem.timeLimit} · {problem.memoryLimit} · {problem.points} points
            </p>
          </div>

          <div className="space-y-6 px-5 py-6 text-sm leading-6 text-ink/85 sm:px-6">
            {problem.statement.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Entrée</h2>
              <p className="mt-2">{problem.input}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Sortie</h2>
              <p className="mt-2">{problem.output}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Contraintes</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand">
                {problem.constraints.map((constraint) => (
                  <li key={constraint} className="font-mono text-[12px]">
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Exemples</h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-line">
                  <div className="flex items-center justify-between border-b border-line bg-canvas px-3 py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Entrée
                    </span>
                    <button
                      type="button"
                      onClick={() => copy(sample.input, "input")}
                      className="inline-flex items-center gap-1 text-[10px] text-muted transition-colors hover:text-ink"
                    >
                      {copied === "input" ? (
                        <Check className="size-3" aria-hidden="true" />
                      ) : (
                        <Copy className="size-3" aria-hidden="true" />
                      )}
                      {copied === "input" ? "Copié" : "Copier"}
                    </button>
                  </div>
                  <pre className="overflow-x-auto px-3 py-3 font-mono text-[12px] leading-5 text-ink">
                    {sample.input}
                  </pre>
                </div>
                <div className="overflow-hidden rounded-lg border border-line">
                  <div className="flex items-center justify-between border-b border-line bg-canvas px-3 py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Sortie
                    </span>
                    <button
                      type="button"
                      onClick={() => copy(sample.output, "output")}
                      className="inline-flex items-center gap-1 text-[10px] text-muted transition-colors hover:text-ink"
                    >
                      {copied === "output" ? (
                        <Check className="size-3" aria-hidden="true" />
                      ) : (
                        <Copy className="size-3" aria-hidden="true" />
                      )}
                      {copied === "output" ? "Copié" : "Copier"}
                    </button>
                  </div>
                  <pre className="overflow-x-auto px-3 py-3 font-mono text-[12px] leading-5 text-ink">
                    {sample.output}
                  </pre>
                </div>
              </div>
              {sample.explanation && (
                <p className="mt-2 text-xs leading-5 text-muted">{sample.explanation}</p>
              )}
            </div>
          </div>
        </section>

        <section
          className={cn(
            "flex flex-col overflow-hidden rounded-xl border border-line bg-surface lg:sticky lg:top-20 lg:h-[calc(100dvh-6rem)]",
            mobileTab === "editor" ? "flex" : "hidden lg:flex"
          )}
          aria-label="Éditeur de code"
        >
          <div className="flex items-center justify-between border-b border-line bg-canvas px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
              <span className="font-mono text-[11px] text-muted">
                {language === "C++17" ? "main.cpp" : language === "Python 3" ? "main.py" : "Main.java"}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted">UTF-8</span>
          </div>

          <div className="min-h-[420px] flex-1 overflow-hidden lg:min-h-0">
            <CodeMirror
              value={code}
              height="100%"
              theme={githubLight}
              extensions={extensions}
              onChange={(value) => {
                setCode(value);
                setRunState("idle");
                setSaved(false);
                if (saveTimer.current) window.clearTimeout(saveTimer.current);
                saveTimer.current = window.setTimeout(() => setSaved(true), 900);
              }}
              basicSetup={{
                lineNumbers: true,
                foldGutter: false,
                highlightActiveLine: true,
                autocompletion: false,
              }}
              aria-label={`Code ${language} pour le problème ${problem.label}`}
            />
          </div>

          <div className="border-t border-line bg-canvas/60 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {submission
                  ? `Soumission #${submission.id}`
                  : "Résultat de l'exemple"}
              </p>
              <button
                type="button"
                onClick={() => setShowDetails((value) => !value)}
                className="text-[11px] font-medium text-brand hover:underline"
                aria-expanded={showDetails}
              >
                {showDetails ? "Masquer le détail" : "Voir le détail"}
              </button>
            </div>

            {showDetails && (
              <div className="mt-3 grid gap-2 rounded-lg border border-line bg-surface p-3 text-[11px] sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    Tests
                  </p>
                  <p className="mt-0.5 text-ink">
                    {submission?.state === "accepted"
                      ? "12 / 12 acceptés"
                      : runState === "done"
                        ? "1 / 1 exemple"
                        : "Aucun test exécuté"}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    Temps
                  </p>
                  <p className="mt-0.5 text-ink">
                    {submission?.state === "accepted"
                      ? "0,18 s"
                      : runState === "done"
                        ? "0,04 s"
                        : "—"}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    Mémoire
                  </p>
                  <p className="mt-0.5 text-ink">
                    {submission?.state === "accepted"
                      ? "11,4 Mo"
                      : runState === "done"
                        ? "9,2 Mo"
                        : "—"}
                  </p>
                </div>
              </div>
            )}

            {submission ? (
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                {submission.state === "queued" ? (
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    En file d&apos;attente du juge…
                  </span>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1.5 font-medium text-success">
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                      Accepté — 12/12 tests
                    </span>
                    <span className="font-mono text-muted">0,18 s</span>
                    <span className="font-mono text-muted">11,4 Mo</span>
                  </>
                )}
              </div>
            ) : runState === "running" ? (
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-muted">
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Exécution de l&apos;exemple…
              </p>
            ) : runState === "done" ? (
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium text-success">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Accepté — 1/1 exemple
                </span>
                <span className="font-mono text-muted">0,04 s</span>
                <span className="font-mono text-muted">9,2 Mo</span>
              </div>
            ) : (
              <p className="mt-2 text-xs text-muted">
                Lancez l&apos;exemple pour vérifier votre sortie avant de soumettre.
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line bg-surface px-4 py-2.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  saved ? "bg-success" : "bg-warning"
                )}
                aria-hidden="true"
              />
              {saved ? "Sauvegardé à l'instant" : "Sauvegarde…"}
            </span>
            <button
              type="button"
              onClick={submit}
              className={buttonStyles({ variant: "primary", size: "sm" })}
            >
              <Send className="size-3.5" aria-hidden="true" />
              Soumettre
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
