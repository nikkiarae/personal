"use client =";

import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ListItemProps {
    text: string
}

const ListItem: FC<ListItemProps> = ({ text }) => {
    return (
        <Typography variant='body1'>
            { text }
        </Typography>
    );
};

export default ListItem;