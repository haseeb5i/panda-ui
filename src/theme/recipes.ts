import { defineRecipe, defineSlotRecipe } from "@pandacss/dev";

export const recipes = {
  badge: defineRecipe({
    className: "badge",
    base: {
      display: "inline-flex",
      alignItems: "center",
      rounded: "full",
      borderWidth: "1px",
      paddingX: "2.5",
      paddingY: "0.5",
      textStyle: "xs",
      fontWeight: "semibold",
      transitionProperty: "colors",
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
          bgColor: "primary",
          color: "primaryForeground",
          _hover: { bgColor: "primary/80" },
        },
        secondary: {
          borderColor: "transparent",
          bgColor: "accent",
          color: "accentForeground",
          _hover: { bgColor: "accent/80" },
        },
        destructive: {
          borderColor: "transparent",
          bgColor: "destructive",
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
  }),
  button: defineRecipe({
    className: "button",
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "nowrap",
      rounded: "md",
      textStyle: "sm",
      fontWeight: "medium",
      cursor: "pointer",
      transition: "colors",
      _focusVisible: {
        ring: "outline",
        ringOffset: "2px",
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
  }),
  popover: defineRecipe({
    className: "popover",
    description: "Styles for the popover content",
    base: {
      zIndex: 50,
      width: 72,
      rounded: "md",
      borderWidth: "1px",
      bgColor: "background",
      padding: 4,
      shadow: "md",
      outline: "none",
      willChange: "transform, opacity",
      _open: {
        animation: "enter",
        fadeIn: 0,
        zoomIn: 0.95,
      },
      _closed: {
        animation: "exit",
        fadeOut: 0,
        zoomOut: 0.95,
      },
      _top: { slideInY: "2" },
      _bottom: { slideInY: "-2" },
      _left: { slideInX: "2" },
      _right: { slideInX: "-2" },
    },
  }),
  separator: defineRecipe({
    className: "separator",
    base: {
      flexShrink: 0,
      bgColor: "border",
      "&[data-orientation=horizontal]": {
        height: "1px",
        width: "full",
      },
      "&[data-orientation=vertical]": {
        height: "full",
        width: "1px",
      },
    },
  }),
};

export const slotRecipes = {
  avatar: defineSlotRecipe({
    className: "avatar",
    slots: ["root", "image", "fallback"],
    base: {
      root: {
        position: "relative",
        display: "flex",
        size: "10",
        overflow: "hidden",
        rounded: "full",
      },
      image: {
        aspectRatio: "square",
        size: "full",
      },
      fallback: {
        dflex: "center",
        size: "full",
        rounded: "full",
        bgColor: "accent",
      },
    },
  }),
  checkbox: defineSlotRecipe({
    className: "checkbox",
    slots: ["root", "indicator"],
    base: {
      root: {
        size: "1rem",
        flexShrink: 0,
        rounded: "sm",
        borderWidth: "1px",
        borderColor: "primary",
        cursor: "pointer",
        _focusVisible: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: "outline",
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: "0.5",
        },
        _checked: {
          bgColor: "primary",
          color: "primaryForeground",
        },
      },
      indicator: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "current",
      },
    },
  }),
  progress: defineSlotRecipe({
    className: "progress",
    slots: ["root", "indicator"],
    base: {
      root: {
        position: "relative",
        height: "4",
        width: "full",
        overflow: "hidden",
        rounded: "full",
        bgColor: "accent",
      },
      indicator: {
        size: "full",
        flex: 1,
        bgColor: "primary",
        transition: "transform",
      },
    },
  }),
  slider: defineSlotRecipe({
    className: "slider",
    slots: ["root", "track", "range", "thumb"],
    base: {
      root: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "full",
        userSelect: "none",
        touchAction: "none",
      },
      track: {
        position: "relative",
        height: "2",
        width: "full",
        flexGrow: 1,
        overflow: "hidden",
        rounded: "full",
        bgColor: "accent",
      },
      range: {
        position: "absolute",
        height: "full",
        bgColor: "primary",
      },
      thumb: {
        display: "block",
        rounded: "full",
        size: "5",
        borderWidth: "2px",
        borderColor: "primary",
        bgColor: "background",
        _focusVisible: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: "outline",
        },
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.5,
        },
      },
    },
  }),
  switchRecipe: defineSlotRecipe({
    className: "switch",
    slots: ["root", "thumb"],
    base: {
      root: {
        display: "inline-flex",
        alignItems: "center",
        height: "6",
        width: "11",
        flexShrink: 0,
        cursor: "pointer",
        rounded: "full",
        borderWidth: "2px",
        borderColor: "transparent",
        bgColor: "border",
        transition: "colors",
        _focusVisible: {
          ring: "2px solid transparent",
          ringOffset: "2px",
          boxShadow: "outline",
        },
        _disabled: {
          pointerEvents: "none",
          opacity: "0.5",
        },
        _checked: { bgColor: "primary" },
      },
      thumb: {
        pointerEvents: "none",
        display: "block",
        size: "5",
        rounded: "full",
        bgColor: "background",
        shadow: "lg",
        ring: 0,
        translate: "auto",
        transition: "translate .15s token(easings.default)",
        _checked: { translateX: "5" },
      },
    },
  }),
};
