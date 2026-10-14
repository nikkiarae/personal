'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import type { RegionalLocation } from '@/types/types';

const MapboxMap = dynamic(() => import('./MapboxMap'), { ssr: false });

interface LocationMapProps {
  location: RegionalLocation;
}

/** Defers loading Mapbox until the map is about to scroll into view. */
const LocationMap = ({ location }: LocationMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-80 overflow-hidden rounded-3xl border border-border bg-default md:h-full md:min-h-96"
    >
      {isNearViewport && <MapboxMap {...location.coordinates} />}
      <p className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-sm font-medium backdrop-blur">
        <MapPin size={14} className="text-accent" aria-hidden="true" />
        {location.label}
      </p>
    </div>
  );
};

export default LocationMap;
