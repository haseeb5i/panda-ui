"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import {cx,  css } from "@/styles/css";
import { HTMLStyledProps, styled } from "@/styles/jsx";

const RadioGroup = styled(RadioGroupPrimitive.Root, {
  base: {
    display: "grid",
    gap: "2",
  },
});

const itemsStyles = css.raw({
  aspectRatio: "square",
  height: "4",
  width: "4",
  rounded: "full",
  borderWidth: "1px",
  "--radio-color": { base: "colors.zinc.900", _dark: "colors.zinc.50" },
  borderColor: "var(--radio-color)",
  cursor: "pointer",
  color: "var(--radio-color)",
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

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  HTMLStyledProps<typeof RadioGroupPrimitive.Item>
>(({ className, css: cssProp, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(css(itemsStyles, cssProp), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className={css({ dflex: "center" })}>
        <Circle className={css({ size: "2.5", fill: "current" })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
