"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { LabelPrimitiveRootWrapper } from "@/components/ui/label/style"

const Index = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => <LabelPrimitiveRootWrapper ref={ref} {...props} />)
Index.displayName = LabelPrimitive.Root.displayName

export { Index }
