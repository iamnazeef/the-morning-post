import { useContext, useEffect, useState } from "react";
import { TrendingNewsContext } from "../context/TrendingNewsContext";
import { Article } from "../ts/types";
import { LanguageContext } from "../context/LanguageContext";
import Page from "../components/Page";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [newsError, setNewsError] = useState<string>("");
  const [isNewsLoading, setIsNewsLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const trendingContextValue = useContext(TrendingNewsContext);
  const { language } = useContext(LanguageContext) || { language: "en" };

  if (trendingContextValue === null) {
    return null;
  }

  const { setTrendingNews } = trendingContextValue;
  const { data, error, isLoading } = useFetch([language]);

  const handleInfiniteScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop + 300 >=
      document.documentElement.scrollHeight;

    if (isBottom) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    let isMounted = true;
    window.addEventListener("scroll", handleInfiniteScroll);

    if (isMounted) {
      if (Array.isArray(data)) {
        if (data.length <= 5) {
          setNews((prev) => [...prev, ...data]);
        } else {
          setNews((prev) => [...prev, ...data.slice(5)]);
        }
      }
      if (Array.isArray(data)) {
        setTrendingNews(data.slice(0, 5));
      }
      setNewsError(error);
      setIsNewsLoading(isLoading);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [data, page]);

  return (
    <Page
      heading={"Today's News"}
      news={news}
      isLoading={isNewsLoading}
      error={newsError}
    />
  );
};

export default Home;
