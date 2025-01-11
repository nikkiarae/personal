import React, { useEffect } from 'react';
import { Page } from '@components/layouts';
import { PageHeader } from '@components/sections';
import { Box, Grid, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { Project } from '@services/types';
import { ProjectCard } from '@components/cards';
import { ProjectsData } from '@services/data';
import { borderRadius } from '@styles/globalStyle';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const Projects: React.FC = () => {
  const theme = useTheme();
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(ProjectsData);
  // const [value, setValue] = React.useState(0);

  // useEffect(() => {
  //   filterProjects();
  // }, [value]);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  // const categories = (): string[] => {
  //   return ["All", "Web", "Mobile", "Other"];
  // };

  // const filterProjects = () => {
  //   if (value === 0) {
  //     setFilteredProjects(ProjectsData);
  //   } else {
  //     const category = categories()[value];
  //     setFilteredProjects(ProjectsData.filter(project => project.category === category));
  //   }
  // };

  return (
    <Page>
      <PageHeader 
        heading={'Projects'}
        subHeading={'Youll find a selection of my work below that has allowed me to develop my skills'}
      />
      {/* <Box> */}
        {/* <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '.MuiTabs-indicator': {
              display: 'none',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              borderRadius: borderRadius,
              px: 4,
              minWidth: 120,
            },
            '& .Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: '#fff !important',
            },
            '& .MuiTabs-flexContainer': {
                flexWrap: 'wrap',
                gap: 1,
            },
          }}
        >
          {categories().map((category: string, idx: number) => (
            <Tab 
              key={idx} 
              label={
                <Typography variant="h6">
                  {category}
                </Typography>
              } 
              value={idx} 
            />
          ))}
        </Tabs>
      </Box> */}
      {/* {categories().map((category: string, idx: number) => (
        <CustomTabPanel key={idx} value={value} index={idx}>
          <Grid container spacing={3}>
            {filteredProjects.map((project: Project, idx: React.Key) => (
              <Grid key={idx} item xs={12} sm={6} lg={4}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>
      ))} */}
      <Grid container spacing={3}>
            {filteredProjects.map((project: Project, idx: React.Key) => (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
    </Page>
  );
};

export default Projects;
