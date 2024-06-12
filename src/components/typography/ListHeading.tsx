import React from 'react';
import { Typography, Box } from '@mui/material';

interface ListHeadingProps {
    text: string
}

const ListHeading: React.FC<ListHeadingProps> = ({ text }) => {
    return (
        <Typography variant='h5' gutterBottom>
            { text }
        </Typography>
    );
};

export default ListHeading;