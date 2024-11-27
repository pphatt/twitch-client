import * as React from "react"

import {
  ChannelLinkContainer,
  ChannelLinkCover,
  ChannelLinkOverlay,
  ChannelLinkWrapper,
  LiveIndicatorContainer,
  LiveIndicatorOverlay,
  LiveIndicatorWrapper,
  LiveText,
  LiveTextContainer,
  LiveTextWrapper,
} from "@/components/stream/information/header/channel-avatar/style"

interface ChannelAvatarProps {
  username: string
  image: string
  isLive: boolean | null
}

export function ChannelAvatar({ username, image, isLive }: ChannelAvatarProps) {
  return (
    <div
      style={
        {
          "--color-accent": "hsl(12 100% 63%)",
        } as React.CSSProperties
      }
    >
      <ChannelLinkWrapper href={`/${username}`}>
        <ChannelLinkContainer>
          <ChannelLinkCover />

          <ChannelLinkOverlay>
            <img src={image} alt={`${username}'s image`} />
          </ChannelLinkOverlay>
        </ChannelLinkContainer>

        <LiveIndicatorWrapper>
          <LiveIndicatorContainer>
            <LiveIndicatorOverlay>
              <LiveTextWrapper>
                <LiveTextContainer $isLive={isLive ?? false}>
                  <LiveText>{isLive ? "LIVE" : "OFFLINE"}</LiveText>
                </LiveTextContainer>
              </LiveTextWrapper>
            </LiveIndicatorOverlay>
          </LiveIndicatorContainer>
        </LiveIndicatorWrapper>
      </ChannelLinkWrapper>
    </div>
  )
}
