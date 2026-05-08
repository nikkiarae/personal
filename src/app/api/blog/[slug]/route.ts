import { NextResponse } from 'next/server';
import { SlugParams } from '@/types/types';
import { fetchBlogPost } from '@/lib/api/blog';

export async function GET(_: Request, params: SlugParams) {
  const { slug } = await params.params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
