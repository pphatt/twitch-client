"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { DayPicker } from "react-day-picker"

import { DayPickerWrapper } from "@/components/ui/calendar/style"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

/*
 * this component is not really optimized in styled-component.
 * potential optimize it in the future
 * */
function Calendar({
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPickerWrapper
      showOutsideDays={showOutsideDays}
      classNames={{
        months: "months",
        month: "month",
        caption: "caption",
        caption_label: "caption-label",
        nav: "nav",
        nav_button: "nav-button",
        nav_button_previous: "nav-button-previous",
        nav_button_next: "nav-button-next",
        table: "table",
        head_row: "head-row",
        head_cell: "head-cell",
        row: "row",
        cell: "cell",
        day: "day",
        day_range_end: "day-range-end",
        day_selected: "day-selected",
        day_today: "day-today",
        day_outside: "day-outside",
        day_disabled: "day-disabled",
        day_range_middle: "day-range-middle",
        day_hidden: "day-hidden",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className={"calendar-icon"} {...props} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className={"calendar-icon"} {...props} />
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
