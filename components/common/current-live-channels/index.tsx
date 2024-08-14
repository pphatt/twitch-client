"use client"

import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { Separator } from "@/components/ui/separator"
import {
  ContentListContainer,
  ContentListWrapper,
} from "@/components/common/current-live-channels/style"
import LiveChannelsList from "@/components/common/live-channels-list"
import { LiveChannelPlaceholder } from "@/components/placeholder/live-channel-placeholder"
import {
  ContentSection,
  ContentSectionHeader,
  ContentSectionHeaderText,
} from "@/components/share-styled/directory-content-layout/style"

interface CurrentLiveChannelsProps {
  channels: IRecommendedLiveChannel[]
}

export default function CurrentLiveChannels({
  channels,
}: CurrentLiveChannelsProps) {
  return (
    <ContentSection>
      <ContentSectionHeader>
        <ContentSectionHeaderText>
          <span>Recommended </span>
          <Link href={"/directory"}>Live Channels</Link>
        </ContentSectionHeaderText>
      </ContentSectionHeader>

      <ContentListWrapper>
        <ContentListContainer>
          <LiveChannelsList channels={channels} />

          {[...(Array(20) as number[])].map((_, index) => (
            <LiveChannelPlaceholder key={index} style={{ order: 4000 }} />
          ))}
        </ContentListContainer>

        <Separator />
      </ContentListWrapper>
    </ContentSection>
  )
}
