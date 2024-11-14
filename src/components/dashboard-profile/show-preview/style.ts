import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ShowPreviewButtonRowWrapper = styled.div`
  margin-bottom: 10px;
`

export const ShowPreviewButtonRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ShowPreviewButton = styled(Button)`
  color: hsl(var(--color-twitch-orange-11));
  background-color: transparent;

  height: 30px !important;

  border-radius: 4px !important;

  padding: 0 !important;

  font-size: 13px !important;
  font-weight: 600 !important;

  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  text-decoration: none;

  vertical-align: middle;

  &:hover {
    color: hsl(var(--foreground));
    background-color: hsla(var(--color-background-interactable-hover));
  }
`

export const ShowPreviewButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ShowPreviewButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`
