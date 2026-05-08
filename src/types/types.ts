export interface Params {
  params: Promise<{
    id: string;
  }>;
}

export interface SlugParams {
  params: Promise<{
    slug: string;
  }>;
}

export type EntityId = string;
export type ISODateString = string;

export interface Project {
  id: EntityId;
  show: boolean;
  order: number;
  title: string;
  category: string;
  briefDescription: string;
  detailedDescription: string;
  liveLink?: string | null;
  repositoryLink?: string | null;
  images: string[];
  applications: string[];
  technologiesUsed: string[];
  librariesAndTools: string[];
  softSkills: string[];
  learningOutcomes: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Job {
  id: EntityId;
  show: boolean;
  order: number;
  company: string;
  title: string;
  location: string;
  workStyle: 'Remote' | 'Office' | 'Hybrid';
  dateLabel?: string;
  startDate: ISODateString;
  endDate: ISODateString | null;
  responsibilities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: ISODateString;
  summary: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  content: string;
}

export type BlogPostSummary = Omit<BlogPost, 'content'>;
