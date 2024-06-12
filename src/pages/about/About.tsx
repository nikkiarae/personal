import React from 'react';
import { Divider, Grid, Stack } from '@mui/material';
import { Education, Experience, Introduction, Skills } from './sections';
import { PageHeader } from '@components/sections';
import { Page } from '@components/layouts';
import { Map } from '@components/map'


const About: React.FC = () => {

  return (
    <Page>
      <PageHeader 
        heading={'About Me'}
        subHeading={'Developing beautiful and functional websites is what I love doing, and that\'s why I give my all in every new challenge.'}
      />
      <Stack spacing={6}>
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