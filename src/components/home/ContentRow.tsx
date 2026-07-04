import { memo, useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { ContentItem, ContentRowData } from "../../types/content";
import ContentCard from "./ContentCard";

interface ContentRowProps {
  row: ContentRowData;
}

function ContentRow({ row }: ContentRowProps) {
  const renderItem = useCallback(
    ({ item }: { item: ContentItem }) => <ContentCard item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: ContentItem) => item.id, []);

  return (
    <View className="mt-6">
      <Text className="text-white text-base font-semibold mb-3 pl-4">
        {row.title}
      </Text>
      <FlatList
        data={row.items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
        initialNumToRender={4}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
}

export default memo(ContentRow);
