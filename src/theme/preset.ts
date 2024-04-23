import { definePreset } from "@pandacss/dev";
import { globalCss } from "./globalCss";

import { semanticTokens, tokens } from "./tokens";
import { keyframes } from "./keyframes";
import { textStyles } from "@/typography";

export const appPreset = definePreset({
  globalCss,
  globalVars: {
    '--global-font-body': "var(--font-inter)",
    "--global-color-border": "var(--colors-border)",
  },

  theme: {
    extend: {
      tokens,
      semanticTokens,
      keyframes,
      textStyles,
    },
  },

  conditions: {
    extend: {
      open: "&[data-state=open]",
      closed: "&[data-state=closed]",
    },
  },

  utilities: {
    extend: {
      size: {
        className: "size",
        values: "sizes",
        transform: (value) => ({
          width: value,
          height: value,
        }),
      },
    },
  },
});
