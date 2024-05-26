import * as React from "react"

import { LiveChannelCardSkeleton } from "@/components/loading/live-channel-card-skeleton"
import styles from "@/styles/live-channel/loading.module.scss"
import {LiveChannelPlaceholder} from "@/components/placeholder/live-channel-placeholder";

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
