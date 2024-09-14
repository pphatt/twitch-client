import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

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
  const { isRightColumnClosedByUserAction } = useCacheLayout()

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

export function PlayerControls({
  onActive,
  containerRef,
  videoRef,
}: PlayerControlProps) {
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
              <VolumeControlGroup
                onActive={onActive}
                containerRef={containerRef}
                videoRef={videoRef}
              />
            </div>
          </PlayerControlsGroup>

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
