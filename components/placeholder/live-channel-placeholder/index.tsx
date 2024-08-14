"use client"

import * as React from "react"

import { Placeholder } from "@/components/placeholder/live-channel-placeholder/style"

interface LiveChannelPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LiveChannelPlaceholder({
  ...props
}: LiveChannelPlaceholderProps) {
  return <Placeholder {...props} />
}
