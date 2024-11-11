import styled, { keyframes } from "styled-components"

const animation = keyframes`
    0% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1, 0.35);
    }
    100% {
        transform: scale(1, 1);
    }
`

export const GroupAnimated = styled.g<{
  $onHover: boolean
}>`
  transform-origin: 0 35%;

  animation-duration: 0.2s;
  animation-iteration-count: 2;
  animation-name: ${({ $onHover }) => ($onHover ? animation : "none")};

  animation-play-state: ${({ $onHover }) => ($onHover ? "running" : "paused")};

  will-change: transform;
`
