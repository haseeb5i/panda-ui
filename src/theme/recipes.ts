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
  skeleton: defineRecipe({
    className: "skeleton",
    base: {
      rounded: "md",
      bgColor: "accent",
      animation: "pulse",
    },
  }),
};

export const slotRecipes = {
  accordion: defineSlotRecipe({
    className: "accordion",
    slots: ["item", "trigger", "icon", "content"],
    base: {
      item: {
        borderBottomWidth: "1px",
      },
      trigger: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: "4",
        fontWeight: "medium",
        transition: "all",
        cursor: "pointer",
        _hover: {
          textDecoration: "underline",
        },
        "&[data-state=open] > svg": {
          rotate: "180deg",
        },
      },
      icon: {
        flexShrink: 0,
        size: "4",
        transition: "transform",
        transitionDuration: "200ms",
      },
      content: {
        overflow: "hidden",
        fontSize: "sm",
        lineHeight: "snug",
        transition: "all",
        _open: {
          animation: "accordionDown 0.2s ease-out",
        },
        _closed: {
          animation: "accordionUp 0.2s ease-out",
        },
      },
    },
  }),
  alert: defineSlotRecipe({
    className: "alert",
    slots: ["root", "title", "description"],
    base: {
      root: {
        position: "relative",
        width: "full",
        rounded: "lg",
        borderWidth: "1",
        padding: "4",
        "&>svg": {
          position: "absolute",
          left: "4",
          top: "4",
        },
        "&>svg~*": { paddingLeft: "7" },
        "&>svg+div": { translateY: "-3px" }, // missting translate: 'auto'
      },
      title: {
        marginBottom: "1",
        fontWeight: "medium",
        lineHeight: "none",
        letterSpacing: "tight",
      },
      description: {
        textStyle: "sm",
      },
    },
    variants: {
      variant: {
        default: {
          root: {
            bgColor: "background",
            color: "foreground",
          },
        },
        destructive: {
          root: {
            color: "red.500",
            borderColor: { base: "red.500/50", _dark: "red.500" },
          },
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
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
  tabs: defineSlotRecipe({
    className: "tabs",
    slots: ["list", "trigger", "content"],
    base: {
      list: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        height: "10",
        padding: "1",
        rounded: "md",
        bgColor: "accent",
        color: "mutedForeground",
      },
      trigger: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        rounded: "sm",
        paddingX: "3",
        paddingY: "1.5",
        textStyle: "sm",
        fontWeight: "medium",
        transition: "all",
        cursor: "pointer",
        _focusVisible: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: "outline",
        },
        _disabled: {
          pointerEvents: "none",
          opacity: "0.5",
        },
        "&[data-state=active]": {
          bgColor: "background",
          color: "foreground",
          shadow: "sm",
        },
      },
      content: {
        marginTop: "2",
        _focusVisible: {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: "outline",
        },
      },
    },
  }),
};
