import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"

import SharedLayout from "@/components/common/shared-layout"
import ChannelVideo from "@/components/stream/video/video"

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
      <SharedLayout>
        <>{children}</>

        <ChannelVideo />
      </SharedLayout>

      <Suspense>
        <Chat />
      </Suspense>
    </>
  )
}
