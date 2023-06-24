import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const { geolocation } = navigator;

  useEffect(() => {
    let isMounted = true;

    if (geolocation) {
      geolocation.getCurrentPosition(
        (position) => {
          if (isMounted) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          }
        },
        (error) => console.error(error.message)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { longitude, latitude };
};

export default useGeolocation;
