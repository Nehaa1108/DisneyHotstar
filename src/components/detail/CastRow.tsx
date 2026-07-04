import { View, Text, Image, ScrollView } from "react-native";
import { CastMember } from "../../types/content";

interface CastRowProps {
  cast: CastMember[];
}

export default function CastRow({ cast }: CastRowProps) {
  if (!cast.length) return null;

  return (
    <View className="mt-8">
      <Text className="text-white text-xl font-bold mb-4">Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cast.map((member) => (
          <View key={member.id} className="mr-4 items-center w-16">
            <Image
              source={{
                uri: member.profileUrl?.startsWith("https://image.tmdb")
                  ? member.profileUrl
                  : `https://picsum.photos/seed/${member.id}/100/100`,
              }}
              className="w-16 h-16 rounded-full bg-zinc-800"
              resizeMode="cover"
            />
            <Text
              className="text-white text-[10px] text-center mt-1.5"
              numberOfLines={2}
            >
              {member.name}
            </Text>
            <Text
              className="text-zinc-500 text-[9px] text-center"
              numberOfLines={1}
            >
              {member.character}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
