"use client";

import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { SectionHeading } from '@/components/typography';
import { SkillsData } from '@/lib/data';
import SkillCard from '@/components/cards/SkillCard';

const Skills: FC = () => {
  return (
    <Box>
      <SectionHeading text={'Skills'} />
      <Grid container justifyContent="center" spacing={3}>
        {SkillsData.map((skill, idx) => (
          <Grid item key={idx} xs={4} sm={3} md={2} lg={2}>
            <SkillCard key={idx} skill={skill}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
