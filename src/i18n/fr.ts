import type en from "./en";

const fr: typeof en = {
  header: {
    backToTop: "Retour en haut",
    sections: "Sections",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    otherLanguage: "English",
  },
  sections: {
    about: "À propos",
    work: "Projets",
    skills: "Compétences",
    contact: "Contact",
  },
  hero: {
    titles: {
      developer: "Développeuse full-stack",
      designer: "Designer UX/UI",
    },
    statement:
      "Je conçois et développe des applications web de bout en bout, de la couche de données jusqu’au moindre état de survol.",
    photoAlt: "Portrait de Taisiia Fedorova",
  },
  about: {
    paragraphs: [
      "Lycéenne à Kyiv, je me forme au développement full-stack avec GoIT et je conçois des applications web de bout en bout — React et TypeScript côté front, Python et Flask côté back. Mon attention se porte sur le point de rencontre entre design et ingénierie — là où une interface tient, ou cède.",
      "Je pars du système, non de l’écran. Les tokens avant les composants, les contraintes avant la décoration. On retrouve ce réflexe dans ce que je construis — RepoLens est né de l’envie de voir la structure d’une base de code plutôt que de la déduire de son arborescence.",
      "En dehors du code, la lecture et l’écriture tiennent une place centrale, en français comme en anglais. Ce versant de mon travail — un livre, des recherches — trouvera sa place ici quand il méritera d’être montré.",
    ],
    facts: {
      location: { label: "Lieu", value: "Kyiv, Ukraine" },
      languages: {
        label: "Langues",
        value: "Ukrainien, russe, anglais, français",
      },
      studies: { label: "Formation", value: "Développement full-stack, GoIT" },
    },
  },
  work: {
    role: "Rôle",
    stack: "Stack",
    status: "Statut",
    year: "Année",
    repo: "Code",
    demo: "Démo",
    repoLens: {
      blurb:
        "Collez l’URL de n’importe quel dépôt GitHub public, et RepoLens transforme son historique de commits en graphe interactif. La taille de chaque fichier reflète la fréquence de ses modifications, et les arêtes relient les fichiers qui évoluent régulièrement ensemble — un signal de co-changement qu’aucune arborescence ne laisse voir, mais qui révèle le couplage réel d’une base de code. Un clic sur un fichier affiche ses derniers commits, accompagnés d’un résumé généré par IA de son évolution récente.",
      notes:
        "Il a fallu fusionner l’historique des fichiers renommés en un seul nœud, sans quoi le graphe aurait scindé en deux l’identité d’un même fichier. La disposition par forces a demandé un réglage manuel de la physique avant que les étiquettes ne cessent de se fondre dans le bruit. Et une fois le projet déployé, le trafic réel a révélé un problème d’accès concurrent sur un gros dépôt — deux processus écrivant simultanément en base, déclenchés par une seule requête lente.",
      role: "Design et développement",
      status: "En ligne",
    },
  },
  skills: {
    languages: "Langages",
    frontEnd: "Front-end",
    backEnd: "Back-end",
    design: "Design",
    tooling: "Outils",
    responsiveLayout: "Intégration responsive",
    restApis: "API REST",
    designSystems: "Design systems",
    typography: "Typographie",
  },
  contact: {
    copied: "Copié",
    status: (time: string) =>
      `Ouverte aux stages et aux collaborations — ${time}, heure de Kyiv`,
  },
};

export default fr;
