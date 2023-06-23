import { useState } from "react";
import { useEffect } from "react";

const useFetch = (URL: string | null) => {
  const controller = new AbortController();
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setError("");
      setIsLoading(true);
      if (URL) {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            if (isMounted) {
              setData(data);
            }
          })
          .catch((err) => {
            if (isMounted) {
              setError(err.message);
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
  }, [URL]);

  return { data, error, isLoading };
};

export default useFetch;
