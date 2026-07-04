import { View, Text, TouchableOpacity } from "react-native";

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  subtitle,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View className="flex-1 justify-center items-center p-6">
      <Text className="text-white text-base font-semibold text-center">
        {title}
      </Text>

      {subtitle ? (
        <Text className="text-textMuted text-[13px] mt-2 text-center">
          {subtitle}
        </Text>
      ) : null}

      {actionLabel && onAction ? (
        <TouchableOpacity
          className="mt-4 bg-accent px-5 py-2.5 rounded-lg"
          onPress={onAction}
        >
          <Text className="text-white font-semibold">{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
