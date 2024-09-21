import * as React from "react"

import {
  ChatRoomHeaderLabel,
  StreamChatHeader,
  StreamChatHeaderText,
} from "@/components/stream/chat/chat-header/style"

export default function ChatHeader() {
  return (
    <StreamChatHeader role="region">
      <StreamChatHeaderText>
        <ChatRoomHeaderLabel
          data-test-selector="chat-room-header-label"
          id="chat-room-header-label"
        >
          Stream Chat
        </ChatRoomHeaderLabel>
      </StreamChatHeaderText>

      <div></div>
    </StreamChatHeader>
  )
}
