import { View, StyleSheet } from "react-native";
import HeroBannerSkeleton from "./HeroBannerSkeleton";
import ContentRowSkeleton from "./ContentRowSkeleton";

export default function HomeSkeleton() {
  return (
    <View className="flex-1">
      <HeroBannerSkeleton />
      {Array.from({ length: 3 }).map((_, i) => (
        <ContentRowSkeleton key={i} />
      ))}
    </View>
  );
}
