import { NEXT_PUBLIC_API_URL } from "@/lib/constants/config";
import { Job } from "@/types/types";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/jobs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};