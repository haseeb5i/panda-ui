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
    bgColor: 'accent',
    color: 'mutedForeground',
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

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" css={{ w: "400px" }}>
      <TabsList css={{ display: "grid", w: "full", gridTemplateColumns: "2" }}>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>tab 1</div>
      </TabsContent>
      <TabsContent value="password">
        <div>tab 2</div>
      </TabsContent>
    </Tabs>
  );
}