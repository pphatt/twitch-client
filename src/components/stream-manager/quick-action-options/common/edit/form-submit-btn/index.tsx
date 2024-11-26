import * as React from "react"

import { IconSpinner } from "@/components/share-styled/auth-forms/style"
import {
  ButtonContainer,
  ButtonText,
  CloseDialogButtonWrapper,
  EditStreamInfoBtnContainer,
  EditStreamInfoBtnWrapper,
  SaveButtonWrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/form-submit-btn/style"

interface FormSubmitButtonProps {
  isPending: boolean
  onCancel: () => void
}

export default function FormSubmitButton({
  isPending,
  onCancel,
}: FormSubmitButtonProps) {
  return (
    <EditStreamInfoBtnWrapper>
      <EditStreamInfoBtnContainer>
        <CloseDialogButtonWrapper
          type={"button"}
          disabled={isPending}
          onClick={onCancel}
        >
          {isPending && (
            <IconSpinner
              style={{
                marginLeft: "0.5rem",
                marginRight: "0",
              }}
              aria-hidden="true"
            />
          )}

          <ButtonContainer>
            <ButtonText>Cancel</ButtonText>
          </ButtonContainer>
        </CloseDialogButtonWrapper>

        <div>
          <SaveButtonWrapper disabled={isPending}>
            {isPending && (
              <IconSpinner
                style={{
                  marginLeft: "0.5rem",
                  marginRight: "0",
                }}
                aria-hidden="true"
              />
            )}

            <ButtonContainer>
              <ButtonText>Done</ButtonText>
            </ButtonContainer>
          </SaveButtonWrapper>
        </div>
      </EditStreamInfoBtnContainer>
    </EditStreamInfoBtnWrapper>
  )
}
