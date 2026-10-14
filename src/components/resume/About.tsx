import { GraduationCap } from 'lucide-react';
import { education, profile } from '@/lib/data/profile';
import Section from '@/components/ui/Section';
import type { RegionalLocation } from '@/types/types';
import LocationMap from './LocationMap';

interface AboutProps {
  location: RegionalLocation;
}

const About = ({ location }: AboutProps) => {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Engineering that moves the business forward."
    >
      <div className="grid gap-6 md:grid-cols-[1.15fr_1fr]">
        <div className="reveal flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-pretty md:text-2xl md:leading-relaxed">
            {profile.summary}
          </p>

          <ul className="mt-auto grid gap-3">
            {education.map((entry) => (
              <li
                key={entry.degree}
                className="card-surface flex items-start gap-4 p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{entry.degree}</p>
                  <p className="text-sm text-muted">
                    {entry.school} · {entry.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <LocationMap location={location} />
        </div>
      </div>
    </Section>
  );
};

export default About;
