'use client';

import { useRef } from 'react';
import Map, { MapRef, Marker } from 'react-map-gl';
import { useTheme } from 'next-themes';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/lib/constants/config';
import type { Coordinates } from '@/types/types';

const START_VIEW = { longitude: -40, latitude: 45, zoom: 1.4 };

const MapboxMap = ({ longitude, latitude }: Coordinates) => {
  const { resolvedTheme } = useTheme();
  const mapRef = useRef<MapRef>(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const flyToPin = () => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      zoom: 4.2,
      duration: prefersReducedMotion ? 0 : 4000,
      essential: true,
    });
  };

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={START_VIEW}
      style={{ width: '100%', height: '100%' }}
      mapStyle={`mapbox://styles/mapbox/${resolvedTheme === 'dark' ? 'dark' : 'light'}-v11`}
      onLoad={flyToPin}
      dragPan={false}
      dragRotate={false}
      scrollZoom={false}
      doubleClickZoom={false}
      touchZoomRotate={false}
      keyboard={false}
    >
      <Marker longitude={longitude} latitude={latitude} anchor="center">
        <span className="relative flex size-4" aria-hidden="true">
          <span className="ping absolute inline-flex size-full rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-4 rounded-full border-2 border-white bg-accent shadow-lg" />
        </span>
      </Marker>
    </Map>
  );
};

export default MapboxMap;
