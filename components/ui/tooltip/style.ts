import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import styled from "styled-components"

import {
  enterKeyframes,
  exitKeyframes,
} from "@/styles/abstract/style-animation"

export const TooltipPrimitiveContent = styled(TooltipPrimitive.Content)`
  color: inherit;
  background-color: hsl(var(--background-alt));

  border-width: 0;
  border-radius: calc(0.5rem - 2px);

  font-size: 0.875rem;
  line-height: 1.25rem;

  padding: 0.375rem 0.75rem;

  overflow: hidden;

  z-index: 50;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 4px rgba(0, 0, 0, 0.4);

  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-side="top"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-y: 0.5rem;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-side="bottom"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-y: -0.5rem;
    --tw-enter-scale: 0.95;
    animation-name: ${enterKeyframes};
  }

  &[data-side="left"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: 0.5rem;
    --tw-enter-scale: 0.95;
    animation-name: ${enterKeyframes};
  }

  &[data-side="right"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: -0.5rem;
    --tw-enter-scale: 0.95;
    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-scale: 0.95;

    animation-name: ${exitKeyframes};
  }
`
