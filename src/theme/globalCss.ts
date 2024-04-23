import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  body: {
    color: "foreground",
    backgroundColor: "background",
    minHeight: "100dvh",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
});
