import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { spinKeyframes } from "@/styles/abstract/_mixins"

export const AccountRecoveryWrapper = styled.div`
  max-width: 460px;
`

export const TitleText = styled.p`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 600;
`

export const Text2Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Text2Text = styled.p`
  font-size: 18px;
`

export const HighlightText = styled.span`
  font-weight: 600;
`

export const Text3Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const InputPlaceholderWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
`

export const InputPlaceholderContainer = styled.div`
  position: relative;

  display: flex;
  flex-flow: column;
  flex-grow: 1;

  font-size: 13px;
`

export const LabelWrapper = styled.div`
  flex-shrink: 0;
`

export const LabelContainer = styled.div`
  margin-bottom: 5px;
`

export const LabelText = styled.label`
  color: #f7f7f8;

  font-weight: 700;
`

export const InputIndicateWrapper = styled.div`
  flex-grow: 1;
`

export const InputIndicateContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputIndicateTextWrapper = styled.div`
  margin-right: 5px;
`

export const InputIndicateText = styled.p`
  color: #adadb8;

  font-size: 18px;
  font-weight: 600;
`

export const BackButtonWrapper = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  user-select: none;

  transition: none;

  &:hover {
    background-color: hsla(var(--color-opac-gd-2));

    text-decoration: none;

    cursor: pointer;
  }
`

export const BackButtonContainer = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const BackButtonOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;
`

export const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1600px;
  }
`

export const ButtonGroupContainer = styled.div`
  display: inline-flex;

  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const ResetPasswordButtonWrapper = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  max-width: 100%;
  width: 100%;
  height: 30px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  &:not([disabled]):hover:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`

export const GetUsernameButtonWrapper = styled(Button)`
  color: hsl(var(--foreground));
  background-color: hsla(var(--color-opac-gd-1));

  width: fit-content;
  height: 30px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  &:not([disabled]):hover:hover {
    background-color: hsla(var(--color-opac-gd-2));
  }
`

export const ButtonGroup = styled.div`
  display: flex;

  margin-top: 20px;
  margin-bottom: 20px;
`

export const DoneBtnWrapper = styled.div`
  margin-right: 10px;
`

export const DoneBtnContainer = styled(Link)`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  height: 30px;

  border-radius: 4px;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  text-decoration: none;
  white-space: nowrap;

  user-select: none;

  overflow: hidden;

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
