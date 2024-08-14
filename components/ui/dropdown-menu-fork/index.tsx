"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenuHeaderText,
  DropdownMenuHeaderTextWrapper,
  DropdownMenuHeaderWrapper,
  DropdownMenuItemButtonWrapper,
  DropdownMenuItemContainerStyled,
  DropdownMenuItemLinkWrapper,
  DropdownMenuItemTitleWrapper,
  DropdownMenuItemWrapperStyled,
  DropdownMenuLabelTextWrapper,
  DropdownMenuLabelWrapper,
  DropdownMenuPrimitiveContent,
  DropdownMenuPrimitiveSeparator,
} from "@/components/ui/dropdown-menu-fork/style"

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

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
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
>(({ ...props }, ref) => (
  <DropdownMenuHeaderWrapper ref={ref} {...props}>
    <div></div>

    <DropdownMenuHeaderTextWrapper>
      <DropdownMenuHeaderText>{props.children}</DropdownMenuHeaderText>
    </DropdownMenuHeaderTextWrapper>

    <div className="close-btn"></div>
  </DropdownMenuHeaderWrapper>
))
DropdownMenuHeader.displayName = "DropdownMenuHeader"

const DropdownMenuItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <DropdownMenuItemWrapperStyled ref={ref} {...props} />)
DropdownMenuItemWrapper.displayName = "DropdownMenuItemWrapper"

const DropdownMenuItemContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <DropdownMenuItemContainerStyled ref={ref} {...props} />
))
DropdownMenuItemContainer.displayName = "DropdownMenuItemContainer"

// recommend using Button component for easier to setup
const DropdownMenuItemButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => <DropdownMenuItemButtonWrapper ref={ref} {...props} />)
DropdownMenuItemButton.displayName = "DropdownMenuItemButton"

const DropdownMenuItemLink = ({
  className,
  children,
  ...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link {...props} passHref>
    <DropdownMenuItemLinkWrapper as={"div"} className={className}>
      {children}
    </DropdownMenuItemLinkWrapper>
  </Link>
)
DropdownMenuItemLink.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuItemTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <DropdownMenuItemTitleWrapper ref={ref} {...props} />)
DropdownMenuItemTitle.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <DropdownMenuLabelWrapper ref={ref} {...props}>
    <DropdownMenuLabelTextWrapper>{children}</DropdownMenuLabelTextWrapper>
  </DropdownMenuLabelWrapper>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ ...props }, ref) => (
  <DropdownMenuPrimitiveSeparator ref={ref} {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export {
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItemWrapper,
  DropdownMenuItemContainer,
  DropdownMenuItemButton,
  DropdownMenuItemLink,
  DropdownMenuItemTitle,
  DropdownMenuLabel,
  DropdownMenuSeparator,
}
