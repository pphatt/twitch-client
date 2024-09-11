import * as React from "react"

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
}

export function PlayerControls({ onActive }: PlayerControlWrapperProps) {
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
            aria-label="Pause (space/k)"
          >
            <ButtonDiv>
              <ShareButton>
                <ButtonWrapper>
                  <ButtonContainer>
                    <ButtonOverlay>
                      <ButtonPlaceholder />

                      <ButtonSVG as={Icons.playVideo} />
                    </ButtonOverlay>
                  </ButtonContainer>
                </ButtonWrapper>
              </ShareButton>
            </ButtonDiv>
          </PlayerControlsGroup>

          <PlayerControlsGroup
            $direction={"end"}
            className="player-controls__right-control-group"
            aria-label="Fullscreen (f)"
          >
            <ButtonDiv>
              <ShareButton>
                <SVGWrapper>
                  <SVGContainer>
                    <Icons.fullscreen />
                  </SVGContainer>
                </SVGWrapper>
              </ShareButton>
            </ButtonDiv>
          </PlayerControlsGroup>
        </PlayerControlsOverlay>
      </PlayerControlsContainer>
    </PlayerControlsWrapper>
  )
}
