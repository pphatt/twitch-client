"use client"

import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Separator } from "@/components/ui/separator/separator"
import { ChannelCard } from "@/components/common/channel-card/channel-card"
import {
  ContentListContainer,
  ContentListWrapper,
  ContentSection,
  ContentSectionHeader,
  ContentSectionHeaderText,
} from "@/components/share-styled/directory-content-layout/styled"

interface RecommendLiveChannelsProps {
  channels: IRecommendedLiveChannel[]
}

export default function RecommendLiveChannels({
  channels,
}: RecommendLiveChannelsProps) {
  const isScreenWidthAbove2073 = useMediaQuery("(min-width: 2073px)")
  const isScreenWidthAbove1773 = useMediaQuery("(min-width: 1773px)")
  const isScreenWidthAbove1473 = useMediaQuery("(min-width: 1473px)")
  const isScreenWidthAbove983 = useMediaQuery("(min-width: 983px)")

  const getNumberByScreenWidth = React.useMemo(() => {
    if (isScreenWidthAbove2073) {
      return 6
    } else if (isScreenWidthAbove1773) {
      return 5
    } else if (isScreenWidthAbove1473) {
      return 4
    } else if (isScreenWidthAbove983) {
      return 3
    }

    return 2
  }, [
    isScreenWidthAbove1473,
    isScreenWidthAbove1773,
    isScreenWidthAbove2073,
    isScreenWidthAbove983,
  ])

  return (
    <ContentSection>
      <ContentSectionHeader>
        <ContentSectionHeaderText>
          <Link href={"/directory"}>Live channels</Link>
          <span> we think you’ll like</span>
        </ContentSectionHeaderText>
      </ContentSectionHeader>

      <ContentListWrapper>
        <ContentListContainer>
          {channels.slice(0, getNumberByScreenWidth).map((channel, index) => (
            <ChannelCard key={index} channel={channel} />
          ))}
        </ContentListContainer>

        <Separator />
      </ContentListWrapper>
    </ContentSection>
  )
}
