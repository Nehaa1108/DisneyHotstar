import { View, Dimensions } from "react-native";
import Skeleton from "../common/Skeleton";

const { width } = Dimensions.get("window");

export default function HeroBannerSkeleton() {
  return (
    <View className="relative h-[220px]" style={{ width }}>
      <Skeleton className="h-full w-full rounded-none" />

      <View className="absolute bottom-6 left-4 right-4">
        <Skeleton className="mb-2 h-[22px] w-[180px]" />

        <Skeleton className="h-[13px] w-[120px]" />
      </View>
    </View>
  );
}
