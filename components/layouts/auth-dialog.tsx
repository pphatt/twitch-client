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
        <div className={styles["login-modal-container"]}>
          <AuthTabControl currentTab={currentTab} />
        </div>

        <div className={styles["auth-text-wrapper"]}>
          <div className={styles["auth-text-container"]}>
            <div className={styles["auth-text-overlay"]}>
              <span className={styles["text-default"]}>
                <span className={styles["text-highlight"]}>Limitless</span>{" "}
                entertainment awaits
              </span>

              <span className={styles["text-sm"]}>
                where boredom bites the dust
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
