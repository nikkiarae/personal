'use client';

import React, { FC, useState } from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/typography';
import { Job } from '@/types/types';
import { formatDate } from '@/lib/functions';
import { useTheme } from '@/hooks/useTheme';
import { Button, Chip } from '@heroui/react';
import { twMerge } from 'tailwind-merge';

interface ExperienceProps {
  jobs: Job[];
}

const Experience: FC<ExperienceProps> = ({ jobs }) => {
  const theme = useTheme();
  const [selectedJob, setSelectedJob] = useState<number>(0);
  const currentJob = jobs[selectedJob] ?? jobs[0];

  if (!currentJob) {
    return (
      <div>
        <SectionHeading text={'Experience'} />
        <p style={{ color: theme.palette.text.secondary }}>
          No experience entries are currently visible.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <SectionHeading text={'Experience'} />
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        <div className="space-y-1">
          {jobs.map((company, idx) => (
            <Button
              key={idx}
              onPress={() => setSelectedJob(idx)}
              className={twMerge(
                'block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedJob === idx
                  ? 'font-bold'
                  : 'bg-transparent hover:bg-accent-soft-hover',
              )}
            >
              {company.company}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">
            {`${currentJob.title} - ${currentJob.location}`}
          </h3>
          <div className="flex flex-row gap-2 items-center mb-3">
            <p className="">
              {currentJob.dateLabel ??
                `${formatDate(currentJob.startDate)} - ${
                  currentJob.endDate
                    ? formatDate(currentJob.endDate)
                    : 'Current'
                }`}
            </p>{' '}
            <Chip size="lg" color="default" variant="soft">
              {currentJob.workStyle}
            </Chip>
          </div>
          <ul className="space-y-2">
            {currentJob.responsibilities.map(
              (task: string, index: React.Key) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    className="mt-1 shrink-0"
                    size={18}
                    style={{ color: theme.palette.primary.main }}
                  />
                  <span>{task}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
