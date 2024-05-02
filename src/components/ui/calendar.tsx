"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { css, cx } from "@/styles/css";
import { HTMLStyledProps } from "@/styles/types";
import { button } from "@/styles/recipes";

export type CalendarProps = HTMLStyledProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  css: cssProp,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx(css({ p: "3" }, cssProp), className)}
      classNames={{ ...classes, ...classNames }}
      components={{
        IconLeft: () => <ChevronLeft className={css({ size: "4" })} />,
        IconRight: () => <ChevronRight className={css({ size: "4" })} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

const classes = {
  months: css({
    display: "flex",
    flexDir: "column",
    spaceY: 4,
    sm: {
      flexDir: "row",
      spaceX: 4,
      spaceY: 0,
    },
  }),
  month: css({ spaceY: 4 }),
  caption: css({ dflex: "center", paddingTop: "1", position: "relative" }),
  caption_label: css({ textStyle: "sm", fontWeight: "medium" }),
  nav: css({ spaceX: 1, display: "flex", alignItems: "center" }),
  nav_button: cx(
    button({ variant: "outline" }),
    css({
      size: "7",
      bgColor: "transparent",
      p: "0",
      opacity: "0.5",
      _hover: { opacity: "100" },
    })
  ),
  nav_button_previous: css({ position: "absolute", left: "1" }),
  nav_button_next: css({ position: "absolute", right: "1" }),
  table: css({ width: "full", borderCollapse: "collapse", spaceY: 1 }),
  head_row: css({ display: "flex" }),
  head_cell: css({
    color: "mutedForeground",
    rounded: "md",
    width: "9",
    fontWeight: "normal",
    fontSize: "0.8rem",
    padding: "1px",
  }),
  row: css({ display: "flex", width: "full", mt: 2 }),
  cell: css({
    size: "9",
    textAlign: "center",
    textStyle: "sm",
    padding: "0",
    position: "relative",
    "&:has([aria-selected].day-range-end)": {
      roundedRight: "md",
    },
    "&:has([aria-selected].day-outside)": {
      bgColor: "accent/50",
    },
    "&:has([aria-selected])": {
      bgColor: "accent",
    },
    "&:has([aria-selected]):first-child": {
      roundedLeft: "md",
    },
    "&:has([aria-selected]):last-child": {
      roundedRight: "md",
    },
    _focusWithin: {
      position: "relative",
      zIndex: 20,
    },
  }),
  day: cx(
    button({ variant: "ghost" }),
    css({
      padding: "0",
      size: "9",
      fontWeight: "normal",
      "&[aria-selected]": {
        opacity: 1,
      },
    })
  ),
  day_range_end: "day-range-end",
  day_selected: css({
    bgColor: "primary!",
    color: "primaryForeground!",
    _hover: {
      bgColor: "primary",
      color: "primaryForeground",
    },
    _focus: {
      bgColor: "primary",
      color: "primaryForeground",
    },
  }),
  day_today: css({
    bgColor: "accent",
    color: "accentForeground",
  }),
  day_outside: cx(
    css({
      color: "mutedForeground!",
      opacity: 0.5,
      "&[aria-selected]": {
        bgColor: "accent/50!",
        opacity: 0.3,
      },
    }),
    "day-outside"
  ),
  day_disabled: css({
    color: "mutedForeground",
    opacity: 0.5,
  }),
  day_range_middle: css({
    "&[aria-selected]": {
      bgColor: "accent!",
      color: "accentForeground!",
    },
  }),
  day_hidden: css({ visibility: "hidden" }),
};

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      css={{ rounded: "md", borderWidth: "1px" }}
      mode="single"
      // captionLayout="dropdown"
      selected={date}
      onSelect={setDate}
    />
  );
}
