"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { useAuth } from "@/context/auth.context"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  SigninRequestDtoSchema,
  type SigninRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
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

type Inputs = SigninRequestDto

export default function LogInForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  // const { setProfile, setIsAuthenticated } = useAuth()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(SigninRequestDtoSchema),
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

        await UserRepository.signin({
          username: username,
          password: password,
        })

        toast.success("Log in successfully", {
          duration: 10000,
          position: "top-right",
        })

        router.refresh()

        window.location.replace("/")
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
                  <Input {...field} placeholder="Username" />
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
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
              </FormContentInputWrapper>

              <FormMessageWrapper />
            </FormItem>
          )}
        />

        <ResetPasswordLayout>
          <Link href={"/signin/reset-password"}>
            <p>Forgot Password?</p>
          </Link>
        </ResetPasswordLayout>

        <SubmitLayoutWrapper>
          <SubmitBtn
            type={"submit"}
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
