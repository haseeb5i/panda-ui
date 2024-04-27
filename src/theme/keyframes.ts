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
  dialogContentShow: {
    "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  },
  slideUp: {
    "0%": { transform: "translateY(2px)" },
    "100%": { transform: "translateY(0)" },
  },
  slideDown: {
    "0%": { transform: "translateY(-2px)" },
    "100%": { transform: "translateY(0)" },
  },
  slideRight: {
    "0%": { transform: "translateX(-2px)" },
    "100%": { transform: "translateX(0)" },
  },
  slideLeft: {
    "0%": { transform: "translateX(2px)" },
    "100%": { transform: "translateX(0)" },
  },
  // generic
  fadeIn: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  fadeOut: {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
  caretBlink: {
    "0%, 70%, 100%": { opacity: 1 },
    "20%, 50%": { opacity: 0 },
  },
});
