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
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: () => void
}

export default function FormSubmitButton({
  state,
  setState,
}: FormSubmitButtonProps) {
  return (
    <EditStreamInfoBtnWrapper>
      <EditStreamInfoBtnContainer>
        <CloseDialogButtonWrapper onClick={() => setState(!state)}>
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
