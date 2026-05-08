import { NextResponse } from 'next/server';
import { SlugParams } from '@/types/types';
import { fetchInsight } from '@/lib/api/insights';

export async function GET(_: Request, params: SlugParams) {
  const { slug } = await params.params;
  const post = await fetchInsight(slug);

  if (!post) {
    return NextResponse.json({ error: 'Insight not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
