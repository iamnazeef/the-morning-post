export const api = {
  weather(longitude: number | null, latitude: number | null) {
    if (latitude === null || longitude === null) return null;

    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`;
  },
};
