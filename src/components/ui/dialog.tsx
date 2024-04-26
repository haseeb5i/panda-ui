"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps, styled } from "@/styles/jsx";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { grid } from "@/styles/patterns";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = styled(DialogPrimitive.Overlay, {
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

const closeBtnStyles = css({
  position: "absolute",
  right: 4,
  top: 4,
  rounded: "sm",
  opacity: 0.7,
  transition: "opacity 200ms",
  cursor: "pointer",
  _hover: {
    opacity: 1,
  },
  _focus: {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: "outline",
  },
  _disabled: {
    pointerEvents: "none",
  },
});

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  HTMLStyledProps<typeof DialogPrimitive.Content>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cx(css(contentStyles, cssProp), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={closeBtnStyles}>
        <X className={css({ size: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    spaceY: 1.5,
    textAlign: { base: "center", sm: "left" },
  },
});
DialogHeader.displayName = "DialogHeader";

const DialogFooter = styled("div", {
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
DialogFooter.displayName = "DialogFooter";

const DialogTitle = styled(DialogPrimitive.Title, {
  base: {
    fontSize: "lg",
    fontWeight: "semibold",
    lineHeight: "none",
    letterSpacing: "tight",
  },
});

const DialogDescription = styled(DialogPrimitive.Description, {
  base: {
    textStyle: "sm",
    color: { base: "zinc.500", _dark: "zinc.400" },
  },
});

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent css={{ maxW: { sm: "425px" } }}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className={css({ spaceY: "4", py: "4" })}>
          <div className={grid({ columns: 4, gap: "4", alignItems: "center" })}>
            <Label htmlFor="name" css={{ textAlign: "right" }}>
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              css={{ gridColumn: "3" }}
            />
          </div>
          <div className={grid({ columns: 4, gap: "4", alignItems: "center" })}>
            <Label htmlFor="username" css={{ textAlign: "right" }}>
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              css={{ gridColumn: "3" }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}