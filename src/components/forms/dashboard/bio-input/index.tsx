import * as React from "react"
import { type TextareaAutosizeProps } from "react-textarea-autosize"

import { TextArea } from "@/components/forms/dashboard/bio-input/style"
import {
  InputDescriptionText,
  InputDescriptionWrapper,
  InputWrapper,
  RowContainer,
  RowInputContainer,
  RowInputWrapper,
  RowOverlay,
  RowText,
  RowTextContainer,
  RowTextWrapper,
  RowWrapper,
} from "@/components/forms/dashboard/common/style"

interface BioInputProps extends TextareaAutosizeProps {
  children: React.ReactNode
}

const BioInput = React.forwardRef<HTMLInputElement, BioInputProps>(
  ({ children, ...props }, ref) => {
    return (
      <RowWrapper>
        <RowContainer>
          <RowOverlay>
            <RowTextWrapper>
              <RowTextContainer>
                <RowText>Bio</RowText>
              </RowTextContainer>
            </RowTextWrapper>

            <RowInputWrapper>
              <div>
                <RowInputContainer>
                  <InputWrapper>
                    <TextArea
                      aria-describedby="bio-description"
                      aria-labelledby="bio-label"
                      data-a-target="profile-bio-input"
                      maxLength={300}
                      minRows={2}
                      {...props}
                    />
                  </InputWrapper>
                </RowInputContainer>
              </div>

              <InputDescriptionWrapper>
                <InputDescriptionText>
                  Description for the About panel on your channel page in under
                  300 characters
                </InputDescriptionText>
              </InputDescriptionWrapper>

              <>{children}</>
            </RowInputWrapper>
          </RowOverlay>
        </RowContainer>
      </RowWrapper>
    )
  }
)
BioInput.displayName = "BioInput"

export { BioInput }
