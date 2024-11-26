import styled from "styled-components"

export const RootPageLayoutWrapper = styled.div`
  position: relative;
  top: 80px;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 768px;
  min-height: calc(100% - 80px);

  transition:
    padding-right,
    padding-left 0.3s ease;
`

export const RootPageLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  max-width: 1208px;
  width: 100%;

  padding: 0 0;
`

export const RootPageLayoutOverlay = styled.div`
  flex: 1;

  background: #1b1d2a;

  max-width: 848px;

  border-radius: 16px;
`

export const RootPageContentWrapper = styled.div`
  width: 100%;

  padding-bottom: 40px;
`

export const RootPageContentContainer = styled.div`
  background: #1b1d2a;

  border-radius: 16px 16px 0 0;
`