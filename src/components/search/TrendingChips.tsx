import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchSuggestion } from "../../types/content";

interface Props {
  items: SearchSuggestion[];
  onSelect: (text: string) => void;
}

export default function TrendingChips({ items, onSelect }: Props) {
  return (
    <View className="mt-6 px-4">
      <Text className="text-white text-xl font-bold mb-5">
        🔥 Trending Searches
      </Text>

      {items.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          onPress={() => onSelect(item.label)}
          className="flex-row items-center justify-between border-b border-zinc-800 py-4"
        >
          <View className="flex-row items-center">
            <Text className="text-red-500 font-bold text-lg mr-4">
              {index + 1}
            </Text>

            <Text className="text-white text-base font-medium">
              {item.label}
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#777" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
