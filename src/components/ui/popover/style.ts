import * as PopoverPrimitive from "@radix-ui/react-popover"
import styled from "styled-components"

import { enterKeyframes } from "@/styles/abstract/_mixins"

export const PopoverPrimitiveContent = styled(PopoverPrimitive.Content)`
  color: hsl(var(--popover-foreground));
  background-color: hsl(var(--popover));

  width: 18rem;

  border-width: 1px;
  border-radius: calc(var(--radius) - 2px);

  padding: 1rem;

  outline-offset: 2px;
  outline: 2px solid transparent;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  z-index: 50;

  &[data-state="open"] {
    --tw-enter-scale: 0.95;
    --tw-enter-opacity: 0;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-scale: 0.95;
    --tw-exit-opacity: 0;

    animation-name: ${enterKeyframes};
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
