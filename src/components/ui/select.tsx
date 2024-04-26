"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { HTMLStyledProps, styled } from "@/styles/jsx";
import { css, cx } from "@/styles/css";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const triggerStyles = css.raw({
  display: "flex",
  height: "10",
  width: "full",
  alignItems: "center",
  justifyContent: "space-between",
  rounded: "md",
  borderWidth: "1px",
  bgColor: "background",
  paddingX: "3",
  paddingY: "2",
  textStyle: "sm",
  "&>span": {
    lineClamp: 1,
  },
  _placeholder: {
    color: "mutedForeground",
  },
  _focus: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: "outline",
  },
  _disabled: {
    cursor: "not-allowed",
    opacity: "0.5",
  },
});

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  HTMLStyledProps<typeof SelectPrimitive.Trigger>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cx(css(triggerStyles, cssProp), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className={css({ size: "4", opacity: "0.5" })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const scrollBtnStyles = css({
  dflex: "center",
  paddingY: 1,
});

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cx(scrollBtnStyles, className)}
    {...props}
  >
    <ChevronUp className={css({ size: "4" })} />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cx(scrollBtnStyles, className)}
    {...props}
  >
    <ChevronDown className={css({ size: "4" })} />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const contentStyles = css({
  position: "relative",
  zIndex: 50,
  maxHeight: "96",
  minWidth: "8rem",
  overflow: "hidden",
  rounded: "md",
  borderWidth: "1px",
  bgColor: "background",
  shadow: "md",
  translate: "auto",
  _open: {
    // "&[data-side=top]": { animationName: "slideDown, fadeIn" },
    // "&[data-side=right]": { animationName: "slideLeft, fadeIn" },
    // "&[data-side=bottom]": { animationName: "slideUp, fadeIn" },
    // "&[data-side=left]": { animationName: "slideRight, fadeIn" },
    // position = popper
    "&[data-side=bottom]": { translateY: "1" },
    "&[data-side=left]": { translateX: "-1" },
    "&[data-side=right]": { translateX: "1" },
    "&[data-side=top]": { translateY: "-1" },
  },
});

const viewportStyles = css({
  padding: "1",
  // position = popper
  height: "var(--radix-select-trigger-height)",
  width: "full",
  minWidth: "var(--radix-select-trigger-width)",
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cx(contentStyles, className)}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className={viewportStyles}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = styled(SelectPrimitive.Label, {
  base: {
    paddingY: 1.5,
    paddingLeft: 8,
    paddingRight: 2,
    textStyle: "sm",
    fontWeight: "semibold",
  },
});

const itemStyles = css({
  position: "relative",
  display: "flex",
  width: "full",
  userSelect: "none",
  alignItems: "center",
  rounded: "sm",
  paddingY: 1.5,
  paddingLeft: 8,
  paddingRight: 2,
  textStyle: "sm",
  outline: "none",
  _focus: {
    bgColor: "accent",
    color: "accentForeground",
  },
  _disabled: {
    pointerEvents: "none",
    opacity: "0.5",
  },
});

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cx(itemStyles, className)}
    {...props}
  >
    <span
      className={css({
        dflex: "center",
        pos: "absolute",
        left: 2,
        size: "3.5",
      })}
    >
      <SelectPrimitive.ItemIndicator>
        <Check className={css({ size: "4" })} />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = styled(SelectPrimitive.Separator, {
  base: {
    marginX: "-1",
    marginY: "1",
    height: "1px",
    bgColor: "accent",
  },
});

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger css={{ w: "180px" }}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
