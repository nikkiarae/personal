import React from 'react';
import { Box, Typography } from '@mui/material';
import { SectionHeading } from '@components/typography';

interface WhatProps {
    content: string
}

const What: React.FC<WhatProps> = ({ content }) => {
    return (
        <Box>
            <SectionHeading text={'What'} />
            <Typography variant='body1'>
                { content }
            </Typography>
        </Box>
    );
};

export default What;