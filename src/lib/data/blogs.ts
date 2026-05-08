import type { BlogPost } from '@/types/types';

export const blogs: BlogPost[] = [
  {
    slug: 'building-a-reliable-nextjs-portfolio',
    title: 'Building a Reliable Next.js Portfolio',
    date: '2026-05-03T09:30:00.000Z',
    summary:
      'What I changed to keep a personal site fast, typed, and easy to maintain as it grew.',
    tags: ['Next.js', 'TypeScript', 'Architecture'],
    published: true,
    content: `I rebuilt this portfolio around a few constraints: predictable routing, reusable UI primitives, and clean data boundaries.

## What changed

- Moved feature data behind route handlers.
- Added stricter shared types for projects, jobs, and blog posts.
- Kept component files focused on rendering, not data loading.

## Why it helped

The codebase is easier to scan and easier to change. Most edits now happen in one place instead of three.

## Next step

I want to add preview mode so drafts can be reviewed before publishing.
`,
  },
  {
    slug: 'lessons-from-migrating-off-mui',
    title: 'Lessons From Migrating Off MUI',
    date: '2026-04-27T13:15:00.000Z',
    summary:
      'A practical look at replacing component-library dependencies with simpler, purpose-built UI.',
    tags: ['UI', 'Migration', 'Tailwind'],
    published: true,
    content: `Swapping UI foundations sounds simple, but most effort goes into edge cases.

## Migration notes

1. Replace high-traffic shared components first.
2. Keep visual snapshots for quick regressions checks.
3. Remove old abstractions only after all imports are gone.

## Biggest takeaway

Small wrapper components were useful at first, but direct usage reduced complexity once the new design direction was stable.
`,
  },
  {
    slug: 'how-i-structure-project-data',
    title: 'How I Structure Project Data for Reuse',
    date: '2026-04-12T10:00:00.000Z',
    summary:
      'Patterns I use to keep project cards, detail pages, and APIs aligned without duplicating fields.',
    tags: ['Data Modeling', 'API', 'Portfolio'],
    published: true,
    content: `Project content appears in multiple places, so data shape matters.

## Field strategy

- Keep one canonical record per project.
- Store short and long descriptions separately.
- Use arrays for technologies, tools, and outcomes.

## Rendering benefit

Cards and detail pages can share the same source while still presenting different levels of detail.
`,
  },
  {
    slug: 'designing-better-loading-states',
    title: 'Designing Better Loading States in App Router',
    date: '2026-03-29T08:45:00.000Z',
    summary:
      'Loading screens are part of the product experience, not just a fallback message.',
    tags: ['Next.js', 'UX', 'Performance'],
    published: true,
    content: `A loading state sets user expectation for what happens next.

## Principles

- Match the tone of the final page.
- Keep layout structure visible while content resolves.
- Avoid jumpy transitions when data appears.

## Result

Perceived performance improved without changing backend response time.
`,
  },
  {
    slug: 'using-markdown-for-technical-notes',
    title: 'Using Markdown for Technical Notes',
    date: '2026-03-14T15:05:00.000Z',
    summary:
      'Why markdown remains my default format for internal notes and public technical writeups.',
    tags: ['Markdown', 'Content', 'Workflow'],
    published: true,
    content: `Markdown is still the easiest way to write portable technical content.

## Why markdown

- Version control friendly
- Easy to diff in pull requests
- Works with static and dynamic rendering

## Practical tip

Keep frontmatter small and opinionated. Only include fields you actively render.
`,
  },
  {
    slug: 'draft-observability-checklist-for-side-projects',
    title: 'Draft: Observability Checklist for Side Projects',
    date: '2026-02-22T11:20:00.000Z',
    summary:
      'A draft post covering logging, alerting, and failure visibility for smaller products.',
    tags: ['Observability', 'Draft'],
    published: false,
    content: `This is a draft and should not appear in public listings.

## Checklist preview

- Structured logs
- Error boundaries
- Uptime checks
- Actionable alerts
`,
  },
];
