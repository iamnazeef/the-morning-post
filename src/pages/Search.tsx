import { useSearchParams, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Article } from "../ts/types";
import Page from "../components/Page";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [news, setNews] = useState<Article[]>([]);
  const [newsError, setNewsError] = useState("Something went wrong...");
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  const { language } = useContext(LanguageContext) || { language: "en" };
  const query = searchParams.get("q");

  if (query === null || query === "") {
    return <Navigate to="/" replace={true} />;
  }

  const { data, error, isLoading } = useFetch([query, language]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setNews(data);
      setIsNewsLoading(isLoading);
      setNewsError(error);
    }

    return () => {
      isMounted = false;
    };
  }, [data]);

  return (
    <Page
      heading={`Showing results for "${query}"`}
      news={news}
      isLoading={isNewsLoading}
      error={newsError}
    />
  );
};

export default Search;
