import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  xs: {
    value: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
  },
  sm: {
    value: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
  },
  lg: {
    value: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
    },
  },
  "2xl": {
    value: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  },
});
