import styled from "styled-components"

export const RootPageLayoutWrapper = styled.div`
  //position: relative;
  //top: 80px;

  position: relative;

  //flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 768px;
  height: 100%;
  //min-height: calc(100% - 80px);

  overflow-y: scroll;

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
  margin-top: 20px;
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
