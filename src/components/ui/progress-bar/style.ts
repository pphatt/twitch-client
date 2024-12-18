import * as SliderPrimitive from "@radix-ui/react-slider"
import styled from "styled-components"

export const SliderPrimitiveRoot = styled(SliderPrimitive.Root)`
  position: relative;

  display: flex;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  border-radius: 9999px;

  overflow: hidden;

  @media (min-width: 640px) {
    overflow: visible;
  }

  //position: relative;
  //
  //flex-grow: 1;
  //
  //background-color: rgb(44 44 44);
  //
  //min-width: 0;
  //height: var(--slider-height);
  //width: 100%;
  //
  //margin-left: 0.5rem;
  //margin-right: 0.5rem;
  //
  //border-radius: 9999px;
  //
  //opacity: 0.7;
  //
  //cursor: pointer;
  //
  ////pointer-events: none;
  //
  //transition:
  //        height 75ms ease-in-out,
  //        width 75ms ease-in-out,
  //        opacity 75ms ease-in-out;
`

export const SliderPrimitiveTrack = styled(SliderPrimitive.Track)`
  position: relative;

  flex-grow: 1;

  //background-color: hsl(var(--primary) / 0.2);

  width: 100%;
  //height: 0.375rem;

  border-radius: 9999px;

  overflow: hidden;

  span {
    position: absolute;

    //background-color: hsl(var(--primary));

    height: 100%;
  }
`

export const SliderPrimitiveThumb = styled(SliderPrimitive.Thumb)`
  display: block;

  background-color: hsl(var(--background));

  max-width: var(--slider-ball-diameter);
  width: var(--0877a123);
  min-width: var(--slider-ball-diameter);
  height: var(--slider-ball-diameter);
  min-height: var(--slider-ball-diameter);

  //border-width: 1px;
  //border-color: hsl(var(--primary) / 0.5);
  border-radius: 9999px;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);

  transition:
    min-width 75ms ease-in-out,
    min-height 75ms ease-in-out,
    width 75ms ease-in-out,
    height 75ms ease-in-out;

  //cursor: grab;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  //&:focus {
  //  cursor: grabbing;
  //}

  &:focus-visible {
    outline: none;

    box-shadow: none;
  }
`

export const SliderPercentagePrimitiveThumb = styled(SliderPrimitiveThumb)`
  background-color: #8fb3ff;
`
