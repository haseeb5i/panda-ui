import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  body: {
    minHeight: "100dvh",
    fontFamily: "sans",
    fontSize: "md",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});
