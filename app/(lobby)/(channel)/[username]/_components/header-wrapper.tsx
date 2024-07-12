"use client"

import * as React from "react"
import { useChatSidebar } from "@/store/state/chat"
import { useVideoProperty } from "@/store/state/video"

import { cn } from "@/lib/utils"
import styles from "@/styles/application/channel/_components/header-wrapper.module.scss"

interface HeaderWrapperProps {
  children: React.ReactNode
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const { collapsed } = useChatSidebar()

  const { height } = useVideoProperty()

  return (
    <div
      className={cn(styles["channel-root__info"], {
        [`${styles["channel-root__info--with-chat"]}`]: !collapsed,
      })}
      style={{
        opacity: "1",
        marginTop: `${height}px`,
        minHeight: "0",
        transition: "transform 500ms ease 0ms",
      }}
    >
      <div className={styles["channel-info-content"]}>{children}</div>
    </div>
  )
}
