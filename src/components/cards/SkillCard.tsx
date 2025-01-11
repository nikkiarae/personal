import React from 'react';
import { CardContent, Typography, Box, useTheme, Stack } from '@mui/material';
import { Skill } from '@services/types';
import CardWrapper from './CardWrapper';

interface SkillCardProps {
  skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const theme = useTheme()
    return (
        <Box>
            <CardWrapper>
                <CardContent>
                    <Stack spacing={2} alignItems={'center'}>
                        <Box 
                            component={'img'}
                            src={skill.icon} 
                            alt={skill.name}
                            sx={{
                                height: {xs: 50, sm: 70},
                                width: {xs: 50, sm: 70}
                            }}
                        />
                        <Typography variant="body1">{skill.name}</Typography>
                    </Stack>
                    
                </CardContent>
            </CardWrapper>
        </Box>
    );
};

export default SkillCard;