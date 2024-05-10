import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { PropsWithCss, withStyles } from "@/lib/with-styles";
import { cx, css } from "@/styles/css";
import { type ButtonVariantProps, button } from "@/styles/recipes";

const Pagination = withStyles(
  "nav",
  {
    display: "flex",
    marginX: "auto",
    width: "full",
    justifyContent: "center",
  },
  {
    role: "navigation",
    "aria-label": "pagination",
  },
);
Pagination.displayName = "Pagination";

const PaginationContent = withStyles("ul", {
  display: "flex",
  alignItems: "center",
  gap: "1",
});
PaginationContent.displayName = "PaginationContent";

const PaginationItem = withStyles("li");
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = PropsWithCss<"a"> &
  Pick<ButtonVariantProps, "size"> & { isActive?: boolean };

const PaginationLink = ({
  className,
  css: cssProp,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cx(
      css(cssProp),
      button({ size, variant: isActive ? "outline" : "ghost" }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  css: cssProp,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    css={{ gap: "1", pl: "2.5", ...cssProp }}
    {...props}
  >
    <ChevronLeft className={css({ size: "4" })} />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  css: cssProp,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    css={{ gap: "1", pl: "2.5", ...cssProp }}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className={css({ size: "4" })} />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  css: cssProp,
  ...props
}: PropsWithCss<"span">) => (
  <span
    aria-hidden
    className={cx(css({ dflex: "center", size: "9" }, cssProp), className)}
    {...props}
  >
    <MoreHorizontal aria-label="More pages" className={css({ size: "4" })} />
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
