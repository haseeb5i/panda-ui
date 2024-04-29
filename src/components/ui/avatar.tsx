"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { styled } from "@/styles/jsx";

const Avatar = styled(AvatarPrimitive.Root, {
  base: {
    position: "relative",
    display: "flex",
    size: "10",
    overflow: "hidden",
    rounded: "full",
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  base: {
    aspectRatio: "square",
    size: "full",
  },
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  base: {
    dflex: 'center',
    size: "full",
    rounded: "full",
    bgColor: "accent",
  },
});

export { Avatar, AvatarImage, AvatarFallback };

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

