import styled from "styled-components"

import { Button } from "@/components/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export const DropdownTrigger = styled(Button)`
  background-color: transparent !important;

  max-width: 200px;
  width: 100%;
  height: calc(100% - 10px);

  padding: 5px 0;

  overflow: hidden;

  &:focus-visible {
    box-shadow: none;
  }
`

export const DropdownTriggerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;

  margin-right: 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const UpperText = styled.p`
  font-size: 13px;
  line-height: 1.5;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const LayoutText = styled.p`
  color: hsl(var(--foreground-alt-2));

  font-size: 12px;
  line-height: 1.5;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const DropdownTriggerArrowWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: 10px;
`

export const DropdownTriggerArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  svg {
    fill: currentcolor;
  }
`

export const DropdownContent = styled(DropdownMenuContent)`
  max-width: 90vw;
  width: 200px;
  min-width: 160px;
`

export const DropdownMenuItemWrapper = styled(DropdownMenuItem)`
  justify-content: flex-start;

  background-color: transparent;

  max-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 30px;

  border-radius: var(--radius);

  padding: 5px;

  font-size: 13px;
  line-height: 1.25rem;

  text-align: left;

  cursor: pointer;

  transition: none;

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    color: initial;
    background-color: rgba(83, 83, 95, 0.48);
  }

  &:not([disabled]):active {
    color: initial;
    background-color: rgba(83, 83, 95, 0.55);
  }

  &:not([disabled]):focus-visible {
    box-shadow: none;
  }
`
