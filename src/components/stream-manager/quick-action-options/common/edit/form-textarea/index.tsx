import * as React from "react"
import { type TextareaAutosizeProps } from "react-textarea-autosize"

import {
  CountWordsText,
  CountWordsWrapper,
  FormGroupTextArea,
  FormGroupTextAreaContainer,
  FormGroupTextAreaWrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/form-textarea/style"

interface FormTextAreaProps extends TextareaAutosizeProps {
  state: string
  setState: (...event: any[]) => void
}

export default function FormTextarea({
  id,
  state,
  setState,
  maxLength,
  minRows,
  placeholder,
  ...props
}: FormTextAreaProps) {
  return (
    <FormGroupTextAreaWrapper>
      <FormGroupTextAreaContainer>
        <FormGroupTextArea
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          minRows={minRows}
          value={state}
          onChange={(event) => setState(event.target.value)}
          {...props}
        />
      </FormGroupTextAreaContainer>

      <CountWordsWrapper>
        <CountWordsText>
          {state.length}/{maxLength}
        </CountWordsText>
      </CountWordsWrapper>
    </FormGroupTextAreaWrapper>
  )
}
