import { getSqlClient } from '@/lib/db/postgres';
import {
  Insight,
  InsightRow,
  InsightSummary,
  InsightSummaryRow,
} from '@/types/insights';

export const toStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((entry): entry is string => typeof entry === 'string');
};

export const toViewCount = (value: InsightRow['views']): number => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  return 0;
};

export const toIsoDate = (value: string | Date): string => {
  return value instanceof Date
    ? value.toISOString()
    : new Date(value).toISOString();
};

export const getInsightsConnection = () => {
  const conn = getSqlClient();

  if (!conn) {
    throw new Error(
      'Postgres connection is not configured. Set PGHOST, PGDATABASE, PGUSER, and PGPASSWORD.',
    );
  }

  return conn;
};

export const mapInsightRow = (row: InsightRow): Insight => {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    date: toIsoDate(row.date),
    summary: row.summary,
    tags: toStringArray(row.tags),
    coverImage: row.cover_image ?? undefined,
    published: row.published,
    views: toViewCount(row.views),
    content: row.content,
  };
};

export const mapInsightSummaryRow = (
  row: InsightSummaryRow,
): InsightSummary => {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    date: toIsoDate(row.date),
    summary: row.summary,
    tags: toStringArray(row.tags),
    coverImage: row.cover_image ?? undefined,
    published: row.published,
    views: toViewCount(row.views),
  };
};
