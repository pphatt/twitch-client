"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout.persistent"
import { cn } from "@/utils/common"

import type { LiveChannelDataI } from "@/config/data"
import {
  ChannelRootContainer,
  ChannelRootWrapper,
} from "@/components/wrapper/channel-wrapper/style"

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
    <ChannelRootWrapper
      className={cn("channel-root", {
        "channel-root--watch-chat": !isRightColumnClosedByUserAction,
      })}
      style={{
        backgroundColor: channel?.themeColor,
      }}
    >
      <ChannelRootContainer>{children}</ChannelRootContainer>
    </ChannelRootWrapper>
  )
}
