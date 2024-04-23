import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  fonts: {
    sans: { value: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" },
  },
  sizes: {},
  shadows: {
    outline: {
      value: ["0 0 0 2px white", "0 0 0 4px hsl(240 5% 64.9%)"],
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
});
