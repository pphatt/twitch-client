import Link from "next/link"
import styled from "styled-components"

export const CardWrapper = styled.div`
  flex: 1;

  width: 12rem;
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

export const CardInfo = styled.div`
  display: flex;
  flex-flow: column;
`

export const TopLeftCornerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 0;
  height: 0;

  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid hsl(var(--color-twitch-orange-11));

  transform-origin: left center;
  transform: translateY(-6px) scale(0);

  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 100ms;
`

export const BottomRightCornerDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 0;
  height: 0;

  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid hsl(var(--color-twitch-orange-11));

  transform-origin: center bottom;
  transform: translateX(6px) scale(0);

  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 100ms;
`

export const LeftBarDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  background: hsl(var(--color-twitch-orange-11));

  width: 6px;

  transform-origin: 0 100%;
  transform: scaleX(0);

  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease;
`

export const BottomBarDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background: hsl(var(--color-twitch-orange-11));

  height: 6px;

  transform-origin: 0 100%;

  transform: scaleY(0);

  transition-duration: 100ms;
  transition-property: transform;
  transition-timing-function: ease;
`

export const CardImageContainer = styled.div`
  position: relative;

  background: rgba(83, 83, 95, 0.38);

  width: 100%;
  height: 100%;

  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 100ms;
`

export const CardImageWrapper = styled(Link)`
  position: relative;

  border-style: none;
  border-color: transparent;

  transition: transform 0.15s cubic-bezier(0, 0, 0, 1);

  &:hover {
    ${TopLeftCornerDiv} {
      transition-delay: 75ms;

      transform: translateY(-6px) scale(1);
    }

    ${BottomRightCornerDiv} {
      transition-delay: 75ms;

      transform: translateX(6px) scale(1);
    }

    ${LeftBarDiv} {
      transition-delay: 75ms;

      transform: scaleX(1);
    }

    ${BottomBarDiv} {
      transition-delay: 75ms;

      transform: scaleY(1);
    }

    ${CardImageContainer} {
      transition-delay: 75ms;

      transform: translate3d(6px, -6px, 0px);
    }
  }
`

export const CardImagePlaceholderWrapper = styled.div`
  background: rgba(83, 83, 95, 0.38);

  width: 100%;

  overflow: hidden;
`

export const CardImagePlaceholderContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const CardImagePlaceholder = styled.div`
  padding-bottom: 133.333%;
`

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  //padding: 0.25rem 0;
`

export const CategoryTitle = styled.div`
  flex-grow: 1;
  flex-shrink: 1;

  margin-top: 4px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: inherit;

    &:hover {
      color: hsl(var(--color-twitch-orange-11));
    }
  }

  h2 {
    //font-size: 14px;
    //line-height: 1.5;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const CategoryCurrentTotalView = styled.div`
  color: hsl(var(--foreground-alt-2));

  font-size: 13px;
  line-height: 1.5;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
