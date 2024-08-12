import styled from "styled-components"

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &[data-side="left"] {
    padding-right: 5px;
  }

  &[data-side="right"] {
    margin-left: 20px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconsOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: currentColor;

  svg {
    width: 20px;
    height: 20px;
  }
`
