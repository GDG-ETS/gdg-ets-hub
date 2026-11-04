# GDG ÉTS — Hub & Arène

Première maquette fonctionnelle du hub de la communauté GDG ÉTS et de son arène de
programmation compétitive. L'application est en français, utilise des données
fictives et couvre le parcours public complet — de la lecture d'un article à la
soumission d'un problème.

## Stack

- Next.js 16.4.5, React 19.3, App Router
- TypeScript, Tailwind CSS v4
- CodeMirror 6 (`@uiw/react-codemirror`) pour l'éditeur de code
- `lucide-react` pour l'iconographie
- Aucune base de données, aucun service d'authentification, aucun juge réel

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build   # build de production
npm run lint    # ESLint
npm start       # servir le build
```

## Parcours couverts

| Route | Écran |
| --- | --- |
| `/` | Accueil éditorial : prochain panel, concours en cours, articles, événements |
| `/panels` | Présentation des panels, récapitulatifs et archives |
| `/blog` | Index des articles avec article à la une |
| `/blog/[slug]` | Article complet, sommaire, partage, intervenants, ressources |
| `/events` | Agenda, informations pratiques et rendez-vous récurrents |
| `/about` | Mission, valeurs, équipe et moyens de rejoindre le club |
| `/privacy` | Politique de confidentialité |
| `/arena` | Tableau de bord participant : concours, statistiques, soumissions |
| `/arena/contest` | Aperçu du concours : règles, problèmes, annonces, jury |
| `/arena/problems/[label]` | Espace de travail : énoncé + éditeur CodeMirror |
| `/arena/leaderboard` | Classement ICPC, gel, export CSV |

## Fonctionnalités de la maquette

- Countdowns en direct (concours et gel du classement).
- Éditeur CodeMirror avec C++17, Python 3 et Java 17, autosauvegarde simulée.
- Exécution d'exemple et soumission simulées avec verdicts et détails de tests.
- Classement ICPC avec cellules résolues / tentées / gelées et ligne du participant.
- Export CSV réel du classement.
- Partage d'article (copie du lien, LinkedIn, X).
- Navigation mobile, menu déroulant et onglets énoncé/code.
- Toutes les pages sont prérendues statiquement à partir des données de démonstration.

## Design

Le design a été généré avec Google Stitch, puis implémenté en React/Tailwind.

- Projet Stitch : **GDG ETS Hub & Arena** (`projects/6172038841432772576`)
- Design system : `assets/cedc574b4aeb4fe68cbd4c23b0abf358`
- Références visuelles : [`design/screens/`](design/screens/) — accueil, article,
  tableau de bord, concours, espace de travail, classement et accueil mobile.

Direction visuelle : fond `#F7F8FA`, encre `#0B0F14`, bleu Google `#1A73E8`,
Space Grotesk pour les titres, Inter pour le texte, JetBrains Mono pour les
chiffres et le code. Le hub est éditorial et aéré ; l'arène est dense et
data-first, avec un bandeau presque noir.

## Structure

```text
app/
  (hub)/              # hub public : accueil, blog, panels, événements, à propos
  (arena)/arena/      # tableau de bord, concours, problèmes, classement
  layout.tsx          # polices et métadonnées globales
  globals.css         # tokens Tailwind, styles de base, CodeMirror
components/           # header/footer, cartes, scoreboard, éditeur, countdown…
lib/
  data.ts             # articles, événements, concours, problèmes, classements
  post-content.ts     # corps éditorial des articles
design/screens/       # captures de référence générées par Stitch
```

## Données et limites

Cette version est volontairement **mock-only** :

- Les comptes, inscriptions et soumissions ne sont pas persistés.
- Le juge de code n'existe pas : les verdicts sont simulés côté client.
- L'administration (`/admin`), l'authentification, PostgreSQL, le CMS et le
  déploiement GCP ne sont pas encore branchés.
- Les liens Discord, GitHub, courriel et ressources sont des liens de
  démonstration.

## Prochaines étapes

1. Brancher Better Auth (courriel/mot de passe + Google) et PostgreSQL.
2. Remplacer `lib/data.ts` par des requêtes serveur et un CMS maison.
3. Implémenter le juge sandboxé (go-judge) sur une VM dédiée.
4. Construire l'administration : concours, problèmes, tests, annonces, rejudge.
5. Ajouter la file de soumissions (pg-boss) et le polling du classement.
6. Déployer sur Cloud Run + Cloud SQL dans `northamerica-northeast1`.

Le pack de spécifications complet se trouve dans
`~/.opencode/plan/gdg-ets-platform/`.
