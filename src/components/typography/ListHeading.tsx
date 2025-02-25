"use client";

import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ListHeadingProps {
    text: string
}

const ListHeading: FC<ListHeadingProps> = ({ text }) => {
    return (
        <Typography variant='h5' gutterBottom>
            { text }
        </Typography>
    );
};

export default ListHeading;