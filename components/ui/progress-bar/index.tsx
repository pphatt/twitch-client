"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import {
  SliderPercentagePrimitiveThumb,
  SliderPrimitiveRoot,
  SliderPrimitiveTrack,
} from "@/components/ui/progress-bar/style"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderPrimitiveRoot ref={ref} {...props}>
    <SliderPrimitiveTrack>
      <SliderPrimitive.Range />
      {props.children}
    </SliderPrimitiveTrack>
    {/*<SliderPrimitiveThumb />*/}
  </SliderPrimitiveRoot>
))
Slider.displayName = SliderPrimitive.Root.displayName

const SliderPercentage = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderPrimitiveRoot ref={ref} {...props}>
    <SliderPrimitiveTrack>
      <SliderPrimitive.Range />
    </SliderPrimitiveTrack>
    <SliderPercentagePrimitiveThumb />
  </SliderPrimitiveRoot>
))
SliderPercentage.displayName = SliderPrimitive.Root.displayName

export { Slider, SliderPercentage }
