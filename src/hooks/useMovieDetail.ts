import { useEffect, useState } from "react";
import { MovieDetail } from "../types/content";
import { fetchMovieDetail } from "../api/services";

export function useMovieDetail(id: string) {
  const [data, setData] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    setIsError(false);
    fetchMovieDetail(id)
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, isLoading, isError };
}
