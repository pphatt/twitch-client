import styled from "styled-components"

export const PageWrapper = styled.div`
  flex-grow: 1;

  min-width: 0;
`

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const PageOverlay = styled.main`
  height: 100%;
`

export const ScrollContentWrapper = styled.div`
  height: 100%;
`

export const EmptyPaddingWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;

  z-index: 10;
`

export const EmptyPaddingContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 50px;
`

export const EmptyPaddingOverlay = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const ScrollLayoutContentWrapper = styled.div`
  position: relative;

  max-width: 1120px;
  min-width: 100%;

  padding-left: 10px;
  padding-right: 10px;
  margin: 10px auto;

  @media screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (width >= 480px) {
    min-width: 480px;
  }
`

export const ScrollLayoutContentContainer = styled.div`
  margin-top: 20px;
`

export const ContentWrapper = styled.div`
  margin-top: 20px;
`
