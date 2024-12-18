import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import styled from "styled-components"

import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const HoverCardPrimitiveContentWrapper = styled(
  HoverCardPrimitive.Content
)`
  color: hsl(var(--popover-foreground));
  background-color: hsl(var(--popover));

  border-width: 1px;
  border-radius: calc(0.5rem - 2px);

  width: 20rem;

  padding: 1rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  box-shadow:
    0 0 #000,
    0 0 #000,
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state="open"] {
    --tw-enter-opacity: 0;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-scale: 0.95;

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
