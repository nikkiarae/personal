import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface SubHeadingProps {
    text: string
}

const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
    const theme = useTheme()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box 
                sx={{ 
                    width: '6px', 
                    height: 'auto', 
                    backgroundColor: theme.palette.primary.main,
                    mr: 2,
                    my: 1
                }} 
            />
            <Typography variant="h4">
                { text }
            </Typography>
        </Box>
    );
};

export default SubHeading;