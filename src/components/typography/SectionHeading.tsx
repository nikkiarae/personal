"use client";

import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';

interface SectionHeadingProps {
    text: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ text }) => {
    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h3">
                { text }
                <span style={{ color: '#6A0DAD' }}>.</span>
            </Typography>
        </Box>
    );
};

export default SectionHeading;