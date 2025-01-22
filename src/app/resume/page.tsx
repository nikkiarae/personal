import React, { FC } from 'react';
import { Divider, Stack } from '@mui/material';
import { Education, Experience, Introduction, MySkills, Download, PageHeader } from '@/components/sections';
import { Page } from '@/components/layout';
import { Map } from '@/components/map'
import { fetchJobs } from '@/lib/api/jobs';


const About: FC = async () => {
    const jobs = await fetchJobs()
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
        <MySkills />
        <Divider />
        <Experience jobs={jobs} />
        <Divider />
        <Education />
      </Stack>
      
    </Page>
  )
};

export default About;