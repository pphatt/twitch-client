"use client"

import * as React from "react"

import { useMounted } from "@/hooks/use-mounted"
import SpinnerLoading from "@/components/loading/spinner-loading/spinner-loading"
import styles from "@/styles/components/stream/common/loading-wrapper.module.scss"

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const mounted = useMounted()

  if (!mounted) {
    return (
      <div className={styles["persistent-player"]}>
        <SpinnerLoading />
      </div>
    )
  }

  return <>{children}</>
}
