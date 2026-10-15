import { ChevronDown, MapPin } from 'lucide-react';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import { formatJobDates } from '@/lib/date';
import { cn } from '@/lib/utils';
import type { Job } from '@/types/types';

const VISIBLE_BULLETS = 4;

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-pretty text-foreground/85">
        <span
          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
          aria-hidden="true"
        />
        {item}
      </li>
    ))}
  </ul>
);

const JobCard = ({ job }: { job: Job }) => {
  const isCurrent = job.endDate === null;
  const visible = job.responsibilities.slice(0, VISIBLE_BULLETS);
  const hidden = job.responsibilities.slice(VISIBLE_BULLETS);

  return (
    <li className="reveal relative grid gap-4 pl-8 md:grid-cols-[13rem_1fr] md:gap-16 md:pl-0">
      {/* Timeline dot */}
      <span
        className={cn(
          'absolute top-2 left-0 size-3.5 -translate-x-[calc(50%-0.5px)] rounded-full border-2 border-background md:left-60',
          isCurrent ? 'bg-accent ring-4 ring-accent-soft-hover' : 'bg-muted/60',
        )}
        aria-hidden="true"
      />

      <div className="md:sticky md:top-28 md:self-start md:pt-1 md:text-right">
        <p className="font-mono text-sm text-muted">{formatJobDates(job)}</p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={13} aria-hidden="true" />
          {job.location}
        </p>
      </div>

      <article
        className={cn(
          'card-surface p-6 md:p-8',
          isCurrent && 'border-accent/30',
        )}
      >
        <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {job.title}
            </h3>
            <p className="text-lg font-medium text-accent">{job.company}</p>
          </div>
          <div className="flex gap-2">
            {isCurrent && <Tag tone="accent">Current</Tag>}
            <Tag>{job.workStyle}</Tag>
          </div>
        </header>

        <Bullets items={visible} />

        {hidden.length > 0 && (
          <details className="group mt-3">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 py-2 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">
                Show {hidden.length} more
              </span>
              <span className="hidden group-open:inline">Show less</span>
              <ChevronDown
                size={16}
                className="transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="pt-1">
              <Bullets items={hidden} />
            </div>
          </details>
        )}
      </article>
    </li>
  );
};

interface ExperienceProps {
  jobs: Job[];
}

const Experience = ({ jobs }: ExperienceProps) => {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've made an impact."
      description="Roles across the UK and US, most recent first."
    >
      <div className="relative">
        {/* Timeline rail, drawn in as you scroll */}
        <div
          className="absolute top-2 bottom-0 left-0 w-px bg-border md:left-60"
          aria-hidden="true"
        >
          <div className="timeline-fill size-full bg-linear-to-b from-accent to-accent-2" />
        </div>

        <ol className="space-y-10 md:space-y-14">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
