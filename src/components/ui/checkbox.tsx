"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { css, cx } from "@/styles/css";
import { center } from "@/styles/patterns";
import { HTMLStyledProps } from "@/styles/types";

const rootStyles = css.raw({
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
});

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  HTMLStyledProps<typeof CheckboxPrimitive.Root>
>(({ css: cssProp, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    {...props}
    className={cx("peer", css(rootStyles, cssProp), props.className)}
  >
    <CheckboxPrimitive.Indicator className={center()}>
      <Check className={css({ size: "1rem" })} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
