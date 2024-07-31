"use client"

import * as React from "react"
import { useCacheLayout } from "@/store/persistent/layout"
import { useVideoProperty } from "@/store/state/video"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/stream/information/header-wrapper.module.scss"

interface HeaderWrapperProps {
  children: React.ReactNode
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const { isRightColumnClosedByUserAction } = useCacheLayout()

  const { height } = useVideoProperty()

  return (
    <div
      className={cn(styles["channel-root__info"], {
        [`${styles["channel-root__info--with-chat"]}`]:
          !isRightColumnClosedByUserAction,
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
