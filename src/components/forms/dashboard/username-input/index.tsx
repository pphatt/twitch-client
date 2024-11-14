"use client"

import * as React from "react"

import UsernameDialog from "@/components/dashboard-profile/username-dialog"
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

interface UsernameInputProps {
  username: string
}

export default function UsernameInput({ username }: UsernameInputProps) {
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
                    defaultValue={username}
                    readOnly={true}
                  />
                </InputWrapper>

                <EditButtonWrapper>
                  <UsernameDialog username={username}>
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
                  </UsernameDialog>
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
