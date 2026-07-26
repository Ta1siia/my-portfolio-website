import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    name: "RepoLens",
    blurb:
      "Paste any public GitHub URL and RepoLens renders the repository's commit history as an interactive graph. File size tracks how often a file changes; edges connect files that consistently change together — the co-change signal a folder structure can't show you, but that exposes the real coupling in a codebase. Clicking a file surfaces its recent commits alongside an AI-generated summary of what's been happening in it.",
    notes:
      "Renamed files had to have their history collapsed into a single node, or the graph fractured one file's identity in two. The force-directed layout needed hand-tuned physics before labels stopped resolving into noise. And after deploying, real traffic surfaced a concurrency bug on a large repository: two overlapping database writers triggered by one slow request.",
    role: "Design & development",
    stack: ["Python", "Flask", "SQLite", "D3.js", "Gemini API"],
    status: "Live",
    year: "2026",
    repo: "https://github.com/Ta1siia/repository-lens",
    demo: "https://www.youtube.com/watch?v=cJgl__tbH_c",
  },
];
