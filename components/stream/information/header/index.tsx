"use client"

import * as React from "react"
import FollowSection from "components/stream/information/header/follow-section"

import type { LiveChannelDataI } from "@/config/data"
import ChannelAction from "@/components/stream/information/header/channel-action"
import { ChannelAvatar } from "@/components/stream/information/header/channel-avatar"
import ChannelNameComp from "@/components/stream/information/header/channel-name"
import ChannelSubInfo from "@/components/stream/information/header/channel-sub-info"
import {
  ChannelAvatarWrapper,
  ChannelInfoContentContainer,
  ChannelInfoContentOverlay,
  ChannelInfoContentWrapper,
  ChannelInfoLoading,
  ChannelInfoLoadingWrapper,
  ChannelInfoWrapper,
  LiveInfoWrapper,
} from "@/components/stream/information/header/style"
import styles from "@/components/stream/information/header/style.module.scss"

interface ChannelHeaderProps {
  isFetching: boolean
  channel?: LiveChannelDataI
}

export default function ChannelHeader({
  isFetching,
  channel,
}: ChannelHeaderProps) {
  const username = channel?.channel.name

  return (
    <>
      <section
        style={{
          display: "block",
        }}
        id="live-channel-stream-information"
        aria-label="Stream Information"
      >
        {!isFetching && channel && (
          <ChannelInfoContentWrapper>
            <ChannelInfoContentContainer>
              <ChannelInfoContentOverlay>
                <ChannelAvatarWrapper aria-label="Channel is Live">
                  <ChannelAvatar username={username} channel={channel} />
                </ChannelAvatarWrapper>

                <ChannelInfoWrapper>
                  <div className={styles["metadata-layout__support"]}>
                    <ChannelNameComp username={username} channel={channel} />

                    <FollowSection />
                  </div>

                  <LiveInfoWrapper>
                    <ChannelSubInfo channel={channel} />

                    <ChannelAction channel={channel} />
                  </LiveInfoWrapper>
                </ChannelInfoWrapper>
              </ChannelInfoContentOverlay>
            </ChannelInfoContentContainer>
          </ChannelInfoContentWrapper>
        )}

        {isFetching && (
          <ChannelInfoLoadingWrapper>
            <ChannelInfoLoading />
          </ChannelInfoLoadingWrapper>
        )}
      </section>

      {isFetching && <div style={{ minHeight: "750px" }}></div>}
    </>
  )
}
