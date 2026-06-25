/**
 * Semantic color tokens (user-provided only).
 * Each value aliases a primitive CSS variable.
 */

export const textTokens = {
  heading: "var(--text-text-heading)",
  body: "var(--text-text-body)",
  bodySmall: "var(--text-text-body-small)",
  label: "var(--text-text-label)",
  secondary: "var(--text-text-secondary)",
  disabled: "var(--text-text-disabled)",
  inverse: "var(--text-text-inverse)",
} as const;

export const bgTokens = {
  surface: "var(--bg-bg-surface)",
  elevated: "var(--bg-bg-elevated)",
  subtle: "var(--bg-bg-subtle)",
  subtleTransparent: "var(--bg-bg-subtle-transparent)",
  shadow: "var(--bg-bg-shadow)",
  inverse: "var(--bg-bg-inverse)",
  disabled: "var(--bg-bg-disabled)",
  input: "var(--bg-bg-input)",
} as const;

export const borderTokens = {
  subtle: "var(--border-border-subtle)",
  default: "var(--border-border-default)",
} as const;

export const primaryTokens = {
  default: "var(--primary-primary-default)",
  hover: "var(--primary-primary-hover)",
  active: "var(--primary-primary-active)",
  disabled: "var(--primary-primary-disabled)",
  subtleBg: "var(--primary-primary-subtle-bg)",
  subtleText: "var(--primary-primary-subtle-text)",
  containerContent: "var(--primary-primary-container-content)",
} as const;

export const stateTokens = {
  success: {
    bg: "var(--state-state-success-bg)",
    text: "var(--state-state-success-text)",
    border: "var(--state-state-success-border)",
  },
  warning: {
    bg: "var(--state-state-warning-bg)",
    text: "var(--state-state-warning-text)",
    border: "var(--state-state-warning-border)",
  },
  error: {
    bg: "var(--state-state-error-bg)",
    text: "var(--state-state-error-text)",
    border: "var(--state-state-error-border)",
  },
} as const;

export const iconTokens = {
  default: "var(--icon-icon-default)",
  dark: "var(--icon-icon-dark)",
  inverse: "var(--icon-icon-inverse)",
  disabled: "var(--icon-icon-disabled)",
  primary: "var(--icon-icon-primary)",
  success: "var(--icon-icon-success)",
  warning: "var(--icon-icon-warning)",
  error: "var(--icon-icon-error)",
} as const;

export const semantic = {
  text: textTokens,
  bg: bgTokens,
  border: borderTokens,
  primary: primaryTokens,
  state: stateTokens,
  icon: iconTokens,
} as const;
