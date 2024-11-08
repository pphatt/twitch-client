import styled from "styled-components"

import { DialogContent } from "@/components/ui/dialog"

export const LoginModalWrapper = styled(DialogContent)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 0 !important;

  background-color: hsl(var(--background)) !important;

  max-width: 100% !important;
  width: 100% !important;

  border: 0 solid transparent !important;
  border-radius: var(--radius) !important;

  padding: 0 !important;

  @media (min-width: 768px) {
    width: 768px !important;
    height: 832px !important;
  }

  @media (min-width: 1024px) {
    width: 1006px !important;
  }

  @media (min-width: 1280px) {
    width: 1060px !important;
  }
`

export const LoginModalContainer = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  max-height: 100dvh;
  height: 100%;

  @media (min-width: 768px) {
    height: 832px;
  }

  @media (min-width: 1024px) {
    width: 24rem;
  }

  @media (min-width: 1280px) {
    width: 440px;
  }
`
