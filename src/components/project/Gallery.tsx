'use client';

import {
  addTransitionType,
  startTransition,
  useState,
  ViewTransition,
  type KeyboardEvent,
} from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryProps {
  images: string[];
  title: string;
  transitionName: string;
}

const Gallery = ({ images, title, transitionName }: GalleryProps) => {
  const [index, setIndex] = useState(0);
  const hasMany = images.length > 1;

  const goTo = (nextIndex: number) => {
    const wrapped = (nextIndex + images.length) % images.length;

    if (wrapped === index) {
      return;
    }

    startTransition(() => {
      addTransitionType(nextIndex > index ? 'gallery-next' : 'gallery-prev');
      setIndex(wrapped);
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') goTo(index + 1);
    if (event.key === 'ArrowLeft') goTo(index - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* `update="none"`: only the inner slide animates when the image changes */}
      <ViewTransition name={transitionName} share="morph" update="none">
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={`${title} screenshots`}
          tabIndex={hasMany ? 0 : undefined}
          onKeyDown={hasMany ? onKeyDown : undefined}
          className="group relative aspect-16/10 overflow-hidden rounded-3xl border border-border bg-default focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          <ViewTransition
            key={images[index]}
            enter={{
              'gallery-next': 'slide-from-right',
              'gallery-prev': 'slide-from-left',
              default: 'none',
            }}
            exit={{
              'gallery-next': 'slide-to-left',
              'gallery-prev': 'slide-to-right',
              default: 'none',
            }}
          >
            <Image
              src={images[index]}
              alt={`${title} screenshot ${index + 1} of ${images.length}`}
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover object-top"
              priority={index === 0}
            />
          </ViewTransition>

          {hasMany && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous screenshot"
                className="absolute top-1/2 left-4 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 opacity-0 backdrop-blur transition group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next screenshot"
                className="absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 opacity-0 backdrop-blur transition group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <p className="absolute right-4 bottom-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur">
                {index + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      </ViewTransition>

      {hasMany && (
        <ul className="flex snap-x gap-3 overflow-x-auto pb-2">
          {images.map((image, imageIndex) => (
            <li key={image} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => goTo(imageIndex)}
                aria-label={`Show screenshot ${imageIndex + 1}`}
                aria-current={imageIndex === index}
                className={cn(
                  'relative block h-16 w-24 overflow-hidden rounded-xl border-2 transition',
                  imageIndex === index
                    ? 'border-accent'
                    : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
