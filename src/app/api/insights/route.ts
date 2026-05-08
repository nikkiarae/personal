import { NextResponse } from 'next/server';
import { fetchInsights } from '@/lib/api/insights';

// Fetch all visible insights.
export async function GET() {
  const posts = await fetchInsights();
  return NextResponse.json(posts);
}
