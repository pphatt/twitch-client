import * as React from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import {
  BreadcrumbEllipsisWrapper,
  BreadcrumbItemWrapper,
  BreadcrumbLinkSlotWrapper,
  BreadcrumbLinkWrapper,
  BreadcrumbListWrapper,
  BreadcrumbPageWrapper,
  BreadcrumbSeparatorWrapper,
  BreadcrumbWrapper,
} from "@/components/ui/bread-crumb/style"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => (
  <BreadcrumbWrapper ref={ref} aria-label="breadcrumb" {...props} />
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ ...props }, ref) => <BreadcrumbListWrapper ref={ref} {...props} />)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ ...props }, ref) => <BreadcrumbItemWrapper ref={ref} {...props} />)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, ...props }, ref) => {
  const Comp: React.ElementType = asChild
    ? BreadcrumbLinkSlotWrapper
    : BreadcrumbLinkWrapper

  return <Comp ref={ref} {...props} />
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ ...props }, ref) => (
  <BreadcrumbPageWrapper
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  ...props
}: React.ComponentProps<"li">) => (
  <BreadcrumbSeparatorWrapper role="presentation" aria-hidden="true" {...props}>
    {children ?? <ChevronRight />}
  </BreadcrumbSeparatorWrapper>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({ ...props }: React.ComponentProps<"span">) => (
  <BreadcrumbEllipsisWrapper role="presentation" aria-hidden="true" {...props}>
    <MoreHorizontal />
    <span>More</span>
  </BreadcrumbEllipsisWrapper>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
