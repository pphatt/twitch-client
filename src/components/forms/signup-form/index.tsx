"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { sleep } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  SignupRequestDtoSchema,
  type SignupRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField } from "@/components/ui/form"
import {
  SubmitLayoutWrapper,
  TermLayoutWrapper,
  TermText,
} from "@/components/forms/signup-form/style"
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

type Inputs = SignupRequestDto

export default function SignUpForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(SignupRequestDtoSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (!isPending) return

    startTransition(async () => {
      try {
        console.log(data)
        console.log(router)
        await sleep(1000)
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormContentLabelWrapper>
                <FormContentLabelContainer>
                  <FormLabel>Email</FormLabel>
                </FormContentLabelContainer>
              </FormContentLabelWrapper>

              <FormContentInputWrapper>
                <FormControl>
                  <Input {...field} placeholder="Email" />
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

        <TermLayoutWrapper>
          <TermText>
            <span>
              By clicking Sign Up, you are agreeing to Stream site service’s{" "}
            </span>
            <Link href={"/"}>Terms of Service</Link>
            <span> and are acknowledging our </span>
            <Link href={"/"}>Privacy Notice</Link>
            <span> applies.</span>
          </TermText>
        </TermLayoutWrapper>

        <SubmitLayoutWrapper>
          <SubmitBtn
            type={"submit"}
            disabled={
              !(form.getValues("username") && form.getValues("password")) ||
              isPending
            }
          >
            {isPending && <IconSpinner aria-hidden="true" />}
            Sign Up
          </SubmitBtn>
        </SubmitLayoutWrapper>
      </FormLayoutContainer>
    </Form>
  )
}
