export const api = {
  news(query: string, country: string, category: string, lang: string) {
    return `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&lang=${lang}&q=${query}&apikey=${
      import.meta.env.VITE_GNEWS_API_KEY
    }`;
  },
  weather(longitude: number = 77.209, latitude: number = 28.6139) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    }&units=metric`;
  },
};
