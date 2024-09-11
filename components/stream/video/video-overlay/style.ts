import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"

export const TransitionOverlayPanel = styled.div<{
  $onActive: boolean
}>`
  ${({ $onActive = false }) => {
    if ($onActive) {
      return css`
        transition-delay: 0ms;
        transition-duration: 150ms;
        transition-timing-function: ease;
        transition-property: transform, opacity;
        opacity: 1;
      `
    }
    return css`
      transition-delay: 0ms;
      transition-duration: 150ms;
      transition-timing-function: ease;
      transition-property: transform, opacity;
      opacity: 0;
    `
  }}
`

export const EmptyTag = styled.div``

export const TopBarOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const TopBarOverlayContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelStatusWrapper = styled.div`
  display: flex;
  align-items: center;

  pointer-events: auto;
`

export const ChannelStatusContainer = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`

export const ChannelStatusTextIndicator = styled.div`
  display: inline-block;

  color: #fff;
  background-color: hsl(var(--color-red-9));

  border-radius: 4px;

  padding: 0 5px;

  font-size: 13px;

  text-align: center;
  pointer-events: none;
`

export const ChannelStatusText = styled.p`
  font-weight: 600;

  text-transform: uppercase;
  white-space: nowrap;
`

export const PlayerControlsWrapper = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;

  overflow: visible;
`

export const PlayerControlsContainer = styled.section``

export const PlayerControlsOverlay = styled.div`
  display: flex;

  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`

export const PlayerControlsGroup = styled.div<{
  $direction: "start" | "end"
}>`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${({ $direction }) => {
    if ($direction === "start") {
      return css`
        justify-content: flex-start;
      `
    }

    return css`
      justify-content: flex-end;
    `
  }}
`

export const ButtonDiv = styled.div`
  display: inline-flex;
`

export const ButtonWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const ButtonOverlay = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const ButtonPlaceholder = styled.div`
  padding-bottom: 100%;
`

export const ButtonSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;

  fill: currentcolor;
`

export const SVGWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const SVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ShareButton = styled(Button)`
  color: #fff;
  background-color: transparent;

  width: 30px;
  height: 30px;

  border: 1px solid transparent;
  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  user-select: none;
  cursor: pointer;

  white-space: nowrap;
  vertical-align: middle;
  overflow: hidden;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.13);
  }
`
