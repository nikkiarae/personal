import React, { FC } from 'react';
import { Page } from '@/components/layout';
import { Links, PageHeader } from '@/components/sections';
import { Params, Project as ProjectType } from '@/types/types';
import { LearningOutcomes, Skills, What } from '@/components/sections';
import { Carousel } from '@/components/carousel';
import { fetchProject } from '@/lib/api/projects';
import { Separator } from '@heroui/react';

const Project = async ({ params }: Params) => {
  const p = await params;
  const project: ProjectType | null = await fetchProject(p.id);

  if (!project) {
    return (
      <Page>
        <p className="text-center text-lg font-medium text-slate-500">
          Project not found
        </p>
      </Page>
    );
  }

  return (
    <Page>
      <PageHeader
        heading={project.title}
        subHeading={project.briefDescription}
      />
      <div className="space-y-6">
        <Links live={project.liveLink} repo={project.repositoryLink} />
        <Carousel images={project.images} />
        <Separator variant="tertiary" />
        <What content={project.detailedDescription} />
        <Separator variant="tertiary" />
        <Skills
          technologies={project.technologiesUsed}
          libraries={project.librariesAndTools}
          softSkills={project.softSkills}
        />
        <Separator variant="tertiary" />
        <LearningOutcomes content={project.learningOutcomes} />
      </div>
    </Page>
  );
};

export default Project;
