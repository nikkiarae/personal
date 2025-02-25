"use client";

import React, { PropsWithChildren } from 'react';
import { Container } from '@mui/material';

const Page: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container disableGutters sx={{ mt: {xs: 2, md: 4}, mb: {xs: 8, md: 14} }}>
            { children }  
        </Container>
    )
};

export default Page;