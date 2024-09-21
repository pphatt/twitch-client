"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { HoverCardPrimitiveContentWrapper } from "@/components/ui/hover-card/style"

const Index = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitiveContentWrapper
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { Index, HoverCardTrigger, HoverCardContent }
