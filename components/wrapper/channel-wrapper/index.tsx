"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"

import type { LiveChannelDataI } from "@/config/data"
import { cn } from "@/lib"
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
