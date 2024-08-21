"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"
import { useVideoProperty } from "@/store/state/video"

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
  const resizeRef = React.useRef<HTMLDivElement | null>(null)

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const { setHeight } = useVideoProperty()

  /*
   * README:
   *  - should have a resize detector
   * */

  // for the innit height
  React.useEffect(() => {
    if (!resizeRef.current) {
      return
    }

    setHeight(resizeRef.current.clientHeight)
  }, [setHeight, resizeRef])

  // binding for resize window effect video dimension
  React.useEffect(() => {
    const handleVideoHeightChange = () => {
      if (!resizeRef.current) {
        return
      }

      setHeight(resizeRef.current.clientHeight)
    }

    window.addEventListener("resize", handleVideoHeightChange)
    return () => window.removeEventListener("resize", handleVideoHeightChange)
  }, [setHeight, resizeRef])

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
            <InnerLayoutOverlay ref={resizeRef}>
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
