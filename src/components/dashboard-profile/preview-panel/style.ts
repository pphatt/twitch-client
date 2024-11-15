import styled from "styled-components"

export const PreviewPanelLayoutWrapper = styled.div`
  margin-top: 10px;
`

export const PreviewPanelLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PreviewPanelLayoutOverlay = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 1200px;
  width: 100%;
`

export const PreviewPanelContentWrapper = styled.div`
  width: 100%;

  margin-bottom: 30px;
`

export const PreviewPanelHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`

export const PreviewPanelHeaderContainer = styled.div`
  margin-right: 3px;
`

export const PreviewPanelHeaderText = styled.h3`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const PreviewPanelContentContainer = styled.div`
  display: flex;

  background-color: hsl(var(--background));

  border-radius: 4px;

  padding: 20px;
`

export const PreviewPanelContentOverlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`

export const PreviewPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 2;

  @media screen and (min-width: 480px) {
    padding-right: 10px;
  }
`

export const FollowersDisplayWrapper = styled.div`
  margin-bottom: 10px;
`

export const FollowerDisplayContainer = styled.span`
  color: hsl(var(--foreground-alt-2));

  font-size: 14px;
`

export const FollowerDisplayOverlay = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const FollowerContentWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`

export const FollowerContentText = styled.span`
  color: hsl(var(--foreground));

  margin-right: 5px;

  font-size: 14px;
  font-weight: 600;
`

export const BioText = styled.p`
  font-size: 14px;

  word-break: break-word;
`
