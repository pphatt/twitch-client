import styled from "styled-components"

import { Button } from "@/components/ui/button"

export const ChatPausedFooterWrapper = styled.div`
  position: absolute;
  bottom: 0;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);

  margin-bottom: 10px;
`

export const ChatPausedFooterButton = styled(Button)`
  color: #fff;
  background-color: transparent;

  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  vertical-align: middle;

  user-select: none;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.13);
  }
`

export const ChatPausedFooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ChatPausedFooterLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`

export const ChatPausedFooterTextOverlay = styled.div`
  width: 172.922px;
`

export const ChatIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;
`

export const ChatIconContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    min-height: 100%;

    fill: currentcolor;
  }
`

export const ChatIconPlaceholder = styled.div`
  padding-bottom: 100%;
`

export const ChatTextWrapper = styled.div`
  max-width: 273px;
`

export const ChatText = styled.p`
  font-size: 12px;
`
