import React from 'react';
import { Grid, Box, Stack } from '@mui/material';
import { ListHeading, ListItem, SectionHeading } from '@components/typography';


const Skills: React.FC = () => {
    return (
        <Box>
            <SectionHeading text={'Skills'} />
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <ListHeading text={'Web Design'} />
                    <Stack spacing={1}>
                        <ListItem text={'UI/UX Design'} />
                        <ListItem text={'Responsive Design'} />
                        <ListItem text={'Wireframing'} />
                        <ListItem text={'User Research'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ListHeading text={'Client'} />
                    <Stack spacing={1}>
                        <ListItem text={'Javascript'} />
                        <ListItem text={'ReactJS'} />
                        <ListItem text={'TypeScript'} />
                        <ListItem text={'SwiftUI'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ListHeading text={'Backend'} />
                    <Stack spacing={1}>
                        <ListItem text={'NodeJS'} />
                        <ListItem text={'MongoDB'} />
                        <ListItem text={'ExpressJS'} />
                        <ListItem text={'GraphQL'} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
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
