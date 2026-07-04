import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  onClear,
}: SearchBarProps) {
  return (
    <View className="mx-4 mt-4 mb-3">
      <View className="flex-row items-center rounded-2xl bg-zinc-900 border border-zinc-800 px-4 h-14">
        <Ionicons name="search" size={22} color="#9CA3AF" />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Movies, Shows & Sports"
          placeholderTextColor="#6B7280"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          selectionColor={colors.accent}
          className="flex-1 ml-3 text-white text-base"
        />

        {value.length > 0 && (
          <TouchableOpacity onPress={onClear} activeOpacity={0.7}>
            <Ionicons name="close-circle" size={22} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
