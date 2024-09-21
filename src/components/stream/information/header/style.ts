import styled from "styled-components"

export const ChannelInfoContentWrapper = styled.div`
  border-top: 1px solid rgba(83, 83, 95, 0.48);
`

export const ChannelInfoContentContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
`

export const ChannelInfoContentOverlay = styled.div`
  display: flex;

  width: 100%;

  margin: 10px;
`

export const ChannelAvatarWrapper = styled.div`
  position: relative;

  margin-top: 10px;
  padding-left: 10px;
`

export const ChannelInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-right: 10px;
  padding-left: 10px;
`

export const LiveInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

export const ChannelInfoLoadingWrapper = styled.div`
  flex-shrink: 1;
  flex-grow: 0;
`

export const ChannelInfoLoading = styled.div`
  width: 100%;
  height: 110px;
`
