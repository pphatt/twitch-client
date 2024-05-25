import * as React from "react"

import { LiveChannelCardSkeleton } from "@/components/loading/live-channel-card-skeleton"
import styles from "@/styles/live-channel/loading.module.scss"

export default function Loading() {
  return (
    <>
      {[...(Array(20) as number[])].map((_, index) => (
        <LiveChannelCardSkeleton
          key={index}
          style={{ order: index }}
          className={styles["live-channel-card-skeleton"]}
        />
      ))}
    </>
  )
}
