"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  Check,
  ChevronRight,
  Circle,
  // demo only
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
} from "lucide-react";

import { css, cx } from "@/styles/css";
import { styled } from "@/styles/jsx";

import { Button } from "./button";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const baseContentStyles = {
  zIndex: 50,
  minWidth: "8rem",
  overflow: "hidden",
  rounded: "md",
  borderWidth: "1px",
  padding: "1",
  bgColor: "background",
  _open: {
    animation: "enter",
    fadeIn: 0,
    zoomIn: 0.95,
  },
  _closed: {
    animation: "exit",
    fadeOut: 0,
    zoomOut: 0.95,
  },
  "&[data-side=top]": { slideInY: "2" },
  "&[data-side=bottom]": { slideInY: "-2" },
  "&[data-side=left]": { slideInX: "2" },
  "&[data-side=right]": { slideInX: "-2" },
};

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(css(baseContentStyles, { shadow: "md" }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const baseItemStyles = {
  display: "flex",
  userSelect: "none",
  alignItems: "center",
  rounded: "sm",
  paddingX: "2",
  paddingY: "1.5",
  textStyle: "sm",
  outline: "none",
  _focus: {
    bgColor: "accent",
    color: "accentForeground",
  },
};

const itemStyles = {
  ...baseItemStyles,
  position: "relative",
  _disabled: {
    pointerEvents: "none",
    opacity: 0.5,
  },
};

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
  base: itemStyles,
  variants: {
    inset: {
      true: { paddingLeft: "8" },
    },
  },
});

const checkboxItemStyles = css(itemStyles, {
  paddingLeft: "8",
  paddingRight: "2",
});

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cx(checkboxItemStyles, className)}
    checked={checked}
    {...props}
  >
    {/* this can be extracted to common style */}
    <span
      className={css({
        dflex: "center",
        pos: "absolute",
        left: "2",
        size: "3.5",
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={css({ size: "4" })} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const radioItemStyles = css(itemStyles, {
  paddingLeft: "8",
  paddingRight: "2",
});

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cx(radioItemStyles, className)}
    {...props}
  >
    <span
      className={css({
        dflex: "center",
        pos: "absolute",
        left: "2",
        size: "3.5",
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={css({ size: "2", fill: "current" })} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, {
  base: {
    paddingX: "2",
    paddingY: "1.5",
    textStyle: "sm",
    fontWeight: "semibold",
  },
  variants: {
    inset: {
      true: { paddingLeft: "8" },
    },
  },
});

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  base: {
    marginX: "-1",
    marginY: "1",
    height: "1px",
    bgColor: "accent",
  },
});

const subTriggerStyles = css(itemStyles, {
  _open: {
    bgColor: "accent",
  },
});

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(subTriggerStyles, inset && css({ pl: "8" }), className)}
    {...props}
  >
    {children}
    <ChevronRight className={css({ ml: "auto", size: "4" })} />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cx(css(baseContentStyles, { shadow: "lg" }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuShortcut = styled("span", {
  base: {
    marginLeft: "auto",
    textStyle: "xs",
    letterSpacing: "widest",
    opacity: 0.6,
  },
});

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

export function DropdownMenuDemo() {
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={css({ w: "56" })}>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            New Tab
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <DropdownMenuShortcut>⌘+N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window
            <DropdownMenuShortcut>⇧+⌘+N</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className={css({ mr: "2", size: "4" })} />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className={css({ mr: "2", size: "4" })} />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className={css({ mr: "2", size: "4" })} />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className={css({ mr: "2", size: "4" })} />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks <DropdownMenuShortcut>⌘+B</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut className={css({ mr: "2", size: "4" })} />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
