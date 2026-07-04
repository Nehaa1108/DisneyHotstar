import { View, Text, Image } from "react-native";
import { UserProfile } from "../../api/mockData/profile";

interface ProfileAvatarProps {
  profile: UserProfile;
}

export default function ProfileAvatar({ profile }: ProfileAvatarProps) {
  return (
    <View className="items-center pt-8 pb-6 px-4">
      <View className="relative">
        <Image
          source={{ uri: profile.avatarUrl }}
          className="w-24 h-24 rounded-full bg-surface"
          resizeMode="cover"
        />

        <View className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
      </View>

      <Text className="text-white text-xl font-bold mt-4">{profile.name}</Text>
      <Text className="text-textMuted text-sm mt-1">{profile.email}</Text>

      <View className="flex-row items-center mt-3 bg-accent/20 px-4 py-1.5 rounded-full border border-accent/40">
        <Text className="text-accent text-xs font-bold tracking-wider">
          ⭐ {profile.plan.toUpperCase()}
        </Text>
        <Text className="text-textMuted text-xs ml-2">
          · Expires {profile.planExpiry}
        </Text>
      </View>
    </View>
  );
}
