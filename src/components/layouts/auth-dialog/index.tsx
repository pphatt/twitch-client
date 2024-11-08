"use client"

import * as React from "react"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  LoginModalContainer,
  LoginModalWrapper,
} from "@/components/layouts/auth-dialog/style"
import AuthTabControl from "@/components/layouts/auth-tab-control"

interface AuthDialogProps {
  children: React.ReactNode
  currentTab: "log-in" | "sign-up"
}

export default function AuthDialog({ children, currentTab }: AuthDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <LoginModalWrapper
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
      >
        <LoginModalContainer>
          <AuthTabControl currentTab={currentTab} />
        </LoginModalContainer>
      </LoginModalWrapper>
    </Dialog>
  )
}
