"use client"

import * as React from "react"
import { LiveKitRoom } from "@livekit/components-react"
import type { GetLivestreamInfoResponseDto } from "@modules/user/presentation/http/dto/response/livestream/get-livestearm-info.response.dto"

import { useViewerToken } from "@/hooks/useViewerToken.hooks"
import SharedLayout from "@/components/common/shared-layout"
import Chat from "@/components/stream/chat/chat-layout"
import ChatWrapper from "@/components/stream/chat/chat-wrapper"
import Background from "@/components/stream/common/background"
import LoadingWrapper from "@/components/stream/common/loading-wrapper"
import About from "@/components/stream/information/about"
import ChannelHeader from "@/components/stream/information/header"
import HeaderWrapper from "@/components/stream/information/header-wrapper"
import Video from "@/components/stream/video/video-player"
import ChannelWrapper from "@/components/wrapper/channel-wrapper"

export default function Room({
  accessToken,
  stream,
  isUserFollowed,
}: {
  accessToken: string | undefined
  stream: GetLivestreamInfoResponseDto
  isUserFollowed: boolean
}) {
  const { token, color, identity } = useViewerToken(stream.userId)

  return (
    <LiveKitRoom
      options={{
        publishDefaults: {
          videoCodec: "av1",
        },
      }}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
      className="stream-manager--page-view"
    >
      <SharedLayout>
        <LoadingWrapper>
          <ChannelWrapper>
            <Background />

            <HeaderWrapper>
              <ChannelHeader identity={identity} channel={stream} isUserFollowed={isUserFollowed} />

              <About channel={stream} />
            </HeaderWrapper>
          </ChannelWrapper>

          <Video id={stream.userId} />
        </LoadingWrapper>
      </SharedLayout>

      <ChatWrapper>
        <Chat
          username={stream.userName}
          hostIdentity={stream.userId}
          color={color}
          isCreator={false}
          accessToken={accessToken}
        />
      </ChatWrapper>
    </LiveKitRoom>
  )
}
