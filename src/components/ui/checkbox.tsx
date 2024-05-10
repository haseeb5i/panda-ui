"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { PropsWithCss } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";
import { checkbox } from "@/styles/recipes";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  PropsWithCss<typeof CheckboxPrimitive.Root>
>(({ className, css: cssProp, ...props }, ref) => {
  const styles = checkbox();
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx("peer", css(cssProp), styles.root, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        <Check className={css({ size: "1rem" })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
