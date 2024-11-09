"use client"

import * as React from "react"

import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"
import {
  DialogClose,
  LoginModalWrapper,
  ModalHeaderContainer,
  ModalHeaderWrapper,
} from "@/components/layouts/auth-dialog/style"
import AuthTabControl from "@/components/layouts/auth-tab-control"

interface AuthDialogProps {
  children: React.ReactNode
  currentTab: "log-in" | "sign-up"
}

export default function AuthDialog({ children, currentTab }: AuthDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay
          style={{
            overflowY: "auto",
          }}
        />

        <LoginModalWrapper
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          <ModalHeaderWrapper>
            <ModalHeaderContainer as={"div"}>
              <h2>Sign in to Twitch</h2>

              <DialogClose>
                <Icons.closeX />
                <span>Close</span>
              </DialogClose>
            </ModalHeaderContainer>
          </ModalHeaderWrapper>

          <AuthTabControl currentTab={currentTab} />
        </LoginModalWrapper>
      </DialogPortal>
    </Dialog>
  )
}
