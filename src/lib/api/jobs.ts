import { Job } from '@/types/types';
import { jobs } from '@/lib/data/jobs';
const getVisibleJobs = (): Job[] => {
  return jobs
    .filter((job) => job.show)
    .sort((firstJob, secondJob) => firstJob.order - secondJob.order);
};

export const fetchJobs = async (): Promise<Job[]> => {
  return getVisibleJobs();
};
