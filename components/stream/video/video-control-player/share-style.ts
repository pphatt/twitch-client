import styled from "styled-components"

import { Button } from "@/components/ui/button"

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
