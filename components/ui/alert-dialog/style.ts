import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import styled from "styled-components"

import { Button } from "@/components/ui/button/button"
import {
  enterKeyframes,
  exitKeyframes,
} from "@/styles/abstract/style-animation"

export const AlertDialogPrimitiveOverlay = styled(AlertDialogPrimitive.Overlay)`
  position: fixed;

  background-color: rgba(0, 0, 0, 0.8);

  inset: 0;

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

export const AlertDialogPrimitiveContent = styled(AlertDialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  display: grid;
  gap: 1rem;

  background-color: hsl(var(--background));

  max-width: 32rem;
  width: 100%;

  border-width: 1px;

  padding: 1.5rem;

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
    --tw-translate-y: -50%;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-translate-x: -50%;
    --tw-exit-translate-y: -48%;
    --tw-exit-scale: 0.95;

    animation-name: ${exitKeyframes};
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 640px) {
    border-radius: var(--radius);
  }
`

export const AlertDialogHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`

export const AlertDialogFooterWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`

export const AlertDialogPrimitiveTitle = styled(AlertDialogPrimitive.Title)`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export const AlertDialogPrimitiveDescription = styled(
  AlertDialogPrimitive.Description
)`
  color: hsl(var(--muted-foreground));

  margin-top: 8px;

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const AlertDialogPrimitiveAction = styled(AlertDialogPrimitive.Action)`
  margin-top: 0.5rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`

export const AlertDialogPrimitiveCancelWrapper = styled(Button).attrs({
  $variant: "outline",
})``
