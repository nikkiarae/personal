import {
  Insight,
  InsightRow,
  InsightSummary,
  InsightSummaryRow,
} from '@/types/insights';
import {
  getInsightsConnection,
  mapInsightRow,
  mapInsightSummaryRow,
  toViewCount,
} from '@/lib/utils/insights';

type InsightViewUpdateRow = Pick<InsightRow, 'views'>;

export const fetchInsights = async (): Promise<InsightSummary[]> => {
  const conn = getInsightsConnection();
  const rows = (await conn`
    SELECT * FROM insights
    WHERE published = true
    ORDER BY date DESC;
  `) as InsightSummaryRow[];

  return rows.map(mapInsightSummaryRow);
};

export const fetchInsight = async (slug: string): Promise<Insight | null> => {
  const conn = getInsightsConnection();
  const rows = (await conn`
    SELECT * FROM insights
    WHERE slug = ${slug}
      AND published = true
    LIMIT 1;
  `) as InsightRow[];

  const row = rows[0];

  if (!row) {
    return null;
  }

  return mapInsightRow(row);
};

export const updateInsightViews = async (
  slug: string,
): Promise<number | null> => {
  const conn = getInsightsConnection();
  const rows = (await conn`
    UPDATE insights
    SET views = COALESCE(views, 0) + 1
    WHERE slug = ${slug}
      AND published = true
    RETURNING views;
  `) as InsightViewUpdateRow[];

  const row = rows[0];

  if (!row) {
    return null;
  }

  return toViewCount(row.views);
};
