import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  // ui components
  accordionUp: {
    "0%": { height: "var(--radix-accordion-content-height)" },
    "100%": { height: "0" },
  },
  accordionDown: {
    "0%": { height: "0" },
    "100%": { height: "var(--radix-accordion-content-height)" },
  },
  // generic
  enter: {
    "0%": {
      opacity: "var(--enter-opacity,1)",
      translate: "var(--enter-translate-x,0) var(--enter-translate-y,0)",
      scale: "var(--enter-scale,1) var(--enter-scale,1)",
    },
  },
  exit: {
    "100%": {
      opacity: "var(--exit-opacity,1)",
      translate: "var(--exit-translate-x,0) var(--exit-translate-y,0)",
      scale: "var(--exit-scale,1) var(--exit-scale,1)",
    },
  },
  caretBlink: {
    "0%, 70%, 100%": { opacity: 1 },
    "20%, 50%": { opacity: 0 },
  },
});
