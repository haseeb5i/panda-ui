"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HTMLStyledProps } from "@/styles/types";
import { css, cx } from "@/styles/css";

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
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
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
  nav_button: cn(
    buttonVariants({ variant: "outline" }),
    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  nav_button_previous: css({ position: "absolute", left: "1" }),
  nav_button_next: css({ position: "absolute", right: "1" }),
  table: css({ width: "full", borderCollapse: "collapse", spaceY: 1 }),
  head_row: css({ display: "flex" }),
  head_cell: css({
    color: { base: "zinc.500", _dark: "zinc.400" },
    rounded: "md",
    width: "9",
    fontWeight: "normal",
    fontSize: "0.8rem",
  }),
  row: css({ display: "flex", width: "full", mt: 2 }),
  cell: css({
    //  "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-zinc-800/50 dark:[&:has([aria-selected])]:bg-zinc-800"
    size: "9",
    textAlign: "center",
    textStyle: "sm",
    padding: "0",
    position: "relative",
    "&:has([aria-selected].day-range-end)": {
      roundedRight: "md",
    },
    "&:has([aria-selected].day-outside)": {
      bgColor: "zinc.100/50",
    },
    "&:has([aria-selected])": {
      bgColor: "zinc.100",
    },
  }),
  day: cn(
    buttonVariants({ variant: "ghost" }),
    "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
  ),
  day_range_end: "day-range-end",
  day_selected:
    "bg-zinc-900 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 focus:bg-zinc-900 focus:text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 dark:focus:bg-zinc-50 dark:focus:text-zinc-900",
  day_today: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
  day_outside:
    "day-outside text-zinc-500 opacity-50 aria-selected:bg-zinc-100/50 aria-selected:text-zinc-500 aria-selected:opacity-30 dark:text-zinc-400 dark:aria-selected:bg-zinc-800/50 dark:aria-selected:text-zinc-400",
  day_disabled: "text-zinc-500 opacity-50 dark:text-zinc-400",
  day_range_middle:
    "aria-selected:bg-zinc-100 aria-selected:text-zinc-900 dark:aria-selected:bg-zinc-800 dark:aria-selected:text-zinc-50",
  day_hidden: "invisible",
};
