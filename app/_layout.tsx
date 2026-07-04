
import { useState } from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplash from "../src/components/common/AnimatedSplash";
import "../global.css";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <GestureHandlerRootView className="flex-1">
      {showSplash ? (
        <AnimatedSplash
          onFinish={() => setShowSplash(false)}
        />
      ) : (
        <Stack screenOptions={{ headerShown: false }} />
      )}
    </GestureHandlerRootView>
  );
}


