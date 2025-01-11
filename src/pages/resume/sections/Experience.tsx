import React, { useState } from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemText, ListItemIcon, useTheme } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { SectionHeading } from '@components/typography';
import { jobs } from '@services/data';

const Experience: React.FC = () => {
    const theme = useTheme()
    const [selectedJob, setSelectedJob] = useState<number>(0);

    return (
        <Box>
            <SectionHeading text={'Experience'} />
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <List>
                        {jobs.map((company, idx) => (
                            <ListItem
                                key={idx}
                                onClick={() => setSelectedJob(idx)}
                                sx={{
                                    mb: 1,
                                    borderRadius: 3,
                                    backgroundColor: selectedJob === idx ? theme.palette.action.selected : 'inherit',
                                    '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <ListItemText
                                primary={company.company}
                                primaryTypographyProps={{ style: { color: selectedJob === idx ? theme.palette.secondary.main : 'inherit' } }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="h5">
                        { `${jobs[selectedJob].title} - ${jobs[selectedJob].location}`}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                        {jobs[selectedJob].date}
                    </Typography>
                    {jobs[selectedJob].responsibilities.map((task: any, index: React.Key) => (
                        <Box key={index} display="flex" mb={1}>
                            <ListItemIcon sx={{ mt: 1 }}>
                                <DoneIcon 
                                    sx={{ 
                                        color: theme.palette.primary.main,
                                        fontSize: '1.7rem',
                                    }} 
                                />
                            </ListItemIcon>
                            <Typography variant="body1">{task}</Typography>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Experience;