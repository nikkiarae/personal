'use client';

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { borderRadius } from '@/styles/globalStyle';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const theme = useTheme();

  if (images.length === 0) {
    return (
      <Box
        sx={{
          minHeight: 320,
          borderRadius: borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.grey[100],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Project screenshots coming soon.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        '.thumbs': {
          m: 0,
          p: 0,
          '.selected': {
            borderRadius: borderRadius,
            border: `solid 3px ${theme.palette.primary.main}`,
          },
          '.thumb': {
            transition: 'none',
            ':hover': {
              borderRadius: borderRadius,
              border: `solid 3px ${theme.palette.primary.main}`,
            },
          },
        },
        '.thumbs-wrapper': {
          mx: 0,
          mb: 0,
        },
      }}
    >
      <Carousel dynamicHeight={true} showArrows={true} showIndicators={false}>
        {images.map((image: string, idx: React.Key) => (
          <div key={idx}>
            <Image
              src={image}
              alt={`Slide ${idx}`}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
