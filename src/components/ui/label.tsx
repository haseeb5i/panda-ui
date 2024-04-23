"use client";

import { cva } from "@/styles/css";
import { styled } from "@/styles/jsx";

const labelVariants = cva({
  base: {
    textStyle: "sm",
    fontWeight: "medium",
    lineHeight: "none",
    _peerDisabled: {
      cursor: "not-allowed",
      opacity: "0.7",
    },
  },
});

const Label = styled("label", labelVariants);

export { Label };
