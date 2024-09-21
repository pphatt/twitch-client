import styled from "styled-components"

export const StreamChatHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: hsl(var(--background));

  width: 100% !important;
  height: 50px;

  border-bottom: 1px solid hsla(var(--color-background-interactable-hover));

  padding-left: 10px;
  padding-right: 10px;

  z-index: 10;
`

export const StreamChatHeaderText = styled.div`
  display: flex;
  align-items: center;
`

export const ChatRoomHeaderLabel = styled.h4`
  color: hsl(var(--foreground-alt));

  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;

  text-transform: uppercase;
`
