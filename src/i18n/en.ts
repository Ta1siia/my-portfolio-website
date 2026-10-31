const en = {
  header: {
    backToTop: "Back to top",
    sections: "Sections",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    otherLanguage: "Français",
  },
  sections: {
    about: "About",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    titles: {
      developer: "Full-stack developer",
      designer: "UX/UI designer",
    },
    statement:
      "I design and build web applications end to end, from the data layer to the last state of a hover.",
    photoAlt: "Portrait of Taisiia Fedorova",
  },
  about: {
    paragraphs: [
      "I'm a high school student in Kyiv, studying full-stack development through GoIT and designing and building web applications end to end — React and TypeScript on the front, Python and Flask behind it. My attention goes to the layer where design and engineering meet, since that's where an interface either holds up or doesn't.",
      "I work from the system outward rather than screen by screen: tokens before components, constraints before decoration. The same instinct shows up in what I build — RepoLens exists because I wanted to see a codebase's structure rather than infer it from folders.",
      "Outside of code I read and write seriously in French and English. That side of my work — a book, and research — will show up here as it becomes something worth showing.",
    ],
    facts: {
      location: { label: "Location", value: "Kyiv, Ukraine" },
      languages: {
        label: "Languages",
        value: "Ukrainian, Russian, English, French",
      },
      studies: { label: "Studies", value: "Full-stack development, GoIT" },
    },
  },
  work: {
    role: "Role",
    stack: "Stack",
    status: "Status",
    year: "Year",
    repo: "Repo",
    demo: "Demo",
    repoLens: {
      blurb:
        "Paste any public GitHub URL and RepoLens renders the repository's commit history as an interactive graph. File size tracks how often a file changes; edges connect files that consistently change together — the co-change signal a folder structure can't show you, but that exposes the real coupling in a codebase. Clicking a file surfaces its recent commits alongside an AI-generated summary of what's been happening in it.",
      notes:
        "Renamed files had to have their history collapsed into a single node, or the graph fractured one file's identity in two. The force-directed layout needed hand-tuned physics before labels stopped resolving into noise. And after deploying, real traffic surfaced a concurrency bug on a large repository: two overlapping database writers triggered by one slow request.",
      role: "Design & development",
      status: "Live",
    },
  },
  skills: {
    languages: "Languages",
    frontEnd: "Front-end",
    backEnd: "Back-end",
    design: "Design",
    tooling: "Tooling",
    responsiveLayout: "Responsive layout",
    restApis: "REST APIs",
    designSystems: "Design systems",
    typography: "Typography",
  },
  contact: {
    copied: "Copied",
    status: (time: string) =>
      `Open to internships and collaboration — ${time} Kyiv`,
  },
};

export default en;
