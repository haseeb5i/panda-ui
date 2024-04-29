"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { styled } from "@/styles/jsx";
import { css } from "@/styles/css";
import { flex } from "@/styles/patterns";

const Separator = styled(
  SeparatorPrimitive.Root,
  {
    base: {
      flexShrink: 0,
      bgColor: "border",
      "&[data-orientation=horizontal]": {
        height: "1px",
        width: "full",
      },
      "&[data-orientation=vertical]": {
        height: "full",
        width: "1px",
      },
    },
  },
  {
    defaultProps: {
      decorative: true,
    },
  }
);

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
        className={flex({
          align: "center",
          h: "5",
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
