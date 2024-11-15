import * as DialogPrimitive from "@radix-ui/react-dialog"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { spinKeyframes } from "@/styles/abstract/_mixins"

export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;

  text-align: left;
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const HeaderText = styled.h4`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;

  vertical-align: middle;
`

export const DialogClose = styled(DialogPrimitive.Close)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;

  gap: 0.5rem;

  color: rgb(255 255 255);
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  font-size: 1rem;
  line-height: 1;
  font-weight: 600;

  white-space: nowrap;
  user-select: none;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);

    opacity: 1;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 600px;
  height: 320px;

  background-color: #0a0a0b;

  border-top: 1px solid hsla(var(--color-opac-gd-2));
  border-bottom: 1px solid hsla(var(--color-opac-gd-2));

  overflow: hidden !important;
`

export const PreviewImageWrapper = styled.div`
  position: relative;

  display: flex;

  flex-shrink: 0;

  width: 300px;
  height: 300px;

  border-radius: 9999px;

  overflow: hidden;
`

export const PreviewImage = styled.img`
  max-width: 100%;

  width: 100%;
  height: 100%;

  aspect-ratio: 1/1;

  object-fit: cover;
  object-position: top;
`

export const ActionRowWrapper = styled.div`
  background-color: hsl(var(--background-alt-2));
`

export const ActionRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
`

export const NormalBtn = styled(Button)`
  color: hsl(var(--foreground-alt-2));
  background-color: rgba(83, 83, 95, 0.38);

  height: 30px;

  border-radius: 4px;

  padding: 0 10px;
  margin-left: 10px;

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
