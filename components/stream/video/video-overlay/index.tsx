import * as React from "react"

import FullscreenButton from "@/components/stream/video/video-control-player/fullscreen-button"
import PlayButton from "@/components/stream/video/video-control-player/play-button"
import VolumeControl from "@/components/stream/video/video-control-player/volume-control"
import {
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
  VolumeControlGroup,
} from "@/components/stream/video/video-overlay/style"

interface VideoOverlayProps {
  onActive: boolean
  children: React.ReactNode
}

export function TransitionOverlay({ onActive, children }: VideoOverlayProps) {
  return (
    <TransitionOverlayPanel $onActive={onActive} aria-hidden={!onActive}>
      {children}
    </TransitionOverlayPanel>
  )
}

interface TopBarOverlayProps {}

export function TopBarOverlay({}: TopBarOverlayProps) {
  return (
    <TopBarOverlayWrapper className="top-bar">
      <EmptyTag />

      <TopBarOverlayContainer>
        <ChannelStatusWrapper>
          <ChannelStatusContainer>
            <ChannelStatusTextIndicator>
              <ChannelStatusText>LIVE</ChannelStatusText>
            </ChannelStatusTextIndicator>
          </ChannelStatusContainer>
        </ChannelStatusWrapper>
      </TopBarOverlayContainer>
    </TopBarOverlayWrapper>
  )
}

interface PlayerControlWrapperProps {
  onActive: boolean
  containerRef: HTMLDivElement | null
  videoRef: HTMLVideoElement | null
}

export function PlayerControls({
  onActive,
  containerRef,
  videoRef,
}: PlayerControlWrapperProps) {
  return (
    <PlayerControlsWrapper
      className="player-controls"
      data-a-visible={onActive}
    >
      <PlayerControlsContainer>
        <PlayerControlsOverlay>
          <PlayerControlsGroup
            $direction={"start"}
            className="player-controls__left-control-group"
          >
            <PlayButton
              onActive={onActive}
              containerRef={containerRef}
              videoRef={videoRef}
            />

            <div>
              <VolumeControlGroup>
                <VolumeControl
                  onActive={onActive}
                  containerRef={containerRef}
                  videoRef={videoRef}
                />
              </VolumeControlGroup>
            </div>
          </PlayerControlsGroup>

          <PlayerControlsGroup
            $direction={"end"}
            className="player-controls__right-control-group"
          >
            <FullscreenButton
              onActive={onActive}
              containerRef={containerRef}
              videoRef={videoRef}
            />
          </PlayerControlsGroup>
        </PlayerControlsOverlay>
      </PlayerControlsContainer>
    </PlayerControlsWrapper>
  )
}
