import * as React from "react"

import {
  IconContainer,
  IconOverlay,
  IconWrapper,
  ToastSuccessLayoutContainer,
  ToastSuccessLayoutOverlay,
  ToastSuccessLayoutWrapper,
  ToastText,
  ToastTextContainer,
  ToastTextWrapper,
} from "@/components/custom-toast/toast-success/style"
import { Icons } from "@/components/icons"

interface ToastSuccessProps extends React.ComponentPropsWithoutRef<"div"> {}

export default function ToastSuccess({
  children,
  ...props
}: ToastSuccessProps) {
  return (
    <ToastSuccessLayoutWrapper {...props}>
      <ToastSuccessLayoutContainer>
        <ToastSuccessLayoutOverlay>
          <IconWrapper>
            <IconContainer>
              <IconOverlay>
                <Icons.success />
              </IconOverlay>
            </IconContainer>
          </IconWrapper>

          <ToastTextWrapper>
            <ToastTextContainer>
              <ToastText>{children}</ToastText>
            </ToastTextContainer>
          </ToastTextWrapper>
        </ToastSuccessLayoutOverlay>
      </ToastSuccessLayoutContainer>
    </ToastSuccessLayoutWrapper>
  )
}
