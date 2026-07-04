import { View, ScrollView } from 'react-native';
import Skeleton from '../common/Skeleton';

export default function DetailSkeleton() {
  return (
    <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>
  
      <Skeleton style={{ width: '100%', height: 520 }} />

      <View className="px-5 mt-4 gap-4">
 
        <Skeleton style={{ width: 220, height: 28 }} />
      
        <View className="flex-row gap-3">
          <Skeleton style={{ width: 60, height: 16 }} />
          <Skeleton style={{ width: 40, height: 16 }} />
          <Skeleton style={{ width: 60, height: 16 }} />
        </View>
    
        <View className="flex-row gap-2">
          <Skeleton style={{ width: 70, height: 32, borderRadius: 999 }} />
          <Skeleton style={{ width: 80, height: 32, borderRadius: 999 }} />
          <Skeleton style={{ width: 60, height: 32, borderRadius: 999 }} />
        </View>
        
        <Skeleton style={{ width: '100%', height: 56, borderRadius: 12 }} />
        <Skeleton style={{ width: '100%', height: 56, borderRadius: 12 }} />
  
        <Skeleton style={{ width: 100, height: 22 }} />
        <Skeleton style={{ width: '100%', height: 14 }} />
        <Skeleton style={{ width: '90%', height: 14 }} />
        <Skeleton style={{ width: '95%', height: 14 }} />
      
        <Skeleton style={{ width: 80, height: 22 }} />
        <View className="flex-row gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <View key={i} className="items-center gap-2">
              <Skeleton style={{ width: 64, height: 64, borderRadius: 32 }} />
              <Skeleton style={{ width: 56, height: 11 }} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}