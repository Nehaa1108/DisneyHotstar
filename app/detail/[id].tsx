import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMovieDetail } from "../../src/hooks/useMovieDetail";
import DetailSkeleton from "../../src/components/detail/DetailSkeleton";
import CastRow from "../../src/components/detail/CastRow";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: item, isLoading, isError } = useMovieDetail(id ?? "");

  if (isLoading) {
    return (
      <View className="flex-1 bg-black">
        <DetailSkeleton />
      </View>
    );
  }

  if (isError || !item) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Ionicons name="alert-circle-outline" size={48} color="#6B6E76" />
        <Text className="text-white text-lg mt-4">Movie not found</Text>
        <TouchableOpacity
          className="mt-4 px-6 py-3 bg-accent rounded-xl"
          onPress={() => router.back()}
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View>
          <Image
            source={{ uri: item.posterUrl }}
            className="h-[520px] w-full"
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.4)", "#000"]}
            className="absolute bottom-0 left-0 right-0 h-52"
          />

          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-5 top-14 h-11 w-11 items-center justify-center rounded-full bg-black/60"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View className="px-5 -mt-10">
          <Text className="text-3xl font-bold text-white">{item.title}</Text>

          <View className="mt-3 flex-row items-center gap-4">
            <Text className="text-yellow-400 font-semibold">
              ⭐ {item.rating}
            </Text>
            <Text className="text-zinc-400">{item.year}</Text>
            <Text className="text-zinc-400">{item.durationMinutes} min</Text>
          </View>

          <View className="mt-3 flex-row flex-wrap gap-2">
            {item.genres.map((g) => (
              <View key={g} className="rounded-full bg-zinc-800 px-4 py-1.5">
                <Text className="text-xs text-white">{g}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            className="mt-8 h-14 flex-row items-center justify-center rounded-xl bg-red-600"
          >
            <Ionicons name="play" color="white" size={24} />
            <Text className="ml-2 text-lg font-bold text-white">Play</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-3 h-14 flex-row items-center justify-center rounded-xl border border-zinc-700">
            <Ionicons name="add" size={22} color="white" />
            <Text className="ml-2 text-base font-semibold text-white">
              My Watchlist
            </Text>
          </TouchableOpacity>

          <Text className="mt-8 text-xl font-bold text-white">Story</Text>
          <Text className="mt-3 text-base leading-7 text-zinc-400">
            {item.description}
          </Text>

          <CastRow cast={item.casts} />

          <Text className="mt-10 mb-4 text-xl font-bold text-white">
            More Like This
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {item.casts.slice(0, 6).map((_, i) => (
              <TouchableOpacity
                key={i}
                className="mr-4"
                onPress={() => router.push(`/detail/${i + 10}`)}
              >
                <Image
                  source={{
                    uri: `https://picsum.photos/seed/more${i}/200/300`,
                  }}
                  className="h-44 w-28 rounded-xl bg-zinc-800"
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
