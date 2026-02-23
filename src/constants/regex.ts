/**
 * Validation patterns and regex utilities.
 */

export const REGEX = {
  /** Email validation per assignment example. */
  email:
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
} as const;

export function isValidEmail(value: string): boolean {
  return REGEX.email.test(value.trim());
}
