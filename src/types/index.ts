export type Project = {
  name: string;
  blurb: string;
  notes: string;
  role: string;
  stack: string[];
  status: string;
  year: string;
  repo: string;
  demo?: string;
};

export type SkillGroup = { label: string; items: string[] };
export type SocialLink = { label: string; href: string; handle: string };
export type QuickFact = { label: string; value: string };
