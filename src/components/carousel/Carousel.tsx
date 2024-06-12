import React from 'react';
import { Box, useTheme } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { borderRadius } from '@styles/globalStyle';

interface CarouselProps {
    images: string[]
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                '.thumbs': {
                    m: 0, 
                    p: 0,
                    '.selected': {
                        borderRadius: borderRadius,
                        border: `solid 3px ${theme.palette.primary.main}`
                    },
                    '.thumb': {
                        transition: 'none',
                        ':hover': {
                            borderRadius: borderRadius,
                            border: `solid 3px ${theme.palette.primary.main}`
                        }
                    }
                },
                '.thumbs-wrapper': {
                    mx: 0,
                    mb: 0
                }
            }}
        >
            <Carousel
                dynamicHeight={true}
                showArrows={true}
                showIndicators={false}
            >
                { images.map((image: string, idx: React.Key) => (
                    <div key={idx}>
                        <img src={image} alt={`Slide ${idx}`} />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default CarouselComponent;
