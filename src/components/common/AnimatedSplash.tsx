import { useEffect } from "react";
import { Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
  Easing,
} from "react-native-reanimated";

interface AnimatedSplashProps {
  onFinish: () => void;
}

export default function AnimatedSplash({ onFinish }: AnimatedSplashProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.out(Easing.ease),
    });
    scale.value = withSequence(
      withTiming(1.1, { duration: 500, easing: Easing.out(Easing.ease) }),
      withTiming(1, { duration: 200 }),
    );

    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 400 }, (finished) => {
        if (finished) runOnJS(onFinish)();
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      className="flex-1 bg-black justify-center items-center"
      style={animatedStyle}
    >
      <Image
        source={require("../../../assets/images/splash-icon.png")}
        className="w-64 h-64"
        resizeMode="contain"
      />
    </Animated.View>
  );
}
