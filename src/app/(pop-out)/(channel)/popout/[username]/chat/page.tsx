import * as React from "react"

import Chat from "@/components/stream/chat/chat-layout"

export const runtime = "edge"

export default function ChatPage() {
  return <Chat popout={true} />
}
