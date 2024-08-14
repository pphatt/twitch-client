import * as ToastPrimitives from "@radix-ui/react-toast"
import styled, { css, keyframes } from "styled-components"

import type { toastVariants } from "@/components/ui/toast/default-toast"
import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

const SwipeEnd = keyframes`
    from {
        transform: translateX(var(--radix-toast-swipe-end-x));
    }

    to {
        transform: translateX(100%);
    }
`

export const ToastPrimitivesViewport = styled(ToastPrimitives.Viewport)`
  position: fixed;
  top: 0;

  display: flex;

  width: 100%;

  max-height: 100vh;

  padding: 1rem;

  z-index: 100;

  @media (min-width: 768px) {
    max-width: 420px;
  }

  @media (min-width: 640px) {
    top: auto;
    right: 0;
    bottom: 0;

    flex-direction: column;
  }
`

const DefaultToastVariant = css``

const DestructiveToastVariant = css``

export const ToastPrimitivesRoot = styled(ToastPrimitives.Root)<toastVariants>`
  ${({ $variant = "default" }) =>
    $variant === "default" ? DefaultToastVariant : DestructiveToastVariant};

  position: relative;

  display: flex;
  //justify-content: center;
  align-items: center;

  color: hsl(0 0% 98%);
  background-color: hsl(240 10% 3.9%);

  width: 100%;

  border-width: 1px;
  border-radius: calc(0.5rem - 2px);

  padding: 1.5rem 2rem 1.5rem 1.5rem;

  overflow: hidden;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  //transition-property: all;
  //transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  //transition-duration: 0.15s;

  &:hover {
    .toast-close {
      opacity: 1;
    }
  }

  &[data-state="open"] {
    --tw-enter-translate-y: 100%;

    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-translate-x: 100%;

    animation-duration: 150ms;

    animation-name: ${exitKeyframes};
  }

  &[data-swipe="move"] {
    --tw-translate-x: var(--radix-toast-swipe-move-x);

    transform: translateX(var(--tw-translate-x));
  }

  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe="end"] {
    animation-duration: 100ms;
    animation-timing-function: ease-out;

    animation-name: ${SwipeEnd};
  }
`

export const ToastPrimitivesAction = styled(ToastPrimitives.Action)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border-radius: calc(0.5rem - 2px);

  height: 2rem;

  padding-left: 0.75rem;
  padding-right: 0.75rem;

  margin-left: 16px;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    background-color: hsl(240 3.7% 15.9%);
  }
`

export const ToastPrimitivesClose = styled(ToastPrimitives.Close)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  margin-left: 16px;

  color: hsl(0 0% 98% / 0.5);
  background-color: transparent;

  border-radius: calc(0.5rem - 2px);

  padding: 0.25rem;

  opacity: 0;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: hsl(0 0% 98%);
  }
`

export const ToastPrimitivesTitle = styled(ToastPrimitives.Title)`
  font-weight: 600;

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const ToastPrimitivesDescription = styled(ToastPrimitives.Description)`
  opacity: 0.9;

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const ToasterLayoutWrapper = styled.div`
  display: grid;
  gap: 0.25rem;
`
