import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/common/hint"

export const ShareButtonTooltipWrapper = styled(Hint)`
  border-radius: 4px;

  padding: 3px 6px;

  font-size: 13px;
  line-height: 1.2;
  font-weight: 600;

  &:before {
    position: absolute;
    top: -6px;
    left: -6px;
    content: "";

    width: calc(100% + 12px);
    height: calc(100% + 12px);

    z-index: -1;
  }
`

export const ShareButtonWrapper = styled(Button)`
  color: hsl(var(--color-hinted-grey-14));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  text-decoration: none;
  white-space: nowrap;

  overflow: hidden;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));
  }
`

export const ShareButtonContainer = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const ShareButtonOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ShareContentWrapper = styled(DropdownMenuContent)`
  // temp

  max-width: 90vw;
  //width: 400px !important;
  width: fit-content;
  //min-width: 160px !important;
  min-width: fit-content !important;

  border-radius: 6px;

  padding: 10px;
`

export const ShareTitle = styled.p`
  font-weight: 600;
`

export const ShareContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // temp
  gap: 10px;

  padding: 10px 0;
`

export const SocialButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialButtonContainer = styled.div`
  width: 50px;
  height: 50px;

  transition:
    transform 0.1s ease-out,
    opacity 0.2s ease-out,
    width 0.2s ease-in;

  &:hover {
    transform: translate3d(0, -3px, 0);
  }
`

export const SocialButtonOverlay = styled.div`
  position: relative;

  display: inline-flex;
`

export const SocialLinkWrapper = styled(Link)`
  position: relative;

  &:after {
    position: absolute;
    bottom: 5px;
    left: 0;

    content: "";

    width: 100%;
    height: 10px;

    opacity: 0;

    box-shadow: 0 3px 10px -2px;

    transition:
      transform 0.1s ease-out,
      opacity 0.2s ease-out,
      width 0.2s ease-in;
  }

  & .social-button__link--reddit {
    &:after {
      color: #ff4500;
    }
  }
`

export const SocialButtonText = styled.div`
  padding-top: 5px;
`
