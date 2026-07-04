import { useCallback, useEffect, useRef, useState } from "react";
import { ContentItem, SearchSuggestion } from "../types/content";
import { fetchTrendingSearches, searchContent } from "../api/services";

interface UseSearchResult {
  query: string;
  setQuery: (q: string) => void;
  results: ContentItem[];
  trending: SearchSuggestion[];
  isSearching: boolean;
  isLoadingTrending: boolean;
  hasSearched: boolean;
}

const DEBOUNCE_MS = 400;

export function useSearch(): UseSearchResult {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ContentItem[]>([]);
  const [trending, setTrending] = useState<SearchSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingTrending, setIsLoadingTrending] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchTrendingSearches()
      .then(setTrending)
      .finally(() => setIsLoadingTrending(false));
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    debounceRef.current = setTimeout(async () => {
      const data = await searchContent(query);
      setResults(data);
      setIsSearching(false);
      setHasSearched(true);
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const clearQuery = useCallback(() => setQuery(""), []);

  return {
    query,
    setQuery,
    results,
    trending,
    isSearching,
    isLoadingTrending,
    hasSearched,
  };
}
