import * as React from "react"
import { sleep } from "@/utils/common"

import { liveChannels } from "@/config/data"
import LiveChannelsList from "@/components/common/live-channels-list"
import { LiveChannelPlaceholder } from "@/components/placeholder/live-channel-placeholder"

export default async function LiveChannelsPage() {
  const channels = liveChannels.channels

  await sleep(1000)

  return (
    <>
      <LiveChannelsList channels={channels} />

      {[...(Array(20) as number[])].map((_, index) => (
        <LiveChannelPlaceholder key={index} style={{ order: 4000 }} />
      ))}
    </>
  )
}
