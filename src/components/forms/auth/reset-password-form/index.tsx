"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import LogoWithText from "@/assets/logo/logo-with-text"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  ResetPasswordRequestSchema,
  type ResetPasswordRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/reset-password.request.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Form, FormField } from "@/components/ui/form"
import {
  AccountRecoveryWrapper,
  FormMessage,
  FormMessageContainer,
  FormMessageWrapper,
  FormWrapper,
  InputContainer,
  InputPassword,
  InputWrapper,
  LabelContainer,
  LabelText,
  LabelWrapper,
  LogoWrapper,
  SubmitBtn,
  SubmitBtnWrapper,
  Text2Text,
  Text2TextWarning,
  Text2Wrapper,
  TitleText,
} from "@/components/forms/auth/reset-password-form/style"
import { IconSpinner } from "@/components/share-styled/auth-forms/style"

type Inputs = ResetPasswordRequestDto

export default function ResetPasswordForm() {
  const router = useRouter()

  const searchParams = useSearchParams()

  const reset_token = searchParams.get("reset_token")

  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(ResetPasswordRequestSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
      token: reset_token ?? "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(async () => {
      const { token } = data

      if (!token) {
        toast.error("Invalid token", {
          duration: 10000,
          position: "top-right",
        })

        return
      }

      try {
        await UserRepository.resetPassword(data)

        toast.success("Reset password successfully", {
          duration: 10000,
          position: "top-right",
        })

        router.refresh()

        window.location.replace("/")
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
      <LogoWrapper>
        <LogoWithText />
      </LogoWrapper>

      <TitleText>Set New Password</TitleText>

      <Text2Wrapper>
        <Text2Text>
          Set a new password for your account. Resetting your password will also
          invalidate your existing stream keys.
        </Text2Text>
      </Text2Wrapper>

      <Text2Wrapper>
        <Text2TextWarning>
          Warning: Changing your password will result in the invalidation of
          your stream key and the revocation of existing account credentials
          issued to 3rd party services.
        </Text2TextWarning>
      </Text2Wrapper>

      <Form {...form}>
        <FormWrapper
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <InputContainer>
                <LabelWrapper>
                  <LabelContainer>
                    <LabelText>New Password</LabelText>
                  </LabelContainer>
                </LabelWrapper>

                <InputWrapper>
                  <InputPassword
                    {...field}
                    $error={!!form.formState.errors.password}
                    aria-label="Create a new secure password"
                    autoCapitalize={"off"}
                    autoCorrect={"off"}
                    autoComplete={"current-password"}
                    spellCheck={"false"}
                  />
                </InputWrapper>

                <FormMessageWrapper
                  style={{
                    height: `${form.getFieldState("password").invalid ? `${23 * 2}px` : "0px"}`,
                  }}
                >
                  {form.getFieldState("password").invalid && (
                    <FormMessageContainer>
                      <FormMessage>
                        {form.getFieldState("password").error?.message}
                      </FormMessage>
                    </FormMessageContainer>
                  )}
                </FormMessageWrapper>
              </InputContainer>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <InputContainer $paddingBottom={true}>
                <LabelWrapper>
                  <LabelContainer>
                    <LabelText>Confirm your new password</LabelText>
                  </LabelContainer>
                </LabelWrapper>

                <InputWrapper>
                  <InputPassword
                    {...field}
                    $error={!!form.formState.errors.confirmPassword}
                    aria-label="Create a new secure password"
                    autoCapitalize={"off"}
                    autoCorrect={"off"}
                    autoComplete={"current-password"}
                    spellCheck={"false"}
                  />
                </InputWrapper>

                <FormMessageWrapper
                  style={{
                    height: `${form.getFieldState("confirmPassword").invalid ? `${23}px` : "0px"}`,
                  }}
                >
                  {form.getFieldState("confirmPassword").invalid && (
                    <FormMessageContainer>
                      <FormMessage>
                        {form.getFieldState("confirmPassword").error?.message}
                      </FormMessage>
                    </FormMessageContainer>
                  )}
                </FormMessageWrapper>
              </InputContainer>
            )}
          />

          <SubmitBtnWrapper>
            <SubmitBtn
              disabled={!form.formState.isValid || isPending}
              type={"submit"}
              $isSubmitting={isPending}
            >
              {isPending && <IconSpinner aria-hidden="true" />}
              Set Password
            </SubmitBtn>
          </SubmitBtnWrapper>
        </FormWrapper>
      </Form>
    </AccountRecoveryWrapper>
  )
}
