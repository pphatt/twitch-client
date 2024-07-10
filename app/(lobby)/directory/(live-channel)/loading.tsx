import * as React from "react"

import { LiveChannelCardSkeleton } from "@/components/loading/live-channel-card-skeleton"
import { LiveChannelPlaceholder } from "@/components/placeholder/live-channel-placeholder"
import styles from "@/styles/application/live-channel/loading.module.scss"

export default function LiveChannelsLoading() {
  return (
    <>
      {[...(Array(20) as number[])].map((_, index) => (
        <LiveChannelCardSkeleton
          key={index}
          style={{ order: index }}
          className={styles["live-channel-card-skeleton"]}
        />
      ))}

      {[...(Array(20) as number[])].map((_, index) => (
        <LiveChannelPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
