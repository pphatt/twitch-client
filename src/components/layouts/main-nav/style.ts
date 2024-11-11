import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu-fork"

export const MainNavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  flex-grow: 1;
  flex-shrink: 2;

  width: 100%;
`

export const HomeLink = styled(Link)`
  display: inline-flex;

  svg {
    align-self: center;

    width: 40px;
    height: 40px;
  }
`

export const MainNavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-self: center;

  height: 100%;
`

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;

  color: hsl(var(--foreground));

  height: 100%;

  text-align: center;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 75ms;

  &:hover {
    color: rgb(255 103 64);
  }
`

export const ItemTextWrapper = styled.div`
  display: none;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ItemText = styled.div`
  display: flex;
`

export const Text = styled.p`
  height: 100%;

  font-size: 0.8rem;
  line-height: 1.2;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`

export const OptionItems = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  padding-left: 10px;
  padding-right: 10px;
`

export const OptionItemsTrigger = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  user-select: none;

  &:not([disabled]):hover {
    color: hsl(var(--foreground));
    background-color: rgb(71 79 84);
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow: none;
  }
`

export const SVGWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const SVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    height: 100%;
    width: 100%;
  }
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  width: 200px;
`

export const DropdownMenuWrapper = styled.div`
  padding: 10px;
`
