import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"
import type { InputError } from "@/components/ui/input"
import { PasswordInput } from "@/components/forms/auth/password-input"

export const AccountRecoveryWrapper = styled.div`
  max-width: 460px;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 40px;
`

export const TitleText = styled.p`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
`

export const Text2Wrapper = styled.div`
  padding-top: 10px;
`

export const Text2Text = styled.p``

export const Text2TextWarning = styled.p`
  color: #ff8280;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`

export const InputContainer = styled.div<{ $paddingBottom?: boolean }>`
  width: 100%;

  padding-top: 10px;
  ${({ $paddingBottom }) => $paddingBottom && "padding-bottom: 10px"}
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 20px;

  margin-bottom: 5px;
`

export const LabelContainer = styled.div`
  flex-grow: 1;
`

export const LabelText = styled.label`
  color: #f7f7f8;

  font-size: 13px;
  font-weight: 700;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const InputPassword = styled(PasswordInput)<InputError>`
  background-color: hsl(var(--background));

  max-width: 100%;
  height: 30px;

  border-radius: var(--radius);

  padding: 5px 50px 5px 10px;

  font-size: 13px;
  font-weight: 400;

  appearance: none;

  overflow: hidden;
  white-space: nowrap;

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  &:focus,
  &:focus:hover {
    border-color: hsl(var(--color-twitch-orange-11));

    outline-offset: -1px;

    box-shadow:
      0 0 0 2px hsl(var(--color-twitch-orange-11)),
      inset 0 0 0 2px hsl(var(--color-twitch-orange-11));
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: #ff4f4d;

      box-shadow: inset 0 0 0 1px #ff4f4d;

      &:hover {
        border-color: #ff4f4d;
        box-shadow: inset 0 0 0 1px #ff4f4d;
      }
    `};
`

export const FormMessageWrapper = styled.div`
  height: 0;

  overflow: hidden;

  transition: height 0.25s linear 0.1s;
`

export const FormMessageContainer = styled.div`
  padding-top: 5px;
`

export const FormMessage = styled.p`
  color: #ff8280;

  font-size: 12px;
`

export const SubmitBtnWrapper = styled.div``

export const SubmitBtn = styled(Button)<{
  $isSubmitting: boolean
}>`
  color: #fff ${({ $isSubmitting }) => $isSubmitting && "!important"};
  background-color: hsl(var(--color-twitch-orange-11))
    ${({ $isSubmitting }) => $isSubmitting && "!important"};

  max-width: 100%;
  width: 100%;
  height: 30px;

  padding: 5px 10px;

  font-size: 13px;
  font-weight: 600;

  &:disabled {
    color: hsl(var(--foreground-alt-2));

    background-color: rgba(83, 83, 95, 0.38);

    &:hover {
      background-color: rgba(83, 83, 95, 0.38);
    }
  }

  &:not([disabled]):hover:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`
