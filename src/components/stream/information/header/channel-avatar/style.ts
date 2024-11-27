import Link from "next/link"
import styled, { css } from "styled-components"

export const ChannelLinkWrapper = styled(Link)`
  position: relative;

  display: block;

  background-color: inherit;

  width: 72px;
  height: 72px;

  border: 2px solid var(--color-accent);
  border-radius: 9999px;

  padding: 2px;

  z-index: 1;

  &:before {
    position: absolute;
    inset: 0;

    content: "";

    border: 2px solid var(--color-accent);
    border-radius: 9999px;

    margin: -2px;

    z-index: -1;

    transition-duration: 100ms;
    transition-property: transform;
  }

  &:hover {
    &:before {
      transform: scale(1.04167);
    }
  }
`

export const ChannelLinkContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const ChannelLinkCover = styled.div`
  padding-bottom: 100%;
`

export const ChannelLinkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: inherit;

  width: 100%;
  max-height: 100%;
  height: 64px;
  min-height: 100%;

  img {
    display: block;

    width: 100%;

    border-radius: 9999px;

    aspect-ratio: 1 / 1;

    vertical-align: top;

    object-fit: cover;
    object-position: top;
  }
`

export const LiveIndicatorWrapper = styled.div`
  position: absolute;
  right: 50%;
  bottom: 0;
  left: 50%;

  display: flex;
  justify-content: center;

  background-color: hsl(var(--color-hinted-grey-1));

  margin-bottom: -5px;
`

export const LiveIndicatorContainer = styled.div`
  position: absolute;
  bottom: -5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const LiveIndicatorOverlay = styled.div`
  display: inline;

  background-color: hsl(var(--color-hinted-grey-1));

  border-radius: 6px;
`

export const LiveTextWrapper = styled.div`
  display: inline-block;

  background-color: inherit;

  height: 23.5px;

  border-radius: 4px;

  padding: 2px;
`

export const LiveTextContainer = styled.div<{ $isLive: boolean }>`
  display: inline-block;

  color: #fff;
  background-color: hsl(var(--color-red));

  border-radius: 4px;

  padding: 0 4px;

  font-size: 13px;

  text-align: center;

  pointer-events: none;

  ${({ $isLive }) =>
    !$isLive &&
    css`
      color: #000;
      background-color: #c8c8d0;
    `};
`

export const LiveText = styled.p`
  font-weight: 600;

  white-space: nowrap;
  text-transform: uppercase;
`
