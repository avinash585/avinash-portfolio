import type { LucideIcon } from 'lucide-react';

export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'achievements'
  | 'certifications'
  | 'servicenow'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  shortcut?: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string;
}

export interface BadgeItem {
  title: string;
  subtitle?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
