import React from 'react';
import { Grid, Box, Stack, Typography } from '@mui/material';
import { SectionHeading } from '@components/typography';


const Introduction: React.FC = () => {
    return (
        <Box>
            <SectionHeading text={'Introduction'} />
            <Typography variant='body1'>
                Results-driven mid-level full stack engineer with 
                a passion for crafting efficient and innovative solutions. 
                Seeking a challenging role that allows me to leverage my 
                strong technical skills and experience in software 
                development to contribute to cutting-edge projects. Eager 
                to collaborate with cross-functional teams to design, 
                implement, and optimize software applications that deliver 
                exceptional user experiences and drive business growth
            </Typography>
        </Box>
    );
};

export default Introduction;