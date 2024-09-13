"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"
import { useVideoFullScreen } from "@/store/state/video"

import { cn } from "@/lib/utils"
import { useEventListener } from "@/hooks/use-event-listener"
import SpinnerLoading from "@/components/loading/spinner-loading"
import {
  PlayerControls,
  TopBarOverlay,
  TransitionOverlay,
} from "@/components/stream/video/video-overlay"
import {
  InnerLayoutContainer,
  InnerLayoutOverlay,
  InnerLayoutWrapper,
  LayoutContainer,
  LayoutPlaceholder,
  PersistentPlayer,
  PlayerOverlayBackground,
} from "@/components/stream/video/video-player/style"

interface ChannelVideoProps {
  isFetching: boolean
}

export default function ChannelVideo({ isFetching }: ChannelVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const [isMouseEntered, setIsMouseEntered] = React.useState<boolean>(false)
  const { isFullScreen, setIsFullScreen } = useVideoFullScreen()

  // temporary solution for live stream video fullscreen feature
  // there are many things to update along when isFullScreen
  React.useEffect(() => {
    const timeOutVideoOverlayAppear = setTimeout(() => {
      if (isMouseEntered) {
        setIsMouseEntered(false)
      }
    }, 5000)

    return () => clearTimeout(timeOutVideoOverlayAppear)
  }, [isMouseEntered])

  const onRequestFullScreen = () => {
    if (isFullScreen) {
      void document.exitFullscreen()
    } else if (containerRef?.current) {
      void containerRef.current.requestFullscreen()
    }
  }

  const handleFullscreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null
    setIsFullScreen(isCurrentlyFullscreen)
  }

  // addEventListener on the containerRef
  useEventListener("fullscreenchange", handleFullscreenChange, containerRef)

  return (
    <PersistentPlayer
      className={cn(
        {
          [`expand`]: !isRightColumnClosedByUserAction,
        },
        {
          [`collapse`]: isRightColumnClosedByUserAction,
        }
      )}
    >
      <LayoutContainer>
        <LayoutPlaceholder />

        <InnerLayoutWrapper
          className="video-player"
          data-a-target="video-player"
          data-a-player-type="site"
          data-test-selector="video-player__video-layout"
        >
          <InnerLayoutContainer ref={containerRef}>
            <InnerLayoutOverlay>
              <video
                ref={videoRef}
                playsInline
                src={"/demo-video/夜に駆ける.mp4"}
              ></video>

              <div
                onMouseMove={() => setIsMouseEntered(true)}
                onMouseLeave={() => setIsMouseEntered(false)}
                className={cn("video-player__default-player", {
                  "video-player__inactive": !isMouseEntered,
                })}
              >
                <div className="video-player__overlay">
                  <TransitionOverlay onActive={isMouseEntered}>
                    <TopBarOverlay />
                  </TransitionOverlay>

                  {isFetching && (
                    <PlayerOverlayBackground>
                      <SpinnerLoading />
                    </PlayerOverlayBackground>
                  )}

                  <TransitionOverlay onActive={isMouseEntered}>
                    <PlayerControls
                      onActive={isMouseEntered}
                      containerRef={containerRef.current}
                      onRequestFullScreen={onRequestFullScreen}
                    />
                  </TransitionOverlay>
                </div>
              </div>
            </InnerLayoutOverlay>
          </InnerLayoutContainer>
        </InnerLayoutWrapper>
      </LayoutContainer>
    </PersistentPlayer>
  )
}
