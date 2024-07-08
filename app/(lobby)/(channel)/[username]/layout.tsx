import * as React from "react"

import ChannelVideo from "@/app/(lobby)/(channel)/[username]/_components/video"

export default function ChannelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <>{children}</>

      <ChannelVideo />
    </>
  )
}
