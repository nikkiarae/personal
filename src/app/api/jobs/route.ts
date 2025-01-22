import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';

// Fetch all Jobs
export async function GET() {
  await dbConnect();

  const jobs = await Job.find({});
  return NextResponse.json(jobs);
}
