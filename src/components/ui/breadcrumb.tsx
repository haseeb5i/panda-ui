import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { PropsWithCss, withStyles } from "@/lib/with-styles";
import { css, cx } from "@/styles/css";

import { flex } from "@/styles/patterns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Breadcrumb = withStyles("nav", {}, { "aria-label": "breadcrumb" });
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = withStyles("ol", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: { base: "1.5", sm: "2.5" },
  wordBreak: "break-word",
  textStyle: "sm",
  color: "mutedForeground",
});
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = withStyles("li", {
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5",
});
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  PropsWithCss<"a"> & { asChild?: boolean }
>(({ asChild, className, css: cssProp, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cx(
        css({ transition: "colors", _hover: { color: "foreground" } }, cssProp),
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = withStyles(
  "span",
  {
    fontWeight: "normal",
    color: "foreground",
  },
  {
    role: "link",
    "aria-disabled": true,
    "aria-current": "page",
  },
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  css: cssProp,
  ...props
}: PropsWithCss<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cx(css(cssProp), className)}
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
}: PropsWithCss<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cx(css({ dflex: "center", size: "9" }, cssProp), className)}
    {...props}
  >
    <MoreHorizontal aria-label="More" className={css({ size: "4" })} />
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
