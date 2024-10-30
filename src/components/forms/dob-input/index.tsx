import * as React from "react"

import type { InputProps } from "@/components/ui/input"
import {
  Layout,
} from "@/components/forms/password-input/style"

const DobInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {

    return (
      <Layout>

      </Layout>
    )
  }
)
DobInput.displayName = "DobInput"

export { DobInput }
