"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { styled } from "@/styles/jsx";
import { avatar } from "@/styles/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(avatar);

const Avatar = withProvider(styled(AvatarPrimitive.Root), "root");

const AvatarImage = withContext(styled(AvatarPrimitive.Image), "image");

const AvatarFallback = withContext(
  styled(AvatarPrimitive.Fallback),
  "fallback"
);

export { Avatar, AvatarImage, AvatarFallback };

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
