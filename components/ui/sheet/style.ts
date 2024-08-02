import * as SheetPrimitive from "@radix-ui/react-dialog"
import styled, { css } from "styled-components"

import { SheetContentProps } from "@/components/ui/sheet/sheet"
import {
  enterKeyframes,
  exitKeyframes,
} from "@/styles/abstract/style-animation"

export const SheetPrimitiveOverlay = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;

  background-color: hsl(var(--background) / 0.8);

  backdrop-filter: blur(4px);

  z-index: 50;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &[data-state="open"] {
    --tw-enter-opacity: 0;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;

    animation-name: ${exitKeyframes};
  }
`

const SheetSideTop = css`
  top: 0;
  right: 0;
  left: 0;

  border-bottom-width: 1px;

  &[data-state="open"] {
    --tw-enter-translate-y: -100%;
  }

  &[data-state="closed"] {
    --tw-exit-translate-y: -100%;
  }
`

const SheetSideRight = css`
  top: 0;
  right: 0;
  bottom: 0;

  width: 75%;
  height: 100%;

  border-left-width: 1px;

  @media (min-width: 640px) {
    max-width: 24rem;
  }

  &[data-state="open"] {
    --tw-enter-translate-x: 100%;
  }

  &[data-state="closed"] {
    --tw-exit-translate-x: 100%;
  }
`

const SheetSideBottom = css`
  right: 0;
  bottom: 0;
  left: 0;

  border-top-width: 1px;

  &[data-state="open"] {
    --tw-enter-translate-y: 100%;
  }

  &[data-state="closed"] {
    --tw-exit-translate-y: 100%;
  }
`

const SheetSideLeft = css`
  top: 0;
  bottom: 0;
  left: 0;

  width: 75%;
  height: 100%;

  border-right-width: 1px;

  @media (min-width: 640px) {
    max-width: 24rem;
  }

  &[data-state="open"] {
    --tw-enter-translate-x: -100%;
  }

  &[data-state="closed"] {
    --tw-exit-translate-x: -100%;
  }
`

export const SheetPrimitiveContent = styled(
  SheetPrimitive.Content
)<SheetContentProps>`
  ${({ $side }) => $side === "top" && SheetSideTop};
  ${({ $side }) => $side === "right" && SheetSideRight};
  ${({ $side }) => $side === "bottom" && SheetSideBottom};
  ${({ $side }) => $side === "left" && SheetSideLeft};

  position: fixed;

  background-color: hsl(var(--background));

  padding: 1.5rem;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke,
    opacity,
    box-shadow,
    transform,
    filter,
    backdrop-filter,
    -webkit-backdrop-filter;

  z-index: 50;

  &[data-state="open"] {
    transition-duration: 0.5s;

    --tw-enter-translate-x: 100%;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    animation-duration: 0.3s;

    --tw-exit-translate-x: 100%;

    animation-name: ${exitKeyframes};
  }
`

export const SheetPrimitiveClose = styled(SheetPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  background-color: transparent;

  border-radius: calc(0.5rem - 4px);

  opacity: 0.7;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(var(--background)),
      0 0 0 calc(2px + 2px) hsl(var(--ring)),
      0 0 #0000;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    position: absolute;

    width: 1px;
    height: 1px;

    border-width: 0;

    padding: 0;
    margin: -1px;

    clip: rect(0, 0, 0, 0);
    white-space: nowrap;

    overflow: hidden;
  }
`

export const SheetHeaderWrapper = styled.div`
  display: flex;

  flex-direction: column;

  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`

export const SheetFooterWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;

    margin-left: 0.5rem;
  }
`

export const SheetPrimitiveTitle = styled(SheetPrimitive.Title)`
  color: hsl(var(--foreground));

  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`

export const SheetPrimitiveDescription = styled(SheetPrimitive.Description)`
  color: hsl(var(--muted-foreground));

  margin-top: 8px;

  font-size: 0.875rem;
  line-height: 1.25rem;
`
