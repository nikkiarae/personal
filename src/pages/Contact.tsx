import React from 'react';
import { Page } from '@components/layouts';
import { PageHeader } from '@components/sections';
import { Stack } from '@mui/material';


const Contact: React.FC = () => {
  return (
    <Page>
      <PageHeader 
        heading={'Contact Me'}
        subHeading={'Looking to partner or work together? Reach out'}
      />
      <Stack spacing={6}>
      </Stack>
    </Page>
  )
};

export default Contact;