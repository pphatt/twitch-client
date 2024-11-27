import * as React from "react"

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
  title: string | null
  altTitle: string
  categoryName: string
}

export default function ChannelSubInfo({
  title,
  altTitle,
  categoryName,
}: ChannelNameProps) {
  return (
    <LiveInfoContainer>
      <LiveInfoOverlay>
        <LiveDescriptionWrapper>
          <LiveDescriptionText
            data-a-target="stream-title"
            title={title ?? altTitle}
          >
            {title ?? altTitle}
          </LiveDescriptionText>
        </LiveDescriptionWrapper>

        <StreamGameWrapper>
          <StreamGameContainer>
            <StreamGameLink href={"/"}>
              <StreamGame>{categoryName}</StreamGame>
            </StreamGameLink>
          </StreamGameContainer>

          <StreamGameTagsWrapper>
            <StreamGameTagsContainer>
              {[{ name: "" }].map(({ name }, index) => (
                <StreamGameTagWrapper key={index}>
                  <StreamGameTagLink>
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
