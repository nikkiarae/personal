"use client";

import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { SectionHeading } from '@/components/typography';

interface WhatProps {
    content: string
}

const What: FC<WhatProps> = ({ content }) => {
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