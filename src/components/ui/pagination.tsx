import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { type ButtonVariants, buttonVariants } from "@/components/ui/button";
import { cx, css } from "@/styles/css";
import { HTMLStyledProps, styled } from "@/styles/jsx";

const Pagination = styled(
  "nav",
  {
    base: {
      display: "flex",
      mx: "auto",
      w: "full",
      justifyContent: "center",
    },
  },
  {
    defaultProps: {
      role: "navigation",
      "aria-label": "pagination",
    },
  }
);
Pagination.displayName = "Pagination";

const PaginationContent = styled("ul", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1",
  },
});
PaginationContent.displayName = "PaginationContent";

const PaginationItem = styled("li");
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = HTMLStyledProps<"a"> &
  Pick<ButtonVariants, "size"> & {
    isActive?: boolean;
  };

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  css: cssProp,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cx(
      buttonVariants({
        size,
        variant: isActive ? "outline" : "ghost",
      }),
      css(cssProp),
      className
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
    css={{ gap: "1", pl: "2.5", ...cssProp }}
    {...props}
    size="default"
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
    css={{ gap: "1", pl: "2.5", ...cssProp }}
    {...props}
    size="default"
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
}: HTMLStyledProps<"span">) => (
  <span
    aria-hidden
    className={cx(css({ dflex: "center", size: "9" }, cssProp), className)}
    {...props}
  >
    <MoreHorizontal className={css({ size: "4" })} />
    <span className={css({ srOnly: true })}>More pages</span>
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
