import { NextResponse } from 'next/server';
import { fetchProjects } from '@/lib/api/projects';

// Fetch all posts
export async function GET() {
  const projects = await fetchProjects();

  return NextResponse.json(projects);
}
