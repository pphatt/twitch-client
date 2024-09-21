import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ChatInputWrapper = styled.div`
  display: block;

  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;

  z-index: 10;
`

export const ChatGapWrapper = styled.div``

export const ChatGapContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`

export const ChatInputContainer = styled.div`
  position: relative;

  display: block;

  z-index: 1;
`

export const ChatInputLayoutWrapper = styled.div`
  display: block;

  border-radius: calc(var(--radius) + 2px);
`

export const ChatInputLayoutContainer = styled.div`
  position: relative;
`

export const ChatInputLayout = styled.div`
  display: block;
`

export const ChatInputInnerWrapper = styled.div`
  background-color: hsl(var(--background));

  border-radius: var(--radius);
`

export const ChatInputInnerContainer = styled.div`
  display: block;

  width: 100%;

  border-radius: var(--radius);
`

export const ChatActionSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
`

export const ChatActionSectionContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`

export const ChatSettingWrapper = styled.div`
  position: relative;

  display: inline-flex;

  z-index: 1;
`

export const ChatSettingButton = styled(Button)`
  color: hsl(var(--foreground));
  background-color: transparent;

  width: 30px;
  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  user-select: none;

  &:hover {
    background-color: rgba(83, 83, 95, 0.48);
  }

  &:focus-within {
    box-shadow: none;
  }
`

export const InnerChatSettingButtonWrapper = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const InnerChatSettingButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;
`

export const ChatButtonWrapper = styled.div`
  margin-left: 10px;
`

export const ChatButtonContainer = styled.div`
  display: inline-flex;
`

export const ChatButton = styled(Button)`
  color: #fff;
  background-color: hsl(var(--color-twitch-orange-11));

  height: 30px;

  border-radius: var(--radius);

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: hsl(var(--color-twitch-orange-12));
  }
`

export const InnerChatButton = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`
