import * as React from "react"

import SharedLayout from "@/components/common/shared-layout"
import Chat from "@/components/stream/chat/chat"
import ChannelVideo from "@/components/stream/video/video"

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SharedLayout>
        <>{children}</>

        <ChannelVideo />
      </SharedLayout>

      <Chat />
    </>
  )
}
