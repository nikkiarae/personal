"use client";

import React, { FC, useEffect, useRef } from 'react';
import Map, { MapProvider, MapRef, Marker } from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useTheme } from '@mui/material';
import { MAPBOX_TOKEN } from '@/lib/constants/config';

interface MapProps {
    longitude: number;
    latitude: number;
}

const MapComponent: FC<MapProps> = ({ longitude, latitude }) => {
    const theme = useTheme()
    const viewport = {
        latitude: 37.7751,
        longitude: -122.4193,
        zoom: 4,
    };

    const mapRef = useRef<MapRef>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.flyTo({
                    center: [longitude, latitude],
                    duration: 4000,
                    zoom: 4,
                });
            }
        }, 100);
        return () => clearTimeout(timer); 

    }, [latitude, longitude]);

    return (
        <MapProvider>
            <Map
                ref={mapRef}
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={viewport}
                style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '20px',
                }}
                mapStyle={`mapbox://styles/mapbox/${theme.palette.mode === 'dark' ? 'dark' : 'light'}-v9`}
                dragPan={false}
                dragRotate={false}
                scrollZoom={false}
                doubleClickZoom={false}
                touchZoomRotate={false}
            >
                <Marker longitude={longitude} latitude={latitude}>
                    <PlaceIcon fontSize="large" sx={{ color: 'red' }} />
                </Marker>
            </Map>
        </MapProvider>
    );
};

export default MapComponent;