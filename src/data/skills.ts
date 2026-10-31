import type { SkillGroup } from "../types";
import { t } from "../i18n";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: t.skills.languages,
    items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    label: t.skills.frontEnd,
    items: ["React", "Vite", "D3.js", "CSS Modules", t.skills.responsiveLayout],
  },
  { label: t.skills.backEnd, items: ["Flask", "SQLite", t.skills.restApis] },
  {
    label: t.skills.design,
    items: ["Figma", t.skills.designSystems, t.skills.typography, "UI/UX"],
  },
  {
    label: t.skills.tooling,
    items: ["Git", "ESLint", "Prettier", "Vercel", "Render"],
  },
];
