import { createContext, useState } from "react";
// import { WeatherData } from "../ts/types";

export const NewsContext = createContext<any>(null);

const NewsProvider = ({ children }: any) => {
  const [news, setNews] = useState<any>([]);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
