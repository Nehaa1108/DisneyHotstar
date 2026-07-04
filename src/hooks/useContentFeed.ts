import { useCallback, useEffect, useState } from "react";
import { HomeFeed } from "../types/content";
import { fetchHomeFeed } from "../api/services";

interface UseContentFeedResult {
  data: HomeFeed | null;
  isLoading: boolean;
  isError: boolean;
  refetch: () => Promise<void>;
}

export function useContentFeed(): UseContentFeedResult {
  const [data, setData] = useState<HomeFeed | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const result = await fetchHomeFeed();
      setData(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { data, isLoading, isError, refetch: load };
}
