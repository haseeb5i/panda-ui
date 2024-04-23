"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";

const rootStyles = css.raw({
  display: "inline-flex",
  height: "6",
  width: "11",
  flexShrink: 0,
  cursor: "pointer",
  alignItems: "center",
  rounded: "full",
  borderWidth: "2px",
  borderColor: "transparent",
  bgColor: { base: "zinc.200", _dark: "zinc.800" },

  // TODO: simplify this
  transitionProperty: "color, background-color, fill",
  transitionDuration: ".15s",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",

  _focusVisible: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: "outline",
  },
  _disabled: {
    pointerEvents: "none",
    opacity: "0.5",
  },
  _checked: {
    bgColor: { base: "zinc.900", _dark: "zinc.50" },
  },
});

const thumbStyles = css({
  pointerEvents: "none",
  display: "block",
  size: "5",
  rounded: "full",
  bgColor: "background",
  shadow: "lg",
  ring: 0,
  translate: "auto",
  transition: "translate .15s cubic-bezier(0.4, 0, 0.2, 1)",
  _checked: {
    translateX: "5",
  },
});

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  HTMLStyledProps<typeof SwitchPrimitives.Root>
>(({ className, css: cssProp, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cx("peer", css(rootStyles, cssProp), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={thumbStyles} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
