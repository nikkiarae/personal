export interface Insight {
  id?: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  views: number;
  content: string;
}

export type InsightSummary = Omit<Insight, 'content'>;

export interface InsightRow {
  id: string;
  slug: string;
  title: string;
  date: string | Date;
  summary: string;
  tags: unknown;
  cover_image: string | null;
  published: boolean;
  views: number | string | null;
  content: string;
}

export type InsightSummaryRow = Omit<InsightRow, 'content'>;
