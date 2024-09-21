"use client"

import * as React from "react"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  AuthTextContainer,
  AuthTextOverlay,
  AuthTextWrapper,
  LoginModalContainer,
  LoginModalWrapper,
  TextDefault,
  TextHighlight,
  TextSmall,
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

        <AuthTextWrapper>
          <AuthTextContainer>
            <AuthTextOverlay>
              <TextDefault>
                <TextHighlight>Limitless</TextHighlight> entertainment awaits
              </TextDefault>

              <TextSmall>where boredom bites the dust</TextSmall>
            </AuthTextOverlay>
          </AuthTextContainer>
        </AuthTextWrapper>
      </LoginModalWrapper>
    </Dialog>
  )
}
