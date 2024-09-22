"use client"

import * as React from "react"

import { useMountedHooks } from "@/hooks/useMounted.hooks"
import SpinnerLoading from "@/components/loading/spinner-loading"
import { PersistentPlayer } from "@/components/stream/common/loading-wrapper/style"

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const mounted = useMountedHooks()

  if (!mounted) {
    return (
      <PersistentPlayer>
        <SpinnerLoading />
      </PersistentPlayer>
    )
  }

  return <>{children}</>
}
