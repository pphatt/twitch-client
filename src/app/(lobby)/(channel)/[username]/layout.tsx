import * as React from "react"
import dynamic from "next/dynamic"

import SharedLayout from "@/components/common/shared-layout"

const ChatWrapper = dynamic(
  () => import("@/components/stream/chat/chat-wrapper"),
  {
    ssr: false,
  }
)

const Chat = dynamic(() => import("@/components/stream/chat/chat-layout"), {
  ssr: false,
})

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SharedLayout>{children}</SharedLayout>

      <ChatWrapper>
        <Chat />
      </ChatWrapper>
    </>
  )
}