import type * as React from "react"
import type Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button/button"
import type { StyledButtonProps } from "@/components/ui/button/style"

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
`

export const PaginationContentWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`

export const PaginationItemWrapper = styled.li``

export interface PaginationLinkWrapperProps
  extends StyledButtonProps,
    React.ComponentProps<typeof Link> {
  $isActive: boolean
}

export const PaginationLinkWrapper = styled(
  Button
).attrs<PaginationLinkWrapperProps>(({ $isActive }) => ({
  $variant: $isActive ? "outline" : "ghost",
  $size: "icon",
}))<PaginationLinkWrapperProps>``

export const PaginationPreviousWrapper = styled(
  Button
).attrs<PaginationLinkWrapperProps>(({ $isActive }) => ({
  $variant: $isActive ? "outline" : "ghost",
  $size: "icon",
}))<PaginationLinkWrapperProps>`
  gap: 0.25rem;

  padding-left: 0.625rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export const PaginationNextWrapper = styled(
  Button
).attrs<PaginationLinkWrapperProps>(({ $isActive }) => ({
  $variant: $isActive ? "outline" : "ghost",
  $size: "icon",
}))<PaginationLinkWrapperProps>`
  gap: 0.25rem;

  padding-left: 0.625rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export const PaginationEllipsisWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.25rem;
  height: 2.25rem;

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    position: absolute;

    width: 1px;
    height: 1px;

    border-width: 0;

    padding: 0;
    margin: -1px;

    overflow: hidden;

    clip: rect(0, 0, 0, 0);

    white-space: nowrap;
  }
`
