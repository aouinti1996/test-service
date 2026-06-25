/**
 * Primitive color tokens (full palette — light + dark themes).
 */

export const baseColors = {
  lightWhite: "var(--base-light-white)",
  white: "var(--base-white)",
  black: "var(--base-black)",
} as const;

export const grayColors = {
  25: "var(--gray-25)",
  50: "var(--gray-50)",
  100: "var(--gray-100)",
  200: "var(--gray-200)",
  300: "var(--gray-300)",
  400: "var(--gray-400)",
  500: "var(--gray-500)",
  600: "var(--gray-600)",
  700: "var(--gray-700)",
  800: "var(--gray-800)",
  900: "var(--gray-900)",
} as const;

export const primaryColors = {
  50: "var(--primary-50)",
  100: "var(--primary-100)",
  400: "var(--primary-400)",
  500: "var(--primary-500)",
  600: "var(--primary-600)",
  700: "var(--primary-700)",
  900: "var(--primary-900)",
} as const;

export const successColors = {
  50: "var(--success-50)",
  100: "var(--success-100)",
  400: "var(--success-400)",
  600: "var(--success-600)",
  900: "var(--success-900)",
} as const;

export const warningColors = {
  50: "var(--warning-50)",
  100: "var(--warning-100)",
  400: "var(--warning-400)",
  600: "var(--warning-600)",
  900: "var(--warning-900)",
} as const;

export const errorColors = {
  50: "var(--error-50)",
  100: "var(--error-100)",
  400: "var(--error-400)",
  600: "var(--error-600)",
  900: "var(--error-900)",
} as const;

export const transparentColors = {
  gray25: "var(--transparent-gray-25)",
  gray700: "var(--transparent-gray-700)",
  blackShadow: "var(--transparent-black-shadow)",
  whiteShadow: "var(--transparent-white-shadow)",
} as const;

export const primitives = {
  base: baseColors,
  gray: grayColors,
  primary: primaryColors,
  success: successColors,
  warning: warningColors,
  error: errorColors,
  transparent: transparentColors,
} as const;
