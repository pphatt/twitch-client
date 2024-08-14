"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { CheckboxPrimitiveRoot } from "@/components/ui/checkbox/style"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ ...props }, ref) => (
  <CheckboxPrimitiveRoot ref={ref} {...props}>
    <CheckboxPrimitive.Indicator>
      <Check />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitiveRoot>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
