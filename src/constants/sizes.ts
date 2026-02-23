/**
 * Spacing, radii, font sizes and layout dimensions.
 */

export const SIZES = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },
  input: {
    height: 44,
    paddingHorizontal: 12,
  },
  button: {
    height: 44,
  },
  avatar: {
    sm: 32,
    md: 40,
    lg: 56,
    story: 66,
  },
} as const;

export type AppSizes = typeof SIZES;
