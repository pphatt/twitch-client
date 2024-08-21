import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ChatSettingButton = styled(Button)`
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
