import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type RootStackParamList } from '../navigation/AppNavigator';
import { COLORS, SIZES } from '../constants';
import { MOCK_POSTS, MOCK_USERS } from '../mockData';
import {
  HomeHeader,
  StoriesStrip,
  PostItem,
  BottomNav,
} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen(_props: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <HomeHeader paddingTop={insets.top} />

      <FlatList
        data={MOCK_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
        ListHeaderComponent={<StoriesStrip users={MOCK_USERS} />}
        ListHeaderComponentStyle={styles.storiesWrapper}
        style={styles.feed}
      />

      <BottomNav paddingBottom={insets.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  storiesWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingVertical: SIZES.spacing.md,
  },
  feed: {
    flex: 1,
  },
});

export default HomeScreen;
