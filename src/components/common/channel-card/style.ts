import Link from "next/link"
import styled from "styled-components"

import {
  BottomBarDiv,
  BottomRightCornerDiv,
  CardImage,
  CardImageContainer,
  CardImagePlaceholderContainer,
  CardImagePlaceholderWrapper,
  LeftBarDiv,
  TopLeftCornerDiv,
} from "@/components/common/category-card/style"

export const CardWrapper = styled.div`
  flex: 1;

  width: 300px;
  min-width: 0;

  padding: 0 5px;
`

export const CardContainer = styled.div`
  height: 100%;

  padding-bottom: 20px;
`

export const Card = styled.div`
  position: relative;
`

export const CardInfo = styled.article`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`

export const ChannelContentWrapper = styled.div`
  margin-top: 10px;
`

export const ChannelContentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const ChannelImageWrapper = styled.div`
  order: 1;
  flex: 0 0 40px;

  margin-right: 10px;
`

export const ChannelImageLink = styled(Link)`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const ChannelImageOverlay = styled.div`
  padding-bottom: 100%;
`

export const ChannelImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;

  background-color: inherit;

  width: 100%;
  max-height: 100%;
  height: 40px;
  min-height: 100%;

  transform: translateY(-50%);
`

export const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  border-radius: 9999px;

  object-fit: cover;
`

export const ChannelInfoWrapper = styled.div`
  order: 2;
  flex-grow: 1;
  flex-shrink: 1;

  width: 100%;
  min-width: 0;
`

export const ChannelInfoContainer = styled.div`
  margin-bottom: 3px;
`

export const ChannelInfoLink = styled(Link)`
  position: relative;
`

export const StreamTitle = styled.div`
  color: hsl(var(--foreground-alt));

  width: 100%;

  margin-bottom: 3px;

  h3 {
    font-size: 14px;
    line-height: 1.2;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    color: hsl(var(--color-twitch-orange-11));
  }
`

export const ChannelName = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;

  p {
    color: hsl(var(--foreground-alt-2));

    font-size: 13px;
    line-height: 1.5;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const CategoryWrapper = styled.p`
  color: hsl(var(--foreground-alt-2));

  font-size: 13px;
  line-height: 1.5;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: hsl(var(--color-twitch-orange-11));
  }
`

export const TopLeftCornerDivStyled = TopLeftCornerDiv

export const BottomRightCornerDivStyled = BottomRightCornerDiv

export const LeftBarDivStyled = styled(LeftBarDiv)`
  height: calc(100% - 3px);
`

export const BottomBarDivStyled = BottomBarDiv

export const CardImageContainerStyled = styled(CardImageContainer)`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const CardImageOverlay = styled(Link)`
  position: relative;

  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 100ms;
`

export const CardImageOverlayDiv = styled.div`
  position: relative;

  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 100ms;
`

export const CardImageWrapper = styled.div`
  position: relative;

  transition-duration: 100ms;
  transition-timing-function: ease;
  transition-property: transform;

  &:hover {
    ${TopLeftCornerDivStyled} {
      transition-delay: 75ms;

      transform: translateY(-6px) scale(1);
    }

    ${BottomRightCornerDivStyled} {
      transition-delay: 75ms;

      transform: translateX(6px) scale(1);
    }

    ${LeftBarDivStyled} {
      transition-delay: 75ms;

      transform: scaleX(1);
    }

    ${BottomBarDivStyled} {
      transition-delay: 75ms;

      transform: scaleY(1);
    }

    ${CardImageOverlay}, ${CardImageOverlayDiv} {
      transition-delay: 75ms;

      transform: translate3d(6px, -6px, 0px);
    }
  }
`

export const CardImagePlaceholderWrapperStyled = styled(
  CardImagePlaceholderWrapper
)``

export const CardImagePlaceholderContainerStyled = styled(
  CardImagePlaceholderContainer
)``

export const CardImagePlaceholder = styled.div`
  padding-bottom: 56.25%;
`

export const CardImageStyled = styled(CardImage)``

export const LiveSectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin: 10px;

  pointer-events: none;
`

export const LiveSectionContainer = styled.div`
  text-align: center;

  color: #fff;
  background-color: hsl(var(--color-fill-live));

  border-radius: var(--radius);

  padding: 0 5px;

  font-size: 13px;

  pointer-events: none;

  p {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 600;

    white-space: nowrap;
    text-transform: uppercase;
  }
`

export const CurrentViewWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  margin: 10px;

  pointer-events: none;
`

export const CurrentViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background: rgba(0, 0, 0, 0.6);

  border-radius: calc(var(--radius) - 2px);

  padding: 0 4px;

  font-size: 13px;
`
