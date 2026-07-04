import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchHero() {
  return (
    <View className="items-center px-6 py-8">
      <View className="h-20 w-20 items-center justify-center rounded-full bg-red-500/20">
        <Ionicons name="search" size={36} color="#EF4444" />
      </View>

      <Text className="mt-5 text-3xl font-bold text-white">Search</Text>

      <Text className="mt-2 text-center text-zinc-400">
        Discover Movies, Series, Live Sports and TV Shows
      </Text>
    </View>
  );
}
