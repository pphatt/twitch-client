import * as React from "react"

import { InputWrapper } from "@/components/ui/input/style"

export interface InputVariants {
  $variant?: "default" | "dashboard" | "custom"
}

export interface InputSize {
  $size?: "default" | "dashboard" | "custom"
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants,
    InputSize {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ $variant = "default", $size = "default", type, ...props }, ref) => {
    return (
      <InputWrapper
        $variant={$variant}
        $size={$size}
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
