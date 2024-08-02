"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { SeparatorPrimitiveRoot } from "@/components/ui/separator/style"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitiveRoot
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
