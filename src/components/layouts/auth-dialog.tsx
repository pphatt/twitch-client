"use client"

import * as React from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import AuthTabControl from "@/components/layouts/auth-tab-control"
import styles from "@/styles/components/layouts/auth-dialog.module.scss"

interface AuthDialogProps {
  children: React.ReactNode
  currentTab: "log-in" | "sign-up"
}

export default function AuthDialog({ children, currentTab }: AuthDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
        className={styles["login-modal-wrapper"]}
      >
        <AuthTabControl currentTab={currentTab} />
      </DialogContent>
    </Dialog>
  )
}
