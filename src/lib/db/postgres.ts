import 'server-only';

import postgres, { type Sql } from 'postgres';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const rawPort = Number.parseInt(process.env.PGPORT ?? '5432', 10);
const port = Number.isNaN(rawPort) ? 5432 : rawPort;
const hasPostgresConfig = Boolean(PGHOST && PGDATABASE && PGUSER && PGPASSWORD);

const sqlClient: Sql<Record<string, unknown>> | null = hasPostgresConfig
  ? postgres({
      host: PGHOST,
      database: PGDATABASE,
      username: PGUSER,
      password: PGPASSWORD,
      port,
      ssl: 'require',
      // Neon pooler works best with prepared statements disabled.
      prepare: false,
    })
  : null;

let hasWarnedMissingPostgresConfig = false;

export const getSqlClient = () => {
  return sqlClient;
};

export const logDatabaseFallback = (source: string, error?: unknown) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if (!hasPostgresConfig) {
    if (!hasWarnedMissingPostgresConfig) {
      hasWarnedMissingPostgresConfig = true;
      console.warn(
        `[database] PGHOST/PGDATABASE/PGUSER/PGPASSWORD are missing. Falling back to static ${source} data.`,
      );
    }

    return;
  }

  if (error) {
    console.warn(
      `[database] Failed to read ${source} from database. Falling back to static data.`,
      error,
    );
  }
};
