import { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  ViewToken,
  useWindowDimensions,
} from "react-native";
import { HeroBannerItem } from "../../types/content";

const HERO_HEIGHT = 220;
const AUTO_ADVANCE_MS = 4000;

interface HeroBannerProps {
  banners: HeroBannerItem[];
}

export default function HeroBanner({ banners }: HeroBannerProps) {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 60 }).current;

  useEffect(() => {
    if (banners.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % banners.length;
        flatListRef.current?.scrollToIndex({ index: next, animated: true });
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [banners.length]);

  const renderItem = useCallback(
    ({ item }: { item: HeroBannerItem }) => (
      <View style={{ width, height: HERO_HEIGHT }}>
        <Image
          source={{ uri: item.backdropUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />

        <View className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
        <View className="absolute bottom-6 left-4 right-4">
          <Text className="text-white text-2xl font-bold" numberOfLines={1}>
            {item.title}
          </Text>
          {item.tagline ? (
            <Text className="text-textMuted text-[13px] mt-1">
              {item.tagline}
            </Text>
          ) : null}
        </View>
      </View>
    ),
    [width],
  );

  const keyExtractor = useCallback((item: HeroBannerItem) => item.id, []);

  const getItemLayout = useCallback(
    (_: ArrayLike<HeroBannerItem> | null | undefined, index: number) => ({
      length: width,
      offset: width * index,
      index,
    }),
    [width],
  );

  return (
    <View style={{ height: HERO_HEIGHT }}>
      <FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        initialNumToRender={1}
        windowSize={3}
        removeClippedSubviews
      />

      <View className="absolute bottom-2 self-center flex-row gap-1.5">
        {banners.map((_, i) => (
          <View
            key={i}
            style={{
              width: i === activeIndex ? 16 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor:
                i === activeIndex ? "#ff0000" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </View>
    </View>
  );
}
