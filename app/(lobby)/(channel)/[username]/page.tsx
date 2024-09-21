"use client"

import * as React from "react"
import { sleep } from "@/lib"
import { useQuery } from "@tanstack/react-query"

import { liveChannels, type LiveChannelDataI } from "@/config/data"
import Background from "@/components/stream/common/background"
import LoadingWrapper from "@/components/stream/common/loading-wrapper"
import About from "@/components/stream/information/about"
import ChannelHeader from "@/components/stream/information/header"
import HeaderWrapper from "@/components/stream/information/header-wrapper"
import Video from "@/components/stream/video/video-player"
import ChannelWrapper from "@/components/wrapper/channel-wrapper"

export const runtime = "edge"

export default function ChannelPage({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const { data: channel, isFetching } = useQuery<LiveChannelDataI>({
    queryKey: ["channel", { username }],
    queryFn: async () => {
      await sleep(3000)
      return liveChannels.channels.find(({ slug }) => slug === `/${username}`)!
    },
    refetchOnWindowFocus: false,
  })

  if (!username) return null

  return (
    <LoadingWrapper>
      <ChannelWrapper>
        <Background />

        <HeaderWrapper>
          <ChannelHeader isFetching={isFetching} channel={channel} />

          <About isFetching={isFetching} channel={channel} />
        </HeaderWrapper>
      </ChannelWrapper>

      <Video isFetching={isFetching} />
    </LoadingWrapper>
  )
}
