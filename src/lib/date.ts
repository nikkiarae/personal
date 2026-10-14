import type { Job } from '@/types/types';

const DEFAULT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
};

export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = DEFAULT_DATE_FORMAT_OPTIONS,
): string => {
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
};

export const formatJobDates = (job: Job): string => {
  return (
    job.dateLabel ??
    `${formatDate(job.startDate)} – ${job.endDate ? formatDate(job.endDate) : 'Present'}`
  );
};
