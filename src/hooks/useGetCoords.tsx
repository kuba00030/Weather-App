import { useEffect, useState } from "react";

export type Coords = {
  lat: number;
  lon: number;
};

export default function useGetCoords() {
  const [coords, setCoords] = useState<Coords | undefined>(undefined);

  useEffect(() => {
    const nav = navigator.geolocation;

    const successCallback = (position: GeolocationPosition) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error(error.message);
    };

    nav.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return { coords };
}
