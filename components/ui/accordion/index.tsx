"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import {
  AccordionContentWrapper,
  AccordionIcon,
  AccordionPrimitiveContent,
  AccordionPrimitiveHeader,
  AccordionPrimitiveItem,
  AccordionPrimitiveTrigger,
} from "@/components/ui/accordion/style"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ ...props }, ref) => <AccordionPrimitiveItem ref={ref} {...props} />)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <AccordionPrimitiveHeader>
    <AccordionPrimitiveTrigger ref={ref} {...props}>
      {children}
      <AccordionIcon />
    </AccordionPrimitiveTrigger>
  </AccordionPrimitiveHeader>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <AccordionPrimitiveContent ref={ref} {...props}>
    <AccordionContentWrapper>{children}</AccordionContentWrapper>
  </AccordionPrimitiveContent>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
