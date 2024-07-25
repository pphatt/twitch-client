"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import styles from "@/styles/components/ui/dropdown-menu-fork.module.scss"

// <DropdownMenu>
//   <DropdownMenuTrigger></DropdownMenuTrigger>
//
//   <DropdownMenuContent>
//     <DropdownMenuHeader></DropdownMenuHeader>
//
//     <DropdownMenuLabel></DropdownMenuLabel>
//     <DropdownMenuItemWrapper>
//       <DropdownMenuItem>
//         <DropdownMenuItemContainer>{children}</DropdownMenuItemContainer>
//       </DropdownMenuItem>
//     </DropdownMenuItemWrapper>
//
//     <DropdownMenuItemWrapper>
//       <DropdownMenuItemLink>
//         <DropdownMenuItemContainer>{children}</DropdownMenuItemContainer>
//       </DropdownMenuItemLink>
//     </DropdownMenuItemWrapper>
//   </DropdownMenuContent>
//   <DropdownMenuSeparator></DropdownMenuSeparator>
// </DropdownMenu>

// This component will not replace the components/ui/dropdown-menu (default shadcn dropdown).
// Some components will still use the default shadcn dropdown.
// This component like a fork of the default shadcn dropdown, but it has some other features and custom components also.
// Mostly used for more ease-to-implement ui.

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(styles["dropdown-menu-content"], className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// this may need some close button or something like that.
// this component may get deleted if the header gets complex.
const DropdownMenuHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles["dropdown-menu-header"], className)}
    {...props}
  >
    <div className={styles[""]}></div>

    <div className={styles["dropdown-menu-header-wrapper"]}>
      <p className={styles["dropdown-menu-header-text"]}>{props.children}</p>
    </div>

    <div className={styles["close-btn"]}></div>
  </div>
))
DropdownMenuHeader.displayName = "DropdownMenuHeader"

const DropdownMenuItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles["dropdown-menu-item-wrapper"], className)}
    {...props}
  />
))
DropdownMenuItemWrapper.displayName = "DropdownMenuItemWrapper"

const DropdownMenuItemContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles["dropdown-menu-item-container"], className)}
    {...props}
  />
))
DropdownMenuItemContainer.displayName = "DropdownMenuItemContainer"

// recommend using Button component for easier to setup
const DropdownMenuItemButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(styles["dropdown-menu-item"], inset, className)}
    {...props}
  />
))
DropdownMenuItemButton.displayName = "DropdownMenuItemButton"

const DropdownMenuItemLink = ({
  className,
  ...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    className={cn(styles["dropdown-menu-item-link"], className)}
    {...props}
  />
)
DropdownMenuItemLink.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuItemTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles["dropdown-menu-item-title"], className)}
    {...props}
  />
))
DropdownMenuItemTitle.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(styles["dropdown-menu-label"], inset, className)}
    {...props}
  >
    <p className={styles["dropdown-menu-label-text"]}>{children}</p>
  </div>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(styles["dropdown-separator"], className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItemWrapper,
  DropdownMenuItemContainer,
  DropdownMenuItemButton,
  DropdownMenuItemLink,
  DropdownMenuItemTitle,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
}
