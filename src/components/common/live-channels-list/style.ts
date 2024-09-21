import styled, { css } from "styled-components"

import { ChannelCard } from "@/components/common/channel-card"
import InfiniteScroll from "@/components/infinite-scroll"
import { LiveChannelCardSkeleton } from "@/components/loading/lobby/live-channel-card-skeleton"

export const InfiniteScrollWrapper = styled(InfiniteScroll)`
  flex: 1 0 auto;

  max-width: 100%;
  width: 300px;

  padding: 0 5px;
`

const shareCss = css`
  flex: 1 0 auto;

  width: 300px;
`

export const ChannelCardWrapper = styled(ChannelCard)`
  ${shareCss}
`

export const LiveChannelCardSkeletonWrapper = styled(LiveChannelCardSkeleton)`
  ${shareCss}
`
