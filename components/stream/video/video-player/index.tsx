"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import { cn } from "@/lib/utils"
import SpinnerLoading from "@/components/loading/spinner-loading"
import {
  InnerLayoutContainer,
  InnerLayoutOverlay,
  InnerLayoutWrapper,
  LayoutContainer,
  LayoutPlaceholder,
  PersistentPlayer,
  PlayerOverlayBackground,
} from "@/components/stream/video/video-player/style"
import styles from "@/components/stream/video/video-player/style.module.scss"

interface ChannelVideoProps {
  isFetching: boolean
}

export default function ChannelVideo({ isFetching }: ChannelVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  return (
    <PersistentPlayer
      className={cn(
        {
          [`${styles["expand"]}`]: !isRightColumnClosedByUserAction,
        },
        {
          [`${styles["collapse"]}`]: isRightColumnClosedByUserAction,
        }
      )}
    >
      <LayoutContainer>
        <LayoutPlaceholder />

        <InnerLayoutWrapper>
          <InnerLayoutContainer>
            <InnerLayoutOverlay>
              {!isFetching && (
                <video
                  ref={videoRef}
                  playsInline
                  controls={true}
                  src={"/demo-video/夜に駆ける.mp4"}
                ></video>
              )}

              {isFetching && (
                <div
                  className={cn(
                    "video-player__default-player",
                    styles["video-player__inactive"]
                  )}
                >
                  <div className={styles["video-player__overlay"]}>
                    <div></div>

                    <PlayerOverlayBackground>
                      <SpinnerLoading />
                    </PlayerOverlayBackground>
                  </div>
                </div>
              )}
            </InnerLayoutOverlay>
          </InnerLayoutContainer>
        </InnerLayoutWrapper>
      </LayoutContainer>
    </PersistentPlayer>
  )
}
