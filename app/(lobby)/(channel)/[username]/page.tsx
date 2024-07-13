"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"

import { liveChannels } from "@/config/data"
import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"
import styles from "@/styles/application/channel/page.module.scss"
import About from "@/components/stream/information/about"
import ChannelHeader from "@/components/stream/information/header"
import HeaderWrapper from "@/components/stream/information/header-wrapper"

export default function ChannelPage({
  params,
}: {
  params: { username: string }
}) {
  const { collapsed } = useChatSidebar()

  const mounted = useMounted()

  const { username } = params

  const channel = liveChannels.channels.find(
    ({ slug }) => slug === `/${username}`
  )!

  if (!mounted || !channel) return null

  return (
    <div
      className={cn(styles["channel-root-wrapper"], "channel-root", {
        "channel-root--watch-chat": !collapsed,
      })}
      style={{
        backgroundColor: channel?.themeColor,
      }}
    >
      <div className={styles["channel-root-container"]}>
        <div
          className={cn(styles["channel-root__player"], {
            [`${styles["channel-root__player--with-chat"]}`]: !collapsed,
          })}
        >
          <div className={styles["channel-root-layout"]}>
            <div
              style={{
                // transform: "scale(4)",
                opacity: "1",
                backgroundColor: "rgb(0, 0, 0)",
              }}
            >
              <div style={{ transform: "scale(0.25)" }}>
                <div
                  className={styles["channel-root__player-background"]}
                  style={{
                    backgroundImage: "url(/common/404_processing_320x180.png)",
                  }}
                >
                  <div
                    className={cn(
                      styles["channel-page__video-player"],
                      styles["channel-page__video-player--with-chat"]
                    )}
                  >
                    <div
                      className={styles["channel-video-placeholder-wrapper"]}
                    >
                      <div
                        className={
                          styles["channel-video-placeholder-container"]
                        }
                      ></div>
                      <div
                        className={styles["channel-video-placeholder-layout"]}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeaderWrapper>
          <ChannelHeader channel={channel} />

          <About channel={channel} />
        </HeaderWrapper>
      </div>
    </div>
  )
}
