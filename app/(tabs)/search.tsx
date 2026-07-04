import { View, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../../src/components/search/SearchBar";
import TrendingChips from "../../src/components/search/TrendingChips";
import SearchResultsList from "../../src/components/search/SearchResultsList";
import EmptyState from "../../src/components/home/EmptyState";

import { useSearch } from "../../src/hooks/useSearch";
import { colors } from "../../src/theme/colors";

import RecentSearches from "../../src/components/search/RecentSearches";
import BrowseCategories from "../../src/components/search/BrowseCategories";

export default function SearchScreen() {
  const {
    query,
    setQuery,
    results,
    trending,
    isSearching,
    isLoadingTrending,
    hasSearched,
  } = useSearch();

  const showTrending = query.trim().length === 0;

  const showNoResults = hasSearched && !isSearching && results.length === 0;

  return (
    <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        onClear={() => setQuery("")}
      />

      {showTrending ? (
        isLoadingTrending ? (
          <View className="mt-20 items-center">
            <ActivityIndicator size="large" color={colors.accent} />
          </View>
        ) : (
          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 120,
            }}
          >
            <TrendingChips items={trending} onSelect={setQuery} />

            <RecentSearches
              items={["Avengers", "Money Heist", "The Boys"]}
              onSelect={setQuery}
            />

            <BrowseCategories onSelect={setQuery} />
          </ScrollView>
        )
      ) : isSearching ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color={colors.accent} />
        </View>
      ) : showNoResults ? (
        <EmptyState
          title="No Results Found"
          subtitle={`We couldn't find "${query}"`}
        />
      ) : (
        <SearchResultsList data={results} />
      )}
    </SafeAreaView>
  );
}
