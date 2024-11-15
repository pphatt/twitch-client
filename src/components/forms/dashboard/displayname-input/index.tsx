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

interface DisplayNameInputProps {
  children: React.ReactNode
}

const DisplayNameInput = React.forwardRef<
  HTMLInputElement,
  DisplayNameInputProps
>(({ children, ...props }, ref) => {
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
                    ref={ref}
                    {...props}
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

          <>{children}</>
        </RowOverlay>
      </RowContainer>
    </RowWrapper>
  )
})
DisplayNameInput.displayName = "DisplayNameInput"

export { DisplayNameInput }
