"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { styled } from "@/styles/jsx";

const Avatar = styled(AvatarPrimitive.Root, {
  base: {
    position: "relative",
    display: "flex",
    height: "10",
    width: "10",
    overflow: "hidden",
    rounded: "full",
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  base: {
    aspectRatio: "square",
    height: "full",
    width: "full",
  },
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "full",
    width: "full",
    rounded: "full",
    bgColor: { base: "zinc.100", _dark: "zinc.800" },
  },
});

export { Avatar, AvatarImage, AvatarFallback };
