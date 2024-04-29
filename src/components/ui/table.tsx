import * as React from "react";

import { cx, css } from "@/styles/css";
import { styled } from "@/styles/jsx";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={css({ pos: "relative", w: "full", overflow: "auto" })}>
    <table
      ref={ref}
      className={cx(
        css({ w: "full", captionSide: "bottom", textStyle: "sm" }),
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = styled("thead", {
  base: {
    "& tr": {
      borderBottomWidth: "1px",
    },
  },
});
TableHeader.displayName = "TableHeader";

const TableBody = styled("tbody", {
  base: {
    "& tr:last-child": {
      border: "none",
    },
  },
});
TableBody.displayName = "TableBody";

const TableFooter = styled("tfoot", {
  base: {
    borderTopWidth: "1px",
    bgColor: "accent/50",
    fontWeight: "medium",
    "&:last-child > tr": {
      borderBottom: "none",
    },
  },
});
TableFooter.displayName = "TableFooter";

const TableRow = styled("tr", {
  base: {
    borderBottomWidth: "1px",
    transition: "colors",
    _hover: {
      bgColor: "accent/50",
    },
    "&[data-state=selected]": {
      bgColor: "accent/50",
    },
  },
});

const TableHead = styled("th", {
  base: {
    height: "12",
    paddingX: "4",
    textAlign: "left",
    verticalAlign: "middle",
    fontWeight: "medium",
    color: "mutedForeground",
    "&:has([role=checkbox])": {
      paddingRight: "0",
    },
  },
});
TableHead.displayName = "TableHead";

const TableCell = styled("td", {
  base: {
    padding: "4",
    verticalAlign: "middle",
    "&:has([role=checkbox])": {
      paddingRight: "0",
    },
  },
});
TableCell.displayName = "TableCell";

const TableCaption = styled("caption", {
  base: {
    marginTop: "4",
    color: "mutedForeground",
    textStyle: "sm",
  },
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead css={{ width: "100px" }}>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead css={{ textAlign: "right" }}>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell css={{ fontWeight: "medium" }}>
              {invoice.invoice}
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell css={{ textAlign: "right" }}>
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell css={{ textAlign: "right" }}>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
