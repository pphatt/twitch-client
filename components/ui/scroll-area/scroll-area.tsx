"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import {
  ScrollAreaPrimitiveRoot,
  ScrollAreaPrimitiveScrollAreaScrollbar,
  ScrollAreaPrimitiveScrollAreaThumb,
  ScrollAreaPrimitiveViewport,
} from "@/components/ui/scroll-area/style"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    viewportClassName?: string
  }
>(({ viewportClassName, children, ...props }, ref) => (
  <ScrollAreaPrimitiveRoot ref={ref} {...props}>
    <ScrollAreaPrimitiveViewport className={viewportClassName}>
      {children}
    </ScrollAreaPrimitiveViewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitiveRoot>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitiveScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    {...props}
  >
    <ScrollAreaPrimitiveScrollAreaThumb />
  </ScrollAreaPrimitiveScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
