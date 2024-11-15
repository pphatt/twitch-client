import * as React from "react"
import { useAuth } from "@/context/auth.context"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  UpdateUsernameRequestDtoSchema,
  type UpdateUsernameRequestDto,
} from "@modules/user/presentation/http/dto/request/user/update-username.request.dto"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { useDebounce } from "@/hooks/useDebounce.hooks"
import { Form, FormControl, FormField } from "@/components/ui/form"
import {
  FormContent,
  FormContentInputWrapper,
  FormContentLabelContainer,
  FormContentLabelWrapper,
  FormContentWrapper as FormItem,
  FormContentLabel as FormLabel,
  FormLayoutContainer,
  FormLayoutOverlay,
  FormLayoutWrapper,
  FormMessage,
  FormMessageContainer,
  FormMessageWrapper,
  IconSpinner,
  FormContentInput as Input,
  NormalBtn,
  SubmitBtn,
  SubmitLayoutWrapper,
} from "@/components/forms/dashboard/username-form/style"

type Inputs = UpdateUsernameRequestDto

interface UsernameFormProps {
  cancel: () => void
}

export default function UsernameForm({ cancel }: UsernameFormProps) {
  const [isCheckingUsername, startCheckingUsername] = React.useTransition()
  const [isPending, startTransition] = React.useTransition()

  const { setProfile } = useAuth()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(UpdateUsernameRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
    },
  })

  const debouncedQuery = useDebounce(form.watch("username"), 300)

  const onSubmit = (data: Inputs) => {
    if (isPending || isCheckingUsername) return

    startTransition(async () => {
      try {
        const { username } = data

        const { profile } = await UserRepository.updateUsername({ username })

        setProfile({ ...profile } as WhoamiResponseDto)

        toast.success("Update username successfully", {
          duration: 10000,
          position: "top-right",
        })

        window.location.replace(`/u/${username}/settings/channel`)
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
          form.setError("username", {
            message: "*This username is unavailable.",
          })

          return
        }

        if (isValidUsername && !form.getFieldState("username").error) {
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
    <FormLayoutOverlay>
      <FormLayoutWrapper>
        <FormLayoutContainer>
          <Form {...form}>
            <FormContent
              onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormContentLabelWrapper>
                      <FormContentLabelContainer>
                        <FormLabel $showError={false}>Username</FormLabel>
                      </FormContentLabelContainer>
                    </FormContentLabelWrapper>

                    <FormContentInputWrapper>
                      <FormControl>
                        <Input
                          $error={!!form.formState.errors.username}
                          {...field}
                        />
                      </FormControl>
                    </FormContentInputWrapper>

                    <FormMessageWrapper
                      style={{
                        height: `${form.getFieldState("username").invalid ? `${23}px` : "0px"}`,
                      }}
                    >
                      {form.getFieldState("username").invalid && (
                        <FormMessageContainer>
                          <FormMessage>
                            {form.getFieldState("username").error?.message}
                          </FormMessage>
                        </FormMessageContainer>
                      )}
                    </FormMessageWrapper>
                  </FormItem>
                )}
              />

              <SubmitLayoutWrapper>
                <SubmitBtn
                  type={"submit"}
                  $isSubmitting={isPending}
                  disabled={
                    !!form.getFieldState("username").error ||
                    form.watch("username").length === 0 ||
                    isPending
                  }
                >
                  {isPending && <IconSpinner aria-hidden="true" />}
                  Update
                </SubmitBtn>

                <div
                  style={{
                    marginLeft: "20px",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <NormalBtn type={"button"} onClick={cancel}>
                    Cancel
                  </NormalBtn>
                </div>
              </SubmitLayoutWrapper>
            </FormContent>
          </Form>
        </FormLayoutContainer>
      </FormLayoutWrapper>
    </FormLayoutOverlay>
  )
}
