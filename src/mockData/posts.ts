/**
 * Mock posts (20). Image URLs from picsum.photos (deterministic by seed).
 */

import type { Post } from './types';

const PICSUM_BASE = 'https://picsum.photos';
const POST_IMAGE_SIZE = 400;

function postImageUrl(seed: string): string {
  return `${PICSUM_BASE}/seed/${seed}/${POST_IMAGE_SIZE}/${POST_IMAGE_SIZE}`;
}

export const MOCK_POSTS: Post[] = [
  { id: '1', userId: '1', imageUrl: postImageUrl('post1'), caption: 'Golden hour vibes 🌅', likeCount: 124 },
  { id: '2', userId: '2', imageUrl: postImageUrl('post2'), caption: 'Weekend escape', likeCount: 89 },
  { id: '3', userId: '3', imageUrl: postImageUrl('post3'), caption: 'Coffee and code ☕', likeCount: 256 },
  { id: '4', userId: '4', imageUrl: postImageUrl('post4'), caption: 'New beginnings', likeCount: 412 },
  { id: '5', userId: '5', imageUrl: postImageUrl('post5'), caption: 'Sunset views never get old', likeCount: 178 },
  { id: '6', userId: '6', imageUrl: postImageUrl('post6'), caption: 'Exploring the city', likeCount: 93 },
  { id: '7', userId: '7', imageUrl: postImageUrl('post7'), caption: 'Morning routine', likeCount: 67 },
  { id: '8', userId: '8', imageUrl: postImageUrl('post8'), caption: 'Good food, good mood', likeCount: 534 },
  { id: '9', userId: '9', imageUrl: postImageUrl('post9'), caption: 'Throwback to summer', likeCount: 201 },
  { id: '10', userId: '10', imageUrl: postImageUrl('post10'), caption: 'Chasing light', likeCount: 145 },
  { id: '11', userId: '11', imageUrl: postImageUrl('post11'), caption: 'Quiet moments', likeCount: 312 },
  { id: '12', userId: '12', imageUrl: postImageUrl('post12'), caption: 'Adventure awaits', likeCount: 98 },
  { id: '13', userId: '13', imageUrl: postImageUrl('post13'), caption: 'Home sweet home', likeCount: 223 },
  { id: '14', userId: '14', imageUrl: postImageUrl('post14'), caption: 'Rainy day comfort', likeCount: 76 },
  { id: '15', userId: '15', imageUrl: postImageUrl('post15'), caption: 'Street style', likeCount: 389 },
  { id: '16', userId: '16', imageUrl: postImageUrl('post16'), caption: 'Nature therapy', likeCount: 267 },
  { id: '17', userId: '17', imageUrl: postImageUrl('post17'), caption: 'Work in progress', likeCount: 112 },
  { id: '18', userId: '18', imageUrl: postImageUrl('post18'), caption: 'Friday feeling', likeCount: 445 },
  { id: '19', userId: '19', imageUrl: postImageUrl('post19'), caption: 'Simple pleasures', likeCount: 156 },
  { id: '20', userId: '20', imageUrl: postImageUrl('post20'), caption: 'Until next time ✨', likeCount: 289 },
];
