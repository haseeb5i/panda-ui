"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { withStyles } from "@/lib/with-styles";
import { tabs } from "@/styles/recipes";

const classes = tabs();

const Tabs = withStyles(TabsPrimitive.Root);

const TabsList = withStyles(TabsPrimitive.List, classes.list);

const TabsTrigger = withStyles(TabsPrimitive.Trigger, classes.trigger);

const TabsContent = withStyles(TabsPrimitive.Content, classes.content);

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
