/**
 * Mock data types for Home feed (users, posts).
 */

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string;
  likeCount: number;
}
