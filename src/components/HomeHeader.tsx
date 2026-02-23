import { View, StyleSheet, Text } from 'react-native';
import { AppIcon } from './AppIcon';
import { STRINGS, COLORS, SIZES } from '../constants';

const HEADER_HEIGHT = 44;

interface HomeHeaderProps {
  paddingTop: number;
}

export function HomeHeader({ paddingTop }: HomeHeaderProps) {
  return (
    <View
      style={[
        styles.header,
        {
          paddingTop,
          height: paddingTop + HEADER_HEIGHT,
        },
      ]}
    >
      <Text style={styles.logo}>{STRINGS.app.name}</Text>
      <View style={styles.icons}>
        <AppIcon name="heart-outline" size={26} color={COLORS.text} />
        <AppIcon name="paper-plane-outline" size={24} color={COLORS.text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  logo: {
    fontSize: SIZES.fontSize.xl,
    fontWeight: '600',
    color: COLORS.text,
  },
  icons: {
    flexDirection: 'row',
    gap: SIZES.spacing.xl,
  },
});

export const HOME_HEADER_HEIGHT = HEADER_HEIGHT;
