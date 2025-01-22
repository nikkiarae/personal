import Project from '@/models/Project';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose'
import { Params } from '@/types/types';

export async function GET(_: Request, params: Params) {
  await dbConnect();

  const { id } = await params.params;

  const project = await Project.findOne({ _id: id });

  if (!project) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}