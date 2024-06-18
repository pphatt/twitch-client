import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/placeholder/live-channel-placeholder.module.scss"

interface LiveChannelPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LiveChannelPlaceholder({
  className,
  ...props
}: LiveChannelPlaceholderProps) {
  return <div className={cn(styles["placeholder"], className)} {...props}></div>
}
