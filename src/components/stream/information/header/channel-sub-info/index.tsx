import * as React from "react"

import type { LiveChannelDataI } from "@/config/data"
import {
  LiveDescriptionText,
  LiveDescriptionWrapper,
  LiveInfoContainer,
  LiveInfoOverlay,
  StreamGame,
  StreamGameContainer,
  StreamGameLink,
  StreamGameTagContainer,
  StreamGameTagLink,
  StreamGameTagOverlay,
  StreamGameTagsContainer,
  StreamGameTagsWrapper,
  StreamGameTagWrapper,
  StreamGameWrapper,
} from "@/components/stream/information/header/channel-sub-info/style"

interface ChannelNameProps {
  channel: LiveChannelDataI
}

export default function ChannelSubInfo({ channel }: ChannelNameProps) {
  return (
    <LiveInfoContainer>
      <LiveInfoOverlay>
        <LiveDescriptionWrapper>
          <LiveDescriptionText
            data-a-target="stream-title"
            title={channel.title}
          >
            {channel.title}
          </LiveDescriptionText>
        </LiveDescriptionWrapper>

        <StreamGameWrapper>
          <StreamGameContainer>
            <StreamGameLink href={"/"}>
              <StreamGame>{channel.category}</StreamGame>
            </StreamGameLink>
          </StreamGameContainer>

          <StreamGameTagsWrapper>
            <StreamGameTagsContainer>
              {channel.tags.map(({ name, slug }, index) => (
                <StreamGameTagWrapper key={index}>
                  <StreamGameTagLink href={slug}>
                    <StreamGameTagContainer>
                      <StreamGameTagOverlay>
                        <span>{name}</span>
                      </StreamGameTagOverlay>
                    </StreamGameTagContainer>
                  </StreamGameTagLink>
                </StreamGameTagWrapper>
              ))}
            </StreamGameTagsContainer>
          </StreamGameTagsWrapper>
        </StreamGameWrapper>
      </LiveInfoOverlay>
    </LiveInfoContainer>
  )
}
