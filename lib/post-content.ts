export type PanelSpeaker = {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  tag: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite: string }
  | {
      type: "takeaways";
      items: { icon: "shield" | "key" | "zap" | "users"; title: string; text: string }[];
    }
  | { type: "speakers"; items: PanelSpeaker[] }
  | { type: "video" }
  | { type: "resources"; items: { label: string; kind: string }[] }
  | { type: "code"; language: string; code: string };

export type ArticleBody = {
  lead: string[];
  blocks: ArticleBlock[];
};

export const articleBodies: Record<string, ArticleBody> = {
  "retour-panel-cybersecurite": {
    lead: [
      "À l'heure où les architectures distribuées s'étendent sur des clusters multirégionaux, la sécurité ne se résume plus à un pare-feu. Le panel du GDG ÉTS a réuni trois spécialistes de terrain pour démonter les idées reçues sur la défense moderne.",
      "Entre l'explosion des attaques ciblant la supply chain logicielle et la généralisation de l'IA générative dans les outils internes, les équipes doivent repenser leurs hypothèses de base. Voici ce qu'il faut retenir de cette soirée.",
    ],
    blocks: [
      { type: "heading", id: "ce-quon-retient", text: "Ce qu'on retient" },
      {
        type: "takeaways",
        items: [
          {
            icon: "shield",
            title: "Le périmètre classique n'existe plus",
            text: "Les réseaux d'entreprise s'étendent désormais au-delà du bureau. Zero Trust impose de vérifier chaque identité et chaque appareil, quel que soit l'endroit d'où la requête provient.",
          },
          {
            icon: "key",
            title: "Les secrets codés en dur restent la faille la plus exploitée",
            text: "Un secret versionné dans Git est compromis dès le premier commit. Rotation automatique, coffres de secrets et détection pré-commit sont devenus des contrôles de base.",
          },
          {
            icon: "zap",
            title: "Automatiser la détection prime sur la réaction",
            text: "La réduction du temps de détection et de réponse change la donne. Les playbooks automatisés contiennent l'incident avant même qu'un humain n'ouvre son ordinateur.",
          },
          {
            icon: "users",
            title: "Le facteur humain reste le premier vecteur",
            text: "L'ingénierie sociale et l'usurpation de session restent efficaces. Une culture de signalement sans blâme vaut mieux qu'une formation annuelle de conformité.",
          },
        ],
      },
      {
        type: "quote",
        text: "« En production, la question n'est plus de savoir si votre infrastructure sera compromise, mais combien de minutes il vous faudra pour isoler le cluster sans interrompre les utilisateurs. »",
        cite: "Sophie Tremblay, architecte sécurité cloud",
      },
      { type: "heading", id: "intervenants", text: "Les intervenants" },
      {
        type: "speakers",
        items: [
          {
            name: "Sophie Tremblay",
            role: "Spécialiste sécurité et identités cloud",
            company: "CloudNord",
            initials: "ST",
            color: "#1A73E8",
            tag: "Experte principale",
          },
          {
            name: "Marc-Antoine Côté",
            role: "Ingénieur détection et réponse",
            company: "DéfenseLab",
            initials: "MC",
            color: "#34A853",
            tag: "Invité technique",
          },
          {
            name: "Yasmine Belkacem",
            role: "Architecte DevSecOps",
            company: "ShipFactory",
            initials: "YB",
            color: "#EA4335",
            tag: "Invitée",
          },
        ],
      },
      { type: "heading", id: "enregistrement", text: "Enregistrement de la session" },
      { type: "video" },
      { type: "heading", id: "ressources", text: "Supports et ressources" },
      {
        type: "resources",
        items: [
          { label: "Slides de la présentation (PDF, 14 Mo)", kind: "PDF" },
          { label: "Photos de l'événement (Flickr ÉTS)", kind: "Galerie" },
        ],
      },
    ],
  },
  "deployer-nextjs-cloud-run": {
    lead: [
      "Déployer une application Next.js sur Cloud Run demande moins de configuration qu'on ne le pense, mais quelques décisions structurantes font toute la différence entre un déploiement fragile et une plateforme que l'équipe peut exploiter sereinement.",
      "Ce guide reprend la configuration utilisée pour le hub que vous lisez en ce moment : image conteneur minimale, variables d'environnement gérées par Secret Manager et pipeline GitHub Actions.",
    ],
    blocks: [
      { type: "heading", id: "pourquoi-cloud-run", text: "Pourquoi Cloud Run" },
      {
        type: "p",
        text: "Cloud Run exécute un conteneur standard, sans serveur à administrer, et ne facture que le temps d'exécution. Pour un club étudiant avec quelques centaines de visiteurs par semaine, c'est un compromis idéal entre simplicité et coût.",
      },
      {
        type: "p",
        text: "Le service s'adapte automatiquement à la charge, mais il faut penser aux limites d'instances et à la concurrence. Une petite application Node.js tient largement dans 512 Mo de mémoire avec une concurrence de 80 requêtes par instance.",
      },
      { type: "heading", id: "conteneuriser", text: "Conteneuriser l'application" },
      {
        type: "p",
        text: "Le build multi-étapes sépare l'installation des dépendances, la compilation et l'exécution. L'image finale ne contient que le serveur Next.js et ses dépendances de production.",
      },
      {
        type: "code",
        language: "dockerfile",
        code: `FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 8080
CMD ["node", "server.js"]`,
      },
      { type: "heading", id: "deployer", text: "Déployer avec GitHub Actions" },
      {
        type: "list",
        items: [
          "Authentifier le workflow avec Workload Identity Federation, sans clé de service téléchargée.",
          "Construire et pousser l'image dans Artifact Registry avec un tag basé sur le SHA du commit.",
          "Déployer la révision sur Cloud Run et router le trafic une fois le health check passé.",
          "Conserver les variables sensibles dans Secret Manager et les monter comme variables d'environnement.",
        ],
      },
      {
        type: "quote",
        text: "« Une image immuable et un tag de commit, c'est ce qui permet de répondre à la question : quelle version tourne réellement en production ? »",
        cite: "Notes d'atelier, GDG ÉTS",
      },
      {
        type: "p",
        text: "Le pipeline complet s'exécute en moins de quatre minutes. Pour les environnements de préproduction, un déclencheur séparé sur la branche principale permet de valider les migrations avant la mise en production.",
      },
      { type: "heading", id: "ressources", text: "Pour aller plus loin" },
      {
        type: "resources",
        items: [
          { label: "Dépôt de démonstration (GitHub)", kind: "Code" },
          { label: "Documentation Cloud Run (Google Cloud)", kind: "Docs" },
        ],
      },
    ],
  },
  "coulisses-premier-concours": {
    lead: [
      "Un concours de programmation réussi se joue bien avant le départ. Derrière les cinq problèmes et le classement en direct, il y a un juge, des jeux de tests impitoyables et une bonne dose de café.",
      "Retour sur les décisions techniques qui ont rendu le premier concours du GDG ÉTS possible, et sur ce que nous ferons différemment la prochaine fois.",
    ],
    blocks: [
      { type: "heading", id: "juge-isole", text: "Un juge isolé, mais réactif" },
      {
        type: "p",
        text: "Chaque soumission part dans un conteneur éphémère avec des limites strictes de temps, de mémoire et de processus. Le code compile, s'exécute contre les tests, puis le conteneur est détruit. Aucune soumission ne partage d'état avec la suivante.",
      },
      {
        type: "p",
        text: "Le point délicat n'est pas l'isolation, mais la latence. Avec une file de messages et un pool de workers, le verdict revient en quelques secondes même quand quarante équipes soumettent en même temps.",
      },
      { type: "heading", id: "jeux-de-tests", text: "Des jeux de tests qui racontent une histoire" },
      {
        type: "list",
        items: [
          "Un test d'exemple lisible, pour valider la compréhension de l'énoncé.",
          "Des tests de bord : tableau vide, k = 1, valeurs négatives, doublons.",
          "Un test de performance calibré pour éliminer les solutions quadratiques.",
          "Un test anti-triche avec une sortie déterministe et des entrées générées.",
        ],
      },
      { type: "heading", id: "notation-icpc", text: "La notation ICPC expliquée" },
      {
        type: "p",
        text: "Le classement privilégie le nombre de problèmes résolus, puis la pénalité cumulée. Chaque problème accepté ajoute le temps écoulé depuis le début du concours, plus vingt minutes par tentative rejetée. Les problèmes non résolus n'ajoutent aucune pénalité.",
      },
      {
        type: "quote",
        text: "« Le gel du classement n'est pas là pour cacher l'information, mais pour préserver le suspense des dernières minutes. »",
        cite: "L'équipe organisatrice",
      },
      {
        type: "p",
        text: "Pour la prochaine édition, nous voulons ajouter un mode entraînement ouvert toute l'année et des explications de solution rédigées par les auteurs. L'objectif reste le même : rendre la compétition accessible à tous les niveaux.",
      },
    ],
  },
  "pourquoi-nous-lancons-larene": {
    lead: [
      "L'Arène est née d'un constat simple : beaucoup d'étudiants veulent pratiquer la programmation compétitive, mais peu savent par où commencer. Les plateformes existantes sont excellentes, parfois intimidantes, et rarement connectées à la vie du club.",
      "Nous avons donc construit un espace de pratique et de compétition à l'échelle de l'ÉTS, avec des problèmes en français, des explications et un classement qui met la communauté en valeur.",
    ],
    blocks: [
      { type: "heading", id: "pratiquer", text: "Pratiquer sans friction" },
      {
        type: "p",
        text: "L'Arène propose des problèmes classés par difficulté, des entraînements libres et des concours périodiques. Un étudiant peut s'inscrire avec son courriel de l'ÉTS, choisir un problème et soumettre du C++17, du Python 3 ou du Java 17 en quelques clics.",
      },
      {
        type: "list",
        items: [
          "Un éditeur intégré, sans installation locale.",
          "Des verdicts clairs et un historique de soumissions.",
          "Des concours ICPC avec classement en direct et gel du classement.",
          "Des solutions et des explications rédigées par la communauté.",
        ],
      },
      { type: "heading", id: "communaute", text: "Une compétition à taille humaine" },
      {
        type: "p",
        text: "Nous ne cherchons pas à concurrencer les grandes plateformes mondiales. L'Arène est un terrain d'entraînement local, où l'on peut poser une question sans se sentir jugé et où les meilleurs partagent leurs approches.",
      },
      {
        type: "quote",
        text: "« Le meilleur problème, c'est celui qui te donne envie de comprendre la solution, même après trois erreurs de compilation. »",
        cite: "L'équipe GDG ÉTS",
      },
      {
        type: "p",
        text: "Le premier concours d'automne est déjà complet. Les entraînements ouverts reprennent en novembre, et une finale inter-programmes est prévue pour la fin de la session.",
      },
    ],
  },
};
