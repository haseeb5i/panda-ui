"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { styled } from "@/styles/jsx";

const Separator = styled(
  SeparatorPrimitive.Root,
  {
    base: {
      flexShrink: 0,
      bgColor: "border",
      "&[data-orientation=horizontal]": {
        h: "1px",
        w: "full",
      },
      "&[data-orientation=vertical]": {
        h: "full",
        w: "1px",
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
