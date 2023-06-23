import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { api } from "../utils/api";
import { WeatherData } from "../ts/types";

const Weather = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | any>({});
  const [weatherError, setWeatherError] = useState("");
  const [weatherDataLoading, setWeatherDataLoading] = useState(true);

  const { data, error, isLoading } = useFetch(api.weather(longitude, latitude));

  useEffect(() => {
    setWeatherData(data);
    setWeatherError(error);
    setWeatherDataLoading(isLoading);
  }, [data, error, isLoading]);

  useEffect(() => {
    let isMounted = true;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
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

  return (
    <section className="weather bg-white max-w-[400px] laptop:mx-auto flex items-center justify-around font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <div className="icon flex flex-col items-center">
        {weatherData?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt={weatherData?.weather[0].main}
            width={60}
            height={60}
            title={weatherData?.weather[0].main}
          />
        )}
        <span className="text-xs font-noto-sans-georgian capitalize text-gray-600">
          {weatherData?.weather && weatherData?.weather[0]?.main}
        </span>
      </div>
      <div className="info text-center flex flex-col max-w-[200px]">
        <div className="text-2xl">
          <span className="font-[700]">
            {weatherData?.main?.temp ? Math.floor(weatherData?.main?.temp) : ""}
          </span>
          <span>&deg;C</span>
        </div>
        <span className="text-base break-words text-gray-600">
          {weatherData?.name ? weatherData?.name : ""}
        </span>
      </div>
    </section>
  );
};

export default Weather;
