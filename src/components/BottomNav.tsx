import { View, StyleSheet } from 'react-native';
import { AppIcon } from './AppIcon';
import { COLORS } from '../constants';

const BOTTOM_NAV_HEIGHT = 50;

interface BottomNavProps {
  paddingBottom: number;
}

export function BottomNav({ paddingBottom }: BottomNavProps) {
  return (
    <View
      style={[
        styles.bottomNav,
        {
          paddingBottom,
          height: paddingBottom + BOTTOM_NAV_HEIGHT,
        },
      ]}
    >
      <AppIcon name="home" size={26} color={COLORS.text} />
      <AppIcon name="search-outline" size={26} color={COLORS.text} />
      <AppIcon name="add-circle-outline" size={28} color={COLORS.text} />
      <AppIcon name="play-outline" size={26} color={COLORS.text} />
      <AppIcon name="person-outline" size={26} color={COLORS.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    backgroundColor: COLORS.background,
  },
});

export const BOTTOM_NAV_BAR_HEIGHT = BOTTOM_NAV_HEIGHT;
