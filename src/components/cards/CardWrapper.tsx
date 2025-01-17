import React, { PropsWithChildren } from 'react';
import { Card, CardProps } from '@mui/material';
import { borderRadius, boxShadow } from '@styles/globalStyle';

interface CardWrapperProps extends CardProps {}

const CardWrapper: React.FC<PropsWithChildren<CardWrapperProps>> = ({ children }) => {
    return (
        <Card
            elevation={10}
            sx={{
                textDecoration: 'none',
                borderRadius: borderRadius,
                boxShadow: boxShadow,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.1s ease-in-out',
                ':hover': { 
                    transform: 'scale3d(1.01, 1.01, 1)',
                    // boxShadow: `0px 0px 15px ${theme.palette.primary.main}`,
                },
            }}
        >
            { children }
        </Card>
    );
};

export default CardWrapper;