'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { borderRadius } from '@/styles/globalStyle';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTheme } from '@/hooks/useTheme';

interface CarouselProps {
  images: string[];
}

const THUMBNAIL_WIDTH = 96;
const THUMBNAIL_HEIGHT = 72;

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const { theme } = useTheme();

  if (images.length === 0) {
    return (
      <div
        className="flex min-h-[320px] items-center justify-center px-3 text-center"
        style={{
          borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <p style={{ color: theme.palette.text.secondary }}>
          Project screenshots coming soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Carousel
        dynamicHeight={true}
        renderThumbs={() =>
          images.map((image: string, idx: number) => (
            <div
              key={`${image}-${idx}`}
              style={{
                height: `${THUMBNAIL_HEIGHT}px`,
                position: 'relative',
                width: `${THUMBNAIL_WIDTH}px`,
              }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${idx}`}
                fill
                sizes={`${THUMBNAIL_WIDTH}px`}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))
        }
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={images.length > 1}
        thumbWidth={THUMBNAIL_WIDTH}
      >
        {images.map((image: string, idx: number) => (
          <div key={idx}>
            <Image
              src={image}
              alt={`Slide ${idx}`}
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>
        ))}
      </Carousel>
      <style jsx global>{`
        .thumbs {
          display: flex;
          gap: 8px;
          margin: 0;
          padding: 0;
        }

        .thumbs .selected {
          border-radius: ${borderRadius};
          border: solid 3px ${theme.palette.primary.main};
        }

        .thumb {
          border-radius: ${borderRadius};
          height: ${THUMBNAIL_HEIGHT}px;
          overflow: hidden;
          padding: 0;
          transition: none;
        }

        .thumb:hover {
          border-radius: ${borderRadius};
          border: solid 3px ${theme.palette.primary.main};
        }

        .thumbs-wrapper {
          margin-inline: 0;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;
