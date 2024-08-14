"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import {
  SheetFooterWrapper,
  SheetHeaderWrapper,
  SheetPrimitiveClose,
  SheetPrimitiveContent,
  SheetPrimitiveDescription,
  SheetPrimitiveOverlay,
  SheetPrimitiveTitle,
} from "@/components/ui/sheet/style"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ ...props }, ref) => <SheetPrimitiveOverlay {...props} ref={ref} />)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

export interface SheetSideVariants {
  $side?: "top" | "bottom" | "left" | "right"
}

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    SheetSideVariants {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ $side = "right", children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitiveContent ref={ref} $side={$side} {...props}>
      {children}
      <SheetPrimitiveClose>
        <X />
        <span>Close</span>
      </SheetPrimitiveClose>
    </SheetPrimitiveContent>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <SheetHeaderWrapper {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <SheetFooterWrapper {...props} />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ ...props }, ref) => <SheetPrimitiveTitle ref={ref} {...props} />)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ ...props }, ref) => <SheetPrimitiveDescription ref={ref} {...props} />)
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
