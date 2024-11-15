import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  UpdateProfilePictureRequestDtoSchema,
  type UpdateProfilePictureRequestDto,
} from "@modules/user/presentation/http/dto/request/user/update-profile-picture.request.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import "@/components/forms/dashboard/username-form/style"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth.context"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import type { WhoamiResponseDto } from "@modules/user/presentation/http/dto/response/user/whoami.reponse.dto"

import { Form } from "@/components/ui/form"
import { Icons } from "@/components/icons"
import {
  ActionRowContainer,
  ActionRowWrapper,
  ContentWrapper,
  DialogClose,
  HeaderText,
  HeaderWrapper,
  IconSpinner,
  ModalHeaderContainer,
  ModalHeaderWrapper,
  NormalBtn,
  PreviewImage,
  PreviewImageWrapper,
  SubmitBtn,
} from "@/components/settings/profile/profile-picture-form/style"

type Inputs = UpdateProfilePictureRequestDto

interface ProfilePictureFormProps {
  previewImage: string
  onCancel: () => void
}

export default function ProfilePictureForm({
  previewImage,
  onCancel,
}: ProfilePictureFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const { setProfile } = useAuth()

  const form = useForm<Inputs>({
    resolver: zodResolver(UpdateProfilePictureRequestDtoSchema),
  })

  const onSubmit = () => {
    if (isPending) return

    startTransition(async () => {
      try {
        // Convert previewImage to a File
        const response = await fetch(previewImage)
        const blob = await response.blob()
        const file = new File([blob], "profile-picture.jpg", {
          type: blob.type,
        })

        // Prepare FormData
        const formData = new FormData()
        formData.append("picture", file) // Append the file

        // Send request to the backend
        const { profile } = await UserRepository.updateProfilePicture(formData)

        console.log(profile)

        setProfile({ ...profile } as WhoamiResponseDto)

        router.refresh()

        toast.success("Profile picture updated successfully!", {
          duration: 10000,
          position: "top-right",
        })

        onCancel() // Close the modal
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.error("Error updating profile picture:", error)
      }
    })
  }

  return (
    <ModalHeaderWrapper>
      <ModalHeaderContainer as={"div"}>
        <HeaderWrapper>
          <HeaderText>Update Profile Picture</HeaderText>
        </HeaderWrapper>

        <DialogClose
          onClick={(event) => {
            event.preventDefault()
            onCancel()
          }}
        >
          <Icons.closeX />
          <span>Close</span>
        </DialogClose>
      </ModalHeaderContainer>

      <ContentWrapper>
        <PreviewImageWrapper>
          <PreviewImage src={previewImage} />
        </PreviewImageWrapper>
      </ContentWrapper>

      <Form {...form}>
        <form
          encType={"multipart/form-data"}
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <ActionRowWrapper>
            <ActionRowContainer>
              <SubmitBtn
                type={"submit"}
                $isSubmitting={isPending}
                disabled={isPending}
              >
                {isPending && <IconSpinner aria-hidden="true" />}
                Save
              </SubmitBtn>

              <NormalBtn type={"button"} onClick={onCancel}>
                Cancel
              </NormalBtn>
            </ActionRowContainer>
          </ActionRowWrapper>
        </form>
      </Form>
    </ModalHeaderWrapper>
  )
}
