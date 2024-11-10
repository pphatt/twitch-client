import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"
import type { InputError } from "@/components/ui/input"
import { InputOTPGroup, InputOTPSlot } from "@/components/ui/otp-input"

export const OTPContainer = styled(InputOTPGroup)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 100%;
`

const slotError = css`
  border-color: rgba(233, 17, 60);

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgba(233, 17, 60, 0.05);

  &:hover {
    border-color: rgba(233, 17, 60);
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 1px 2px 0 rgba(233, 17, 60, 0.05);
  }
`

export const OTPSlot = styled(InputOTPSlot)<InputError>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(20, 21, 23);

  width: 65px;
  height: 2.75rem;

  border-radius: 0.25rem;
  border: 2px solid rgba(73, 77, 85);

  padding: 0.5rem 1rem;

  font-size: 1.235rem;
  line-height: 1.25rem;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 2px 0 rgba(0, 0, 0, 0.05);

  ${({ $error }) => $error && slotError};
`

export const ResendEmailConfirmWrapper = styled.div`
  display: none;

  margin-top: 20px;

  @media (min-width: 431px) {
    display: block;
  }
`

export const ResendEmailConfirmButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: hsla(var(--color-opac-gd-1));

  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  overflow: hidden;
  white-space: nowrap;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));

    text-decoration: none;
    cursor: pointer;
  }
`

export const ResendEmailConfirmButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ResendEmailConfirmButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
`

export const SubmitLayoutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  margin-top: 20px;
`
