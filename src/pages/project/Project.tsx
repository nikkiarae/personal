import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@components/layouts';
import { PageHeader } from '@components/sections';
import { Divider, Stack, Typography } from '@mui/material';
import { ProjectsData } from '@services/data';
import { Project as ProjectType } from '@services/types';
import { LearningOutcomes, Skills, What } from './sections';
import { Carousel } from '@components/carousel';

const Project: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = React.useState<ProjectType | null>(null);

    React.useEffect(() => {
        if (id) {
            const foundProject = ProjectsData.find((project: ProjectType) => project.id === Number(id));
            setProject(foundProject || null);
        }
    }, [id]);

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
