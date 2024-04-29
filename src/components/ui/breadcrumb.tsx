import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { HTMLStyledProps, styled } from "@/styles/jsx";
import { css, cx } from "@/styles/css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { flex } from "@/styles/patterns";

const Breadcrumb = styled(
  "nav",
  {},
  { defaultProps: { "aria-label": "breadcrumb" } },
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = styled("ol", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: { base: "1.5", sm: "2.5" },
    wordBreak: "break-word",
    textStyle: "sm",
    color: "mutedForeground",
  },
});
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = styled("li", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
  },
});
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cx(
        css({ transition: "colors", _hover: { color: "foreground" } }),
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = styled(
  "span",
  {
    base: {
      fontWeight: "normal",
      color: "foreground",
    },
  },
  {
    defaultProps: {
      role: "link",
      "aria-disabled": true,
      "aria-current": "page",
    },
  },
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cx(className)}
    {...props}
  >
    {children ?? <ChevronRight className={css({ size: "3.5" })} />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  css: cssProp,
  ...props
}: HTMLStyledProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(css({ dflex: "center", size: "9" }, cssProp), className)}
    {...props}
  >
    <MoreHorizontal className={css({ size: "4" })} />
    <span className={css({ srOnly: true })}>More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={flex({
                align: "center",
                gap: "1",
                outline: "none",
                cursor: "pointer",
              })}
            >
              <BreadcrumbEllipsis css={{ size: "4" }} />
              <span className={css({ srOnly: true })}>Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
