'use client';

import { SkillsData } from '@/lib/data/skills';
import { SkillCard } from '@/components/cards';
import { Heading } from '@/components/typography';

const Skills = () => {
  return (
    <section className="space-y-5">
      <Heading
        text={'Skills'}
        subtext="I am currently working with the following technologies"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {SkillsData.map((skill) => (
          <div key={skill.name}>
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
