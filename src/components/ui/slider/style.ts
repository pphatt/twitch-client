import * as SliderPrimitive from "@radix-ui/react-slider"
import styled from "styled-components"

export const SliderPrimitiveRoot = styled(SliderPrimitive.Root)`
  position: relative;

  display: flex;
  align-items: center;

  width: 60%;

  user-select: none;

  touch-action: none;
`

export const SliderPrimitiveTrack = styled(SliderPrimitive.Track)`
  position: relative;

  flex-grow: 1;

  background-color: hsl(var(--primary) / 0.2);

  width: 100%;
  height: 0.375rem;

  border-radius: 9999px;

  overflow: hidden;

  span {
    position: absolute;

    background-color: hsl(var(--primary));

    height: 100%;
  }
`

export const SliderPrimitiveThumb = styled(SliderPrimitive.Thumb)`
  display: block;

  background-color: hsl(var(--background));

  width: 1rem;
  height: 1rem;

  border-width: 1px;
  border-color: hsl(var(--primary) / 0.5);
  border-radius: 9999px;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;

    box-shadow:
      0 0 0 2px hsl(var(--background)),
      0 0 0 4px hsl(var(--ring)),
      0 0 #000;
  }
`
