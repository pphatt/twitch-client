import styled, { keyframes } from "styled-components"

export const pulseAnimation = keyframes`
    50% {
        opacity: 0.5;
    }
`

export const SkeletonWrapper = styled.div`
  background-color: hsl(var(--muted));

  border-radius: calc(0.5rem - 2px);

  animation: ${pulseAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
