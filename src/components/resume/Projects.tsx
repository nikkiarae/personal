import Section from '@/components/ui/Section';
import ProjectCard from '@/components/project/ProjectCard';
import type { Project } from '@/types/types';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work."
      description="Products I've designed, built and shipped. Open one for the full story."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            // A full-width lead card only when it leaves no orphan below.
            featured={index === 0 && projects.length % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
