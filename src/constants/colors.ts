/**
 * App color palette (Instagram-inspired).
 */

export const COLORS = {
  background: '#FFFFFF',
  backgroundSecondary: '#FAFAFA',
  border: '#DBDBDB',
  borderLight: '#EFEFEF',
  text: '#262626',
  textSecondary: '#8E8E8E',
  textMuted: '#A8A8A8',
  primary: '#0095F6',
  primaryPressed: '#1877F2',
  error: '#ED4956',
  storyRing: '#E1306C',
  storyRingGradientEnd: '#F77737',
} as const;

export type AppColors = typeof COLORS;
