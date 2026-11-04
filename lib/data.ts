export type PostCategory = "PANEL" | "TUTORIEL" | "CONCOURS";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  categoryLabel: string;
  date: string;
  dateISO: string;
  readingMinutes: number;
  cover: string;
  coverAlt: string;
  author: string;
  featured?: boolean;
};

export type Event = {
  slug: string;
  day: string;
  month: string;
  type: string;
  title: string;
  time: string;
  location: string;
  online?: boolean;
};

export type Speaker = {
  name: string;
  role: string;
  initials: string;
  color: string;
};

export type ProblemCell =
  | { kind: "solved"; time: string }
  | { kind: "attempted"; attempts: number; time: string }
  | { kind: "frozen" }
  | { kind: "empty" };

export type StandingRow = {
  rank: number;
  handle: string;
  school: string;
  solved: number;
  penalty: number;
  cells: Record<"A" | "B" | "C" | "D" | "E", ProblemCell>;
  isYou?: boolean;
};

export type Submission = {
  id: string;
  problem: string;
  verdict: "AC" | "WA" | "TLE" | "CE" | "pending";
  language: string;
  time: string;
  date: string;
};

export type Problem = {
  label: "A" | "B" | "C" | "D" | "E";
  slug: string;
  title: string;
  tagline: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  solved?: boolean;
  attempts?: number;
  timeLimit: string;
  memoryLimit: string;
  points: number;
  statement: string[];
  input: string;
  output: string;
  constraints: string[];
  samples: { input: string; output: string; explanation?: string }[];
  starter: string;
};

export const posts: Post[] = [
  {
    slug: "retour-panel-cybersecurite",
    title: "Retour sur le panel cybersécurité",
    excerpt:
      "Analyse détaillée des systèmes distribués et vulnérabilités à l'échelle décortiquées lors de notre panel d'octobre.",
    category: "PANEL",
    categoryLabel: "Panel",
    date: "12 oct. 2026",
    dateISO: "2026-10-12",
    readingMinutes: 6,
    cover: "/covers/panel-cyber.jpg",
    coverAlt: "Écran de code et cadenas représentant la cybersécurité",
    author: "Équipe GDG ÉTS",
    featured: true,
  },
  {
    slug: "deployer-nextjs-cloud-run",
    title: "Déployer Next.js sur Cloud Run",
    excerpt:
      "Guide pas à pas sur la conteneurisation optimisée, la gestion des secrets et la configuration CI/CD via GitHub Actions.",
    category: "TUTORIEL",
    categoryLabel: "Tutoriel",
    date: "28 sept. 2026",
    dateISO: "2026-09-28",
    readingMinutes: 8,
    cover: "/covers/cloud-run.jpg",
    coverAlt: "Poste de travail avec du code sur plusieurs écrans",
    author: "Équipe GDG ÉTS",
  },
  {
    slug: "coulisses-premier-concours",
    title: "Les coulisses du premier concours",
    excerpt:
      "Immersion technique dans la conception des jeux de tests extrêmes, l'isolation des soumissions et la notation ICPC.",
    category: "CONCOURS",
    categoryLabel: "Concours",
    date: "14 sept. 2026",
    dateISO: "2026-09-14",
    readingMinutes: 5,
    cover: "/covers/concours.jpg",
    coverAlt: "Étudiants travaillant ensemble sur des ordinateurs",
    author: "Équipe GDG ÉTS",
  },
  {
    slug: "pourquoi-nous-lancons-larene",
    title: "Pourquoi nous lançons l'Arène",
    excerpt:
      "Une plateforme de pratique et de compétition pensée pour les étudiants de l'ÉTS, du premier problème jusqu'à la finale.",
    category: "CONCOURS",
    categoryLabel: "Concours",
    date: "2 sept. 2026",
    dateISO: "2026-09-02",
    readingMinutes: 4,
    cover: "/covers/atelier.jpg",
    coverAlt: "Atelier de programmation dans un local universitaire",
    author: "Équipe GDG ÉTS",
  },
];

export const events: Event[] = [
  {
    slug: "atelier-rust-webassembly",
    day: "25",
    month: "NOV",
    type: "Atelier technique",
    title: "Atelier : Rust & WebAssembly pour débutants",
    time: "18h00 – 20h30",
    location: "ÉTS, Local B-2210",
  },
  {
    slug: "conference-observabilite",
    day: "02",
    month: "DÉC",
    type: "Conférence invitée",
    title: "Conférence : Observabilité des systèmes distribués",
    time: "17h30 – 19h30",
    location: "ÉTS, Pavillon E",
  },
  {
    slug: "arene-ouverte-hiver",
    day: "15",
    month: "DÉC",
    type: "Session d'entraînement",
    title: "Arène ouverte : Entraînement ICPC d'hiver",
    time: "13h00 – 17h00",
    location: "En ligne & Salon étudiant",
    online: true,
  },
];

