import styled from "styled-components"

export const RightColumn = styled.div<{
  $isClosed: boolean
}>`
  flex-shrink: 0;

  ${({ $isClosed }) => !$isClosed && `height: 100%;`};

  position: relative;
  top: auto;
  right: auto;
  bottom: auto;

  display: block;
`

export const RightColumnWrapper = styled.div`
  position: relative;

  display: block;
  flex-grow: 0;
  flex-shrink: 0;

  height: 100%;

  &[data-collapsed="true"] {
    display: none;
  }
`

export const ChatShellWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 0;
  flex-shrink: 0;

  background-color: hsl(var(--background));

  height: 100%;

  border-left: 1px solid hsla(var(--color-background-interactable-hover));

  z-index: 10;
`

export const ChatShell = styled.div`
  height: 100%;
`

export const ChatShellContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`
