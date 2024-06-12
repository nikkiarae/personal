import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { SectionHeading } from '@components/typography';
import { SkillsData } from '@services/data';

const SkillIcon = styled('img')({
  width: '80px',
  height: '80px',
  marginBottom: '10px',
});

const SkillBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Skills: React.FC = () => {
  return (
    <Box>
      <SectionHeading text={'Skills'} />
      <Grid container justifyContent="center" spacing={3}>
        {SkillsData.map((skill, idx) => (
          <Grid item key={idx} xs={6} sm={4} md={3} lg={2}>
            <SkillBox>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <Typography variant="body1">{skill.name}</Typography>
            </SkillBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
