import * as SelectPrimitive from "@radix-ui/react-select"
import styled from "styled-components"

import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const SelectPrimitiveTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: hsl(var(--background));

  border-width: 1px;
  border-radius: calc(0.5rem - 4px);
  border-color: hsl(var(--input));

  padding: 0.5rem 0.75rem;

  width: 100%;

  font-size: 0.875rem;
  line-height: 1.25rem;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(var(--popover)),
      0 0 0 4px hsl(var(--accent)),
      0 0 #000;
  }

  svg {
    width: 1rem;
    height: 1rem;

    opacity: 0.5;
  }
`

export const SelectPrimitiveContent = styled(SelectPrimitive.Content)`
  position: relative;

  color: hsl(var(--popover-foreground));
  background-color: hsl(var(--popover));

  min-width: 8rem;

  border-width: 1px;
  border-radius: 0.375rem;

  overflow: hidden;

  z-index: 50;

  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  will-change: transform, opacity;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

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

    margin-bottom: 0.25rem;
  }

  &[data-side="right"] {
    --tw-enter-translate-x: -0.5rem;

    margin-left: 0.25rem;
  }

  &[data-side="bottom"] {
    --tw-enter-translate-y: -0.5rem;

    margin-top: 0.25rem;
  }

  &[data-side="left"] {
    --tw-enter-translate-x: 0.5rem;

    margin-right: 0.25rem;
  }
`

export const SelectPrimitiveViewport = styled(SelectPrimitive.Viewport)`
  width: 100%;
  min-width: var(--radix-select-trigger-width);
  height: var(--radix-select-trigger-height);

  padding: 0.25rem;
`

export const SelectPrimitiveLabel = styled(SelectPrimitive.Label)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  padding: 0.375rem 0.5rem 0.375rem 2rem;
`

export const SelectPrimitiveItem = styled(SelectPrimitive.Item)`
  position: relative;

  display: flex;
  align-items: center;

  border-radius: calc(0.5rem - 4px);

  width: 100%;

  font-size: 0.875rem;
  line-height: 1.25rem;

  padding: 0.375rem 0.5rem 0.375rem 2rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  cursor: default;
  user-select: none;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  span:first-child {
    position: absolute;
    left: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 0.875rem;
    height: 0.875rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  &:focus {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }
`

export const SelectPrimitiveSeparator = styled(SelectPrimitive.Separator)`
  background-color: hsl(240 3.7% 15.9%);

  height: 1px;

  margin: 0.25rem -0.25rem;
`
