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
  ButtonGroupContainer,
  ButtonGroupWrapper,
  ButtonText,
  GetUsernameButtonWrapper,
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
  const [isPending, startTransition] = React.useTransition()

  const onSendResetPasswordSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        await UserRepository.forgotPassword({
          emailOrPhone: email,
        })

        toast.success("Reset password link send successfully", {
          duration: 10000,
          position: "top-right",
        })
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
