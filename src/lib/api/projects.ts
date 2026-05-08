import { Project } from '@/types/types';
import { projects } from '@/lib/data/projects';
const getVisibleProjects = (): Project[] => {
  return projects
    .filter((project) => project.show)
    .sort(
      (firstProject, secondProject) => firstProject.order - secondProject.order,
    );
};

export const fetchProjects = async (): Promise<Project[]> => {
  return getVisibleProjects();
};

export const fetchProject = async (id: string): Promise<Project | null> => {
  return getVisibleProjects().find((entry) => entry.id === id) ?? null;
};
