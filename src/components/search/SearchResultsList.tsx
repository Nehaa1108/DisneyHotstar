import { memo, useCallback } from "react";
import { FlatList, View } from "react-native";

import { ContentItem } from "../../types/content";
import ContentCard from "../home/ContentCard";

interface Props {
  data: ContentItem[];
}

function SearchResultsList({ data }: Props) {
  const renderItem = useCallback(
    ({ item }: { item: ContentItem }) => <ContentCard item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: ContentItem) => item.id, []);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 120,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginBottom: 18,
      }}
      initialNumToRender={12}
      maxToRenderPerBatch={12}
      windowSize={5}
    />
  );
}

export default memo(SearchResultsList);
