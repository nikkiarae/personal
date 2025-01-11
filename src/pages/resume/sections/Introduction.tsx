import React from 'react';
import { Grid, Box, Stack, Typography } from '@mui/material';
import { SectionHeading } from '@components/typography';


const Introduction: React.FC = () => {
    return (
        <Box>
            <SectionHeading text={'Introduction'} />
            <Typography variant='body1'>
            Driven and skilled Full Stack Engineer with a proven track record of delivering
innovative and efficient solutions. Experienced in working with startups and
spearheading new projects, bringing ideas from concept to production with agility and
precision. Actively seeking a challenging role where I can leverage my expertise in
software development to contribute to high-impact, cutting-edge projects. Passionate
about collaborating with cross-functional teams to design, develop, and optimize
software applications that elevate user experiences and drive business success.
            </Typography>
        </Box>
    );
};

export default Introduction;