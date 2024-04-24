import { definePreset } from "@pandacss/dev";
import { globalCss } from "./globalCss";

import { semanticTokens, tokens } from "./tokens";
import { keyframes } from "./keyframes";
import { textStyles } from "@/typography";

export const appPreset = definePreset({
  globalCss,
  globalVars: {
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
      dflex: {
        className: "dflex",
        values: "alignItems",
        transform: (value) => ({
          display: "flex",
          alignItems: value,
          justifyContent: value,
        }),
      },
      size: {
        className: "size",
        values: "sizes",
        transform: (value) => ({
          width: value,
          height: value,
        }),
      },
      // textGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      //     backgroundImage: `linear-gradient(${value})`,
      //     WebkitBackgroundClip: "text",
      //     WebkitTextFillColor: "transparent",
      //     "&::selection": {
      //       WebkitTextFillColor: "$colors$text",
      //     },
    },
  },
});
