"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icons } from "@/components/icons"
import styles from "@/app/(admin)/staff/admin/user/_components/add-user/style.module.scss"
import { DobInput } from "@/app/(admin)/staff/admin/user/_components/dob-input"

const thirteenYearsAgo = new Date()
thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13)

const addUserSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  username: z.string().min(1, { message: "Username is required" }),
  displayName: z.string().min(1, { message: "Display name is required" }),
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
  phoneNumber: z
    .string()
    .regex(new RegExp("^[0-9]{6,15}(-[0-9])?$"), {
      message: "Phone must be contain only number",
    })
    .min(10, {
      message: "Enter a valid phone number",
    })
    .max(11, {
      message: "Maximum digits of a phone number is 11",
    }),
})

export type AddUserInputs = z.infer<typeof addUserSchema>

export default function AddUser() {
  const [open, setOpen] = React.useState(false)
  const [selectRole, setSelectRole] = React.useState("")

  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddUserInputs>({
    resolver: zodResolver(addUserSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      displayName: "",
      role: "",
      dob: "",
      phoneNumber: "",
    },
  })

  function onSubmit(data: AddUserInputs) {
    // let payload: AddUserInputs = { ...data }
    //
    // if (
    //   selectRole === "ADMIN" ||
    //   selectRole === "MARKETING_MANAGER" ||
    //   selectRole === "GUEST"
    // ) {
    //   payload = {
    //     email: data.email,
    //     role: data.role,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     city: data.city,
    //     address: data.address,
    //     phoneNumber: data.phoneNumber,
    //   }
    // }
    //
    // startTransition(async () => {
    //   try {
    //     const req = await createUser(payload)
    //
    //     if ("success" in req) {
    //       setOpen(false)
    //       router.refresh()
    //
    //       toast.success("Create new user successfully")
    //     } else {
    //       toast.warning(req.error)
    //     }
    //   } catch (e) {
    //     toast.error("Something went wrong. Try again!")
    //   }
    // })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
        form.reset()
      }}
    >
      <DialogTrigger asChild>
        <Button $variant="outline" className={styles["add-user-btn"]}>
          <Icons.circlePlus />
          <span>Add User</span>
        </Button>
      </DialogTrigger>

      <DialogContent className={styles["dialog-content"]}>
        <DialogHeader className={styles["dialog-header"]}>
          <DialogTitle>Add new user</DialogTitle>
          <DialogDescription>
            Add new user here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className={styles["form"]}
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={styles["form-item"]}>
                  <FormLabel className={styles["form-label"]}>Email</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder={"Enter email"}
                      className={styles["form-input"]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className={styles["form-item"]}>
                  <FormLabel className={styles["form-label"]}>
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter username"
                      className={styles["form-input"]}
                    />
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
                    <Input
                      {...field}
                      placeholder="Enter display name"
                      className={styles["form-input"]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className={styles["form-item"]}>
                  <FormLabel className={styles["form-label"]}>
                    Date of birth
                  </FormLabel>

                  <FormControl>
                    <DobInput {...field} className={styles["form-input"]} />
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
                      placeholder="Enter phone number"
                      className={styles["form-input"]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className={styles["form-item"]}>
                  <FormLabel className={styles["form-label"]}>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value)
                        setSelectRole(value)
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className={styles["select-btn"]}>
                          <SelectValue placeholder="Select user's role" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {isPending && (
                  <Icons.spinner
                    className={styles["icon"]}
                    aria-hidden="true"
                  />
                )}
                <span>Create</span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
