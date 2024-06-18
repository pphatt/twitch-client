"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { sleep } from "@/lib/utils"
import { authSignUpSchema } from "@/lib/validation/auth"
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
import { PasswordInput } from "@/components/forms/password-input"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/forms/signup-form.module.scss"

type Inputs = z.infer<typeof authSignUpSchema>

export default function SignUpForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  // register, handleSubmit, formState
  // default-values for controlled form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSignUpSchema),
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
        await sleep(1000)
      } catch (err) {
        // catchError(err)
        console.error(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className={styles["form-layout-container"]}
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className={styles["form-content-wrapper"]}>
              <div className={styles["form-content-label-wrapper"]}>
                <div className={styles["form-content-label-container"]}>
                  <FormLabel className={styles["form-content-label"]}>
                    Username
                  </FormLabel>
                </div>
              </div>

              <div className={styles["form-content-input-wrapper"]}>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Username"
                    className={styles["form-content-input"]}
                  />
                </FormControl>
              </div>

              <FormMessage className={styles["form-message"]} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className={styles["form-content-wrapper"]}>
              <div className={styles["form-content-label-wrapper"]}>
                <div className={styles["form-content-label-container"]}>
                  <FormLabel className={styles["form-content-label"]}>
                    Email
                  </FormLabel>
                </div>
              </div>

              <div className={styles["form-content-input-wrapper"]}>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    className={styles["form-content-input"]}
                  />
                </FormControl>
              </div>

              <FormMessage className={styles["form-message"]} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={styles["form-content-wrapper"]}>
              <div className={styles["form-content-label-wrapper"]}>
                <div className={styles["form-content-label-container"]}>
                  <FormLabel className={styles["form-content-label"]}>
                    Password
                  </FormLabel>
                </div>
              </div>

              <div className={styles["form-content-input-wrapper"]}>
                <FormControl>
                  <PasswordInput
                    placeholder="**********"
                    {...field}
                    className={styles["form-content-input"]}
                  />
                </FormControl>
              </div>

              <FormMessage className={styles["form-message"]} />
            </FormItem>
          )}
        />

        <div className={styles["term-layout-wrapper"]}>
          <p className={styles["term-text"]}>
            <span>
              By clicking Sign Up, you are agreeing to Stream site service’s{" "}
            </span>
            <Link href={"/"}>Terms of Service</Link>
            <span> and are acknowledging our </span>
            <Link href={"/"}>Privacy Notice</Link>
            <span> applies.</span>
          </p>
        </div>

        <div className={styles["submit-layout-wrapper"]}>
          <Button
            type={"submit"}
            className={styles["submit-btn"]}
            disabled={
              !(form.getValues("username") && form.getValues("password")) ||
              isPending
            }
          >
            {isPending && (
              <Icons.spinner className={styles["icon"]} aria-hidden="true" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  )
}
