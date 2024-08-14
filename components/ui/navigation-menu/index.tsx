import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

import {
  ChevronDownIcon,
  NavigationMenuIndicatorWrapper,
  NavigationMenuPrimitiveContent,
  NavigationMenuPrimitiveIndicator,
  NavigationMenuPrimitiveList,
  NavigationMenuPrimitiveRoot,
  NavigationMenuPrimitiveTrigger,
  NavigationMenuPrimitiveViewport,
  NavigationMenuViewportWrapper,
} from "@/components/ui/navigation-menu/style"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, ...props }, ref) => (
  <NavigationMenuPrimitiveRoot ref={ref} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitiveRoot>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ ...props }, ref) => <NavigationMenuPrimitiveList ref={ref} {...props} />)
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <NavigationMenuPrimitiveTrigger ref={ref} {...props}>
    {children} <ChevronDownIcon aria-hidden="true" />
  </NavigationMenuPrimitiveTrigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ ...props }, ref) => (
  <NavigationMenuPrimitiveContent ref={ref} {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ ...props }, ref) => (
  <NavigationMenuViewportWrapper>
    <NavigationMenuPrimitiveViewport ref={ref} {...props} />
  </NavigationMenuViewportWrapper>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ ...props }, ref) => (
  <NavigationMenuPrimitiveIndicator ref={ref} {...props}>
    <NavigationMenuIndicatorWrapper />
  </NavigationMenuPrimitiveIndicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
