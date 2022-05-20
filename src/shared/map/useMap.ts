import { useCallback, useEffect, useMemo, useState } from 'react';
import { PlacesIF } from '../../redux/initialState';

const Map = (
  center: PlacesIF['location'],
  zoom: number,
  mapRef: any,
  placeId: PlacesIF['placeId']
) => {
  const [googlePlaceImage, setGooglePlaceImage] = useState<any>(null);

  const request = {
    placeId,
    fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'photos'],
  };
  const memoizedReq = useMemo(() => {
    return request;
  }, [placeId]);

  const callback = useCallback((place: any, status: any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setGooglePlaceImage(place.photos);
    }
  }, []);

  useEffect(() => {
    console.log('map');
    const centeredMap = {
      center,
      zoom,
    } as google.maps.MapOptions;
    if (mapRef.current) {
      let map = new window.google.maps.Map(mapRef.current, centeredMap);
      let service = new google.maps.places.PlacesService(map);
      service.getDetails(memoizedReq, callback);
      new window.google.maps.Marker({
        position: center,
        map: map,
      });
    }
  }, [mapRef, zoom, memoizedReq, center, callback]);

  return googlePlaceImage;
};

export default Map;
