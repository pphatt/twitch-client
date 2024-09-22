"use client"

import * as React from "react"
import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { sleep } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
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

import type { UserDto } from "../../../../modules/user/application/dto/user.dto"
import { UserRepository } from "../../../../modules/user/infrastructure/repository/user.repository"

type Inputs = z.infer<typeof authSchema>

export default function LogInForm() {
  // const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

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

        // call auth/login api.
        // -> return rftk and actk (actk contain user info)
        // -- right here if F5 the browser, the app context would fetch to the user info to passing to the app context.
        //
        // ->
        //

        const result = await UserRepository.login({
          email: username,
          password: password,
        })

        console.log(data)
        console.log(result)
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
