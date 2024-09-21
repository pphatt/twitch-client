import * as Tooltip from "@radix-ui/react-tooltip"
import styled from "styled-components"

import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const TooltipContent = styled(Tooltip.Content)`
  display: inline-block;

  color: hsl(var(--color-hinted-grey-1));
  background-color: #fff;

  max-width: 300px;

  border-radius: var(--radius);

  padding: 5px;

  font-size: 13px;
  line-height: 1.2;
  font-weight: 600;

  user-select: none;

  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  box-shadow:
    hsl(206 22% 7% / 35%) 0 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0 10px 20px -15px;

  p {
    line-height: inherit;
  }

  &[data-state="delayed-open"][data-side="top"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-y: 0.5rem;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="delayed-open"][data-side="bottom"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-y: -0.5rem;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="delayed-open"][data-side="left"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: 0.5rem;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="delayed-open"][data-side="right"] {
    --tw-enter-opacity: 0;
    --tw-enter-translate-x: -0.5rem;
    --tw-enter-scale: 0.95;

    animation-name: ${enterKeyframes};
  }

  &[data-state="delayed-open"][data-state="closed"] {
    --tw-exit-opacity: 0;
    --tw-exit-scale: 0.95;

    animation-name: ${exitKeyframes};
  }
`
