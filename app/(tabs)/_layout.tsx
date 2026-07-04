import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Platform } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff4335",
        tabBarInactiveTintColor: "#6B6E76",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginBottom: 2,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: insets.bottom + 2,

          height: 60,
          paddingTop: 8,
          paddingBottom: 6,

          backgroundColor: "#1A1B20",

          borderRadius: 18,

          borderTopWidth: 1,
          borderTopColor: "#FF6B6B",

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused
                  ? "rgba(31,128,224,0.15)"
                  : "transparent",
                borderRadius: 12,
                paddingHorizontal: 2,
                paddingVertical: 2,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused
                  ? "rgba(31,128,224,0.15)"
                  : "transparent",
                borderRadius: 12,
                paddingHorizontal: 2,
                paddingVertical: 2,
              }}
            >
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused
                  ? "rgba(31,128,224,0.15)"
                  : "transparent",
                borderRadius: 12,
                paddingHorizontal: 2,
                paddingVertical: 2,
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
