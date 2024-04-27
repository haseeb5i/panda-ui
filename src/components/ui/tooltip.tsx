"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { styled } from "@/styles/jsx";
import { Button } from "./button";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = styled(TooltipPrimitive.Content, {
  base: {
    zIndex: "50",
    overflow: "hidden",
    rounded: "md",
    borderWidth: "1px",
    bgColor: "background",
    paddingX: 3,
    paddingY: 1.5,
    textStyle: "sm",
    shadow: "md",
    userSelect: "none",
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    "&[data-state=delayed-open]": {
      "&[data-side=top]": { animationName: "slideDown, fadeIn" },
      "&[data-side=right]": { animationName: "slideLeft, fadeIn" },
      "&[data-side=bottom]": { animationName: "slideUp, fadeIn" },
      "&[data-side=left]": { animationName: "slideRight, fadeIn" },
    },
  },
});

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}