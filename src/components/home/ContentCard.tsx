import { memo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ContentItem } from "../../types/content";

interface Props {
  item: ContentItem;
}

function ContentCard({ item }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="w-[110px] mr-3"
      onPress={() => router.push(`/detail/${item.id}`)}
    >
      <View className="relative">
        <Image
          source={{ uri: item.posterUrl }}
          className="w-[110px] h-[165px] rounded-lg bg-surface"
          resizeMode="cover"
        />

        {item.rating && (
          <View className="absolute right-2 top-2 rounded-full bg-black/80 px-2 py-1">
            <Text className="text-[10px] font-semibold text-yellow-400">
              ⭐ {item.rating}
            </Text>
          </View>
        )}

        {item.isLive && (
          <View className="absolute left-1.5 top-1.5 rounded-md bg-red-600 px-2 py-1">
            <Text className="text-[9px] font-bold text-white">LIVE</Text>
          </View>
        )}
      </View>

      <Text
        numberOfLines={1}
        className="mt-1.5 text-sm font-semibold text-white  numberOfLines={1}"
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(ContentCard, (prev, next) => prev.item.id === next.item.id);
