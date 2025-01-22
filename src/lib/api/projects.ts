import { NEXT_PUBLIC_API_URL } from "@/lib/constants/config";
import { Project } from "@/types/types";

export const fetchProjects = async (): Promise<Project[]> => {
  console.log(`${NEXT_PUBLIC_API_URL}/api/projects`)
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
};

export const fetchProject = async (id: string): Promise<Project> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/projects/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch project with ID: ${id}`);
  }

  return response.json();
};