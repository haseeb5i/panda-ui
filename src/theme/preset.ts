import { definePreset } from "@pandacss/dev";
import { globalCss } from "./globalCss";

import { recipes, slotRecipes } from "./recipes";
import { semanticTokens, tokens } from "./tokens";
import { keyframes } from "./keyframes";
import { textStyles } from "./typography";

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
      recipes,
      slotRecipes,
    },
  },

  conditions: {
    extend: {
      open: "&[data-state=open]",
      closed: "&[data-state=closed]",
      top: "&[data-side=top]",
      bottom: "&[data-side=bottom]",
      left: "&[data-side=left]",
      right: "&[data-side=right]",
    },
  },

  utilities: {
    extend: {
      dflex: {
        values: ["center", "start", "end"],
        transform: (value) => ({
          display: "flex",
          alignItems: value,
          justifyContent: value,
        }),
      },
      size: {
        values: (theme) => theme("sizes"),
        transform: (value) => ({
          width: value,
          height: value,
        }),
      },
      fadeIn: {
        values: "opacity",
        transform: (value) => ({ "--enter-opacity": value }),
      },
      fadeOut: {
        values: "opacity",
        transform: (value) => ({ "--exit-opacity": value }),
      },
      zoomIn: {
        transform: (value) => ({ "--enter-scale": value }),
      },
      zoomOut: {
        transform: (value) => ({ "--exit-scale": value }),
      },
      slideInY: {
        values: (theme) => theme("spacing"),
        transform: (value) => ({ "--enter-translate-y": value }),
      },
      slideInX: {
        values: (theme) => theme("spacing"),
        transform: (value) => ({ "--enter-translate-x": value }),
      },
      slideOutY: {
        values: (theme) => theme("spacing"),
        transform: (value) => ({ "--exit-translate-y": value }),
      },
      slideOutX: {
        values: (theme) => theme("spacing"),
        transform: (value) => ({ "--exit-translate-x": value }),
      },
    },
  },
});

// textGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
//     backgroundImage: `linear-gradient(${value})`,
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     "&::selection": {
//       WebkitTextFillColor: "$colors$text",
//     },
