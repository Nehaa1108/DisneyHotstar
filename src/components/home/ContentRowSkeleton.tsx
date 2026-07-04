import { View } from "react-native";
import Skeleton from "../common/Skeleton";
import ContentCardSkeleton from "./ContentCardSkeleton";

export default function ContentRowSkeleton() {
  return (
    <View className="mt-6 pl-4">
      <Skeleton style={{ width: 140, height: 16, marginBottom: 12 }} />
      <View className="flex-row">
        {Array.from({ length: 4 }).map((_, i) => (
          <ContentCardSkeleton key={i} />
        ))}
      </View>
    </View>
  );
}
