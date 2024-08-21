import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const IdentityPreviewButton = styled(Button)`
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  border-radius: 4px;

  padding: 0;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));
  }

  &:active {
    background-color: hsla(var(--color-background-interactable-active));
  }
`

export const IdentityTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const ChatBadgeWrapper = styled.div`
  display: inline;
`

export const IdentityTextContainer = styled.span`
  font-weight: 600;
`

export const EditAppearanceButton = styled.div`
  display: flex;
  align-items: center;
`

export const EditAppearanceIcon = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: currentColor;

  svg {
    width: 20px;
    height: 20px;
  }
`
