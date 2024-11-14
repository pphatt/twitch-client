import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ValidateEmailSchema,
  type ValidateEmailDto,
} from "@modules/user/presentation/http/dto/request/auth/forget-password.request.dto"
import { useForm } from "react-hook-form"

import { Form, FormField } from "@/components/ui/form"
import {
  AccountRecoveryWrapper,
  InputComp,
  InputWrapper,
  LabelContainer,
  LabelText,
  LabelWrapper,
  SubmitBtn,
  SubmitBtnWrapper,
  Text2Text,
  Text2Wrapper,
  TitleText,
} from "@/components/forms/auth/validate-email-form/style"

type Inputs = ValidateEmailDto

interface ValidateEmailFormProps {
  setEmail: (email: string) => void
}

export default function ValidateEmailForm({
  setEmail,
}: ValidateEmailFormProps) {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(ValidateEmailSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(() => {
      const { email } = data
      setEmail(email)
    })
  }

  return (
    <AccountRecoveryWrapper>
      <TitleText>Getting back into your Twitch account</TitleText>

      <Text2Wrapper>
        <Text2Text>Tell us some information about your account.</Text2Text>
      </Text2Wrapper>

      <Form {...form}>
        <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <LabelWrapper>
                  <LabelContainer>
                    <LabelText>Enter your email</LabelText>
                  </LabelContainer>
                </LabelWrapper>

                <InputWrapper>
                  <InputComp
                    {...field}
                    aria-label="Enter your email"
                    type={"text"}
                    autoCapitalize={"off"}
                    autoCorrect={"off"}
                  />
                </InputWrapper>
              </>
            )}
          />

          <SubmitBtnWrapper>
            <SubmitBtn
              disabled={!form.formState.isValid || isPending}
              type={"submit"}
              $isSubmitting={isPending}
            >
              Continue
            </SubmitBtn>
          </SubmitBtnWrapper>
        </form>
      </Form>
    </AccountRecoveryWrapper>
  )
}
