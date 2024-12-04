"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import {
  DialogFooterWrapper,
  DialogHeaderWrapper,
  DialogPrimitiveClose,
  DialogPrimitiveContent,
  DialogPrimitiveDescription,
  DialogPrimitiveOverlay,
  DialogPrimitiveTitle,
} from "@/components/ui/dialog/style"
import { Icons } from "@/components/icons"

export interface DialogPosition {
  $position?: "default" | "top"
}

export interface DialogType {
  $types?: "command" | "dialog"
}

export interface TweakOptions {
  $showCloseButton?: boolean
}

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ ...props }, ref) => <DialogPrimitiveOverlay ref={ref} {...props} />)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    DialogPosition &
    DialogType &
    TweakOptions & {
      closeButtonClassname?: string
    }
>(({ children, $showCloseButton, closeButtonClassname, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitiveContent ref={ref} {...props}>
      {children}
      {($showCloseButton || $showCloseButton === undefined) && (
        <DialogPrimitiveClose className={closeButtonClassname}>
          <Icons.close />
          <span>Close</span>
        </DialogPrimitiveClose>
      )}
    </DialogPrimitiveContent>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <DialogHeaderWrapper {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <DialogFooterWrapper {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ ...props }, ref) => <DialogPrimitiveTitle ref={ref} {...props} />)
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ ...props }, ref) => <DialogPrimitiveDescription ref={ref} {...props} />)
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
