"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { css } from "@/styles/css";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          // use array syntax of newer version
          css={{
            w: "280px",
            justifyContent: "start",
            textAlign: "left",
            fontWeight: "normal",
            ...(!date ? { color: "mutedForeground" } : {}),
          }}
        >
          <CalendarIcon className={css({ mr: 2, size: "4" })} />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "auto", p: 0 }}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
