import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { ContentItemContainer } from "@/components/layouts/dashboard/dashboard-item-layout/style"

export const ExpandArrowWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  transform: rotate(90deg);
  transition: 100ms transform ease;
`

export const ContentItemContainerBtn = styled(Button)`
  ${ContentItemContainer};

  justify-content: space-between;

  background-color: transparent;

  min-height: 41px;

  padding: 0;

  &[data-state="open"] {
    ${ExpandArrowWrapper} {
      transform: rotate(-90deg);
    }
  }
`

export const GroupContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

export const DropdownContentWrapper = styled(DropdownMenuContent)`
  background-color: hsl(var(--background-alt));

  max-width: 90vw;
  width: 200px;
  min-width: 160px !important;

  border-radius: calc(var(--radius) + 2px) !important;

  padding: 5px !important;

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.9),
    0 0 2px rgba(0, 0, 0, 0.9);
`

export const DropdownContentContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  border-radius: var(--radius);
`

export const ArrowSVGWrapper = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;

  margin-right: 5px;

  pointer-events: none;
`

export const ArrowSVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 15px;
  height: 15px;

  fill: currentColor;

  svg {
    height: 15px;
    width: 15px;
  }
`
