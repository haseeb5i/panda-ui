"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";

import { RecipeVariantProps, css, cva, cx } from "@/styles/css";
import { HTMLStyledProps, styled } from "@/styles/jsx";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = styled(ToastPrimitives.Viewport, {
  base: {
    position: "fixed",
    top: 0,
    zIndex: 100,
    display: "flex",
    maxHeight: "100vh",
    width: "full",
    flexDir: "column-reverse",
    padding: "4",
    sm: {
      top: "auto",
      bottom: 0,
      right: 0,
      flexDir: "column",
    },
    md: {
      maxWidth: "420px",
    },
  },
});

const toastVariants = cva({
  base: {
    position: "relative",
    display: "flex",
    width: "full",
    alignItems: "center",
    justifyContent: "space-between",
    spaceX: 4,
    overflow: "hidden",
    rounded: "md",
    borderWidth: "1px",
    padding: 6,
    paddingRight: 8,
    shadow: "lg",
    transition: "all",
    pointerEvents: "auto",
    translate: "auto",
    _open: {
      animation: "enter",
      slideInY: { base: "-100%", sm: "100%" },
    },
    _closed: {
      animation: "exit",
      fadeOut: 0.8,
      slideOutX: "100%",
    },
    "&[data-swipe=move]": {
      translateX: "var(--radix-toast-swipe-move-x)",
      transition: "none",
    },
    "&[data-swipe=cancel]": {
      translateX: "0",
    },
    "&[data-swipe=end]": {
      animation: "exit",
      translateX: "var(--radix-toast-swipe-end-x)",
    },
  },
  variants: {
    variant: {
      default: {
        borderWidth: "1px",
        bgColor: "background",
      },
      destructive: {
        bgColor: "destructive",
        color: "zinc.50",
        borderColor: "destructive",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  HTMLStyledProps<typeof ToastPrimitives.Root> &
    RecipeVariantProps<typeof toastVariants>
>(({ className, css: cssProp, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cx(
        variant === "destructive" && "destructive",
        "group",
        css(toastVariants.raw({ variant }), cssProp),
        className
      )}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = styled(ToastPrimitives.Action, {
  base: {
    dflex: "center",
    display: "inline-flex",
    height: "8",
    flexShrink: 0,
    rounded: "md",
    borderWidth: "1px",
    bgColor: "transparent",
    paddingX: "3",
    textStyle: "sm",
    fontWeight: "medium",
    transition: "colors",
    cursor: "pointer",
    _hover: {
      bgColor: "accent",
    },
    _focus: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      opacity: "0.5",
      pointerEvents: "none",
    },
    ".group.destructive &": {
      borderColor: { base: "zinc.100/40", _dark: "zinc.800/40" },
      _hover: {
        bgColor: "destructive",
        color: "zinc.50",
        borderColor: "destructive/30",
      },
      _focus: {
        "--ring-color": "colors.destructive",
      },
    },
  },
});

const closeStyles = css({
  position: "absolute",
  right: "2",
  top: "2",
  rounded: "md",
  padding: "1",
  color: "foreground/50",
  opacity: "0",
  transition: "opacity",
  cursor: "pointer",
  _hover: {
    color: "foreground",
  },
  _groupHover: {
    opacity: "1",
  },
  _focus: {
    opacity: "1",
    outline: "none",
    shadow: "0 0 0 2px rgba(59,130,246,.5)",
  },
  ".group.destructive &": {
    color: "red.300",
    _hover: {
      color: "red.50",
    },
    _focus: {
      shadow: "0 0 0 2px token(colors.red.400)",
    },
  },
});

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cx(closeStyles, className)}
    toast-close=""
    {...props}
  >
    <X className={css({ size: "4" })} />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = styled(ToastPrimitives.Title, {
  base: {
    textStyle: "sm",
    fontWeight: "semibold",
  },
});

const ToastDescription = styled(ToastPrimitives.Description, {
  base: {
    textStyle: "sm",
    opacity: 0.9,
  },
});

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
