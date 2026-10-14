export interface Params {
  params: Promise<{
    id: string;
  }>;
}

export type EntityId = string;
export type ISODateString = string;
export type Region = 'uk' | 'us';

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

export interface SkillGroup {
  heading: string;
  items: {
    text: string;
    isCurrent: boolean;
  }[];
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

export interface Education {
  degree: string;
  school: string;
  location: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface RegionalLocation {
  label: string;
  coordinates: Coordinates;
}

export interface ResumeFile {
  /** What UK / US visitors call the document. */
  label: 'CV' | 'Resume';
  /** Mid-sentence form, e.g. "my full CV" / "my full resume". */
  noun: 'CV' | 'resume';
  href: string;
  fileName: string;
}

export interface AiUseCase {
  tool: 'Claude' | 'ChatGPT' | 'AWS Bedrock';
  /** Where the AI sits: in the product, the team's tooling, or my own workflow. */
  scope: string;
  context: string;
  summary: string;
  highlights: string[];
}

export interface SocialLink {
  name: 'LinkedIn' | 'GitHub' | 'Instagram' | 'Facebook';
  href: string;
}
