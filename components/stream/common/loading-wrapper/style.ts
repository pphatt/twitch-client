import styled from "styled-components"

export const PersistentPlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  //max-height: calc(-160px + 100vh);
  max-height: 100vh;
  height: 100%;

  overflow: hidden;

  transform: scale(1);

  transform-origin: center top;
  transition: 0s;

  z-index: 1;
`
