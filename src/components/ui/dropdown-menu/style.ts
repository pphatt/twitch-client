import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import styled, { css } from "styled-components"

import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const ShareDropdownMenuPrimitiveTriggerStyled = css`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: calc(0.5rem - 4px);

  padding: 0.375rem 0.5rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: default;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    display: block;
    vertical-align: middle;

    width: 1rem;
    height: 1rem;

    margin-right: 0.5rem;
  }

  &:hover,
  &:focus {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }
`

export const DropdownMenuPrimitiveSubTrigger = styled(
  DropdownMenuPrimitive.SubTrigger
)`
  ${ShareDropdownMenuPrimitiveTriggerStyled}
`

export const DropdownMenuPrimitiveContent = styled(
  DropdownMenuPrimitive.Content
)`
  color: #fff;
  background-color: rgb(36 39 44);

  width: 14rem;
  min-width: 8rem;

  border-color: rgb(36 39 44);
  border-width: 1px;
  border-radius: calc(0.5rem - 2px);

  overflow: hidden;

  padding: 10px;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 4px rgba(0, 0, 0, 0.4);

  will-change: transform, opacity;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

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

export const DropdownMenuPrimitiveSubContent = styled(
  DropdownMenuPrimitiveContent
)``

export const DropdownMenuPrimitiveItem = styled(
  DropdownMenuPrimitiveSubTrigger
)``

export const DropdownMenuPrimitiveCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem
)`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: calc(0.5rem - 4px);

  padding: 0.375rem 0.5rem 0.375rem 2rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: default;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  span {
    position: absolute;
    left: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 0.875rem;
    height: 0.875rem;

    svg {
      display: block;
      vertical-align: middle;

      width: 1rem;
      height: 1rem;
    }
  }

  &:hover,
  &:focus {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }
`

export const DropdownMenuPrimitiveRadioItem = styled(
  DropdownMenuPrimitive.RadioItem
)`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: calc(0.5rem - 4px);

  font-size: 0.875rem;
  line-height: 1.25rem;

  cursor: default;
  user-select: none;

  padding: 0.375rem 0.5rem 0.375rem 2rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  .checked-svg {
    position: absolute;
    left: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 0.875rem;
    width: 0.875rem;

    svg {
      fill: currentColor;

      width: 0.5rem;
      height: 0.5rem;
    }
  }

  &[data-state="disabled"] {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }
`

export const DropdownMenuPrimitiveLabel = styled(DropdownMenuPrimitive.Label)`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;

  padding: 0.375rem 0.5rem;
`

export const DropdownMenuPrimitiveSeparator = styled(
  DropdownMenuPrimitive.Separator
)`
  background-color: hsl(var(--muted));

  height: 1px;

  margin: 0.25rem -0.25rem;
`

export const DropdownMenuShortcutSpan = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.1em;

  margin-left: auto;

  opacity: 0.6;
`
