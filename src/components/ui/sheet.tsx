"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { styled } from "@/styles/jsx";
import { type RecipeVariantProps, cva, cx, css } from "@/styles/css";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = styled(SheetPrimitive.Overlay, {
  base: {
    position: "fixed",
    inset: 0,
    bgColor: "black/80",
    _open: {
      animation: "fadeIn .15s cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
});

const sheetVariants = cva({
  base: {
    position: "fixed",
    zIndex: "50",
    gap: "4",
    bgColor: "background",
    padding: "6",
    shadow: "lg",
    _open: {
      animation: "enter 0.5s token(easings.in-out)",
    },
    _closed: {
      animation: "exit 0.3s token(easings.in-out)",
    },
  },
  variants: {
    side: {
      top: {
        insetX: 0,
        top: 0,
        borderBottomWidth: "1px",
        translateY: "-100%", // initial
      },
      bottom: {
        insetX: 0,
        bottom: 0,
        borderTopWidth: "1px",
        translateY: "100%",
      },
      left: {
        insetY: 0,
        left: 0,
        height: "full",
        width: { base: "3/4", sm: "sm" },
        borderRightWidth: "1px",
        translateX: "-100%",
      },
      right: {
        insetY: 0,
        right: 0,
        height: "full",
        width: { base: "3/4", sm: "sm" },
        borderLeftWidth: "1px",
        translateX: "100%",
      },
    },
  },
  defaultVariants: {
    side: "right",
  },
});

const closeStyles = css({
  position: "absolute",
  right: "4",
  top: "4",
  rounded: "sm",
  opacity: 0.7,
  transition: "opacity 0.15s",
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

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> &
  RecipeVariantProps<typeof sheetVariants>;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cx(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className={closeStyles}>
        <X className={css({ size: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    spaceY: "2",
    textAlign: { base: "center", sm: "left" },
  },
});
SheetHeader.displayName = "SheetHeader";

const SheetFooter = styled("div", {
  base: {
    display: "flex",
    flexDir: "column-reverse",
    spaceY: "2",
    sm: {
      flexDir: "row",
      justifyContent: "end",
      spaceX: "2",
    },
  },
});
SheetFooter.displayName = "SheetFooter";

const SheetTitle = styled(SheetPrimitive.Title, {
  base: {
    textStyle: "lg",
    fontWeight: "semibold",
    color: "foreground",
  },
});

const SheetDescription = styled(SheetPrimitive.Description, {
  base: {
    textStyle: "sm",
    color: "mutedForeground",
  },
});

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
type SheetSide = "top" | "right" | "bottom" | "left";

export function SheetDemo() {
  const [side, setSideState] = React.useState<SheetSide>("right");
  const [open, setOpen] = React.useState(false);

  function setSide(newSide: SheetSide) {
    setSideState(newSide);
    setOpen(true);
  }

  return (
    <>
      <div className={css({ dflex: "center", gap: "2" })}>
        <Button variant="outline" onClick={() => setSide("top")}>
          Top
        </Button>
        <Button variant="outline" onClick={() => setSide("right")}>
          Right
        </Button>
        <Button variant="outline" onClick={() => setSide("bottom")}>
          Bottom
        </Button>
        <Button variant="outline" onClick={() => setSide("left")}>
          Left
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className={css({ display: "grid", gap: "4", py: "4" })}>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "4",
                gap: "4",
                alignItems: "center",
              })}
            >
              <Label htmlFor="name" css={{ textAlign: "right" }}>
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" css={{ gridColumn: "3" }} />
            </div>
            <div
              className={css({
                display: "grid",
                gridTemplateColumns: "4",
                gap: "4",
                alignItems: "center",
              })}
            >
              <Label htmlFor="username" css={{ textAlign: "right" }}>
                Username
              </Label>
              <Input
                id="username"
                value="@peduarte"
                css={{ gridColumn: "3" }}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
