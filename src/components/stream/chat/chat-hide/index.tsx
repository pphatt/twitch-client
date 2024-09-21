import * as React from "react"
import { useChatObserver } from "@/store/state/channel-chat"

import {
  ChatHideButton,
  ChatHideButtonWrapper,
  ChatHideLabel,
  ChatHideText,
  ChatHideTextWrapper,
  ChatHideWrapper,
} from "@/components/stream/chat/chat-hide/style"

export default function ChatHide() {
  const { setHide } = useChatObserver()

  const handleHide = React.useCallback(() => {
    setHide(false)
  }, [setHide])

  return (
    <ChatHideWrapper>
      <ChatHideTextWrapper>
        <ChatHideText>Chat is hidden.</ChatHideText>
      </ChatHideTextWrapper>

      <ChatHideButton onClick={handleHide}>
        <ChatHideButtonWrapper>
          <ChatHideLabel>Show Chat</ChatHideLabel>
        </ChatHideButtonWrapper>
      </ChatHideButton>
    </ChatHideWrapper>
  )
}
