'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
  images: string[];
}

const THUMBNAIL_WIDTH = 96;
const THUMBNAIL_HEIGHT = 72;

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {

  if (images.length === 0) {
    return (
      <div
        className="flex min-h-80 items-center justify-center px-3 text-center"
      >
        <p className="text-slate-500">
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
          border-radius: 0.5rem;
          border: solid 3px var(--color-primary);
        }

        .thumb {
          border-radius: 0.5rem;
          height: ${THUMBNAIL_HEIGHT}px;
          overflow: hidden;
          padding: 0;
          transition: none;
        }

        .thumb:hover {
          border-radius: 0.5rem;
          border: solid 3px var(--color-primary);
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
