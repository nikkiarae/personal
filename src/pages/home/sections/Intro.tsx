import React from 'react';
import { Box, Typography, Button, Avatar, Grid, Stack } from '@mui/material';

const Intro: React.FC = () => {
  return (
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ mb: {xs: 6, md: 10} }}>
            <Grid item xs={12} md={7}>
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
                        <Button variant="contained" color="primary" size='large'>
                            Get In Touch
                        </Button>
                        <Button variant="outlined" color="primary" size='large'>
                            Browse Projects
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box 
                    sx={{ 
                        p: 5,
                        borderRadius: '50%',
                        border: '1px solid #6b21a8'
                    }}
                >
                    <Avatar
                        alt="Luca"
                        src="../src/assets/images/profile.jpeg"
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
            </Grid>
        </Grid>
  )
};

export default Intro;