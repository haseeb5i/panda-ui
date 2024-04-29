import { cva, type RecipeVariantProps } from "@/styles/css";
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

    transitionProperty: "color,background-color,fill",
    transition: "0.15s cubic-bezier(.4,0,.2,1)",

    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
  },
  variants: {
    variant: {
      default: {
        bgColor: "primary",
        color: "primaryForeground",
        _hover: {
          bgColor: "primary/90",
        },
      },
      secondary: {
        bgColor: "accent",
        color: "accentForeground",
        _hover: {
          bgColor: "accent/80",
        },
      },
      outline: {
        borderWidth: "1px",
        _hover: {
          bgColor: "accent",
          color: "accentForeground",
        },
      },
      ghost: {
        _hover: {
          bgColor: "accent",
          color: "accentForeground",
        },
      },
      link: {
        color: "accentForeground",
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

export type ButtonVariants = Exclude<
  RecipeVariantProps<typeof buttonVariants>,
  undefined
>;
