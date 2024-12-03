"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CreatePostRequestDtoSchema,
  type CreatePostRequestDto,
} from "@modules/user/presentation/http/dto/request/social/create-post.request.dto"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"

import { Form } from "@/components/ui/form"
import styles from "@/components/layouts/social/create-post/create-post-page/style.module.scss"

// Import FilePond styles
import "filepond/dist/filepond.min.css"

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { registerPlugin, type FilePondFile } from "filepond"
import { FilePond } from "react-filepond"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
)

export default function CreatePostPage() {
  const router = useRouter()

  const [files, setFiles] = React.useState<FilePondFile[]>([])
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<CreatePostRequestDto>({
    resolver: zodResolver(CreatePostRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  })

  const onSubmit = (data: CreatePostRequestDto) => {
    if (
      (form.watch("content").length === 0 && files.length === 0) ||
      isPending
    ) {
      return
    }

    startTransition(async () => {
      try {
        const formData = new FormData()

        formData.set("data", JSON.stringify(data))

        for (const file of files) {
          formData.append("images", file.file)
        }

        await SocialRepository.createPost(formData)

        toast.success("Create new post successfully", {
          duration: 5000,
          position: "top-right",
        })

        router.refresh()
        form.reset()
        setFiles([])
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

  return (
    <div className={styles["page-layout-wrapper"]}>
      <div className={styles["page-layout-container"]}>
        <div className={styles["page-layout-overlay"]}>
          <Form {...form}>
            <form
              className={styles["page-inner-layout-wrapper"]}
              onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
              <div className={styles["page-content-wrapper"]}>
                <div className={styles["page-content-header-wrapper"]}>
                  <h1 className={styles["page-content-header-text"]}>
                    Post content~
                  </h1>
                </div>

                <div className={styles["page-content-container"]}>
                  <div className={styles["form-item-wrapper"]}>
                    <span className={styles["form-item-span"]}>
                      Post Content
                    </span>

                    <div className={styles["form-item-textarea-wrapper"]}>
                      <div className={styles["form-item-textarea-container"]}>
                        <TextareaAutosize
                          placeholder="Please enter text"
                          className={styles["content-textarea"]}
                          minRows={5}
                          maxLength={1000}
                          {...form.register("content")}
                        />
                      </div>

                      <div className={styles["word-count"]}>
                        {form.watch("content").length}/1000
                      </div>
                    </div>
                  </div>

                  <div className={styles["form-item-wrapper"]}>
                    <span className={styles["form-item-span"]}>
                      Upload image
                    </span>

                    <div className={styles["form-item-image-upload-tips"]}>
                      You can upload up to 10 images at the same time (JPG, PNG,
                      JPEG).
                    </div>

                    <div className={styles["form-item-image-upload-wrapper"]}>
                      <FilePond
                        className={styles["upload-files"]}
                        // @ts-expect-error @ts-ignore
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        name="images"
                        allowReorder={true}
                        // set allowed file types with image/*
                        acceptedFileTypes={[
                          "image/jpeg",
                          "image/jpg",
                          "image/png",
                        ]}
                        maxFiles={10}
                        onreorderfiles={(files) => {
                          setFiles(files)
                        }}
                        labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["publish-btn-wrapper"]}>
                <Button
                  disabled={
                    (form.watch("content").length === 0 &&
                      files.length === 0) ||
                    isPending
                  }
                  type={"submit"}
                >
                  {isPending && (
                    <Icons.spinner
                      className={styles["icon"]}
                      aria-hidden="true"
                    />
                  )}
                  Publish
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
