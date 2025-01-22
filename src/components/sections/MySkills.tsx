"use client";

import React, { FC } from 'react';
import { Grid, Box, Stack } from '@mui/material';
import { ListHeading, ListItem, SectionHeading } from '@/components/typography';

const Skills: FC = () => {
    return (
        <Box>
            <SectionHeading text={'Skills'} />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Client-Side'} />
                    <Stack spacing={1}>
                        <ListItem text={'TypeScript'} />
                        <ListItem text={'ReactJS'} />
                        <ListItem text={'NextJS'} />
                        <ListItem text={'EnyoJS'} />
                        <ListItem text={'SwiftUI'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Server-Side'} />
                    <Stack spacing={1}>
                        <ListItem text={'NodeJS'} />
                        <ListItem text={'MongoDB'} />
                        <ListItem text={'GraphQL'} />
                        <ListItem text={'C#'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'DevOps'} />
                    <Stack spacing={1}>
                        <ListItem text={'Git'} />
                        <ListItem text={'AWS'} />
                        <ListItem text={'DigitalOcean'} />
                        <ListItem text={'Docker'} />
                        <ListItem text={'CI/CD'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Web Design'} />
                    <Stack spacing={1}>
                        <ListItem text={'UI/UX Design'} />
                        <ListItem text={'Responsive Design'} />
                        <ListItem text={'Wireframing'} />
                        <ListItem text={'User Research'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Soft Skills'} />
                    <Stack spacing={1}>
                        <ListItem text={'Effective communication'} />
                        <ListItem text={'Collaboration'} />
                        <ListItem text={'Commitment'} />
                        <ListItem text={'Leadership'} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Skills;
