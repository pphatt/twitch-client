import * as React from "react"
import { useVideoFullScreen, useVideoPlayControl } from "@/store/state/video"

import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ButtonContainer,
  ButtonDiv,
  ButtonOverlay,
  ButtonPlaceholder,
  ButtonSVG,
  ButtonWrapper,
  ChannelStatusContainer,
  ChannelStatusText,
  ChannelStatusTextIndicator,
  ChannelStatusWrapper,
  EmptyTag,
  PlayerControlsContainer,
  PlayerControlsGroup,
  PlayerControlsOverlay,
  PlayerControlsWrapper,
  ShareButton,
  SVGContainer,
  SVGWrapper,
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

  onRequestPlay: () => void

  onRequestFullScreen: () => void
}

export function PlayerControls({
  onActive,
  containerRef,
  onRequestPlay,
  onRequestFullScreen,
}: PlayerControlWrapperProps) {
  const { isFullScreen } = useVideoFullScreen()
  const { isPlaying } = useVideoPlayControl()

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
            <Hint
              delayDuration={250}
              skipDelayDuration={0}
              align={"start"}
              sideOffset={5}
              label={!isPlaying ? "Play (space/k)" : "Pause (space/k)"}
              disableHoverableContent={true}
              container={containerRef}
              forceVisible={onActive}
              keepAlive={true}
            >
              <ButtonDiv onClick={onRequestPlay}>
                <ShareButton aria-label="Pause (space/k)">
                  <ButtonWrapper>
                    <ButtonContainer>
                      <ButtonOverlay>
                        <ButtonPlaceholder />

                        <ButtonSVG
                          as={!isPlaying ? Icons.playVideo : Icons.pauseVideo}
                        />
                      </ButtonOverlay>
                    </ButtonContainer>
                  </ButtonWrapper>
                </ShareButton>
              </ButtonDiv>
            </Hint>
          </PlayerControlsGroup>

          <PlayerControlsGroup
            $direction={"end"}
            className="player-controls__right-control-group"
          >
            <Hint
              delayDuration={250}
              skipDelayDuration={0}
              align={"end"}
              sideOffset={5}
              label={isFullScreen ? "Exit Fullscreen (f)" : "Fullscreen (f)"}
              disableHoverableContent={true}
              container={containerRef}
              forceVisible={onActive}
            >
              <ButtonDiv onClick={onRequestFullScreen}>
                <ShareButton>
                  <SVGWrapper>
                    <SVGContainer>
                      {isFullScreen ? (
                        <Icons.exitFullscreen />
                      ) : (
                        <Icons.fullscreen />
                      )}
                    </SVGContainer>
                  </SVGWrapper>
                </ShareButton>
              </ButtonDiv>
            </Hint>
          </PlayerControlsGroup>
        </PlayerControlsOverlay>
      </PlayerControlsContainer>
    </PlayerControlsWrapper>
  )
}
