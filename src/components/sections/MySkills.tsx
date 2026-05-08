'use client';

import { ListHeading, ListItem, SectionHeading } from '@/components/typography';
import { twMerge } from 'tailwind-merge';

type SkillItem = {
  text: string;
  isCurrent: boolean;
};

type SkillCategory = {
  heading: string;
  items: SkillItem[];
};

const skillsData: SkillCategory[] = [
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
  //   {
  //     heading: 'Product Design & Usability',
  //     items: [
  //       { text: 'UI/UX Design', isCurrent: true },
  //       { text: 'Responsive Design', isCurrent: true },
  //       { text: 'Wireframing', isCurrent: false },
  //       { text: 'User Research', isCurrent: false },
  //     ],
  //   },
  //   {
  //     heading: 'Leadership & Collaboration',
  //     items: [
  //       { text: 'Effective communication', isCurrent: true },
  //       { text: 'Collaboration', isCurrent: true },
  //       { text: 'Commitment', isCurrent: true },
  //       { text: 'Leadership', isCurrent: true },
  //     ],
  //   },
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div>
        <SectionHeading text={'Skills'} />
        <p className="text-sm text-muted">
          * Highlighted are the skills I am currently using, however I have
          working experience with all listed technologies and am open to
          learning new ones.
        </p>
      </div>
      <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {skillsData.map((category) => (
          <div key={category.heading}>
            <ListHeading text={category.heading} className="mb-4" />
            <div className="space-y-1">
              {category.items.map((skill) => (
                <ListItem
                  key={`${category.heading}-${skill.text}`}
                  className={twMerge(
                    skill.isCurrent ? 'font-bold text-accent' : '',
                    'text-lg',
                  )}
                  text={skill.text}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
