import { View, StyleSheet, Text, Image } from 'react-native';
import { STRINGS, COLORS, SIZES } from '../constants';
import type { User } from '../mockData';

interface StoryItemProps {
  user: User;
  isFirst: boolean;
}

export function StoryItem({ user, isFirst }: StoryItemProps) {
  return (
    <View style={styles.storyItem}>
      <View style={[styles.storyRing, isFirst && styles.storyRingFirst]}>
        <Image
          source={{ uri: user.avatarUrl }}
          style={styles.storyAvatar}
        />
      </View>
      <Text style={styles.storyLabel} numberOfLines={1}>
        {isFirst ? STRINGS.home.yourStory : user.username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  storyItem: {
    alignItems: 'center',
    marginHorizontal: SIZES.spacing.xs,
    width: 72,
  },
  storyRing: {
    width: SIZES.avatar.story + 4,
    height: SIZES.avatar.story + 4,
    borderRadius: (SIZES.avatar.story + 4) / 2,
    padding: 2,
    borderWidth: 2,
    borderColor: COLORS.storyRing,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyRingFirst: {
    borderColor: COLORS.border,
  },
  storyAvatar: {
    width: SIZES.avatar.story,
    height: SIZES.avatar.story,
    borderRadius: SIZES.avatar.story / 2,
  },
  storyLabel: {
    fontSize: SIZES.fontSize.xs,
    color: COLORS.text,
    marginTop: SIZES.spacing.xs,
    maxWidth: 72,
  },
});
