# GDG ÉTS — Hub & Arène

Maquette fonctionnelle du hub de la communauté GDG ÉTS et de son arène de
programmation compétitive. L'application est en français et présente les
premières activités réelles du chapitre : l'atelier LeetCode du 9 novembre 2026,
la participation au DevFest Montréal 2026, le meetup GDG Cloud chez Vooban et le
lancement officiel du club.

L'arène est une **démonstration** : le concours, les soumissions, les verdicts et
le classement sont simulés. Un bandeau l'indique sur toutes ses pages.

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
| `/` | Accueil : atelier LeetCode à la une, DevFest, articles et prochains événements |
| `/panels` | Conférences & panels : DevFest, récapitulatifs et jalons de la première session |
| `/blog` | Index des articles avec article à la une |
| `/blog/[slug]` | Article complet, sommaire, partage, intervenants, ressources |
| `/events` | Agenda, retours sur les activités et formats de participation |
| `/about` | Mission, équipe fondatrice, mentors et moyens de participer |
| `/privacy` | Politique de confidentialité et note sur la maquette |
| `/arena` | Tableau de bord de démonstration : concours, statistiques, soumissions |
| `/arena/contest` | Aperçu du concours fictif : règles, problèmes, annonces, jury |
| `/arena/problems/[label]` | Espace de travail : énoncé + éditeur CodeMirror |
| `/arena/leaderboard` | Classement ICPC, gel, export CSV |

## Contenu réel

Les articles et les événements proviennent des publications du club :

- **Atelier LeetCode** — lundi 9 novembre 2026, 12 h à 13 h 30, ÉTS Pavillon A,
  salle A-1302. Premier événement officiel du GDG ÉTS, gratuit, avec tuteurs.
- **DevFest Montréal 2026** — vendredi 6 novembre 2026, Espace Ax.c, 800 rue du
  Square-Victoria. Oumaima El khayiri présente la table ronde sur GDG on Campus
  avec Rebecca Abi Chahine, Michael Persico et Daniel Wei.
- **Meetup GDG Cloud Montréal chez Vooban** — retour sur la soirée du 2 octobre
  2026 avec Ayoub Marouf, Emilien Busson et Patrick Nguyen.
- **Lancement du chapitre** — annonce du 30 septembre 2026, après l'atelier du
  21 septembre. Équipe fondatrice de six personnes et trois mentors.

Les couvertures d'articles sont des images d'illustration, pas des photos des
événements.

## Fonctionnalités de la maquette

- Countdowns en direct (concours et gel du classement).
- Éditeur CodeMirror avec C++17, Python 3 et Java 17, autosauvegarde simulée.
- Exécution d'exemple et soumission simulées avec verdicts et détails de tests.
- Classement ICPC avec cellules résolues / tentées / gelées et ligne du participant.
- Export CSV réel du classement.
- Partage d'article (copie du lien, LinkedIn, X).
- Navigation mobile, menu déroulant et onglets énoncé/code.
- Bandeau « Démo » sur l'ensemble de l'arène.

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
  (hub)/              # accueil, conférences, blog, événements, à propos, confidentialité
  (arena)/arena/      # tableau de bord, concours, problèmes, classement
  layout.tsx          # polices et métadonnées globales
  globals.css         # tokens Tailwind, styles de base, CodeMirror
components/           # header/footer, cartes, scoreboard, éditeur, countdown…
lib/
  data.ts             # articles, événements, équipe, concours, problèmes, classements
  post-content.ts     # corps éditorial des articles
design/screens/       # captures de référence générées par Stitch
```

## Données et limites

Cette version est volontairement **mock-only** :

- Les comptes, inscriptions, profils et soumissions ne sont pas persistés.
- Le juge de code n'existe pas : les verdicts sont simulés côté client.
- Le concours « Hackathon d'automne 2026 », le participant de démonstration et le
  classement sont fictifs.
- L'administration (`/admin`), l'authentification, PostgreSQL, le CMS et le
  déploiement GCP ne sont pas encore branchés.
- Aucun lien Discord, GitHub ou courriel officiel n'est publié tant qu'il n'a pas
  été confirmé. Le seul lien externe d'événement est la billetterie du DevFest
  fournie par le club.

## Prochaines étapes

1. Brancher Better Auth (courriel/mot de passe + Google) et PostgreSQL.
2. Remplacer `lib/data.ts` par des requêtes serveur et un CMS maison.
3. Implémenter le juge sandboxé (go-judge) sur une VM dédiée.
4. Construire l'administration : concours, problèmes, tests, annonces, rejudge.
5. Ajouter la file de soumissions (pg-boss) et le polling du classement.
6. Déployer sur Cloud Run + Cloud SQL dans `northamerica-northeast1`.

Le pack de spécifications complet se trouve dans
`~/.opencode/plan/gdg-ets-platform/`.
