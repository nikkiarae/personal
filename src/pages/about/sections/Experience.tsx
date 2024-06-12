import React, { useState } from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemText, ListItemIcon, useTheme } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { SectionHeading } from '@components/typography';

interface Job {
    company: string
    title: string
    location: string
    date: string
    responsibilities: string[]
}

const jobs: Job[] = [
    {
        company: 'SRC UK',
        title: 'Full Stack Developer',
        location: 'UK',
        date: 'Oct 2023 - Current',
        responsibilities: [
            'Involved in the development of a market-disrupting project management solution as a Full-Stack Developer, utilizing TypeScript, React for front- end development, and C# .NET Core for backend services. This role involved laying the groundwork for the application\'s architecture, ensuring a scalable, robust foundation that leverages modern development practices and technologies.',
            'Pioneering initial development phases, blending user-friendly front-end interfaces with efficient back-end logic, and setting high standards for code quality and system performance.',
        ],
    },
    {
        company: 'PassiveLogic',
        title: 'Software Developer',
        location: 'UT, USA',
        date: 'July 2021 - Sept 2023',
        responsibilities: [
            'Lead programmer responsible for creating an interpretive application facilitating the understanding of the Quantum Standard Ontology, offering diverse pathways to explore the foundational elements and their interconnectedness.',
            'Created the Boolean Builder component that interpreted the Quantum Standard to create and return GraphQL results of specific building data.',
        ],
    },
    {
        company: 'Travis Perkins Group',
        title: 'Web Developer',
        location: 'UK',
        date: 'Jan 2022 - June 2022',
        responsibilities: [
            'Played a role in designing, developing, and maintaining responsive and user-friendly websites for Travis Perkins, ensuring optimal functionality across various devices and browsers using React.',
            'Collaborated closely with cross-functional teams, including UI/UX designers and backend developers, to deliver seamless and visually appealing user interfaces that aligned with the company\'s branding and user experience standards.',
        ],
    },
    {
        company: 'Travis Perkins Group',
        title: 'IT Analyst',
        location: 'UK',
        date: 'June 2021 - December 2021',
        responsibilities: [
            'Manipulated data from various databases within Google Sheets to help enrich and complete data to import into LeanIX (Data Modeling Tool).',
            'Maintained LeanIX by keeping data current within the application using their API and maintaining any external integrations.',
        ],
    },
    {
        company: 'PassiveLogic',
        title: 'Junior Software Engineer',
        location: 'UT, USA',
        date: 'June 2021 - December 2021',
        responsibilities: [
            'Implemented a universal drag and drop protocol to be implemented within the application using standard DOM event.',
            'Assisted in the creation of a custom Enyo.js component library to use within all the applications.',
        ],
    }
];

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
                                        backgroundColor: '#f5f5f5',
                                    },
                                }}
                            >
                                <ListItemText
                                primary={company.company}
                                primaryTypographyProps={{ style: { color: selectedJob === idx ? '#6A0DAD' : 'inherit' } }}
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