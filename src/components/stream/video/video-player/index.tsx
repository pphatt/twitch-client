"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout.persistent"
import { cn } from "@/utils/common"
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react"
import { ConnectionState, Track } from "livekit-client"

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
  id: string | undefined
}

export default function ChannelVideo({ id }: ChannelVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const [isMouseEntered, setIsMouseEntered] = React.useState<boolean>(false)

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

  // temporary solution for live stream video fullscreen feature
  // there are many things to update along when isFullScreen
  React.useEffect(() => {
    const timeOutVideoOverlayAppear = setTimeout(() => {
      if (isMouseEntered && isPlaying) {
        setIsMouseEntered(false)
      }
    }, 5000)

    return () => clearTimeout(timeOutVideoOverlayAppear)
  }, [isMouseEntered])

  const connectionState = useConnectionState()
  const participant = useRemoteParticipant(id ?? "")
  // const tracks = useTracks([
  //   Track.Source.Camera,
  //   Track.Source.Microphone,
  // ]).filter((track) => track.participant.identity === id)

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant!.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current)
      }
    })

  const isOffline =
    !participant &&
    (connectionState === ConnectionState.Disconnected ||
      connectionState === ConnectionState.Connected)

  const isLoading =
    connectionState === ConnectionState.Connecting ||
    connectionState === ConnectionState.Reconnecting

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
              <video ref={videoRef} playsInline />

              <div
                onMouseDown={() => setIsMouseEntered(true)}
                onMouseMove={() => setIsMouseEntered(true)}
                onMouseLeave={() => {
                  if (isPlaying) {
                    setIsMouseEntered(false)
                  }
                }}
                className={cn("video-player__default-player", {
                  "video-player__inactive": !isMouseEntered,
                })}
              >
                <div className="video-player__overlay">
                  <TransitionOverlay onActive={isMouseEntered}>
                    <TopBarOverlay
                      isOffline={isLoading ? "connecting" : `${isOffline}`}
                    />
                  </TransitionOverlay>

                  {isLoading && (
                    <PlayerOverlayBackground>
                      <SpinnerLoading />
                    </PlayerOverlayBackground>
                  )}

                  <TransitionOverlay onActive={isMouseEntered}>
                    <PlayerControls
                      onActive={isMouseEntered}
                      containerRef={containerRef}
                      videoRef={videoRef}
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
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
