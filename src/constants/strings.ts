/**
 * Static UI strings and copy.
 */

export const STRINGS = {
  app: {
    name: 'Instagram',
  },
  splash: {
    // No visible copy; logo only
  },
  login: {
    usernamePlaceholder: 'Phone number, username or email',
    passwordPlaceholder: 'Password',
    loginButton: 'Log in',
    forgotPassword: 'Forgot password?',
    emailInvalid: 'Please enter a valid email address.',
    passwordRequired: 'Please enter your password.',
  },
  home: {
    yourStory: 'Your story',
    addStory: 'Add',
    messages: 'Messages',
    like: 'Like',
    comment: 'Comment',
    share: 'Share',
    save: 'Save',
  },
} as const;

export type AppStrings = typeof STRINGS;
