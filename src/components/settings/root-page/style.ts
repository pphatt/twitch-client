import styled from "styled-components"

export const ContentLayoutContainer = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  height: 100%;

  padding-right: 10px;
  padding-left: 10px;
`

export const ContentLayoutWrapper = styled.div`
  container-type: inline-size;

  @container (min-width: ${"480px"}) {
    ${ContentLayoutContainer} {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
`

export const ContentLayoutOverlay = styled.div`
  max-width: 900px;

  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 100px;
`
