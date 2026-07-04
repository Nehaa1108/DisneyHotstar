import { ScrollView, View, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useContentFeed } from "../../src/hooks/useContentFeed";
import HeroBanner from "../../src/components/home/HeroBanner";
import ContentRow from "../../src/components/home/ContentRow";
import HomeSkeleton from "../../src/components/home/HomeSkeleton";
import EmptyState from "../../src/components/home/EmptyState";

export default function HomeScreen() {
  const { data, isLoading, isError, refetch } = useContentFeed();

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-[#0F1014]" edges={["top"]}>
        <HomeSkeleton />
      </SafeAreaView>
    );
  }

  if (isError || !data) {
    return (
      <SafeAreaView className="flex-1 bg-[#0F1014]" edges={["top"]}>
        <EmptyState
          title="Something went wrong"
          subtitle="We couldn't load your feed. Please try again."
          actionLabel="Retry"
          onAction={refetch}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#0F1014]" edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refetch}
            colors={["#ff0000"]}
            tintColor="#ff0000"
          />
        }
        contentContainerStyle={{ paddingBottom: 110 }}
      >
        <HeroBanner banners={data.heroBanners} />

        <View className="pb-2">
          {data.rows.map((row: any) => (
            <ContentRow key={row.id} row={row} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
