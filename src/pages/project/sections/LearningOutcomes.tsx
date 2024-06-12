import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SectionHeading } from '@components/typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface LearningOutcomesProps {
    content: string[]
}

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ content }) => {
    return (
        <Box>
            <SectionHeading text={'Learning Outcomes'} />
            <List>
                { content.map((outcome: string, idx: React.Key) => (
                    <ListItem key={idx} sx={{ alignItems: 'start' }}>
                        <ListItemIcon sx={{ mt: 1 }}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={outcome} />
                    </ListItem>
                )) }
            </List>
        </Box>
    );
};

export default LearningOutcomes;