export const nextPanel = {
  title: "L'IA générative au-delà du hype",
  date: "18 novembre 2026",
  location: "ÉTS, Pavillon A (Amphi A-1600)",
  summary:
    "Retours d'expérience concrets d'ingénieurs sur le déploiement de modèles en production, la gestion de latence, les coûts d'inférence et l'intégration d'architectures réelles à grande échelle.",
  cover: "/covers/panel-ia.jpg",
  coverAlt: "Conférence technique dans un amphithéâtre universitaire",
  registerHref: "/panels#inscription",
};

export const contest = {
  slug: "hackathon-automne-2026",
  title: "Hackathon d'automne 2026",
  shortTitle: "Hackathon d'automne",
  status: "EN COURS" as const,
  format: "ICPC · 5 problèmes · 3 h",
  startLabel: "3 novembre 2026 · 18h00",
  remainingSeconds: 1 * 60 * 60 + 42 * 60 + 18,
  frozen: true,
  freezeRemainingSeconds: 42 * 60,
  registered: 42,
  penaltyMinutes: 20,
  freezeMinutes: 60,
  durationMinutes: 180,
  languages: ["C++17", "Python 3", "Java 17"],
};

export const problems: Problem[] = [
  {
    label: "A",
    slug: "somme-des-sous-tableaux",
    title: "Somme des sous-tableaux",
    tagline: "Fenêtre glissante",
    difficulty: "Facile",
    solved: true,
    timeLimit: "2,0 s",
    memoryLimit: "256 Mo",
    points: 100,
    statement: [
      "Étant donné un tableau d'entiers a de taille n et un entier k, calculez et affichez la somme de chaque sous-tableau contigu de longueur exacte k, de gauche à droite.",
    ],
    input:
      "La première ligne contient deux entiers n et k (1 ≤ k ≤ n ≤ 200 000). La seconde ligne contient n entiers séparés par des espaces a₁, a₂, …, aₙ (−10⁹ ≤ aᵢ ≤ 10⁹).",
    output:
      "Affichez les n − k + 1 sommes sur une seule ligne, séparées par des espaces. Chaque somme doit tenir dans un entier 64 bits signé (long long).",
    constraints: [
      "1 ≤ n ≤ 200 000",
      "1 ≤ k ≤ n",
      "−10⁹ ≤ aᵢ ≤ 10⁹",
      "Les sommes peuvent dépasser 2³¹ − 1 : utilisez long long ou int64_t.",
    ],
    samples: [
      {
        input: "5 3\n1 4 2 10 3",
        output: "7 16 15",
        explanation:
          "Sous-tableaux de longueur 3 : [1, 4, 2] = 7, [4, 2, 10] = 16, [2, 10, 3] = 15.",
      },
    ],
    starter: `#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    if (!(cin >> n >> k)) return 0;

    vector<long long> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }

    // Calcule la somme de la première fenêtre
    long long current_sum = 0;
    for (int i = 0; i < k; ++i) {
        current_sum += a[i];
    }
    cout << current_sum;

    // Fenêtre glissante O(n)
    for (int i = k; i < n; ++i) {
        current_sum += a[i] - a[i - k];
        cout << ' ' << current_sum;
    }
    cout << '\\n';

    return 0;
}
`,
  },
  {
    label: "B",
    slug: "chemins-minimaux",
    title: "Chemins minimaux",
    tagline: "Dijkstra",
    difficulty: "Moyen",
    solved: true,
    timeLimit: "2,0 s",
    memoryLimit: "256 Mo",
    points: 100,
    statement: [
      "On vous donne un graphe orienté pondéré positivement. Pour chaque sommet, calculez la distance minimale depuis la source 1.",
      "Si un sommet n'est pas atteignable, affichez −1.",
    ],
    input:
      "La première ligne contient n et m (1 ≤ n ≤ 100 000, 0 ≤ m ≤ 200 000). Les m lignes suivantes contiennent u, v et w : une arête de u vers v de poids w (1 ≤ w ≤ 10⁹).",
    output:
      "Affichez n entiers sur une ligne : la distance minimale depuis le sommet 1 vers chaque sommet, ou −1 si le sommet est inatteignable.",
    constraints: ["1 ≤ n ≤ 100 000", "0 ≤ m ≤ 200 000", "1 ≤ w ≤ 10⁹"],
    samples: [
      {
        input: "4 4\n1 2 5\n1 3 2\n3 2 1\n2 4 3",
        output: "0 3 2 6",
        explanation:
          "Le chemin 1 → 3 → 2 coûte 3, meilleur que 1 → 2 qui coûte 5.",
      },
    ],
    starter: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    vector<vector<pair<int, long long>>> adj(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        long long w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
    }

    // TODO : Dijkstra avec priority_queue

    return 0;
}
`,
  },
  {
    label: "C",
    slug: "graphe-pondere",
    title: "Graphe pondéré",
    tagline: "Programmation dynamique",
    difficulty: "Moyen",
    attempts: 2,
    timeLimit: "2,0 s",
    memoryLimit: "256 Mo",
    points: 100,
    statement: [
      "Un graphe pondéré est donné sous forme de matrice d'adjacence. Déterminez s'il est symétrique et calculez la somme des poids du chemin le plus court entre deux sommets.",
    ],
    input:
      "La première ligne contient n (1 ≤ n ≤ 500). Les n lignes suivantes contiennent n entiers : la matrice d'adjacence.",
    output:
      "Affichez OUI ou NON pour la symétrie, puis la distance minimale entre 1 et n.",
    constraints: ["1 ≤ n ≤ 500", "0 ≤ w ≤ 10⁶"],
    samples: [
      {
        input: "3\n0 2 5\n2 0 1\n5 1 0",
        output: "OUI 3",
        explanation: "La matrice est symétrique ; 1 → 2 → 3 coûte 3.",
      },
    ],
    starter: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<vector<long long>> g(n, vector<long long>(n));
    for (auto &row : g)
        for (auto &x : row) cin >> x;

    // TODO

    return 0;
}
`,
  },
  {
    label: "D",
    slug: "arbre-couvrant-dynamique",
    title: "Arbre couvrant dynamique",
    tagline: "Union-find",
    difficulty: "Moyen",
    attempts: 0,
    timeLimit: "2,0 s",
    memoryLimit: "256 Mo",
    points: 100,
    statement: [
      "On ajoute des arêtes une par une à un graphe initialement vide. Après chaque ajout, indiquez si le graphe reste acyclique.",
    ],
    input:
      "La première ligne contient n et q (1 ≤ n ≤ 200 000). Les q lignes suivantes contiennent u et v.",
    output:
      "Pour chaque ajout, affichez OUI si l'arête crée un cycle, NON sinon.",
    constraints: ["1 ≤ n ≤ 200 000", "1 ≤ q ≤ 200 000"],
    samples: [
      {
        input: "3 3\n1 2\n2 3\n1 3",
        output: "NON NON OUI",
        explanation: "La troisième arête ferme le cycle 1 → 2 → 3 → 1.",
      },
    ],
    starter: `#include <bits/stdc++.h>
using namespace std;

struct DSU {
    vector<int> p, r;
    DSU(int n) : p(n + 1), r(n + 1, 0) {
        iota(p.begin(), p.end(), 0);
    }
    int find(int x) { return p[x] == x ? x : p[x] = find(p[x]); }
    bool unite(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;
        if (r[a] < r[b]) swap(a, b);
        p[b] = a;
        if (r[a] == r[b]) ++r[a];
        return true;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    DSU dsu(n);

    while (q--) {
        int u, v;
        cin >> u >> v;
        cout << (dsu.unite(u, v) ? "NON" : "OUI") << '\\n';
    }

    return 0;
}
`,
  },
  {
    label: "E",
    slug: "optimisation-flux-max",
    title: "Optimisation de flux max",
    tagline: "Flots / Dinic",
    difficulty: "Difficile",
    attempts: 0,
    timeLimit: "3,0 s",
    memoryLimit: "512 Mo",
    points: 100,
    statement: [
      "Calculez le flux maximal entre la source 1 et le puits n dans un réseau de transport.",
    ],
    input:
      "La première ligne contient n et m. Les m lignes suivantes contiennent u, v et c, une arête de capacité c.",
    output: "Affichez la valeur du flux maximal.",
    constraints: ["2 ≤ n ≤ 500", "1 ≤ m ≤ 5 000", "1 ≤ c ≤ 10⁹"],
    samples: [
      {
        input: "4 5\n1 2 3\n1 3 2\n2 3 1\n2 4 2\n3 4 3",
        output: "5",
        explanation: "Le flux maximal est 5.",
      },
    ],
    starter: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    // TODO : Dinic

    return 0;
}
`,
  },
];

export const standings: StandingRow[] = [
  {
    rank: 1,
    handle: "algorunner",
    school: "ÉTS",
    solved: 4,
    penalty: 214,
    cells: {
      A: { kind: "solved", time: "00:18" },
      B: { kind: "solved", time: "00:42" },
      C: { kind: "solved", time: "01:14" },
      D: { kind: "solved", time: "01:38" },
      E: { kind: "attempted", attempts: 2, time: "01:52" },
    },
  },
  {
    rank: 2,
    handle: "sami_b",
    school: "Div. 1",
    solved: 3,
    penalty: 182,
    isYou: true,
    cells: {
      A: { kind: "solved", time: "00:18" },
      B: { kind: "solved", time: "00:47" },
      C: { kind: "attempted", attempts: 2, time: "01:12" },
      D: { kind: "frozen" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 3,
    handle: "emma.codes",
    school: "ÉTS",
    solved: 3,
    penalty: 195,
    cells: {
      A: { kind: "solved", time: "00:22" },
      B: { kind: "solved", time: "00:55" },
      C: { kind: "solved", time: "01:28" },
      D: { kind: "attempted", attempts: 1, time: "01:41" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 4,
    handle: "thomas_r",
    school: "ÉTS",
    solved: 3,
    penalty: 240,
    cells: {
      A: { kind: "solved", time: "00:30" },
      B: { kind: "solved", time: "01:05" },
      C: { kind: "solved", time: "01:40" },
      D: { kind: "attempted", attempts: 3, time: "01:55" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 5,
    handle: "léa_dev",
    school: "ÉTS",
    solved: 2,
    penalty: 110,
    cells: {
      A: { kind: "solved", time: "00:15" },
      B: { kind: "solved", time: "00:55" },
      C: { kind: "attempted", attempts: 1, time: "01:02" },
      D: { kind: "frozen" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 6,
    handle: "nathan",
    school: "ÉTS",
    solved: 2,
    penalty: 128,
    cells: {
      A: { kind: "solved", time: "00:25" },
      B: { kind: "solved", time: "01:03" },
      C: { kind: "empty" },
      D: { kind: "attempted", attempts: 1, time: "01:30" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 7,
    handle: "camille",
    school: "ÉTS",
    solved: 2,
    penalty: 145,
    cells: {
      A: { kind: "solved", time: "00:35" },
      B: { kind: "solved", time: "01:10" },
      C: { kind: "attempted", attempts: 2, time: "01:22" },
      D: { kind: "empty" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 8,
    handle: "olivier",
    school: "ÉTS",
    solved: 1,
    penalty: 40,
    cells: {
      A: { kind: "solved", time: "00:40" },
      B: { kind: "attempted", attempts: 3, time: "01:12" },
      C: { kind: "attempted", attempts: 1, time: "01:25" },
      D: { kind: "empty" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 9,
    handle: "jade",
    school: "ÉTS",
    solved: 1,
    penalty: 52,
    cells: {
      A: { kind: "solved", time: "00:52" },
      B: { kind: "attempted", attempts: 2, time: "01:20" },
      C: { kind: "empty" },
      D: { kind: "empty" },
      E: { kind: "empty" },
    },
  },
  {
    rank: 10,
    handle: "felix",
    school: "ÉTS",
    solved: 1,
    penalty: 75,
    cells: {
      A: { kind: "solved", time: "01:15" },
      B: { kind: "attempted", attempts: 1, time: "01:35" },
      C: { kind: "empty" },
      D: { kind: "empty" },
      E: { kind: "empty" },
    },
  },
];

export const submissions: Submission[] = [
  {
    id: "sub_1042",
    problem: "A — Somme des sous-tableaux",
    verdict: "AC",
    language: "C++17",
    time: "0,42 s",
    date: "Aujourd'hui, 14:22",
  },
  {
    id: "sub_1039",
    problem: "C — Graphe pondéré",
    verdict: "WA",
    language: "Python 3",
    time: "1,18 s",
    date: "Hier, 19:40",
  },
  {
    id: "sub_1031",
    problem: "D — Arbre binaire maximal",
    verdict: "TLE",
    language: "Python 3",
    time: "2,01 s",
    date: "12 nov. 2026",
  },
  {
    id: "sub_1027",
    problem: "B — Préfixes et suffixes",
    verdict: "CE",
    language: "Java 17",
    time: "—",
    date: "10 nov. 2026",
  },
  {
    id: "sub_1024",
    problem: "A — Somme des sous-tableaux",
    verdict: "AC",
    language: "C++17",
    time: "0,45 s",
    date: "8 nov. 2026",
  },
];

export const speakers: Speaker[] = [
  { name: "Prof. Lapointe", role: "Responsable ICPC · ÉTS", initials: "PL", color: "#1A73E8" },
  { name: "Alexandre V.", role: "Testeur en chef · Jury", initials: "AV", color: "#34A853" },
  { name: "Sarah M.", role: "Ingénieure sécurité", initials: "SM", color: "#EA4335" },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProblem(label: string) {
  return problems.find((problem) => problem.label.toLowerCase() === label.toLowerCase());
}
