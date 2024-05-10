"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { PropsWithCss, withStyles } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";
import { dialog } from "@/styles/recipes";

import { grid } from "@/styles/patterns";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

const classes = dialog();

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = withStyles(DialogPrimitive.Close);

const DialogOverlay = withStyles(DialogPrimitive.Overlay, classes.overlay);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  PropsWithCss<typeof DialogPrimitive.Content>
>(({ className, css: cssProp, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cx(css(cssProp), classes.content, className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={classes.close}>
        <X aria-label="close" className={css({ size: "4" })} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = withStyles("div", classes.header);
// DialogHeader.displayName = "DialogHeader";

const DialogFooter = withStyles("div", classes.footer);
// DialogFooter.displayName = "DialogFooter";

const DialogTitle = withStyles(DialogPrimitive.Title, {
  fontSize: "lg",
  fontWeight: "semibold",
  lineHeight: "none",
  letterSpacing: "tight",
});

const DialogDescription = withStyles(DialogPrimitive.Description, {
  textStyle: "sm",
  color: "mutedForeground",
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
