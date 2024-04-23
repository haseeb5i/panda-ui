import { cva } from "@/styles/css";
import { styled } from "@/styles/jsx";

const badgeVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    rounded: "full",
    borderWidth: "1px",
    paddingX: 2.5,
    paddingY: 0.5,
    textStyle: "xs",
    fontWeight: "semibold",
    transitionProperty: "color, background-color",
    _focus: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
  },
  variants: {
    variant: {
      default: {
        borderColor: "transparent",
        bgColor: { base: "zinc.900", _dark: "zinc.50" },
        color: { base: "zinc.50", _dark: "zinc.900" },
      },
      secondary: {
        borderColor: "transparent",
        bgColor: { base: "zinc.100", _dark: "zinc.800" },
        color: { base: "zinc.900", _dark: "zinc.50" },
      },
      destructive: {
        borderColor: "transparent",
        bgColor: { base: "red.500", _dark: "red.900" },
        color: "zinc.50",
      },
      outline: {
        color: "foreground",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Badge = styled("div", badgeVariants);

export { Badge, badgeVariants };
