import { t } from "../i18n";

export type NavItem = {
  id: string;
  index: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", index: "01", label: t.sections.about },
  { id: "work", index: "02", label: t.sections.work },
  { id: "skills", index: "03", label: t.sections.skills },
  { id: "contact", index: "04", label: t.sections.contact },
];
