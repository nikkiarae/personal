'use client';

import React, { FC } from 'react';
import { Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ResumeButton: FC = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Button
        component="a"
        href="/assets/Resume_Nikki_Rae_2026.pdf"
        download="Nikki_Rae_US_Resume_2026.pdf"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DownloadIcon />}
      >
        Download US Resume
      </Button>
      <Button
        component="a"
        href="/assets/CV_Nikki_Rae_2026.pdf"
        download="Nikki_Rae_UK_CV_2026.pdf"
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<DownloadIcon />}
      >
        Download UK CV
      </Button>
    </Stack>
  );
};

export default ResumeButton;
