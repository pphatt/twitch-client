"use client"

import * as React from "react"
import { useAuth } from "@/context/auth.context"
import { toast } from "sonner"

import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import ProfilePictureForm from "@/components/settings/profile/profile-picture-form"
import {
  CardContentWrapper,
  CardHeaderText,
  CardHeaderWrapper,
  CardLayoutContainer,
  CardLayoutOverlay,
  CardLayoutWrapper,
  Image,
  ImageInputContentWrapper,
  ImageSettingsContainer,
  ImageSettingsDescriptionText,
  ImageSettingsDescriptionWrapper,
  ImageSettingsWrapper,
  ImageUploadButton,
  ImageUploadButtonContainer,
  ImageUploadButtonOverlay,
  ImageUploadButtonText,
  ImageUploadButtonWrapper,
  ModalWrapper,
} from "@/components/settings/profile/profile-picture/style"

export default function ProfilePicture() {
  const [open, setOpen] = React.useState(false)

  const [previewImage, setPreviewImage] = React.useState<string | null>()

  const { profile } = useAuth()

  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) {
      return
    }

    const file = files[0]

    if (!file) {
      return
    }

    if (file.size > 5000000) {
      toast.warning("Max image size is 5MB.")
      return
    }

    const fileReader = new FileReader()

    fileReader.addEventListener("load", () => {
      setPreviewImage(fileReader.result as string)

      setOpen(true)

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    })

    fileReader.readAsDataURL(file)
  }

  return (
    <div>
      <CardHeaderWrapper>
        <CardHeaderText>Profile Picture</CardHeaderText>
      </CardHeaderWrapper>

      <CardLayoutWrapper>
        <CardLayoutContainer>
          <CardLayoutOverlay>
            <CardContentWrapper>
              <Dialog
                open={open}
                onOpenChange={(e) => {
                  setOpen(e)
                }}
              >
                <DialogPortal>
                  <DialogOverlay
                    style={{
                      overflowY: "auto",
                    }}
                  />

                  <ModalWrapper
                    onEscapeKeyDown={(event) => event.preventDefault()}
                    onPointerDownOutside={(event) => event.preventDefault()}
                  >
                    <ProfilePictureForm
                      previewImage={previewImage!}
                      onCancel={() => {
                        setOpen(false)
                        setPreviewImage(null)
                      }}
                    />
                  </ModalWrapper>
                </DialogPortal>
              </Dialog>

              <ImageSettingsWrapper>
                <div>
                  <ImageSettingsContainer data-a-target="profile-image">
                    <Image
                      src={
                        profile?.image.url
                          ? profile.image.url
                          : "/avatar/user-default-picture.png"
                      }
                    />
                  </ImageSettingsContainer>
                </div>
              </ImageSettingsWrapper>

              <ImageInputContentWrapper>
                <Input
                  id={"profile-picture"}
                  style={{
                    display: "none",
                  }}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  ref={fileInputRef}
                  onChange={(event) => {
                    handleSelectImage(event)
                  }}
                />

                <ImageUploadButtonWrapper>
                  <ImageUploadButton htmlFor={"profile-picture"} as={"label"}>
                    <ImageUploadButtonContainer>
                      <ImageUploadButtonOverlay>
                        <ImageUploadButtonText>
                          Add Profile Picture
                        </ImageUploadButtonText>
                      </ImageUploadButtonOverlay>
                    </ImageUploadButtonContainer>
                  </ImageUploadButton>
                </ImageUploadButtonWrapper>

                <ImageSettingsDescriptionWrapper>
                  <ImageSettingsDescriptionText>
                    Must be JPEG or PNG and cannot exceed 10MB.
                  </ImageSettingsDescriptionText>
                </ImageSettingsDescriptionWrapper>
              </ImageInputContentWrapper>
            </CardContentWrapper>
          </CardLayoutOverlay>
        </CardLayoutContainer>
      </CardLayoutWrapper>
    </div>
  )
}
