import { defineConfig } from "@pandacss/dev";

import { appPreset } from "@/theme/preset";

export default defineConfig({
  presets: ["@pandacss/dev/presets", appPreset],

  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",
  jsxStyleProps: "minimal",

  // Where to look for your css declarations
  include: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
