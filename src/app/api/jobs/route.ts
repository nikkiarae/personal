import { NextResponse } from 'next/server';
import { fetchJobs } from '@/lib/api/jobs';

// Fetch all Jobs
export async function GET() {
  const jobs = await fetchJobs();

  return NextResponse.json(jobs);
}
