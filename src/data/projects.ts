import type { Project } from "../types";
import { t } from "../i18n";

export const PROJECTS: Project[] = [
  {
    name: "RepoLens",
    blurb: t.work.repoLens.blurb,
    notes: t.work.repoLens.notes,
    role: t.work.repoLens.role,
    stack: ["Python", "Flask", "SQLite", "D3.js", "Gemini API"],
    status: t.work.repoLens.status,
    year: "2026",
    repo: "https://github.com/Ta1siia/repository-lens",
    demo: "https://www.youtube.com/watch?v=cJgl__tbH_c",
  },
];
