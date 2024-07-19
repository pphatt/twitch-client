"use client"

import * as React from "react"
import type { IRecommendedLiveChannel } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"

import { sleep } from "@/lib/utils"
import { ChannelCard } from "@/components/common/channel-card"
import InfiniteScroll from "@/components/infinite-scroll"
import { LiveChannelCardSkeleton } from "@/components/loading/lobby/live-channel-card-skeleton"
import styles from "@/styles/components/live-channels-list.module.scss"

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
      refClassName={styles["live-channel-placeholder"]}
    >
      {channelsData.map((channel, index) => (
        <ChannelCard
          key={index}
          channel={channel}
          className={styles["live-channel-card"]}
        />
      ))}

      {isFetchingNextPage &&
        [...(Array(8) as number[])].map((_, index) => (
          <LiveChannelCardSkeleton
            key={index + channelsData.length}
            style={{ order: index + channelsData.length }}
            className={styles["live-channel-card-skeleton"]}
          />
        ))}
    </InfiniteScroll>
  )
}
