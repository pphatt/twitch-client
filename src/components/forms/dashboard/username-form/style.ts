import styled, { css } from "styled-components"

import { Button } from "@/components/ui/button"
import { FormItem, FormLabel } from "@/components/ui/form"
import { Input, type InputError } from "@/components/ui/input"
import { errorCss } from "@/components/ui/input/style"
import { Icons } from "@/components/icons"
import { spinKeyframes } from "@/styles/abstract/_mixins"

export const FormLayoutWrapper = styled.div`
  height: 100%;
  padding-right: 0.5rem;
  margin: 1.75rem 0 0 0;

  overflow-y: scroll;
`

export const FormLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
`

export const FormLayoutOverlay = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% + 0.75rem);
  max-height: 100%;
  height: 100%;

  overflow-x: hidden;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const FormContentWrapper = styled(FormItem)`
  &:first-child {
    margin-top: 0;
  }

  &:not(:first-child) {
    border-top: 1px solid rgba(83, 83, 95, 0.48);

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
  color: hsl(var(--color-hinted-grey-15)) !important;

  margin-left: 0;

  font-size: 13px;
  font-weight: 700;
`

export const FormContentInputWrapper = styled.div`
  position: relative;
`

const shareInputCss = css`
  background-color: hsl(var(--background));

  max-width: 100%;
  height: 30px;

  //border: transparent;
  border-radius: 4px;

  font-size: 13px;

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

export const FormContentInput = styled(Input)<InputError>`
  ${shareInputCss}

  ${({ $error }) => $error && errorCss};
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

export const SubmitLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`

export const NormalBtn = styled(Button)`
  color: hsl(var(--foreground-alt-2));
  background-color: rgba(83, 83, 95, 0.38);

  height: 30px;

  border-radius: 4px;

  padding: 0 10px;

  font-size: 13px;
  font-weight: 600;

  &:not([disabled]):hover:hover {
    background-color: rgba(83, 83, 95, 0.38);
  }
`

export const SubmitBtn = styled(Button)<{
  $isSubmitting: boolean
}>`
  color: #fff ${({ $isSubmitting }) => $isSubmitting && "!important"};
  background-color: hsl(var(--color-twitch-orange-11))
    ${({ $isSubmitting }) => $isSubmitting && "!important"};

  height: 30px;

  border-radius: 4px;

  padding: 0 10px;

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

export const IconSpinner = styled(Icons.spinner)`
  width: 1rem;
  height: 1rem;

  margin-right: 0.5rem;

  animation-name: ${spinKeyframes};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
