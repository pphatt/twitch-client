import * as React from "react"

import {
  InputWrapper as Input,
  Layout,
} from "@/components/forms/auth/dob-input/style"

interface DobInputProps {
  $error?: boolean
  onChange: (...event: unknown[]) => void
}

const DobInput = ({ onChange, $error, ...props }: DobInputProps) => {
  return (
    <Layout>
      <Input
        $error={$error}
        type={"date"}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </Layout>
  )
}

export { DobInput }
