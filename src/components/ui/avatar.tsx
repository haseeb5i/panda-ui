"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { withStyles } from "@/lib/with-styles";
import { avatar } from "@/styles/recipes";

const classes = avatar();

const Avatar = withStyles(AvatarPrimitive.Root, classes.root);

const AvatarImage = withStyles(AvatarPrimitive.Image, classes.image);

const AvatarFallback = withStyles(AvatarPrimitive.Fallback, classes.fallback);

export { Avatar, AvatarImage, AvatarFallback };

export function AvatarDemo() {
  return (
    <Avatar >
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
