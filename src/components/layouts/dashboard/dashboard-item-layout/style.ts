import Link from "next/link"
import styled, { css } from "styled-components"

export const ContentContainer = styled.div`
  opacity: 1;

  transition-delay: 0ms;
  transform: translateY(0px);
  transition-duration: 150ms;
  transition-timing-function: ease;
  transition-property: none;
`

export const ContentItemWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
`

export const ContentItemContainer = css`
  display: block;

  color: inherit;

  width: 100%;

  border-radius: var(--radius);

  &:not([disabled]):hover {
    background-color: rgba(83, 83, 95, 0.48);
  }
`

export const ContentItemContainerLink = styled(Link)`
  ${ContentItemContainer}
`

export const ContentItemOverlay = styled.div`
  display: flex;
  align-items: center;

  width: 100% !important;
  min-height: 41px;

  padding: 10px;
`

export const ContentItemSVGWrapper = styled.div`
  display: flex;
  align-items: center;

  padding-right: 10px;
`

export const ContentItemSVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: currentColor;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ContentItemTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  padding-right: 10px;

  font-size: 14px;
`

export const SVGContentWrapper = styled.div`
  position: relative;

  color: hsl(var(--foreground));
  background-color: transparent;

  width: 100%;
  min-height: 41px;

  border-radius: var(--radius);

  padding-top: 10px;
  padding-bottom: 10px;

  user-select: none;
`

export const SVGContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SVGWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;

  fill: currentColor;
`

export const SVGContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;
`
