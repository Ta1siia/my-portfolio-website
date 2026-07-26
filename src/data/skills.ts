import type { SkillGroup } from "../types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    label: "Front-end",
    items: ["React", "Vite", "D3.js", "CSS Modules", "Responsive layout"],
  },
  { label: "Back-end", items: ["Flask", "SQLite", "REST APIs"] },
  {
    label: "Design",
    items: ["Figma", "Design systems", "Typography", "UI/UX"],
  },
  {
    label: "Tooling",
    items: ["Git", "ESLint", "Prettier", "Vercel", "Render"],
  },
];
