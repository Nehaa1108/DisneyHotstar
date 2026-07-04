import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProfileMenuItem as ProfileMenuItemType } from "../../api/mockData/profile";
import { colors } from "../../theme/colors";

interface ProfileMenuItemProps {
  item: ProfileMenuItemType;
  onPress: (id: string) => void;
}

export default function ProfileMenuItemRow({
  item,
  onPress,
}: ProfileMenuItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center px-4 py-4 border-b border-border"
      activeOpacity={0.7}
      onPress={() => onPress(item.id)}
    >
      <View className="w-9 h-9 rounded-full bg-surface items-center justify-center mr-3">
        <Ionicons name={item.icon as any} size={18} color={colors.textMuted} />
      </View>

      <Text className="flex-1 text-white text-sm font-medium">
        {item.label}
      </Text>

      {item.value ? (
        <Text className="text-textMuted text-sm mr-2">{item.value}</Text>
      ) : null}

      {item.hasChevron ? (
        <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
      ) : null}
    </TouchableOpacity>
  );
}
