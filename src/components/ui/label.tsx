"use client";

import { styled } from "@/styles/jsx";

const Label = styled("label", {
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

export { Label };
