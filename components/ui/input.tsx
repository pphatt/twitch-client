import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/ui/input.module.scss"

const inputVariants = cva(styles["input"], {
  variants: {
    variant: {
      default: styles["default-variant"],
      dashboard: styles["dashboard-variant"],
      custom: "",
    },
    _size: {
      default: styles["default-size"],
      dashboard: styles["dashboard-size"],
      custom: "",
    },
  },
  defaultVariants: {
    variant: "default",
    _size: "default",
  },
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, _size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, _size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
