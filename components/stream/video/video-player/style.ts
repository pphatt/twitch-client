import styled from "styled-components"

export const PersistentPlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  max-height: calc(-160px + 100vh);
  height: auto;

  overflow: hidden;

  transform: scale(1);

  transform-origin: center top;
  transition: 0s;

  z-index: 1;
`

export const LayoutContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const LayoutPlaceholder = styled.div`
  padding-bottom: 56.25%;
`

export const InnerLayoutWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: #000;

  width: 100%;
  min-height: 100%;
`

export const InnerLayoutContainer = styled.div`
  position: absolute;
  inset: 0;

  background: #000;

  max-height: calc(100vh - 160px);

  overflow: hidden;
`

export const InnerLayoutOverlay = styled.div`
  height: 100%;
  width: 100%;

  video {
    position: absolute;

    width: 100%;
    height: 100%;
  }
`

export const PlayerOverlayBackground = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
`
