import type { Skill, SkillGroup } from '@/types/types';

/** Logos shown in the "core stack" strip. */
export const SkillsData: Skill[] = [
  { name: 'TypeScript', icon: '/assets/images/skills/typescript.png' },
  { name: 'ReactJS', icon: '/assets/images/skills/reactjs.png' },
  { name: 'NestJS', icon: '/assets/images/skills/nestjs.png' },
  { name: 'NextJS', icon: '/assets/images/skills/nextjs.png' },
  { name: 'NodeJS', icon: '/assets/images/skills/nodejs.png' },
  { name: 'GraphQL', icon: '/assets/images/skills/graphql.png' },
  { name: 'PostgreSQL', icon: '/assets/images/skills/postgresql.png' },
  { name: 'MongoDB', icon: '/assets/images/skills/mongodb.png' },
  { name: 'Tailwind CSS', icon: '/assets/images/skills/tailwind.png' },
  { name: 'HeroUI', icon: '/assets/images/skills/heroui.jpeg' },
  { name: 'Material UI', icon: '/assets/images/skills/materialui.png' },
  { name: 'Zustand', icon: '/assets/images/skills/zustand.svg' },
];

/** `isCurrent` marks the skills in day-to-day use. */
export const skillGroups: SkillGroup[] = [
  {
    heading: 'Client-Side Development',
    items: [
      { text: 'TypeScript', isCurrent: true },
      { text: 'React', isCurrent: true },
      { text: 'Zustand', isCurrent: true },
      { text: 'TanStack', isCurrent: true },
      { text: 'TailwindCSS', isCurrent: true },
      { text: 'HeroUI', isCurrent: true },
      { text: 'Playwright', isCurrent: true },
      { text: 'Vite', isCurrent: true },
      { text: 'MUI', isCurrent: false },
      { text: 'NextJS', isCurrent: false },
    ],
  },
  {
    heading: 'APIs & Data Engineering',
    items: [
      { text: 'NestJS', isCurrent: true },
      { text: 'PostgreSQL', isCurrent: true },
      { text: 'Prisma', isCurrent: true },
      { text: 'GraphQL', isCurrent: true },
      { text: 'REST', isCurrent: true },
      { text: 'NodeJS', isCurrent: false },
      { text: 'MongoDB', isCurrent: false },
    ],
  },
  {
    heading: 'Cloud & Delivery Operations',
    items: [
      { text: 'Git', isCurrent: true },
      { text: 'AWS', isCurrent: true },
      { text: 'Docker', isCurrent: true },
      { text: 'CI/CD', isCurrent: true },
      { text: 'Terraform', isCurrent: false },
      { text: 'DigitalOcean', isCurrent: false },
    ],
  },
];
