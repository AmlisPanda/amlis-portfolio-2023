export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface Skill {
  label: string;
  icon?: string | string[];
  tooltip?: string;
}

export type SkillsData = Record<string, SkillCategory[]>;

export type SkillCat = Skill & { type: string };

export interface Experience {
  workPosition: string;
  place: string;
  city: string;
  country: string;
  type: string;
  description: string[];
  date: string;
  duration: string;
  companyUrl?: string;
  skills?: string[];
}
export type ExperienceType = "diploma" | "stage" | "work";
