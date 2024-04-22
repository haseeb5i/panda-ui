import { definePreset } from "@pandacss/dev";
import { globalCss } from "./globalCss";

import { tokens } from "./tokens";
import { keyframes } from "./keyframes";

export const appPreset = definePreset({
  globalCss,
  globalVars: {
    "--global-color-border": "rgb(228, 228, 231)",
  },

  theme: {
    extend: {
      tokens,
      keyframes,
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
