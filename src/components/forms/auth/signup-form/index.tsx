import * as React from "react"
import Link from "next/link"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  SignUpRequestDtoSchema,
  type SignUpRequestDto,
} from "@modules/user/presentation/http/dto/request/auth/signup.request.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { useDebounce } from "@/hooks/useDebounce.hooks"
import { Form, FormControl, FormField } from "@/components/ui/form"
import { DobInput } from "@/components/forms/auth/dob-input"
import {
  SubmitLayoutWrapper,
  TermLayoutWrapper,
  TermText,
} from "@/components/forms/auth/signup-form/style"
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

type Inputs = SignUpRequestDto

interface SignUpFormProps {
  setRenderOtp: React.Dispatch<
    React.SetStateAction<{
      initial: boolean
      email: string
      username: string
    }>
  >
}

export default function SignUpForm({ setRenderOtp }: SignUpFormProps) {
  const [isCheckingUsername, startCheckingUsername] = React.useTransition()

  const [isPending, startTransition] = React.useTransition()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(SignUpRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      dob: "",
    },
  })

  const debouncedQuery = useDebounce(form.watch("name"), 300)

  const onSubmit = (data: Inputs) => {
    if (isPending || isCheckingUsername) return

    startTransition(async () => {
      try {
        await UserRepository.signupWithEmail({
          ...data,
          dob: new Date(data.dob).toISOString(),
        })

        setRenderOtp({
          initial: true,
          email: data.email,
          username: data.name,
        })

        toast.success("Sign up successfully", {
          duration: 10000,
          position: "top-right",
        })
      } catch (err) {
        // catchError(err)
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  React.useEffect(() => {
    if (debouncedQuery.length < 4) {
      return
    }

    async function fetchData() {
      try {
        const { data: isValidUsername } = await UserRepository.isValidUsername({
          username: debouncedQuery,
        })

        if (!isValidUsername) {
          form.setError("name", {
            message: "*This username is unavailable.",
          })

          return
        }

        if (isValidUsername && !form.getFieldState("name").error) {
          form.clearErrors()
          return
        }
      } catch (err) {
        throw new Error("Something went wrong...")
      }
    }

    startCheckingUsername(fetchData)
  }, [debouncedQuery])

  return (
    <Form {...form}>
      <FormLayoutContainer
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="name"
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
                    $error={!!form.formState.errors.name}
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormContentLabelWrapper>
                <FormContentLabelContainer>
                  <FormLabel>Email</FormLabel>
                </FormContentLabelContainer>
              </FormContentLabelWrapper>

              <FormContentInputWrapper>
                <FormControl>
                  <Input
                    $error={!!form.formState.errors.email}
                    {...field}
                    placeholder="Email"
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

        <FormField
          control={form.control}
          name="dob"
          render={({ field: { ...field } }) => (
            <FormItem>
              <FormContentLabelWrapper>
                <FormContentLabelContainer>
                  <FormLabel>Date of birth</FormLabel>
                </FormContentLabelContainer>
              </FormContentLabelWrapper>

              <FormContentInputWrapper>
                <FormControl>
                  <DobInput $error={!!form.formState.errors.dob} {...field} />
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
            $isSubmitting={isPending}
            disabled={
              !(
                form.getValues("name") &&
                form.getValues("password") &&
                form.getValues("email") &&
                form.getValues("dob")
              ) || isPending
            }
          >
            {isPending && <IconSpinner aria-hidden="true" />}
            Sign up
          </SubmitBtn>
        </SubmitLayoutWrapper>
      </FormLayoutContainer>
    </Form>
  )
}
