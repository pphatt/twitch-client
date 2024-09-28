"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import {
  saveAccessToken,
  saveRefreshToken,
  saveUserProfile,
} from "@/utils/auth.utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { authSchema } from "@/lib/validation/auth"
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

import { BaseEntity } from "../../../../modules/core/domain-base/entity/entity.base"
import { UserRepository } from "../../../../modules/user/infrastructure/repository/user.repository"

// import type { UserDto } from "../../../../modules/user/application/dto/user.dto"
// import { UserRepository } from "../../../../modules/user/infrastructure/repository/user.repository"

export type Inputs = z.infer<typeof authSchema>

export default function LogInForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const { setProfile, setIsAuthenticated } = useAuth()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
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

        const result = await UserRepository.login({
          email: username,
          password: password,
        })

        const { accessToken, refreshToken, userId } = result

        saveAccessToken(accessToken)
        saveRefreshToken(refreshToken)

        saveUserProfile({ userId })
        setIsAuthenticated(true)

        setProfile({ userId })
        toast.success("Log in successfully", {
          duration: 10000,
          position: "top-right",
        })

        router.refresh()
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
