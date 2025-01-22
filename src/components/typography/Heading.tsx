"use client";

import React, { FC } from 'react';
import { Typography, useTheme } from '@mui/material';

interface HeadingProps {
    text: string
}

const Heading: FC<HeadingProps> = ({ text }) => {
    const theme = useTheme()
    return (
        <Typography variant="h2">
            { text }
            <span style={{ color: theme.palette.primary.main }}>.</span>
        </Typography>
    );
};

export default Heading;