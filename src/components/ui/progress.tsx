"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";

const rootStyles = css.raw({
  position: "relative",
  height: "4",
  width: "full",
  overflow: "hidden",
  rounded: "full",
  bgColor: "accent",
});

const indicatorStyles = css({
  size: "full",
  flex: 1,
  bgColor: "primary",
  transition: "transform 0.15s cubic-bezier(.4,0,.2,1)",
});

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  HTMLStyledProps<typeof ProgressPrimitive.Root>
>(({ className, css: cssProp, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cx(css(rootStyles, cssProp), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={indicatorStyles}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
