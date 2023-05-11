import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [YOUR_LONGITUDE, YOUR_LATITUDE],
      zoom: YOUR_ZOOM_LEVEL
    });

    // Add additional map-related code here

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="map-container">
      {/* Additional content or functionality */}
    </div>
  );
};

export default Map;
