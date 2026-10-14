import type { AiUseCase } from '@/types/types';

/** Each tool is used for a different job, so they're shown separately. */
export const aiUseCases: AiUseCase[] = [
  {
    tool: 'AWS Bedrock',
    scope: 'In the product',
    context: 'Powdr',
    summary:
      'Designed and shipped the AI Insights Drawer, an in-product assistant for customers’ financial data.',
    highlights: [
      'NDJSON streaming',
      'File uploads',
      'Privacy-focused handling of customer data',
    ],
  },
  {
    tool: 'Claude',
    scope: 'Day to day & across the team',
    context: 'Claude Code',
    summary:
      'My everyday development partner. At SimplyCook I also founded the internal Claude Code plugin marketplace, standardising AI-assisted development for the Product Team’s developers and designers.',
    highlights: [
      'Daily development',
      'Plugin marketplace',
      'Convention guides',
      'Scaffolding skills',
      'Review agents: frontend, API, accessibility, test planning, SEO',
    ],
  },
  {
    tool: 'ChatGPT',
    scope: 'In my workflow',
    context: 'Day to day',
    summary:
      'A second opinion alongside coding, for research, prototyping and debugging.',
    highlights: ['Research', 'Prototyping', 'Debugging'],
  },
];
