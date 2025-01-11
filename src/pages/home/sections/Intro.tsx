import React from 'react';
import { Box, Typography, Button, Avatar, Stack, useTheme } from '@mui/material';
import ProfilePic from '@assets/images/profile.jpeg'
import { NavLink } from 'react-router-dom';
import { PROJECTS, RESUME } from '@services/constants';

const Intro: React.FC = () => {
    const theme = useTheme()
    return (
        <Stack 
            spacing={{ xs: 6, md: 10 }} 
            direction={{ xs: 'column', md: 'row' }}
            sx={{ mb: {xs: 6, md: 10} }}
        >
            <Stack direction={'column'} spacing={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" color="textSecondary">
                    Hey, I'm Nikki 👋
                </Typography>
                <Box>
                    <Typography variant="h1" color="primary">
                        Full Stack
                    </Typography>
                    <Typography variant="h1" sx={{  }}>
                        Developer
                    </Typography>
                </Box>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                    Specializing in full-stack development, with a focus on building robust, scalable, and user-friendly applications.
                </Typography>
                <Stack direction={'row'} spacing={2} display={'flex'} justifyContent={{ xs: 'center', md: 'start' }}>
                    <Button component={NavLink} to={`${RESUME.toLowerCase()}`} variant="contained" color="primary" size='large'>
                        View Resume
                    </Button>
                    <Button component={NavLink} to={`${PROJECTS.toLowerCase()}`}variant="outlined" color="primary" size='large'>
                        Browse Projects
                    </Button>
                </Stack>
            </Stack>
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{ 
                        p: 3,
                        borderRadius: '50%',
                        border: `4px solid ${theme.palette.primary.main}`,
                    }}
                >
                    <Avatar
                        alt="Nikki Rae"
                        src={`${ProfilePic}`}
                        sx={{ 
                            width: {xs: 280, md: 320, lg: 350}, 
                            height: {xs: 280, md: 320, lg: 350}, 
                            '.MuiAvatar-img': {
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }
                        }}
                    />
                </Box>
            </Box>
        </Stack>
    )
};

export default Intro;