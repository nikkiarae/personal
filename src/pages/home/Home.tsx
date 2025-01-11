import React from 'react';
import { Stack } from '@mui/material';
import { Intro, Skills } from './sections';
import { Page } from '@components/layouts';

const Home: React.FC = () => {
  return (
    <Page>
        <Stack spacing={6}>
            <Intro />
            <Skills />
        </Stack>
    </Page>
  )
};

export default Home;