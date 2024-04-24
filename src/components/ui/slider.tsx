"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";

const rootStyles = css.raw({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "full",
  userSelect: "none",
  touchAction: "none",
});

const trackStyles = css({
  position: "relative",
  height: "2",
  width: "full",
  flexGrow: 1,
  overflow: "hidden",
  rounded: "full",
  bgColor: { base: "zinc.100", _dark: "zinc.800" },
});

const thumbStyles = css({
  display: "block",
  rounded: "full",
  size: "5",
  borderWidth: "2px",
  borderColor: { base: "zinc.900", _dark: "zinc.50" },
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
});

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  HTMLStyledProps<typeof SliderPrimitive.Root>
>(({ className, css: cssProp, ...props }, ref) => {
  console.log(className, cssProp, props);
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(css(rootStyles, cssProp), className)}
      {...props}
    >
      <SliderPrimitive.Track className={trackStyles}>
        <SliderPrimitive.Range
          className={css({
            position: "absolute",
            height: "full",
            bgColor: { base: "zinc.900", _dark: "zinc.50" },
          })}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={thumbStyles} />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
