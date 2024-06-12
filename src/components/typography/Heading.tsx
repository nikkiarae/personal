import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface HeadingProps {
    text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    const theme = useTheme()
    return (
        <Typography variant="h1">
            { text }
            <span style={{ color: theme.palette.primary.main }}>.</span>
        </Typography>
    );
};

export default Heading;