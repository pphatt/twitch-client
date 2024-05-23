import * as React from "react"

import { liveChannels } from "@/config/data"
import { ChannelCard } from "@/components/common/channel-card"
import { LiveChannelPlaceholder } from "@/components/placeholder/live-channel-placeholder"
import styles from "@/styles/live-channel/page.module.scss"

export default function LiveChannelsPage() {
  const channels = liveChannels.channels

  return (
    <>
      {channels.map((channel, index) => (
        <ChannelCard
          key={index}
          channel={channel}
          className={styles["live-channel-card"]}
        />
      ))}

      {[...(Array(20) as number[])].map((_, index) => (
        <LiveChannelPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
