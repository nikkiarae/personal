import { NextResponse } from 'next/server';
import { fetchBlogPosts } from '@/lib/api/blog';

// Fetch all visible blog posts.
export async function GET() {
  const posts = await fetchBlogPosts();
  return NextResponse.json(posts);
}
