import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout.persistent"

import FullscreenButton from "@/components/stream/video/video-control-player/fullscreen-button"
import PlayButton from "@/components/stream/video/video-control-player/play-button"
import VolumeControlGroup from "@/components/stream/video/video-control-player/volume-control-group"
import {
  ChannelEmptyPadding,
  ChannelStatusContainer,
  ChannelStatusText,
  ChannelStatusTextIndicator,
  ChannelStatusWrapper,
  EmptyTag,
  PlayerControlsContainer,
  PlayerControlsGroup,
  PlayerControlsOverlay,
  PlayerControlsWrapper,
  TopBarOverlayContainer,
  TopBarOverlayWrapper,
  TransitionOverlayPanel,
} from "@/components/stream/video/video-overlay/style"

interface VideoOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  onActive: boolean
  children: React.ReactNode
}

export function TransitionOverlay({
  onActive,
  children,
  ...props
}: VideoOverlayProps) {
  return (
    <TransitionOverlayPanel
      $onActive={onActive}
      aria-hidden={!onActive}
      {...props}
    >
      {children}
    </TransitionOverlayPanel>
  )
}

interface TopBarOverlayProps {
  isOffline?: "true" | "false" | "connecting"
}

export function TopBarOverlay({ isOffline = "false" }: TopBarOverlayProps) {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  return (
    <TopBarOverlayWrapper className="top-bar">
      <EmptyTag />

      <TopBarOverlayContainer>
        <ChannelStatusWrapper>
          <ChannelStatusContainer>
            {isOffline === "false" ? (
              <ChannelStatusTextIndicator>
                <ChannelStatusText>LIVE</ChannelStatusText>
              </ChannelStatusTextIndicator>
            ) : isOffline === "connecting" ? (
              <ChannelStatusTextIndicator $isOffline={isOffline}>
                <ChannelStatusText>CONNECTING</ChannelStatusText>
              </ChannelStatusTextIndicator>
            ) : (
              <ChannelStatusTextIndicator $isOffline={isOffline}>
                <ChannelStatusText>OFFLINE</ChannelStatusText>
              </ChannelStatusTextIndicator>
            )}
          </ChannelStatusContainer>

          <ChannelEmptyPadding />

          {isRightColumnClosedByUserAction && (
            <>
              <ChannelEmptyPadding />
              <ChannelEmptyPadding />
            </>
          )}
        </ChannelStatusWrapper>
      </TopBarOverlayContainer>
    </TopBarOverlayWrapper>
  )
}

export interface PlayerControlProps {
  onActive: boolean
  containerRef: React.RefObject<HTMLDivElement>
  videoRef: React.RefObject<HTMLVideoElement>
}

interface PlayerControlExtraProps extends PlayerControlProps {
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>

  isOffline?: boolean
}

export function PlayerControls({
  onActive,
  containerRef,
  videoRef,
  isPlaying,
  setIsPlaying,
  isOffline = false,
}: PlayerControlExtraProps) {
  return (
    <PlayerControlsWrapper
      className="player-controls"
      data-a-visible={onActive}
    >
      <PlayerControlsContainer>
        <PlayerControlsOverlay>
          {!isOffline && (
            <PlayerControlsGroup
              $direction={"start"}
              className="player-controls__left-control-group"
            >
              <PlayButton
                onActive={onActive}
                containerRef={containerRef}
                videoRef={videoRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />

              <div>
                <VolumeControlGroup
                  onActive={onActive}
                  containerRef={containerRef}
                  videoRef={videoRef}
                />
              </div>
            </PlayerControlsGroup>
          )}

          <PlayerControlsGroup
            $direction={"end"}
            className="player-controls__right-control-group"
          >
            <FullscreenButton onActive={onActive} containerRef={containerRef} />
          </PlayerControlsGroup>
        </PlayerControlsOverlay>
      </PlayerControlsContainer>
    </PlayerControlsWrapper>
  )
}
