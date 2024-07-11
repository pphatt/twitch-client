import * as React from "react"

import SharedLayout from "@/components/common/shared-layout"
import Chat from "@/app/(lobby)/(channel)/[username]/_components/chat"
import ChannelVideo from "@/app/(lobby)/(channel)/[username]/_components/video"

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
