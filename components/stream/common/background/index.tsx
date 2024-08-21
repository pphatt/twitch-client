"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import {
  ChannelVideoPlaceholderContainer,
  ChannelVideoPlaceholderLayout,
  ChannelVideoPlaceholderWrapper,
} from "@/components/stream/common/background/style"
import styles from "@/components/stream/common/background/style.module.scss"

export default function Background() {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  return (
    <div
      className={cn(styles["channel-root__player"], {
        [`${styles["channel-root__player--with-chat"]}`]:
          !isRightColumnClosedByUserAction,
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
                <ChannelVideoPlaceholderWrapper>
                  <ChannelVideoPlaceholderContainer />

                  <ChannelVideoPlaceholderLayout />
                </ChannelVideoPlaceholderWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
