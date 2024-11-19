import * as React from "react"

import {
  ChatHideText,
  ChatHideTextWrapper,
  ChatHideWrapper,
} from "@/components/stream/chat/chat-hide/style"

interface ChatDisableProps {
  username: string
}

export default function ChatDisable({ username }: ChatDisableProps) {
  return (
    <ChatHideWrapper>
      <ChatHideTextWrapper>
        <ChatHideText>Chat is hidden.</ChatHideText>
        <ChatHideText>Because {username} currently not streaming.</ChatHideText>
      </ChatHideTextWrapper>
    </ChatHideWrapper>
  )
}
