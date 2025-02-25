"use client";

import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { SectionHeading } from '@/components/typography';
import PlaceIcon from '@mui/icons-material/Place';


const Education: FC = () => {
    const theme = useTheme()
    return (
        <Box>
            <SectionHeading text={'Education'} />
            <Box>
                <Typography variant="h5">
                    { `Bachelors of Science, Information Technology`}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    { `Brigham Young University` }
                </Typography>
                <Box display="flex" mb={1}>
                    <PlaceIcon sx={{ 
                            color: theme.palette.primary.main,
                            fontSize: '1.7rem',
                            mr: 1,
                            mt: 0.5
                        }} 
                    />
                    <Typography variant="body1">{ `Provo, UT, USA` }</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Education;