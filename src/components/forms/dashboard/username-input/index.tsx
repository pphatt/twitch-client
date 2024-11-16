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
  NormalRowText,
  RowContainer,
  RowInputContainer,
  RowInputWrapper,
  RowOverlay,
  RowTextContainer,
  RowTextWrapper,
  RowWrapper,
} from "../common/style"

interface UsernameInputProps {
  /* Because this component use in many places, so each place it need reload differently */
  route?: string

  username: string

  allowChangedUserName: boolean
  changedUsernameDaysLeft: number
}

export default function UsernameInput({
  route,
  username,
  allowChangedUserName,
  changedUsernameDaysLeft,
}: UsernameInputProps) {
  return (
    <RowWrapper>
      <RowContainer>
        <RowOverlay>
          <RowTextWrapper>
            <RowTextContainer>
              <NormalRowText>Username</NormalRowText>
            </RowTextContainer>
          </RowTextWrapper>

          <RowInputWrapper>
            <div>
              <RowInputContainer>
                <InputWrapper>
                  <UsernameInputComp
                    $allowChangedUserName={allowChangedUserName}
                    type="text"
                    aria-labelledby="username-label"
                    autoCapitalize="off"
                    autoCorrect="off"
                    disabled={true}
                    defaultValue={username}
                    readOnly={true}
                  />
                </InputWrapper>

                {allowChangedUserName && (
                  <EditButtonWrapper>
                    <UsernameDialog route={route} username={username}>
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
                )}
              </RowInputContainer>
            </div>

            <InputDescriptionWrapper>
              <InputDescriptionText>
                {allowChangedUserName
                  ? "You may update your username"
                  : `You may update your username again in ${changedUsernameDaysLeft} days`}
              </InputDescriptionText>
            </InputDescriptionWrapper>
          </RowInputWrapper>
        </RowOverlay>
      </RowContainer>
    </RowWrapper>
  )
}
