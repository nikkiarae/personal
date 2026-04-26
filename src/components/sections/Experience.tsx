'use client';

import React, { FC, useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { SectionHeading } from '@/components/typography';
import { Job } from '@/types/types';
import { formatDate } from '@/lib/functions';

interface ExperienceProps {
  jobs: Job[];
}

const Experience: FC<ExperienceProps> = ({ jobs }) => {
  const theme = useTheme();
  const [selectedJob, setSelectedJob] = useState<number>(0);
  const currentJob = jobs[selectedJob] ?? jobs[0];

  if (!currentJob) {
    return (
      <Box>
        <SectionHeading text={'Experience'} />
        <Typography variant="body1" color="textSecondary">
          No experience entries are currently visible.
        </Typography>
      </Box>
    );
  }

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
                  backgroundColor:
                    selectedJob === idx
                      ? theme.palette.action.selected
                      : 'inherit',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText
                  primary={company.company}
                  primaryTypographyProps={{
                    style: {
                      color:
                        selectedJob === idx
                          ? theme.palette.secondary.main
                          : 'inherit',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h5">
            {`${currentJob.title} - ${currentJob.location}`}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {currentJob.dateLabel ??
              `${formatDate(currentJob.startDate)} - ${
                currentJob.endDate ? formatDate(currentJob.endDate) : 'Current'
              }`}
          </Typography>
          {currentJob.responsibilities.map((task: string, index: React.Key) => (
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
