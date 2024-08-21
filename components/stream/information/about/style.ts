import styled from "styled-components"

export const ChannelAboutLayoutWrapper = styled.div`
  position: relative;

  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
`

export const AboutPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const AboutPanelContainer = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 1200px;
  width: 100%;
`

export const AboutSectionWrapper = styled.div`
  width: 100%;

  margin-bottom: 30px;
`

export const AboutSectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`

export const AboutSectionHeader = styled.div`
  margin-right: 3px;
`

export const AboutSectionHeaderText = styled.h3`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const AboutSectionIconWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  margin-left: 2px;
`

export const AboutSectionIconContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: hsl(var(--color-twitch-orange-11));
`

export const AboutSectionContainer = styled.div`
  display: flex;

  background-color: #18181b;

  border-radius: 4px;

  padding: 20px;
`

export const AboutSectionOverlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`

export const AboutSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 2;

  @media (min-width: 480px) {
    padding-right: 10px;
  }
`

export const AboutSectionContentHeaderWrapper = styled.div`
  margin-bottom: 10px;
`

export const AboutSectionContentHeaderContainer = styled.span`
  color: #adadb8;

  font-size: 14px;
`

export const AboutSectionContentHeaderOverlay = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const FollowerCountWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  span {
    color: #efeff1;

    margin-right: 5px;

    font-size: 14px;
    font-weight: 600;
  }
`

export const AboutSectionContent = styled.p`
  font-size: 14px;

  word-break: break-word;
`
