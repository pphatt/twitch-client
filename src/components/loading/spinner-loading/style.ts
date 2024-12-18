import styled, { keyframes } from "styled-components"

const animation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const ShellLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 100%;

  overflow: hidden;

  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  animation: ${animation} 0.1s linear;
`

const ShellLoadingSpinnerAnimation = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

export const ShellSpinner = styled.div`
  display: inline-block;

  width: 22px;
  height: 22px;

  border-radius: 50%;
  border-top: 2px solid rgba(128, 128, 128, 0.3);
  border-right: 2px solid rgba(128, 128, 128, 0.3);
  border-bottom: 2px solid rgba(128, 128, 128, 0.3);
  border-left: 2px solid #d9d8dd;

  padding: 0;
  margin: 0 auto;

  animation: ${ShellLoadingSpinnerAnimation} 1s infinite linear;
`
