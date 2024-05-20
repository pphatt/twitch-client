import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { Separator } from "@/components/ui/separator"
import { ChannelCard } from "@/components/common/channel-card"
import styles from "@/styles/components/recommend-live-channels.module.scss"

export function RecommendLiveChannels({
  channels,
}: {
  channels: IRecommendedLiveChannel[]
}) {
  return (
    <div className={styles["content-section"]}>
      <div className={styles["content-section-header"]}>
        <h2 className={styles["content-section-header-text"]}>
          <Link href={"/directory"}>Live channels</Link>
          <span> we think you’ll like</span>
        </h2>
      </div>

      <div className={styles["content-list-wrapper"]}>
        <div className={styles["content-list-container"]}>
          {channels.map((channel, index) => (
            <ChannelCard key={index} channel={channel} />
          ))}
        </div>

        <Separator />
      </div>
    </div>
  )
}
