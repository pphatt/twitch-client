import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"

export const LikeButton = styled(Button)<{
  $initialLike: boolean
}>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: hsl(var(--foreground));
  background-color: transparent;

  height: 36px;
  width: fit-content;

  border-radius: calc(0.5rem - 2px);

  padding: 0 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;

    padding: 0;
    margin-right: 0.5rem;

    fill: currentColor;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  ${({ $initialLike }) =>
    $initialLike &&
    css`
      svg {
        stroke: none;

        fill: hsl(351.36, 100%, 76.86%) !important;
      }
    `}
`
