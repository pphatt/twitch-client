import * as DialogPrimitive from "@radix-ui/react-dialog"
import styled, { css } from "styled-components"

import type {
  DialogPosition,
  DialogType,
  TweakOptions,
} from "@/components/ui/dialog/index"
import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const DialogPrimitiveOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;

  background-color: hsl(var(--background) / 0.85);

  z-index: 50;

  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state="open"] {
    --tw-enter-opacity: 0;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;

    animation-name: ${exitKeyframes};
  }
`

const commandDialogStyle = css`
  // this is not the shadcn/ui default style
  position: fixed;
  //top: 50%;
  left: 50%;

  display: grid;
  gap: 1rem;

  background-color: hsl(var(--background));

  max-width: 32rem;
  width: 100%;

  border-width: 1px;

  padding: 0;

  overflow: hidden;

  z-index: 50;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;

  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state="open"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: -50%;
    --tw-enter-translate-y: -48%;
    --tw-enter-scale: 0.95;

    --tw-translate-x: -50%;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-translate-x: -50%;
    --tw-exit-translate-y: -48%;
    --tw-exit-scale: 0.95;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 640px) {
    border-radius: var(--radius);
  }
`

const dialogStyled = css`
  position: fixed;
  top: 50%;
  left: 50%;

  display: grid;
  gap: 1rem;

  background-color: hsl(var(--background));

  border-width: 1px;

  border-radius: 0.5rem;

  max-width: 425px;
  width: 100%;

  padding: 1.5rem;

  z-index: 50;

  transform: translate(-50%, -50%) scale(1);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;

  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state="open"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: -50%;
    --tw-enter-translate-y: -48%;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-translate-x: -50%;
    --tw-exit-translate-y: -48%;
    --tw-exit-scale: 0.95;

    animation-name: ${exitKeyframes};
  }
`

const dialogDefaultPositionStyled = css`
  animation-name: ${exitKeyframes};
`

const dialogTopPositionStyled = css`
  top: 3%;

  --tw-translate-y: 0px;
`

export const DialogPrimitiveContent = styled(DialogPrimitive.Content)<
  DialogPosition & DialogType & TweakOptions
>`
  ${({ $types }) => ($types === "command" ? commandDialogStyle : dialogStyled)}
  ${({ $position }) => $position === "default" && dialogDefaultPositionStyled}
  ${({ $position }) => $position === "top" && dialogTopPositionStyled}
`

export const DialogPrimitiveClose = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: hsl(var(--foreground));
  background-color: transparent;
  background-image: none;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  cursor: pointer;

  opacity: 0.7;

  user-select: none;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);

    opacity: 1;
  }
`

export const DialogHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DialogFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const DialogPrimitiveTitle = styled(DialogPrimitive.Title)`
  color: hsl(var(--foreground));

  font-size: 1.125rem;
  line-height: 1rem;
  font-weight: 600;

  letter-spacing: -0.025em;
`

export const DialogPrimitiveDescription = styled(DialogPrimitive.Description)`
  color: hsl(var(--muted-foreground));
  margin-top: 6px;

  font-size: 0.875rem;
  line-height: 1.25rem;
`
