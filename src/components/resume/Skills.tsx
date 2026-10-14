import { Code2, Database, Cloud } from 'lucide-react';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import { skillGroups } from '@/lib/data/skills';

const GROUP_ICONS = [Code2, Database, Cloud];

const Skills = () => {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="The toolkit."
      description={
        <>
          <span className="mr-1.5 inline-block size-2.5 rounded-full bg-accent align-middle" />
          Highlighted skills are in daily use; I have working experience with
          everything listed and I&apos;m always happy to learn more.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = GROUP_ICONS[index % GROUP_ICONS.length];

          return (
            <article
              key={group.heading}
              className="card-surface reveal p-6 md:p-7"
            >
              <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mb-5 text-lg font-semibold">{group.heading}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill.text}>
                    <Tag tone={skill.isCurrent ? 'accent' : 'default'}>
                      {skill.text}
                    </Tag>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
