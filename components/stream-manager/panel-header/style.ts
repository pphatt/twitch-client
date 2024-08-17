import styled from "styled-components"

import { Button } from "@/components/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export const PanelHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: hsl(var(--background-alt));

  width: 100%;
  height: 30px;

  border-bottom: 1px solid #000;

  padding-left: 10px;
  padding-right: 5px;
`

export const PanelHeaderTextWrapper = styled.div`
  margin-right: 5px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PanelHeaderText = styled.h2`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PanelHeaderControl = styled.div`
  display: flex;
  margin-left: auto;
`

export const PanelHeaderClose = styled.div`
  width: 24px;
  height: 24px;

  cursor: default;

  pointer-events: all;
`

export const CloseButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 24px;
  height: 24px;

  border-radius: calc(var(--radius) - 2px);

  padding: 0;

  font-size: 12px;
  font-weight: 600;

  user-select: none;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }
`

export const CloseButtonWrapper = styled.div`
  width: 16px;
  height: 16px;

  pointer-events: none;
`

export const CloseButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;
`

export const DropdownTrigger = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 5px 0;

  overflow: hidden;

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }

  &:active {
    background-color: rgba(83, 83, 95, 0.55);
  }

  &:focus-visible {
    box-shadow: none;
  }
`

export const DropdownTriggerWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const DropdownMenuContentWrapper = styled(DropdownMenuContent)`
  max-width: 90vw;
  width: 200px;
  min-width: 160px !important;
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
  line-height: 1.5;

  outline: 2px solid transparent;
  outline-offset: 2px;

  text-align: left;

  cursor: pointer;

  transition: none;

  &:hover,
  &:focus {
    color: initial;
    background-color: rgb(71 79 84);
  }

  &:active {
    color: initial;
    background-color: rgba(83, 83, 95, 0.55);
  }

  &:focus-visible {
    box-shadow: none;
  }
`
