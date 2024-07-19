import * as React from "react"

import { liveChannels } from "@/config/data"
import { sleep } from "@/lib/utils"
import Background from "@/components/stream/common/background"
import About from "@/components/stream/information/about"
import ChannelHeader from "@/components/stream/information/header"
import HeaderWrapper from "@/components/stream/information/header-wrapper"
import Video from "@/components/stream/video/video"
import ChannelWrapper from "@/components/wrapper/channel-wrapper"

export default async function ChannelPage({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const channel = liveChannels.channels.find(
    ({ slug }) => slug === `/${username}`
  )!

  const [] = await Promise.all([sleep(5000), sleep(1000)])

  return (
    <>
      <ChannelWrapper channel={channel}>
        <Background />

        <HeaderWrapper>
          <ChannelHeader channel={channel} />

          <About channel={channel} />
        </HeaderWrapper>
      </ChannelWrapper>

      <Video />
    </>
  )
}
