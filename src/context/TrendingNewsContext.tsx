import { createContext, useState, ReactNode } from "react";
import { Article } from "../ts/types";

interface TrendingContextValue {
  trendingNews: Article[];
  setTrendingNews: React.Dispatch<React.SetStateAction<Article[]>>;
}

export const TrendingNewsContext = createContext<TrendingContextValue | null>(
  null
);

interface Props {
  children: ReactNode;
}

const TrendingNewsProvider = ({ children }: Props) => {
  const [trendingNews, setTrendingNews] = useState<Article[]>([]);

  return (
    <TrendingNewsContext.Provider value={{ trendingNews, setTrendingNews }}>
      {children}
    </TrendingNewsContext.Provider>
  );
};

export default TrendingNewsProvider;
