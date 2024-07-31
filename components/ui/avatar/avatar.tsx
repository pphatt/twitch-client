"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import {
  AvatarPrimitiveFallback,
  AvatarPrimitiveImage,
  AvatarPrimitiveRoot,
} from "@/components/ui/avatar/style"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ ...props }, ref) => <AvatarPrimitiveRoot ref={ref} {...props} />)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ ...props }, ref) => <AvatarPrimitiveImage ref={ref} {...props} />)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ ...props }, ref) => <AvatarPrimitiveFallback ref={ref} {...props} />)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
