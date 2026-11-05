import type { Metadata } from "next";
import Link from "next/link";
import { Info, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité du hub et de l'arène du GDG ÉTS. La maquette actuelle ne collecte aucune donnée.",
};

const sections = [
  {
    id: "maquette",
    title: "Maquette et collecte de données",
    paragraphs: [
      "Cette version du hub et de l'arène est une maquette publique. Elle ne demande aucun compte, ne contient aucun formulaire et n'enregistre aucune donnée personnelle.",
      "Les soumissions saisies dans l'arène restent dans ton navigateur et disparaissent au rechargement de la page. Aucun code n'est transmis à un serveur ni exécuté par un juge.",
    ],
  },
  {
    id: "donnees",
    title: "Données prévues dans la version finale",
    paragraphs: [
      "Lorsque les comptes seront disponibles, nous prévoyons de collecter ton nom, ton adresse courriel, ton programme d'études et, si tu l'indiques, ton nom d'utilisateur public. Ces informations serviront à identifier ton compte, à t'inscrire aux activités et à afficher ton classement.",
      "Les soumissions de code seront conservées afin de calculer les résultats, de permettre le rejudge et de produire les explications de solution. Elles ne seront jamais utilisées à des fins publicitaires.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies et mesures d'audience",
    paragraphs: [
      "La maquette ne dépose aucun cookie publicitaire ni traceur tiers. Aucune mesure d'audience n'est activée.",
      "Lorsque l'authentification sera branchée, seuls des cookies strictement nécessaires à la session et à la sécurité seront utilisés.",
    ],
  },
  {
    id: "conservation",
    title: "Conservation et sécurité",
    paragraphs: [
      "Aucune donnée n'est présentement stockée par le hub ou par l'arène. Les données de démonstration sont définies dans le code de l'application.",
      "La version finale sera hébergée au Canada et protégée par des contrôles d'accès, le chiffrement en transit et des sauvegardes régulières. Les données de compte seront conservées tant que le compte sera actif.",
    ],
  },
  {
    id: "partage",
    title: "Partage avec des tiers",
    paragraphs: [
      "Nous ne vendons aucune donnée personnelle. Dans la version finale, certains fournisseurs d'infrastructure (hébergement, envoi de courriels transactionnels) pourraient traiter des données pour notre compte, dans le cadre de contrats qui encadrent leur usage.",
    ],
  },
  {
    id: "droits",
    title: "Tes droits",
    paragraphs: [
      "Comme la maquette ne collecte aucune donnée, il n'y a actuellement rien à consulter, corriger ou supprimer.",
      "Lorsque les comptes seront disponibles, tu pourras demander l'accès, la correction ou la suppression de tes données à tout moment, ainsi que retirer ton consentement aux communications.",
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
              Cette page explique quelles données le hub et l&apos;arène du GDG
              ÉTS pourraient collecter, pourquoi elles le seraient et comment
              exercer tes droits.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Dernière mise à jour : 3 novembre 2026
            </p>
          </header>

          <div className="mt-6 flex items-start gap-3 rounded-md border border-warning/30 bg-warning-soft/60 p-4">
            <Info
              className="mt-0.5 size-4 shrink-0 text-warning"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-ink">
              <strong className="font-semibold">Maquette :</strong> aucune
              donnée personnelle n&apos;est collectée ni enregistrée. Les
              soumissions dans l&apos;arène restent dans ton navigateur.
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
