import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { api } from "../utils/api";
import { LanguageContext } from "../context/LanguageContext";
import { useSearchParams } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";

const useFetch = (dependencies: string[]) => {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "None";
  const category = searchParams.get("category") || "general";
  const { language } = useContext(LanguageContext) || { language: "en" };
  const { country } = useContext(CountryContext) || { country: "in" };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    if (isMounted) {
      setData([]);
      setError("");
    }

    if (isMounted) {
      let URL = "";
      if (query) {
        URL = api.news(query, country, category, language);
      }
      if (URL) {
        setIsLoading(true);
        axios
          .get(URL, { signal: controller.signal })
          .then((response) => {
            if (isMounted) {
              setData(response.data.articles);
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
    }

    return () => {
      controller.abort();
      isMounted = false;
    };
  }, dependencies);

  return { data, error, isLoading };
};

export default useFetch;
