import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type RootStackParamList } from '../navigation/AppNavigator';
import { COLORS, SIZES } from '../constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SPLASH_DURATION_MS = 3000;

const logoSize = SIZES.avatar.story * 2;

function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Instagram_icon.png')}
        style={styles.logo}
        resizeMode="contain"
        accessibilityLabel="Instagram"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: logoSize,
    height: logoSize,
  },
});

export default SplashScreen;
