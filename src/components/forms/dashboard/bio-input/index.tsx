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
  bio: string
}

export default function BioInput({ bio, ...props }: BioInputProps) {
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
                    defaultValue={bio}
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
          </RowInputWrapper>
        </RowOverlay>
      </RowContainer>
    </RowWrapper>
  )
}
