"use client";

import React, { FC } from 'react';
import { CardContent, Typography, Box, Stack } from '@mui/material';
import { Skill } from '@/types/types';
import CardWrapper from './CardWrapper';

interface SkillCardProps {
  skill: Skill
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => {
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