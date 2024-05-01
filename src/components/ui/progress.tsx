"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";
import { progress } from "@/styles/recipes";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  HTMLStyledProps<typeof ProgressPrimitive.Root>
>(({ className, css: cssProp, value, ...props }, ref) => {
  const styles = progress();
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cx(css(cssProp), styles.root, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
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
