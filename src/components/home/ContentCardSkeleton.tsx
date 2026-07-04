import { View } from "react-native";
import Skeleton from "../common/Skeleton";

export default function ContentCardSkeleton() {
  return (
    <View className="w-[110px] mr-3">
      <Skeleton style={{ width: 110, height: 165 }} />
      <Skeleton style={{ width: 80, height: 11, marginTop: 6 }} />
    </View>
  );
}
