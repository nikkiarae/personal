import React from 'react';
import Map, { MapProvider, MapRef, Marker } from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
    longitude: number;
    latitude: number;
}

const MapComponent: React.FC<MapProps> = ({ longitude, latitude }) => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7751,
        longitude: -122.4193,
        zoom: 4,
    });

    const mapRef = React.useRef<MapRef>(null);

    React.useEffect(() => {
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
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={viewport}
                style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '20px',
                }}
                mapStyle="mapbox://styles/mapbox/light-v9"
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