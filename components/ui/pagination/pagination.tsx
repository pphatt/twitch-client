import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import type { StyledButtonProps } from "@/components/ui/button/style"
import {
  PaginationContentWrapper,
  PaginationEllipsisWrapper,
  PaginationItemWrapper,
  PaginationLinkWrapper,
  PaginationNextWrapper,
  PaginationPreviousWrapper,
  PaginationWrapper,
  type PaginationLinkWrapperProps,
} from "@/components/ui/pagination/style"

const Pagination = ({ ...props }: React.ComponentProps<"nav">) => (
  <PaginationWrapper role="navigation" aria-label="pagination" {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ ...props }, ref) => <PaginationContentWrapper ref={ref} {...props} />)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <PaginationItemWrapper ref={ref} {...props} />)
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = StyledButtonProps &
  PaginationLinkWrapperProps &
  React.ComponentProps<typeof Link>

const PaginationLink = ({
  $isActive,
  $size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Link {...props} passHref>
    <PaginationLinkWrapper
      as={"a"}
      $isActive={$isActive}
      $size={$size}
      aria-current={$isActive ? "page" : undefined}
      {...props}
    />
  </Link>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ ...props }: PaginationLinkProps) => (
  <PaginationPreviousWrapper
    aria-label="Go to previous page"
    $size={"default"}
    {...props}
  >
    <ChevronLeft />
    <span>Previous</span>
  </PaginationPreviousWrapper>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ ...props }: PaginationLinkProps) => (
  <PaginationNextWrapper
    aria-label="Go to next page"
    $size={"default"}
    {...props}
  >
    <span>Next</span>
    <ChevronRight />
  </PaginationNextWrapper>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ ...props }: React.ComponentProps<"span">) => (
  <PaginationEllipsisWrapper aria-hidden {...props}>
    <MoreHorizontal />
    <span>More pages</span>
  </PaginationEllipsisWrapper>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
