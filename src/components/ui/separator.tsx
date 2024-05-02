"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { styled } from "@/styles/jsx";
import { separator } from "@/styles/recipes";

import { css } from "@/styles/css";

const Separator = styled(SeparatorPrimitive.Root, separator, {
  defaultProps: {
    decorative: true,
  },
});

export { Separator };

export function SeparatorDemo() {
  return (
    <div>
      <div className={css({ spaceY: "1" })}>
        <h4
          className={css({
            textStyle: "sm",
            fontWeight: "medium",
            lineHeight: "none",
          })}
        >
          Radix Primitives
        </h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator css={{ my: "4" }} />
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          height: "5",
          spaceX: "4",
          textStyle: "sm",
        })}
      >
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
