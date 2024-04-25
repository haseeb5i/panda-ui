import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  fonts: {
    sans: {
      value: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
    },
  },
  sizes: {},
  animations: {
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
    border: {
      value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" },
    },
    ring: {
      value: { base: "hsl(240 5% 64.9%)", _dark: "hsl(240 4.9% 83.9%)" },
    },
  },
  shadows: {
    outline: {
      value: ["0 0 0 2px {colors.background}", "0 0 0 4px {colors.ring}"],
    },
  },
});
