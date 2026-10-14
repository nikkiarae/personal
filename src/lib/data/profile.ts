import type {
  Education,
  Region,
  RegionalLocation,
  ResumeFile,
  SocialLink,
} from '@/types/types';

export const profile = {
  name: 'Nikki Rae',
  firstName: 'Nikki',
  headline: 'Senior Full Stack Developer',
  avatar: '/assets/images/profile.jpeg',
  tagline:
    'Delivering secure, scalable web platforms aligned to business goals, accelerating delivery, improving operational efficiency, and creating measurable results.',
  summary:
    'AI-Enabled Full Stack Engineer with 8+ years delivering measurable business outcomes through reliable, production-grade software. Experienced leading modernisation initiatives that reduce delivery risk, improve developer productivity, and accelerate time-to-market by moving legacy platforms to modern TypeScript architectures. Focused on shipping high-impact features, embedding AI capabilities that drive operational efficiency, and enforcing engineering standards that protect quality, security, and long-term maintainability.',
  highlights: [
    { value: '8+', label: 'Years shipping production software' },
    { value: 'UK & US', label: 'Teams across both markets' },
    { value: 'AI', label: 'Bedrock & Gemini features in production' },
  ],
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Science, Information Technology',
    school: 'Brigham Young University',
    location: 'Provo, UT, USA',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nikkirae27/' },
  { name: 'GitHub', href: 'https://github.com/nikkiarae' },
  { name: 'Instagram', href: 'https://www.instagram.com/nikki.a.rae/' },
  { name: 'Facebook', href: 'https://www.facebook.com/nikkirae26' },
];

/** Map pin shown to visitors, chosen by their IP region. */
export const locations: Record<Region, RegionalLocation> = {
  uk: {
    label: 'United Kingdom',
    coordinates: { longitude: -0.645747, latitude: 52.91109352 },
  },
  us: {
    label: 'Utah, USA',
    coordinates: { longitude: -111.79792, latitude: 40.4248665 },
  },
};

/** UK visitors get the CV, everyone else gets the US-style resume. */
export const resumes: Record<Region, ResumeFile> = {
  uk: {
    label: 'CV',
    href: '/assets/CV_Nikki_Rae_2026.pdf',
    fileName: 'Nikki_Rae_UK_CV_2026.pdf',
  },
  us: {
    label: 'Resume',
    href: '/assets/Resume_Nikki_Rae_2026.pdf',
    fileName: 'Nikki_Rae_US_Resume_2026.pdf',
  },
};

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzzyjry';
