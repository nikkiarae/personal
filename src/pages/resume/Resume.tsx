import React from 'react';
import { Divider, Grid, Stack } from '@mui/material';
import { Education, Experience, Introduction, Skills, Download } from './sections';
import { PageHeader } from '@components/sections';
import { Page } from '@components/layouts';
import { Map } from '@components/map'


const About: React.FC = () => {

  return (
    <Page>
      <PageHeader 
        heading={'About Me'}
        subHeading={'Passionate about designing and building seamless, efficient, and visually compelling web applications.'}
      />
      <Stack spacing={6}>
        <Download />
        <Map longitude={-0.538} latitude={53.234} />
        <Divider />
        <Introduction />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
      </Stack>
      
    </Page>
  )
};

export default About;