import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  fonts: {
    sans: {
      value: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
    },
  },
  sizes: {},
  animations: {
    enter: {
      value: "enter .15s",
    },
    exit: {
      value: "exit .15s",
    },
    "caret-blink": {
      value: "caretBlink 1s ease-out infinite",
    },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: { base: "white", _dark: "{colors.zinc.950}" },
    },
    foreground: {
      value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" },
    },
    primary: {
      value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" },
    },
    primaryForeground: {
      value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.900}" },
    },
    accent: {
      value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.800}" },
    },
    accentForeground: {
      value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" },
    },
    mutedForeground: {
      value: { base: "{colors.zinc.500}", _dark: "{colors.zinc.400}" },
    },
    border: {
      value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" },
    },
    destructive: {
      value: { base: "{colors.red.500}", _dark: "{colors.red.900}" },
    },
    ring: {
      value: { base: "hsl(240 5% 64.9%)", _dark: "hsl(240 4.9% 83.9%)" },
    },
  },
  shadows: {
    outline: {
      value: [
        "0 0 0 2px var(--ring-offset-color, {colors.background})",
        "0 0 0 4px var(--ring-color, {colors.ring})",
      ],
    },
  },
});
