"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import {
  UpdateProfileRequestDtoSchema,
  type UpdateProfileRequestDto,
} from "@modules/user/presentation/http/dto/request/user/update-profile.request.dto"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Form, FormField } from "@/components/ui/form"
import PreviewPanel from "@/components/dashboard-profile/preview-panel"
import ProfilePageLayout from "@/components/dashboard-profile/profile-page-layout"
import ShowPreviewBtn from "@/components/dashboard-profile/show-preview"
import { ShowPreviewButtonRowWrapper } from "@/components/dashboard-profile/show-preview/style"
import SubmitBtn from "@/components/dashboard-profile/submit-btn"
import { BioInput } from "@/components/forms/dashboard/bio-input"
import { DisplayNameInput } from "@/components/forms/dashboard/displayname-input"
import {
  FormContentWrapper as FormItem,
  FormMessage,
  FormMessageContainer,
  FormMessageWrapper,
} from "@/components/forms/dashboard/username-form/style"
import UsernameInput from "@/components/forms/dashboard/username-input"
import styles from "@/styles/application/dashboard/settings/channel/page.module.scss"

type Inputs = UpdateProfileRequestDto

export default function ChannelSettingsPage() {
  const router = useRouter()

  const [openReview, setOpenReview] = React.useState(true)

  const [isPending, startTransition] = React.useTransition()

  const { profile, setProfile } = useAuth((state) => state)

  const form = useForm<Inputs>({
    resolver: zodResolver(UpdateProfileRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      displayName: profile!.displayName ?? "",
      bio: profile!.bio ?? "",
    },
  })

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(async () => {
      try {
        const { displayName, bio } = data

        await UserRepository.updateProfile(data)

        setProfile({ ...profile, displayName, bio } as WhoamiResponseDto)

        toast.success("Update profile successfully", {
          duration: 10000,
          position: "top-right",
        })

        router.refresh()
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        form.setError("displayName", {
          message: error.message,
        })

        console.log(error)
      }
    })
  }

  return (
    <ProfilePageLayout>
      <ShowPreviewButtonRowWrapper>
        <ShowPreviewBtn
          openReview={openReview}
          setOpenReview={() => setOpenReview(!openReview)}
        />

        {openReview && (
          <PreviewPanel
            displayName={profile?.displayName ?? ""}
            bio={
              profile?.bio ??
              `We don't know much about them, but we're sure ${profile?.displayName ?? ""} is great.`
            }
          />
        )}
      </ShowPreviewButtonRowWrapper>

      <div className={styles["profile-settings-header-wrapper"]}>
        <h3 className={styles["profile-settings-header-text"]}>
          Profile Settings
        </h3>

        <div className={styles["profile-setting-header-description-wrapper"]}>
          <p className={styles["profile-setting-header-description-text"]}>
            Change identifying details for your account
          </p>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className={styles["profile-settings-content-wrapper"]}
        >
          <div className={styles["profile-settings-content-container"]}>
            <UsernameInput username={profile!.username} />

            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <DisplayNameInput
                    $error={!!form.formState.errors.displayName}
                    {...field}
                  >
                    <FormMessageWrapper
                      style={{
                        height: `${form.getFieldState("displayName").invalid ? `${23}px` : "0px"}`,
                      }}
                    >
                      {form.getFieldState("displayName").invalid && (
                        <FormMessageContainer>
                          <FormMessage>
                            {form.getFieldState("displayName").error?.message}
                          </FormMessage>
                        </FormMessageContainer>
                      )}
                    </FormMessageWrapper>
                  </DisplayNameInput>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <BioInput $error={!!form.formState.errors.bio} {...field}>
                    <FormMessageWrapper
                      style={{
                        height: `${form.getFieldState("bio").invalid ? `${23}px` : "0px"}`,
                      }}
                    >
                      {form.getFieldState("bio").invalid && (
                        <FormMessageContainer>
                          <FormMessage>
                            {form.getFieldState("bio").error?.message}
                          </FormMessage>
                        </FormMessageContainer>
                      )}
                    </FormMessageWrapper>
                  </BioInput>
                </FormItem>
              )}
            />
          </div>

          <SubmitBtn
            isPending={isPending}
            disabled={
              (form.watch("displayName") === (profile?.displayName ?? "") &&
                form.watch("bio") === (profile?.bio ?? "")) ||
              isPending
            }
          />
        </form>
      </Form>
    </ProfilePageLayout>
  )
}
