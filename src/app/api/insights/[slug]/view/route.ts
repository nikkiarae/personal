import { NextResponse } from 'next/server';
import { updateInsightViews } from '@/lib/api/insights';
import { SlugParams } from '@/types/types';

export async function POST(_: Request, params: SlugParams) {
  const { slug } = await params.params;

  try {
    const views = await updateInsightViews(slug);

    if (views === null) {
      return NextResponse.json({ error: 'Insight not found' }, { status: 404 });
    }

    return NextResponse.json({ slug, views });
  } catch {
    return NextResponse.json(
      { error: 'Failed to update insight views.' },
      { status: 500 },
    );
  }
}
