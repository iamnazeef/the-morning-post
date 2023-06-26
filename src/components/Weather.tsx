import { useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import { WeatherData } from "../ts/types";
import useGeolocation from "../hooks/useGeolocation";
import axios from "axios";
import Loading from "../assets/spinner/Loading";
import { CountryContext } from "../context/CountryContext";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [URL, setURL] = useState("");
  const { longitude, latitude } = useGeolocation();
  const CountryContextValue = useContext(CountryContext);

  if (CountryContextValue === null) {
    return null;
  }

  const { setCountry } = CountryContextValue;

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setURL(api.weather(longitude, latitude));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;
    setError("");

    if (isMounted) {
      setIsLoading(true);

      if (longitude && latitude) {
        setURL(api.weather(longitude, latitude));
      } else {
        setURL(api.weather());
      }

      axios
        .get(URL, {
          signal: controller.signal,
        })
        .then((response) => {
          if (isMounted) {
            setWeather(response.data);
            setCountry(response.data.sys.country.toLowerCase());
          }
        })
        .catch((error) => {
          if (isMounted) {
            setError(error.message);
          }
        })
        .finally(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        });
    }

    return () => {
      controller.abort();
      isMounted = false;
    };
  }, [URL]);

  if (!weather?.weather) {
    return;
  }

  return (
    <section className="weather bg-white w-full tablet:max-w-[400px] laptop:mx-auto flex items-center justify-around font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <div className="icon flex flex-col items-center">
        {weather?.main && (
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt={weather?.weather[0].main}
            width={40}
            height={40}
            title={weather?.weather[0].main}
          />
        )}
        <span className="text-xs font-noto-sans-georgian capitalize text-gray-600">
          {weather?.weather && weather?.weather[0]?.main}
        </span>
      </div>
      {!error && !isLoading && (
        <div className="info text-center flex flex-col max-w-[200px]">
          <div className="text-2xl">
            <span className="font-[700]">
              {weather?.main?.temp ? Math.floor(weather?.main?.temp) : ""}
            </span>
            <span>&deg;C</span>
          </div>
          <span className="text-sm break-words text-gray-600">
            {weather?.name ? weather?.name : ""}
          </span>
        </div>
      )}
      {!isLoading && error && error}
      {!error && isLoading && <Loading />}
    </section>
  );
};

export default Weather;
