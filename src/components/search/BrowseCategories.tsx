import { ScrollView, TouchableOpacity, Text } from "react-native";

const categories = [
  "Action",
  "Drama",
  "Comedy",
  "Sports",
  "Kids",
  "Crime",
  "Romance",
  "Thriller",
  "Anime",
  "Live TV",
];

interface Props {
  onSelect: (category: string) => void;
}

export default function BrowseCategories({ onSelect }: Props) {
  return (
    <>
      <Text className="text-white text-xl font-bold mt-8 mb-4 px-4">
        Browse Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
      >
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => onSelect(item)}
            activeOpacity={0.8}
            className="bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 mr-3"
          >
            <Text className="text-white font-medium">{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
