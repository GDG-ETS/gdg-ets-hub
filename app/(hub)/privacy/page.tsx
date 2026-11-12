import type { Metadata } from "next";
import Link from "next/link";
import { Info, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité du hub GDG ÉTS. Le site ne collecte aucune donnée personnelle.",
};

const sections = [
  {
    id: "collecte",
    title: "Collecte de données",
    paragraphs: [
      "Le hub GDG ÉTS ne demande aucun compte, ne contient aucun formulaire et n'enregistre aucune donnée personnelle.",
      "Il n'y a ni infolettre, ni espace membre, ni base de données reliée au site.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies et mesures d'audience",
    paragraphs: [
      "Le site ne dépose aucun cookie publicitaire ni traceur tiers. Aucune mesure d'audience n'est activée.",
    ],
  },
  {
    id: "stockage",
    title: "Stockage local",
    paragraphs: [
      "Le contenu des articles et des événements est défini dans le code de l'application. Aucune information saisie par une personne visitant le site n'est conservée.",
    ],
  },
  {
    id: "liens-externes",
    title: "Liens externes",
    paragraphs: [
      "Certaines pages renvoient vers des sites tiers, par exemple les liens de partage LinkedIn et X. Ces sites appliquent leurs propres politiques de confidentialité, sur lesquelles le club n'a aucun contrôle.",
    ],
  },
  {
    id: "droits",
    title: "Tes droits",
    paragraphs: [
      "Comme le site ne collecte aucune donnée, il n'y a actuellement rien à consulter, corriger ou supprimer.",
      "Pour toute question, tu peux rencontrer l'équipe lors d'une activité ou consulter la page À propos.",
    ],
  },
  {
    id: "contact",
    title: "Nous contacter",
    paragraphs: [
      "Les coordonnées officielles du club seront publiées lorsqu'elles auront été confirmées. En attendant, tu peux rencontrer l'équipe lors d'une activité ou consulter la page À propos.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="container-hub py-8 sm:py-10">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-12">
        <div className="mx-auto max-w-[720px] xl:mx-0">
          <header className="border-b border-line pb-8">
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
              Politique de confidentialité
            </h1>
            <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base">
              Cette page résume la politique de confidentialité du hub GDG ÉTS
              et la façon d&apos;exercer tes droits.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Dernière mise à jour : 7 novembre 2026
            </p>
          </header>

          <div className="mt-6 flex items-start gap-3 rounded-md border border-warning/30 bg-warning-soft/60 p-4">
            <Info
              className="mt-0.5 size-4 shrink-0 text-warning"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-ink">
              <strong className="font-semibold">Aucune collecte :</strong> le
              site ne demande aucun compte et n&apos;enregistre aucune donnée
              personnelle.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-line pt-6"
              >
                <h2 className="text-xl font-bold tracking-tight text-ink">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-7 text-ink/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.id === "contact" && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    <Link
                      href="/events"
                      className="text-brand hover:text-brand-dark"
                    >
                      Voir les événements
                    </Link>
                    <Link
                      href="/about"
                      className="text-brand hover:text-brand-dark"
                    >
                      À propos
                    </Link>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 border-t border-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Sommaire
            </p>
            <nav aria-label="Sommaire de la politique" className="mt-3">
              <ol className="space-y-2 text-sm">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 text-muted transition-colors hover:text-ink"
                    >
                      <span className="font-mono text-[10px] text-muted">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted">
              <p className="flex items-center gap-1.5 text-success">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Aucune donnée collectée
              </p>
              <p className="mt-2">
                Consulte aussi notre{" "}
                <Link
                  href="/about"
                  className="font-medium text-brand hover:text-brand-dark"
                >
                  mission
                </Link>{" "}
                et notre{" "}
                <Link
                  href="/events"
                  className="font-medium text-brand hover:text-brand-dark"
                >
                  calendrier
                </Link>
                .
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
