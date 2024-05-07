"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled } from "@/styles/jsx";
import { tabs } from "@/styles/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(tabs);

const Tabs = withProvider(styled(TabsPrimitive.Root));

const TabsList = withContext(styled(TabsPrimitive.List), "list");

const TabsTrigger = withContext(styled(TabsPrimitive.Trigger), "trigger");

const TabsContent = withContext(styled(TabsPrimitive.Content), "content");

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
