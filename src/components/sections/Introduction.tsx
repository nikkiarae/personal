'use client';

import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { SectionHeading } from '@/components/typography';

const Introduction: FC = () => {
  return (
    <Box>
      <SectionHeading text={'Introduction'} />
      <Typography variant="body1">
        AI-Enabled Full Stack Engineer with 8+ years delivering production-grade
        applications from concept to scale. Experienced leading modernisation
        projects, migrating legacy architectures to modern TypeScript stacks,
        embedding AI-powered features, and establishing robust engineering
        practices. Adept at reviewing and validating AI-generated code,
        evaluating output for correctness, security vulnerabilities, and
        architectural alignment before it reaches production.
      </Typography>
    </Box>
  );
};

export default Introduction;
