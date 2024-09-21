"use client"

import * as React from "react"
import { sleep } from "@/utils/common"
import { useInfiniteQuery } from "@tanstack/react-query"

import type { IRecommendedLiveChannel } from "@/types/common"
import {
  ChannelCardWrapper as ChannelCard,
  InfiniteScrollWrapper as InfiniteScroll,
  LiveChannelCardSkeletonWrapper as LiveChannelCardSkeleton,
} from "@/components/common/live-channels-list/style"

interface LiveChannelsListProps {
  channels: IRecommendedLiveChannel[]
}

export default function LiveChannelsList({ channels }: LiveChannelsListProps) {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["channels-list"],
      queryFn: async ({ pageParam = 1 }) => {
        if (pageParam === 2) {
          return []
        }

        await sleep(1000)
        return channels
      },
      initialData: () => {
        return {
          pages: [channels],
          pageParams: [],
        }
      },
      initialPageParam: 1,
      getNextPageParam: (_, pages) => {
        if (pages.length === 2) {
          return undefined
        }

        return pages.length + 1
      },
      refetchOnWindowFocus: false,
    })

  const channelsData = React.useMemo(() => {
    return data.pages.flatMap((channel) => channel)
  }, [data])

  return (
    <InfiniteScroll
      next={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
    >
      {channelsData.map((channel, index) => (
        <ChannelCard key={index} channel={channel} />
      ))}

      {isFetchingNextPage &&
        [...(Array(8) as number[])].map((_, index) => (
          <LiveChannelCardSkeleton
            key={index + channelsData.length}
            style={{ order: index + channelsData.length }}
          />
        ))}
    </InfiniteScroll>
  )
}
