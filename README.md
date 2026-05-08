# My Personal Website

This project is my personal portfolio website, showcasing my professional projects, skills, and experiences in web development. It is built using React, TypeScript, and Vite for fast and efficient development.

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server with hot module replacement:

```sh
npm run dev
```

## Neon Database (Primary Data Source)

The app now reads `insights` from Neon PostgreSQL.

- If `PGHOST`, `PGDATABASE`, `PGUSER`, and `PGPASSWORD` are set and queries succeed, DB data is used.
- If the database is unavailable (or schema is missing), insights fall back to static files in `src/lib/data/insights/**`.
- Projects and jobs are static-only and are always read from `src/lib/data/projects.ts` and `src/lib/data/jobs.ts`.

### 1. Configure environment

Create `.env.local` from `.env.example` and set your Neon connection string:

```sh
cp .env.example .env.local
```

Then set:

```env
PGHOST=<neon_host>
PGDATABASE=<database_name>
PGUSER=<role_name>
PGPASSWORD=<role_password>
PGPORT=5432
```

### 2. Create tables in Neon

Run the SQL in `db/neon-schema.sql` in Neon SQL Editor (or with your preferred Postgres client).

### 3. Populate data

Insert rows into:

- `blog_posts`

The `blog_posts` table should include a `views` column (`INTEGER NOT NULL DEFAULT 0`) so insight page views can be tracked.

Use the static files in `src/lib/data/insights`, `src/lib/data/projects.ts`, and `src/lib/data/jobs.ts` as your reference source while migrating.

### Build

To build the project for production:

```sh
npm run build
```

### Preview

To preview the production build:

```sh
npm run preview
```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
