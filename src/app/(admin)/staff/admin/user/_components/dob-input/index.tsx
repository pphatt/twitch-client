import * as React from "react"

import {
  InputWrapper as Input,
  Layout,
} from "@/app/(admin)/staff/admin/user/_components/dob-input/style"

interface DobInputProps {
  className?: string
  onChange: (...event: unknown[]) => void
}

const DobInput = ({ onChange, className, ...props }: DobInputProps) => {
  return (
    <Layout>
      <Input
        type={"date"}
        className={className}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </Layout>
  )
}

export { DobInput }
