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

export const AuthTextWrapper = styled.div`
  position: relative;

  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;

  background: black;

  height: 100%;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  @media (min-width: 1024px) {
    display: flex;
  }
`

export const AuthTextContainer = styled.div`
  position: relative;

  width: 100%;
  height: 70px;

  z-index: 1;

  transform: translateY(-3.5rem);
`

export const AuthTextOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 70px;

  font-weight: 700;
  line-height: 1.2;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 0.5s;
`

export const TextDefault = styled.span`
  font-size: 32px;
`

export const TextHighlight = styled.span`
  color: hsl(var(--color-twitch-orange-11));
`

export const TextSmall = styled.span`
  font-size: 1.25rem;
  line-height: 1.75rem;
`
