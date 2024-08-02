"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import {
  SliderPrimitiveRoot,
  SliderPrimitiveThumb,
  SliderPrimitiveTrack,
} from "@/components/ui/slider/style"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderPrimitiveRoot ref={ref} {...props}>
    <SliderPrimitiveTrack>
      <SliderPrimitive.Range />
    </SliderPrimitiveTrack>
    <SliderPrimitiveThumb />
  </SliderPrimitiveRoot>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
