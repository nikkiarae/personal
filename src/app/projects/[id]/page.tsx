import React, { FC } from 'react';
import { Page } from '@/components/layout';
import { Links, PageHeader } from '@/components/sections';
import { Divider, Stack, Typography } from '@mui/material';
import { Params, Project as ProjectType } from '@/types/types';
import { LearningOutcomes, Skills, What } from '@/components/sections';
import { Carousel } from '@/components/carousel';
import { fetchProject } from '@/lib/api/projects';

const Project: FC<Params> = async ({ params }) => {
    const p = await params
    const project: ProjectType = await fetchProject(p.id)

    if (!project) {
        return (
            <Page>
                <Typography variant="h6" color="textSecondary" align="center">
                    Project not found
                </Typography>
            </Page>
        );
    }

    return (
        <Page>
            <PageHeader 
                heading={project.title}
                subHeading={project.briefDescription}
            />
            <Stack spacing={6}>
                <Links live={project.liveLink} repo={project.repositoryLink} />
                <Carousel images={project.images} />
                <Divider />
                <What content={project.detailedDescription} />
                <Divider />
                <Skills 
                    technologies={project.technologiesUsed}
                    libraries={project.librariesAndTools}
                    softSkills={project.softSkills}
                />
                <Divider />
                <LearningOutcomes content={project.learningOutcomes}/>
            </Stack>
        </Page>
    );
};

export default Project;
