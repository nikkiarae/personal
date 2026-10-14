# Nikki Rae — Resume Site

A single-page resume built with Next.js 16, React 19 and HeroUI, with a detail page for each project.

## Getting started

```sh
yarn install
cp .env.example .env.local   # add your MAPBOX_TOKEN
yarn dev
```

`yarn build` creates a production build, `yarn lint` runs ESLint, and `yarn format` runs Prettier.

## Editing content

All content lives in `src/lib/data/`:

| File          | What it holds                                                          |
| ------------- | ---------------------------------------------------------------------- |
| `profile.ts`  | Name, headline, summary, highlights, education, socials, map pins, CV/resume files |
| `jobs.ts`     | Experience. Jobs with `endDate: null` are shown as current; `show: false` hides one |
| `projects.ts` | Projects, sorted by `order`. Images live in `public/assets/images/projects/` |
| `skills.ts`   | Skill groups (`isCurrent` highlights a skill) and the logo strip in the hero |

## UK vs US visitors

`src/lib/server/visitor-region.ts` reads the geo-IP headers (`x-vercel-ip-country` and others, falling back to `Accept-Language`). UK visitors get the CV (`public/assets/CV_Nikki_Rae_2026.pdf`) and a UK map pin; everyone else gets the US resume and a Utah pin. The other document is always offered as a secondary link.

## Motion

- **Page transitions** use React's `<ViewTransition>`. Project covers and titles morph between the list and the detail page, and the gallery slides in the direction you navigate (`addTransitionType`).
- **Scroll effects** (section reveals, the scroll-progress bar, the header background and the experience timeline) use CSS scroll-driven animations in `src/styles/globals.css`. They need no JavaScript and are skipped in browsers that don't support them.
- Everything respects `prefers-reduced-motion`.
