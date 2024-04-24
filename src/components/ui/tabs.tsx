"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled } from "@/styles/jsx";

const Tabs = styled(TabsPrimitive.Root);

const TabsList = styled(TabsPrimitive.List, {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    height: "10",
    padding: "1",
    rounded: "md",
    bgColor: { base: "zinc.100", _dark: "zinc.800" },
    color: { base: "zinc.500", _dark: "zinc.400" },
  },
});

const TabsTrigger = styled(TabsPrimitive.Trigger, {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    rounded: "sm",
    paddingX: "3",
    paddingY: "1.5",
    textStyle: "sm",
    fontWeight: "medium",
    // transition: "all",
    cursor: "pointer",
    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    "&[data-state=active]": {
      bgColor: "background",
      color: "foreground",
      shadow: "sm",
    },
  },
});

const TabsContent = styled(TabsPrimitive.Content, {
  base: {
    marginTop: "2",
    _focusVisible: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      boxShadow: "outline",
    },
  },
});

export { Tabs, TabsList, TabsTrigger, TabsContent };
