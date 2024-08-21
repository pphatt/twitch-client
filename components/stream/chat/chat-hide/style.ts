import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ChatHideWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: hsl(var(--foreground));

  width: 100%;
  height: 100%;

  border-left: 1px solid hsla(var(--color-opac-gd-2));
`

export const ChatHideTextWrapper = styled.div`
  margin-bottom: 10px;
`

export const ChatHideText = styled.p`
  font-size: 14px;
`

export const ChatHideButton = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  width: fit-content;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  overflow: hidden;
  white-space: nowrap;

  text-decoration: none;

  user-select: none;

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const ChatHideButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ChatHideLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`
