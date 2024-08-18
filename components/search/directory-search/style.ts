import Link from "next/link"
import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
`

export const TagsFilterDropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`

export const SortByWrapper = styled.div`
  display: flex;
`

export const SortByText = styled.span`
  flex-grow: 0;
  flex-shrink: 0;

  color: hsl(var(--color-hinted-grey-15));

  padding-right: 5px;

  font-weight: 700;

  align-self: center;
`

export const SortByDropdown = styled.div`
  margin-left: 5px;
`

export const SortByTrigger = styled(Button)`
  gap: 5px;

  color: rgb(255 255 255);
  background-color: rgb(23 28 30) !important;

  height: 30px;

  border: 0;

  padding: 0;

  font-weight: 600;

  &:focus-visible {
    box-shadow: none;
  }
`

export const SortByTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  padding: 0 8px 0 10px;
`

export const SortByTriggerIconWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 20px;

  margin-left: 5px;
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  width: 100%;
  min-width: 250px !important;
`

const CurrentSelected = css`
  color: initial !important;
  background-color: hsl(var(--color-twitch-orange-11)) !important;

  &:hover {
    color: initial !important;
    background-color: hsl(var(--color-twitch-orange-11)) !important;
  }
`

export const DropdownMenuItem = styled.div<{
  $currentSelected: boolean
}>`
  ${({ $currentSelected }) => $currentSelected && CurrentSelected}

  position: relative;

  display: flex;
  align-items: center;

  border-radius: var(--radius);

  font-size: 14px;
  line-height: 1.2;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: pointer;

  transition: none;

  svg {
    display: block;
    vertical-align: middle;

    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    color: initial;
    //background-color: rgba(83, 83, 95, 0.48) !important;
    background-color: rgb(71 79 84);
  }
`

export const DropdownItemLink = styled(Link)`
  width: 100%;
`

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;

  padding: 5px;
`

export const DropdownSVG = styled.div`
  margin-right: 5px;
`

export const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: 20px;
  height: 20px;

  margin-left: 20px;
`
