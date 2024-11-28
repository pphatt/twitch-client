"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import type { User } from "@modules/user/domain/entity/user.entity"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import styles from "@/app/(admin)/staff/admin/user/details/[userId]/_components/edit-user/style.module.scss"

interface EditUserProps {
  user: User
}

const MAX_FILE_SIZE = 5000000
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

const thirteenYearsAgo = new Date()
thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13)

const editUserSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  username: z.string().min(1, { message: "User's name is required" }),
  displayName: z.string().min(1, { message: "User's name is required" }),
  role: z.string().min(1, { message: "User's role must be assigned" }),
  dob: z.string().refine(
    (dob) => {
      const enteredDate = new Date(dob)
      return enteredDate <= thirteenYearsAgo
    },
    {
      message: "*You must be at least 13 years old.",
    }
  ),
  image: z
    .custom<File>((val) => val instanceof File, "Please upload a file")
    .refine((file) => file?.size <= MAX_FILE_SIZE)
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Please choose .jpg, .jpeg and .png format files only",
    })
    .optional(),
  phoneNumber: z
    .string()
    .regex(new RegExp("^[0-9]{6,15}(-[0-9])?$"), {
      message: "Phone must be contain only number",
    })
    .min(10, {
      message: "Minimum digits of a phone number is 11",
    })
    .max(11, {
      message: "Maximum digits of a phone number is 11",
    }),
})

type EditUserInputs = z.infer<typeof editUserSchema>

export default function EditUser({ user }: EditUserProps) {
  const [previewImage, setPreviewImage] = React.useState<string | null>(
    user.image.url
  )

  // const [isPending, startTransition] = React.useTransition()

  const form = useForm<EditUserInputs>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      email: user.email ?? "",
      username: user.username ?? "",
      displayName: user.displayName ?? "",
      role: user.roles[0] ?? "",
      phoneNumber: user.phoneNumber ?? "",
    },
  })

  function onSubmit(data: EditUserInputs) {}

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
    })

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={styles["edit-user-card-wrapper"]}>
      <div className={styles["header-info-section"]}>
        <Avatar className={styles["avatar"]}>
          <AvatarImage
            src={previewImage ?? ""}
            alt={""}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />

          <AvatarFallback>
            {user.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className={styles["username-info-wrapper"]}>
          <div className={styles["username-text"]}>
            {user.displayName !== "" ? user.displayName : user.username}
          </div>

          <div className={styles["sub-username-text-wrapper"]}>
            <div className={styles["sub-username-text"]}>@{user.username}</div>

            <Icons.dot />

            <div className={styles["sub-username-text"]}>
              {user.roles[0] === "Admin" ? "Administrator" : "User"}
            </div>
          </div>
        </div>
      </div>

      <div className={styles["description-wrapper"]}>
        <div className={styles["description-text-header"]}>bio</div>

        <p className={styles["bio-text"]}>
          {user.bio !== ""
            ? user.bio
            : `We don't know much about them, but we're sure ${user.displayName !== "" ? user.displayName : user.username} is great.`}
        </p>

        <div className={styles["join-at-wrapper"]}>
          <Icons.check />

          <p className={styles["join-at-text"]}>
            Since {format(user.createdAt, "PPP")}
          </p>
        </div>
      </div>

      <div className={styles["personal-data-wrapper"]}>
        <div className={styles["personal-data-header"]}>Personal Data</div>

        <Form {...form}>
          <form className={styles["personal-data-form"]}>
            <div className={styles["personal-data-content-wrapper"]}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className={styles["form-item"]}>
                    <FormLabel className={styles["form-label"]}>
                      username
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className={styles["form-input"]} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem className={styles["form-item"]}>
                    <FormLabel className={styles["form-label"]}>
                      Display name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className={styles["form-input"]} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className={styles["form-item"]}>
                    <FormLabel className={styles["form-label"]}>
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className={styles["form-input"]} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className={styles["form-item"]}>
                    <FormLabel className={styles["form-label"]}>
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={"date"}
                        className={styles["form-input"]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className={styles["submit-btn"]}>
              <span>Save changes</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
