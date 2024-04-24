import { RecipeVariantProps, cva } from "@/styles/css";
import { styled } from "@/styles/jsx";

const buttonVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    rounded: "md",
    textStyle: "sm",
    fontWeight: "medium",
    cursor: "pointer",

    transitionProperty: "colors",

    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    "--btn-color": { base: "colors.zinc.900", _dark: "colors.zinc.50" },
  },
  variants: {
    variant: {
      default: {
        bgColor: "var(--btn-color)",
        color: { base: "zinc.50", _dark: "zinc.900" },
        _hover: {
          bgColor: { base: "zinc.900/90", _dark: "zinc.50/90" },
        },
      },
      secondary: {
        bgColor: { base: "zinc.100", _dark: "zinc.800" },
        color: "var(--btn-color)",
        _hover: {
          bgColor: { base: "zinc.100/80", _dark: "zinc.800/80" },
        },
      },
      outline: {
        borderWidth: "1px",
        _hover: {
          bgColor: { base: "zinc.100", _dark: "zinc.800" },
          color: "var(--btn-color)",
        },
      },
      ghost: {
        _hover: {
          bgColor: { base: "zinc.100", _dark: "zinc.800" },
          color: "var(--btn-color)",
        },
      },
      link: {
        color: "var(--btn-color)",
        textUnderlineOffset: "4px",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      default: {
        height: "10",
        paddingX: "4",
        paddingY: "2",
      },
      sm: {
        height: "9",
        rounded: "md",
        paddingX: "3",
      },
      lg: {
        height: "11",
        rounded: "md",
        paddingX: "8",
      },
      icon: {
        height: "10",
        width: "10",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = styled("button", buttonVariants);

export { Button, buttonVariants };

export type ButtonVariants = Exclude<RecipeVariantProps<typeof buttonVariants>, undefined>;
