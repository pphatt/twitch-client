import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ToggleVisibilityRightColumn = styled.div`
  position: absolute;

  display: flex;
  flex-grow: 0;
  flex-shrink: 0;

  visibility: visible;

  z-index: 10;
`

export const ToggleVisibilityRightColumnWrapper = styled.div`
  display: inline-flex;
`

export const RightColumnToggleCollapseButton = styled(Button)`
  color: hsl(var(--color-hinted-grey-14));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  vertical-align: middle;

  text-decoration: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));
  }
`

export const RightColumnToggleCollapseButtonWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const RightColumnToggleCollapseButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const RightColumnToggleCollapseButtonOverlay = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    min-height: 100%;

    fill: currentcolor;
  }
`
