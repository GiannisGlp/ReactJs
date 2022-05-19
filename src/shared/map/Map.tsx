import React, { useRef, useEffect } from 'react';
import { PlacesIF } from '../../redux/initialState';
import classes from './Map.module.css';
const Map = (props: { center: PlacesIF['location']; zoom: number }) => {
  const { center, zoom } = props;
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const centeredMap = {
      center,
      zoom,
    } as google.maps.MapOptions;
    let map = new window.google.maps.Map(mapRef.current, centeredMap);
    new window.google.maps.Marker({
      position: center,
      map: map,
    });
  }, [center, zoom]);

  return <div ref={mapRef} className={classes.map}></div>;
};

export default Map;
