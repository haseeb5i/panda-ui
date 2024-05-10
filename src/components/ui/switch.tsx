"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { PropsWithCss } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";
import { switchRecipe } from "@/styles/recipes";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  PropsWithCss<typeof SwitchPrimitives.Root>
>(({ className, css: cssProp, ...props }, ref) => {
  const styles = switchRecipe();
  return (
    <SwitchPrimitives.Root
      ref={ref}
      className={cx("peer", css(cssProp), styles.root, className)}
      {...props}
    >
      <SwitchPrimitives.Thumb className={styles.thumb} />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
