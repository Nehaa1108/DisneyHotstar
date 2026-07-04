import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useProfile } from "../../src/hooks/useProfile";

import ProfileAvatar from "../../src/components/profile/ProfileAvatar";
import ProfileMenuItemRow from "../../src/components/profile/ProfileMenuItem";
import ProfileSkeleton from "../../src/components/profile/ProfileSkeleton";
import EmptyState from "../../src/components/home/EmptyState";
import { colors } from "../../src/theme/colors";

export default function ProfileScreen() {
  const { profile, menuItems, isLoading, isError } = useProfile();

  const router = useRouter();

  const handleMenuPress = (id: string) => {
    Alert.alert("Coming Soon", `${id} feature will be available soon.`);
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => {
          router.replace("/");
        },
      },
    ]);
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
        <ProfileSkeleton />
      </SafeAreaView>
    );
  }

  if (isError || !profile) {
    return (
      <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
        <EmptyState
          title="Failed to load profile"
          subtitle="Please try again later."
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-2 pb-1">
        <Text className="text-white text-lg font-bold">My Account</Text>
        <TouchableOpacity hitSlop={8}>
          <Ionicons
            name="settings-outline"
            size={22}
            color={colors.textMuted}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <ProfileAvatar profile={profile} />

        <View className="h-2 bg-surface" />

        <View className="mt-1">
          {menuItems.map((item) => (
            <ProfileMenuItemRow
              key={item.id}
              item={item}
              onPress={handleMenuPress}
            />
          ))}
        </View>

        <TouchableOpacity
          className="flex-row items-center justify-center mx-4 mt-8 mb-6 py-3.5 rounded-xl border border-red-500/40 bg-red-500/10"
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={18} color="#EF4444" />
          <Text className="text-red-500 font-semibold ml-2">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
