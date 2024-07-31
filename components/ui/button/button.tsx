import * as React from "react"

import {
  StyledButton,
  type StyledButtonProps,
} from "@/components/ui/button/style"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ $variant = "default", $size = "default", ...props }, ref) => {
    return (
      <StyledButton $size={$size} $variant={$variant} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button }
