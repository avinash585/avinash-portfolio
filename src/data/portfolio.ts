import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Mail,
  Phone,
  ServerCog,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type {
  BadgeItem,
  Certification,
  ContactLink,
  Experience,
  NavItem,
  Project,
  Skill,
} from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Mission' },
  { id: 'skills', label: 'Skills', shortcut: 'S' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects', shortcut: 'P' },
  { id: 'achievements', label: 'Achievements', shortcut: 'A' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'servicenow', label: 'ServiceNow' },
  { id: 'contact', label: 'Contact', shortcut: 'C' },
];

export const heroRoles = [
  'Avinash A',
  'Software Engineer',
  'AI Developer',
  'ServiceNow CSA Certified',
];

export const profile = {
  summary:
    'Motivated Computer Science undergraduate and aspiring Software Engineer focused on building scalable software solutions, AI-powered applications, and modern web technologies.',
  cgpa: '8.04',
  college: 'RMD Engineering College',
  graduation: 'May 2027',
};

export const skills: Skill[] = [
  { name: 'Java', description: 'Object-oriented programming, collections, clean application logic.' },
  { name: 'Spring Boot', description: 'REST APIs, layered services, backend integration, production structure.' },
  { name: 'React.js', description: 'Component-driven interfaces with responsive, accessible user flows.' },
  { name: 'TypeScript', description: 'Typed frontend architecture, safer state, better maintainability.' },
  { name: 'MySQL', description: 'Relational schemas, queries, persistence layers, transactional design.' },
  { name: 'AWS', description: 'Cloud fundamentals, architecture patterns, deployment-ready thinking.' },
  { name: 'ServiceNow', description: 'CSA foundation, ITSM concepts, platform workflows, automation.' },
  { name: 'Git', description: 'Version control workflows, branching, clean collaboration practices.' },
  { name: 'GitHub', description: 'Repository management, project presentation, collaboration workflows.' },
  { name: 'Postman', description: 'API testing, request collections, backend verification loops.' },
  { name: 'Power BI', description: 'Dashboarding, visual analytics, insight-oriented reporting.' },
];

export const experiences: Experience[] = [
  {
    role: 'Web Development Intern',
    company: 'CodTech IT Solutions',
    period: 'Jun 2025 - Jul 2025',
    bullets: [
      'Developed responsive web features using React.js.',
      'Improved UI usability and application performance.',
    ],
  },
  {
    role: 'Java Programming Intern',
    company: 'InternPe',
    period: 'Oct 2024',
    bullets: [
      'Built Java programming foundations.',
      'Applied OOP concepts through project-based tasks.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'TestForge AI',
    summary: 'AI-powered test case generation platform.',
    highlights: ['Gemini AI integration', 'Flask backend', 'Automation script generation'],
    tech: ['Gemini AI', 'Flask', 'Automation', 'Python'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Museum Chatbot Ticket Booking System',
    summary: 'AI-powered ticket reservation chatbot.',
    highlights: ['Multilingual support', 'Online payment integration', 'React + Spring Boot + MySQL'],
    tech: ['React', 'Spring Boot', 'MySQL', 'Payments'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export const achievements: BadgeItem[] = [
  { title: 'Finalist', subtitle: 'AI Competition - Flinders University' },
  { title: 'Winner', subtitle: 'Internal Hackathon - RMD Engineering College' },
  { title: 'TCS CodeVita Round 2', subtitle: 'Global Rank 2251' },
  { title: 'Second Prize', subtitle: 'Intelliwiz Technical Quiz' },
];

export const certifications: Certification[] = [
  { title: 'ServiceNow Certified System Administrator', issuer: 'ServiceNow', icon: ShieldCheck },
  { title: 'Oracle Certified Professional: Java SE 17 Developer', issuer: 'Oracle', icon: Code2 },
  { title: 'OCI AI Foundation Associate', issuer: 'Oracle Cloud Infrastructure', icon: BrainCircuit },
  { title: 'AWS Cloud Architecting', issuer: 'AWS Academy', icon: Cloud },
];

export const serviceNowFlow = [
  { label: 'CSA Certification', icon: BadgeCheck },
  { label: 'ITSM Concepts', icon: Layers3 },
  { label: 'Workflow Automation', icon: Workflow },
  { label: 'Platform Development', icon: ServerCog },
];

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'avinasha2137@gmail.com', href: 'mailto:avinasha2137@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/avinash-a', href: 'https://www.linkedin.com/in/avinash-a' },
  { label: 'GitHub', value: 'github.com/avinash-a', href: 'https://github.com/avinash-a' },
];

export const assistantKnowledge = [
  {
    keywords: ['skill', 'skills', 'tech', 'stack'],
    answer:
      'Avinash works with Java, Spring Boot, React.js, TypeScript, MySQL, AWS, ServiceNow, Git, GitHub, Postman, and Power BI.',
  },
  {
    keywords: ['project', 'projects', 'testforge', 'chatbot', 'museum'],
    answer:
      'Key projects include TestForge AI, an AI-powered test case generation platform, and a Museum Chatbot Ticket Booking System with React, Spring Boot, MySQL, multilingual support, and payments.',
  },
  {
    keywords: ['certification', 'certifications', 'servicenow', 'csa', 'aws', 'oci', 'oracle', 'java'],
    answer:
      'Avinash is ServiceNow CSA certified and has also completed Oracle Certified Professional: Java SE 17 Developer, OCI AI Foundation Associate, and AWS Cloud Architecting certifications.',
  },
  {
    keywords: ['achievement', 'achievements', 'hackathon', 'codevita'],
    answer:
      'Achievements include AI Competition finalist at Flinders University, Internal Hackathon winner at RMD Engineering College, TCS CodeVita Round 2 global rank 2251, and second prize in Intelliwiz Technical Quiz.',
  },
  {
    keywords: ['education', 'college', 'cgpa', 'graduation'],
    answer:
      'Avinash is a Computer Science and Engineering undergraduate at RMD Engineering College with a CGPA of 8.04 and expected graduation in May 2027.',
  },
];

export const iconMap = {
  code: Code2,
  database: Database,
  github: Github,
  globe: Globe2,
  git: GitBranch,
  mail: Mail,
  phone: Phone,
  award: Award,
};
