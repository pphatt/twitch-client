import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  FormOtpRequestDtoSchema,
  type FormOtpRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/otp.request.dto"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import ResendOtpBtn from "src/components/forms/btn-with-cooldown"

import { Form, FormControl, FormField } from "@/components/ui/form"
import { InputOTP } from "@/components/ui/otp-input"
import {
  OTPContainer,
  OTPSlot,
  SubmitLayoutWrapper,
} from "@/components/forms/otp-form/style"
import {
  FormContentInputWrapper,
  FormLayoutContainer,
  IconSpinner,
  NormalBtn,
  SubmitBtn,
} from "@/components/share-styled/auth-forms/style"

type Inputs = FormOtpRequestDto

interface OtpFormProps {
  userData: {
    username: string
    email: string
  }
  back: () => void
  redirectToSignIn: () => void
}

export default function OtpForm({
  userData,
  back,
  redirectToSignIn,
}: OtpFormProps) {
  const [isPending, startTransition] = React.useTransition()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(FormOtpRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      otp: "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(async () => {
      try {
        await UserRepository.confirmEmail({
          otp: data.otp,
          username: userData.username,
        })

        toast.success("Verify email successfully", {
          duration: 10000,
          position: "top-right",
        })

        back()
        redirectToSignIn()
      } catch (err) {
        // catchError(err)
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)

        // set up error display
        form.setError("otp", {
          message: "Invalid otp",
        })
      }
    })
  }

  const handleResendOtp = async () => {
    try {
      await Auth.resendConfirmEmail({
        email: userData.email,
      })

      toast.success("Resend email verification successfully", {
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
  }

  const otpSlotError =
    !!form.formState.errors.otp && form.getValues("otp").length === 6

  return (
    <Form {...form}>
      <FormLayoutContainer
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormContentInputWrapper>
              <FormControl>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                  <OTPContainer>
                    <OTPSlot $error={otpSlotError} index={0} />
                    <OTPSlot $error={otpSlotError} index={1} />
                    <OTPSlot $error={otpSlotError} index={2} />
                    <OTPSlot $error={otpSlotError} index={3} />
                    <OTPSlot $error={otpSlotError} index={4} />
                    <OTPSlot $error={otpSlotError} index={5} />
                  </OTPContainer>
                </InputOTP>
              </FormControl>
            </FormContentInputWrapper>
          )}
        />

        <ResendOtpBtn
          callback={handleResendOtp}
          text={"Resend code"}
          coolDownText={"Resend in"}
        />

        <SubmitLayoutWrapper>
          <NormalBtn type={"button"} onClick={back}>
            Back
          </NormalBtn>

          <SubmitBtn
            type={"submit"}
            $isSubmitting={isPending}
            disabled={!(form.getValues("otp").length === 6) || isPending}
            style={{
              width: "fit-content",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {isPending && <IconSpinner aria-hidden="true" />}
            Submit
          </SubmitBtn>
        </SubmitLayoutWrapper>
      </FormLayoutContainer>
    </Form>
  )
}
