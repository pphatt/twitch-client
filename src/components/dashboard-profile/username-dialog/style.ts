import * as DialogPrimitive from "@radix-ui/react-dialog"
import styled from "styled-components"

import { DialogPrimitiveContent } from "@/components/ui/dialog/style"

export const ModalWrapper = styled(DialogPrimitiveContent)`
  display: flex !important;
  align-content: flex-start;
  flex-direction: column;

  gap: 1.75rem !important;

  width: 100vw;
  max-height: 100vh;
  height: 100vh;

  border: 0 !important;

  padding: 0.5rem 1rem 1.25rem;

  overflow: hidden;

  animation-duration: 0.2s !important;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  @supports (max-height: 100dvh) {
    max-height: 100dvh;
  }

  @supports (width: 100dvw) {
    width: 100dvw;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    width: 600px;
    max-height: 90vh;
    height: auto;

    padding: 1.5rem;
  }

  @supports (height: 100dvh) {
    @media (min-width: 1024px) {
      max-height: 90dvh;

      border-radius: 0.25rem;
    }
  }
`

export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;

  color: #fff;

  text-align: left;
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 0.25rem;

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
  margin-top: 30px;
`

export const WarningDescriptionText = styled.span`
  font-size: 13px;
`

export const WarningDescriptionTextHighlight = styled.strong`
  font-size: 13px;
  font-weight: 600;
`
