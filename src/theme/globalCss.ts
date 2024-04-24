import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  body: {
    fontFamily: "sans",
    color: "foreground",
    backgroundColor: "background",
    minHeight: "100dvh",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
  },
});
