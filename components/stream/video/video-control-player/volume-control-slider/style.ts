import * as SliderPrimitive from "@radix-ui/react-slider"
import styled from "styled-components"

export const VolumeControlSliderWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`

export const SliderPrimitiveRoot = styled(SliderPrimitive.Root)`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  cursor: pointer;

  user-select: none;

  touch-action: none;
`

export const SliderPrimitiveTrack = styled(SliderPrimitive.Track)`
  position: relative;

  flex-grow: 1;

  background-color: rgba(255, 255, 255, 0.28);

  width: 100%;
  height: 2px;

  border-radius: 6px;

  overflow: hidden;

  cursor: pointer;
`

export const SliderPrimitiveRange = styled(SliderPrimitive.Range)`
  position: absolute;

  background-color: #fff;

  height: 100%;
`

export const SliderPrimitiveThumb = styled(SliderPrimitive.Thumb)`
  display: block;

  background-color: #fff;

  width: 1rem;
  height: 1rem;

  border-radius: 9999px;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`
