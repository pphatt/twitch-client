"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { ProgressPrimitiveRoot } from "@/components/ui/process/style"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ value, ...props }, ref) => (
  <ProgressPrimitiveRoot ref={ref} {...props}>
    <ProgressPrimitive.Indicator
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitiveRoot>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
