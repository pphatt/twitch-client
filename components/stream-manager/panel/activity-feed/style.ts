import styled from "styled-components"

export const ActivityFeedLayoutWrapper = styled.div`
  background-color: hsl(var(--background));

  width: 100%;
  height: 100%;
`

export const ActivityFeedLayoutContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 50px;
  padding-bottom: 50px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
`

export const Text = styled.h4`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
`

export const SMTextWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`

export const SMTextContainer = styled.div`
  display: inline;
  flex-grow: 0;

  max-width: 250px;

  margin: auto;

  text-align: center;
`

export const SMText = styled.p`
  font-size: 14px;
`
