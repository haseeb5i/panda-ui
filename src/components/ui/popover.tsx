"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const contentStyles = css.raw({
  zIndex: 50,
  width: 72,
  rounded: "md",
  borderWidth: "1px",
  bgColor: "background",
  padding: 4,
  shadow: "md",
  outline: "none",
  willChange: "transform, opacity",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  _open: {
    "&[data-side=top]": { animationName: "slideDown, fadeIn" },
    "&[data-side=right]": { animationName: "slideLeft, fadeIn" },
    "&[data-side=bottom]": { animationName: "slideUp, fadeIn" },
    "&[data-side=left]": { animationName: "slideRight, fadeIn" },
  },
});

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  HTMLStyledProps<typeof PopoverPrimitive.Content>
>(({ css: cssProp, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cx(css(contentStyles, cssProp), props.className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
