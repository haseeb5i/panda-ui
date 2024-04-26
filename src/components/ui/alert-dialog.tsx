"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { Button, buttonVariants } from "./button";
import { css, cx } from "@/styles/css";
import { HTMLStyledProps, styled } from "@/styles/jsx";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  base: {
    position: "fixed",
    inset: 0,
    bgColor: "black/80",
    _open: {
      animation: "fadeIn .15s cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
});

const contentStyles = css.raw({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "lg",
  display: "grid",
  gap: 4,
  borderWidth: "1px",
  rounded: { sm: "lg" },
  bgColor: "background",
  padding: 6,
  shadow: "lg",
  _open: {
    animation: "dialogContentShow 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
  },
});

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  HTMLStyledProps<typeof AlertDialogPrimitive.Content>
>(({ className, css: cssProp, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cx(css(contentStyles, cssProp), className)}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    spaceY: 2,
    textAlign: { base: "center", sm: "left" },
  },
});
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = styled("div", {
  base: {
    display: "flex",
    flexDir: "column-reverse",
    sm: {
      flexDir: "row",
      justifyContent: "flex-end",
      spaceX: 2,
    },
  },
});
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
    color: { base: "zinc.500", _dark: "zinc.400" },
  },
});

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cx(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cx(
      buttonVariants({ variant: "outline" }),
      css({ mt: { base: 2, sm: 0 } }),
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
