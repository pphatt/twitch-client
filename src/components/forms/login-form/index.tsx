import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import { zodResolver } from "@hookform/resolvers/zod"
import { EUserStatus } from "@modules/core/domain-base/entity/enum/user-status.enum"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  FormSignInRequestDtoSchema,
  type FormSignInRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import { jwtDecode } from "jwt-decode"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Form, FormControl, FormField } from "@/components/ui/form"
import {
  ResetPasswordLayout,
  SubmitLayoutWrapper,
} from "@/components/forms/login-form/style"
import {
  FormContentInputWrapper,
  FormContentLabelContainer,
  FormContentLabelWrapper,
  FormContentWrapper as FormItem,
  FormContentLabel as FormLabel,
  FormLayoutContainer,
  FormMessageWrapper,
  IconSpinner,
  FormContentInput as Input,
  FormPasswordInput as PasswordInput,
  SubmitBtn,
} from "@/components/share-styled/auth-forms/style"

type Inputs = FormSignInRequestDto

interface LogInFormProps {
  setRenderOtp: React.Dispatch<
    React.SetStateAction<{ initial: boolean; email: string; username: string }>
  >

  setVerifyEmailDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LogInForm({
  setRenderOtp,
  setVerifyEmailDialogOpen,
}: LogInFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const { setProfile, setAuthenticated } = useAuth((state) => state)

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(FormSignInRequestDtoSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(async () => {
      try {
        const { username, password } = data

        const { accessToken, profile } = await UserRepository.signin({
          username: username,
          password: password,
        })

        const decode = jwtDecode<TokenPayload>(accessToken)

        if (decode.status === EUserStatus.UNVERIFIED) {
          await Auth.resendConfirmEmail({
            email: decode.email!,
          })

          toast.success("Send email verification successfully", {
            duration: 10000,
            position: "top-right",
          })

          setRenderOtp({
            initial: false,
            username: decode.username!,
            email: decode.email!,
          })

          setVerifyEmailDialogOpen(true)
        } else {
          setProfile(profile)
          setAuthenticated(true)

          toast.success("Log in successfully", {
            duration: 10000,
            position: "top-right",
          })

          router.refresh()

          window.location.replace("/")
        }
      } catch (err) {
        // catchError(err)
        console.error(err)
      }
    })
  }

  return (
    <Form {...form}>
      <FormLayoutContainer
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormContentLabelWrapper>
                <FormContentLabelContainer>
                  <FormLabel>Username</FormLabel>
                </FormContentLabelContainer>
              </FormContentLabelWrapper>

              <FormContentInputWrapper>
                <FormControl>
                  <Input
                    $error={!!form.formState.errors.username}
                    {...field}
                    placeholder="Username"
                  />
                </FormControl>
              </FormContentInputWrapper>

              <FormMessageWrapper />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormContentLabelWrapper>
                <FormContentLabelContainer>
                  <FormLabel>Password</FormLabel>
                </FormContentLabelContainer>
              </FormContentLabelWrapper>

              <FormContentInputWrapper>
                <FormControl>
                  <PasswordInput
                    $error={!!form.formState.errors.password}
                    placeholder="**********"
                    {...field}
                  />
                </FormControl>
              </FormContentInputWrapper>

              <FormMessageWrapper />
            </FormItem>
          )}
        />

        <ResetPasswordLayout>
          <Link href={"/user/account-recovery"}>
            <p>Forgot Password?</p>
          </Link>
        </ResetPasswordLayout>

        <SubmitLayoutWrapper>
          <SubmitBtn
            type={"submit"}
            $isSubmitting={isPending}
            disabled={
              !(form.getValues("username") && form.getValues("password")) ||
              isPending
            }
          >
            {isPending && <IconSpinner aria-hidden="true" />}
            Sign in
          </SubmitBtn>
        </SubmitLayoutWrapper>
      </FormLayoutContainer>
    </Form>
  )
}
