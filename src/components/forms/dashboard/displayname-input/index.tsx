"use client"

import * as React from "react"

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
import { DisplayNameInputComp } from "@/components/forms/dashboard/displayname-input/style"

export default function DisplayNameInput() {
  return (
    <RowWrapper>
      <RowContainer>
        <RowOverlay>
          <RowTextWrapper>
            <RowTextContainer>
              <RowText>Display Name</RowText>
            </RowTextContainer>
          </RowTextWrapper>

          <RowInputWrapper>
            <div>
              <RowInputContainer>
                <InputWrapper>
                  <DisplayNameInputComp
                    type="text"
                    aria-labelledby="display-label"
                    autoCapitalize="off"
                    autoCorrect="off"
                  />
                </InputWrapper>
              </RowInputContainer>
            </div>

            <InputDescriptionWrapper>
              <InputDescriptionText>
                You may update display name
              </InputDescriptionText>
            </InputDescriptionWrapper>
          </RowInputWrapper>
        </RowOverlay>
      </RowContainer>
    </RowWrapper>
  )
}
