import { NextResponse } from 'next/server';
import { fetchProject } from '@/lib/api/projects';
import { Params } from '@/types/types';

export async function GET(_: Request, params: Params) {
  const { id } = await params.params;

  const project = await fetchProject(id);

  if (!project) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
