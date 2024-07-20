"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import type { LiveChannelDataI } from "@/config/data"
import { cn } from "@/lib/utils"
import styles from "@/styles/components/wrapper/channel-wrapper.module.scss"

interface ChannelWrapperProps {
  channel?: LiveChannelDataI
  children: React.ReactNode
}

export default function ChannelWrapper({
  channel,
  children,
}: ChannelWrapperProps) {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  return (
    <div
      className={cn(styles["channel-root-wrapper"], "channel-root", {
        "channel-root--watch-chat": !isRightColumnClosedByUserAction,
      })}
      style={{
        backgroundColor: channel?.themeColor,
      }}
    >
      <div className={styles["channel-root-container"]}>{children}</div>
    </div>
  )
}
