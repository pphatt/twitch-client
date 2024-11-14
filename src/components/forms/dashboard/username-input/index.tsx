"use client"

import * as React from "react"

import {
  EditButton,
  EditButtonContainer,
  EditButtonOverlay,
  EditButtonSVG,
  EditButtonWrapper,
  InnerEditButtonContainer,
  InnerEditButtonPlaceholder,
  InnerEditButtonWrapper,
  UsernameInputComp,
} from "@/components/forms/dashboard/username-input/style"

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
} from "../common/style"

export default function UsernameInput() {
  return (
    <RowWrapper>
      <RowContainer>
        <RowOverlay>
          <RowTextWrapper>
            <RowTextContainer>
              <RowText>Username</RowText>
            </RowTextContainer>
          </RowTextWrapper>

          <RowInputWrapper>
            <div>
              <RowInputContainer>
                <InputWrapper>
                  <UsernameInputComp
                    type="text"
                    aria-labelledby="username-label"
                    autoCapitalize="off"
                    autoCorrect="off"
                    disabled={true}
                  />
                </InputWrapper>

                <EditButtonWrapper>
                  <EditButton>
                    <EditButtonContainer>
                      <EditButtonOverlay>
                        <InnerEditButtonWrapper>
                          <InnerEditButtonContainer>
                            <InnerEditButtonPlaceholder />

                            <EditButtonSVG
                              width={"100%"}
                              height={"100%"}
                              viewBox="0 0 20 20"
                              x="0px"
                              y="0px"
                            />
                          </InnerEditButtonContainer>
                        </InnerEditButtonWrapper>
                      </EditButtonOverlay>
                    </EditButtonContainer>
                  </EditButton>
                </EditButtonWrapper>
              </RowInputContainer>
            </div>

            <InputDescriptionWrapper>
              <InputDescriptionText>
                You may update your username
              </InputDescriptionText>
            </InputDescriptionWrapper>
          </RowInputWrapper>
        </RowOverlay>
      </RowContainer>
    </RowWrapper>
  )
}
