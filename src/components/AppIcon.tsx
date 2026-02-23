import {
  Ionicons,
  type IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

/** Props for app icons (Ionicons from the modular package). */
export interface AppIconProps {
  name: IoniconsIconName;
  size?: number;
  color?: string;
}

/**
 * Uses Ionicons from @react-native-vector-icons/ionicons (modular, non-deprecated).
 * iOS: Ionicons.ttf must be in Info.plist UIAppFonts (done). Run pod install and rebuild.
 */
export function AppIcon({
  name,
  size = 24,
  color,
}: AppIconProps) {
  return <Ionicons name={name} size={size} color={color} />;
}
