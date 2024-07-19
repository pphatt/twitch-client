import * as React from "react"
import dynamic from "next/dynamic"

import SharedLayout from "@/components/common/shared-layout"

const Chat = dynamic(() => import("@/components/stream/chat/chat"), {
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

      <Chat />
    </>
  )
}
