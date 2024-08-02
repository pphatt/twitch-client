import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { Separator } from "@/components/ui/separator/separator"
import LiveChannelsList from "@/components/live-channels-list"
import { LiveChannelPlaceholder } from "@/components/placeholder/live-channel-placeholder"
import styles from "@/styles/components/current-live-channels.module.scss"

interface CurrentLiveChannelsProps {
  channels: IRecommendedLiveChannel[]
}

export default function CurrentLiveChannels({
  channels,
}: CurrentLiveChannelsProps) {
  return (
    <div className={styles["content-section"]}>
      <div className={styles["content-section-header"]}>
        <h2 className={styles["content-section-header-text"]}>
          <span>Recommended </span>
          <Link href={"/directory"}>Live Channels</Link>
        </h2>
      </div>

      <div className={styles["content-list-wrapper"]}>
        <div className={styles["content-list-container"]}>
          <LiveChannelsList channels={channels} />

          {[...(Array(20) as number[])].map((_, index) => (
            <LiveChannelPlaceholder key={index} style={{ order: 4000 }} />
          ))}
        </div>

        <Separator />
      </div>
    </div>
  )
}
