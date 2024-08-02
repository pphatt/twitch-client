import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import styled, { css } from "styled-components"

export const ScrollAreaPrimitiveRoot = styled(ScrollAreaPrimitive.Root)`
  position: relative;

  overflow: hidden;
`

export const ScrollAreaPrimitiveViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;

  border-radius: inherit;

  overflow: hidden scroll;

  &[data-radix-scroll-area-viewport] {
    scrollbar-width: none;
  }

  & > div {
    display: block !important;
  }
`

export const ScrollAreaVerticalOrientation = css`
  width: 0.625rem;
  height: 100%;

  border-left-width: 1px;
  border-left-color: transparent;

  padding: 1px;
`

export const ScrollAreaHorizontalOrientation = css`
  flex-direction: column;

  height: 0.625rem;

  border-top-width: 1px;
  border-top-color: transparent;

  padding: 1px;
`

export const ScrollAreaPrimitiveScrollAreaScrollbar = styled(
  ScrollAreaPrimitive.ScrollAreaScrollbar
)`
  display: flex;

  ${({ orientation }) =>
    orientation === "vertical" && ScrollAreaVerticalOrientation};
  ${({ orientation }) =>
    orientation === "horizontal" && ScrollAreaHorizontalOrientation};

  user-select: none;

  touch-action: none;

  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
`

export const ScrollAreaPrimitiveScrollAreaThumb = styled(
  ScrollAreaPrimitive.ScrollAreaThumb
)`
  position: relative;

  flex: 1;

  background: hsla(0, 0%, 100%, 0.5);

  border-radius: 9999px;
`
