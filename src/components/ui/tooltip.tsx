"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { styled } from "@/styles/jsx";

import { Button } from "./button";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = styled(
  TooltipPrimitive.Content,
  {
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
      willChange: "transform, opacity",
      "&[data-state=delayed-open]": {
        animation: "enter",
        fadeIn: 0,
        zoomIn: 0.95,
        "&[data-side=top]": { slideInY: "2" },
        "&[data-side=bottom]": { slideInY: "-2" },
        "&[data-side=left]": { slideInX: "2" },
        "&[data-side=right]": { slideInX: "-2" },
      },
      _closed: {
        animation: "exit",
        fadeOut: 0,
        zoomOut: 0.95,
      },
    },
  },
  {
    defaultProps: {
      sideOffset: 4,
    },
  }
);

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
