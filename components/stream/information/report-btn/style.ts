import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"

export const ReportButtonWrapper = styled(Button)`
  color: hsl(var(--color-hinted-grey-14));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  text-decoration: none;
  white-space: nowrap;

  overflow: hidden;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));
  }
`

export const ReportButtonContainer = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const ReportButtonOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  display: inline-block;
  max-width: 90vw;
  width: 200px;
  min-width: 160px !important;

  border-radius: 6px;

  padding: 0;
`

export const ReportContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  overflow: auto;
`

export const ReportOptionWrapper = styled.div`
  position: relative;

  width: 100%;
`

export const ReportOptionContainer = styled(Button)`
  justify-content: flex-start;

  background-color: transparent;

  width: 100%;
  height: fit-content;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  line-height: 1.3;

  &:hover,
  &:focus {
    background-color: hsla(var(--color-background-interactable-hover));
  }

  &:active {
    background-color: hsla(var(--color-background-interactable-active));
  }
`

export const ReportOptionOverlay = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 5px;
`

export const ReportOption = styled.div`
  flex-grow: 1;
`
