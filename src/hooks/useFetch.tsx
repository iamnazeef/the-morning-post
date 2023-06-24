import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useFetch = (URL: string | null) => {
  const controller = new AbortController();
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setError("");
      setIsLoading(true);
      if (URL) {
        axios
          .get(URL, {
            signal: controller.signal,
          })
          .then((response) => {
            if (isMounted) {
              setData(response.data);
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
