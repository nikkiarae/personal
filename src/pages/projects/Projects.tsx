import React from 'react';
import { Page } from '@components/layouts';
import { PageHeader } from '@components/sections';
import { Grid } from '@mui/material';
import { Project } from '@services/types';
import { ProjectCard } from '@components/cards';
import { ProjectsData } from '@services/data';

const Projects: React.FC = () => {

  return (
    <Page>
      <PageHeader 
        heading={'Projects'}
        subHeading={'Youll find a selection of my work below that has allowed me to develop my skills'}
      />
      <Grid container spacing={3}>
            {ProjectsData.map((project: Project, idx: React.Key) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
    </Page>
  );
};

export default Projects;
