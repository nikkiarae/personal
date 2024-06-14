import React from 'react';
import { Box, Typography, Button, Avatar, Grid, Stack } from '@mui/material';
import ProfilePic from '@assets/images/profile.jpeg'
import { NavLink } from 'react-router-dom';
import { CONTACT, PROJECTS } from '@services/constants';

const Intro: React.FC = () => {
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
                        Software
                    </Typography>
                    <Typography variant="h1" sx={{  }}>
                        Developer
                    </Typography>
                </Box>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                    I'm a software developer based in England. I can help you build beautiful websites your users will love.
                </Typography>
                <Stack direction={'row'} spacing={2} display={'flex'} justifyContent={{ xs: 'center', md: 'start' }}>
                    <Button component={NavLink} to={`${CONTACT.toLowerCase()}`} variant="contained" color="primary" size='large'>
                        Get In Touch
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
                        p: 5,
                        borderRadius: '50%',
                        border: '1px solid #6b21a8',
                    }}
                >
                    <Avatar
                        alt="Nikki Rae"
                        src={`${ProfilePic}`}
                        sx={{ 
                            width: {xs: 260, md: 300, lg: 330}, 
                            height: {xs: 260, md: 300, lg: 330}, 
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