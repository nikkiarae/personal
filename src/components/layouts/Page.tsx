import React, { PropsWithChildren } from 'react';
import { Container } from '@mui/material';

interface PageProps {}

const Page: React.FC<PropsWithChildren<PageProps>> = ({ children }) => {
    return (
        <Container disableGutters sx={{ mt: {xs: 4, md: 6}, mb: {xs: 8, md: 14} }}>
            { children }  
        </Container>
    )
};

export default Page;