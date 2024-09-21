import * as React from "react"

import {
  FormGroupContainer,
  FormGroupWrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/form-group/style"

interface EditFormLayoutProps {
  children: React.ReactNode
}

export default function EditFormGroup({ children }: EditFormLayoutProps) {
  return (
    <FormGroupWrapper>
      <FormGroupContainer>{children}</FormGroupContainer>
    </FormGroupWrapper>
  )
}
