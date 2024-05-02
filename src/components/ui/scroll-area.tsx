"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cx, css } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";

import { Separator } from "./separator";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  HTMLStyledProps<typeof ScrollAreaPrimitive.Root>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cx(
      css({ pos: "relative", overflow: "hidden" }, cssProp),
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={css({ size: "full", rounded: "inherit" })}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const scrollbarStyles = css({
  display: "flex",
  touchAction: "none",
  userSelect: "none",
  transition: "colors",
  "&[data-orientation=vertical]": {
    height: "full",
    width: "2.5",
    borderLeft: "1px solid transparent",
    padding: "1px",
  },
  "&[data-orientation=horizontal]": {
    flexDir: "column",
    height: "2.5",
    borderTop: "1px solid transparent",
    padding: "1px",
  },
});

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cx(scrollbarStyles, className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={css({
        position: "relative",
        flex: 1,
        rounded: "full",
        bgColor: "border",
      })}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea css={{ h: "72", w: "48", rounded: "md", borderWidth: "1px" }}>
      <div className={css({ p: "4" })}>
        <h4
          className={css({
            mb: 4,
            textStyle: "sm",
            fontWeight: "medium",
            lineHeight: "none",
          })}
        >
          Tags
        </h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className={css({ textStyle: "sm" })}>{tag}</div>
            <Separator css={{ my: 2 }} />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
