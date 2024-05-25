import type { IFollowChannelsData } from "@/types"
import classNames, { type ArgumentArray } from "classnames"

export function cn(...inputs: ArgumentArray) {
  return classNames(inputs)
}

export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const formatViewCount = (view: number) => {
  return (
    Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(view) ?? "Not available"
  )
}

export const orderFollowedChannel = (channels: IFollowChannelsData[]) => {
  const sortedChannels = channels.sort((a, b) => {
    // Compare isLive first
    if (a.isLive === b.isLive) {
      // If both are live, sort by view in descending order
      if (a.isLive) {
        return (b.view || 0) - (a.view || 0)
      }
      // If both are not live, keep original order (or apply different sorting if needed)
      return 0
    }
    // Otherwise, sort by isLive (true comes before false)
    return (b.isLive ? 1 : 0) - (a.isLive ? 1 : 0)
  })

  return sortedChannels
}
