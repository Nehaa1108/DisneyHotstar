import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  items: string[];
  onSelect: (item: string) => void;
}

export default function RecentSearches({ items, onSelect }: Props) {
  if (items.length === 0) return null;

  return (
    <View className="mt-8 px-4">
      <Text className="text-white text-xl font-bold mb-4">Recent Searches</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item}
          className="flex-row items-center justify-between py-4 border-b border-zinc-800"
          onPress={() => onSelect(item)}
        >
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={18} color="#999" />

            <Text className="ml-3 text-white">{item}</Text>
          </View>

          <Ionicons name="arrow-up-outline" size={18} color="#777" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
