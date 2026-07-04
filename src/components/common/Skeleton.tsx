
import { useEffect } from "react";
import {
  View,
  ViewStyle,
  StyleProp,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

interface SkeletonProps {
  className?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Skeleton({
  className = "",
  style,
}: SkeletonProps) {
  const { width: screenWidth } = useWindowDimensions();

  const sweepWidth = 150;
  const translateX = useSharedValue(-sweepWidth);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(screenWidth + sweepWidth, {
        duration: 1300,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [screenWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      className={`overflow-hidden rounded-lg bg-surface ${className}`}
      style={style}
    >
      <Animated.View
        className="absolute inset-0"
        style={animatedStyle}
      >
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.08)",
            "transparent",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="h-full"
          style={{ width: sweepWidth }}
        />
      </Animated.View>
    </View>
  );
}