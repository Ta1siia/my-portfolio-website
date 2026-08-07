export type NavItem = {
  id: string;
  index: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", index: "01", label: "About" },
  { id: "work", index: "02", label: "Work" },
  { id: "skills", index: "03", label: "Skills" },
  { id: "contact", index: "04", label: "Contact" },
];
