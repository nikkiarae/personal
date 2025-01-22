import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';

// Fetch all posts
export async function GET() {
  await dbConnect();

  const projects = await Project.find({});
  return NextResponse.json(projects);
}

// Create a new post
export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();
  const newProject = await Project.create(body);

  return NextResponse.json(newProject, { status: 201 });
}