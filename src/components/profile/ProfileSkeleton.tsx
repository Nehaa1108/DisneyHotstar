import { View } from "react-native";
import Skeleton from "../common/Skeleton";

export default function ProfileSkeleton() {
  return (
    <View className="flex-1">
      <View className="items-center pt-8 pb-6">
        <Skeleton className="w-96 h-96 rounded-full" />
        <Skeleton className="width: 140, height: 20, marginTop: 16" />
        <Skeleton className="width: 180, height: 14, marginTop: 8" />
        <Skeleton className="width: 120, height: 28, marginTop: 12, borderRadius: 20" />
      </View>

      <View className="h-2 bg-surface" />

      {Array.from({ length: 6 }).map((_, i) => (
        <View
          key={i}
          className="flex-row items-center px-4 py-4 border-b border-border"
        >
          <Skeleton className="width: 36, height: 36, borderRadius: 18" />
          <Skeleton className="width: 140, height: 14, marginLeft: 12" />
        </View>
      ))}
    </View>
  );
}
