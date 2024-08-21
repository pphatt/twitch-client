import * as React from "react"

import type { LiveChannelDataI } from "@/config/data"
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
  username?: string
  channel: LiveChannelDataI
}

export function ChannelAvatar({ username, channel }: ChannelAvatarProps) {
  return (
    <div
      style={
        {
          "--color-accent": channel?.themeColor ?? "hsl(12 100% 63%)",
        } as React.CSSProperties
      }
    >
      <ChannelLinkWrapper href={`/${username}`}>
        <ChannelLinkContainer>
          <ChannelLinkCover />

          <ChannelLinkOverlay>
            <img src={channel?.channel.image} alt={channel?.channel.name} />
          </ChannelLinkOverlay>
        </ChannelLinkContainer>

        <LiveIndicatorWrapper>
          <LiveIndicatorContainer>
            <LiveIndicatorOverlay>
              <LiveTextWrapper>
                <LiveTextContainer>
                  <LiveText>LIVE</LiveText>
                </LiveTextContainer>
              </LiveTextWrapper>
            </LiveIndicatorOverlay>
          </LiveIndicatorContainer>
        </LiveIndicatorWrapper>
      </ChannelLinkWrapper>
    </div>
  )
}
