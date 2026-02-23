import { ScrollView, StyleSheet } from 'react-native';
import { SIZES } from '../constants';
import type { User } from '../mockData';
import { StoryItem } from './StoryItem';

interface StoriesStripProps {
  users: User[];
}

export function StoriesStrip({ users }: StoriesStripProps) {
  const [first, ...rest] = users;
  if (!first) return null;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.content}
    >
      <StoryItem user={first} isFirst />
      {rest.map(user => (
        <StoryItem key={user.id} user={user} isFirst={false} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0,
  },
  content: {
    paddingHorizontal: SIZES.spacing.sm,
    gap: SIZES.spacing.sm,
  },
});
