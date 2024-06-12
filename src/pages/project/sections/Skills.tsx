import React from 'react';
import { Grid, Box, Stack } from '@mui/material';
import { ListHeading, ListItem, SectionHeading } from '@components/typography';

interface SkillsProps {
    technologies: string[]
    libraries: string[]
    softSkills: string[]
}

const Skills: React.FC<SkillsProps> = ({ technologies, libraries, softSkills }) => {
    return (
        <Box>
            <SectionHeading text={'Skills'} />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Technologies'} />
                    <Stack spacing={1}>
                        { technologies.map((tech: string, idx: React.Key) => (
                            <ListItem key={idx} text={tech} />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Libraries'} />
                    <Stack spacing={1}>
                        { libraries.map((library: string, idx: React.Key) => (
                            <ListItem key={idx} text={library} />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ListHeading text={'Soft Skills'} />
                    <Stack spacing={1}>
                        { softSkills.map((soft: string, idx: React.Key) => (
                            <ListItem key={idx} text={soft} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Skills;