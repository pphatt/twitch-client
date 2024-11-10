import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ResendEmailConfirmWrapper = styled.div`
  display: none;

  margin-top: 20px;

  @media (min-width: 431px) {
    display: block;
  }
`

export const ResendEmailConfirmButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: hsla(var(--color-opac-gd-1));

  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  overflow: hidden;
  white-space: nowrap;

  user-select: none;

  &:hover {
    background-color: hsla(var(--color-background-interactable-hover));

    text-decoration: none;
    cursor: pointer;
  }
`

export const ResendEmailConfirmButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ResendEmailConfirmButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
`
