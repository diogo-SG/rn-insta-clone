import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { AppIcon } from './AppIcon';
import { STRINGS, COLORS, SIZES } from '../constants';
import { MOCK_USERS, type Post, type User } from '../mockData';

function getAuthor(post: Post): User | undefined {
  return MOCK_USERS.find((u) => u.id === post.userId);
}

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const author = getAuthor(post);
  const { width } = useWindowDimensions();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!author) return null;

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: author.avatarUrl }} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{author.username}</Text>
        <AppIcon name="ellipsis-horizontal" size={20} color={COLORS.text} />
      </View>
      <Image
        source={{ uri: post.imageUrl }}
        style={[styles.postImage, { width }]}
        resizeMode="cover"
      />
      <View style={styles.postActions}>
        <Pressable onPress={() => setIsLiked((prev) => !prev)} hitSlop={8}>
          <AppIcon
            name={isLiked ? 'heart' : 'heart-outline'}
            size={26}
            color={isLiked ? COLORS.error : COLORS.text}
          />
        </Pressable>
        <AppIcon name="chatbubble-outline" size={24} color={COLORS.text} />
        <AppIcon name="paper-plane-outline" size={24} color={COLORS.text} />
        <View style={styles.postActionSpacer} />
        <Pressable onPress={() => setIsSaved((prev) => !prev)} hitSlop={8}>
          <AppIcon
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color={COLORS.text}
          />
        </Pressable>
      </View>
      {post.likeCount > 0 && (
        <Text style={styles.postLikes}>
          {post.likeCount.toLocaleString()} {STRINGS.home.like.toLowerCase()}s
        </Text>
      )}
      {post.caption ? (
        <Text style={styles.postCaption}>
          <Text style={styles.postCaptionUser}>{author.username}</Text>{' '}
          {post.caption}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: SIZES.spacing.xl,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.spacing.sm,
    paddingVertical: SIZES.spacing.sm,
  },
  postAvatar: {
    width: SIZES.avatar.sm,
    height: SIZES.avatar.sm,
    borderRadius: SIZES.avatar.sm / 2,
  },
  postUsername: {
    flex: 1,
    marginLeft: SIZES.spacing.sm,
    fontSize: SIZES.fontSize.sm,
    fontWeight: '600',
    color: COLORS.text,
  },
  postImage: {
    aspectRatio: 1,
    backgroundColor: COLORS.borderLight,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.spacing.sm,
    paddingTop: SIZES.spacing.sm,
    gap: SIZES.spacing.lg,
  },
  postActionSpacer: {
    flex: 1,
  },
  postLikes: {
    paddingHorizontal: SIZES.spacing.sm,
    paddingTop: SIZES.spacing.xs,
    fontSize: SIZES.fontSize.sm,
    fontWeight: '600',
    color: COLORS.text,
  },
  postCaption: {
    paddingHorizontal: SIZES.spacing.sm,
    paddingTop: SIZES.spacing.xs,
    paddingBottom: SIZES.spacing.sm,
    fontSize: SIZES.fontSize.sm,
    color: COLORS.text,
  },
  postCaptionUser: {
    fontWeight: '600',
  },
});
