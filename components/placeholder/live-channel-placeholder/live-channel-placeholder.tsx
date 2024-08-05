"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Placeholder } from "@/components/placeholder/live-channel-placeholder/style"
import styles from "@/styles/components/placeholder/live-channel-placeholder.module.scss"

interface LiveChannelPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LiveChannelPlaceholder({
  ...props
}: LiveChannelPlaceholderProps) {
  return <Placeholder {...props} />
}
