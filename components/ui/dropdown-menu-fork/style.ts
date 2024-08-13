import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button/button"
import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const DropdownMenuPrimitiveContent = styled(
  DropdownMenuPrimitive.Content
)`
  color: #fff;
  background-color: hsl(var(--background-alt));

  max-width: 90vw;
  min-width: 160px;
  max-height: calc(100vh - 5rem);
  height: 100%;

  border-radius: calc(0.5rem - 2px);

  overflow: hidden;

  padding: 0;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 4px rgba(0, 0, 0, 0.4);

  will-change: transform, opacity;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &::-webkit-scrollbar {
    display: none;

    height: 0;
    width: 0;
  }

  &[data-state="open"] {
    --tw-enter-scale: 0.95;
    --tw-enter-opacity: 0;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-scale: 0.95;
    --tw-exit-opacity: 0;

    animation-name: ${exitKeyframes};
  }

  &[data-side="top"] {
    --tw-enter-translate-y: 0.5rem;
  }

  &[data-side="right"] {
    --tw-enter-translate-x: -0.5rem;
  }

  &[data-side="bottom"] {
    --tw-enter-translate-y: -0.5rem;
  }

  &[data-side="left"] {
    --tw-enter-translate-x: 0.5rem;
  }
`

export const DropdownMenuHeaderWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  background-color: hsl(var(--background));

  min-height: 40px;

  padding-left: 10px;
  padding-right: 10px;
`

export const DropdownMenuHeaderTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  text-align: center;
`

export const DropdownMenuHeaderText = styled.p`
  color: hsl(var(--foreground-alt));

  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
`

export const DropdownMenuItemWrapperStyled = styled.div`
  position: relative;

  width: 100%;
`

export const DropdownMenuItemContainerStyled = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  padding: 5px;

  text-align: start;
`

const DropdownMenuItemParentWrapper = css`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  border-radius: var(--radius);

  font-size: 0.875rem;
  line-height: 1.25rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: default;

  transition: none !important;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    display: block;
    vertical-align: middle;

    width: 10px;
    height: 10px;

    margin-right: 5px;
  }

  &:hover,
  &:focus {
    background-color: hsl(var(--color-background-interactable-hover));
  }

  &:active {
    background-color: hsl(var(--color-background-interactable-active));
  }
`

export const DropdownMenuItemButtonWrapper = styled(Button)`
  ${DropdownMenuItemParentWrapper}
`

export const DropdownMenuItemLinkWrapper = styled(Button)`
  ${DropdownMenuItemParentWrapper};

  cursor: pointer;
`

export const DropdownMenuItemTitleWrapper = styled.div`
  flex-grow: 1;
`

export const DropdownMenuLabelWrapper = styled.div`
  padding-left: 5px;
  padding-right: 5px;

  margin-top: 5px;
  margin-bottom: 5px;
`

export const DropdownMenuLabelTextWrapper = styled.p`
  color: hsl(var(--foreground-alt-2));

  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;

  text-transform: uppercase;
`

export const DropdownMenuPrimitiveSeparator = styled(
  DropdownMenuPrimitive.Separator
)`
  border-top: 1px solid hsla(var(--color-border-base));

  padding-bottom: 10px;

  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
`
