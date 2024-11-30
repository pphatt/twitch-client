import styled from "styled-components"

export const DetailsContentHeaderWrapper = styled.div`
  margin-bottom: 0;
  height: 56px;
`

export const DetailsContentHeaderContainer = styled.div`
  background-color: #0c0f1d;

  width: 100%;

  border-radius: 16px 16px 0 0;
`

export const DetailsContentHeaderOverlay = styled.div`
  background-color: #1b1d2a;

  border-radius: 16px 16px 0 0;
`

export const DetailsContentInnerHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 56px;

  border-bottom: 1px solid #0c0f1d;

  padding: 0 16px;
`

export const DetailsContentInnerHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const DetailsContentInnerHeaderOverlay = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  max-width: 100%;

  overflow: hidden;
`

export const DetailsContentHeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const DetailsContentHeaderText = styled.span`
  color: rgba(255, 255, 255, 0.85);

  padding-right: 24px;
  margin: 0;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
