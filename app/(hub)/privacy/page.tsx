import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité du hub et de l'arène du GDG ÉTS.",
};

const sections = [
  {
    id: "donnees",
    title: "Données que nous collectons",
    paragraphs: [
      "Lorsque tu crées un compte sur le hub ou dans l'arène, nous collectons ton nom, ton adresse courriel, ton programme d'études et, si tu l'indiques, ton nom d'utilisateur public. Ces informations servent à identifier ton compte, à t'inscrire aux activités et à afficher ton classement.",
      "Les soumissions de code sont conservées afin de calculer les résultats, de permettre le rejudge et de produire les explications de solution. Elles ne sont jamais utilisées à des fins publicitaires.",
    ],
  },
  {
    id: "utilisation",
    title: "Comment nous utilisons les données",
    paragraphs: [
      "Nous utilisons tes données pour faire fonctionner le service : authentification, inscriptions aux événements, classements, notifications liées aux concours et communications du club. Nous n'envoyons pas de communications commerciales sans ton consentement.",
      "Les données agrégées et anonymisées peuvent servir à produire des statistiques sur la participation aux activités du club.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies et mesures d'audience",
    paragraphs: [
      "Le hub utilise des cookies strictement nécessaires à la session et à la sécurité. Aucun cookie publicitaire ni traceur tiers n'est déposé par défaut. Si une mesure d'audience est activée, elle est configurée pour anonymiser les adresses IP.",
    ],
  },
  {
    id: "conservation",
    title: "Conservation et sécurité",
    paragraphs: [
      "Les données de compte sont conservées tant que le compte est actif. Les soumissions et résultats de concours sont conservés pour l'archivage des compétitions. Les données sont hébergées au Canada et protégées par des contrôles d'accès, le chiffrement en transit et des sauvegardes régulières.",
    ],
  },
  {
    id: "partage",
    title: "Partage avec des tiers",
    paragraphs: [
      "Nous ne vendons aucune donnée personnelle. Certains fournisseurs d'infrastructure (hébergement, envoi de courriels transactionnels) peuvent traiter des données pour notre compte, dans le cadre de contrats qui encadrent leur usage.",
    ],
  },
  {
    id: "droits",
    title: "Tes droits",
    paragraphs: [
      "Tu peux demander l'accès, la correction ou la suppression de tes données à tout moment. Tu peux également retirer ton consentement aux communications. Les demandes sont traitées dans un délai raisonnable après vérification de l'identité.",
    ],
  },
  {
    id: "contact",
    title: "Nous contacter",
    paragraphs: [
      "Pour toute question relative à la confidentialité, écris à l'équipe du club à l'adresse ci-dessous. Cette politique peut être mise à jour ; la date de dernière révision est indiquée en haut de la page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="container-page pb-20 pt-10 sm:pt-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <p className="eyebrow text-brand">Confidentialité</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Cette politique explique quelles données le hub et l&apos;arène du
            GDG ÉTS collectent, pourquoi elles le sont et comment exercer tes
            droits.
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
            Dernière mise à jour : 3 novembre 2026
          </p>

          <div className="mt-10 max-w-[72ch] space-y-10">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="border-l-[3px] border-brand pl-3 font-display text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 pl-3">
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
                  <div className="mt-5 flex flex-col gap-3 rounded-xl border border-line bg-surface p-4 pl-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <Mail className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">Équipe GDG ÉTS</p>
                        <a
                          href="mailto:gdg-ets@etsmtl.ca"
                          className="text-xs text-brand hover:underline"
                        >
                          gdg-ets@etsmtl.ca
                        </a>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <ShieldCheck className="size-4 text-success" aria-hidden="true" />
                      Réponse sous 7 jours
                    </span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-line bg-surface p-5">
            <p className="eyebrow text-muted">Sommaire</p>
            <nav aria-label="Sommaire de la politique" className="mt-3">
              <ol className="space-y-2 text-sm">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 text-muted transition-colors hover:text-brand"
                    >
                      <span className="font-mono text-[10px] text-muted/60">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted">
              Consulte aussi notre{" "}
              <Link href="/about" className="font-medium text-brand hover:underline">
                code de conduite
              </Link>{" "}
              et notre{" "}
              <Link href="/about" className="font-medium text-brand hover:underline">
                mission
              </Link>
              .
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
