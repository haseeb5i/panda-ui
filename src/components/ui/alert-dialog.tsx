"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { PropsWithCss, withStyles } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";
import { button, dialog } from "@/styles/recipes";
import { styled } from "@/styles/jsx";

import { Button } from "./button";

const classes = dialog();

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = withStyles(AlertDialogPrimitive.Trigger);

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = withStyles(
  AlertDialogPrimitive.Overlay,
  classes.overlay
);

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  PropsWithCss<typeof AlertDialogPrimitive.Content>
>(({ className, css: cssProp, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cx(css(cssProp), classes.content, className)}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = withStyles("div", classes.header, { spaceY: 2 });
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = withStyles("div", classes.footer);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
  base: {
    textStyle: "lg",
    fontWeight: "semibold",
  },
});

const AlertDialogDescription = styled(AlertDialogPrimitive.Description, {
  base: {
    textStyle: "sm",
    color: "mutedForeground",
  },
});

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  PropsWithCss<typeof AlertDialogPrimitive.Action>
>(({ className, css: cssProp, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cx(css(cssProp), button(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  PropsWithCss<typeof AlertDialogPrimitive.Cancel>
>(({ className, css: cssProp, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(
      css({ mt: { base: 2, sm: 0 } }, cssProp),
      button({ variant: "outline" }),
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
