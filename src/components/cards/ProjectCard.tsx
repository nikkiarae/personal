import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Project } from '@services/types';
import CardWrapper from './CardWrapper';
import { PROJECTS } from '@services/constants';

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const theme = useTheme()
    return (
        <Box
            component={NavLink}
            to={`/${PROJECTS.toLowerCase()}/${project.id}`}
            sx={{ textDecoration: 'none' }}
        >
            <CardWrapper>
                <CardMedia
                    component="img"
                    height="300"
                    image={project.images[0]}
                    alt={project.title}
                    sx={{ 
                        borderBottom: '5px solid #6A0DAD',     
                        objectFit: 'cover',
                        objectPosition: 'top' 
                    }}
                />
                <CardContent>
                    <Typography variant="h5">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{}}>
                        {project.briefDescription}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'end', p: 1 }}>
                    <ArrowForwardIcon sx={{ color: theme.palette.primary.main, fontSize: 40 }} />
                </Box>
            </CardWrapper>
        </Box>
    );
};

export default ProjectCard;