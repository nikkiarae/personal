'use client';

import { ListHeading, ListItem, SectionHeading } from '@/components/typography';

interface SkillsProps {
  technologies: string[];
  libraries: string[];
  softSkills: string[];
}

const Skills = ({ technologies, libraries, softSkills }: SkillsProps) => {
  return (
    <div>
      <SectionHeading text={'Skills'} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <ListHeading text={'Technologies'} />
          <div className="space-y-1">
            {technologies.map((tech: string, idx: React.Key) => (
              <ListItem key={idx} text={tech} className='text-lg' />
            ))}
          </div>
        </div>

        <div>
          <ListHeading text={'Libraries'} />
          <div className="space-y-1">
            {libraries.map((library: string, idx: React.Key) => (
              <ListItem key={idx} text={library} className='text-lg' />
            ))}
          </div>
        </div>

        <div>
          <ListHeading text={'Soft Skills'} />
          <div className="space-y-1">
            {softSkills.map((soft: string, idx: React.Key) => (
              <ListItem key={idx} text={soft} className='text-lg' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
