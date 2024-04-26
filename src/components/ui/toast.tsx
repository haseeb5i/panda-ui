"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { HTMLStyledProps, styled } from "@/styles/jsx";
import { RecipeVariantProps, css, cva, cx } from "@/styles/css";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = styled(ToastPrimitives.Viewport, {
  base: {
    position: "fixed",
    top: 0,
    zIndex: 100,
    display: "flex",
    maxHeight: "100vh",
    width: "100%",
    flexDir: "column-reverse",
    padding: "4rem",
    sm: {
      bottom: 0,
      right: 0,
      top: "auto",
      flexDir: "column",
    },
    md: {
      maxWidth: "420px",
    },
  },
});

const toastStyles = cva({
  base: {
    position: "relative",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    spaceX: 4,
    overflow: "hidden",
    rounded: "md",
    borderWidth: "1px",
    padding: 6,
    paddingRight: 8,
    shadow: "lg",
    pointerEvents: "auto",
    _open: {
      // animate: "slide-in-from-top-full",
      // animate: "sm:slide-in-from-bottom-full",
    },
    _closed: {
      // animate: "fade-out-80",
      // animate: "slide-out-to-right-full",
    },
    "&[data-swipe=move]": {
      translateX: "var(--radix-toast-swipe-move-x)",
      transition: "none",
    },
    "&[data-swipe=cancel]": {
      translateX: "0",
    },
    "&[data-swipe=end]": {
      translateX: "var(--radix-toast-swipe-end-x)",
      // animate: "out",
    },
  },
  variants: {
    variant: {
      default: {
        borderWidth: "1px",
        bgColor: "background",
      },
      destructive: {
        bgColor: { base: "red.500", _dark: "red.900" },
        color: "zinc.500",
        borderColor: { base: "red.500", _dark: "red.900" },
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
    RecipeVariantProps<typeof toastStyles>
>(({ className, css: cssProp, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cx(
        "group",
        css(toastStyles.raw({ variant }), cssProp),
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
    _hover: {
      bgColor: { base: "zinc.100", _dark: "zinc.800" },
    },
    _groupHover: {
      // normal group-destructive 
      // borderColor: { base: "zinc.100/40", _dark: "zinc.800/40" },
      // hover
      // borderColor: { base: "red.500/30", _dark: "red.900/30" },
      // bgColor: {base: "red.500", _dark: "red.900" },
      // color: "zinc.50",
      // focus
      //    ring-red-500    ring-red-900",
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
  },
});

const closeStyles = css({
  // "group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600  ",
  position: "absolute",
  right: "2",
  top: "2",
  rounded: "md",
  padding: "1",
  color: { base: "zinc.950/50", _dark: "zinc.50/50" },
  opacity: "0",
  transition: "opacity",
  _hover: {
    color: { base: "zinc.950", _dark: "zinc.50" },
  },
  _groupHover: {
    opacity: "1",
  },
  _focus: {
    opacity: "1",
    outline: "none",
    ring: "2",
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
