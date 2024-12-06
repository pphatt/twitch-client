"use client"

import * as React from "react"
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react"
import type { GetLivestreamInfoResponseDto } from "@modules/user/presentation/http/dto/response/livestream/get-livestearm-info.response.dto"

import ChannelAction from "@/components/stream/information/header/channel-action"
import { ChannelAvatar } from "@/components/stream/information/header/channel-avatar"
import ChannelNameComp from "@/components/stream/information/header/channel-name"
import ChannelSubInfo from "@/components/stream/information/header/channel-sub-info"
import FollowSection from "@/components/stream/information/header/follow-section"
import {
  ChannelAvatarWrapper,
  ChannelInfoContentContainer,
  ChannelInfoContentOverlay,
  ChannelInfoContentWrapper,
  ChannelInfoWrapper,
  LiveInfoWrapper,
} from "@/components/stream/information/header/style"
import styles from "@/components/stream/information/header/style.module.scss"

interface ChannelHeaderProps {
  identity: string
  channel: GetLivestreamInfoResponseDto
}

export default function ChannelHeader({
  identity,
  channel,
}: ChannelHeaderProps) {
  const username = channel.userName

  const participants = useParticipants()
  const participant = useRemoteParticipant(channel.userId)

  const isLive = !!participant
  const participantCount =
    participants.length - 1 - 1 < 0
      ? 0
      : participants.length -
        1 -
        (identity === `host-${channel.userId}` ? 1 : 0)

  return (
    <>
      <section
        style={{
          display: "block",
        }}
        id="live-channel-stream-information"
        aria-label="Stream Information"
      >
        <ChannelInfoContentWrapper>
          <ChannelInfoContentContainer>
            <ChannelInfoContentOverlay>
              <ChannelAvatarWrapper aria-label="Channel is Live">
                <ChannelAvatar
                  username={username}
                  isLive={isLive}
                  image={
                    channel.imageUrl !== ""
                      ? channel.imageUrl
                      : "/avatar/user-default-picture.png"
                  }
                />
              </ChannelAvatarWrapper>

              <ChannelInfoWrapper>
                <div className={styles["metadata-layout__support"]}>
                  <ChannelNameComp
                    username={username}
                    displayName={
                      channel.displayName !== ""
                        ? channel.displayName
                        : channel.userName
                    }
                  />

                  {identity !== `host-${channel.userId}` && (
                    <FollowSection destinationUserId={channel.userId} />
                  )}
                </div>

                <LiveInfoWrapper>
                  <ChannelSubInfo
                    title={channel.title}
                    altTitle={`${channel.userName} is currently streaming ${channel.livestreamCategories[0]?._name ?? ""}`}
                    categoryName={channel.livestreamCategories[0]?._name ?? ""}
                  />

                  <ChannelAction isLive={isLive} view={participantCount} />
                </LiveInfoWrapper>
              </ChannelInfoWrapper>
            </ChannelInfoContentOverlay>
          </ChannelInfoContentContainer>
        </ChannelInfoContentWrapper>
      </section>
    </>
  )
}
