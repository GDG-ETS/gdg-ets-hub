# GDG ÉTS Hub

Hub public de la communauté Google Developer Groups on Campus de l'École de
technologie supérieure, à Montréal. L'application est en français et présente
les activités réelles du chapitre : le retour sur le DevFest Montréal 2026,
l'atelier LeetCode du 9 novembre 2026, le meetup GDG Cloud chez Vooban et le
lancement officiel du club.

Le projet est un site éditorial statique, sans compte, sans base de données et
sans concours.

## Stack

- Next.js 16.4.5, React 19.3, App Router
- TypeScript, Tailwind CSS v4
- `lucide-react` pour l'iconographie
- Aucune authentification, aucune base de données, aucun CMS, aucun service
  externe

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

## Routes

| Route | Page |
| --- | --- |
| `/` | Accueil : prochain rendez-vous, feed d'articles et liens du club |
| `/blog` | Archive des cinq articles |
| `/blog/[slug]` | Article complet avec sommaire, partage et ressources |
| `/events` | Événements à venir, retours et formats de participation |
| `/panels` | Conférences et panels du chapitre |
| `/about` | Mission, équipe fondatrice et mentors |
| `/privacy` | Politique de confidentialité |

## Contenu réel

Les articles et les événements proviennent des publications du club :

- **Retour sur le DevFest Montréal 2026** — participation du 6 novembre 2026 à
  l'Espace Ax.c, 800 rue du Square-Victoria. Plus de 12 heures sur le terrain,
  la plénière, la session Flight Mode AI avec Jhin Lee, les ateliers Cloud Run
  avec Rishab Kumar et Gemini + Apps Script avec Laudrup Cyprien Tankeu, et
  Oumaima El khayiri sur scène.
- **Atelier LeetCode** — lundi 9 novembre 2026, 12 h à 13 h 30, ÉTS Pavillon A,
  salle A-1302. Premier événement officiel du GDG ÉTS, gratuit, avec tuteurs.
- **GDG ÉTS au DevFest Montréal 2026** — annonce du 28 octobre 2026 de la prise
  de parole d'Oumaima El khayiri sur la mission de GDG on Campus, aux côtés de
  Rebecca Abi Chahine, Michael Persico et Daniel Wei.
- **Meetup GDG Cloud Montréal chez Vooban** — retour sur la soirée du 2 octobre
  2026 avec Ayoub Marouf, Emilien Busson et Patrick Nguyen.
- **Lancement du chapitre** — annonce du 30 septembre 2026, après l'atelier du
  21 septembre. Équipe fondatrice de six personnes et trois mentors.

Les couvertures d'articles sont des images d'illustration, pas des photos des
événements.

## Fonctionnalités

- Feed d'articles avec catégories, dates et temps de lecture.
- Pages d'article en colonne de lecture, avec sommaire et liens de partage.
- Partage d'article par copie du lien, LinkedIn et X.
- Agenda des événements à venir et archive des activités passées.
- Navigation mobile et menu déroulant accessible.
- Aucun contrôle factice : pas de bascule FR/EN, pas de connexion, pas de
  recherche.

## Design

Direction minimaliste, proche d'un blog de développeurs : fond blanc, filets
fins, typographie Inter, feed compact et lecture sur une colonne de 700 px.

- Encre `#0B0F14`, texte secondaire `#4B5563`, filets `#E5E7EB`
- Bleu d'action `#1A73E8` et bleu foncé `#174EA6`
- Inter pour le texte, Space Grotesk pour le logo, JetBrains Mono pour les
  libellés techniques
- Accueil et événements en deux colonnes à partir de 1024 px
- Article sur 760 px (titre, image) et 700 px (corps), avec un rail de 220 px
  seulement à partir de 1280 px; sommaire escamotable en dessous

## Structure

```text
app/
  (hub)/              # accueil, blog, événements, conférences, à propos, confidentialité
  layout.tsx          # polices et métadonnées globales
  globals.css         # tokens Tailwind et styles de base
components/           # header, footer, feed, cartes d'article, événements, partage
lib/
  data.ts             # articles, événements et données du DevFest
  post-content.ts     # corps éditorial des articles
public/covers/        # images d'illustration
```

## Limites

Cette version est volontairement limitée au hub public :

- Aucun compte, formulaire, inscription ou donnée personnelle.
- Aucune administration, aucun CMS et aucune base de données.
- Aucun concours, classement, soumission ou juge de code.
- Aucun lien Discord, GitHub ou courriel officiel n'est publié tant qu'il n'a
  pas été confirmé.

## Déploiement

Le site produit un build Next.js standard et peut être hébergé sur Google Cloud.
Le déploiement GCP n'est pas encore configuré dans ce dépôt.
