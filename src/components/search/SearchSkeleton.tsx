import { View } from "react-native";

export default function SearchSkeleton() {
  return (
    <View className="px-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <View key={item} className="mb-5 h-36 rounded-2xl bg-zinc-900" />
      ))}
    </View>
  );
}
