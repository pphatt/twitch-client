import * as React from "react"

import { Icons } from "@/components/icons"
import {
  ChatIconContainer,
  ChatIconPlaceholder,
  ChatIconWrapper,
  ChatPausedFooterButton,
  ChatPausedFooterContainer,
  ChatPausedFooterLayout,
  ChatPausedFooterTextOverlay,
  ChatPausedFooterWrapper,
  ChatText,
  ChatTextWrapper,
} from "@/components/stream/chat/chat-paused-footer/style"

interface ChatPausedFooterProps {
  clickToLatestMessage: () => void
}

export default function ChatPausedFooter({
  clickToLatestMessage,
}: ChatPausedFooterProps) {
  const [onHover, setOnHover] = React.useState<boolean>(false)

  return (
    <ChatPausedFooterWrapper className="chat-paused-footer">
      <ChatPausedFooterButton
        onClick={clickToLatestMessage}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <ChatPausedFooterContainer>
          <ChatPausedFooterLayout>
            <ChatPausedFooterTextOverlay className="chat-paused-footer--button">
              <ChatIconWrapper>
                <ChatIconContainer>
                  <ChatIconPlaceholder />

                  {onHover ? <Icons.smallArrowDown /> : <Icons.pauseVideo />}
                </ChatIconContainer>
              </ChatIconWrapper>

              <ChatTextWrapper>
                <ChatText>
                  {onHover ? "new messages" : "Chat paused due to scroll"}
                </ChatText>
              </ChatTextWrapper>
            </ChatPausedFooterTextOverlay>
          </ChatPausedFooterLayout>
        </ChatPausedFooterContainer>
      </ChatPausedFooterButton>
    </ChatPausedFooterWrapper>
  )
}
