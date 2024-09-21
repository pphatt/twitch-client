import type * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"
import styled from "styled-components"

export const ResizablePrimitivePanelGroup = styled(
  ResizablePrimitive.PanelGroup
)<React.ComponentProps<typeof ResizablePrimitive.PanelGroup>>`
  display: flex;

  width: 100%;
  height: 100%;

  &[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }
`

export const ResizablePrimitivePanelResizeHandle = styled(
  ResizablePrimitive.PanelResizeHandle
)`
  position: relative;

  background-color: hsl(var(--border));

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1px;

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;

    width: 0.25rem;

    content: "";

    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 1px #fff,
      0 0 0 2px hsl(var(--ring)),
      0 0 #0000;
  }

  &[data-panel-group-direction="vertical"] {
    width: 100%;
    height: 1px;

    &:after {
      --tw-translate-x: 0px;
      --tw-translate-y: -50%;

      left: 0;

      width: 100%;
      height: 0.25rem;
    }

    & > div {
      --tw-rotate: 90deg;
    }
  }
`

export const ResizableHandleGripWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: hsl(var(--border));

  width: 0.75rem;
  height: 1rem;

  border-width: 1px;
  border-radius: calc(var(--radius) - 4px);

  z-index: 10;

  svg {
    width: 0.625rem;
    height: 0.625rem;
  }
`
