import * as React from "react"

import {
  ButtonContainer,
  ButtonText,
  CloseDialogButtonWrapper,
  EditStreamInfoBtnContainer,
  EditStreamInfoBtnWrapper,
  SaveButtonWrapper,
} from "@/components/stream-manager/quick-action-options/common/edit/form-submit-btn/style"

interface FormSubmitButtonProps {
  onCancel: () => void
}

export default function FormSubmitButton({
  onCancel,
}: FormSubmitButtonProps) {
  return (
    <EditStreamInfoBtnWrapper>
      <EditStreamInfoBtnContainer>
        <CloseDialogButtonWrapper type={"button"} onClick={onCancel}>
          <ButtonContainer>
            <ButtonText>Cancel</ButtonText>
          </ButtonContainer>
        </CloseDialogButtonWrapper>

        <div>
          <SaveButtonWrapper>
            <ButtonContainer>
              <ButtonText>Done</ButtonText>
            </ButtonContainer>
          </SaveButtonWrapper>
        </div>
      </EditStreamInfoBtnContainer>
    </EditStreamInfoBtnWrapper>
  )
}
