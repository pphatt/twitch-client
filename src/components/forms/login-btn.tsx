"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import LogInForm from "@/components/forms/login-form"
import styles from "@/styles/components/forms/login-btn.module.scss"

export default function LoginBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={styles["login-button"]}>
          <div className={styles["auth-inner-button"]}>
            <div>Login</div>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
        className={styles["login-modal-wrapper"]}
      >
        <LogInForm />
      </DialogContent>
    </Dialog>
  )
}
