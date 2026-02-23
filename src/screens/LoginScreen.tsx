import { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type RootStackParamList } from '../navigation/AppNavigator';
import { COLORS, STRINGS, SIZES, isValidEmail } from '../constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LOGO_SIZE = 80;

function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = useCallback(() => {
    setErrorMessage(null);
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage(STRINGS.login.emailInvalid);
      return;
    }
    if (!trimmedPassword) {
      setErrorMessage(STRINGS.login.passwordRequired);
      return;
    }
    navigation.replace('Home');
  }, [email, password, navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/Instagram_icon.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Instagram"
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={STRINGS.login.usernamePlaceholder}
            placeholderTextColor={COLORS.textMuted}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errorMessage) setErrorMessage(null);
            }}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            accessibilityLabel="Email or username"
          />
          <TextInput
            style={styles.input}
            placeholder={STRINGS.login.passwordPlaceholder}
            placeholderTextColor={COLORS.textMuted}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errorMessage) setErrorMessage(null);
            }}
            secureTextEntry
            textContentType="password"
            accessibilityLabel="Password"
          />

          {errorMessage ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel={STRINGS.login.loginButton}
          >
            <Text style={styles.buttonText}>{STRINGS.login.loginButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    paddingHorizontal: SIZES.spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: SIZES.spacing.xxl,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  form: {
    gap: SIZES.spacing.sm,
  },
  input: {
    height: SIZES.input.height,
    paddingHorizontal: SIZES.input.paddingHorizontal,
    backgroundColor: COLORS.backgroundSecondary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius.sm,
    fontSize: SIZES.fontSize.sm,
    color: COLORS.text,
  },
  error: {
    fontSize: SIZES.fontSize.xs,
    color: COLORS.error,
    marginTop: SIZES.spacing.xs,
  },
  button: {
    height: SIZES.button.height,
    marginTop: SIZES.spacing.lg,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: SIZES.fontSize.md,
    fontWeight: '600',
    color: COLORS.background,
  },
});

export default LoginScreen;
