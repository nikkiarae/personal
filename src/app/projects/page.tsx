import React, { FC } from "react";
import { Page } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Grid } from "@mui/material";
import { Project } from "@/types/types";
import { ProjectCard } from "@/components/cards";
import { fetchProjects } from "@/lib/api/projects";

const Projects: FC = async () => {
  const projects = await fetchProjects();

  return (
    <Page>
      <PageHeader
        heading={"Projects"}
        subHeading={
          "Youll find a selection of my work below that has allowed me to develop my skills"
        }
      />
      <Grid container spacing={{ xs: 1.5, sm: 3 }}>
        {projects.map((project: Project, idx: React.Key) => (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Projects;
