import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import { Project } from '@/types/types';
import { ProjectCard } from '@/components/cards';
import { fetchProjects } from '@/lib/api/projects';

const Projects = async () => {
  const projects = await fetchProjects();

  return (
    <Page>
      <PageHeader
        heading={'Projects'}
        subHeading={
          'Youll find a selection of my work below that has allowed me to develop my skills'
        }
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project: Project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Projects;
