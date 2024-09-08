import * as React from "react"

import {
  FormGroupLabel,
  FormGroupLabelContainer,
  FormGroupLabelWrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/form-title/style"

interface FormTitleProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
}

export default function FormLabel({ children, id, htmlFor }: FormTitleProps) {
  return (
    <FormGroupLabelWrapper>
      <FormGroupLabelContainer>
        <FormGroupLabel id={id} htmlFor={htmlFor}>
          {children}
        </FormGroupLabel>
      </FormGroupLabelContainer>
    </FormGroupLabelWrapper>
  )
}
