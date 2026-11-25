import { Icon } from "@tabler/icons-react";

export type Theme = "light" | "dark";

export type Category = "Data-Mining" | "Herramientas" | "Desktop-dev";
export type Filter = "Todos" | Category;

export interface Skill {
  label: string;
  value: string;
}

export interface Link {
  label: string;
  href: string;
  icon: string | Icon;
}

export interface Profile {
  lines: string[];
  role: string;
  about: string[];
  skills: Skill[];
  email: string;
  links: Link[];
}

export type Localized = Record<string, string>;

export interface Project {
  title: string;
  description: Localized;
  stack: string;
  year: number;
  categories: string[];
  url: string;
}