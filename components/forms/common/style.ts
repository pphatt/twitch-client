import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button/button"
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form/form"
import { Input } from "@/components/ui/input/input"
import { PasswordInput } from "@/components/forms/password-input/password-input"
import { Icons } from "@/components/icons"
import { spinKeyframes } from "@/styles/abstract/style-animation"

export const FormLayoutContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const FormContentWrapper = styled(FormItem)`
  &:first-child {
    margin-top: 10px;
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
`

export const FormContentLabelWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 5px;
`

export const FormContentLabelContainer = styled.div`
  flex: 1;
`

export const FormContentLabel = styled(FormLabel)`
  color: hsl(var(--color-hinted-grey-15));

  margin-left: 0;

  font-weight: 700;
`

export const FormContentInputWrapper = styled.div`
  position: relative;
`

const shareInputCss = css`
  background-color: hsl(var(--background));

  max-width: 100%;
  height: 40px;

  border: transparent;
  border-radius: var(--radius);

  appearance: none;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

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
`

export const FormContentInput = styled(Input)`
  ${shareInputCss}
`

export const FormPasswordInput = styled(PasswordInput)`
  ${shareInputCss}
`

export const FormMessageWrapper = styled(FormMessage)`
  margin-top: 8px;
`

export const SubmitBtn = styled(Button)`
  color: hsl(var(--foreground-alt-2));
  background-color: rgba(83, 83, 95, 0.38);

  max-width: 100%;
  width: 100%;
  height: 30px;

  padding: 5px 8px;

  &:not([disabled]):hover:hover {
    background-color: rgba(83, 83, 95, 0.38);
  }
`

export const IconSpinner = styled(Icons.spinner)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.5rem;

  animation-name: ${spinKeyframes};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
