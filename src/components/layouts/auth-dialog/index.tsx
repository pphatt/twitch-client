"use client"

import * as React from "react"

import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import OtpForm from "@/components/forms/otp-form"
import { Icons } from "@/components/icons"
import {
  DialogClose,
  ModalHeaderContainer,
  ModalHeaderWrapper,
  ModalWrapper,
  VerificationCodeDescriptionEmail,
  VerificationCodeDescriptionText,
} from "@/components/layouts/auth-dialog/style"
import AuthTabControl from "@/components/layouts/auth-tab-control"

interface AuthDialogProps {
  children: React.ReactNode
  currentTab: "log-in" | "sign-up"
}

const DEFAULT_OTP_STATE = {
  initial: false,
  email: "",
  username: "",
}

export default function AuthDialog({ children, currentTab }: AuthDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [renderOtp, setRenderOtp] =
    React.useState<typeof DEFAULT_OTP_STATE>(DEFAULT_OTP_STATE)

  const [tab, setTab] = React.useState(currentTab)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay
          style={{
            overflowY: "auto",
          }}
        />

        <ModalWrapper
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          {renderOtp.initial ? (
            <>
              <ModalHeaderWrapper>
                <ModalHeaderContainer as={"div"}>
                  <h2>Enter your verification code</h2>

                  <DialogClose
                    onClick={() => {
                      setRenderOtp(DEFAULT_OTP_STATE)
                    }}
                  >
                    <Icons.closeX />
                    <span>Close</span>
                  </DialogClose>
                </ModalHeaderContainer>
              </ModalHeaderWrapper>

              <VerificationCodeDescriptionText>
                We sent a 6-digit code to{" "}
                <VerificationCodeDescriptionEmail>
                  {renderOtp.email}
                </VerificationCodeDescriptionEmail>
                .
              </VerificationCodeDescriptionText>

              <OtpForm
                userData={{
                  username: renderOtp.username,
                  email: renderOtp.email,
                }}
                back={() => setRenderOtp(DEFAULT_OTP_STATE)}
                redirectToSignIn={() => setTab("log-in")}
              />
            </>
          ) : (
            <>
              <ModalHeaderWrapper>
                <ModalHeaderContainer as={"div"}>
                  {currentTab === "log-in" ? (
                    <h2>Log in to Twitch</h2>
                  ) : (
                    <h2>Join Twitch today</h2>
                  )}

                  <DialogClose
                    onClick={() => {
                      setRenderOtp(DEFAULT_OTP_STATE)
                    }}
                  >
                    <Icons.closeX />
                    <span>Close</span>
                  </DialogClose>
                </ModalHeaderContainer>
              </ModalHeaderWrapper>

              <AuthTabControl currentTab={tab} setRenderOtp={setRenderOtp} />
            </>
          )}
        </ModalWrapper>
      </DialogPortal>
    </Dialog>
  )
}
