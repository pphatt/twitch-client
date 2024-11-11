import * as React from "react"
import { axiosHttpErrorHandler, sleep } from "@/utils/common"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { toast } from "sonner"

import {
  AccountRecoveryWrapper,
  BackButtonContainer,
  BackButtonOverlay,
  BackButtonWrapper,
  ButtonContainer,
  ButtonGroup,
  ButtonGroupContainer,
  ButtonGroupWrapper,
  ButtonText,
  DoneBtnContainer,
  DoneBtnWrapper,
  GetUsernameButtonWrapper,
  HighlightText,
  IconSpinner,
  InputIndicateContainer,
  InputIndicateText,
  InputIndicateTextWrapper,
  InputIndicateWrapper,
  InputPlaceholderContainer,
  InputPlaceholderWrapper,
  LabelContainer,
  LabelText,
  LabelWrapper,
  ResetPasswordButtonWrapper,
  Text2Text,
  Text2Wrapper,
  Text3Wrapper,
  TitleText,
} from "@/components/forms/account-recovery-form/style"
import { Icons } from "@/components/icons"

interface AccountRecoveryProps {
  email: string
  setEmail: (email: string) => void
}

export default function AccountRecoveryForm({
  email,
  setEmail,
}: AccountRecoveryProps) {
  const [openPassword, setOpenPassword] = React.useState(false)
  const [openUsername, setOpenUsername] = React.useState(false)

  const [isPending, startTransition] = React.useTransition()

  const onSendResetPasswordSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await UserRepository.forgotPassword({
          emailOrPhone: email,
        })

        setOpenPassword(true)
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  const onSendUsername = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await sleep(5000)
        setOpenUsername(true)
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  if (openPassword) {
    return (
      <AccountRecoveryWrapper>
        <TitleText>Check your email</TitleText>

        <Text2Wrapper>
          <Text2Text>
            Please go to your <HighlightText>{email}</HighlightText> email and
            click the password reset link we&apos;ve sent for your Twitch
            account.
          </Text2Text>

          <Text3Wrapper>
            <Text2Text>
              It could take a few minutes to appear, and be sure to check any
              spam and promotional folders—just in case!
            </Text2Text>
          </Text3Wrapper>
        </Text2Wrapper>

        <ButtonGroup>
          <DoneBtnWrapper>
            <DoneBtnContainer href={"/"}>
              <ButtonContainer>
                <ButtonText>Done</ButtonText>
              </ButtonContainer>
            </DoneBtnContainer>
          </DoneBtnWrapper>

          <GetUsernameButtonWrapper onClick={() => setEmail("")}>
            <ButtonContainer>
              <ButtonText>Start Over</ButtonText>
            </ButtonContainer>
          </GetUsernameButtonWrapper>
        </ButtonGroup>
      </AccountRecoveryWrapper>
    )
  }

  if (openUsername) {
    return (
      <AccountRecoveryWrapper>
        <TitleText>Check your email</TitleText>

        <Text2Wrapper>
          <Text2Text>
            Please go to your <HighlightText>{email}</HighlightText> email to
            retrieve your username.
          </Text2Text>

          <Text3Wrapper>
            <Text2Text>
              It could take a few minutes to appear, and be sure to check any
              spam and promotional folders—just in case!
            </Text2Text>
          </Text3Wrapper>
        </Text2Wrapper>

        <ButtonGroup>
          <DoneBtnWrapper>
            <DoneBtnContainer href={"/"}>
              <ButtonContainer>
                <ButtonText>Done</ButtonText>
              </ButtonContainer>
            </DoneBtnContainer>
          </DoneBtnWrapper>

          <GetUsernameButtonWrapper onClick={() => setEmail("")}>
            <ButtonContainer>
              <ButtonText>Start Over</ButtonText>
            </ButtonContainer>
          </GetUsernameButtonWrapper>
        </ButtonGroup>
      </AccountRecoveryWrapper>
    )
  }

  return (
    <AccountRecoveryWrapper>
      <TitleText>Getting back into your Twitch account</TitleText>

      <Text2Wrapper>
        <Text2Text>
          Next, give us the Twitch username you&apos;re having trouble with.
        </Text2Text>
      </Text2Wrapper>

      <InputPlaceholderWrapper>
        <div>
          <InputPlaceholderContainer>
            <LabelWrapper>
              <LabelContainer>
                <LabelText>Email</LabelText>
              </LabelContainer>
            </LabelWrapper>

            <InputIndicateWrapper>
              <InputIndicateContainer>
                <InputIndicateTextWrapper>
                  <InputIndicateText>{email}</InputIndicateText>
                </InputIndicateTextWrapper>

                <BackButtonWrapper onClick={() => setEmail("")}>
                  <BackButtonContainer>
                    <BackButtonOverlay>
                      <Icons.pencil />
                    </BackButtonOverlay>
                  </BackButtonContainer>
                </BackButtonWrapper>
              </InputIndicateContainer>
            </InputIndicateWrapper>
          </InputPlaceholderContainer>
        </div>
      </InputPlaceholderWrapper>

      <ButtonGroupWrapper>
        <SendPasswordResetBtn
          isLoading={isPending}
          callback={onSendResetPasswordSubmit}
        />

        <SendUsernameBtn isLoading={isPending} callback={onSendUsername} />
      </ButtonGroupWrapper>
    </AccountRecoveryWrapper>
  )
}

function SendPasswordResetBtn({
  isLoading,
  callback,
}: {
  isLoading: boolean
  callback: () => void
}) {
  const [isPending, startTransition] = React.useTransition()

  const handleSend = () => {
    startTransition(() => {
      callback()
    })
  }

  return (
    <ButtonGroupContainer onClick={handleSend}>
      <ResetPasswordButtonWrapper disabled={isLoading}>
        <ButtonContainer>
          {isPending && <IconSpinner aria-hidden="true" />}
          <ButtonText>Send My Password Reset Link</ButtonText>
        </ButtonContainer>
      </ResetPasswordButtonWrapper>
    </ButtonGroupContainer>
  )
}

function SendUsernameBtn({
  isLoading,
  callback,
}: {
  isLoading: boolean
  callback: () => void
}) {
  const [isPending, startTransition] = React.useTransition()

  const handleSend = () => {
    startTransition(() => {
      callback()
    })
  }

  return (
    <GetUsernameButtonWrapper disabled={isLoading} onClick={handleSend}>
      <ButtonContainer>
        {isPending && <IconSpinner aria-hidden="true" />}
        <ButtonText>I Don&apos;t Know My Username</ButtonText>
      </ButtonContainer>
    </GetUsernameButtonWrapper>
  )
}
